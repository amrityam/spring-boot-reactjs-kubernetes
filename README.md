<!-- PROJECT SHIELDS -->

# spring-boot-reactjs-kubernetes

<!-- ABOUT THE PROJECT -->
## About The Project

![product-screenshot!](/images/product-screenshot.png)


## Built With

* [Spring Boot](https://spring.io/projects/spring-boot)
* [mongoDB](https://www.mongodb.com/)
* [React](https://reactjs.org/)
* [Maven](https://maven.apache.org/)
* [Docker](https://www.docker.com/)
* [Kubernetes](https://kubernetes.io/)

<!-- GETTING STARTED -->
## Getting Started

## 1. Run from the sources

### Backend Spring Boot Service

#### Prerequisites
* Java 11
* Maven > 3.2.1
* MongoDB > 4.0

Once MongoDB is installed, start a MongoDB server with below command 
```
cd <mongoDB_installation_dir>\bin

mongod --dbpath mongodb_data
```
Run the backend app from source

```
git clone https://github.com/amrityam/spring-boot-reactjs-kubernetes.git

cd corona-tracker-backend

# Building
mvn clean install

# Running
mvn clean install spring-boot:run
```
The app should connect to MongoDB and then listen for requests.

We can access the app on http://localhost:8080


### Frontend React App

#### Prerequisites
* NodeJS > 0.10.x

```
git clone https://github.com/amrityam/spring-boot-reactjs-kubernetes.git

cd corona-tracker-frontend

# Install NPM packages
npm install

# Running
npm start
```

Now the frontend react app can be accessed on http://localhost:3000


## 2. Run using Docker

### Backend Spring Boot Service

#### Prerequisites
* Docker

We have to install the Docker Community Edition (CE).

The installation instructions can be followed in the [Official Docker documentation](https://docs.docker.com/get-docker/).



If you're on Windows, you can follow the handy guide on [how to install Docker on Windows](https://learnk8s.io/installing-docker-kubernetes-windows).

We are now ready to build Docker containers.

```
git clone https://github.com/amrityam/spring-boot-reactjs-kubernetes.git

cd corona-tracker-backend

# Build Docker image for backend app
docker build -t corona-tracker-backend .

# create a docker network so that backend container can communicate with mongo db container

docker network create corona-tracker-network

# Run the mongoDB container
docker run --name=mongo --rm --network=corona-tracker-network mongo

# Run the spring-boot backend container
docker run --name=corona-tracker-backend --rm --network=corona-tracker-network -p 8080:8080 -e MONGO_URL=mongodb://mongo:27017/corona-tracker corona-tracker-backend

```

The app should connect to MongoDB and then listen for requests.

We can access the app on http://localhost:8080

