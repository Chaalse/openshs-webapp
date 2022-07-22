import { RunSettingsEntity } from "../../models/RunSettingsEntity";



export default interface ISimulatorRepository {
    post(data: RunSettingsEntity): Promise<void>;
}