import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/material/Grid';

export default function DetailCard(props){
    return (
        <>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent sx={{backgroundColor: props.color}}>
                        <Typography level="h3" component="div" textColor={'white'} 
                                    sx={{borderBottom: '2', borderBottomStyle: 'solid' , marginBottom: "2%"}}>
                            {props.title}
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 1.5 }} textColor={'white'}>
                            {props.detail}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>  
        </>        
    );
};