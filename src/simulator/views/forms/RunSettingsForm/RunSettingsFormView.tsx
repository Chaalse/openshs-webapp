import { FC, useContext } from "react";
import { HelpersContext } from "../../../SimulatorDataContainer";
import { RunSettingsFormHelpCard } from "./RunSettingsFormHelpCard";
import { RunSettingsFormInputCard } from "./RunSettingsFormInputCard";

type RunSettingsFormViewProps = {

}


export const RunSettingsFormView: FC<RunSettingsFormViewProps> = () => {

    const { settingsHelper } = useContext(HelpersContext);


    if (settingsHelper.display) {
        return (
            <RunSettingsFormHelpCard/>
        )
    } else {
        return (
            <RunSettingsFormInputCard/>
        )
    }
    
}