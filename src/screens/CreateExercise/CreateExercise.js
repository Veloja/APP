import React, { Component } from 'react';
import style from 'styled-components';

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sets: 3
        }
    }

    render() {

        return (
            <SExerciseContainer>
                <SInputGroup>
                    <label>Exercise name: </label>
                    <input type="text" defaultValue="Enter name" />
                </SInputGroup>
                <SInputGroup>
                    <label>Sets: </label>
                    <input type="number" defaultValue={0} onChange={this.updateSets} />
                </SInputGroup>
                    <WrapForRepetitons>
                        {
                            [...Array(this.state.sets)].map((item, index) =>
                                <SBasedOnSets sets={this.state.sets} >
                                    <input key={index} type="number" />
                                </SBasedOnSets>
                            )
                        }
                    </WrapForRepetitons>

                    <WrapForRepetitons>
                        {
                            [...Array(this.state.sets)].map((item, index) =>
                                <SBasedOnSets sets={this.state.sets} >
                                    <input key={index} type="number" />
                                </SBasedOnSets>
                            )
                        }
                    </WrapForRepetitons>

                    <WrapForRepetitons>
                        {
                            [...Array(this.state.sets)].map((item, index) =>
                                <SBasedOnSets sets={this.state.sets} >
                                    <input key={index} type="number" />
                                </SBasedOnSets>
                            )
                        }
                    </WrapForRepetitons>
            </SExerciseContainer>
        )
    }

    updateSets = (event) => {
        this.setState({
           sets: +event.target.value
        })
    }

    // updateSets = (event) => {
    //     this.setState({
    //        sets: event.target.value
    //     })
    // }
}

const SExerciseContainer = style.div`
    height: 400px;
    width: 500px;
    margin: 0 auto;
    background-color: papayawhip;
    text-align: center;
    padding: 30px;
`

const SInputGroup = style.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        width: 100px;
        display: inline-block;
    }
`

const WrapForRepetitons = style.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
`

const SBasedOnSets = style.div`
    display: block;
    width: 100px;
    min-width: 33%;
    input {
        width: 100px;
    }
`