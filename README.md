# spring-boot-reactjs-kubernetes


<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Spring][spring-shield]][spring-url]
[![React][react-shield]][react-url]
[![Mongodb][mongodb-shield]][mongodb-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Twitter][twitter-shield]][twitter-url]
[![Instagram][instagram-shield]][instagram-url]
[![Facebook][facebook-shield]][facebook-url]



<!-- ABOUT THE PROJECT -->
## About The Project
This is a sample project to demonstrate how to develop and deploy Spring Boot, React and MongoDB microservice based applications in Docker and Kubernetes environment.

![product-screenshot!](/images/product-screenshot.png)

## Architecture

![product-screenshot!](/images/architecture-diagram.png)

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

cd spring-boot-reactjs-kubernetes\corona-tracker-backend

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

cd spring-boot-reactjs-kubernetes\corona-tracker-frontend

# Install NPM packages
npm install

# Running
npm start
```

Now the frontend react app can be accessed on http://localhost:3000


## 2. Run using Docker

### Prerequisites
* Docker

We have to install the Docker Community Edition (CE).

The installation instructions can be followed in the [Official Docker documentation](https://docs.docker.com/get-docker/).


If you're on Windows, you can follow the handy guide on [how to install Docker on Windows](https://learnk8s.io/installing-docker-kubernetes-windows).

We are now ready to build Docker containers.

### Backend Spring Boot Service and MongoDB

```
git clone https://github.com/amrityam/spring-boot-reactjs-kubernetes.git

cd spring-boot-reactjs-kubernetes\corona-tracker-backend

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

### Frontend React App

```
git clone https://github.com/amrityam/spring-boot-reactjs-kubernetes.git

cd spring-boot-reactjs-kubernetes\corona-tracker-frontend

# Build Docker image for frontend app
docker build -t corona-tracker-frontend .

# Run the reactjs frontend container
docker run --name corona-tracker-frontend --rm -p 3000:3000 corona-tracker-frontend

```
Now the frontend react app can be accessed on http://localhost:3000


## 3. Deploy using Kubernetes

### Prerequisites
* Docker : https://docs.docker.com/get-docker/
* kubernetes-cli (kubectl) : https://kubernetes.io/docs/tasks/tools/install-kubectl/
* minikube : https://minikube.sigs.k8s.io/docs/start/ 
* Virtualbox version 5.2+ ([or other minikube compatible hypervisors][minikube-hypervisors])

OR

As an alternative if you are using Windows/Mac system, you can install docker desktop which provides native kubernetes support.

Install K8 through Docker desktop for Windows: https://birthday.play-with-docker.com/kubernetes-docker-desktop/

Install K8 through Docker desktop for Mac: https://medium.com/backbase/kubernetes-in-local-the-easy-way-f8ef2b98be68

```
# Clone this repo
git clone https://github.com/amrityam/spring-boot-reactjs-kubernetes.git

cd spring-boot-reactjs-kubernetes
```

Create a new namespace
```
kubectl create namespace corona-tracker-app-namespace
```

![k8-namespace!](/images/k8-namespace-created.png)

Run kubectl apply command to create/update the resources in the Kubenetes cluster.This will execute the yaml files present in the kubernetes folder.
```
kubectl apply -f kubernetes
```

![k8-resources!](/images/k8-resources-created.png)

As soon as all the 3 Pods are in the Running state, our application is ready.

![k8-pods!](/images/check-running-pods.png)

To check on which ports our backend and frontend apps are running run kubectl get services command.
```
kubectl get services --namespace corona-tracker-app-namespace
```

![k8-services!](/images/k8-services.png)

Backend app is running on http://localhost:30353/ and Frontend app is running on http://localhost:30233/


![springboot-k8-deployed!](/images/springboot-k8-deployed.png)


![frontend-no-data!](/images/frontend-no-data.png)


But wait..Why our frontend app is not displaying any data??

The backend api calls from the frontend app is failing because the frontend app tries to access the backend APIs at localhost:8080. Ideally, in a real-world, you’ll have a public domain for your backend server. But since our entire setup is locally installed, we can use kubectl port-forward command to map the localhost:8080 endpoint to the backend service.

```
kubectl port-forward service/corona-tracker-backend-service 8080:8080 --namespace corona-tracker-app-namespace
```

![port-forwarding-from-server!](/images/port-forwarding-from-server.png)

That’s it! Now, you’ll be able see the data in the frontend app. Here is how the app looks like.

![frontend-with-data!](/images/frontend-with-data.png)

## Scale up deployments
```
kubectl scale deployments corona-tracker-backend-deploy --replicas=3 --namespace corona-tracker-app-namespace
```

![scale-up-deployments!](/images/scale-up-deployments.png)

## Clean up Resources
If you want to delete the pods, services, deployments then you have to just delete the namespace.

```
kubectl delete namespace corona-tracker-app-namespace
```


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Amrityam Rout - [@iamrityam](https://twitter.com/iamrityam) - amrityamlive@gmail.com

Project Link: [https://github.com/amrityam/spring-boot-reactjs-kubernetes](https://github.com/amrityam/spring-boot-reactjs-kubernetes)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/amrityam/spring-boot-reactjs-kubernetes.svg?style=for-the-badge
[contributors-url]: https://github.com/amrityam/spring-boot-reactjs-kubernetes/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/amrityam/spring-boot-reactjs-kubernetes.svg?style=for-the-badge
[forks-url]: https://github.com/amrityam/spring-boot-reactjs-kubernetes/network/members
[stars-shield]: https://img.shields.io/github/stars/amrityam/spring-boot-reactjs-kubernetes.svg?style=for-the-badge
[stars-url]: https://github.com/amrityam/spring-boot-reactjs-kubernetes/stargazers
[issues-shield]: https://img.shields.io/github/issues/amrityam/spring-boot-reactjs-kubernetes.svg?style=for-the-badge
[issues-url]: https://github.com/amrityam/spring-boot-reactjs-kubernetes/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/amrityam/spring-boot-reactjs-kubernetes/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[spring-shield]: https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white
[spring-url]: https://spring.io/projects/spring-boot
[react-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[mongodb-shield]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/
[linkedin-url]: https://www.linkedin.com/in/amrityam-rout-725b4752/
[twitter-shield]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/iamrityam
[instagram-shield]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[instagram-url]: https://www.instagram.com/amrityam_rout/
[facebook-shield]: https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white
[facebook-url]: https://www.facebook.com/amrityam


