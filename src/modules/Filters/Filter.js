import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeFilter} from '../../store/actions/filter';

class Filter extends Component {

    renderFilter (item, i) {
        return (
            <li className="filter-item" key={i}>
                <label>
                    <input type="checkbox"
                           className="filter-input"
                           value={item.value}
                           onChange={() => this.props.changeFilter(item.value)} />
                    <span className="checkmark"></span>
                    <span>{item.label}</span>
                </label>
            </li>
        )
    }

    render() {

        return (
            <div className="col-xl-3 col-md-3 col-3 filter-block">
                <h1>
                    Количество пересадок
                </h1>

                <ul className="filter">
                    {Filters.map((item, i) => this.renderFilter(item, i))}
                </ul>
            </div>
        )
    }
}

const Filters = [
    {
      label: 'Все',
      value: -1
    },
    {
        label: 'Без пересадок',
        value: 0
    },
    {
        label: '1 пересадка',
        value: 1
    },
    {
        label: '2 пересадки',
        value: 2
    },
    {
        label: '3 пересадки',
        value: 3
    }
];

const mapStateToProps = state => {
    return {
        stopsCount: state.stopsCount
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        changeFilter: value => dispatch(changeFilter(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);