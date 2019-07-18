<template>
  <div class="hw-sidebar" :class="customClass">
    <nav>
      <p v-if="$route.name != 'index'"><b-button block variant="info" @click="$router.push('/')">Default layout</b-button></p>
      <p v-if="$route.name != 'print'"><b-button block variant="info" @click="$router.push('/print')">Clear layout</b-button></p>
      <p v-if="$route.name != 'list'"><b-button block variant="info" @click="$router.push('/list')">Resizable layout</b-button></p>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    'customClass': {type: String, required: false, default: null}
  }
}
</script>

<style lang="scss">
.hw-sidebar {
  background-color: #eff4fc;
  padding: 30px;
  overflow: auto;
  nav {
    display: block;
  }
}
</style>
