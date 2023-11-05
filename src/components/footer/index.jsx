import {AppBar, Box, Typography} from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{padding: '0.5%', textAlign: 'center'}} color='success'>
          <Typography variant="h6" color="inherit" component="div">
            ©2023 Data Economics G4
          </Typography>
      </AppBar>
    </Box>
  );
}