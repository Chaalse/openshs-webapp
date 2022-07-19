import { useContext } from "react"
import Card from "../../../../shared/components/Card/Card"
import { HelpersContext } from "../../../SimulatorDataContainer"



export const DatasetColumnsFormHelpCard = () => {

    const { columnsHelper } = useContext(HelpersContext);

    return (
        <Card
            type="small"
            header={{ title: 'Dataset columns info', icon: 'arrow_circle_right', onIconClick: columnsHelper.setDisplay }}
            className={'animate__animated animate__flipInY'}
        >
        </Card>
    )
}