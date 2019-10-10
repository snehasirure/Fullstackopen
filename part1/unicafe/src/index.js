import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    );
  }

  return (
    <Statistics good={props.good} bad={props.bad} neutral={props.neutral} />
  ); 
}

const Header = (props) => {
  return (
      <h1>
          {props.name}
      </h1>
  );
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
)

const Statistics = (props) => {
    return (
      <div>
        <Statistic text="Good" value={props.good} />
        <Statistic text="Neutral" value={props.neutral} />
        <Statistic text="Bad" value={props.bad} />
        <Statistic text="All" value={props.good+ props.neutral + props.bad} />
        <Statistic text="Average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
        <Statistic text="Positive" value={((props.good)/(props.good+props.neutral+props.bad))*100} percentage="%" />
      </div>
    );
}

const Statistic = (props) => {
    return (
      <div>
          {props.text} {props.value}{props.percentage}
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
      <History good={good} bad={bad} neutral={neutral} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))