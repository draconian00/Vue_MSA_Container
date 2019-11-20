<template>
  <div class="home">
    <h1>Container project home</h1>
    <br>
    <h2 @click="$router.push('/service1')">push to service1.vue</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
