import { Grid, Box, Button, InputLabel, Select, MenuItem, FormControl} from "@mui/material";
import Typography from '@mui/joy/Typography';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

import { useState } from 'react';

export default function PredictCard(props){
    const [disabled, setDisabled] = useState(true);
    const [sex_disable, setSexDisable] = useState(false);
    const [time_disable, setTimeDisable] = useState(false);
    const [category_disable, setCategoryDisable] = useState(false);

    const [sex, setSex] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [prob, setProb] = useState('');

    const handleChangeSex = (event) => {
        setSex(event.target.value);
        setDisabled(false);
        setSexDisable(true);
    };
    const handleChangeTime = (event) => {
        setTime(event.target.value);
        setDisabled(false);
        setTimeDisable(true);
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
        setDisabled(false);
        setCategoryDisable(true);
    };
    const handleChangeProb = (event) => {
        setProb(event.target.value);
        setDisabled(false);
    };
    return (
        <>
            <Grid item xs={12} sm={6} sx={{padding:'2%'}}>
                <Typography level="h3" 
                            component="div"
                            sx={{borderBottom: '2', 
                                 borderBottomStyle: 'solid' , 
                                 marginBottom: "4%", 
                                 color: "#392782"}}>
                    検証
                </Typography>
                <Box sx={{textAlign:'center'}}>
                    <Typography level="h4" 
                                component="div"
                                sx={{marginBottom: "3%", 
                                    color: "#392782"}}>
                        前提条件
                    </Typography>
                    <form onSubmit={props.handle}>
                        <FormControl sx={{margin:"2%"}} fullWidth>
                            <InputLabel id="demo-simple-select-autowidth-label">性別</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sex}
                                label="Sex"
                                onChange={handleChangeSex}
                            >
                                <MenuItem value={0}>男性</MenuItem>
                                <MenuItem value={1}>女性</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{margin:"2%"}} fullWidth>
                            <InputLabel id="demo-simple-select-autowidth-label">時間</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={time}
                                label="Time"
                                onChange={handleChangeTime}
                            >
                                {Array.from({length: 24}, (_, n) => {
                                    return <MenuItem value={n}>{n}時~{n+1}時</MenuItem>;    
                                })}
                            </Select>
                        </FormControl>
                        <FormControl sx={{margin:"2%", marginBottom: '5%'}} fullWidth>
                            <InputLabel id="demo-simple-select-autowidth-label">カテゴリ</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                onChange={handleChangeCategory}
                            >
                                <MenuItem value={0}>エンターテイメント</MenuItem>
                                <MenuItem value={1}>SNS</MenuItem>
                                <MenuItem value={2}>ゲーム</MenuItem>
                                <MenuItem value={3}>ユーティリティ</MenuItem>
                                <MenuItem value={4}>クリエイティビティ</MenuItem>
                                <MenuItem value={5}>仕事効率化とファイナンス</MenuItem>
                                <MenuItem value={7}>ショッピングと食べ物</MenuItem>
                                <MenuItem value={8}>旅行</MenuItem>
                                <MenuItem value={9}>情報と読書</MenuItem>
                                <MenuItem value={10}>教育</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <Typography level="h4" 
                                component="div"
                                sx={{marginBottom: "3%", 
                                    color: "#392782"}}>
                            求めたい確率
                        </Typography>
                        <FormControl sx={{margin:"2%"}} fullWidth required>
                            <InputLabel id="demo-simple-select-autowidth-label">確率</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={prob}
                                label="Prob"
                                onChange={handleChangeProb}
                            >
                                <MenuItem value="sex" disabled={sex_disable}>性別</MenuItem>
                                <MenuItem value="time" disabled={time_disable}>時間</MenuItem>
                                <MenuItem value="category" disabled={category_disable}>カテゴリ</MenuItem>
                                <MenuItem value="use_time">使用時間</MenuItem>
                            </Select>
                        </FormControl>
                        

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
