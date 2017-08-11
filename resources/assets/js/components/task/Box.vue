<template>
  <div class="box">
    <div class="content">
      {{ task.description }}
    </div>
    <nav class="level">
      <div class="level-left">
        <a
          @click="$emit('select', task)"
          class="level-item"
        >
          <span class="icon is-small">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </span>
        </a>
        <a
          @click="destroy"
          class="level-item"
        >
          <span class="icon is-small is-danger">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </span>
        </a>
      </div>
      <div class="level-right">
        <div class="level-item">
          <small>
            {{ task.date }}
          </small>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  import Axios from 'axios'

  export default {
    props: ['task'],
    methods: {
      destroy () {
        Axios.delete(`/api/v1/tasks/${this.task.id}`)
          .then(() => this.$emit('destroy', this.task))
      }
    }
  }
</script>