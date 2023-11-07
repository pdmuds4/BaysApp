import {AppBar, Box, Typography} from '@mui/material';

export default function Footer(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{padding: '0.5%', textAlign: 'center', backgroundColor: props.color}}>
          <Typography variant="h6" color="inherit" component="div">
            ©2023 Data Economics G4
          </Typography>
      </AppBar>
    </Box>
  );
}