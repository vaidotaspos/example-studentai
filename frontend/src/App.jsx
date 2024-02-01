import {useState} from 'react'
import './App.css'
import {Toaster} from "react-hot-toast";
import Header from "./components/layout/Header.jsx";
import {Route, Routes} from "react-router-dom";
import StudentListPage from "./pages/student/ListPage.jsx";
import StudentCreatePage from "./pages/student/CreatePage.jsx";
import StudentEditPage from "./pages/student/EditPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";

import UserListPage from "./pages/user/ListPage.jsx";
import UserEditPage from "./pages/user/EditPage.jsx";
import UserCreatePage from "./pages/user/CreatePage.jsx";

function App() {

    return (
        <div className=''>
            <Toaster/>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/list-student' element={<StudentListPage/>}/>
                <Route path='/create-student' element={<StudentCreatePage/>}/>
                <Route path='/edit-student/:id' element={<StudentEditPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/list-user' element={<UserListPage/>}/>
                <Route path='/edit-user/:id' element={<UserEditPage/>}/>
                <Route path='/create-user' element={<UserCreatePage/>}/>
            </Routes>
        </div>
    )
}

export default App
