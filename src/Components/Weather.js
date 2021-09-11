import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            errorMessage: ''
        }
        window.navigator.geolocation.getCurrentPosition (
            (position) => this.setState({ latitude: position.coords.latitude}),
            (err) =>this.setState({ errorMessage: err.message})
        )
    }
    render() {
        return(
            <section>
                { this.state.errorMessage ? 
                <section className = "Weather" id="Error">
                    <h3>{this.state.errorMessage}</h3>
                </section> 
                :
                this.state.latitude > 45 ?
                <section className = "Weather" id="Winter">
                    <h3>Its chilly!</h3>
                </section> 
                :
                <section className = "Weather" id="Summer">
                    <h3>It's Hot Outside!</h3>
                </section>
                }
            </section>
        )
    }
}

export default Weather