import {Box, Grid} from '@mui/material';

import Header from '../components/header';
import DetailCard from '../components/detailCard';
import NaivePredictBox from '../components/naivePredictBox';
import Footer from '../components/footer';


export default function Nive() {
    return (
        <>
            <Header color="#2F7D31" text="ニュース記事分類アプリ" />
                <Box sx={{padding:'3%'}}>
                    <Box sx={{backgroundColor:'rgba(255,255,255,0.7)', 
                            padding: '3%',
                            borderRadius:'20px', 
                            height: '100%'}}>
                        <Grid container spacing={2}>
                            <DetailCard 
                                title="これはなに" 
                                detail="ニュース記事のテキストから記事のカテゴリーを予測します。気象・生活・スポーツ・文化・経済から分類します。"
                                color="#214F20" >
                            </DetailCard>
                            <DetailCard 
                                title="どうやって使うの" 
                                detail="テキストボックスに記事の文章を入力し、「START PREDICT」を押してください。カテゴリーごとに確率を表示します。"
                                color="#214F20" >
                            </DetailCard>
                            <DetailCard 
                                title="どうやっているの" 
                                detail="ナイーブベイズによって、その記事に含まれている単語から予測します。予測結果はデータセットに依存します。"
                                color="#214F20" >
                            </DetailCard>
                        </Grid>
                        <NaivePredictBox />
                    </Box>
                </Box>
            <Footer color="#2F7D31" />
        </>
    );
};
