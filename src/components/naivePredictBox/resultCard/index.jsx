import { Grid, Box, 
         List, ListItem, ListItemText, ListItemAvatar, Avatar, 
         Alert, AlertTitle } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CottageIcon from '@mui/icons-material/Cottage';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function ResultCard(props) {
    if (props.result){
        const list_items =[
            {avator: <WbSunnyIcon/>,          bgcolor: '#436bfa', primary: 'Weather', secondary: props.result.weather},
            {avator: <CottageIcon/>,          bgcolor: '#2ac86f', primary: 'Life', secondary: props.result.life},
            {avator: <SportsBasketballIcon/>, bgcolor: '#6a17a1', primary: 'Sports', secondary: props.result.sports},
            {avator: <TempleBuddhistIcon />,  bgcolor: '#ec600f', primary: 'Culture', secondary: props.result.culture},
            {avator: <ApartmentIcon />,       bgcolor: '#b43434', primary: 'Economy', secondary: props.result.economy},
        ];
        list_items.sort((a, b) => b.secondary - a.secondary);
        return (
            <>
                <Grid item xs={12} sm={6} sx={{padding:'2%'}}>
                    <Typography level="h3" 
                                component="div"
                                sx={{borderBottom: '2', 
                                     borderBottomStyle: 'solid' , 
                                     marginBottom: "4%", 
                                     color: "#2C762F"}}>
                        結果
                    </Typography>
                    <Box>
                        <PieChart
                            colors={["#436bfa", "#2ac86f", "#6a17a1", "#ec600f", "#b43434"]}
                            series={[
                                {
                                data: [
                                    { id: 0, value: props.result.weather, label: 'Weather' },
                                    { id: 1, value: props.result.life, label: 'Life' },
                                    { id: 2, value: props.result.sports, label: 'Sports' },
                                    { id: 3, value: props.result.culture, label: 'Culture' },
                                    { id: 4, value: props.result.economy, label: 'Economy' },
                                ],
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </Box>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: null }}>
                        {list_items.map((item) => {
                            return (
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar sx={{bgcolor: item.bgcolor}}>
                                        {item.avator}
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.primary} secondary={item.secondary + "%"} />
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>
            </>
        );
    }else{
        return (
            <>
                <Grid item xs={12} sm={6} sx={{padding:'2%'}}>
                    <Typography level="h3" 
                                component="div"
                                sx={{borderBottom: '2', 
                                     borderBottomStyle: 'solid' , 
                                     marginBottom: "4%", 
                                     color: "#2C762F"}}>
                        結果
                    </Typography>
                    <Alert variant="outlined" severity="warning">
                        <AlertTitle>記事の文章を入力してください</AlertTitle>
                        <strong>左のテキストボックス</strong>に入力し、<br />
                        <strong>「START PREDICT」</strong>で予測を開始してください。
                    </Alert>
                </Grid>
            </>  
        );
    }
}