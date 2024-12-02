import React from "react";
import { SubForm } from "./SubForm";

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0, inpitValue: '' }
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

    inpitChange = (event) => {
        this.setState({ inpitValue: event.target.value })
    }

    focusOnInpit = () => {
        this.textInput.focus()
    }

    submitDisable = () => {
        return this.state.inpitValue.includes('реакт')
    }

    render() {
        return (
            <>
                <div>
                    <label> Имя: </label>
                    <input
                        type="text"
                        value={this.state.inpitValue}
                        onChange={this.inpitChange}
                        ref={(input) => { this.textInput = input }}
                    />
                    <p> <button onClick={this.focusOnInpit}> focus on inpit </button> </p>
                    <SubForm occupation='frontend' age={23}></SubForm>
                    <button disabled={this.submitDisable()}> Отправить форму </button>
                </div>

                <p> Значение счетчика: {this.state.counter}</p>
                <p> <button onClick={this.handleClick}> Увеличить </button></p>

            </>
        )
    }
}


