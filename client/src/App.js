import AppRouter from './AppRouter';
import Navbar from './components/Navbar/Navbar';
// import FetchingData from './components/FetchingData/FetchingData';
import {
  BrowserRouter as Router,

} from "react-router-dom";

import './App.css';

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRouter />
        {/* <FetchingData/> */}
      </div>
    </Router>
  );
}

export default App;

