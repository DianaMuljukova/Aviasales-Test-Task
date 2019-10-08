import React, {Component} from 'react';

export default class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchId: null,
            tickets: [],
            stop: false
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

            let result = await response.json();
            //console.log(result);
            let oldTickets = [...this.state.tickets];
            this.setState({
                tickets: oldTickets.concat(result.tickets),
                stop: result.stop
            }, () => {
                if (!this.state.stop) {
                    this.getTickets()
                }
            });
        } catch (e) {
            this.getTickets();
        }
    }

    render() {
        //console.log('tickets: ', this.state.tickets);

        return (

            <div className="ticket">
                <div className="ticket-price-row">
                    <div className="ticket-price">
                        13 400 Р
                    </div>
                    <div className="ticket-img">
                        картинка
                    </div>
                </div>

                <div className="ticket-path-row">
                    <div>
                        <div className="ticket-path-title">
                            MOW – HKT
                        </div>
                        <div>
                            10:45 – 08:00
                        </div>
                    </div>
                    <div>
                        <div className="ticket-path-title">
                            В пути
                        </div>
                        <div>
                            21ч 15м
                        </div>
                    </div>
                    <div>
                        <div className="ticket-path-title">
                            2 пересадки
                        </div>
                        <div>
                            HKG, JNB
                        </div>
                    </div>
                </div>

                <div className="ticket-path-row">
                    <div>
                        <div className="ticket-path-title">
                            MOW – HKT
                        </div>
                        <div>
                            10:45 – 08:00
                        </div>
                    </div>
                    <div>
                        <div className="ticket-path-title">
                            В пути
                        </div>
                        <div>
                            21ч 15м
                        </div>
                    </div>
                    <div>
                        <div className="ticket-path-title">
                            2 пересадки
                        </div>
                        <div>
                            HKG, JNB
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}