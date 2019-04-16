import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import styled from "styled-components";


const BorderRed = styled.div`
    border: 10px solid red;
`;


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



    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <Spinner message="Please accept location request"/>;
    };


    render() {
        return (
            <BorderRed>
                {this.renderContent()}
            </BorderRed>
        )
    }
};

ReactDOM.render( <App />, document.querySelector('#root'));
