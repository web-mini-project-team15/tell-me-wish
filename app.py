import pymongo.errors
from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient

f = open('dbproperties', 'r', encoding="utf-8")
db_conn_info = f.readline()
client = MongoClient(db_conn_info)
db = client.wish

app = Flask(__name__)

# 메인 페이지 - 소원 빌기 페이지
@app.route('/', methods=["GET"])
def home():
    return render_template('index.html')

# 소원 빌기 페이지
@app.route('/wish-regist-page', methods=["GET"])
def wishRegisterPage():
    return render_template('index.html')

# 소원 등록
@app.route('/wish/regist', methods=['POST'])
def wishSave():
    nickName = request.form['nickname_give']
    wish = request.form['wish_give']
    if nickName == '' or wish == '':
        return jsonify({'status' : '400'})
    else :
        try:
            doc = {
                'nickName' : nickName,
                'wish' : wish,
                'likeCount' : 0
            }
            db.wishes.insert_one(doc)
            return jsonify({'status': '200'})
        except :
            return jsonify({'status': '500'})



# 소원 보기 페이지
@app.route('/wish-look-page', methods=["GET"])
def wishLookPage():
    return render_template('wishLook.html')

# 신년 운세 페이지
@app.route('/fortunetelling-page', methods=["GET"])
def fortunetellingPage():
    return render_template('fortunetelling.html')

# 신년 운세 모두 조회
@app.route('/fortunetelling', methods=['GET'])
def allFortuneTelling():
    allFortune = list(db.fortune.find({},{'_id' : False}));
    return jsonify({'allFortune': allFortune});


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)