import React from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import AddUser from './AddUser'
import UserList from './UserList'
import Header from './Header'
import Navbar from './Navbar'
import { Box, Container } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import UpdateUser from './UpdateUser'
import Deduction from './Deduction'
import Login from './Login'

const App = () => {
  const matches = useMediaQuery('(min-width:768px)');
  return (
      <Box className='h-screen w-full flex items-center'>
       <Router>
        <Navbar/>
        <Container sx={!matches ? {paddingTop:25}:null}>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/add" element={<AddUser/>}/>
          <Route path="/user/update/:id" element={<UpdateUser/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/deduction" element={<Deduction/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </Container>
       </Router>
      </Box>
  )
}

export default App