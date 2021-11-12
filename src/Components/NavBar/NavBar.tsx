import { FC } from "react";
import Config from "../../Config";
import './NavBar.scss'


export const NavBar: FC<{}> = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar-header'}>
                <div className={'navbar-header__title'}>
                    OpenSHS Label Project
                </div>
                <div className={'navbar-header__subtitle'}>
                A labeling extension for <a href={Config.OPENSHS_URL}>Open Smart Home Simulator</a>
                </div>
            </div>
            <div className={'navbar-body'}>
                <div className={'navbar-item'}>
                    HOME
                </div>
                <div className={'navbar-item'}>
                    ABOUT
                </div>
                <div className={'navbar-item'}>
                    START!
                </div>
            </div>
        </div>

    )
}