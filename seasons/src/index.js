import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null
        };
        //function to determine location of user
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // call setState to update position with current location of user
                this.setState({lat: position.coords.latitude});
            }, 
            err => console.log(err)
        );
    }


    render() {
    return (
        <div>Latitude: {this.state.lat}</div>
    );
    }
}

ReactDOM.render( <App />, document.querySelector('#root'));
