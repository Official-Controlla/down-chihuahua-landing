<script lang="ts" setup>
const localePath = useLocalePath();
const showBibliotecaModal = ref(true);

watch(showBibliotecaModal, (val) => {
  if (!val) {
    navigateTo(localePath("/familias"));
  }
});
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden min-h-screen">
    <BibliotecaModal v-model:visible="showBibliotecaModal" />
  </main>
</template>
