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
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');
