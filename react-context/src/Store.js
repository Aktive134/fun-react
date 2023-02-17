import React, { createContext, useState } from "react";
import movieData from "./movieData";

export const Store = createContext();

export const StoreProvider = (props) => {
    const [ movies, setMovies ] = useState(movieData);

    return <Store.Provider value={[movies, setMovies]}>{props.children}</Store.Provider>
}