import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../home/HomeScreen";
import NavBar from "../shared/components/NavBar/NavBar";
import { SimulatorScreen } from "../simulator/SimulatorScreen";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/simulator" element={<SimulatorScreen />} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter;