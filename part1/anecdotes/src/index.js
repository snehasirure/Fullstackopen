import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const HighestVotes = (props) => {
  let sumVote = 0
  let maxVote = 0
  let selectedVote = 0
  for (var i = 0; i < anecdotes.length - 1; i++) {
      sumVote = sumVote + props.arrayOfPoints[i]
      if (maxVote < props.arrayOfPoints[i]) {
          maxVote = props.arrayOfPoints[i]
          selectedVote = i
      }
  }
  if (sumVote === 0) {
      return (
          <div>
              <h1>You haven't voted yet</h1>
          </div>
      )
  } else {
      return (
          <div>
              <h1>Anecdote with most votes</h1>
              <p>{anecdotes[selectedVote]}</p>
              <p>has {maxVote} votes</p>
          </div>
      )
  }
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
)

const Anecdotes = (props) => {
  return (
    <div>
      {props.anecdotes}
    </div>
      );  
  }

const App = (props) => {
  const arrayOfZeros = Array.from(Array(anecdotes.length).keys()).fill(0)
  const [selected, setSelected] = useState(0)
  const [points, updatePoints] = useState(arrayOfZeros)
  

  const handleClick = () => {
    const min = 0;
    const max = 5;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setSelected(random)
  }

  const vote = () => {
    const copyOfPoints = [...points]
    copyOfPoints[selected] += 1
    updatePoints(copyOfPoints)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdotes anecdotes={anecdotes[selected]} />
      <p>has {points[selected]} votes</p>
      <Button onClick={vote} text='vote' />
      <Button onClick={handleClick} text='next anecdotes' />

      <HighestVotes arrayOfPoints={points} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes} />, document.getElementById('root')
)