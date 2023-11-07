import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/joy/Typography';
import { Grid, Box } from "@mui/material";

export default function Pie(props) {
    return (
        <>
            <Grid item xs={12} sm={6} sx={{padding:'2%'}}>
                <Typography level="h3" 
                            component="div"
                            sx={{borderBottom: '2', 
                                borderBottomStyle: 'solid', 
                                marginBottom: "4%", 
                                color: "#392782"}}>
                    結果
                </Typography>
                <Box>
                    <PieChart
                        colors={props.color}
                        series={[
                            {
                            data: props.data,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        width={400}
                        height={400}
                        slotProps={{
                            legend: { hidden: true },
                        }}
                    />
                </Box>
            </Grid>
        </>
    );
};