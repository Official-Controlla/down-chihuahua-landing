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

const preguntasFuturo = [
  "¿Qué papel quiero tener en la vida de mi hermano o hermana?",
  "¿Qué apoyos necesitará cuando sea adulto?",
  "¿Cómo quiere vivir?",
  "¿Qué necesito conocer sobre su salud y sus necesidades?",
  "¿Cómo puedo apoyarlo sin dejar de construir mi propio proyecto de vida?",
  "¿Qué decisiones le corresponde tomar a él o ella?",
];
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
      <!-- HEADER AMARILLO -->
      <header
        class="sticky top-0 z-30 flex justify-between items-center w-full min-h-[76px] sm:min-h-[88px] px-6 sm:px-12 bg-[#fc0]">
        <span class="text-xs sm:text-sm font-bold uppercase text-[#1d1d1b] tracking-wider">
          Para Hermanos y Hermanas
        </span>
        <button type="button" aria-label="Cerrar modal" @click="closeModal"
          class="flex justify-center items-center w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full border-2 border-[#1d1d1b] text-[#1d1d1b] hover:bg-[#1d1d1b]/10 transition-all cursor-pointer shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 sm:w-5 sm:h-5">
            <path d="M15 5L5 15M5 5L15 15" stroke="#1D1D1B" stroke-width="2" stroke-linecap="round"></path>
          </svg>
        </button>
      </header>

      <!-- CUERPO PRINCIPAL DEL MODAL -->
      <div class="flex flex-col items-center w-full bg-white">
        <!-- BLOQUE 1: ESTE ESPACIO TAMBIÉN ES PARA TI -->
        <section
          class="flex flex-col items-start w-full max-w-[888px] px-6 sm:px-8 lg:px-0 gap-6 pt-10 sm:pt-[76px] pb-12 sm:pb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-[#0071bc] leading-tight">
            Este espacio también es para ti
          </h2>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Ser hermano o hermana de una persona con síndrome de Down es una relación
            que se construye a lo largo de la vida.
          </p>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Habrá momentos extraordinarios. También habrá ocasiones en las que puedas
            sentir orgullo, cariño, preocupación, enojo, cansancio, dudas o
            simplemente ganas de tener tu propio espacio.
          </p>
          <p class="text-xl sm:text-2xl md:text-[25px] font-bold text-left text-[#1d1d1b] leading-snug">
            Todo eso tiene cabida.
          </p>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            La literatura especializada sobre hermanos insiste en algo importante: es
            necesario permitir que expresen también sentimientos difíciles, reconocer
            su individualidad y evitar responsabilidades excesivas de cuidado.
          </p>
          <p class="text-xs text-left text-[#9a9a97] italic mt-1">
            Fuente: Fundación Iberoamericana Down21 (down21.org)
          </p>
        </section>

        <!-- BLOQUE 2: NO TIENES QUE SER PERFECTO -->
        <section
          class="flex flex-col items-start w-full max-w-[840px] px-6 sm:px-8 lg:px-0 gap-[22px] py-12 sm:py-16 border-t border-slate-100">
          <h3 class="text-2xl sm:text-3xl md:text-[34px] font-bold text-left text-[#0071bc] leading-snug">
            No tienes que ser perfecto
          </h3>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Ser hermano no significa ser terapeuta, maestro ni cuidador permanente.
          </p>
          <h4 class="text-xl sm:text-2xl font-bold text-left text-[#0071bc] leading-snug">
            Eres, antes que nada, hermano o hermana.
          </h4>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Construir una buena relación también significa compartir cosas que ambos
            disfruten, discutir alguna vez, reírse juntos, tener intereses diferentes y
            contar cada uno con su propio espacio.
          </p>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            DOWN ESPAÑA recoge precisamente la voz de hermanos y hermanas, quienes
            señalan que tienen sus propias necesidades y que sus espacios, ritmos,
            aprendizajes y logros deben conservar su independencia.
          </p>
          <p class="text-xs text-left text-[#9a9a97] italic mt-1">
            Fuente: DOWN ESPAÑA (sindromedown.net)
          </p>
        </section>

        <!-- BLOQUE 3: TUS EMOCIONES TAMBIÉN IMPORTAN -->
        <section class="flex flex-col items-start w-full max-w-[840px] px-6 sm:px-8 lg:px-0 gap-7 py-12 sm:py-[72px]">
          <h3 class="text-2xl sm:text-3xl md:text-[34px] font-bold text-left text-[#0071bc] leading-snug">
            Tus emociones también importan
          </h3>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Puedes sentir muchísimo cariño por tu hermano y, al mismo tiempo, vivir
            situaciones que te resulten difíciles.
          </p>

          <!-- Lista con indicador amarillo -->
          <div class="flex flex-col items-start w-full gap-3.5">
            <div class="flex items-center w-full gap-4 sm:gap-[18px] py-2 sm:py-3">
              <div class="w-[7px] h-10 sm:h-11 rounded-full bg-[#fc0] shrink-0"></div>
              <p class="text-lg sm:text-xl md:text-[22px] font-medium text-left text-[#1d1d1b] leading-snug flex-1">
                Puedes necesitar hablar de ellas.
              </p>
            </div>

            <div class="flex items-center w-full gap-4 sm:gap-[18px] py-2 sm:py-3">
              <div class="w-[7px] h-10 sm:h-11 rounded-full bg-[#fc0] shrink-0"></div>
              <p class="text-lg sm:text-xl md:text-[22px] font-medium text-left text-[#1d1d1b] leading-snug flex-1">
                Puedes hacer preguntas.
              </p>
            </div>

            <div class="flex items-center w-full gap-4 sm:gap-[18px] py-2 sm:py-3">
              <div class="w-[7px] h-10 sm:h-11 rounded-full bg-[#fc0] shrink-0"></div>
              <p class="text-lg sm:text-xl md:text-[22px] font-medium text-left text-[#1d1d1b] leading-snug flex-1">
                Puedes necesitar tiempo solamente para ti.
              </p>
            </div>

            <div class="flex items-center w-full gap-4 sm:gap-[18px] py-2 sm:py-3">
              <div class="w-[7px] h-10 sm:h-11 rounded-full bg-[#fc0] shrink-0"></div>
              <p class="text-lg sm:text-xl md:text-[22px] font-medium text-left text-[#1d1d1b] leading-snug flex-1">
                Y ninguna de esas cosas significa que quieras menos a tu hermano o
                hermana.
              </p>
            </div>
          </div>

          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            La Fundación Iberoamericana Down21 también recomienda proporcionar a los
            hermanos información adecuada a su edad y permitir que se comporten como
            hermanos, evitando presentarles la responsabilidad futura como una carga.
          </p>
          <p class="text-xs text-left text-[#9a9a97] italic mt-1">
            Fuente: Fundación Iberoamericana Down21 (down21.org)
          </p>
        </section>

        <!-- BLOQUE 4: CUANDO LLEGUE EL MOMENTO DE HABLAR DEL FUTURO -->
        <section
          class="flex flex-col items-start w-full max-w-[840px] px-6 sm:px-8 lg:px-0 gap-6 pt-12 sm:pt-16 pb-16 sm:pb-[84px] border-t border-[#f4f6f8]">
          <h3 class="text-2xl sm:text-3xl md:text-[34px] font-bold text-left text-[#0071bc] leading-snug">
            Cuando llegue el momento de hablar del futuro
          </h3>
          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Al crecer pueden aparecer nuevas preguntas:
          </p>

          <!-- Caja de Preguntas -->
          <div class="flex flex-col items-start w-full gap-3 p-6 sm:p-8 rounded-[20px] bg-[#f4f6f8]">
            <div v-for="(pregunta, index) in preguntasFuturo" :key="index" class="flex items-center w-full gap-4 py-2">
              <div
                class="flex flex-col justify-center items-center shrink-0 h-12 w-12 sm:h-[60px] sm:w-[60px] relative overflow-hidden">
                <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 w-full h-full">
                  <path
                    d="M1.25 53.25V28.4318C1.25 11.8864 13.0682 1.25 27.25 1.25C41.4318 1.25 53.25 11.8864 53.25 28.4318V53.25"
                    stroke="#FFCC00" stroke-width="2.5"></path>
                </svg>
                <div class="w-2 h-2 rounded-full bg-[#fc0] relative z-10"></div>
              </div>
              <p class="text-base sm:text-lg font-semibold text-left text-[#1d1d1b] leading-snug flex-1">
                {{ pregunta }}
              </p>
            </div>
          </div>

          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Estas conversaciones pueden formar parte de la vida familiar y evolucionar
            conforme todos crecen.
          </p>
        </section>

        <!-- BLOQUE 5: SECCIÓN INFERIOR AMARILLA -->
        <div class="flex flex-col items-start w-full bg-[#fc0]">

          <!-- Contenido Amarillo -->
          <div
            class="flex flex-col items-start w-full max-w-[720px] mx-auto px-6 sm:px-8 lg:px-0 gap-5 sm:gap-[21px] pt-4 sm:pt-7 pb-16 sm:pb-[88px] text-[#1d1d1b]">
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-[#1d1d1b] leading-tight">
              Tu vida también importa
            </h3>

            <p class="text-base sm:text-lg text-left text-[#1d1d1b] leading-relaxed">
              Tener tus propios proyectos, amistades, estudios, trabajo, familia y
              sueños no significa querer menos a tu hermano o hermana.
            </p>

            <p class="text-lg sm:text-[21px] font-bold text-left text-[#1d1d1b] leading-snug">
              Tu relación con él o ella es importante.
            </p>

            <p class="text-lg sm:text-[21px] font-bold text-left text-[#1d1d1b] leading-snug">
              Tu propio proyecto de vida también lo es.
            </p>

            <p class="text-base sm:text-lg text-left text-[#1d1d1b] leading-relaxed">
              En el Instituto queremos que los hermanos y hermanas encuentren también
              información, escucha y espacios para compartir experiencias.
            </p>

            <p class="text-lg sm:text-[19px] font-semibold text-left text-[#1d1d1b] leading-snug pt-1">
              No necesitas tener hoy todas las respuestas sobre el futuro. Lo importante
              es que podamos hablar de él.
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <NuxtLink :to="localePath('/programas')" @click="closeModal" class="w-full sm:w-auto">
                <Button label="Recursos para hermanos" icon="pi pi-arrow-right" iconPos="right"
                  class="!w-full sm:!w-auto !rounded-full !bg-[#1d1d1b] !border-none !text-white font-bold !px-6 !py-3.5 hover:!bg-black transition-all shadow-md" />
              </NuxtLink>

              <NuxtLink :to="localePath('/contacto')" @click="closeModal" class="w-full sm:w-auto">
                <Button label="Acércate al Instituto" icon="pi pi-arrow-right" iconPos="right"
                  class="!w-full sm:!w-auto !rounded-full !bg-[#fc0] !border-2 !border-[#1d1d1b] !text-[#1d1d1b] font-bold !px-6 !py-3.5 hover:!bg-[#1d1d1b]/10 transition-all" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>
