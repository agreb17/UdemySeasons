import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
        state = {
            lat: null,
            errorMessage: ''
        };
    

    componentDidMount() {
         //function to determine location of user
         window.navigator.geolocation.getCurrentPosition(
            position =>// call setState to update position with current location of user
                this.setState({lat: position.coords.latitude}), 
            err => this.setState({ errorMessage: err.message })
        );
    }



    render() {
        if (this.state.lat && !this.state.errorMessage) {
            return <div>Latitude: {this.state.lat}</div>
        }
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <div>Loading...</div>
    }
}

ReactDOM.render( <App />, document.querySelector('#root'));
