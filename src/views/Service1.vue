<template>
  <div class="service1-wrapper">
    <service-1 @mounted="onMountService1WC" @passComponent="onPassComponent"></service-1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'service-1-wrapper',
})
export default class Service1Wrapper extends Vue {
  public childService!: Vue;
  public onMountService1WC(e: CustomEvent) {
    e.detail[0].$parent = this;
    e.detail[0].$globalStore = this.$store;
    e.detail[0].$globalRouter = this.$router;
    this.childService = e.detail[0];
  }

  public onPassComponent(e: CustomEvent) {
    // console.log(e.detail[0]);
    const div = this.$app.$refs.targetDiv as HTMLElement;
    div.appendChild(e.detail[0].$el);
  }

  private mounted() {
    // console.log('container service-1 wrapper mounted');
    let indexFileRoute = '';
    if (process.env.NODE_ENV === 'production') {
      indexFileRoute = 'service1/index.js';
    } else {
      indexFileRoute = 'http://localhost:5000/service1/R02/service-1.js';
    }

    if (!document.getElementById('service_1_index_script')) {
      const script = document.createElement('script');
      script.setAttribute('id', 'service_1_index_script');
      script.setAttribute('src', indexFileRoute);
      document.head.appendChild(script);
    }
  }
}
</script>