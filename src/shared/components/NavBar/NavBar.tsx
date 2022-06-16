import { FC } from "react";
import { Constantes } from "../../constants/Constantes";

type NavBarProps = {
    navigate: (path: string) => void
}

const NavBar: FC<NavBarProps> = ({
    navigate
}) => {


    return (
        <nav>
            <ul>
                <li onClick={() => navigate(Constantes.HOME_PATH)}>
                    HOME
                </li>
                <li onClick={() => navigate(Constantes.SIMULATOR_PATH)}>
                    SIMULATOR
                </li>
                
            </ul>
        </nav>
    )
}

export default NavBar;