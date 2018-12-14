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
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Sent Mail</a></span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text"><a href="#">Trash</a></span>
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
          <v-tooltip right>
            <v-btn
              slot="activator"
              :href="source"
              icon
              large
              target="_blank"
            >
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>

            <span>Codepen</span>
          </v-tooltip>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "contacts", text: "Contacts" },

      { icon: "phonelink", text: "App downloads" },
      { icon: "keyboard", text: "Go to the old version" }
    ]
  }),
  props: {
    source: String
  }
};
</script>
<style>
.md-content {
    
    max-height: 100%;
    overflow: auto;
  }
</style>
