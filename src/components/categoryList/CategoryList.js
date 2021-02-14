import { useEffect, useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
    GridList,
    GridListTile,
    GridListTileBar,
    ListSubheader,
    IconButton
}
    from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';
import { appContext } from "../../context/AppContext";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3%',
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        display: 'flex',
        // flexGrow: 1,
        width: '80vw',
        // // height: '100vh',
    },
    eachCategory: {
        // width: '80vw',
        height: '500px',
    },
    img: {
        cursor: 'pointer'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    subHeader: {
        height: 'auto',
        backgroundImage: `url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=735&q=80')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    categories: {
        color: 'white',
        fontSize: '2rem'
    }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);
    const { selectedCategory, setSelectedCategory } = useContext(appContext);

    const history = useHistory();

    const getCategoryList = async () => {
        try {
            const response = await axios.get('https://recipe-blog-django-backend.herokuapp.com/api/categoryList')
            console.log(response?.data);
            setCategoryList(response?.data)
        } catch (error) {
            console.error(error)
        }
    }

    const onSelectCategory = (category) => {
        setSelectedCategory(category);
        console.log('selectedCategory', selectedCategory)
        history.push('/recipeList');
        
    }

    useEffect(() => {
        getCategoryList()
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} className={classes.subHeader}>
                    <ListSubheader component="div" className={classes.categories}>Categories</ListSubheader>
                </GridListTile>
                {categoryList?.map((category) => (
                    <GridListTile
                        // onClick = {(e) => {onSelectCategory(e,category?.name)}}
                        className={classes.eachCategory}
                        key={category?.img}
                    >
                        <img
                            className={classes.img}
                            src={category?.img}
                            alt={category?.name}
                            onClick={() => onSelectCategory(category?.name)}
                        />
                        <GridListTileBar
                            title={category?.name}
                            subtitle={<span>Number of Recipe: {category?.recipe_count}</span>}
                            actionIcon={
                                <IconButton
                                    onClick={() => onSelectCategory(category?.name)}
                                    aria-label={`info about ${category?.name}`}
                                    className={classes.icon}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
