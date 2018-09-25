import React, { Component } from 'react';
import style from 'styled-components';

export default class CreateTraining extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <SExerciseContainer>
                <SInputGroup>
                    <label>Exercise name: </label>
                    <input type="text" />
                </SInputGroup>
                <SInputGroup>
                    <label>Exercise name: </label>
                    <input type="text" />
                </SInputGroup>
            </SExerciseContainer>
        )
    }
}

const SExerciseContainer = style.div`
    height: 400px;
    background-color: papayawhip;
`

const SInputGroup = style.div`
    margin-bottom: 20px;
`