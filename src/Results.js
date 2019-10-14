import React, {Component} from 'react';
import FilterPrice from "./FilterPrice";
import Ticket from "./Ticket";
import Load from "./Load";

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchId: null,
            tickets: [],
            stop: false,
            ticketsArr: [],
            start: 0,
            end: 10
        }
    }

    componentDidMount() {
        this.getSearchId();
    }

    async getSearchId() {
        let response = await fetch('https://front-test.beta.aviasales.ru/search');
        let result = await response.json();

        this.setState({
            searchId: result.searchId
        }, this.getTickets);
    }

    async getTickets () {
        try {
            let response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.state.searchId}`);
            if (response.status === 200) {
                let result = await response.json();
                let oldTickets = [...this.state.tickets];
                this.setState({
                    tickets: oldTickets.concat(result.tickets),
                    stop: result.stop
                }, () => {
                    if (!this.state.stop) {
                        this.getTickets()
                    }
                });
            } else {
                this.getTickets();
            }

            this.loadTickets(); //вызвали 10 билетов
        } catch (e) {
            this.getTickets();
        }
    }

    loadTickets = n => {
        let ticketsArr = [];
        if (this.state.tickets.length > 0) {

            if (n) {
                this.setState({
                    end: this.state.end+=n
                });
            }

            let tickets = this.state.tickets.slice(this.state.start, this.state.end);
            //console.log(tickets);
            for (let i = 0; i < tickets.length; i++) {
                ticketsArr.push(<Ticket
                    key={i}
                    price={this.state.tickets[i].price}
                    carrier={this.state.tickets[i].carrier}
                    segments={this.state.tickets[i].segments}
                />)
            }
        }
        console.log(this.state.end)
        this.setState({
            ticketsArr: ticketsArr
        });

    };

    render() {

        return (
            <div className="col-xl-7">
                <FilterPrice />
                {this.state.ticketsArr}
                <Load
                    loadTickets={this.loadTickets}
                />
            </div>
        )
    }
}