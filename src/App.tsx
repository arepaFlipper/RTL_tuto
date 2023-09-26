import './App.css'
import { Users } from './components/'
import AppProviders from './providers/AppProviders'
const App = () => {
  return (
    <AppProviders>
      <div className="App">
        <Users />
      </div>
    </AppProviders>
  )
}

export default App
