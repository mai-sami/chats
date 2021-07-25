 import './App.css';
 import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
function App() {
  return (
    <Router>  
    <div className="App">
  
       <Route path="/">
     
          <div className="__mains">
          <div className="__main">
           
      <Nav />
      <ChatBody />
    </div>
    </div>

    </Route>
    </div>
    </Router>
  );
}

export default App;
