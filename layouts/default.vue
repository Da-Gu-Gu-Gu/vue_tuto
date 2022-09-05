<template>

  <v-app
    class="mx-auto overflow-hidden"
  >
    <v-app-bar
      app
      color="deep-purple"

    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Blogs</v-toolbar-title>
    </v-app-bar>

    <v-main >

<!-- Provides the application the proper gutter -->
<v-container fluid>

  <nuxt />
</v-container>
</v-main>

    <v-navigation-drawer
v-model="drawer"
      app
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

        <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="blogs">
            <v-list-item-icon>
              <v-icon>mdi-blog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Blogs</v-list-item-title>
          </v-list-item>

          <v-list-item to="createblog">
            <v-list-item-icon>
              <v-icon>mdi-create</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Create Blog</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>

</template>

<script>
 export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>
