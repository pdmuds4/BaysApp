from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from fastapi import FastAPI, Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from scripts.predictNive import Nive

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://data-economy-bays.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(RequestValidationError)
async def handler(request:Request, exc:RequestValidationError):
    print(exc)
    return JSONResponse(content={}, status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)


@app.post("/nive")
async def nive(centence: str = Form(...)):
    return Nive(centence).predict()


if __name__=="__main__":
    uvicorn.run("run:app",port=3001, reload=True)