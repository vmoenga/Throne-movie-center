// App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './NavigationBar.jsx';
import Description from './Description.jsx';
import Footer from './footer.jsx';
import MovieCard from './MovieCard.jsx';
import ContactForm from './ContactForm.jsx';

// URL of the OMDB API
const API_URL = 'https://omdbapi.com?apikey=fe2f6c44';

// Functional component App
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);// Fetching movies using OMDB API
        const data = await response.json();// Extracting JSON data from the response
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies('SpiderMan');// Fetching initial movies (SpiderMan) when component mounts
    }, []);
    }, []);

 // Rendering JSX elements
    return (
        <div className="app">
            <NavigationBar />
            <Description />
            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
                    alt="search icon"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )}
            <ContactForm />
            <Footer />
        </div>
    );
};

export default App;
