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
              Add
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
          @select="selectTask"
        >
        </box>
      </div>
    </div>
  </section>
</template>
<script>
  import { format } from 'date-fns'
  import Box from '../../components/task/Box.vue'
  import Axios from 'axios'
  export default {
    components: {
      Box
    },
    created () {
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
      selectTask (task) {
        this.newTask = task
      },
      fetchTasks () {
        let day = format(new Date(), 'YYYY-MM-DD')
        Axios.get('/api/v1/tasks', { params: { day } })
          .then(({data}) => {
            this.tasks = data.data
          })
      },
      addTask () {
        let day = format(new Date(), 'YYYY-MM-DD')
        const task = {
          description: this.newTask.description,
          date: day
        }

        Axios.post('/api/v1/tasks', task)
          .then(({data}) => {
            this.tasks.push(data.data)
          })
      }
    }
  }
</script>