import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

// Client Screens
import TrainersList from './screens/client/TrainersList/TrainersList'
import TrainerDetails from './screens/client/TrainerDetails/TrainerDetails'

// Trainer Screens
import ClientsList from './screens/trainer/ClientsList/ClientsList'
import TrainingsList from './screens/trainer/TrainingsList/TrainingsList'
import NewExcercise from './screens/trainer/NewExcercise/NewExercise'
import NewTraining from './screens/trainer/NewTraining/NewTraining'

ReactDOM.render(<TrainingsList />, document.getElementById('root'))
