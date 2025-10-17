from fastapi import FastAPI
app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok", "app": "py-app"}

@app.get("/")
def root():
    return "Hello from py-app"
