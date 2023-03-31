import React from "react";
import List from "./Components/List/List";
import NavBar from "./Components/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <div className="container">
      <NavBar />
      <List />
    </div>
  );
};
export default App;
