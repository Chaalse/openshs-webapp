import { createContext, FC, useState } from "react";
import ApiSimulatorRepository from "../api/ApiSimulatorRepository";
import ISimulatorRepository from "../api/interfaces/ISimulatorRepository";
import SimulatorView from "./SimulatorView";


type HelperCardProps = {
    display: boolean,
    setDisplay: () => void
}

const columnsHelper: HelperCardProps = {
    display: false,
    setDisplay: () => { }
}

const settingsHelper: HelperCardProps = {
    display: false,
    setDisplay: () => { }
}

export const HelpersContext = createContext({
    columnsHelper: columnsHelper,
    settingsHelper: settingsHelper,
});

const repository: ISimulatorRepository = new ApiSimulatorRepository();

export const RequestContext = createContext({
    simulatorRepository: repository
});

const SimulatorDataContainer: FC<{}> = () => {


    const [columnsHelp, setColumnsHelp] = useState<boolean>(false);

    const handleColumns = () => {
        setColumnsHelp(!columnsHelp);
    }

    const [settingsHelp, setSettingsHelp] = useState<boolean>(false);

    const handleSettings = () => {
        setSettingsHelp(!settingsHelp);
    }

    const value = () => ({
        columnsHelper: { display: columnsHelp, setDisplay: handleColumns },
        settingsHelper: { display: settingsHelp, setDisplay: handleSettings }
    });

    const repoValue = () => ({
        simulatorRepository: repository
    })

    return (
        <RequestContext.Provider value={repoValue()}>
            <HelpersContext.Provider value={value()}>
                <SimulatorView />
            </HelpersContext.Provider>
        </RequestContext.Provider>
    )
}

export default SimulatorDataContainer;