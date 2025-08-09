import Stars from './components/Stars.jsx'
import './components/styles/App.css'

function App() {
  return (
    <>
      <Stars amount={10}
             icon={'★'}
             iconSize={60}
             selectedColor={'yellow'}/>
    </>
  );
}

export default App;