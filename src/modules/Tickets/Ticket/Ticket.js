import React, {Component} from 'react';
import Segment from "./Segment";

export default class Ticket extends Component {

    render() {
        const {price, carrier, segments} = this.props;

        return (

            <div className="ticket">
                <div className="ticket-price-row">
                    <div className="ticket-price">
                        {`${String(price).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ")} Р`}
                    </div>
                    <div className="ticket-img">
                       <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="air company logo" />
                    </div>
                </div>
                <Segment
                segments={segments}
                />
            </div>
        )
    }
}