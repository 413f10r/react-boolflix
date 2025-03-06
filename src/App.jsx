import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Cards from './components/Cards'

import { GlobalProvider } from './context/GlobalContext';


function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        < Cards />
      </GlobalProvider >

    </>
  )
}

export default App
