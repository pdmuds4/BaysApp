import { Grid, Box, Button, TextField } from "@mui/material";
import Typography from '@mui/joy/Typography';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

import { useState } from 'react';

export default function PredictCard(props){
    const [disabled, setDisabled] = useState(true);

    const changeButton = (e) => {
        if (e.target.value) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };
    return (
        <>
            <Grid item xs={12} sm={6} sx={{padding:'2%'}}>
                <Typography level="h3" 
                            component="div"
                            sx={{borderBottom: '2', 
                                 borderBottomStyle: 'solid' , 
                                 marginBottom: "4%", 
                                 color: "#2C762F"}}>
                    検証
                </Typography>
                <Box sx={{textAlign:'center'}}>
                    <form onSubmit={props.handle}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="記事の文章を入力してください"
                            multiline
                            rows={4}
                            color="success"
                            onKeyUp={changeButton}
                            required
                        >
                        </TextField>
                        <br/>
                        <Button component="label" variant="contained" size="large" color="success" 
                                startIcon={<DownloadDoneIcon />} sx={{margin: "10px 0"}} disabled={disabled}>
                            Start Predict
                            <input type="submit" hidden/>
                        </Button>   
                    </form>
                </Box>
            </Grid>
        </>
    );
};
