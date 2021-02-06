import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from '../components/navbar/Navbar'
import {SignUp} from '../pages/SignUp'

const BlogRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path = "/" component = {Home} exact />
                <Route path = '/register' component = {SignUp} exact/>
            </Switch>
        </Router>
    )
}

export default BlogRouter;