var app = new Vue({
  el: '#app',
  methods: {
    themeSwitch: function() {
      let main = document.querySelector('body');
      main.classList.toggle('dark');


    }
  }
})