<template>
  <h1 class="wrapper" @click.self="closeHandler">
    <div class="modal">
        <slot />
    </div>
  </h1>
</template>

<script>
export default {
    name:'ModalComponent',
    methods:{
        closeHandler(){
            this.$emit('close')
        }
    }
}
</script>

<style>
    .wrapper{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: greenyellow;
    }
    .modal{
        width:500px;
        height: 600px;
        background-color: white;
    }
</style>