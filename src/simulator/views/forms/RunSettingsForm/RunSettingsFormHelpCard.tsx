import { FC, useContext } from "react";
import Card from "../../../../shared/components/Card/Card";
import { HelpersContext } from "../../../SimulatorDataContainer";



export const RunSettingsFormHelpCard: FC<{}> = () => {

    const { settingsHelper } = useContext(HelpersContext)

    return (
        <Card 
            type="small"
            header={{title: 'Simulation settings info', icon:'arrow_circle_right', onIconClick: settingsHelper.setDisplay}}
            className={'animate__animated animate__flipInY'}
        >
            
        </Card>
    )
}