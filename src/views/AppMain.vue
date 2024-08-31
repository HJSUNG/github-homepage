<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSection from "@/components/AppSection.vue";

export default {
  name: "AppMain",
  components: {
    AppHeader,
    AppSection,
  },
}
</script>

<template>
  <div id="main" class="d-flex h-100">
    <AppHeader></AppHeader>
    <div id="wrap" class="wrap">
      <div class="content p-0" style="position: relative;flex:1;">
        <main class="content_body">
          <AppSection class="h-100">
            <router-view></router-view>
          </AppSection>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main {
  flex-direction: column
}
</style>