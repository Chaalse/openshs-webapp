import { FC, useContext } from "react";
import Card from "../shared/components/Card/Card";
import { CustomButton } from "../shared/components/CustomButton/CustomButton";
import { RequestContext } from "./SimulatorDataContainer";
import './SimulatorView.scss';
import { DatasetColumnsForm } from "./views/forms/DatasetColumnsForm/DatasetColumnsForm";
import RunSettingsForm from "./views/forms/RunSettingsForm/RunSettingsForm";

const SimulatorTitle = "Simulator Setup"


type SimulatorViewProps = {

}


const SimulatorView: FC<SimulatorViewProps> = () => {

    const { simulatorRepository } = useContext(RequestContext);

    const handle = () => {
        console.log('click')
        simulatorRepository.post({
            context: 'weekday',
            date: new Date(),
            dateTime: 'evening',
            startHour: new Date(Date.now())
        });
    }

    return (
        <Card header={{ title: SimulatorTitle }} type='main'>

            <div className="simulator">
                <Card
                    header={{ title: "Customize simulation and datasets", button: { text: 'START', onClick: () => { } } }}
                    type="inner"
                    className="simulator_settings-container"
                >
                    <div className="grid">
                        <RunSettingsForm />

                        <DatasetColumnsForm />
                    </div>
                    <div className="bottom">
                        <CustomButton
                            text="START SIMULATION"
                            onClick={() => handle()}
                            className="starter__btn"
                        />
                    </div>
                </Card>
            </div>
        </Card>
    )
}

export default SimulatorView;