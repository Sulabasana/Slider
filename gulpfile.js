var gulp = require("gulp");
var browsersync = require("browser-sync");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var inject = require("gulp-inject");
var sourcemaps = require("gulp-sourcemaps");
var series = require("stream-series");

Files = {
	scss:
	['./scss/main.scss', './scss/partials/_grid.scss','./scss/partials/_content.scss'],
	html: './index.html',
	js : ['./js/vendor/jquery-3.1.0.min.js','./js/app.js']
};

gulp.task('inject', ['sass'], function (){
	var target = gulp.src('./index.html');
  	var sources = gulp.src(['./js/vendor/jquery-3.1.0.min.js', './js/vendor/jquery-ui.min.js', './css/style.css' ], 
  		{read: false});

var sources2 = gulp.src(['./js/app.js'], 
  		{read: false});

	return target.pipe(inject(series(sources,sources2)))
	.pipe(gulp.dest('./'));


});


gulp.task('sass', function(){
	
	return gulp.src('./scss/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(rename('style.css'))
	.pipe(gulp.dest('./css'));

});
gulp.task('default', ['inject'], function(){

browsersync.init({
	server:{
		baseDir: "./"
	}});
	gulp.watch(Files.html).on("change", browsersync.reload);
	gulp.watch(Files.scss, ['inject']);
	gulp.watch(Files.js, ['inject']);
});

