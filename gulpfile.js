var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var path = require('path');
var sass = require('gulp-sass');
var uglify = require('gulp-uglifycss');
var addSrc = require('gulp-add-src');

gulp.task('development',
	[
		'bundle',
		'watchBundle',
		'index',
		'hall_of_fame',
		'watchHtml',
		'fonts',
		'sNcss',
		'watchsNcss',
		'download'
	]
);

gulp.task('bundle', function() {
	return gulp
				.src([
						path.join(__dirname,'node_modules','jquery','dist','jquery.js'),
						path.join(__dirname, 'js', 'materialize.min.js'),
						path.join(__dirname, 'js', 'init.js'),
						path.join(__dirname, 'js', 'modernizr.js')
					])
				.pipe(concat('bundle.js'))
				.pipe(babel({
					comments: false,
					minified: true,
					compact: true
				}))
				.pipe(gulp.dest(path.join(__dirname, 'bin', 'min')));
});

gulp.task('watchBundle', function(){
	gulp.watch(path.join(__dirname, 'js', '*.js'), ['bundle']);
});

gulp.task('index', function() {
	return gulp
				.src('_index.html')
				.pipe(rename('index.html'))
				.pipe(gulp.dest(path.join(__dirname, 'bin')));
});

gulp.task('hall_of_fame', function() {
	return gulp
				.src('_hall_of_fame.html')
				.pipe(rename('hall_of_fame.html'))
				.pipe(gulp.dest(path.join(__dirname, 'bin')));
});

gulp.task('watchHtml', function(){
	gulp.watch(path.join(__dirname, '_index.html'), ['index']);
	gulp.watch(path.join(__dirname, '_hall_of_fame.html'), ['hall_of_fame']);
});

gulp.task('fonts', function() {
	return gulp
				.src(path.join(__dirname, 'fonts', '**', '*.*'))
				.pipe(gulp.dest(path.join(__dirname, 'bin', 'fonts')));
})

gulp.task('download', function() {
	return gulp
				.src(path.join(__dirname, 'download', '*.*'))
				.pipe(gulp.dest(path.join(__dirname, 'bin', 'download')));
})

gulp.task('sNcss', function() {
	return gulp
				.src(path.join(__dirname, 'sass', 'materialize.scss'))
				.pipe(sass())
				.pipe(addSrc(path.join(__dirname, 'css', '**', '*.css')))
				.pipe(concat('bundle.css'))
				.pipe(uglify())
				.pipe(gulp.dest(path.join(__dirname, 'bin', 'min')));
});

gulp.task('watchsNcss', function(){
	gulp.watch(path.join(__dirname, 'sass', 'materialize.scss'), ['sNcss']);
	gulp.watch(path.join(__dirname, 'css', '**', '*.css'), ['sNcss']);
	gulp.watch(path.join(__dirname, 'sass', 'components', '*.scss'), ['sNcss']);
});
