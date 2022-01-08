import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import { NoEncryption } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import BasicModal from '../Modal/ModalUser'










export default function Navbar() {
  return (
  
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="inherit"
            sx={{ flexGrow: 1}}
            >
            <Link to="/app" style={{ textDecoration: 'none' }} >
              Fakestagram
            </Link>
          </Typography>
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="inherit"
            >
          <Link to="/about" style={{ textDecoration: 'none', paddingLeft: 13 }}>
              About
            </Link>
            <Link to="/user" style={{ textDecoration: 'none', paddingLeft: 13 }}>
              User
            </Link>
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
