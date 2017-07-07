from flask import Flask, render_template
import os
from app import app

port = int(os.getenv("PORT", 3000))
APP_URL = "http://localhost:"+str(port)
REDIRECT_URI = APP_URL+"/callback"


@app.route('/')
def home():
    app_names = [{'name': 'snake'}]
    return render_template('index/index.html',  # get the login.html template to fill the base.html page
                           title='AI Demo',   # Passing objects to web pages
                           apps=app_names)

@app.route('/snake')
def snake():
    print('snake')
    return render_template('snake/snake.html',
                            title='Snake',
                            app_url=APP_URL)

