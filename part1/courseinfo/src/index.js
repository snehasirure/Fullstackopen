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
  return (
      <p>
          {props.name} {props.exercises}
      </p>
  );
}

const Content = (props) => {
return (
  <div>
    <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
    <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
    <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
</div>
)}

const Total = (props) => {
  let totalnumber= 0

  props.parts.forEach(Element => {
    totalnumber+=Element.exercises
  })

  return(
    <div>
      Number of exercises {totalnumber}
    </div>
  )
}

const App = () => {
  // Constant Definitions
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )}
  
ReactDOM.render(<App />, document.getElementById('root'))