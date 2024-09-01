<script>
import AppHeader from '@/components/AppHeader.vue'
import AppSection from '@/components/AppSection.vue'

export default {
  name: 'AppMain',
  components: {
    AppHeader,
    AppSection
  }
}
</script>

<template>
  <div id="main" class="d-flex h-100">
    <AppHeader></AppHeader>

      <AppSection class="h-100">
        <router-view></router-view>
      </AppSection>
  </div>
</template>

<style scoped>
#main {
  flex-direction: column;
}
</style>