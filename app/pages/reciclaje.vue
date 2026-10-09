<script lang="ts" setup>
import Button from "primevue/button";
import heroReciclaje from "~/assets/images/v2/hero_reciclaje.jpg";
import reciclajeFamilias from "~/assets/images/reciclaje-familias.png";
import reciclajeEmpresas from "~/assets/images/reciclaje-empresas.png";

useSeoMeta({
  title: "Centro de Acopio y Reciclaje | Instituto Down de Chihuahua A.C.",
  description:
    "Somos pioneros del reciclaje en Chihuahua. Recicla cartón, PET, aluminio y vidrio con un doble impacto: cuida el medio ambiente y financia terapias y becas para personas con síndrome de Down.",
  keywords:
    "Reciclaje Chihuahua, Centro de acopio Chihuahua, Reciclar cartón PET aluminio Chihuahua, Donativo reciclaje Instituto Down, Sostenibilidad con causa Chihuahua",
  ogTitle: "Centro de Acopio y Reciclaje | Instituto Down de Chihuahua A.C.",
  ogDescription:
    "Tu acción diaria tiene un doble impacto en Chihuahua: cuida el planeta y financia terapias y becas para niños y jóvenes con síndrome de Down.",
  ogImage: heroReciclaje,
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Centro de Acopio y Reciclaje con Causa | Instituto Down de Chihuahua A.C.",
    description:
      "Programa de acopio y reciclaje sustentable con impacto social y ambiental en Chihuahua.",
  }),
  defineOrganization({
    name: "Instituto Down de Chihuahua A.C.",
    description:
      "Atención e integración integral a personas con síndrome de Down desde 1984.",
  }),
]);

const localePath = useLocalePath();

