<template>
  <button @click="startPlaying" :disabled="isPlaying">Play</button>
  <div v-if="isPlaying">
    <Blocks :delay="delay" @endgame="endgame" />
  </div>
  <div v-if="end">
    <Result :result="result" />
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Blocks from './components/Blocks.vue';
import Result from './components/Result.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld
    Blocks,
    Result
},data(){
  return{
    isPlaying:false,
    delay:null,
    result:0,
    end:false,
  }
},
methods:{
  startPlaying(){
    this.isPlaying=true
    this.delay=2000+Math.random()*5000
    this.end=false
    this.result=0
  },
  endgame(score){
    this.result=score
    this.end=true
    this.isPlaying=false
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
