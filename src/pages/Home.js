import React, {useState} from 'react';
import CategoryList from '../components/categoryList/CategoryList';

export const Home  = () => {
    const [selectedCategory, setSelectedCategory] = useState('Main Dish');
    // console.log(selectedCategory)

    return(
        <div>
            <CategoryList 
                selectedCategory = {selectedCategory}
                setSelectedCategory = {setSelectedCategory}
            />
        </div>
    )
}
