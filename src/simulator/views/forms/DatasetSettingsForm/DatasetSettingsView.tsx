import { FC } from "react";
import Card from "../../../../shared/components/Card/Card";

type DatasetSettingsViewProps = {

}


export const DatasetSettingsView: FC<DatasetSettingsViewProps> = () => {
    return (
        <Card
            type="inner"
            title="Dataset settings"
            className="simulator_settings"
        >
            <div className="dataset_settings">
                
            </div>
        </Card>
    )
}