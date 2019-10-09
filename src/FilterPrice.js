import React, {Component} from 'react';

export default class FilterPrice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    changeStatus = (i) => {
       this.setState({
           active: i
       })
    };

    render() {
        return (
            <div className="filter-price">
                {['САМЫЙ ДЕШЕВЫЙ', 'САМЫЙ БЫСТРЫЙ'].map((item, i) =>
                    <div className={`filter-price-item ${i === this.state.active ? 'active' : ''}`} onClick={() => this.changeStatus(i)} key={i}>
                        {item}
                    </div>
                )}
            </div>
        )
    }

}