<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :style="{width:'230px',textIndent: '1em'}"
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <md-content class="md-scrollbar">
        <md-list>
          <md-list-item>
            <router-link
              :to="{path: '/sitenavigation'}"
              tag="a"
            ><span class="md-list-item-text">site navigation</span></router-link>
          </md-list-item>
          <md-list-item>
            <router-link
              :to="{path: '/music'}"
              tag="a"
            ><span class="md-list-item-text">music</span></router-link>
          </md-list-item>
        </md-list>
      </md-content>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title
        style="width: 230px"
        class="ml-0 pl-3"
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">JornaJan Home</span>
      </v-toolbar-title>

    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          justify-center
          align-center
        >
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "contacts", text: "Contacts" },

      { icon: "phonelink", text: "App downloads" },
      { icon: "keyboard", text: "Go to the old version" }
    ]
  }),
  props: {
    source: String
  },
  created() {
    sessionStorage.setItem("currentId", new Date());
  }
};
</script>
<style>
.md-content {
  height: 100%;
  overflow: auto;
}
</style>
