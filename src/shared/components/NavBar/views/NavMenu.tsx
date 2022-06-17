import classNames from "classnames";
import { FC } from "react";
import { Constantes } from "../../../constants/Constantes";
import '../scss/NavMenu.scss';


type NavMenuProps = {
    isToggled: boolean,
    navigate: (path: string) => void
}

export const NavMenu: FC<NavMenuProps> = ({
    isToggled,
    navigate
}) => {
    const classes = classNames("nav_menu animate__animated animate__slideInLeft", isToggled ? 'visible' : 'hidden')
    return (
        <ul className={classes} >
            <li onClick={() => navigate(Constantes.HOME_PATH)}>
                HOME
            </li>
            <li onClick={() => navigate(Constantes.SIMULATOR_PATH)}>
                SIMULATOR
            </li>
        </ul>
    )
}