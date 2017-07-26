<template>
  <section>
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="control">
            <input type="text" class="input" v-model="newTask.description">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" @click="addTask">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <box
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        >
        </box>
      </div>
    </div>
  </section>
</template>
<script>
  import Box from '../../components/task/Box.vue'
  import Axios from 'axios'
  export default {
    components: {
      Box
    },
    created () {
      Axios.get('/me')
        .then((data) => {
        })
        .then(() => this.fetchTasks())
    },
    data () {
      return {
        tasks: [],
        newTask: {
          description: null
        }
      }
    },
    methods: {
      fetchTasks () {
        let day = new Date()
        day.setHours(12)
        day = day.toISOString()
        Axios.get('/api/v1/tasks', {params: {day}})
          .then(({data}) => {
            this.tasks = data.data
          })
      },
      addTask () {
        Axios.post('/api/v1/tasks', this.newTask)
          .then(({data}) => {
            this.tasks.push(data.data)
          })
      }
    }
  }
</script>