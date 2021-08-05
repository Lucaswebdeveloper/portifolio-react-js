import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Portifolio from '../portifolio/Portifolio'
import Content from '../shared/template/Content'


const Routes = props => {
    return (
        <Content>
            <Switch>
                <Route path="/portifolio">
                  <Portifolio />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Content>
    )
}


export default Routes