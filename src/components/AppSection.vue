<script>
import { reactive, toRefs } from 'vue'

export default {
  name: "AppSection",
  setup() {
    const state = reactive({
      imgSrc: 'icon/javascript.png',
      isHoverDrawer: false,
    })

    return {
      ...toRefs(state),
    }
  }
}
</script>

<template>
  <div id="section">
    <v-layout>
      <v-navigation-drawer
        class="section-navigation-drawer"
        expand-on-hover rail
        @mouseover="isHoverDrawer=true"
        @mouseleave="isHoverDrawer=true"
        >
        <v-list-item style="height: 56px"
          :prepend-avatar="'icon/javascript.png'"
          :subtitle="'모던 자바스크립트' + '\n' + 'Deep Dive'"
          title="Javascript">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link title="List Item 1"></v-list-item>
        <v-list-item link title="List Item 2"></v-list-item>
        <v-list-item link title="List Item 3"></v-list-item>
      </v-navigation-drawer>
    </v-layout>
    <slot></slot>

  </div>

</template>

<style lang="scss" scoped>
#section {
  padding: 10px;
}

:deep(.section-navigation-drawer) {
  .v-navigation-drawer__content {
    .v-list-item {
      .v-list-item__content{
        .v-list-item-title:first-child {
          font-weight: bold;
        }
        .v-list-item-subtitle {
          white-space: break-spaces;
        }
      }
    }
  }

}

</style>