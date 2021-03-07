import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {Navbar}  from '../components/navbar/Navbar'
import {SignUp} from '../pages/SignUp'
import {SignIn} from '../pages/SignIn'
import { RecipeList } from "../pages/RecipeList";
import { RecipeDetail } from "../pages/RecipeDetail";


const BlogRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path = "/" component = {Home} exact />
                <Route path = '/register' component = {SignUp} exact/>
                <Route path = '/login' component = {SignIn} exact/>
                <Route path = '/recipeList' component = {RecipeList} exact/>
                <Route path = '/recipeDetail/:id/' component = {RecipeDetail} exact/>
            </Switch>
        </Router>
    )
}

export default BlogRouter;