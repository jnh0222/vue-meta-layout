<template>
  <div class="hw-wrap">
    <CommonHeader/>
    <div class="hw-container">
      <Sidebar customClass="default"/>
      <main class="hw-main">
        <slot/>
      </main>
    </div>
    <CommonFooter/>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    CommonHeader,
    CommonFooter,
    Sidebar
  },
};
</script>

<style lang="scss">
.hw-sidebar {
  &.default {
    width: 280px;
  } 
}
</style>
