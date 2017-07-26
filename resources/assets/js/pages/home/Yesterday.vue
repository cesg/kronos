<template>
  <section>
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
  import Axios from 'axios'
  import Box from '../../components/task/Box.vue'

  export default {
    components: {
      Box
    },
    data () {
      return {
        tasks: []
      }
    },
    created () {
      this.fetchTasks()
    },
    methods: {
      fetchTasks () {
        let day = new Date()
        day.setDate(day.getDate() - 1)
        day.setHours(12)
        day = day.toISOString()
        Axios.get('/api/v1/tasks', {params: {day}})
          .then(({data}) => {
            this.tasks = data.data
          })
      }
    }
  }
</script>