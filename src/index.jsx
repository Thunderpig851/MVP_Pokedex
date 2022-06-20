import React from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import Dex from './components/Dex.jsx'

const App = () => {
  return (
    <RecoilRoot>
      <Dex />
    </RecoilRoot>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)
