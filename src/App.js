import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const increaseCounter = () => {
    setCount((prevState) => prevState + 1)
  }

  return (
    <div className="container">
      <div className="navBar">

        <div className='logoDiv'>
          <p>LOGO</p>
        </div>

        <div className='navDiv'>
          <p>Home</p>
          <p>Home2</p>
          <p>Home3</p>
          <p>Home4</p>
        </div>

        <div className='buttonDiv'>
          <button onClick={increaseCounter} className='button'>Clique</button>
        </div>

        <div>
          {count}
        </div>
      </div>
    </div>
  );
}

export default App;
