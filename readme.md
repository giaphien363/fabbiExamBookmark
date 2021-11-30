## Project Bookmark Manager

### Create venv
- `python -m venv venv`
- `pip install -r requirements.txt`


### Set up mongo in docker
- `docker pull mongo`

- `docker run --name mongo_docker  -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=[admin] -e MONGO_INITDB_ROOT_PASSWORD=[admin] mongo`

- `docker start mongo_docker`


### Run container mongo_docker bash
- `docker exec -it mongo_docker bash`
- `mongo --username [admin] --password [admin]`
- `use [db_name]`

