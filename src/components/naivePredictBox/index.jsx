import { Card, CardContent, Grid } from "@mui/material";
import { useState } from "react";

import { postResponse } from '../../response';
import PredictCard from './predictCard';
import ResultCard from './resultCard';

export default function NaivePredictBox(){
    const [result, setResult] = useState(null);

    const handlesubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const data = e.target[0].value;
        formData.append('centence', data);
        const res = await postResponse("/nive", formData);
        console.log(res);
        setResult(res);
    };
    return (
        <>
            <Card sx={{marginTop:'2%', backgroundColor:'rgba(255,255,255,0.8)'}}>
                <CardContent variant="outlined" sx={{border: "5px solid #2C762F", padding:'1%'}}>
                    <Grid container>
                        <PredictCard handle={handlesubmit}/>
                        <ResultCard result={result}/>
                    </Grid>
                </CardContent>
            </Card>
        </>        
    );
};