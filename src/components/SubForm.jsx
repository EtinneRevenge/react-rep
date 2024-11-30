import React from "react";

export class SubForm extends React.Component {

    render() {
        const { occupation, age } = this.props;
        return (
            <>
                <h2> Данные: </h2>
                <p> Профессия: {occupation} </p>
                <p> Возраст: {age} </p>
            </>
        )
    }
}