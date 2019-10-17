import React from 'react';
import Filter from "../Filters/Filter";
import Results from "./Results";

const Main = () => {
    return (
        <div className="container">
            <div className="row content-row">
               <Filter />
               <Results />
            </div>
        </div>
    )
};

export default Main;