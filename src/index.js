import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

// Client Screens
import TrainersList from './screens/client/TrainersList/TrainersList'
import TrainerDetails from './screens/client/TrainerDetails/TrainerDetails'

// Trainer Screens
import ClientsList from './screens/trainer/ClientsList/ClientsList'
import TrainingsList from './screens/trainer/TrainingsList/TrainingsList'
import TrainingPreview from './screens/trainer/TrainingPreview/TrainingPreview'
import NewExcercise from './screens/trainer/NewExcercise/NewExercise'

ReactDOM.render(<TrainingPreview />, document.getElementById('root'))
