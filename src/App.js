import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';

function App() {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Shop} />
                    <Route exact path="/review" component={OrderReview} />
                    <Route exact path="/inventory" component={Inventory} />

                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
