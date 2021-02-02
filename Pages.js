import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Pegawai from './Pegawai'

const Pages = () => (
    <Switch>
        <Route path='/pegawai' component={Pegawai} />
    </Switch>
)

export default Pages
