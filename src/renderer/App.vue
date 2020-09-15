<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-start">
        <a @click="$router.go(-1)" class="navbar-item">
          <i class="fas fa-arrow-left" style="margin-right: 0.5em"></i>Retour
        </a>
      </div>
      <div class="navbar-end">
        <a v-if="user" type="button" @click="logout()" class="navbar-item" href="#">Déconnexion</a>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    onRouteChange() {
      if (this.user == false) {
        this.$router.push("/");
      }
    },
  },
  watch: {
    $route(to, from) {
      this.onRouteChange();
    },
  },
  mounted() {
    if (this.user == false) {
      this.$router.push("/");
    }
    let header = document.createElement("script");
    header.setAttribute(
      "src",
      "https://use.fontawesome.com/releases/v5.3.1/js/all.js"
    );
    document.head.appendChild(header);
  },
  computed: {
    ...mapState({
      user: (state) => state.User.user,
      user_token: (state) => state.User.user_token,
    }),
    tokenSet() {
      return this.user_token !== "" ? this.user_token : "";
    },
  },
};
</script>

<style lang="scss">
@import "assets/scss/style.scss";
@import "../../node_modules/bulma/bulma.sass";

div#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dfdde0;
  height: 100vh;
  background-color: #36393f;
}

label {
  color: #ffffff;
}

html,
body {
  margin: 0px;
  height: 100%;
  background-color: #36393f;
}
</style>
