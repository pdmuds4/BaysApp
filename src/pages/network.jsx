import {Box, Grid} from '@mui/material';

import Header from '../components/header';
import DetailCard from '../components/detailCard';
import NetworkPredictBox from '../components/networkPredictBox';
import Footer from '../components/footer';


export default function Network() {
    return (
        <>
            <Header color="#654bca" text="スマホ利用状況推定アプリ" />
                <Box sx={{padding:'3%'}}>
                    <Box sx={{backgroundColor:'rgba(255,255,255,0.8)', 
                            padding: '3%',
                            borderRadius:'20px', 
                            height: '100%'}}>
                        <Grid container spacing={2}>
                            <DetailCard 
                                title="これはなに" 
                                detail="性別・利用時間・カテゴリーなど、指定された条件のもとで、スマホ利用状況を推定するアプリです。"
                                color="#392782" >
                            </DetailCard>
                            <DetailCard 
                                title="どうやって使うの" 
                                detail="プルダウンから前提条件と求めたい確率を設定し、「START PREDICT」を押してください。確率を計算します。"
                                color="#392782" >
                            </DetailCard>
                            <DetailCard 
                                title="どうやっているの" 
                                detail="複数人のスクリーンタイムデータをもとにベイジアンネットワークを構成し、確率を計算しています。"
                                color="#392782" >
                            </DetailCard>
                        </Grid>
                        <NetworkPredictBox />
                    </Box>
                </Box>
            <Footer color="#654bca"/>
        </>
    );
};