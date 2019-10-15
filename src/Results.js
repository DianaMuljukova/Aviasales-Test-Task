import React, {Component} from 'react';
import FilterPrice from "./FilterPrice";
import Ticket from "./Ticket";
import Load from "./Load";
import {connect} from 'react-redux';


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchId: null,
            tickets: [],
            stop: false,
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

        } catch (e) {
            this.getTickets();
        }
    }

    loadTickets = n => {
        if (this.state.tickets.length > 0) {
            this.setState({
                end: this.state.end += n
            });
        }
    };

    filterArr = (item) => {
        //console.log(item.segments[0].stops.length)
        console.log(this.props.stopsCount);
        if (this.props.stopsCount.length < 1 || this.props.stopsCount.indexOf(-1) !== -1) {
            return true;
        }

        if (this.props.stopsCount.indexOf(item.segments[0].stops.length) > -1
            || this.props.stopsCount.indexOf(item.segments[1].stops.length) > -1) {
            return true;
        }
    };

    renderTickets = () => {
        let tickets = this.state.tickets
                .slice(0, 100)
                .filter(this.filterArr)
                .slice(0, this.state.end),
           ticketsArr = [];

        for (let i = 0; i < tickets.length; i++) {
            ticketsArr.push(<Ticket
                key={tickets[i].price}
                price={tickets[i].price}
                carrier={tickets[i].carrier}
                segments={tickets[i].segments}
            />)
        }

        return ticketsArr;
    };

    render() {
        console.log(this.props.stopsCount);

        return (
            <div className="col-xl-7">
                <FilterPrice />
                {this.renderTickets()}
                <Load
                    loadTickets={this.loadTickets}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stopsCount: state.stopsCount
    }
};



export default connect(mapStateToProps)(Results)