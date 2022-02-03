import Routing from './Routing'
import 'animate.css'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1 className="title-app">Weather App</h1>
      </header>
      <main>
        <Routing />
      </main>
    </div>
  )
}

export default App;
