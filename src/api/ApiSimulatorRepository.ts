import axios from "axios";
import ISimulatorRepository from "./interfaces/ISimulatorRepository";


export default class ApiSimulatorRepository implements ISimulatorRepository {
    public async post(): Promise<void> {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: "http://localhost:5000/SimulatorRun"
            }).catch((reason => {
                reject(reason);
            }))
        })

    }

}