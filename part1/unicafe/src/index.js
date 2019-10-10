import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
      <h1>
          {props.name}
      </h1>
  );
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
    return (
      <div>
          <p>Good  {props.good} </p>
          <p>Neutral  {props.neutral} </p>
          <p>Bad  {props.bad} </p>
          <p>All  {(props.good)+ (props.neutral) + (props.bad) }</p>
          <p>Average  {(props.good-props.bad)/(props.good+props.neutral+props.bad)} </p>
          <p>positive  {((props.good)/(props.good+props.neutral+props.bad))*100} %</p>
      </div>
    );
  }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  

  return (
    <div>
      <Header name="Give feedback" />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />

      <Header name="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />

      

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)