import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import React, { useState } from 'react'
import { Mail, Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")({
  backgroundColor: "whitesmoke",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
  color: "black"
})
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


const Navbar = () => {
  const [ open,setOpen ] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
       <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>   PIX SOCIAL
       </Typography>
       <CameraEnhanceIcon sx={{display:{xs:"block", sm:"none"}}}/>
       <Search>
          <InputBase placeholder='Search Here....'></InputBase>
       </Search>
      <Icons>
      <Badge badgeContent={4} color="warning">
        <Mail />
      </Badge>
        <Badge badgeContent={4} color='warning'>
          <Notifications />
        </Badge>
        <Avatar sx={{width:30, height:30 }}  src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          onClick={(e) => setOpen(true)}
        />
      </Icons>


      <UserBox>
        <Avatar sx={{width:30, height:30 }}  src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        onClick={(e) => setOpen(true)}
              />
      </UserBox>
      <Typography sx={{display:{xs:"none", sm:"block"}}}>
        Frank
      </Typography>
      </StyledToolbar>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>History</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar