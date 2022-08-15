<template>
   <p v-if="result<250">
   You Win
   </p> 
   <p v-else-if="result>250">
   You so slowly
   </p>
</template>

<script>
export default {
    name:"ResultComponent",
    props:['result']
}
</script>

<style>

</style>