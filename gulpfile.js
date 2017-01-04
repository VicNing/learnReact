const gulp = require('gulp');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();
const network = require('os').networkInterfaces();

const reload = browserSync.reload;
const hostIp = network.WLAN[1].address;

gulp.task('build', ['serve'], function () {
    return gulp.src('./app/js/index.js')
        .pipe(webpack({
            entry: './app/js/index.js',
            output: {filename: 'bundle.js'},
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }, {
                    test: /\.scss$/,
                    exclude: /(node_modules|bower_components)/,
                    loaders: ["style-loader", "css-loader", "sass-loader"],
                }]
            },
            watch: true
        }).on('error', function (err) {
            console.log('WEBPACK ERROR', err);
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('serve', function () {
    browserSync.init({
            server: ['.'],
            port: 3000,
            host: hostIp
        }
    );
    gulp.watch(['dist/*', 'dist/**/*'], reload);

});

gulp.task('default', ['serve', 'build']);