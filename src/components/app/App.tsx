import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { PaymentFormPage } from '../../pages/payment-form';
import { SuccessPage } from '../../pages/success';
import './app.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={'/'} exact>
            <PaymentFormPage />
          </Route>
          <Route path={'/success'} exact>
            <SuccessPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;