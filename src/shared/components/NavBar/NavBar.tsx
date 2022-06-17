import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../CustomButton/CustomButton";
import './scss/NavBar.scss';
import { NavMenu } from "./views/NavMenu";


const NavBar: FC<{}> = () => {

    const [isToggled, setIsToggled] = useState<boolean>(true);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    }

    const navigate = useNavigate();

    return (


        <div className="side_nav">
            <CustomButton
                className="side_nav-toggler"
                icon={!isToggled ? 'menu' : 'menu_open'}
                onClick={handleToggle}
            />
            <NavMenu
                isToggled={isToggled}
                navigate={navigate}
            />
        </div>
    )
}

export default NavBar;