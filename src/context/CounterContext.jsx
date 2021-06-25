import { createContext, useState } from "react";
import OOT_LOCATIONS from "../data/ocarina_locations.json";

export const CounterContext = createContext({});

export const CounterProvider = (props) => {

    const [checkedAmount, setCheckedAmount] = useState(0);
   
    const updateCounter = (amount) => {
        let current = checkedAmount
        setCheckedAmount(current += amount)
    }

    const getOcarinaLocations = () => {
        return OOT_LOCATIONS;
    }

    return <CounterContext.Provider value={{checkedAmount, updateCounter, getOcarinaLocations}} >
        {props.children}
    </CounterContext.Provider>
} 