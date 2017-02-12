'use strict';

var gulp = require('gulp');
var tslint = require('gulp-tslint');
var gulpConfig = require('./../gulp-config');


gulp.task('tslint', function () {
    return gulp.src(gulpConfig.appTypescript)
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});