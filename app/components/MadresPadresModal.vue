<script setup lang="ts">
import Button from "primevue/button";
import Dialog from "primevue/dialog";

const visible = defineModel<boolean>("visible", { default: false });
const localePath = useLocalePath();
const { $locomotive } = useNuxtApp();

const closeModal = () => {
  visible.value = false;
};

watch(
  visible,
  (isOpen) => {
    if (import.meta.client && $locomotive) {
      if (isOpen) {
        $locomotive.stop();
      } else {
        $locomotive.start();
      }
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  if (import.meta.client && $locomotive) {
    $locomotive.start();
  }
});
</script>

<template>
  <Dialog v-model:visible="visible" modal dismissableMask :blockScroll="true" :showHeader="false"
    class="!border-none !bg-transparent !shadow-2xl max-w-[1120px] w-[95vw] md:w-[90vw]"
    contentClass="!p-0 !rounded-[28px] !bg-white !overflow-y-auto max-h-[85vh] sm:max-h-[90vh]"
    maskClass="bg-black/60 backdrop-blur-xs"
    :pt="{ content: { 'data-lenis-prevent': 'true', 'data-scroll-prevent': 'true' } }">
    <div
      data-lenis-prevent
      data-scroll-prevent
      class="flex flex-col w-full relative bg-white text-[#1d1d1b] font-sans touch-pan-y"
      style="box-shadow: 0px 24px 64px 0 rgba(29, 29, 27, 0.14);">
      <!-- HEADER AZUL -->
      <header
        class="sticky top-0 z-30 flex justify-between items-center w-full min-h-[76px] sm:min-h-[88px] px-6 sm:px-12 bg-[#0075c3]">
        <span class="text-xs sm:text-sm font-bold uppercase text-white tracking-wider">
          Para Madres y Padres
        </span>
        <button type="button" aria-label="Cerrar modal" @click="closeModal"
          class="flex justify-center items-center w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full border-2 border-white text-white hover:bg-white/20 transition-all cursor-pointer shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 sm:w-5 sm:h-5">
            <path d="M15 5L5 15M5 5L15 15" stroke="white" stroke-width="2" stroke-linecap="round"></path>
          </svg>
        </button>
      </header>

      <!-- CUERPO PRINCIPAL DEL MODAL -->
      <div class="flex flex-col items-center w-full bg-white">
        <!-- BLOQUE 1: NO ESTÁN SOLOS -->
        <section
          class="flex flex-col items-start w-full max-w-[720px] px-6 sm:px-8 lg:px-0 gap-6 pt-10 sm:pt-[76px] pb-12 sm:pb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-[#0075c3] leading-tight">
            No están solos
          </h2>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Recibir un diagnóstico, iniciar una nueva etapa escolar, enfrentar un reto
            de salud o comenzar a pensar en la vida adulta puede traer preguntas que no
            siempre sabemos cómo responder.
          </p>
          <p class="text-xl sm:text-[22px] font-semibold text-left text-[#1d1d1b] leading-snug">
            Es normal no tener todas las respuestas.
          </p>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Ser mamá o papá de una persona con síndrome de Down también implica ir
            encontrando respuestas poco a poco, con información confiable,
            acompañamiento profesional y una red de personas con quienes compartir el
            camino.
          </p>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            La National Down Syndrome Society señala que las familias pueden
            experimentar retos adicionales y que el acceso a recursos individuales,
            familiares y comunitarios es un elemento importante para favorecer su
            resiliencia.
          </p>
          <p class="text-xs text-left text-[#9a9a97] italic mt-1">
            Fuente: National Down Syndrome Society (ndss.org)
          </p>
        </section>

        <!-- BLOQUE 2: ALGUNAS COSAS QUE QUEREMOS RECORDARTE -->
        <section
          class="flex flex-col items-start w-full max-w-[720px] px-6 sm:px-8 lg:px-0 gap-8 sm:gap-10 pt-12 sm:pt-16 pb-16 sm:pb-[84px] border-t border-[#f4f6f8]">
          <h3 class="text-2xl sm:text-3xl font-bold text-left text-[#0075c3] leading-snug">
            Algunas cosas que queremos recordarte
          </h3>

          <div class="flex flex-col items-start w-full gap-2">
            <!-- Item 01 -->
            <div
              class="flex flex-col sm:flex-row justify-start items-start w-full gap-4 sm:gap-7 py-6 border-b border-[#dee3e7]">
              <div
                class="flex flex-col justify-center items-center shrink-0 h-[60px] w-[60px] relative overflow-hidden">
                <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 w-full h-full">
                  <path
                    d="M1.25 53.25V28.4318C1.25 11.8864 13.0682 1.25 27.25 1.25C41.4318 1.25 53.25 11.8864 53.25 28.4318V53.25"
                    stroke="#0075C3" stroke-width="2.5"></path>
                </svg>
                <span class="text-[15px] font-bold text-[#0075c3] relative z-10">
                  01
                </span>
              </div>
              <div class="flex flex-col items-start gap-2 sm:gap-2.5 flex-1">
                <h4 class="text-lg sm:text-xl font-bold text-left text-[#1d1d1b]">
                  Infórmate, pero elige bien tus fuentes.
                </h4>
                <p class="text-base sm:text-[17px] text-left text-[#4a4a48] leading-relaxed">
                  Existe muchísima información sobre síndrome de Down. Procura recurrir
                  a fuentes especializadas, actualizadas y sustentadas en evidencia.
                </p>
              </div>
            </div>

            <!-- Item 02 -->
            <div
              class="flex flex-col sm:flex-row justify-start items-start w-full gap-4 sm:gap-7 py-6 border-b border-[#dee3e7]">
              <div
                class="flex flex-col justify-center items-center shrink-0 h-[60px] w-[60px] relative overflow-hidden">
                <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 w-full h-full">
                  <path
                    d="M1.25 53.25V28.4318C1.25 11.8864 13.0682 1.25 27.25 1.25C41.4318 1.25 53.25 11.8864 53.25 28.4318V53.25"
                    stroke="#0075C3" stroke-width="2.5"></path>
                </svg>
                <span class="text-[15px] font-bold text-[#0075c3] relative z-10">
                  02
                </span>
              </div>
              <div class="flex flex-col items-start gap-2 sm:gap-2.5 flex-1">
                <h4 class="text-lg sm:text-xl font-bold text-left text-[#1d1d1b]">
                  Permítete sentir.
                </h4>
                <p class="text-base sm:text-[17px] text-left text-[#4a4a48] leading-relaxed">
                  No todas las emociones tienen que ser positivas todo el tiempo. Las
                  familias atraviesan diferentes procesos y necesidades conforme sus
                  hijos crecen.
                </p>
              </div>
            </div>

            <!-- Item 03 -->
            <div
              class="flex flex-col sm:flex-row justify-start items-start w-full gap-4 sm:gap-7 py-6 border-b border-[#dee3e7]">
              <div
                class="flex flex-col justify-center items-center shrink-0 h-[60px] w-[60px] relative overflow-hidden">
                <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 w-full h-full">
                  <path
                    d="M1.25 53.25V28.4318C1.25 11.8864 13.0682 1.25 27.25 1.25C41.4318 1.25 53.25 11.8864 53.25 28.4318V53.25"
                    stroke="#0075C3" stroke-width="2.5"></path>
                </svg>
                <span class="text-[15px] font-bold text-[#0075c3] relative z-10">
                  03
                </span>
              </div>
              <div class="flex flex-col items-start gap-2 sm:gap-2.5 flex-1">
                <h4 class="text-lg sm:text-xl font-bold text-left text-[#1d1d1b]">
                  Busca una comunidad.
                </h4>
                <p class="text-base sm:text-[17px] text-left text-[#4a4a48] leading-relaxed">
                  Compartir experiencias con otras familias puede convertirse en una
                  importante fuente de orientación y acompañamiento.
                </p>
              </div>
            </div>

            <!-- Item 04 -->
            <div
              class="flex flex-col sm:flex-row justify-start items-start w-full gap-4 sm:gap-7 py-6 border-b border-[#dee3e7]">
              <div
                class="flex flex-col justify-center items-center shrink-0 h-[60px] w-[60px] relative overflow-hidden">
                <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 w-full h-full">
                  <path
                    d="M1.25 53.25V28.4318C1.25 11.8864 13.0682 1.25 27.25 1.25C41.4318 1.25 53.25 11.8864 53.25 28.4318V53.25"
                    stroke="#0075C3" stroke-width="2.5"></path>
                </svg>
                <span class="text-[15px] font-bold text-[#0075c3] relative z-10">
                  04
                </span>
              </div>
              <div class="flex flex-col items-start gap-2 sm:gap-2.5 flex-1">
                <h4 class="text-lg sm:text-xl font-bold text-left text-[#1d1d1b]">
                  Conoce a tu hijo antes que al diagnóstico.
                </h4>
                <p class="text-base sm:text-[17px] text-left text-[#4a4a48] leading-relaxed">
                  No hay dos personas con síndrome de Down iguales. Cada persona tiene
                  su propia personalidad, necesidades, intereses, fortalezas,
                  capacidades y proyectos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- BLOQUE 3: SECCIÓN INFERIOR AZUL -->
        <div class="flex flex-col items-start w-full bg-[#0075c3]">
          <!-- Contenido Azul -->
          <div
            class="flex flex-col items-center sm:items-start w-full max-w-[720px] mx-auto px-6 sm:px-8 lg:px-0 gap-[22px] pt-4 sm:pt-7 pb-16 sm:pb-[88px] text-white">
            <span class="text-xs sm:text-[13px] font-bold uppercase text-white tracking-wider">
              Y, SOBRE TODO...
            </span>

            <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-white leading-tight">
              Tu hijo o hija es una persona antes que un diagnóstico.
            </h3>

            <p class="text-base sm:text-lg text-left text-white/95 leading-relaxed">
              Con una personalidad propia, gustos, talentos, intereses, fortalezas,
              necesidades, sueños y una manera única de relacionarse con el mundo.
            </p>

            <p class="text-base sm:text-lg text-left text-white/95 leading-relaxed">
              Nuestro trabajo como familia, escuela y comunidad es generar oportunidades
              para que pueda aprender, participar, tomar decisiones y construir una
              vida cada vez más autónoma e incluida en su comunidad.
            </p>

            <p class="text-lg sm:text-[19px] font-semibold text-left text-white leading-snug pt-1">
              En el Instituto Down de Chihuahua queremos caminar contigo a lo largo de
              las diferentes etapas de la vida.
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <NuxtLink :to="localePath('/programas')" @click="closeModal" class="w-full sm:w-auto">
                <Button label="Conoce nuestros programas" icon="pi pi-arrow-right" iconPos="right"
                  class="!w-full sm:!w-auto !rounded-full !bg-white !border-none !text-[#0075c3] font-bold !px-6 !py-3.5 hover:!bg-slate-100 transition-all shadow-md" />
              </NuxtLink>

              <NuxtLink :to="localePath('/contacto')" @click="closeModal" class="w-full sm:w-auto">
                <Button label="Acércate al Instituto" icon="pi pi-arrow-right" iconPos="right"
                  class="!w-full sm:!w-auto !rounded-full !bg-[#0075c3] !border-2 !border-white !text-white font-bold !px-6 !py-3.5 hover:!bg-white/10 transition-all" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>
