import { FC } from "react";
import Config from "../../Config";
import './NavBar.scss'


export const NavBar: FC<{}> = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar-header'}>
                <div className={'navbar__openshs-link'}>
                    OpenSHS
                </div>
                <div className={'navbar__openshs-login'}>
                    LOGIN
                </div>
            </div>
        </div>

    )
}