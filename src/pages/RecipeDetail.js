import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeDetailCard from '../components/card/RecipeDetailCard';
import { useParams } from "react-router-dom";


export const RecipeDetail = () => {

    const [recipeDetail, setRecipeDetail] = useState();

    let { id } = useParams();

    const getRecipeDetail = async () => {
        try {
            const response = await axios.get(`https://recipe-blog-django-backend.herokuapp.com/api/recipeDetail/${id}`)
            console.log(response?.data?.results);
            // setRecipeDetail(response?.data?.results);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getRecipeDetail()
        // console.log('Recipe Detail',recipeDetail);
    }, [id])

    return (
        <div style = {{display: 'flex', margin: '3%'}} >
            Recipe Detail Page
                {/* <RecipeDetailCard
                    id = {recipe?.id}
                    author = {recipe?.author}
                    count_ingredient = {recipe?.count_ingredient}
                    count_like = {recipe?.count_like}
                    image = {recipe?.image}
                    title = {recipe?.title}
                    info = {recipe?.info}
                    published_date = {recipe?.published_date}
                    method = {recipe?.method}
                /> */}
        </div>
    )
}