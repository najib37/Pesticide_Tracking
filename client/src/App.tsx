import { Navbar } from './components/NavBar/NavBar.tsx'
import { HomePage } from './components/HomePage/HomePage.tsx'
import { MapPage } from './components/MapPage/MapPage.tsx'
import { PestcidePage } from './components/Pesticides/PesticidePage.tsx'
import { FeildPage } from './components/FieldsPage/FeildPage.tsx'
import { ReactNode, useState } from 'react'

function App() {

  const [navlink, setNavlink]: [string, Function] = useState('/')

  const routes = {
    '/': <HomePage />,
    '/map': <MapPage />,
    '/fields': <FeildPage />,
    '/pesticides': <PestcidePage />
  }

  return (
    <>
      <Navbar navRoute={navlink} setNavLink={setNavlink} />
      {routes[navlink as keyof typeof routes]}
    </>
  )
}

export default App
