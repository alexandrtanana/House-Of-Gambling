const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const gulpStylelint = require("gulp-stylelint");
const htmllint = require("gulp-htmllint");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const terser = require("gulp-terser");
const squoosh = require("gulp-libsquoosh");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");


// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
  .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({
      overrideBrowserslist: ["last 5 versions"],
      cascade: true
    }),
    csso()
  ]))
  .pipe(rename("style.min.css"))
  .pipe(sourcemap.write("."))
  .pipe(gulp.dest("source/css"))
  .pipe(sync.stream());
}
const cssLint = () => {

  return gulp.src("source/sass/**/*.scss")
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}

exports.cssLint = cssLint;
exports.styles = styles;


// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

const htmlLint = () => {
    return gulp.src('source/*.html')
    .pipe(htmllint());
}

exports.htmlLint = htmlLint;


// Scripts

const scripts = () => {
  return gulp.src("source/js/script.js")
    .pipe(terser())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("source/js"))
    .pipe(sync.stream());
}

exports.scripts = scripts;


// Images

const optimizeImages = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(squoosh())
    .pipe(gulp.dest("build/img"))
}

exports.images = optimizeImages;

const copyImages = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(gulp.dest("build/img"))
}

exports.images = copyImages;


// WebP

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}

exports.createWebp = createWebp;


// Sprite

const sprite = () => {
  return gulp.src("source/img/icons/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
}

exports.sprite = sprite;


// Copy

const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2,woff,ttf}",
    "source/css/*.css",
    "source/js/*js",
    "source/*.ico",
    "source/img/**/*",
    "source/img/icons/*.svg",
    "source/favicon.ico",
    "source/favicon/*",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;


// Clean

const clean = () => {
  return del("build");
};


// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;


// Reload

const reload = (done) => {
  sync.reload();
  done();
}


// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/js/script.js", gulp.series(scripts));
  gulp.watch("source/*.html", gulp.series(html, reload));
}

exports.default = gulp.series(
  styles, server, watcher,reload
);




// Build

const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
);

exports.build = build;


// Default

exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  ));
