import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

// transpiling task
gulp.task("transpile", () => {

  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));

});

// add watch task, run transpile before start watching
gulp.task("watch", ["transpile"], () =>{
	gulp.watch("src/**/*.js", ["transpile"]);
});

// default task
gulp.task("default", ["transpile"]);