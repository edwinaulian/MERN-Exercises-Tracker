import React from 'react';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./app/navbar.component"
import ExercisesList from "./app/exercises-list.component";
import EditExercise from "./app/edit-exercise.component";
import CreateExercise from "./app/create-exercise.component";
import CreateUser from "./app/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;

