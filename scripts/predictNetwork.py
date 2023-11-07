import pandas as pd
from pgmpy.models import BayesianNetwork
from pgmpy.inference import VariableElimination


class Network:
    def __init__(self):
        self.model = BayesianNetwork([('sex', 'use_time'), ('time', 'use_time'), ('use_time', 'category')])
        self.model.fit(pd.read_csv('database/screentime.csv'))
        self.infer = VariableElimination(self.model)


    def query(self, result: str, evidence: dict):
        evidence = {key: int(value) for key, value in evidence.items()}
        clone = {"type": result}
        for classes, value in enumerate(self.infer.query([result], evidence).values):
            clone.update({classes: value})
        return clone



if __name__ == '__main__':
    network = Network()
    print(network.query('category',{'time': 15, 'sex': 1}))
