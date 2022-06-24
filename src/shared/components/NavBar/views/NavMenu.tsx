import classNames from "classnames";
import { FC } from "react";
import { Constantes } from "../../../constants/Constantes";
import '../scss/NavMenu.scss';
import { NavMenuItem } from "./NavMenuItem";


type NavMenuProps = {
    isToggled: boolean,
    navigate: (path: string) => void
}

export const NavMenu: FC<NavMenuProps> = ({
    isToggled,
    navigate
}) => {


    const classes = classNames("nav_menu animate__animated animate__slideInLeft", isToggled ? 'visible' : 'hidden');

    return (
        <ul className={classes} >
            <NavMenuItem
                text="HOME"
                icon="home"
                className="nav_menu_item initial"
                onClick={() => navigate(Constantes.HOME_PATH)}
                />
            <NavMenuItem
                text="SIMULATOR"
                icon="chair"
                className="nav_menu_item"
                onClick={() => navigate(Constantes.SIMULATOR_PATH)}
            />
        </ul>
    )
}