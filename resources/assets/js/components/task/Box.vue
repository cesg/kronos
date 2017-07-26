<template>
  <div class="box">
    <div class="content">
      {{ task.description }}
    </div>
    <nav class="level">
      <div class="level-left">
        <a href="" class="level-item">
          <span class="icon is-small">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </span>
        </a>
        <a href="" class="level-item">
          <span class="icon is-small is-danger">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </span>
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
    props: ['task']
  }
</script>