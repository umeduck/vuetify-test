<template>
  <v-app-bar image="https://iconape.com/wp-content/files/no/113101/png/vuetify.png" :height="100">
    <template v-slot:prepend>
      <v-app-bar-nav-icon>
      </v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <router-link to="/" class="top-link">
        <v-slot>
          <span>天気予報</span>
        </v-slot>
      </router-link>
    </v-app-bar-title>
  </v-app-bar>
</template>

<style scoped>
.custom-app-bar {
  height: 100px;
}

.top-link {
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-family: 'sans-serif';
}
</style>

