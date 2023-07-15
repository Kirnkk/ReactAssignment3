 //import Lifecycle  from "./components/classbasedcomponents/Lifecycle";


//import Counter from "./components/functionbasedcomponents/useStateHook/Counter";
//import Multiplier from "./components/functionbasedcomponents/props/Multiplier";


//import FeedBackForm from "./components/functionbasedcomponents/FormHandling/FeedBackForm";


//import LuxaryCarShow from './components/functionbasedcomponents/listaraendering/LuxaryCarShow';

//import MovieShow from './components/functionbasedcomponents/listrendering/MovieShow';


//import DemoEffect from './components/functionbasedcomponents/useEffectHook/DemoEffect';

//import UserDetailsAPI from './components/functionbasedcomponents/useEffectHook/UserDetailsAPI';


//import CallbackspeCallbacks from "./components/functionbasedcomponents/useCallbackHook/CallbackspeCallbacks";


//import Storehouse from './components/functionbasedcomponents/contextHook/demoContext/Storehouse';
//import CompA from './components/functionbasedcomponents/contextHook/demoContext/CompA';

// import CalculusStore from './components/functionbasedcomponents/contextHook/Calculus/CalculusStore';
// import WelcomeScreen from './components/functionbasedcomponents/contextHook/Calculus/WelcomeScreen';
// import Tables from './components/functionbasedcomponents/contextHook/Calculus/Tables';
// import Cubes from './components/functionbasedcomponents/contextHook/Calculus/Cubes';


//import DemoForm from './components/functionbasedcomponents/useRefHook/DemoForm';


//import DemoReducer from './components/functionbasedcomponents/useReducerHook/DemoReducer';

//import IntensityChange from './components/functionbasedcomponents/useReducerHook/IntensityChange';

// import { ReduxDemo } from './components/functionbasedcomponents/Redux/ReduxDemo';

// import  Basket from './components/functionbasedcomponents/Redux/Basket'

// import Todo from './components/functionbasedcomponents/TodoAssignment/Todo';

//import Keypad from './components/functionbasedcomponents/KeyPadAssignment/Keypad';

// import UnlockKey from './components/functionbasedcomponents/KeyPadAssignment/UnlockKey';

// import TodoP from './components/functionbasedcomponents/TodoPractice/TodoP';

// import './style/style.css'

// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import About from "./components/functionbasedcomponents/routing/About";
// import Cart from "./components/functionbasedcomponents/routing/Cart";
// import Courses from "./components/functionbasedcomponents/routing/Courses";
// import Home from "./components/functionbasedcomponents/routing/Home";
// import Products from "./components/functionbasedcomponents/routing/Products";
// import Login from "./components/functionbasedcomponents/routing/Login";
// import Register from "./components/functionbasedcomponents/routing/Register";
// import NotFound from "./components/functionbasedcomponents/routing/NotFound";
// import FedCourse from "./components/functionbasedcomponents/routing/FedCourse";
// import BedCourse from "./components/functionbasedcomponents/routing/BedCourse";


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/functionbasedcomponents/BookStoreAssignment/Header';
import DisplayBooks from "./components/functionbasedcomponents/BookStoreAssignment/DisplayBooks";
import AddBooks from "./components/functionbasedcomponents/BookStoreAssignment/AddBooks";






function App() {
  return (
    <div>
      {/* <Lifecycle /> */}

      {/* <Counter/> */}
      {/* <Multiplier/> */}

      {/* <FeedBackForm/>  */}

      {/* <LuxaryCarShow/> */}

      {/* <MovieShow/> */}

      {/* <CallbackspeCallbacks/> */}

      {/* <DemoEffect /> */}

      {/* <UserDetailsAPI/> */}

      {/* <Storehouse>
        < CompA />
      </Storehouse> */}

      {/* <CalculusStore>
         <WelcomeScreen/>
         <Cubes/>
         <Tables/>
          </CalculusStore>  */}

        {/* <DemoForm/> */}

        {/* <DemoReducer/> */}

        {/* <IntensityChange/> */}

        {/* <ReduxDemo/> */}

        {/* <Basket/> */}

        {/* <Todo/> */}

        {/* <Keypad/> */}

        {/* <UnlockKey/> */}

        {/* <TodoP/> */}

        {/* <Router>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/courses' element={<Courses/>}>
          <Route path='/courses/fed'   element={<FedCourse/>}/>
          <Route  path='/courses/bed' element={<BedCourse/>}/>
          </Route>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/products' element={<Products/>}/>
          <Route  path='/cart' element={<Cart/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/register' element={<Register/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        </Router> */}

        {/* <AddBooks/> */}

        {/* <DisplayBooks/> */}

        {/* <AddBooks/> */}

        <Router>
                <Routes>
                    <Route path='/' element={<Header/>}/>
                    <Route path='/DisplayBooks' element={<DisplayBooks/>}/>
                    <Route path='/AddBooks' element={<AddBooks/>}/>
                </Routes>
        </Router>



      </div>
  );
}

export default App;


