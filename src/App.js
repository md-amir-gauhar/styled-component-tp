import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Homepage from './components/pages/Homepage'
import Cart from './components/pages/Cart'
import Colors from './assets/color'

const AppEL = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

function App() {
  return (
    <Router>
      <AppEL>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </AppEL>
    </Router>
  );
}

export default App;
