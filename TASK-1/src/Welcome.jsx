import React, { useState } from 'react';

function Welcome(props) {
  const [message, setMessage] = useState("Welcome to React!");

  const changeMessage = () => {
    setMessage("You just learned about State and Props!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, {props.name} 👋</h1>
      <p>{message}</p>
      <button onClick={changeMessage}>Click Me</button>
    </div>
  );
}

export default Welcome;
