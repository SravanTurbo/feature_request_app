## Introduction
This is a simple Feature Request application built off Django (including the Django REST Framework for API CRUD operations) and React.

Every feature request has a priority number w.r.t client and these numbers should not repeat for any client, so if a priority on a new feature is set to an available priority number, then all the task priorities are reordered

## Requirements
* Python3
* virtual environment enabler
* pip



## Set up:
1. Clone the repository : ```git clone https://github.com/SravanTurbo/feature_request_app.git```
2. Navigate to the project directory : ```cd feature_request_app```
3. Create a virtual environment : ```python3 -m venv env```
4. Activate virtual environmet : ```source ./env/bin/activate```
5. Install backend dependencies: ```pip install -r ./backend/requirements.txt```
7. Navigate to frontend directory: ```cd frontend```
8. Install frontend dependencies: ```npm install```

6. Start Backend : ```python backend/manage.py runserver```

## Run the application
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

1. Run this command to start the backend server in the ```backend``` directory: ```python manage.py runserver``` (You have to run this command while you are sourced into the virtual environment)(This will start the backend on the adddress [localhost:8000/api](http://localhost:8000/api))
2. Run this command to start the frontend development server in the ```frontend``` directory: ```[npm start]``` (This will start the frontend on the adddress [localhost:3000](http://localhost:3000))


##Note
Add Clients and Product Area before you start adding Feature Requests
