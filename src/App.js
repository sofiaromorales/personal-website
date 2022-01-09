import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Posts from './pages/Posts'


class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact>
                            <Home/>
                        </Route>
                        <Route path='/posts' exact >
                            <Posts/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
