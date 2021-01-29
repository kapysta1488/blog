import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

export default function FullPostPage({ match }) {
    const [post, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoaging] = useState(true);

    const parserComments = (response) => {
        setComments(response);
    };

    const parserPost = (response) => {
        setPosts(response);
    };

    async function getResponse() {
        try {
            const responsePost = await axios.get(
                `https://5c3755177820ff0014d92711.mockapi.io/posts/${match.params.id}`,
            );
            const responseComments = await axios.get(
                `https://5c3755177820ff0014d92711.mockapi.io/posts/${match.params.id}/comments`,
            );
            await parserPost(responsePost.data);
            await parserComments(responseComments.data);
        } finally {
            setLoaging(false);
        }
    }

    useEffect(() => {
        getResponse();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {loading ? (
                <h1>Загрузка...</h1>
            ) : (
                <>
                    <Link to="/">
                        <Button>Назад</Button>
                    </Link>
                    <Card className="mt-4">
                        <Card.Img src={post.image} />
                        <Card.Body>
                            <Card.Title>
                                <Link to={`post/${post.id}`}>{post.title}</Link>
                            </Card.Title>
                            <Card.Text>{post.text}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{post.createdAt}</small>
                        </Card.Footer>
                    </Card>
                    <Card.Text className="mt-4" as="h2">
                        Комментарии:
                    </Card.Text>
                    {comments.map((obj) => (
                        <Card key={obj.id} className="mt-4">
                            <Card.Body>
                                <Card.Text as="h5">{obj.name}</Card.Text>
                                <Card.Text>{obj.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </>
            )}
        </>
    );
}
