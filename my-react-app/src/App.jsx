
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Registration from './pages/registration'
import Home from './pages/home'
import Login from './pages/login'
import Nav from './components/Nav'
import { useUserContext } from './context/UserContex'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  const {userdata} = useUserContext();

  return (
    <div
    >
      <Nav />


      <Routes>
        <Route
          path='/'
          element={userdata ? <Home /> : <Navigate to='/login' /> }
      />
       <Route
          path='/collection'
          element={userdata ? <Collections/> : <Navigate to='/login' /> }
      />
       <Route
          path='/About'
          element={userdata ? <About/> : <Navigate to='/login' /> }
      />
      <Route
          path='/contact'
          element={userdata ? <Contact /> : <Navigate to='/login' /> }
      />

      <Route
      path='/registration'
        element={userdata?<Navigate to='/'/>:<Registration/>}
      />
        <Route
          path='/login'
          element={userdata?<Navigate to='/'/>:<Login/>}
        />
      </Routes>
    </div>
  )
}

export default App
