import { Grid, Alert, AlertTitle } from "@mui/material";
import Typography from '@mui/joy/Typography';

import Pie from './pie';

export default function ResultCard(props) {
    if (props.result){
        if(props.result.type==='sex'){
            const color = ["#2a51c8", '#ed4747'];
            const data = [{ id: 0, value: props.result[0], label: '男性'},
                          { id: 1, value: props.result[1], label: '女性'}];
            return (<Pie data={data} color={color}/>);

        } if(props.result.type==="time"){
            const color = ['#0B3D91', '#192376', '#2E52A2', '#FAD6A5', '#87CEEB', '#CDEBFF',
                           '#87CEEB', '#87CEFA', '#4EA7D8', '#FFDAB9', '#FFA07A', '#0C2C84'];
            const data = [{ id: 0, value: props.result[0]+props.result[1], label: '0:00~2:00'},
                          { id: 1, value: props.result[2]+props.result[3], label: '2:00~4:00'},
                          { id: 2, value: props.result[4]+props.result[5], label: '4:00~6:00'},
                          { id: 3, value: props.result[6]+props.result[7], label: '6:00~8:00'},
                          { id: 4, value: props.result[8]+props.result[9], label: '8:00~10:00'},
                          { id: 5, value: props.result[10]+props.result[11], label: '10:00~12:00'},
                          { id: 6, value: props.result[12]+props.result[13], label: '12:00~14:00'},
                          { id: 7, value: props.result[14]+props.result[15], label: '14:00~16:00'},
                          { id: 8, value: props.result[16]+props.result[17], label: '16:00~18:00'},
                          { id: 9, value: props.result[18]+props.result[19], label: '18:00~20:00'},
                          { id: 10, value: props.result[20]+props.result[21], label: '20:00~22:00'},
                          { id: 11, value: props.result[22]+props.result[23], label: '22:00~24:00'}];
            return (<Pie data={data} color={color}/>);

        } if(props.result.type==="category"){
            const color = ['#ed4747', '#e85ca6', '#3cb7da', '#3f3f3f', '#eb9c26', 
                           "#2a51c8", "#a15bd0", "#2ac86f", '#969696', '#449721',];
            const data = [{ id: 0, value: props.result[0], label: 'エンターテイメント'},
                          { id: 1, value: props.result[1], label: 'SNS'},
                          { id: 2, value: props.result[2], label: 'ゲーム'},
                          { id: 3, value: props.result[3], label: 'ユーティリティ'},
                          { id: 4, value: props.result[4], label: 'クリエイティビティ'},
                          { id: 5, value: props.result[5], label: '仕事効率化とファイナンス'},
                          { id: 6, value: props.result[6], label: 'ショッピングと食べ物'},
                          { id: 7, value: props.result[7], label: '旅行'},
                          { id: 8, value: props.result[8], label: '情報と読書'},
                          { id: 9, value: props.result[9], label: '教育'}];
            return (<Pie data={data} color={color}/>);
        } if(props.result.type==="use_time"){
            const color = ['#4792ed', '#3c7bc8', '#3164a3', 
                           '#2a568c', '#1d3e65', '#162f4d'];
            const data = [{ id: 0, value: props.result[0], label: '0分~10分'},
                          { id: 1, value: props.result[1], label: '10分~20分'},
                          { id: 2, value: props.result[2], label: '20分~30分'},
                          { id: 3, value: props.result[3], label: '30分~40分'},
                          { id: 4, value: props.result[4], label: '40分~50分'},
                          { id: 5, value: props.result[5], label: '50分~60分'}];
            return (<Pie data={data} color={color}/>);
        }
    }else{
        return (
            <>
                <Grid item xs={12} sm={6} sx={{padding:'2%'}}>
                    <Typography level="h3" 
                                component="div"
                                sx={{borderBottom: '2', 
                                     borderBottomStyle: 'solid' , 
                                     marginBottom: "4%", 
                                     color: "#392782"}}>
                        結果
                    </Typography>
                    <Alert variant="outlined" severity="warning">
                        <AlertTitle>前提条件と求めたい確率を設定してください</AlertTitle>
                        <strong>左のプルダウン</strong>から選択し、<br />
                        <strong>「START PREDICT」</strong>で予測を開始してください。
                    </Alert>
                </Grid>
            </>  
        );
    }
}