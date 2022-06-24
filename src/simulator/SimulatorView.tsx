import { FC } from "react";
import Card from "../shared/components/Card/Card";
import './SimulatorView.scss';
import { DatasetColumnsForm } from "./views/forms/DatasetColumnsForm/DatasetColumnsForm";
import { DatasetSettingsForm } from "./views/forms/DatasetSettingsForm/DatasetSettings";
import RunSettingsForm from "./views/forms/RunSettingsForm/RunSettingsForm";

const SimulatorTitle = "Simulator Setup"


type SimulatorViewProps = {

}


const SimulatorView: FC<SimulatorViewProps> = () => {
    return (
        <Card title={SimulatorTitle}>

            <div className="simulator">
                <RunSettingsForm/>
                

                <DatasetSettingsForm/>

                <DatasetColumnsForm/>
                
            </div>
        </Card>
    )
}

export default SimulatorView;