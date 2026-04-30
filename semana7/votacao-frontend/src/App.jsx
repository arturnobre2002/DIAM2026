import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import QuestionDetail from './components/QuestionDetail.jsx'
import VotePage from './components/VotePage'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/questao/:id" element={<QuestionDetail />}/>
        <Route path="/votar/:id" element={<VotePage />}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
