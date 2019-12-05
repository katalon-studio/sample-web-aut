var babelify = require('babelify'),
    browserify = require('browserify'),
    del = require('del'),
    gulp = require('gulp'),
    connect = require('gulp-connect'),
    htmlmin = require('gulp-htmlmin'),
    gulpif = require('gulp-if'),
    less = require('gulp-less'),
    minify = require('gulp-minify'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    runSequence = require('run-sequence'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

var option = {
    dev: true
};

var dir = {
    dist: 'dist',
    src: 'src',
    nodeModules: 'node_modules'
};

gulp.task('clean', function(cb) {
    del.sync(dir.dist);
    cb();
});

gulp.task('html', function() {
    return gulp.src(`${dir.src}/**/*.html`)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(dir.dist))
        .pipe(gulpif(option.dev, connect.reload()));
});

gulp.task('js', function() {
    return browserify({
            entries: `${dir.src}/js/main.js`
        })
        .transform(babelify.configure({
            presets: [ '@babel/preset-env' ]
        }))
        .bundle()
        .pipe(source('js/main.js'))
        .pipe(buffer())
        .pipe(gulpif(!option.dev, uglify()))
        .pipe(gulp.dest(dir.dist))
        .pipe(gulpif(option.dev, connect.reload()));
});

gulp.task('image', function() {
    return gulp.src(`${dir.src}/image/*`, { base: dir.src })
        .pipe(gulp.dest(dir.dist))
        .pipe(gulpif(option.dev, connect.reload()));
});

gulp.task('css', function() {
    return gulp.src(`${dir.src}/**/main.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dir.dist))
        .pipe(gulpif(option.dev, connect.reload()));
});

gulp.task('rev', function() {
    var paths = [ 
        __dirname + '/' + dir.dist + '/**/*.js', 
        __dirname + '/' + dir.dist + '/**/*.css'
    ];
    return gulp.src(paths)
        .pipe(rev())
        .pipe(gulp.dest(dir.dist))
        .pipe(rev.manifest())
        .pipe(gulp.dest(dir.dist));
});

gulp.task('revreplace', function() {
  var manifest = gulp.src(`${dir.dist}/rev-manifest.json`);

  return gulp.src(`${dir.dist}/**/*.html`)
    .pipe(revReplace({
        manifest: manifest
    }))
    .pipe(gulp.dest(dir.dist));
});
 
gulp.task('watch', function () {
    gulp.watch(`${dir.src}/**/*.html`, [ 'html' ]);
    gulp.watch(`${dir.src}/**/*.js`, [ 'js' ]);
    gulp.watch(`${dir.src}/**/*.less`, [ 'css' ]);
    gulp.watch(`${dir.src}/image/*`, [ 'image' ]);
});

gulp.task('serve', function() {
    return connect.server({
        root: dir.dist,
        port: 10000,
        livereload: true
    });
});

gulp.task('build', gulp.series('clean', 'js', 'css', 'html', 'image', function(done) {
    done();
}));

gulp.task('package', function(cb) {
    option.dev = false;
    return gulp.series('build', 'rev', 'revreplace', function(done) {
        done();
    })(cb);
});

gulp.task('dev', gulp.series('build', 'serve', 'watch', function(done) {
    done();
}));