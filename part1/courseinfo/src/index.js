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

  const Total = (props) => {
    const sumOfExercise = props.parts.reduce((sum, currentValue) => sum + currentValue.exercises, 0)
    console.log(sumOfExercise)
    return (<div>Total of {sumOfExercise} exercises</div>)
    }

const Course = (props) => {
  return (
    <div>
      <Header courseName={props.course[0].name} />
      <Content course={props.course[0]} />
      <Total parts={props.course[0].parts} />

      <Header courseName={props.course[1].name} />
      <Content course={props.course[1]} />
      <Total parts={props.course[1].parts} />
  </div>
  )}

  const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

  return (
    <div>
      <Header courseName='Web Development Curriculum' />
      <Course course={courses} />
    </div>
  )
}
  
ReactDOM.render(<App />, document.getElementById('root'))