<template>
  <div class="hw-wrap">
    <div class="hw-container">
      <div class="sticky-menu">
        <p v-if="$route.name != 'index'"><b-button block variant="info" @click="$router.push('/')">Default layout</b-button></p>
        <p v-if="$route.name != 'print'"><b-button block variant="info" @click="$router.push('/print')">Clear layout</b-button></p>
        <p v-if="$route.name != 'list'"><b-button block variant="info" @click="$router.push('/list')">Resizable layout</b-button></p>
      </div>
      <main class="hw-main">
        <slot/>
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hw-container {
  flex-direction: column;
  top: 0;
  bottom: 0;
}
.sticky-menu {
  position: sticky;
  top: 0;
  padding: 30px;
  background-color: #fff;
}
</style>
