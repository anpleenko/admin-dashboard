import gulp from 'gulp';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import amd from 'rollup-plugin-amd';
import resolve from 'rollup-plugin-node-resolve';
import babelrc from 'babelrc-rollup';
import { config, $, bs, notify, isProd, isDev } from './config';

const babelConfig = {
  presets: ['env'],
  plugins: ['lodash', 'external-helpers'],
};

gulp.task('scripts', () =>
  gulp
    .src(config.src.scripts)
    .pipe($.if(isDev, $.plumber({ errorHandler: notify('Scripts error') })))
    .pipe($.debug())
    .pipe(
      $.betterRollup(
        {
          // notice there is no `input` option as rollup integrates into gulp pipeline
          plugins: [
            resolve({
              jsnext: true,
              main: true,
              preferBuiltins: false,
            }),
            commonjs(),
            babel(
              babelrc({
                addExternalHelpersPlugin: false,
                config: babelConfig,
                exclude: 'node_modules/**',
              })
            ),
            amd(),
          ],
        },
        {
          // also rollups `sourcemap` option is replaced by gulp-sourcemaps plugin
          format: 'iife',
        }
      )
    )
    .pipe($.if(isProd, $.uglify()))
    .pipe($.addSrc('./node_modules/jquery/dist/jquery.min.js'))
    .pipe(gulp.dest(config.dest.scripts))
    .on('end', bs.reload)
);

gulp.task('libs', gulp.series('scripts'));
