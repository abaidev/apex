## Description
This project registers Person Profile, phone number and taxpayer identification number 
are validated on frontend and backend <br/> 

## Enviroment 

create virtual enviroment via `virtualenv venv` <br/>
to activate enviroment use:<br/>
##### `source ./venv/bin/activate` [Linux]<br/>
##### `venv\Scripts\activate` [Windows]<br/>

## Install Requirements

#### `pip install -r requirements.txt`

## Setup

create  `.env` file in main directory and fill the followings:

	APEX_SECRET_KEY = YOUR_APEX_SECRET_KEY
	DB_APEX_NAME =  YOUR_DB_NAME
	DB_USER =  YOUR_DB_USER_NAME
	DB_PASSWORD =  YOUR_DB_PASSWORD
	DB_HOST =  YOUR_DB_HOST
	DB_PORT =  YOUR_DB_PORT
	

#### `Windows` users:

You need to specify all these in enviroment variables (example: [Youtube](https://www.youtube.com/watch?v=bEroNNzqlF4))

## Migration
after you declare all variables and input all needed data in them. run command:
#### `python manage.py migrate`
then you need to create a superuser (admin):
#### `python manage.py createsuperuser`

## Run server

Now you ready to go, open terminal and type command: `python manage.py runserver`. 
It will run the project in the development mode on [http://127.0.0.1:8000/](http://127.0.0.1:8000) .<br />

### Frontend (inside directory `socialnet/frontend`)
Install dependencies using command `npm install` or `yarn install`. <br/>
After installation complete run command `npm run start` or `yarn run start`. <br/>
This will open browser on [http://127.0.0.1:3000/](http://127.0.0.1:3000) - HomePage.

## API:
implemented with DRF. <br/>
#### `/api/profile/`
with <b>GET</b> method gives list of all registered profiles <br/>
with <b>POST</b> method creates new resource (registering new Profile) <br/>

#### `/api/profile/<id>/`
with <b>GET</b> method gives detailed information about registered profile <br/>
with <b>PUT, PATCH, DELETE</b> methods makes required updates for certain profile <br/>



