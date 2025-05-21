import { useState } from "react";

function App () {

  const [message, ] = useState();

  let message = 1;

  return (
    <div>
      <h1 onClick={message+=1}>{message}</h1>
    </div>
  )
}

export default App;