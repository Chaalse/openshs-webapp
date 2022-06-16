import { Route, Routes, useNavigate } from "react-router-dom";
import HomeScreen from "../home/HomeScreen";
import NavBar from "../shared/components/NavBar/NavBar";
import { SimulatorScreen } from "../simulator/SimulatorScreen";

const AppRouter = () => {

    const navigate = useNavigate();

    return (
        <>
            <NavBar navigate={navigate} />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/simulator" element={<SimulatorScreen />} />
            </Routes>
        </>
    )
}


export default AppRouter;