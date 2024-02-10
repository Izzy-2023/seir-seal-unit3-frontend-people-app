import { Outlet } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="App">
      <h3>Hello World</h3>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
