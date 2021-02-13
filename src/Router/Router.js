import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {Navbar}  from '../components/navbar/Navbar'
import {SignUp} from '../pages/SignUp'
import { RecipeList } from "../pages/RecipeList";

const BlogRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path = "/" component = {Home} exact />
                <Route path = '/register' component = {SignUp} exact/>
                <Route path = '/recipeList' component = {RecipeList} exact/>

            </Switch>
        </Router>
    )
}

export default BlogRouter;