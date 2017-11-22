import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CarsList extends Component {
    showList(){
        console.log(this.props);
        return this.props.cars.map((car) => {
            return (
              <li key={car.id}>{car.name}</li>
            );
        });
    }

    render() {
        return (
            <ol>
                {this.showList()}
            </ol>
        );
    }
}

function mapStateToProps (state){
    return {
        cars: state.cars
    };
}

export default connect(mapStateToProps)(CarsList);