import './App.css'
import {useTelegram} from "./Hooks/useTelegram.js";

function App() {
  const {tg, webAppData} = useTelegram();
  console.log(tg)
  console.log(webAppData)
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
