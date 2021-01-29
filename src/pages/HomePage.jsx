import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import axios from 'axios';
import Navigation from '../components/Navigation';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const parser = (response) => {
        setPosts(response);
    };

    async function getResponse() {
        try {
            const response = await axios.get('https://5c3755177820ff0014d92711.mockapi.io/posts');
            parser(response.data);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getResponse();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Navigation />
            {loading ? (
                <h1>Загрузка...</h1>
            ) : (
                <>
                    <CardColumns className="mt-4">
                        {posts.map((obj) => (
                            <Card key={obj.id}>
                                <Card.Img src={obj.image} />
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/post/${obj.id}`}>{obj.title}</Link>
                                    </Card.Title>
                                    <Card.Text>{obj.text}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{obj.createdAt}</small>
                                </Card.Footer>
                            </Card>
                        ))}
                    </CardColumns>
                </>
            )}
        </>
    );
}
