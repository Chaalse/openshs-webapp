import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../CustomButton/CustomButton";
import './scss/NavBar.scss';
import { NavMenu } from "./views/NavMenu";


const NavBar: FC<{}> = () => {

    const ref: any = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsToggled(false);
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [ref]);

    const [isToggled, setIsToggled] = useState<boolean>(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    }

    const navigate = useNavigate();

    return (

        <div className="side_nav" ref={ref}>
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