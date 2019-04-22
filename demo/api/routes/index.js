var express = require('express');
var router = express.Router();
var Mongo = require('mongodb-curd');

let db = 'record'; //数据库
let icn = 'income'; //收入的数据表
let pa = 'pay' //支出的数据表


/* GET home page. */

//添加数据
router.post('/api/addUrse', function(req, res, next) {
    let obj = req.body;
    if (obj.money && obj.time && obj.time && obj.beizhu && obj.fenlei && obj.chengyuan) {
        Mongo.insert(db, pa, obj, (resoult) => {
            if (!resoult) {
                res.send({
                    code: 0,
                    msg: "添加失败"
                })
            } else {
                res.send({
                    code: 1,
                    msg: "添加成功",
                    data: resoult
                })
            }
        })
    } else {
        res.send({ msg: '缺少参数' })
    }

});


//删除数据
router.post('/api/delUrse', function(req, res, next) {
    let id = req.body.id;
    Mongo.remove(db, pa, { '_id': id }, (resoult) => {
        if (!resoult) {
            res.send({
                code: 0,
                msg: "删除失败"
            })
        } else {
            res.send({
                code: 1,
                msg: "删除成功",
                data: resoult
            })
        }
    })
});

//修改数据
router.post('/api/updateUrse', function(req, res, next) {
    let obj = req.body;
    let id = obj.id;
    delete id;
    Mongo.update(db, pa, [{ "_id": id }, id], (resoult) => {
        if (!resoult) {
            res.send({
                code: 0,
                msg: "修改失败"
            })
        } else {
            res.send({
                code: 1,
                msg: "修改成功",
                data: resoult
            })
        }
    })
});

//查找数据所有
router.post('/api/findUrse', function(req, res, next) {
    Mongo.find(db, pa, {}, (resoult) => {
        if (!resoult) {
            res.send({
                code: 0,
                msg: "查找失败"
            })
        } else {
            res.send({
                code: 1,
                msg: "查找成功",
                data: resoult
            })
        }
    })
});


module.exports = router;