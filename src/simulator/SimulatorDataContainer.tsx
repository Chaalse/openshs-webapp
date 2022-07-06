import { useEffect } from "react";
import { createContext, FC, useState } from "react";
import SimulatorView from "./SimulatorView";

export const Context = createContext({
    text: '',
    setText: (value: string) => {}
});

const SimulatorDataContainer: FC<{}> = () => {


    const [prueba, setPrueba] = useState('');

    const handle = (value: string) => {
        setPrueba(value);
    }

    const value = () => ({text: prueba, setText: handle})

    useEffect(() => {
        console.log(prueba)
    }, [prueba]);
    
    return (
        <Context.Provider value={value()}>
            <SimulatorView/>
        </Context.Provider>
    )
}

export default SimulatorDataContainer;