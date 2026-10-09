<script lang="ts" setup>
import Button from "primevue/button";
import heroFamilias from "~/assets/images/v2/hero_familias.jpg";
import familias from "~/assets/images/v2/familias.jpg";
import espacio from "~/assets/images/v2/espacio.jpg";
import vinculacion from "~/assets/images/v2/vinculacion.jpg";
import mesa from "~/assets/images/v2/mesa.jpg";

useSeoMeta({
  title: "Espacio para Familias | Instituto Down de Chihuahua A.C.",
  description:
    "Un espacio pensado para cada integrante de la familia: acompañamiento para madres y padres, orientación para hermanos, guías, becas y vinculación comunitaria en Chihuahua.",
  keywords:
    "Familias Síndrome de Down Chihuahua, orientación padres síndrome de down, apoyos hermanos trisomía 21, becas instituto down chihuahua, guías nuevos padres",
  ogTitle: "Espacio para Familias | Instituto Down de Chihuahua A.C.",
  ogDescription:
    "Cuando una persona con síndrome de Down forma parte de una familia, toda la familia vive un proceso de aprendizaje. Red de apoyo, recursos y espacio para padres y hermanos.",
  ogImage: heroFamilias,
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Espacio para Familias | Instituto Down de Chihuahua A.C.",
    description:
      "Acompañamiento integral para madres, padres y hermanos de personas con síndrome de Down en Chihuahua.",
  }),
  defineOrganization({
    name: "Instituto Down de Chihuahua A.C.",
    description:
      "Atención e integración integral a personas con síndrome de Down desde 1984.",
  }),
]);

const localePath = useLocalePath();
const route = useRoute();

// Estados reactivos para controlar la visibilidad de los 3 modales
const showMadresPadresModal = ref(false);
const showHermanosModal = ref(false);
const showBibliotecaModal = ref(false);

onMounted(() => {
  if (route.query.openModal === "biblioteca") {
    showBibliotecaModal.value = true;
  } else if (route.query.openModal === "padres") {
    showMadresPadresModal.value = true;
  } else if (route.query.openModal === "hermanos") {
    showHermanosModal.value = true;
  }
});

// Objeto de imágenes configurable para reemplazo manual rápido
const images = {
  heroBg: heroFamilias,
  camino1: familias, // Para madres y padres
  camino2: espacio, // Para hermanos y hermanas
  mesa: mesa, // Biblioteca para familias
  vinculacion: vinculacion, // Vinculación con la comunidad
};

