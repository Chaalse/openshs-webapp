import { FC } from "react";
import Card from "../shared/components/Card/Card";
import './SimuladorView.scss';

const SimulatorTitle = "Simulator Setup"


type SimulatorViewProps = {

}


const SimulatorView: FC<SimulatorViewProps> = () => {
    return (
        <Card title={SimulatorTitle}>
            <div className="simulator">
                <div className="simulator_settings">
                    UNO
                </div>
                <div className="simulator_settings">
                    DOS
                </div>
                <div className="simulator_settings">
                    TRES
                </div>
            </div>
        </Card>
    )
}

export default SimulatorView;