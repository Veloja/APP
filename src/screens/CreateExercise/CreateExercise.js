import React, { Component } from 'react'
import style from 'styled-components'
import {withRouter} from 'react-router-dom'

class CreateExcercise extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <SExerciseContainer>
							<button onClick={this.back}>Back</button>
                <SInputGroup>
                    <label>Exercise name: </label>
                    <input type="text" />
                </SInputGroup>
                <SInputGroup>
                    <label>Exercise name: </label>
                    <input type="text" />
                </SInputGroup>

								<button onClick={this.save}>Save</button>
            </SExerciseContainer>
        )
		}
		
		back = () => {
			this.props.history.goBack()
		}
		
		save = () => {
			this.back()
		}
}

export default withRouter(CreateExcercise)

const SExerciseContainer = style.div`
    height: 400px;
    background-color: papayawhip;
`

const SInputGroup = style.div`
    margin-bottom: 20px;
`