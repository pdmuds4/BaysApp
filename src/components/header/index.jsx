import {AppBar, Box, Typography} from '@mui/material';

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{padding: '1%', textAlign: 'center', backgroundColor: props.color}}>
          <Typography variant="h4" color="inherit" component="div">
            {props.text}
          </Typography>
      </AppBar>
    </Box>
  );
}