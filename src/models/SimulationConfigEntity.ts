import DatasetColumnsEntity from "./DatasetColumnsEntity";
import { DatasetSettingsEntity } from "./DatasetSettingsEntity";
import { RunSettingsEntity } from "./RunSettingsEntity";

export type SimulationConfigEntity = {
    RunSettings: RunSettingsEntity,
    DatasetSettings: DatasetSettingsEntity,
    DatasetColumns: DatasetColumnsEntity[],
}