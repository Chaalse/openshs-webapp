import { FC } from "react";
import './NavBar.scss'


export const NavBar: FC<{}> = () => {

    const scrollToCode = () => {
        window.scrollTo(0, 800);
    }

    return (
        <div className={'navbar'}>
            <div className={'navbar-header'}>
                <div className={'navbar__openshs'}>
                    OpenSHS
                </div>
                <div className={'navbar__openshs-login'}>
                    <button>
                        LOG IN
                    </button>
                </div>
            </div>
            <div className={'navbar-body'}>
                <div className={'navbar-body__text'}>
                    <h4>Welcome to the configuration wizard for Open Smart Home Simulator</h4>
                    <p>Following, there is some information about the project now and where it is headed</p>
                    <p>You can have a read on it or go straight to the action pressing START!</p>
                </div>
            </div>
            <div className={'navbar-footer'}>
                <button onClick={scrollToCode}>
                    START!
                </button>
            </div>
        </div>

    )
}