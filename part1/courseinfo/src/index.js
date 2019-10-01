import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>
            {props.courseName}
        </h1>
    );
}

const Part = (props) => {
    console.log('received props.name: ' + props.name);
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    );
}

const App = () => {
  // Constant Definitions
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course}/>
      <Part name={part1.name} exercises={part1.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
      <Part name={part3.name} exercises={part3.exercises}/>

      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))