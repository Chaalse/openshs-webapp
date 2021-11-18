import { FC } from "react";
import './SimuladorFooter.scss';
import version from '../../version.json';
import Config from "../../Config";

const SimuladorFooter: FC<{}> = () => {
    return (
        <div className={'footer'}>
            <div className={'version'}>{version.version}</div>
            <a className={'footer-btn'} href={Config.SIMULATOR_WEBAPP_URL}>
                Project's GitHub
            </a>
            <a className={'footer-btn'} href={Config.OPENSHS_URL}>
                OpenSHS's GitHub
            </a>

        </div>
    )
}

export default SimuladorFooter