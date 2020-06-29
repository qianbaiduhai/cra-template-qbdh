import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hello from 'containers/views/Hello';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Hello />
                </Route>
            </Switch>
        </Router>
    );
};
export default App;
