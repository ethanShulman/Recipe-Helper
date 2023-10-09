import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


const RecipeApi = () => {
    const [ingredient, setIngredient] = useState('');
    const [allResults, setAllResults] = useState([]);

    const fetchRecipe = async () => { 
        const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${ingredient}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd17394ccc1mshee0c1a995db6e10p18d818jsne9e96816334f',
                'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setAllResults(result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        setIngredient(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchRecipe();
    }

    // useEffect(() => {
    //     fetchRecipe()
    // })

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={ingredient}
                        onChange={handleInputChange}
                        placeholder="Enter ingredient"
                        className='input-field'
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            
            {allResults.length > 0 && (
                <Carousel>
                    {allResults.map((data, index) => (
                        <Carousel.Item key={index}>
                            <Card style={{ width: "40rem" }}>
                            <h2>Click right or left to see another recipe!</h2>
                                <Card.Body>
                                    <Card.Header as='h2'>Recipe Name:{data.title} <br />Serving Size:{data.servings}</Card.Header>
                                    <Card.Title as='h2'>Instructions:</Card.Title>
                                    <Card.Text><h2>{data.instructions}</h2></Card.Text>
                                    <Card.Text><h2>Ingredients:{data.ingredients}</h2></Card.Text>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </>
    );
};

export default RecipeApi;
