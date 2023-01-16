from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient

f = open('dbproperties', 'r', encoding="utf-8");
db_conn_info = f.readline();
client = MongoClient(db_conn_info)
db = client.playlist

app = Flask(__name__)

@app.route('/', methods=["GET"])
def home():
    return render_template('index.html')




if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)