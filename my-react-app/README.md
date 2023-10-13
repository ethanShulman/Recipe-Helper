# Recipe Helper Application

This project is a React-based web application using HTML, CSS, and Javascript that allows users to search for recipes based on ingredients. It utilizes the Recipe API to fetch recipe data and display it in a carousel format
Use this app to find some great recipes using random ingredients from your kitchen!

------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Access My Site @ https://recipe-helper-nine.vercel.app/

------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Installation

To get started with this project, follow these steps:

1. Clone the repository from my GitHub to your local machine

git clone https://github.com/ethanShulman/Recipe-Helper


2. Install the required dependencies using npm

npm install
npm install bootstrap
npm install react-router-dom

------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Usage

To run the project, you can use the following command:

npm run dev

This will start the development server and open the application in your default web browser / localHost

------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Components

------------------------------------------------------------------------------------------------------------------------------------------------------------------
### RecipeApi Component

Responsible for fetching and displaying recipes. It includes the following features:

- Input field for entering ingredients
- Fetching recipes from the Recipe API
- Displaying recipes in a carousel format
- Displaying recipe details including name, serving size, instructions, and ingredients
- Simply type an ingredient or two, hit enter / return, and see what recipes unfold before your very eyes

------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Home Component

Just the home page:

- Displays the homepage
- Default route

------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Donations Component

A Donations page if the user would like to donate to me (the developer):

- Says Donations greatly appreciated 😁 and points to my Buy Me a Coffee donation widget
- If you'd like to buy me a taco you're more than welcome

------------------------------------------------------------------------------------------------------------------------------------------------------------------
## NavBar Component

Handles the navigation for application:

- Creates a navigation bar using three buttons
- Handles a username input using useContext if the user would like to personalize the app / the recipes they're reading

------------------------------------------------------------------------------------------------------------------------------------------------------------------
## App Component

 Sets routing and structure of application, manages the username state throughout every endpoint using createContext / useContext
 
- Defines the different routes using 'react-router-dom'
- Parent component of all the other components (Home.jsx, RecipeApi.jsx, Donations.jsx and NavBar.jsx)

------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Dependencies

- React
- React Bootstrap
- Bootstrap
- React Router DOM

------------------------------------------------------------------------------------------------------------------------------------------------------------------
## API

Recipe API from API Ninjas
https://api-ninjas.com/api/recipe

------------------------------------------------------------------------------------------------------------------------------------------------------------------

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