// Objeto de imágenes configurable para reemplazo manual fácil
const images = {
  heroBg: heroReciclaje,
  familias: reciclajeFamilias,
  empresas: reciclajeEmpresas,
};
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden">
    <!-- 1. HERO SECTION: Sostenibilidad con Causa -->
    <section aria-labelledby="hero-reciclaje-title"
      class="relative px-4 sm:px-6 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-28 overflow-hidden text-white min-h-[620px] flex items-center justify-center bg-[#fc0]">
      <!-- Capa de Imagen de Fondo Hero con Transparencia Azul -->
      <div class="absolute inset-0 z-0">
        <img :src="images.heroBg" alt="Centro de Acopio y Reciclaje - Instituto Down de Chihuahua"
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
              Sostenibilidad con Causa
            </span>
          </div>

          <h1 id="hero-reciclaje-title"
            class="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-white leading-tight tracking-tight reveal-fade-up stagger-2">
            Centro de Acopio y <span class="italic font-black">Reciclaje</span>
          </h1>

          <p
            class="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-normal max-w-3xl reveal-fade-up stagger-3">
            Somos pioneros del reciclaje en Chihuahua. Operamos un centro de acopio
            que recibe cartón, aluminio y otros materiales con un doble impacto:
            cuidar el medio ambiente y financiar el desarrollo de jóvenes con
            síndrome de Down.
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4 reveal-fade-up stagger-4">
            <NuxtLink :to="localePath('/contacto')" class="w-full sm:w-auto">
              <Button label="Programa tu recolección" icon="pi pi-arrow-right" iconPos="right"
                class="!w-full sm:!w-auto !rounded-full !bg-[#fc0] !border-none !text-[#0075c3] font-bold !px-8 !py-4 hover:!bg-[#e6b800] transition-all shadow-md" />
            </NuxtLink>

            <a href="https://maps.google.com/?q=Av.+Mirador+4307,+Campestre+Residencial,+Chihuahua,+Chih."
              target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
              <Button label="Ubicación del centro" icon="pi pi-map-marker" iconPos="right"
                class="!w-full sm:!w-auto !rounded-full !bg-transparent !border-2 !border-white !text-white font-bold !px-8 !py-4 hover:!bg-white/10 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. SECTION: El Doble Valor de Reciclar (Doble Impacto) -->
    <section aria-labelledby="doble-impacto-title" class="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div class="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        <!-- Section Header -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto reveal-fade-up">
          <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0075c3]">
            El doble valor de reciclar
          </span>
          <h2 id="doble-impacto-title" class="text-3xl sm:text-4xl lg:text-[44px] text-[#1d1d1b]">
            <span class="font-bold">Tu acción diaria tiene un </span>
            <span class="font-black italic">Doble Impacto</span>
          </h2>
        </div>

        <!-- 2 Large Impact Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          <!-- Impact Card 1: Ecológico -->
          <article data-scroll data-scroll-class="is-inview"
            class="flex flex-col justify-between gap-8 p-8 sm:p-10 rounded-3xl bg-[#34a853] text-white shadow-xl reveal-fade-up stagger-1 hover:shadow-2xl transition-all">
            <div
              class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 text-[#34a853] text-2xl">
              <i class="pi pi-globe"></i>
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-2xl sm:text-3xl font-bold leading-snug">
                Impacto Ecológico
              </h3>
              <p class="text-base sm:text-lg text-[#eaf7ec] leading-relaxed">
                Evitamos que toneladas de cartón, plástico o aluminio terminen en
                vertederos locales, reduciendo activamente la huella de carbono en la
                ciudad de Chihuahua.
              </p>
            </div>
          </article>

          <!-- Impact Card 2: Inclusión y Desarrollo -->
          <article data-scroll data-scroll-class="is-inview"
            class="flex flex-col justify-between gap-8 p-8 sm:p-10 rounded-3xl bg-[#e8734a] text-white shadow-xl reveal-fade-up stagger-2 hover:shadow-2xl transition-all">
            <div
              class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 text-[#e8734a] text-2xl">
              <i class="pi pi-users"></i>
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-2xl sm:text-3xl font-bold leading-snug">
                Inclusión y Desarrollo
              </h3>
              <p class="text-base sm:text-lg text-[#fff5e0] leading-relaxed">
                Las ganancias recolectadas se destinan a financiar terapias de
                estimulación temprana, talleres formativos y programas de vida
                independiente para nuestros alumnos del Instituto.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. SECTION: ¿Cómo participar? -->
    <section aria-labelledby="participar-title" class="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto reveal-fade-up">
          <span
            class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fc0] bg-[#1d1d1b] px-4 py-1 rounded-full">
            ¿Cómo participar?
          </span>
          <h2 id="participar-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0075c3]">
            Hay un camino diseñado para ti
          </h2>
        </div>

        <!-- 2 Participation Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          <!-- Card 1: Personas y familias -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all reveal-fade-up stagger-1 border border-slate-100">
            <div class="w-full h-[240px] overflow-hidden bg-[#f4f6f8]">
              <img :src="images.familias" alt="Reciclaje para personas y familias en Chihuahua"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div class="flex flex-col gap-6 p-6 sm:p-8 flex-1 justify-between">
              <div class="flex flex-col gap-3">
                <h3 class="text-2xl font-bold text-[#0075c3]">
                  Para personas y familias
                </h3>
                <p class="text-base text-[#4a4a48] leading-relaxed">
                  Acopia cartón, botellas y aluminio en casa. Tráelos directamente a
                  nuestro centro de acopio o únete a las campañas de recolección de tu
                  colonia.
                </p>
              </div>
              <NuxtLink :to="localePath('/contacto')"
                class="inline-flex items-center gap-2 text-base font-bold text-[#0075c3] hover:underline pt-2 group">
                <span>Ubicación del centro de acopio</span>
                <i class="pi pi-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </NuxtLink>
            </div>
          </div>

          <!-- Card 2: Empresas y maquilas -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all reveal-fade-up stagger-2 border border-slate-100">
            <div class="w-full h-[240px] overflow-hidden bg-[#f4f6f8]">
              <img :src="images.empresas" alt="Reciclaje corporativo para empresas y maquilas en Chihuahua"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div class="flex flex-col gap-6 p-6 sm:p-8 flex-1 justify-between">
              <div class="flex flex-col gap-3">
                <h3 class="text-2xl font-bold text-[#0075c3]">
                  Para empresas y maquilas
                </h3>
                <p class="text-base text-[#4a4a48] leading-relaxed">
                  Cumple tus objetivos de Responsabilidad Social y Sostenibilidad de
                  manera certificada. Establecemos convenios de recolección periódica
                  de residuos industriales.
                </p>
              </div>
              <NuxtLink :to="localePath('/contacto')"
                class="inline-flex items-center gap-2 text-base font-bold text-[#0075c3] hover:underline pt-2 group">
                <span>Quiero convenio corporativo</span>
                <i class="pi pi-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. SECTION: ¿Qué reciclamos? Materiales -->
    <section aria-labelledby="materiales-title"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 w-full flex flex-col gap-12 md:gap-16">
      <!-- Header -->
      <div data-scroll data-scroll-class="is-inview"
        class="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto reveal-fade-up">
        <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0075c3]">
          ¿Qué reciclamos?
        </span>
        <h2 id="materiales-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1d1d1b]">
          Materiales que puedes traer hoy
        </h2>
      </div>

      <!-- Materials Grid (5 Items based on mockup) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <!-- PET -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-[6px] border-[#0075c3] reveal-fade-up stagger-1 shadow-xs hover:shadow-md transition-all">
          <h3 class="text-xl font-bold text-[#0075c3]">PET</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Botellas de plástico de refresco, agua y jugos limpias.
          </p>
        </div>

        <!-- Cartón -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-[6px] border-[#fc0] reveal-fade-up stagger-2 shadow-xs hover:shadow-md transition-all">
          <h3 class="text-xl font-bold text-[#0075c3]">Cartón</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Cajas corrugadas, empaques limpios y desarmados.
          </p>
        </div>

        <!-- Papel -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-[6px] border-[#e8734a] reveal-fade-up stagger-3 shadow-xs hover:shadow-md transition-all">
          <h3 class="text-xl font-bold text-[#0075c3]">Papel</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Hojas, cuadernos, libros y archivos de oficina.
          </p>
        </div>

        <!-- Vidrio -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-[6px] border-[#34a853] reveal-fade-up stagger-4 shadow-xs hover:shadow-md transition-all">
          <h3 class="text-xl font-bold text-[#0075c3]">Vidrio</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Botellas y frascos de vidrio (no rotos ni espejos).
          </p>
        </div>

        <!-- Aluminio -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-[6px] border-[#0075c3] reveal-fade-up stagger-5 shadow-xs hover:shadow-md transition-all sm:col-span-2 lg:col-span-1">
          <h3 class="text-xl font-bold text-[#0075c3]">Aluminio</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Latas de bebidas, botes limpios y aplastados.
          </p>
        </div>
      </div>

      <!-- Corporate Banner Box -->
      <div data-scroll data-scroll-class="is-inview"
        class="flex flex-col md:flex-row justify-between items-center gap-6 p-6 sm:p-8 rounded-3xl bg-white w-full border border-slate-100 shadow-md hover:shadow-lg transition-all reveal-scale"
        style="box-shadow: 0px 12px 32px 0 rgba(0,113,188,0.12);">
        <div class="flex items-center gap-4 flex-1">
          <div class="w-12 h-12 rounded-xl bg-[#fc0] flex items-center justify-center shrink-0 text-[#0075c3]">
            <i class="pi pi-heart-fill text-2xl text-white"></i>
          </div>
          <p class="text-base sm:text-lg font-bold text-[#1d1d1b]">
            ¿Tu empresa genera materiales reciclables? Conviértelos en inclusión
            social.
          </p>
        </div>
        <NuxtLink :to="localePath('/contacto')" class="shrink-0 w-full md:w-auto">
          <Button label="Contáctanos ahora" icon="pi pi-arrow-right" iconPos="right"
            class="!w-full md:!w-auto !rounded-full !bg-[#fc0] !border-none !text-[#0075c3] font-bold !px-6 !py-3 hover:!bg-[#e6b800] transition-all shadow-md" />
        </NuxtLink>
      </div>
    </section>

    <!-- 5. SECTION: CTA Blue Banner ("Cada kilo de material reciclado...") -->
    <section aria-labelledby="cta-reciclaje-title"
      class="bg-[#0075c3] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full text-white">
      <div data-scroll data-scroll-class="is-inview"
        class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 reveal-scale">
        <h2 id="cta-reciclaje-title" class="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-relaxed">
          Cada kilo de material reciclado en Chihuahua se transforma directamente en
          terapias, educación y autonomía para una persona con síndrome de Down.
        </h2>

        <NuxtLink :to="localePath('/contacto')" class="w-full sm:w-auto">
          <Button label="Contáctanos ahora" icon="pi pi-arrow-right" iconPos="right"
            class="!w-full sm:!w-auto !rounded-full !bg-[#fc0] !border-none !text-[#0075c3] font-bold !px-8 !py-4 hover:!bg-[#e6b800] transition-all shadow-md" />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
