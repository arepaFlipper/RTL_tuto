import './App.css';
import Skills from './components/skills/Skills';
import { Application } from './components/application/application';

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={['HTML', 'CSS', 'JavaScript']} />
    </div>
  );
}

export default App;
