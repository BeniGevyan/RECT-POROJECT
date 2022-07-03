import {
    

    Switch,
    Route,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Dog from "./components/Dog/Dog";
import zoro from "./components/ZORO/Zoro";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";





const AppRouter = () => {
    return (
       

            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/dog" component={Dog} />


                <Route path="/zoro" component={zoro} />

                <Route path="/Login" component={Login} />

                <Route path="/Register" component={Register} />

            </Switch>

        
    )
}
export default AppRouter