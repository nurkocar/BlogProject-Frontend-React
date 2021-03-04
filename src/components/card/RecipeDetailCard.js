import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Add some changes just for commit

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1200,
        marginLeft: '3%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#65394C',
    },
    button: {
        margin: theme.spacing(-1),
        color: '#65394C',
        fontWeight: '600',
        "&:hover": {
            backgroundColor: '#65394C',
            color: '#FFFFFF',
        }
    },
    countLike: {
        position: 'absolute',
        color: 'white'
    },
    icon: {
        '& svg': {
            fontSize: 34
        }
    },
}));

export default function RecipeCard({ author, count_ingredient, count_like, image, title, info, published_date, method, onRecipeClick }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    // const handleRecipeClick = () => {
    //     setSelectedRecipe()
    // }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {author?.charAt(0)}
                        </Avatar>
                    }
                    title={title}
                    subheader={published_date}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {info}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={classes.icon}
                    aria-label='like'
                >
                    <FavoriteIcon />
                    <Typography className={classes.countLike}>
                        {count_like}
                    </Typography>
                </IconButton>
                <IconButton
                    className={classes.icon}
                    aria-label="view"
                >
                    <VisibilityIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        {method.slice(0, 100)}...
                    </Typography>
                    <Button
                        // onClick = {handleRecipeClick} 
                        color="secondary" 
                        className={classes.button}>More
                    </Button>
                </CardContent>
            </Collapse>

        </Card>
    );
}
