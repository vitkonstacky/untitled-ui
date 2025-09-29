/**
 * Imports
 */

const path = require("path");

const browser = require("browser-sync").create();

const gulp = require("gulp");

const del = require("del");

const sass = require("gulp-sass")(require("sass"));

const uglify = require("gulp-uglify");

const rename = require("gulp-rename");

const concat = require("gulp-concat");

/**
 * Directories
 */

const src = path.resolve(__dirname + "/src");

const dist = path.resolve(__dirname + "/dist");

/**
 * Compilation
 */

gulp.task("serve", async () => {

  browser.init({

    server: {

      baseDir: path.resolve(__dirname + "/dist"),

    },

  });

  gulp.watch(src, {

    ignoreInitial: false,

  }, async (done) => {

    const version = process.argv.includes("--alpine") ? "alpine" : "pure";

    del.deleteSync(dist + "/*");

    await gulp.src(src + "/html/" + version + "/index.html", {

      encoding: false,

    }).pipe(
      gulp.dest(dist),
    );

    await gulp.src(src + "/favicon.png", {

      encoding: false,

    }).pipe(
      gulp.dest(dist),
    );

    await gulp.src(src + "/img/**/*", {

      encoding: false,

    }).pipe(
      gulp.dest(dist + "/img"),
    );

    await gulp.src(src + "/scss/index.scss").pipe(
      sass({

        style: "compressed",

      }).on("error", sass.logError),
    ).pipe(
      concat("app.css"),
    ).pipe(
      gulp.dest(dist + "/css"),
    );

    await gulp.src(src + "/js/" + version + "/index.js").pipe(
      uglify({

        mangle: {

          toplevel: true,

        }

      }),
    ).pipe(
      rename("app.js"),
    ).pipe(
      gulp.dest(dist + "/js"),
    );

    browser.reload();

    done();

  });

  browser.reload();

});
