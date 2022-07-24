import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../shared/components/Card/Card";
import { CustomButton } from "../shared/components/CustomButton/CustomButton";
import { Constantes } from "../shared/constants/Constantes";
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

    const navigate = useNavigate();

    return (
        <Card header={{
            title: SimulatorTitle,
            button: {
                text: 'LOG IN',
                onClick: () => navigate(Constantes.LOGIN_PATH)
            }
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