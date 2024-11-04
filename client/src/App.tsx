import { Navbar } from './components/NavBar/NavBar.tsx'
import { HomePage } from './components/HomePage/HomePage.tsx'
import { MapPage } from './components/MapPage/MapPage.tsx'
import { PestcidePage } from './components/Pesticides/PesticidePage.tsx'
import { FeildPage } from './components/FieldsPage/FeildPage.tsx'

function App() {
  return (
    <>
      <Navbar />
      <PestcidePage/>
    </>
  )
}

export default App
