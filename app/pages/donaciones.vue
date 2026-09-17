<script lang="ts" setup>
import Button from "primevue/button";

useSeoMeta({
  title: "Donaciones y Colaboraciones | Instituto Down de Chihuahua A.C.",
  description: "Apoya la labor del Instituto Down de Chihuahua. Tus donaciones permiten mantener programas de estimulación temprana y educación inclusiva.",
});

const localePath = useLocalePath();
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-12">
    <div class="max-w-7xl mx-auto flex flex-col gap-10">
      <header class="flex flex-col items-start gap-4 max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-wider text-[#d9b421]">Apoya Nuestra Misión</span>
        <h1 class="text-4xl lg:text-5xl font-bold text-[#0071bc]">Donaciones y Colaboraciones</h1>
        <p class="text-lg text-[#4a4a48]">
          Tu generosidad sostiene 40 años de historia y permite que más niñas, niños y adultos en Chihuahua accedan a terapias y educación especial.
        </p>
      </header>

      <div class="p-8 md:p-10 rounded-3xl bg-[#0071bc] text-white flex flex-col gap-6 max-w-2xl">
        <h2 class="text-2xl font-bold">Donativos Deducibles de Impuestos</h2>
        <p class="text-base text-[#fff5e0]">
          Somos una Asociación Civil autorizada para emitir recibos deducibles de impuestos. Puedes realizar tu donativo directamente con PayPal o ponerte en contacto con nuestro equipo.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <a href="https://www.paypal.com/donate/?hosted_button_id=SBY6NYQWH6CDJ" target="_blank" rel="noopener noreferrer">
            <Button label="Donar con PayPal" icon="pi pi-paypal" class="!bg-[#d9b421] !border-none !text-[#0071bc] !font-bold !rounded-full !px-6 !py-3 hover:!bg-[#c4a11c] transition-all" />
          </a>
          <NuxtLink :to="localePath('/contact')">
            <Button label="Contactar para Donar" icon="pi pi-envelope" outlined class="!border-2 !border-white !text-white !font-bold !rounded-full !px-6 !py-3 hover:!bg-white/10 transition-all" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
