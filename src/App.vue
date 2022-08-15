<template>
<button @click="modalOpen">Opne Modal</button>
<div v-if="open">
<Modal @close="open=false">
  <h1>hi</h1>
  </Modal>
</div>
</template>

<script>

import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return{
      open:false,
    }
  },
  methods:{
    modalOpen(){
      this.open=true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
