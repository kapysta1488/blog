import React from 'react'
import { Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import FullPostPage from './pages/FullPostPage'
import HomePage from './pages/HomePage'

function App() {
    return (
        <>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/post/:id" component={FullPostPage} />
        </>
    )
}

export default App;