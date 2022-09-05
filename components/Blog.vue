<template>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="`${post.image}`"
        >
          <v-card-title>{{post.title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <nuxt-link to="blogs/1">
          <v-btn color="orange" text> View </v-btn>
        </nuxt-link>

          <v-btn color="orange" text> Explore </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
  props:['post']
}
</script>

<style>

</style>
