from fastapi import FastAPI
import random
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/generate_binary_string")
def generate_binary_string(length: int):
    binary_string = ''.join(str(random.randint(0, 1)) for _ in range(length))

    return {"binary_string": binary_string}