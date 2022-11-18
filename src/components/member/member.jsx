import React, { Component } from "react";

class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {

        const login = () => {
            this.setState({ name: 'Talles' })
            alert(`Bem-vindo ${this.state.name}`)
        }

        return (
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={() => login()} > Entrar como Talles</button>
                <button onClick={() => this.setState({ name: '' })}> Sair</button>
            </div >
        );
    }
}
export default Member;