import classNames from "classnames";
import { FC, useContext } from "react";
import { Constantes } from "../../../constants/Constantes";
import { AuthContext } from "../../../contexts/AuthContext";
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

    const { user } = useContext(AuthContext);

    const classes = classNames("nav__menu animate__animated animate__slideInLeft", isToggled ? 'visible' : 'hidden');

    return (
        <ul className={classes} >
            <label className="nav__menu__user">{user != null ? 'Logged with: ' + user.email : 'You are not logged'}</label>
            <NavMenuItem
                text="HOME"
                icon="home"
                className="nav__menu__item nav__menu__item--initial"
                onClick={() => navigate(Constantes.HOME_PATH)}
                />
            <NavMenuItem
                text="SIMULATOR"
                icon="chair"
                className="nav__menu__item"
                onClick={() => navigate(Constantes.SIMULATOR_PATH)}
            />
        </ul>
    )
}