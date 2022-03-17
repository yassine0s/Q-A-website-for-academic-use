import React from 'react';
import MainPage from "./Routes/MainPage";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AskQuestionPage from "./Routes/AskQuestionPage";
import UserDetailsPage from "./Routes/UserDetailsPage";
function App() {
  return (
    <Router>
    <Routes>
      
    <Route path="/" element= {<MainPage/>}></Route>
    <Route path="/Question" element= {<AskQuestionPage/>}></Route>
    <Route path="/UserDetails" element= {<UserDetailsPage/>}></Route>
</Routes>
</Router>

  );
}

export default App;
