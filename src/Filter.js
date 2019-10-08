import React, {Component} from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="col-xl-3 filter-block">
                <h1>
                    Количество пересадок
                </h1>

                <ul className="filter">
                    <li className="filter-item">
                        <label>
                            <input type="checkbox" className="filter-input" />
                            <span className="checkmark"></span>
                            <span>Все</span>
                        </label>
                    </li>

                    <li className="filter-item">
                        <label>
                            <input type="checkbox" className="filter-input" />
                            <span className="checkmark"></span>
                            <span>Без пересадок</span>
                        </label>
                    </li>

                    <li className="filter-item">
                        <label>
                            <input type="checkbox" className="filter-input" />
                            <span className="checkmark"></span>
                            <span>1 пересадка</span>
                        </label>
                    </li>

                    <li className="filter-item">
                        <label>
                            <input type="checkbox" className="filter-input" />
                            <span className="checkmark"></span>
                            <span>2 пересадки</span>
                        </label>
                    </li>

                    <li className="filter-item">
                        <label>
                            <input type="checkbox" className="filter-input" />
                            <span className="checkmark"></span>
                            <span>3 пересадки</span>
                        </label>
                    </li>
                </ul>

            </div>
        )
    }
}