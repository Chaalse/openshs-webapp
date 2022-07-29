import { FC, useContext } from "react";
import Card from "../shared/components/Card/Card";
import { CustomButton } from "../shared/components/CustomButton/CustomButton";
import { AuthContext } from "../shared/contexts/AuthContext";
import { RequestContext } from "./SimulatorDataContainer";
import './SimulatorView.scss';
import { DatasetColumnsForm } from "./views/forms/DatasetColumnsForm/DatasetColumnsForm";
import RunSettingsForm from "./views/forms/RunSettingsForm/RunSettingsForm";

const SimulatorTitle = "Simulator Setup"


type SimulatorViewProps = {
}


const SimulatorView: FC<SimulatorViewProps> = () => {

    const { simulatorRepository } = useContext(RequestContext);

    const { button } = useContext(AuthContext);

    const handle = () => {
        simulatorRepository.post({
            context: 'weekday',
            date: new Date(),
            dateTime: 'evening',
            startHour: new Date(Date.now())
        });
    }

    return (
        <Card header={{
            title: SimulatorTitle,
            button: button,
        }} type='main'>

            <Card header={{ title: "Customize simulation and datasets"}}
                type="inner"
                className="settings"
            >
                <div className="settings__grid">
                    <RunSettingsForm />

                    <DatasetColumnsForm />
                </div>
                <div className="bottom">
                    <CustomButton
                        text="START SIMULATION"
                        onClick={() => handle()}
                        className="starter-btn"
                    />
                </div>
            </Card>
        </Card>
    )
}

export default SimulatorView;