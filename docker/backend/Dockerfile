# if you use python for backend
FROM python:3.10.11
WORKDIR /backend

COPY /docker/backend/requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r /backend/requirements.txt

COPY run.py /backend/
COPY /scripts /backend/scripts
COPY /database /backend/database

CMD ["uvicorn", "run:app", "--reload", "--host", "0.0.0.0", "--port", "3001"]

# if you use node for backend
# FROM node:latest
# WORKDIR /backend

# COPY run.js /backend/
# COPY /scripts /backend/
# CMD ["node", "run.js"]