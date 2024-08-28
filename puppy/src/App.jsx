import { useState } from 'react'
import './App.css'
import Newplayerform from './components/newplayerform'
// import Allplayers from './components/allplayers'
function App() {
  
const [token, settoken] = useState(null)
  return (
    <>
      <div>
        <h1>PuppyBowl!</h1>
      </div>
      <Newplayerform 
      token={token}
      settoken={settoken}
      />

    {/* <Allplayers /> */}

    </>
  )
}

export default App
