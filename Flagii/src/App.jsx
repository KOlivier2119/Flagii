import FlagIdentifier from "./components/FlagIdentifier"
import Landing from "./components/Landing"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="font-fira min-w-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/flagii" element={<FlagIdentifier />} />
      </Routes>
    </div>
  )
}

export default App
