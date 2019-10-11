import React, {Component} from 'react';

class Segment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderSegments = (item, i) => {
        let dateAway = new Date(Date.parse(item.date));
        let dateAwayDuration = new Date(+dateAway + item.duration * 60000);

        return (
            <div className="ticket-path-row" key={i}>
                <div>
                    <div className="ticket-path-title">
                        {`${item.origin}`} – {`${item.destination}`}
                    </div>
                    <div>
                        {`${dateAway.getHours() > 9 ? dateAway.getHours() : '0' + dateAway.getHours()}:${dateAway.getMinutes() > 9 ? dateAway.getMinutes() : '0' + dateAway.getMinutes()} 
                            - ${dateAwayDuration.getHours() > 9 ? dateAwayDuration.getHours() : '0' + dateAwayDuration.getHours()}:${dateAwayDuration.getMinutes() > 9 ? dateAwayDuration.getMinutes() : '0' + dateAwayDuration.getMinutes()}`}
                    </div>
                </div>
                <div>
                    <div className="ticket-path-title">
                        В пути
                    </div>
                    <div>
                        {`${Math.floor(item.duration / 60)}ч ${item.duration % 60 > 9 ? item.duration % 60 : '0' + item.duration % 60}м`}
                    </div>
                </div>
                <div>
                    <div className="ticket-path-title">
                        {item.stops.length} пересад{this.handleDeclension(item.stops.length, ['ка', 'ки', 'ок'])}
                    </div>
                    <div>
                        {item.stops.join(', ')}
                    </div>
                </div>
            </div>
        )
    };

    handleDeclension = (n, arr) => {
        let result;
        let count = n % 100;

        if (count >= 5 && count <= 20) {
            result = arr[2];
        } else {
            count = count % 10;
            if (count === 1) {
                result = arr[0];
            } else if (count >= 2 && count <= 4) {
                result = arr[1];
            } else {
                result = arr[2];
            }
        }
        return  result;
    };


    render() {
        const {segments} = this.props;
        //console.log(segments);
        return (
            segments.map((item, i) => this.renderSegments(item, i))
        )
    }
}

export default Segment;