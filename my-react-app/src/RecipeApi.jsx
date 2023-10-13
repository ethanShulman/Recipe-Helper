import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { NameContext } from "./App";
import { useContext } from "react";

/* The code is defining a functional component called `RecipeApi`. Inside the component, it is using
the `useState` hook to define two state variables: `ingredient` and `allResults`. The `ingredient`
state variable is used to store the value of the input field, while the `allResults` state variable
is used to store the results of the API call. */
const RecipeApi = () => {
    const [ingredient, setIngredient] = useState("");
    const [allResults, setAllResults] = useState([]);
    const { username, setUsername } = useContext(NameContext);
    const apiKey = import.meta.env.VITE_SOME_KEY


  /* The `fetchRecipe` function is an asynchronous function that is responsible for making an API call
  to retrieve recipe data based on the provided ingredient. */
  const fetchRecipe = async () => {
    const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${ingredient}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "{apiKey}",
        "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
      },

    };

/* The `try` block is used to execute the code inside it. In this case, it is making an API call to
retrieve recipe data based on the provided ingredient. */
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setAllResults(result);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * The above code defines two functions, handleInputChange and handleSubmit, in a JavaScript React
   * component.
   */
  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipe();
  };
  

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={ingredient}
            onChange={handleInputChange}
            placeholder="Enter ingredient"
            className="input-field"
          />
          {/* <button type="submit">Search</button> */}
        </form>
      </div>

      {allResults.length > 0 && (
        <Carousel className="carousel-font">
          {allResults.map((data, index) => (
            <Carousel.Item className="carousel-item" key={index}>
              <Card>
                <h2>{username}'s cookbook</h2>
                <h4>⬅️ Click right or left to see another recipe! ➡️</h4>
                <Card.Body>
                  <Card.Header as="h2">
                    Recipe Name:{data.title} <br />
                    Serving Size:{data.servings}
                  </Card.Header>
                  <Card.Title as="h2">Instructions:</Card.Title>
                  <Card.Text>
                    <h1>{data.instructions}</h1>
                  </Card.Text>
                  <Card.Text>
                    <h1>Ingredients:{data.ingredients}</h1>
                  </Card.Text>
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
