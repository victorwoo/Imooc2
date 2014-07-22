var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')))

app.locals.pretty = true;

// index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'imooc 首页',
        movies: [{
            title: '机械战警',
            _id: 1,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }, {
            title: '机械战警',
            _id: 2,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }, {
            title: '机械战警',
            _id: 3,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }, {
            title: '机械战警',
            _id: 4,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }, {
            title: '机械战警',
            _id: 5,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }, {
            title: '机械战警',
            _id: 6,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }]
    });
});

// detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'imooc 详情页',
        movie: {
            doctor: '何塞·帕迪里亚',
            country: '美国',
            title: '机械战警',
            year: 2014,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language: '英语',
            flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary: '翻拍自1987年同名科幻经典、由《精英部队》导演何塞·帕迪里亚执导的新版《机械战警》于北京时间9月6日早上7点发布首款预告片,时光网全球同步首发.大热美剧《谋杀》男星乔尔·金纳曼化身新“机械战警”酷黑战甲亮相,加里·奥德曼、塞缪尔·杰克逊、迈克尔·基顿三大戏骨绿叶护航.预告片末更亮出了本片将登陆IMAX巨幕.'
        }
    });
});

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    });
});

// list page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'imooc 列表页',
        movies: [{
            title: '机械战警',
            _id: 1,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }]
    });
});

app.listen(port);
console.log('imooc started on port ' + port);