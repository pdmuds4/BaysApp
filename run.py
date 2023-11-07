from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn, json

from scripts.predictNaive import Naive
from scripts.predictNetwork import Network

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://bays-app.vercel.app"],
    #allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/nive")
async def nive(centence: str = Form(...)):
    return Naive().predict(centence)

@app.post("/network")
async def ntwork(result: str = Form(...), evidence: str = Form(...)):
    return Network().query(result, json.loads(evidence))


if __name__=="__main__":
    uvicorn.run("run:app",port=3001, reload=True)