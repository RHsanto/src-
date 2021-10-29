
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import LatestNews from './components/LatestNews/LatestNews';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Signin&Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import ServicesDetails from './components/Services/ServiceDetails/ServicesDetails';
import SignUp from './components/Signin&Login/SignUp';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
      <Header></Header>
      <Switch>
        <Route exact path ='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/services'>
          <Services></Services>
        </PrivateRoute>
        <PrivateRoute path='/service/:Id'>
         <ServicesDetails></ServicesDetails>
        </PrivateRoute>
        <Route path='/news'>
          <LatestNews></LatestNews>
        </Route>
        <PrivateRoute path='/pricing'>
        <Pricing></Pricing>
        </PrivateRoute>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/signup'>
        <SignUp></SignUp>
        </Route>
       <Route path='*'>
         <NotFound></NotFound>
       </Route>
      </Switch>
      <Footer></Footer>
    </Router> 
   </AuthProvider>
    </div>
  );
}

export default App;
