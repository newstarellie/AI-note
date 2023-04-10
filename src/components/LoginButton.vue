<template>
  <div id="g_id_onload" :data-client_id="memberData.id" :data-login_uri="loginUrl" data-auto_prompt="false">
  </div>
  <div class="g_id_signin" data-type="standard" data-size="large" data-theme="outline" data-text="sign_in_with"
    data-shape="rectangular" data-logo_alignment="left">
  </div>
</template>
<script>
export default {
  name: 'LoginButton',
  props: {
    memberData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loginUrl: 'https://musical-bunny-00ee15.netlify.app',
    }
  },
  methods: {

  },
};
</script>
