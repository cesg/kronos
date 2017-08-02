let mix = require('laravel-mix')

mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .extract(['vue', 'vuex', 'vue-router', 'axios', 'buefy', 'date-fns'], 'js/vendor')
