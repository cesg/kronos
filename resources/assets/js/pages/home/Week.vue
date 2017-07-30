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
  import { format, startOfWeek, endOfWeek } from 'date-fns'
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
        let start_day = format(startOfWeek(new Date(), {weekStartsOn: 1}), 'YYYY-MM-DD')
        let end_day = format(endOfWeek(new Date(), {weekStartsOn: 1}), 'YYYY-MM-DD')
        Axios.get('/api/v1/tasks', {params: {start_day, end_day}})
          .then(({data}) => {
            this.tasks = data.data
          })
      }
    }
  }
</script>