import pymongo.errors
from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.json_util import dumps, ObjectId

f = open('dbproperties', 'r', encoding="utf-8")
db_conn_info = f.readline()
client = MongoClient(db_conn_info)
db = client.wish

app = Flask(__name__)

# 메인 페이지 - 소원 빌기 페이지
@app.route('/')
def home():
    return render_template('index.html')

# 소원 빌기 페이지
@app.route('/wish-regist-page')
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
@app.route('/wish-look-page')
def wishLookPage():
    return render_template('wishLook.html')

# 소원 조회
@app.route('/wish/look', methods=["GET"])
def wish_get():
    wish_list = list(db.wishes.find({}))
    return jsonify({'wish_list': dumps(wish_list)})
    # return jsonify({'wish_list': wish_list})

# 좋아요 등록
@app.route('/wish/like', methods=['POST'])
def like_save():
    id_recieve = str(request.form['id_give'])
    like_count = db.wishes.find_one({'_id': ObjectId(id_recieve)})['likeCount']
    try:
        db.wishes.update_one({'_id': ObjectId(id_recieve)}, {'$set': {'likeCount': like_count + 1}})
        return jsonify({'status': '200'})
    except:
        return jsonify({'status': '500'})

# 신년 운세 페이지
@app.route('/fortunetelling-page')
def fortunetellingPage():
    return render_template('fortunetelling.html')

# 신년 운세 모두 조회
@app.route('/fortunetelling', methods=['GET'])
def allFortuneTelling():
    allFortune = list(db.fortune.find({},{'_id' : False}));
    return jsonify({'allFortune': allFortune});



if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
