import React, {Component} from 'react';

export default class Ticket extends Component {

    render() {
        const {price, carrier, segments} = this.props;
        let dateAway = new Date(Date.parse(segments[0].date));
        let dateAwayDuration = new Date(+dateAway + segments[0].duration * 60000);

        return (

            <div className="ticket">
                <div className="ticket-price-row">
                    <div className="ticket-price">
                        {`${price} Р`}
                    </div>
                    <div className="ticket-img">
                       <img src={`//pics.avs.io/99/36/${carrier}.png`} />
                    </div>
                </div>

                <div className="ticket-path-row">
                    <div>
                        <div className="ticket-path-title">
                            {`${segments[0].origin}`} – {`${segments[0].destination}`}
                        </div>
                        <div>
                            {`${dateAway.getHours()}:${dateAway.getMinutes()} 
                            - ${dateAwayDuration.getHours()}:${dateAwayDuration.getMinutes()}`}
                        </div>
                    </div>
                    <div>
                        <div className="ticket-path-title">
                            В пути
                        </div>
                        <div>
                            {`${Math.floor(segments[0].duration / 60)}ч ${segments[0].duration % 60 > 10 ? segments[0].duration % 60 : '0' + segments[0].duration % 60}м`}
                        </div>
                    </div>
                    <div>
                        <div className="ticket-path-title">
                            {segments[0].stops.length} пересадки
                        </div>
                        <div>
                            {segments[0].stops}
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