import { FC } from "react";
import Card from "../shared/components/Card/Card";
import './SimulatorView.scss';
import { DatasetColumnsForm } from "./views/forms/DatasetColumnsForm/DatasetColumnsForm";
import RunSettingsForm from "./views/forms/RunSettingsForm/RunSettingsForm";

const SimulatorTitle = "Simulator Setup"


type SimulatorViewProps = {

}


const SimulatorView: FC<SimulatorViewProps> = () => {
    return (
        <Card header={{title: SimulatorTitle}}>

            <div className="simulator">
                <Card
                    header={{title: "Customize simulation and datasets"}}
                    type="inner"
                    className="simulator_settings-container"
                >
                    <div className="grid">
                        <RunSettingsForm />

                        <DatasetColumnsForm />
                    </div>
                </Card>

            </div>
        </Card>
    )
}

export default SimulatorView;