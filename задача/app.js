new Vue({
    el: '#app',
    data: {
      newTask: '',
      tasks: [],
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ text: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      editTask(index) {
        const newText = prompt('Введите новый текст задачи', this.tasks[index].text);
        if (newText !== null) {
          this.tasks[index].text = newText;
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
    },
    created() {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    },
    watch: {
      tasks: {
        handler(newTasks) {
          localStorage.setItem('tasks', JSON.stringify(newTasks));
        },
        deep: true,
      },
    },
  });
  