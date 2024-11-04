import { Navbar } from './components/NavBar/NavBar.tsx'
import { HomePage } from './components/HomePage/HomePage.tsx'
import { MapPage } from './components/MapPage/MapPage.tsx'
import { PestcidePage } from './components/Pesticides/PesticidePage.tsx'
import { FeildPage } from './components/FieldsPage/FeildPage.tsx'

function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage/> */}
      {/* <MapPage/> */}
      <FeildPage/>
    </>
  )
}

export default App
