import React from 'react';
import MainPage from "./Routes/MainPage";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AskQuestionPage from "./Routes/AskQuestionPage";
import Departments from './Routes/Departments/Departments';
import Subjects from './Routes/Subjects/Subjects';
import Teachers from './Routes/Teachers/Teachers';
import TeacherDetails from './Routes/Teachers/TeacherDetails';
import SubjectDetails from './Routes/Subjects/SubjectDetails';
import DepartmentDetails from './Routes/Departments/DepartmentDetails';
import UserDetails from './Routes/UserDetails';
import Answers from './Routes/Answers/Answers';
function App() {
  return (
    <Router>
    <Routes>
    
    <Route path="/" element= {<MainPage/>}></Route>
    <Route path="/AskQuestion" element= {<AskQuestionPage/>}></Route>
    <Route path="/UserDetails" element= {<UserDetails/>}></Route>
    <Route path="/Departments" element= {<Departments/>}></Route>
    <Route path="/Subjects" element= {<Subjects/>}></Route>
    <Route path="/Teachers" element= {<Teachers/>}></Route>
    <Route path="/Teachers/TeacherDetails/:id" element= {<TeacherDetails/>}></Route>
    <Route path="/Subjects/SubjectDetails/:id" element= {<SubjectDetails/>}></Route>
    <Route path="/Departments/DepartmentDetails/:id" element= {<DepartmentDetails/>}></Route>
    <Route path="/Answer/:id" element= {<Answers/>}></Route>

</Routes>
</Router>

  );
}

export default App;
