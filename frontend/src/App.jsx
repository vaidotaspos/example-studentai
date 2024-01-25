import { useState } from 'react'
import './App.css'
import {Toaster} from "react-hot-toast";
import Header from "./components/layout/Header.jsx";
import {Route, Routes} from "react-router-dom";
import ListPage from "./pages/student/ListPage.jsx";

function App() {

  return (
    <div className=''>
      <Toaster />
      <Header />
        <Routes>
            <Route path='/list-student' element={<ListPage />} />
        </Routes>
    </div>
  )
}

export default App
