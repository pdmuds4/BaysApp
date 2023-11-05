import Grid from '@mui/material/Grid';

import DetailCard from './detailCard';

export default function DetailBox() {
    return (
        <Grid container spacing={2}>
            <DetailCard 
                title="これはなに" 
                detail="ニュース記事のテキストから記事のカテゴリーを予測します。気象・生活・スポーツ・文化・経済から分類します。" >
            </DetailCard>
            <DetailCard 
                title="どうやって使うの" 
                detail="テキストボックスに記事の文章を入力し、「START PREDICT」を押してください。カテゴリーごとに確率を表示します。">
            </DetailCard>
            <DetailCard 
                title="どうやっているの" 
                detail="ナイーブベイズによって、その記事に含まれている単語から予測します。予測結果はデータセットに依存します。">
            </DetailCard>
        </Grid>
    );
}