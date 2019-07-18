<template>
  <div>
    <b-modal v-model="dialogVisible" centered title="" size="md" no-close-on-backdrop>
      <div slot="modal-header">
        <span class="modal-title">존재하지 않는 페이지</span>
      </div>
      <!-- body -->
      <div>존재하지 않는 경로 입니다.<br>이전으로 돌아가거나 홈으로 이동합니다.</div>
      <!-- footer -->
      <div slot="modal-footer">
        <b-button @click="$router.go(-1)">이전으로 돌아가기</b-button>
        <b-button @click="rootRedirect()">홈으로 가기</b-button>
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

