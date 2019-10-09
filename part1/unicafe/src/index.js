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

const Stat = (props) => {
  return (
    <div>
        {props.statname} {props.count} 
    </div>
  );
}

const App = () => {
  // save clicks of each button to own state
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
      <Stat statname="Good" count={good} />
      <Stat statname="Neutral" count={neutral} />
      <Stat statname="Bad" count={bad} />
      <Stat statname="all" count={good+neutral+bad} />
      <Stat statname="average" count={good-bad/(good+bad+neutral)} />
      <Stat statname="positive" count={good/(good+bad+neutral)} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)