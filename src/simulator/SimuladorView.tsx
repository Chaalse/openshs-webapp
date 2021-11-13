import { FC } from "react";
import Config from "../Config";
import ActivitiesBoxDataContainer from "../settings-boxes/activities/ActivitiesBoxDataContainer";
import './SimuladorView.scss';
import imagen from '../assets/BajoContraste.jpg'

type SimuladorViewProps = {

}


export const SimuladorView: FC<SimuladorViewProps> = () => {
    return (
        <div className={'main-container'}>
            <div className={'about-div'}>
                <h4>First go first</h4>
                <div className={'text-img-row'}>
                    <p>This is a final degree project website, which presents a settings tool for<br />
                        <a href={Config.OPENSHS_URL}><b>Open Smart Home Simulator</b></a>. The long-term aim is to implement an online<br />
                        version of the simulator that could be configured and used by researchers<br />
                        all around the world, setting different contexts, user activities and <u>obstrusivity<br />
                            level desired by the home inhabitants</u> in each simulated situation, this last part<br />
                        is thanks to the <u>labeling extension</u> also added in the simulator in this project.<br />
                        Therefore, thisproject is a solution to the issues within the Ambient Intelligence<br />
                        research field to find wide, specific and detailed data corpus to be used in<br />
                        machine learning processes and other developments.</p>
                    <img src={imagen} alt={'Picture of the simulated house from inside'} width={550} height={275}></img>
                </div>

            </div>
            <div className={'state-div'}>
                <h4>"Ok, but... What am I looking at?"</h4>
                <p>At this moment, the website itself is a tool to configure the main settings of the<br />
                    simulator, it generates the appropriate code lines for each file so you can<br />
                    customize the simulator as you need to get your own datasets after each<br />
                    simulation. The only thing you need to do is introduce your desired contexts,<br />
                    activities, obstrusivity levels and python code will be generated for you to paste<br />
                    it in the right files, yes, that's all!</p>
            </div>
            <div className={'separator'}>
                <span></span>
                <span></span>
            </div>
            <ActivitiesBoxDataContainer />
        </div>
    )
}