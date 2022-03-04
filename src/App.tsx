import React from 'react';
import Sidebar from "./component/Sidebar";
import UpperNavbar from "./component/UpperNavbar";

function App() {
  return (
    <div className="App text-3xl font-bold h-screen">
        <UpperNavbar/>
        <Sidebar/>
    </div>
  );
}

export default App;
