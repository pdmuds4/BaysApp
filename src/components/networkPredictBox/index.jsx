import { Card, CardContent, Grid } from "@mui/material";
import { useState } from "react";

import { postResponse } from '../../response';
import PredictCard from './predictCard';
import ResultCard from './resultCard';

export default function NetworkPredictBox(){
    const [result, setResult] = useState(null);

    const handlesubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const evidence = {};
        if (e.target[0].value){
            evidence.sex = e.target[0].value;
        }if(e.target[2].value){
            evidence.time = e.target[2].value;
        }if(e.target[4].value){
            evidence.category = e.target[4].value;
        }
        formData.append('evidence', JSON.stringify(evidence));
        formData.append('result', e.target[6].value);

        const res = await postResponse("/network", formData);
        console.log(res);
        setResult(res);
    };
    return (
        <>
            <Card sx={{marginTop:'2%', backgroundColor:'rgba(255,255,255,0.7)'}}>
                <CardContent variant="outlined" sx={{border: "5px solid #392782", padding:'1%'}}>
                    <Grid container>
                        <PredictCard handle={handlesubmit}/>
                        <ResultCard result={result}/>
                    </Grid>
                </CardContent>
            </Card>
        </>        
    );
};