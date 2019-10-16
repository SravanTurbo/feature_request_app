## Introduction
This is a simple Feature Request application built off Django (including the Django REST Framework for API CRUD operations) and React. Feature Request can be for any client under any product area


### Use cases

#### We'll scope the problem to handle only the following use cases

* **User** creates a Feature Request
* **User** creates a Client and Product Area if needed(running on sample data now, no solid list) 
* **User** views Frequency Request List, Client List, and Product Area List
* **User** can edit any of the existing entries
* **Service** need to reorder the task priorities
* **Service** need to prefer consistency over availability

#### Out of scope
* **User** Login and authentication set up
* **Users** cannot be tagged to any of the entries
* **User** Searching any of the entries 


## Wanna try this: 
Click [here](https://sravanturbo.github.io/feature-request-app-frontend/) to play with the app

### Approach:
* Feature Request has many to one relationship with Client and Product Area, So lets start with 3 collections (Feature Requests, Client, ProductArea) 
* Reordering of tasks is done by incrementing the priority of tasks that are gte to the priority that is being assigned w.r.t
client, this operation is of O(n)
* CRUD API for all the three collections to interact with client
* Backend service was hosted on heroku to server the requests from client
* Frontend is developed using React and hosted using github-pages [here](https://github.com/SravanTurbo/feature-request-app-frontend)

### Run it on your local machine
I have put two ways here
1. Fast Mode
2. Clear Mode

#### 1. Fast Mode
**Requirements:**
* git
* docker

**Set up:**
1. Clone the repository : ```git clone https://github.com/SravanTurbo/feature_request_app.git```
2. Navigate to the project directory : ```cd feature_request_app```
3. Install all dependecies : ```docker-compose build```
  
**Run the application:**
1. ```docker-compose up```
(This will start the backend on the adddress [localhost:8000/api](http://localhost:8000/api) and frontend on the adddress [localhost:3000](http://localhost:3000))
2. ```cntrl+C``` to stop the running processes
  

#### 2. Clear Mode:
**Requirements:**
* git
* Python3
* virtual environment enabler
* pip

**Set up:**
1. Clone the repository : ```git clone https://github.com/SravanTurbo/feature_request_app.git```   
2. Navigate to the project directory : ```cd feature_request_app```
3. Create a virtual environment : ```python3 -m venv env```
4. Activate virtual environmet : ```source ./env/bin/activate```
5. Install backend dependencies: ```pip install -r ./backend/requirements.txt```
7. Navigate to frontend directory: ```cd frontend```
8. Install frontend dependencies: ```npm install```
9. Start Backend : ```python backend/manage.py runserver```

**Run the application:**
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

1. Run this command to start the backend server in the ```backend``` directory: ```python manage.py runserver``` (You have  to run this command while you are sourced into the virtual environment)(This will start the backend on the adddress [localhost:8000/api](http://localhost:8000/api))
2. Run this command to start the frontend development server in the ```frontend``` directory: ```[npm start]``` (This will start the frontend on the adddress [localhost:3000](http://localhost:3000))


**Deployment Reference:**
* Backend: https://devcenter.heroku.com/articles/container-registry-and-runtime
* Frontend: https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f



