const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalsInput: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalsInput);
      this.enteredGoalsInput = '';
      alert('Added')
    },
  },
});

app.mount('#user-goals');
