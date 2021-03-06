import * as React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';;







export default function Navbar() {
  return (
  
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor: "#00B4CC"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="inherit"
            sx={{ flexGrow: 1}}
            >
            <Link to="/app" style={{ textDecoration: 'none', color: 'black' }} >
              Fakestagram
            </Link>
          </Typography>
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="inherit"
            >
          <Link to="/about" style={{ textDecoration: 'none', paddingLeft: 13, color: 'black' }}>
              Search
            </Link>
            <Link to="/user" style={{ textDecoration: 'none', paddingLeft: 13, color: 'black' }}>
              User
            </Link>
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
