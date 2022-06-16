import { FC } from "react";
import ActivitiesBoxDataContainer from "../settings-boxes/activities/ActivitiesBoxDataContainer";
import './SimuladorView.scss';
import imagenCasa from '../assets/ContrasteAzulOscuro.jpg';
import imagenSimulador from '../assets/captura.jpg';
import SimuladorFooter from "./views/SimuladorFooter";

type SimuladorViewProps = {

}


export const SimuladorView: FC<SimuladorViewProps> = () => {
    return (
        <>
        <div className={'main-container'}>
            <div className={'main-row'}>
                <div className={'left-col'}>
                    <h4>First go first</h4>
                    <p>{`This is a final degree project website, which presents a settings tool for
                        Open Smart Home Simulator. The long-term aim is to implement an online
                        version of the simulator that could be configured and used by researchers
                        all around the world, setting different contexts, user activities and the obstrusivity
                        level desired by the home inhabitants in each simulated situation, this last part
                        is thanks to the labeling extension also added in the simulator in this project.
                        Therefore, this project is a solution to the issues within the Ambient Intelligence
                        research field to find wide, specific and detailed data corpus to be used in
                        machine learning processes and other developments.`}</p>
                    <img src={imagenSimulador} alt={'The activities screen from the simulator'} width={600} height={300}></img>
                </div>
                <div className={'right-col'}>
                    <img src={imagenCasa} alt={'The simulated house from inside'} width={600} height={300}></img>
                    <h4>"Ok but... What am I looking at?"</h4>
                    <p>{`At this moment, the website itself is a tool to configure the main settings of the
                    simulator, it generates the appropriate code lines for each file so you can
                    customize the simulator as you need to get your own datasets after each
                    simulation. The only thing you need to do is introduce your desired contexts,
                    activities, obstrusivity levels and python code will be generated for you to paste
                    it in the right files, yes, that's all!. As was said above, the goal is to find an
                    usable and scalable solution to embeb the simulator in the web so, in the future your changes would automatically
                    apply to its configuration and then you could run it online.`}</p>
                </div>
            </div>
            <div className={'separator'}>
                <span></span>
                <span></span>
            </div>
            <ActivitiesBoxDataContainer />
        </div>
        <SimuladorFooter/>
        </>
    )
}