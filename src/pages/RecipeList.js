import axios from 'axios'
import RecipeCard from '../components/card/RecipeCard'

export const RecipeList = () => {

    // const getRecipeList = async () => {
    //     try{
    //         const response = await axios.get(`https://recipe-blog-django-backend.herokuapp.com/api/list/${category}`)
    //         console.log(response?.data)
    //     } catch (error) {

    //     }

    // }
    
    return(
        <div>
            <RecipeCard/>
        </div>
    )
}