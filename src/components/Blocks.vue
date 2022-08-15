<template>
<div v-if="show">
  <div class="game" @click="stopTimer">
    aaa {{delay}}
  </div>
  </div>
</template>

<script>
export default {
    name:'BlocksComponent',
    props:['delay'],
    data(){
        return{
            show:false,
            timer:null,
            score:0
        }
    },
    mounted(){
        setTimeout(()=>{
            this.show=true
            this.startTimer()
        },this.delay)
    },
    methods:{
       startTimer(){
            this.timer=setInterval(()=>this.score+=50,50)
        },
        stopTimer(){
            clearInterval(this.timer)
            this.$emit('endgame',this.score)
        }
    }
}
</script>

<style>
    .game{
        margin: 50px auto;
        background-color:hotpink;
        width: 400px;
        height: 400px;
    }
</style>