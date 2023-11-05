import MeCab, sqlite3
import numpy as np
from typing import Literal

class Nive:
    def __init__(self, sentense: str = None):
        self.sentense = sentense
        self.category = ["weather", "life", "sports", "culture", "economy"]
        
        self.con = sqlite3.connect("database/words.db")
        self.cur = self.con.cursor()


    def predict(self): ## 各カテゴリーに対しての確率を計算する関数
        words = self.parse_words()
        
        scores = [np.log(np.prod([self.wordProb(word,c) for word in words])) for c in self.category]
        scores = [score - min(scores) for score in scores]
        result = {}
        for c_index, c in enumerate(self.category):
            result.update({c: scores[c_index]/sum(scores)*100})

        return result


    def wordProb(self, word: str, category: Literal["weather", "life", "sports", "culture", "economy"]) -> float:
        assert category in self.category, f"Category must be one of {self.category}"

        self.cur.execute(f"SELECT \
                           CAST((SELECT {category} FROM words WHERE word='{word}') AS REAL) / \
                           CAST((SELECT SUM({category}) FROM words) AS REAL)\
                           FROM words;") # ここでエラーが出たら、words.dbの中身を確認してください。
        
        if self.cur.fetchone()[0]:
            return self.cur.fetchone()[0]
        else: # ライプラススムージングの適応
            self.cur.execute(f"SELECT \
                           1 / CAST( \
                           (SELECT SUM({category}) FROM words) + \
                           (SELECT COUNT(*) FROM words WHERE {category}!=0) AS REAL) \
                           FROM words;") # ここでエラーが出たら、words.dbの中身を確認してください。
            return self.cur.fetchone()[0]
        

    
    def parse_words(self) -> np.array: # 文章から単語を取り出す関数
        tagger = MeCab.Tagger()
        node = tagger.parseToNode(self.sentense)

        words = []
        while node:
            if node.feature.split(',')[1] in ['数詞','非自立可能','接尾']:
                node=node.next
                continue

            if node.feature.split(',')[0] in ['名詞', '動詞', '形容詞']:
                words.append(node.surface)

            node=node.next
        
        return np.array(words)


if __name__ == '__main__':
    print(Nive("中東を訪れているアメリカのブリンケン国務長官は4日、ヨルダンで記者会見し、停戦はハマスを利するだけだとして、引き続き人道目的での「戦闘の一時的な停止」を求めていく考えを強調しました。").predict())