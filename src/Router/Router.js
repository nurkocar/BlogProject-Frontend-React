import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from '../components/navbar/Navbar'

const BlogRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path = "/" component = {Home} />
                {/* <Route path = '/register' component = {SignUp} /> */}
            </Switch>
        </Router>
    )
}

export default BlogRouter;