const app = Vue.createApp({
  data() {
    return {
      result: 0,
      notice: '',
    };
  },
  watch: {
    result(value) {
      if (value === 37) {
        this.result = value;
      } else if (value < 37) {
        const that = this;
        setTimeout(function () {
          that.result = 0;
          that.notice = 'Not there yet';
        }, 5000);
      } else {
        this.notice = 'Too much';
      }
    },
  },
  methods: {
    addFive() {
      this.result += 5;
    },
    addOne() {
      this.result += 1;
    },
  },
});

app.mount('#assignment');
