<template>
  <div>
    <b-modal v-model="dialogVisible" centered title size="md" no-close-on-backdrop>
      <div slot="modal-header">
        <span class="modal-title">Page is not found.</span>
      </div>
      <!-- body -->
      <div>
        Page is not found.
        <br />Go back to before page or home.
      </div>
      <!-- footer -->
      <div slot="modal-footer">
        <b-button @click="$router.go(-1)">Go back to before page</b-button>
        <b-button @click="rootRedirect()">Go home</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "notFound",
  data() {
    return {
      dialogVisible: true
    };
  },
  methods: {
    rootRedirect() {
      window.location.href = "/";
    }
  }
};
</script>

