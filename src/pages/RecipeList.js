import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RecipeCard from '../components/card/RecipeCard';
import { appContext } from "../context/AppContext";

export const RecipeList = () => {

    const { selectedCategory } = useContext(appContext);
    const [recipeList, setRecipeList] = useState();

    const getRecipeList = async () => {
        try {
            const response = await axios.get(`https://recipe-blog-django-backend.herokuapp.com/api/list/${selectedCategory}`)
            console.log(response?.data?.results);
            setRecipeList(response?.data?.results);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getRecipeList()
    }, [])

    return (
        <div style = {{display: 'flex', margin: '3%'}} >
            {recipeList?.map((recipe) => (
                <div>  
                <RecipeCard
                    id = {recipe?.id}
                    author = {recipe?.author}
                    count_ingredient = {recipe?.count_ingredient}
                    count_like = {recipe?.count_like}
                    image = {recipe?.image}
                    title = {recipe?.title}
                    info = {recipe?.info}
                    published_date = {recipe?.published_date}
                    method = {recipe?.method}
                />
                {console.log(recipe?.image)}
                </div>
            ))}
        </div>
    )
}