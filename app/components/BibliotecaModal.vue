<script setup lang="ts">
import Button from "primevue/button";
import Dialog from "primevue/dialog";

const visible = defineModel<boolean>("visible", { default: false });
const selectedCategory = ref<"todos" | "padres" | "hermanos">("todos");
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

const setCategory = (cat: "todos" | "padres" | "hermanos") => {
  selectedCategory.value = cat;
};
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    dismissableMask
    :blockScroll="true"
    :showHeader="false"
    class="!border-none !bg-transparent !shadow-2xl max-w-[1120px] w-[95vw] md:w-[90vw]"
    contentClass="!p-0 !rounded-[28px] !bg-white !overflow-y-auto max-h-[85vh] sm:max-h-[90vh]"
    maskClass="bg-black/60 backdrop-blur-xs"
    :pt="{ content: { 'data-lenis-prevent': 'true', 'data-scroll-prevent': 'true' } }"
  >
    <div
      data-lenis-prevent
      data-scroll-prevent
      class="flex flex-col w-full relative bg-white text-[#1d1d1b] font-sans touch-pan-y"
      style="box-shadow: 0px 24px 64px 0 rgba(29, 29, 27, 0.14);"
    >
      <!-- HEADER AZUL -->
      <header
        class="sticky top-0 z-30 flex justify-between items-center w-full min-h-[76px] sm:min-h-[88px] px-6 sm:px-12 bg-[#0075c3]"
      >
        <span
          class="text-xs sm:text-sm font-bold uppercase text-white tracking-wider"
        >
          Biblioteca para Familias
        </span>
        <button
          type="button"
          aria-label="Cerrar modal"
          @click="closeModal"
          class="flex justify-center items-center w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full border-2 border-white text-white hover:bg-white/20 transition-all cursor-pointer shrink-0"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
        </button>
      </header>

      <!-- CUERPO PRINCIPAL DE LA BIBLIOTECA -->
      <div class="flex flex-col items-center w-full bg-white">
        <!-- HERO INTRO DE BIBLIOTECA -->
        <div
          class="w-full bg-[#f4f6f8] px-6 sm:px-12 md:px-16 py-10 sm:py-14 flex flex-col justify-center gap-4"
        >
          <div class="max-w-4xl flex flex-col items-start gap-4">
            <span
              class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0071bc]"
            >
              BIBLIOTECA PARA FAMILIAS
            </span>
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0071bc] leading-tight"
            >
              Información confiable para acompañarte
            </h2>
            <p
              class="text-base sm:text-lg text-[#4a4a48] leading-relaxed max-w-3xl"
            >
              Sabemos que encontrar información confiable sobre síndrome de Down
              puede resultar complicado. Por eso seleccionamos recursos de
              organizaciones especializadas que pueden ayudarte a encontrar
              información y herramientas para las diferentes etapas de la vida.
            </p>
          </div>
        </div>

        <!-- FILTROS DE CATEGORÍA -->
        <div
          class="w-full px-6 sm:px-12 md:px-16 py-6 border-b border-[#f4f6f8] flex flex-wrap gap-3 items-center bg-white sticky top-[76px] sm:top-[88px] z-20"
        >
          <Button
            label="Todos"
            :class="[
              '!rounded-full !px-6 !py-2.5 !text-sm font-bold transition-all',
              selectedCategory === 'todos'
                ? '!bg-[#0071bc] !text-white !border-none'
                : '!bg-transparent !text-[#0071bc] !border-[1.5px] !border-[#0071bc] hover:!bg-[#0071bc]/10',
            ]"
            @click="setCategory('todos')"
          />
          <Button
            label="Para madres y padres"
            :class="[
              '!rounded-full !px-6 !py-2.5 !text-sm font-bold transition-all',
              selectedCategory === 'padres'
                ? '!bg-[#0071bc] !text-white !border-none'
                : '!bg-transparent !text-[#0071bc] !border-[1.5px] !border-[#0071bc] hover:!bg-[#0071bc]/10',
            ]"
            @click="setCategory('padres')"
          />
          <Button
            label="Para hermanos y hermanas"
            :class="[
              '!rounded-full !px-6 !py-2.5 !text-sm font-bold transition-all',
              selectedCategory === 'hermanos'
                ? '!bg-[#0071bc] !text-white !border-none'
                : '!bg-transparent !text-[#0071bc] !border-[1.5px] !border-[#0071bc] hover:!bg-[#0071bc]/10',
            ]"
            @click="setCategory('hermanos')"
          />
        </div>

        <!-- LISTADO DE RECURSOS -->
        <div
          class="w-full px-6 sm:px-12 md:px-16 pt-8 sm:pt-12 pb-16 sm:pb-20 flex flex-col gap-12 sm:gap-16 bg-white"
        >
          <!-- SECCIÓN 1: PARA MADRES Y PADRES -->
          <section
            v-if="selectedCategory === 'todos' || selectedCategory === 'padres'"
            class="flex flex-col gap-6 w-full"
          >
            <!-- Header de Sección -->
            <div class="flex items-center gap-4 sm:gap-5">
              <svg
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-9 h-8 sm:w-[46px] sm:h-[42px] shrink-0"
              >
                <path
                  d="M0 42V22.2353C0 8.64706 9.77778 0 22 0C34.2222 0 44 8.64706 44 22.2353V42"
                  stroke="#0071BC"
                  stroke-width="3"
                ></path>
              </svg>
              <h3
                class="text-2xl sm:text-[28px] font-bold text-[#0071bc] uppercase tracking-wide"
              >
                Para Madres y Padres
              </h3>
            </div>

            <!-- Lista de Recursos para Padres -->
            <div class="flex flex-col w-full">
              <!-- Recurso 1 -->
              <article
                class="flex flex-col gap-3 py-6 border-b border-[#dee3e7]"
              >
                <span
                  class="text-xs font-bold uppercase tracking-wider text-[#0071bc]"
                >
                  DOWN ESPAÑA
                </span>
                <h4 class="text-xl sm:text-2xl font-semibold text-[#1d1d1b]">
                  Recursos para familias
                </h4>
                <p
                  class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed"
                >
                  Esta sección reúne recursos relacionados con salud, autonomía,
                  educación, empleo y deporte.
                </p>
                <div class="pt-1">
                  <a
                    href="https://www.sindromedown.net/familias/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline"
                  >
                    <span
                      >Consultar Recursos para Familias de DOWN ESPAÑA</span
                    >
                    <i class="pi pi-external-link text-sm"></i>
                  </a>
                </div>
                <span class="text-xs text-[#9a9a97] mt-0.5">
                  Enlace verificado: 23 de septiembre de 2026
                </span>
              </article>

              <!-- Recurso 2 -->
              <article
                class="flex flex-col gap-3 py-6 border-b border-[#dee3e7]"
              >
                <span
                  class="text-xs font-bold uppercase tracking-wider text-[#0071bc]"
                >
                  DOWN ESPAÑA
                </span>
                <h4 class="text-xl sm:text-2xl font-semibold text-[#1d1d1b]">
                  Familias y síndrome de Down: apoyos y marcos de colaboración
                </h4>
                <p
                  class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed"
                >
                  Una guía especialmente amplia para familias. Aborda
                  necesidades y recursos familiares, papel de los padres,
                  autonomía, comunicación, socialización, calidad de vida
                  familiar, orientación y autodeterminación.
                </p>
                <div class="pt-1">
                  <a
                    href="https://www.sindromedown.net/publicaciones/familias-y-sindrome-de-down/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline"
                  >
                    <span>Consultar la guía Familias y síndrome de Down</span>
                    <i class="pi pi-external-link text-sm"></i>
                  </a>
                </div>
                <span class="text-xs text-[#9a9a97] mt-0.5">
                  Enlace verificado: 23 de septiembre de 2026
                </span>
              </article>

              <!-- Recurso 3 -->
              <article
                class="flex flex-col gap-3 py-6 border-b border-[#dee3e7]"
              >
                <span
                  class="text-xs font-bold uppercase tracking-wider text-[#0071bc]"
                >
                  DOWN ESPAÑA
                </span>
                <h4 class="text-xl sm:text-2xl font-semibold text-[#1d1d1b]">
                  Biblioteca de publicaciones
                </h4>
                <p
                  class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed"
                >
                  DOWN ESPAÑA dispone además de una biblioteca que permite
                  consultar publicaciones organizadas en categorías como salud,
                  atención temprana, educación, empleo, autonomía y derechos.
                </p>
                <div class="pt-1">
                  <a
                    href="https://www.sindromedown.net/publicaciones/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline"
                  >
                    <span>Explorar las publicaciones de DOWN ESPAÑA</span>
                    <i class="pi pi-external-link text-sm"></i>
                  </a>
                </div>
                <span class="text-xs text-[#9a9a97] mt-0.5">
                  Enlace verificado: 23 de septiembre de 2026
                </span>
              </article>

              <!-- Recurso 4 -->
              <article
                class="flex flex-col gap-3 py-6 border-b border-[#dee3e7]"
              >
                <span
                  class="text-xs font-bold uppercase tracking-wider text-[#0071bc]"
                >
                  GLOBAL DOWN SYNDROME FOUNDATION
                </span>
                <h4 class="text-xl sm:text-2xl font-semibold text-[#1d1d1b]">
                  Recursos en español
                </h4>
                <p
                  class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed"
                >
                  La sección de recursos incluye materiales sobre atención
                  médica y enlaza, entre otros, información en español de la
                  American Academy of Pediatrics sobre la supervisión de la salud
                  de niños con síndrome de Down.
                </p>
                <div class="pt-1">
                  <a
                    href="https://www.globaldownsyndrome.org/resources/espanol/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline"
                  >
                    <span
                      >Consultar recursos en español de Global Down Syndrome
                      Foundation</span
                    >
                    <i class="pi pi-external-link text-sm"></i>
                  </a>
                </div>
                <span class="text-xs text-[#9a9a97] mt-0.5">
                  Enlace verificado: 23 de septiembre de 2026
                </span>
              </article>

              <!-- Recurso 5 -->
              <article
                class="flex flex-col gap-3 py-6 border-b border-[#dee3e7]"
              >
                <span
                  class="text-xs font-bold uppercase tracking-wider text-[#0071bc]"
                >
                  PARA FAMILIAS QUE RECIBEN UN DIAGNÓSTICO
                </span>
                <h4 class="text-xl sm:text-2xl font-semibold text-[#1d1d1b]">
                  Folleto prenatal y neonatal
                </h4>
                <p
                  class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed"
                >
                  Global Down Syndrome Foundation, National Down Syndrome Congress
                  y National Down Syndrome Society ofrecen un folleto informativo
                  sobre síndrome de Down prenatal y del recién nacido disponible
                  también en español.
                </p>
                <div class="pt-1">
                  <a
                    href="https://www.globaldownsyndrome.org/prenatal-testing-pamphlet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline"
                  >
                    <span>Consultar el folleto prenatal y neonatal</span>
                    <i class="pi pi-external-link text-sm"></i>
                  </a>
                </div>
                <span class="text-xs text-[#9a9a97] mt-0.5">
                  Enlace verificado: 23 de septiembre de 2026
                </span>
              </article>
            </div>
          </section>

          <!-- SECCIÓN 2: PARA HERMANOS Y HERMANAS -->
          <section
            v-if="selectedCategory === 'todos' || selectedCategory === 'hermanos'"
            class="flex flex-col gap-6 w-full"
          >
            <!-- Header de Sección -->
            <div class="flex items-center gap-4 sm:gap-5">
              <svg
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-9 h-8 sm:w-[46px] sm:h-[42px] shrink-0"
              >
                <path
                  d="M0 42V22.2353C0 8.64706 9.77778 0 22 0C34.2222 0 44 8.64706 44 22.2353V42"
                  stroke="#D9B421"
                  stroke-width="3"
                ></path>
              </svg>
              <h3
                class="text-2xl sm:text-[28px] font-bold text-[#0071bc] uppercase tracking-wide"
              >
                Para Hermanos y Hermanas
              </h3>
            </div>

            <!-- Lista de Recursos para Hermanos -->
            <div class="flex flex-col w-full">
              <!-- Recurso 1 (Destacado) -->
              <article
                class="flex flex-col gap-3 p-6 rounded-2xl bg-[#f4f6f8] border-b border-[#dee3e7] mb-4"
              >
                <div class="flex flex-wrap items-center gap-3">
                  <span
                    class="text-xs font-bold uppercase tracking-wider text-[#0071bc]"
                  >
                    DOWN ESPAÑA
                  </span>
                  <span
                    class="inline-block px-3 py-1 rounded-full bg-[#d9b421] text-[#1d1d1b] text-[11px] font-bold"
                  >
                    Recomendado
                  </span>
                </div>
                <h4 class="text-xl sm:text-2xl font-semibold text-[#1d1d1b]">
                  Los hermanos y hermanas adolescentes opinan
                </h4>
                <p
                  class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed"
                >
                  La guía reúne opiniones, experiencias, sentimientos y
                  vivencias de la Red Nacional de Hermanos de DOWN ESPAÑA. Aborda,
                  entre otros asuntos, la relación entre hermanos, autonomía,
                  educación y empleo, relaciones personales, vida independiente,
                  futuro, derechos, sentimientos y necesidades.
                </p>
                <div class="pt-1">
                  <a
                    href="https://www.sindromedown.net/publicacion/los-hermanos-y-hermanas-adolescentes-opinan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline"
                  >
                    <span
                      >Descargar Los hermanos y hermanas adolescentes
                      opinan</span
                    >
                    <i class="pi pi-external-link text-sm"></i>
                  </a>
                </div>
                <span class="text-xs text-[#9a9a97] mt-0.5">
                  Enlace verificado: 23 de septiembre de 2026
                </span>
              </article>

              <!-- Recurso 2 -->
              <article
                class="flex flex-col gap-3 py-6 border-b border-[#dee3e7]"
              >
                <span
                  class="text-xs font-bold uppercase tracking-wider text-[#0071bc]"
                >
                  FUNDACIÓN IBEROAMERICANA DOWN21
                </span>
                <h4 class="text-xl sm:text-2xl font-semibold text-[#1d1d1b]">
                  Los hermanos
                </h4>
                <p
                  class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed"
                >
                  Un material orientado a ayudar a las familias a hablar sobre
                  síndrome de Down con los hermanos. Recomienda proporcionar
                  información apropiada para la edad, tratar el tema con
                  naturalidad y dejar que los hermanos sean hermanos, sin
                  convertir el futuro de su hermano o hermana en una carga.
                </p>
                <div class="pt-1">
                  <a
                    href="https://www.down21.org/familia/los-hermanos.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline"
                  >
                    <span>Leer Los hermanos en Down21</span>
                    <i class="pi pi-external-link text-sm"></i>
                  </a>
                </div>
                <span class="text-xs text-[#9a9a97] mt-0.5">
                  Enlace verificado: 23 de septiembre de 2026
                </span>
              </article>

              <!-- Recurso 3 -->
              <article
                class="flex flex-col gap-3 py-6 border-b border-[#dee3e7]"
              >
                <span
                  class="text-xs font-bold uppercase tracking-wider text-[#0071bc]"
                >
                  DOWN21
                </span>
                <h4 class="text-xl sm:text-2xl font-semibold text-[#1d1d1b]">
                  Lo que piensan los otros hijos
                </h4>
                <p
                  class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed"
                >
                  Presenta en español un trabajo de Brian G. Skotko y Susan P.
                  Levine sobre las necesidades y percepciones de hermanos y
                  hermanas de personas con síndrome de Down. Entre sus
                  recomendaciones se encuentran hablar de forma abierta y
                  honesta, permitir la expresión de sentimientos difíciles,
                  limitar responsabilidades de cuidado, reconocer la
                  individualidad de cada hijo y facilitar espacios de apoyo para
                  hermanos.
                </p>
                <div class="pt-1">
                  <a
                    href="https://www.down21.org/articulos-familia/lo-que-piensan-los-otros-hijos.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline"
                  >
                    <span>Consultar Lo que piensan los otros hijos</span>
                    <i class="pi pi-external-link text-sm"></i>
                  </a>
                </div>
                <span class="text-xs text-[#9a9a97] mt-0.5">
                  Enlace verificado: 23 de septiembre de 2026
                </span>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Dialog>
</template>
