var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('ser', () => {
    return gulp.src('./src/')
        .pipe(server({
            open: true,
            port: 8683,
            host: 'localhost',
            livereload: true,
            proxies: [
                { source: '/api/delUrse', target: 'http://localhost:3000/api/delUrse' }, //删除数据
                { source: '/api/addUrse', target: 'http://localhost:3000/api/addUrse' }, //添加数据
                { source: '/api/updateUrse', target: 'http://localhost:3000/api/updateUrse' }, //修改数据
                { source: '/api/findUrse', target: 'http://localhost:3000/api/findUrse' } //查找数据
            ]
        }))
})