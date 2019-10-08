import React, {Component} from 'react';
import FilterPrice from "./FilterPrice";
import Ticket from "./Ticket";
import Load from "./Load";

export default class Results extends Component {
    render() {
        let ticketsArr = [];
        for (let i = 0; i < 1; i++) {
            ticketsArr.push(<Ticket />)
        }
        return (
            <div className="col-xl-7">
                <FilterPrice />
                {ticketsArr}
                <Load/>
            </div>
        )
    }
}