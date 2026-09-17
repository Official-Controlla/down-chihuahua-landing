<script setup lang="ts">
import { ref, computed } from "vue";
import logoImg from "@/assets/images/logo.png";

const localePath = useLocalePath();
const route = useRoute();
const mobileMenuOpen = ref(false);

const navLinks = computed(() => [
  { label: "Inicio", to: localePath("/") },
  { label: "Síndrome de Down", to: localePath("/sindrome-de-down") },
  { label: "Programas", to: localePath("/programas") },
  { label: "Familias", to: localePath("/familias") },
  { label: "Reciclaje", to: localePath("/reciclaje") },
  { label: "Nosotros", to: localePath("/nosotros") },
  { label: "Contacto", to: localePath("contact") },
]);

function isActive(linkPath: string) {
  if (linkPath === localePath("/")) {
    return route.path === localePath("/") && !route.hash;
  }
  return route.path === linkPath || route.fullPath.endsWith(linkPath);
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-white border-b border-[#f4f6f8] shadow-xs font-sans transition-shadow">
    <div class="flex justify-between items-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto h-[88px]">
      <!-- Brand Logo -->
      <NuxtLink class="flex items-center hover:opacity-90 transition-opacity shrink-0" :to="localePath('/')"
        aria-label="Ir al inicio de Instituto Down de Chihuahua">
        <img alt="Instituto Down de Chihuahua A.C." class="w-[154px] h-[47.91px] object-contain" :src="logoImg" />
      </NuxtLink>

      <!-- Desktop Navigation Links -->
      <nav aria-label="Navegación principal" class="hidden xl:flex items-center gap-6 lg:gap-7">
        <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.to"
          class="px-2 py-1.5 text-sm font-semibold text-[#1d1d1b] hover:text-[#0071bc] transition-colors"
          :class="{ '!text-[#0071bc] !font-bold': isActive(link.to) }">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Right Action Button: Colabora -->
      <div class="hidden xl:flex items-center">
        <NuxtLink :to="localePath('/contacto#cta-banco-title')"
          class="inline-flex items-center gap-4 pl-6 pr-3 py-3 rounded-full border-2 border-[#0071bc] text-[#0071bc] font-bold text-base hover:bg-[#0071bc]/5 transition-all group"
          aria-label="Colabora con el Instituto Down">
          <span>Colabora</span>
          <div
            class="flex items-center justify-center w-8 h-8 rounded-full bg-[#0071bc] text-white group-hover:scale-105 transition-transform">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5" aria-hidden="true">
              <path d="M2.91602 7H11.0836M6.99982 11.0838L11.0836 7L6.99982 2.9162" stroke="white" stroke-width="2"
                stroke-linecap="round"></path>
            </svg>
          </div>
        </NuxtLink>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <div class="xl:hidden flex items-center gap-3">
        <NuxtLink :to="localePath('contact')"
          class="sm:hidden inline-flex items-center gap-2 pl-4 pr-2 py-1.5 rounded-full border-2 border-[#0071bc] text-[#0071bc] font-bold text-xs">
          <span>Colabora</span>
          <div class="w-6 h-6 rounded-full bg-[#0071bc] text-white flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-2.5 h-2.5">
              <path d="M2.91602 7H11.0836M6.99982 11.0838L11.0836 7L6.99982 2.9162" stroke="white" stroke-width="2"
                stroke-linecap="round"></path>
            </svg>
          </div>
        </NuxtLink>

        <button type="button"
          class="inline-flex items-center justify-center p-2.5 text-[#1d1d1b] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
          @click="mobileMenuOpen = true" aria-label="Abrir menú de navegación">
          <i class="pi pi-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <Drawer v-model:visible="mobileMenuOpen" position="right" class="w-full sm:w-80 !bg-white">
      <template #header>
        <div class="flex items-center gap-2">
          <img alt="Instituto Down de Chihuahua A.C." class="w-[140px] h-auto object-contain" :src="logoImg" />
        </div>
      </template>

      <div class="flex flex-col gap-4 mt-4">
        <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.to"
          class="text-[#1d1d1b] hover:text-[#0071bc] text-base font-semibold transition-colors py-1.5 px-2"
          :class="{ '!text-[#0071bc] !font-bold': isActive(link.to) }" @click="mobileMenuOpen = false">
          {{ link.label }}
        </NuxtLink>

        <hr class="border-slate-100 my-2" />

        <NuxtLink :to="localePath('contact')"
          class="inline-flex items-center justify-between pl-6 pr-2.5 py-3 rounded-full border-2 border-[#0071bc] text-[#0071bc] font-bold text-base hover:bg-[#0071bc]/5 transition-all"
          @click="mobileMenuOpen = false">
          <span>Colabora</span>
          <div class="w-8 h-8 rounded-full bg-[#0071bc] text-white flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5">
              <path d="M2.91602 7H11.0836M6.99982 11.0838L11.0836 7L6.99982 2.9162" stroke="white" stroke-width="2"
                stroke-linecap="round"></path>
            </svg>
          </div>
        </NuxtLink>
      </div>
    </Drawer>
  </header>
</template>
