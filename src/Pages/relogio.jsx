import React, { Component } from "react";
export class Relog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hora: '00:00:00'
        }
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({ hora: new Date().toLocaleString() })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Hora : {this.state.hora}</h1>
            </div>);
    }
}