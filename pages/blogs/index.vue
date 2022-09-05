<template>
  <v-row align-items="center" justify="start">
    <v-col v-for="(post,index) in posts" :key="index">
      <Blog :post="post" />
    </v-col>
  </v-row>
</template>

<script>
import Blog from '../../components/Blog.vue';
export default { components: { Blog },
    data(){
      return {


      }
    },
    computed:{
      posts(){
        return this.$store.state.blog.posts
      }
    }
  }
</script>

<style></style>
