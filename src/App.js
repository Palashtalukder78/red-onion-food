import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CheckOut from './components/Home/Checkout/CheckOut';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import SingleFood from './components/Home/SingleFood/SingleFood';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/food/:id">
            <SingleFood></SingleFood>
          </Route>
          <PrivateRoute path="/checkout">
            <CheckOut></CheckOut>
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