// Función suave para desplazarse a la sección de recursos
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden">
    <!-- 1. HERO SECTION CON IMAGEN DE FONDO Y CAPA AZUL -->
    <section aria-labelledby="hero-familias-title"
      class="relative px-4 sm:px-6 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-28 overflow-hidden text-white min-h-[620px] flex items-center justify-center">
      <!-- Capa de Imagen de Fondo Hero con Transparencia Azul -->
      <div class="absolute inset-0 z-0">
        <img :src="images.heroBg" alt="Fondo Hero - Familias Crecemos Juntos"
          class="w-full h-full object-cover object-center" />
        <div class="absolute inset-0 bg-[#0075c3]/85 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-[#0075c3]/40"></div>
      </div>

      <!-- Contenido Hero -->
      <div
        class="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-10 text-center">
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center gap-6 max-w-4xl reveal-fade-up">
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 md:px-[18px] py-1.5 rounded-full border-[1.5px] border-[#fc0] bg-[#0075c3]/40 backdrop-blur-xs reveal-fade-up stagger-1">
            <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#fc0]">
              Familias
            </span>
          </div>

          <h1 id="hero-familias-title"
            class="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white leading-tight tracking-tight reveal-fade-up stagger-2">
            Crecemos juntos
          </h1>

          <p
            class="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-normal max-w-3xl reveal-fade-up stagger-3">
            Cuando una persona con síndrome de Down forma parte de una familia,
            toda la familia vive un proceso de aprendizaje, adaptación y
            crecimiento.
          </p>
        </div>

        <!-- Banner Card Flotante: ¿Acabas de recibir la noticia? -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl md:rounded-[32px] rounded-bl rounded-br-3xl bg-white border-l-[5px] border-[#fc0] shadow-2xl max-w-3xl w-full text-left reveal-scale"
          style="box-shadow: 0px 12px 32px 0 rgba(0,113,188,0.25);">
          <div class="flex items-center gap-4 flex-1">
            <div class="w-12 h-12 rounded-xl bg-[#fc0] flex items-center justify-center shrink-0 text-[#0075c3]">
              <i class="pi pi-heart-fill text-2xl text-white"></i>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-lg sm:text-xl font-bold text-[#1d1d1b]">
                ¿Acabas de recibir la noticia?
              </h2>
              <p class="text-xs sm:text-sm text-[#4a4a48]">
                Estamos listos para recibirte y caminar a tu lado desde el
                primer día.
              </p>
            </div>
          </div>

          <NuxtLink :to="localePath('/contacto')" class="shrink-0 w-full md:w-auto">
            <Button label="Empieza aquí" icon="pi pi-arrow-right" iconPos="right"
              class="!w-full md:!w-auto !rounded-full !bg-[#fc0] !border-none !text-[#0075c3] font-bold !px-6 !py-3 hover:!bg-[#e6b800] transition-all shadow-md" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 2. INTRO SECTION: Mención Reflexiva -->
    <section aria-labelledby="intro-familias-heading" class="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div data-scroll data-scroll-class="is-inview"
        class="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 reveal-fade-up">
        <h2 id="intro-familias-heading" class="sr-only">
          Mensaje para las familias
        </h2>

        <p class="text-base sm:text-lg md:text-xl text-[#4a4a48] leading-relaxed">
          No existe una sola manera de vivir esta experiencia. Cada familia es
          diferente y puede atravesar momentos de alegría y orgullo, pero
          también dudas, cansancio, preocupación o incertidumbre.
        </p>

        <p class="text-xl sm:text-2xl font-semibold text-[#0075c3] leading-relaxed max-w-2xl">
          En el Instituto Down de Chihuahua creemos que acompañar a una persona
          con síndrome de Down significa también acompañar a quienes comparten su
          vida.
        </p>

        <p class="text-base sm:text-lg text-[#4a4a48] font-medium">
          Por eso hemos creado este espacio para ustedes.
        </p>

        <div class="w-20 h-1 rounded-full bg-[#fc0] mt-2"></div>
      </div>
    </section>

    <!-- 3. SECTION: TRES CAMINOS (Espacios pensados para cada persona de la casa) -->
    <section aria-labelledby="tres-caminos-title"
      class="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 border-t border-slate-100">
      <div class="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        <!-- Section Header -->
        <div data-scroll data-scroll-class="is-inview" class="flex flex-col items-start gap-4 reveal-fade-up">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#1d1d1b]">
            <span class="text-xs sm:text-[13px] font-bold uppercase text-[#1d1d1b] tracking-wider">
              Tres caminos
            </span>
          </div>
          <h2 id="tres-caminos-title"
            class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1d1d1b] max-w-3xl leading-tight">
            Espacios pensados para cada persona de la casa
          </h2>
        </div>

        <!-- Camino 1: Para madres y padres -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 reveal-fade-up">
          <!-- Image -->
          <div
            @click="showMadresPadresModal = true"
            class="w-full lg:w-1/2 h-[300px] sm:h-[360px] rounded-[32px] border-[12px] border-white overflow-hidden shrink-0 shadow-xl hover-zoom-img hover-lift cursor-pointer"
            style="filter: drop-shadow(0px 16px 40px rgba(29,29,27,0.09));">
            <img :src="images.camino1" alt="Acompañamiento para madres y padres" class="w-full h-full object-cover" />
          </div>

          <!-- Content -->
          <div class="flex flex-col items-start gap-6 lg:w-1/2">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#fc0] badge-pulse">
              <span class="text-xs sm:text-[13px] font-bold uppercase text-[#0075c3] tracking-wider">
                Para madres y padres
              </span>
            </div>

            <h3 class="text-3xl sm:text-4xl font-bold text-[#0075c3] leading-tight">
              No están solos
            </h3>

            <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
              Recibir un diagnóstico, iniciar una nueva etapa escolar, enfrentar un
              reto de salud o comenzar a pensar en la vida adulta puede traer
              preguntas que no siempre sabemos cómo responder.{" "}
              <strong class="font-bold text-[#1d1d1b]">
                Es normal no tener todas las respuestas.
              </strong>
            </p>

            <Button label="Leer más" icon="pi pi-arrow-right" iconPos="right"
              @click="showMadresPadresModal = true"
              class="!rounded-full !bg-transparent !border-2 !border-[#0075c3] !text-[#0075c3] font-bold !px-6 !py-3 hover:!bg-[#0075c3] hover:!text-white transition-all shadow-xs hover-lift" />
          </div>
        </div>

        <!-- Camino 2: Para hermanos y hermanas (Inverted layout) -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 reveal-fade-up">
          <!-- Content -->
          <div class="flex flex-col items-start gap-6 lg:w-1/2">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#fc0] badge-pulse">
              <span class="text-xs sm:text-[13px] font-bold uppercase text-[#0075c3] tracking-wider">
                Para hermanos y hermanas
              </span>
            </div>

            <h3 class="text-3xl sm:text-4xl font-bold text-[#0075c3] leading-tight">
              Este espacio también es para ti
            </h3>

            <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
              Ser hermano o hermana de una persona con síndrome de Down es una
              relación que se construye a lo largo de la vida. Habrá momentos
              extraordinarios. También habrá ocasiones en las que puedas sentir
              orgullo, cariño, preocupación, enojo, cansancio, dudas o simplemente
              ganas de tener tu propio espacio. Todo eso tiene cabida.
            </p>

            <Button label="Leer más" icon="pi pi-arrow-right" iconPos="right"
              @click="showHermanosModal = true"
              class="!rounded-full !bg-transparent !border-2 !border-[#0075c3] !text-[#0075c3] font-bold !px-6 !py-3 hover:!bg-[#0075c3] hover:!text-white transition-all shadow-xs hover-lift" />
          </div>

          <!-- Image -->
          <div
            @click="showHermanosModal = true"
            class="w-full lg:w-1/2 h-[300px] sm:h-[360px] rounded-[32px] border-[12px] border-white overflow-hidden shrink-0 shadow-xl hover-zoom-img hover-lift cursor-pointer"
            style="filter: drop-shadow(0px 16px 40px rgba(29,29,27,0.09));">
            <img :src="images.camino2" alt="Espacio para hermanos y hermanas" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Camino 3: Biblioteca para familias -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 reveal-fade-up">
          <!-- Image -->
          <div
            @click="showBibliotecaModal = true"
            class="w-full lg:w-1/2 h-[300px] sm:h-[360px] rounded-[32px] border-[12px] border-white overflow-hidden shrink-0 shadow-xl hover-zoom-img hover-lift cursor-pointer"
            style="filter: drop-shadow(0px 16px 40px rgba(29,29,27,0.09));">
            <img :src="images.mesa" alt="Biblioteca para familias" class="w-full h-full object-cover" />
          </div>

          <!-- Content -->
          <div class="flex flex-col items-start gap-6 lg:w-1/2">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#fc0]">
              <span class="text-xs sm:text-[13px] font-bold uppercase text-[#0075c3] tracking-wider">
                Biblioteca para familias
              </span>
            </div>

            <h3 class="text-3xl sm:text-4xl font-bold text-[#0075c3] leading-tight">
              Información confiable para acompañarte
            </h3>

            <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
              Sabemos que encontrar información confiable sobre síndrome de Down
              puede resultar complicado. Por eso seleccionamos recursos de
              organizaciones especializadas que pueden ayudarte a encontrar
              información y herramientas para las diferentes etapas de la vida.
            </p>

            <Button label="Ir a la biblioteca" icon="pi pi-book" iconPos="right"
              @click="showBibliotecaModal = true"
              class="!rounded-full !bg-transparent !border-2 !border-[#0075c3] !text-[#0075c3] font-bold !px-6 !py-3 hover:!bg-[#0075c3] hover:!text-white transition-all" />
          </div>
        </div>
      </div>
    </section>

    <!-- 4. SECTION: RECURSOS RECOMENDADOS -->
    <section id="recursos-recomendados" aria-labelledby="recursos-recomendados-title"
      class="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-slate-100">
      <div class="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        <!-- Header -->
        <div data-scroll data-scroll-class="is-inview" class="flex flex-col items-start gap-4 reveal-fade-up">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#0075c3]">
            <span class="text-xs sm:text-[13px] font-bold uppercase text-[#0075c3] tracking-wider">
              Recursos recomendados
            </span>
          </div>
          <h2 id="recursos-recomendados-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0075c3]">
            Recursos recomendados
          </h2>
        </div>

        <!-- Columns Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <!-- Col 1: Para madres y padres -->
          <div data-scroll data-scroll-class="is-inview" class="flex flex-col gap-6 reveal-fade-up">
            <div
              class="self-start inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#0075c3]">
              <span class="text-xs sm:text-[13px] font-bold uppercase text-[#0075c3] tracking-wider">
                Para madres y padres
              </span>
            </div>

            <div class="flex flex-col gap-6">
              <!-- Item 1 -->
              <a href="https://www.sindromedown.net/" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-100 hover:border-[#0075c3]/30 transition-all group shadow-xs">
                <div class="flex items-center gap-4">
                  <div class="w-6 h-6 rounded-full bg-[#0075c3] flex items-center justify-center shrink-0 text-white">
                    <i class="pi pi-[#0075c3] text-xs"></i>
                  </div>
                  <div class="flex flex-col">
                    <h3
                      class="text-base sm:text-lg font-semibold text-[#1d1d1b] group-hover:text-[#0075c3] transition-colors">
                      Recursos para familias
                    </h3>
                    <span class="text-xs sm:text-[13px] text-[#4a4a48] font-medium">DOWN ESPAÑA</span>
                  </div>
                </div>
                <span
                  class="text-sm font-bold text-[#0075c3] shrink-0 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Consultar <i class="pi pi-arrow-right text-xs"></i>
                </span>
              </a>

              <!-- Item 2 -->
              <a href="https://www.sindromedown.net/publicaciones/" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-100 hover:border-[#0075c3]/30 transition-all group shadow-xs">
                <div class="flex items-center gap-4">
                  <div class="w-6 h-6 rounded-full bg-[#0075c3] flex items-center justify-center shrink-0 text-white">
                    <i class="pi pi-[#0075c3] text-xs"></i>
                  </div>
                  <div class="flex flex-col">
                    <h3
                      class="text-base sm:text-lg font-semibold text-[#1d1d1b] group-hover:text-[#0075c3] transition-colors">
                      Familias y síndrome de Down: apoyos y marcos de colaboración
                    </h3>
                    <span class="text-xs sm:text-[13px] text-[#4a4a48] font-medium">DOWN ESPAÑA</span>
                  </div>
                </div>
                <span
                  class="text-sm font-bold text-[#0075c3] shrink-0 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Consultar <i class="pi pi-arrow-right text-xs"></i>
                </span>
              </a>
            </div>
          </div>

          <!-- Col 2: Para hermanos y hermanas -->
          <div id="recursos-hermanos" data-scroll data-scroll-class="is-inview"
            class="flex flex-col gap-6 reveal-fade-up">
            <div
              class="self-start inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#fc0]">
              <span class="text-xs sm:text-[13px] font-bold uppercase text-[#0075c3] tracking-wider">
                Para hermanos y hermanas
              </span>
            </div>

            <div class="flex flex-col gap-6">
              <!-- Item 1 (con badge Recomendado) -->
              <a href="https://www.sindromedown.net/" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-100 hover:border-[#0075c3]/30 transition-all group shadow-xs">
                <div class="flex items-center gap-4 flex-1">
                  <div class="w-6 h-6 rounded-full bg-[#0075c3] flex items-center justify-center shrink-0 text-white">
                    <i class="pi pi-[#0075c3] text-xs"></i>
                  </div>
                  <div class="flex flex-col">
                    <div class="flex items-center gap-2 flex-wrap">
                      <h3
                        class="text-base sm:text-lg font-semibold text-[#1d1d1b] group-hover:text-[#0075c3] transition-colors">
                        Los hermanos y hermanas adolescentes opinan
                      </h3>
                      <span class="px-2.5 py-1 rounded-full bg-[#fc0] text-[11px] font-bold text-[#1d1d1b] uppercase">
                        Recomendado
                      </span>
                    </div>
                    <span class="text-xs sm:text-[13px] text-[#4a4a48] font-medium">DOWN ESPAÑA</span>
                  </div>
                </div>
                <span
                  class="text-sm font-bold text-[#0075c3] shrink-0 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Consultar <i class="pi pi-arrow-right text-xs"></i>
                </span>
              </a>

              <!-- Item 2 -->
              <a href="https://www.down21.org/familia.html" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-100 hover:border-[#0075c3]/30 transition-all group shadow-xs">
                <div class="flex items-center gap-4">
                  <div class="w-6 h-6 rounded-full bg-[#0075c3] flex items-center justify-center shrink-0 text-white">
                    <i class="pi pi-[#0075c3] text-xs"></i>
                  </div>
                  <div class="flex flex-col">
                    <h3
                      class="text-base sm:text-lg font-semibold text-[#1d1d1b] group-hover:text-[#0075c3] transition-colors">
                      Los hermanos
                    </h3>
                    <span class="text-xs sm:text-[13px] text-[#4a4a48] font-medium">Fundación Iberoamericana
                      Down21</span>
                  </div>
                </div>
                <span
                  class="text-sm font-bold text-[#0075c3] shrink-0 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Consultar <i class="pi pi-arrow-right text-xs"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <!-- Button Ver todos los recursos -->
        <div class="flex justify-center mt-4">
          <a href="https://www.sindromedown.net/publicaciones/" target="_blank" rel="noopener noreferrer">
            <Button label="Ver todos los recursos y fuentes confiables" icon="pi pi-external-link" iconPos="right"
              class="!rounded-full !bg-transparent !border-2 !border-[#0075c3] !text-[#0075c3] font-bold !px-8 !py-3.5 hover:!bg-[#0075c3] hover:!text-white transition-all shadow-xs" />
          </a>
        </div>
      </div>
    </section>

    <!-- 5. SECTION: VINCULACIÓN CON LA COMUNIDAD (Banner Azul con imagen) -->
    <section aria-labelledby="vinculacion-title"
      class="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden text-white min-h-[480px] flex items-center justify-center bg-[#0075c3]">
      <!-- Background Image & Overlay -->
      <div class="absolute inset-0 z-0">
        <img :src="images.vinculacion" alt="Vinculación con la comunidad"
          class="w-full h-full object-cover object-center" />
        <div class="absolute inset-0 bg-[#0075c3]/85 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-[#0075c3]/60"></div>
      </div>

      <!-- Content -->
      <div data-scroll data-scroll-class="is-inview"
        class="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-6 reveal-fade-up">
        <div
          class="inline-flex items-center px-4 py-1.5 rounded-full border-[1.5px] border-[#fc0] bg-[#0075c3]/40 backdrop-blur-xs">
          <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#fc0]">
            Vinculación al mundo exterior
          </span>
        </div>

        <h2 id="vinculacion-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight">
          Vinculación con la comunidad
        </h2>

        <p class="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
          Nuestro trabajo no termina en las puertas del Instituto. Impulsamos que
          las personas con síndrome de Down participen en la vida de la ciudad: en
          la escuela, en el trabajo, en el deporte y en la cultura. Tender esos
          puentes con la comunidad, las empresas y las instituciones es parte
          esencial de lo que hacemos.
        </p>
      </div>
    </section>

    <!-- 6. SECTION: APOYO E INFORMACIÓN PRÁCTICA (Recursos y Becas) -->
    <section aria-labelledby="recursos-becas-title" class="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-4 max-w-3xl reveal-fade-up">
          <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fc0] px-4 py-1 rounded-full">
            Apoyo e Información Práctica
          </span>
          <h2 id="recursos-becas-title" class="text-3xl sm:text-4xl lg:text-[44px] text-[#0075c3]">
            <span class="font-bold">Recursos y </span>
            <span class="font-black italic">Becas</span>
          </h2>
          <p class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed">
            Reunimos aquí lo que puede ayudarte en el día a día: guías para nuevos
            padres, orientación sobre trámites y derechos, información sobre
            nuestras cuotas y becas, y contactos útiles. Si no encuentras lo que
            buscas, escríbenos: preferimos que preguntes a que te quedes con la duda.
          </p>
        </div>

        <!-- 2x2 Grid of Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          <!-- Card 1 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#f4f6f8] shadow-sm hover:shadow-md transition-all reveal-fade-up stagger-1 hover-lift"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.04);">
            <div
              class="w-14 h-14 rounded-2xl bg-[#0075c3] flex items-center justify-center shrink-0 text-white text-2xl">
              <i class="pi pi-book"></i>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-bold text-[#0075c3]">
                Guías para nuevos padres
              </h3>
              <p class="text-[15px] text-[#4a4a48]">
                Documentos con consejos y primeros pasos emocionales y médicos.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#f4f6f8] shadow-sm hover:shadow-md transition-all reveal-fade-up stagger-2 hover-lift"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.04);">
            <div
              class="w-14 h-14 rounded-2xl bg-[#fc0] flex items-center justify-center shrink-0 text-[#1d1d1b] text-2xl">
              <i class="pi pi-shield"></i>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-bold text-[#0075c3]">
                Trámites y derechos
              </h3>
              <p class="text-[15px] text-[#4a4a48]">
                Orientación legal y administrativa sobre discapacidad.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#f4f6f8] shadow-sm hover:shadow-md transition-all reveal-fade-up stagger-3 hover-lift"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.04);">
            <div
              class="w-14 h-14 rounded-2xl bg-[#e8734a] flex items-center justify-center shrink-0 text-white text-2xl">
              <i class="pi pi-graduation-cap"></i>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-bold text-[#0075c3]">
                Cuotas y becas
              </h3>
              <p class="text-[15px] text-[#4a4a48]">
                Esquema de apoyos para asegurar la continuidad de tu hijo.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#f4f6f8] shadow-sm hover:shadow-md transition-all reveal-fade-up stagger-4 hover-lift"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.04);">
            <div
              class="w-14 h-14 rounded-2xl bg-[#0075c3] flex items-center justify-center shrink-0 text-white text-2xl">
              <i class="pi pi-phone"></i>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-bold text-[#0075c3]">
                Contactos útiles
              </h3>
              <p class="text-[15px] text-[#4a4a48]">
                Directorio de especialistas y redes de apoyo recomendadas.
              </p>
            </div>
          </div>
        </div>

        <!-- WhatsApp Help Banner -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 sm:p-8 rounded-[36px] bg-white w-full max-w-4xl shadow-md hover:shadow-lg transition-all reveal-scale"
          style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.12);">
          <p class="text-lg font-bold text-[#1d1d1b] text-center sm:text-left">
            ¿No encuentras lo que buscas? Escríbenos
          </p>
          <a href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#25d366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-all shrink-0 shadow-sm">
            <span>WhatsApp</span>
            <div class="w-8 h-8 rounded-full bg-white text-[#25d366] flex items-center justify-center shrink-0">
              <i class="pi pi-whatsapp text-lg"></i>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 7. SECTION: CTA BLUE BANNER ("Cada familia tiene una historia...") -->
    <section aria-labelledby="cta-familias-title" class="bg-[#0075c3] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div data-scroll data-scroll-class="is-inview"
        class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 reveal-scale">
        <h2 id="cta-familias-title" class="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-relaxed">
          Cada familia tiene una historia de amor y superación. Queremos escuchar la
          tuya y ser parte de tu camino.
        </h2>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <a href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
            <Button label="Habla con nosotros" icon="pi pi-phone" iconPos="right"
              class="!w-full sm:!w-auto !rounded-full !bg-[#fc0] !border-none !text-[#0075c3] font-bold !px-8 !py-4 hover:!bg-[#e6b800] transition-all shadow-md" />
          </a>
          <NuxtLink :to="localePath('/contacto')" class="w-full sm:w-auto">
            <Button label="Agenda una visita" icon="pi pi-arrow-right" iconPos="right"
              class="!w-full sm:!w-auto !rounded-full !bg-transparent !border-2 !border-white !text-white font-bold !px-8 !py-4 hover:!bg-white/10 transition-all" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- MODALES INTERACTIVOS DE FAMILIAS -->
    <MadresPadresModal v-model:visible="showMadresPadresModal" />
    <HermanosModal v-model:visible="showHermanosModal" />
    <BibliotecaModal v-model:visible="showBibliotecaModal" />
  </main>
</template>
