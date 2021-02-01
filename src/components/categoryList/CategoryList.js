import { useEffect } from 'react'
import axios from 'axios'


const CategoryList = () => {

    const fetchCategoryList = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/categoryList/')
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCategoryList()
    }, [])

    return (
        <div>Category List</div>
    )
}

export default CategoryList