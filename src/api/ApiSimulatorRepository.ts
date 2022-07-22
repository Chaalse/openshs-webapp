import axios from "axios";
import { RunSettingsEntity } from "../models/RunSettingsEntity";
import ISimulatorRepository from "./interfaces/ISimulatorRepository";

export default class ApiSimulatorRepository implements ISimulatorRepository {
    public async post(data: RunSettingsEntity): Promise<void> {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                url: "http://localhost:5000/SimulatorRun",
                data: data
            }).catch((reason => {
                reject(reason);
            }))
        })

    }

}