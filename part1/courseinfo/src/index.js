import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
      <h1>
          {props.courseName}
      </h1>
  );
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </div>
  )}

const Course = (props) => {
  return (
    <div>
      <Header courseName={props.course.name} />
      <Content course={props.course} />
  </div>
  )}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}
  
ReactDOM.render(<App />, document.getElementById('root'))