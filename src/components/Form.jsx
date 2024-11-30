import React from "react";
import { SubForm } from "./SubForm";

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('Component is updated');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <>
                <form>
                    <label> Имя: </label>
                    <input type="text"></input>
                    <SubForm occupation='frontend' age={23}></SubForm>
                    <button>Отправить форму</button>
                </form>
                <p>Значение счетчика: {this.state.counter}
                    <button onClick={this.handleClick}>Увеличить</button>
                </p>

            </>
        )
    }
}


