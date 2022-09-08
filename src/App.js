import './App.css';
import Numbers from './components/numbers/numbers';

function App() {

  return (
    <div className='container'>
      <header >
        <div>
          <form>
            <input className='input_text' placeholder='hola'></input>
          </form>
        </div>
        <div className='keyboard'>
          <Numbers />
        </div>
      </header>
    </div>
  );
}

export default App;
