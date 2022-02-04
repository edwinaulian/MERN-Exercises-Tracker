import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

const TableHeaders = () => {
  return (
    <thead className="thead-light">
      <tr>
        <th className="row-header">Username</th>
        <th className="row-header">Description</th>
        <th className="row-header">Duration</th>
        <th className="row-header">Date</th>
        <th className="row-header">Actions</th>
      </tr>
    </thead>
  )
}

const Exercise = props => (
  <tr>
    <td className="row-value">{props.exercise.username}</td>
    <td className="row-value">{props.exercise.description}</td>
    <td className="row-value">{props.exercise.duration}</td>
    <td className="row-value">{props.exercise.date.substring(0, 10)}</td>
    <td className="row-value">
      <button type="button" className="bi bi-trash-fill" onClick={() => { props.deleteExercise(props.exercise._id) }} />
      &nbsp;&nbsp;
      <button type="button" className="bi bi-pencil-square" onClick={() => { props.editExercise(props.exercise._id) }} />
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.editExercise = this.editExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  editExercise(id) {
    // This is for open in new tab
    // window.open(`/edit/${id}`); 
    // This is for open in same tab
    window.location = `/edit/${id}`;
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }


  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} editExercise={this.editExercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <TableHeaders />
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}