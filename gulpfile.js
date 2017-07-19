var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('package', function() {
  return gulp.src([
        './node_modules/bwip-js/lib/bitmap.js',
        './node_modules/bwip-js/lib/symdesc.js',
        //'./node_modules/bwip-js/lib/canvas-toblob.js',
        //'./node_modules/bwip-js/freetype.js', 
        './node_modules/bwip-js/bwipp.js',
        './node_modules/bwip-js/bwipjs.js',
        './src/browser/PKBarcodeFormatAztecProxy_dev.js'
        ])
    .pipe(concat('PKBarcodeFormatAztecProxy.js'))
    .pipe(gulp.dest('./src/browser'));
});