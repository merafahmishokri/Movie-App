import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        
    <Box sx={{ width: '100%',position:"absolute"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}} display={'flex'} justifyContent={'end'}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
        sx={{ "& .MuiTabs-indicator": { backgroundColor: '#DFD0B8'}}} >
          <Tab label="Home" component={Link} to="/home"  sx={{color:"white",'&.Mui-selected': { color: '#DFD0B8'},marginRight:"230px"}} />
          <Tab label="Contact Us" component={Link} to="/contactUs"  sx={{color:"white",'&.Mui-selected': { color: '#DFD0B8'} ,marginRight:"230px"}}/>
          <Tab label="About" component={Link} to="/about"  sx={{color:"white",marginRight:"230px",'&.Mui-selected': { color: '#DFD0B8'}}}/>
          <Tab label={<FavoriteOutlinedIcon></FavoriteOutlinedIcon>} component={Link} to="/favorite" sx={{color:"white",'&.Mui-selected': { color: '#DFD0B8'},}}/>
          <Tab label={<AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>} component={Link} to="/profile" sx={{color:"white",'&.Mui-selected': { color: '#DFD0B8'}}}/>
        </Tabs>
        
      </Box>
    </Box>
       
  );
}















