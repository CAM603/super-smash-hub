import React from 'react'

const Controls = (props) => {

  const logOut = () => {
    localStorage.removeItem('username');
    props.history.push('/')
  }

  const battle = () => {
      if(props.player2.login) {
          props.toggle()
      } else {
          alert('No player 2 selected')
      }
  }

  return (
    <div className="controls-container">
      <div className="logout">
          <p onClick={() => logOut()}>Logout Player1</p>
      </div>
      <div className="controls">
          <p onClick={() => props.prevPage()}>Prev</p>
          <h2 onClick={battle}>Battle</h2>
          <p onClick={() => props.nextPage()}>Next</p>
      </div>
    </div>
  )
}

export default Controls