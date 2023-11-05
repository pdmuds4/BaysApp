import {AppBar, Box, Typography} from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{padding: '1%', textAlign: 'center'}} color='success'>
          <Typography variant="h4" color="inherit" component="div">
            ニュース記事分類アプリ
          </Typography>
      </AppBar>
    </Box>
  );
}