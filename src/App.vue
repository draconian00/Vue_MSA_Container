<template>
  <div id="app">
    <router-view/>

    <div class="target" ref="targetDiv">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'app',
})
export default class App extends Vue {
  public created() {
    Vue.prototype.$app = this as Vue;
  }
}
</script>

<style lang="scss">
@import './assets/global.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.target {
  .hello {
    h2 {
      color: red;
    }
  }
}
</style>
