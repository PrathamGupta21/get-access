import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './components/Sidebar';
import Roles from './roles/Roles';
import Dashboard from './dashboard/Dashboard';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={handleSidebarToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Entrust Get Access
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/organizationsRole' element={<Roles />} />
      </Routes>
    </Router>
  );
};

export default App;
