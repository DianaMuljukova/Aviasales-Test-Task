import React, {Component} from 'react';
import {connect} from 'react-redux'

class FilterPrice extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        console.log(this.props);
        return (
            <div className="filter-price">
                {['САМЫЙ ДЕШЕВЫЙ', 'САМЫЙ БЫСТРЫЙ'].map((item, index) =>
                    <div className={`filter-price-item ${index === this.props.active ? 'active' : ''}`} onClick={() => this.props.sortArr(index)} key={index}>
                        {item}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        active: state.filterPrice.active,
        sortArrCall: state.filterPrice.sortArrCall
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sortArr: (index) => dispatch({type: 'SORT_ARR', payload: index})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPrice);