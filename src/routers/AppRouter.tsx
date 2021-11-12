import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { NavBar } from "../Components/NavBar/NavBar"
import { SimulatorScreen } from "../simulator/SimulatorScreen"



export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route>
                    <NavBar/>
                    <SimulatorScreen/>
                </Route>
            </Switch>
        </Router>
    )
}