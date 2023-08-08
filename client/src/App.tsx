import 'bootstrap/dist/css/bootstrap.min.css';
import { Game } from "./components/game/Game"
import { Dashboard } from './components/dashboard/dashboard';
import "./App.css"
import { useAppSelector } from './app/hooks';
import {gameMatch} from "./components/game/gameSlice";


function App() {
  const data = useAppSelector(gameMatch)
  
  return (
    <div className="App">
        {data.start == false ? <Dashboard /> : <Game />}
    </div>
  )
}
export default App
