import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Carlos" sobrenome="Silveira">
            <Filho nome="André"/>
            <Filho nome="Paula"/>
        </Pai>
    </div>    
, document.getElementById('root'))
