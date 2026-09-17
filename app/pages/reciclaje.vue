<script lang="ts" setup>
import Button from "primevue/button";

useSeoMeta({
  title: "Centro de Acopio y Reciclaje con Causa | Instituto Down de Chihuahua A.C.",
  description: "Doble impacto en Chihuahua: recicla cartón, PET, aluminio, vidrio y electrónicos para cuidar el medio ambiente y financiar becas y terapias para personas con síndrome de Down.",
  keywords: "Reciclaje Chihuahua, Centro de acopio Chihuahua, Reciclar cartón PET aluminio Chihuahua, Donativo reciclaje Instituto Down, Sostenibilidad con causa Chihuahua",
  ogTitle: "Centro de Acopio y Reciclaje con Causa | Instituto Down de Chihuahua A.C.",
  ogDescription: "Tu acción diaria tiene un doble impacto en Chihuahua: recicla y financia terapias y becas para personas con síndrome de Down.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Centro de Acopio y Reciclaje con Causa | Instituto Down de Chihuahua A.C.",
    description: "Programa de acopio y reciclaje sustentable con impacto social y ambiental en Chihuahua.",
  }),
  defineOrganization({
    name: "Instituto Down de Chihuahua A.C.",
    description: "Atención integral a personas con síndrome de Down desde 1984.",
  }),
]);

const localePath = useLocalePath();
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden">
    <!-- HERO SECTION: Sostenibilidad con Causa -->
    <section aria-labelledby="hero-reciclaje-title"
      class="bg-[#fff5e0] px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <!-- Left Content -->
        <div class="flex flex-col items-start gap-6 lg:w-1/2">
          <div
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#d9b421] shadow-xs">
            <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0071bc]">
              Sostenibilidad con Causa
            </span>
          </div>

          <h1 id="hero-reciclaje-title"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#0071bc] leading-tight">
            <span class="font-bold">Centro de Acopio y </span>
            <span class="font-black italic">Reciclaje</span>
          </h1>

          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed max-w-2xl">
            Somos pioneros del reciclaje en Chihuahua. Operamos un centro de acopio que recibe cartón, aluminio y otros
            materiales con un doble impacto: cuidas el medio ambiente y financias el desarrollo de jóvenes con síndrome
            de Down.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <NuxtLink :to="localePath('/contacto')" class="w-full sm:w-auto">
              <Button label="Programa tu recolección" icon="pi pi-arrow-right" iconPos="right"
                class="!w-full sm:!w-auto !rounded-full !bg-[#d9b421] !border-none !text-[#0071bc] font-bold !px-6 !py-3.5 hover:!bg-[#c4a21d] transition-all shadow-sm" />
            </NuxtLink>

            <a href="https://maps.google.com/?q=Av.+Mirador+4307,+Campestre+Residencial,+Chihuahua,+Chih."
              target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
              <Button label="Ubicación del centro" icon="pi pi-map-marker" iconPos="right"
                class="!w-full sm:!w-auto !rounded-full !bg-transparent !border-2 !border-[#0071bc] !text-[#0071bc] font-bold !px-6 !py-3.5 hover:!bg-blue-50 transition-all" />
            </a>
          </div>
        </div>

        <!-- Right Visual Container -->
        <div class="flex justify-center items-center lg:w-1/2 w-full">
          <div class="relative w-full max-w-[440px] flex justify-center py-4">
            <!-- Main Arched Image Frame -->
            <div
              class="w-full max-w-[380px] sm:max-w-[420px] h-[400px] sm:h-[500px] overflow-hidden rounded-tl-[180px] sm:rounded-tl-[210px] rounded-tr-[180px] sm:rounded-tr-[210px] rounded-bl-3xl rounded-br-3xl bg-white border border-[#e4e6e8] shadow-xl relative">
              <img src="@/assets/images/hero-reciclaje.png"
                alt="Centro de Acopio y Reciclaje del Instituto Down de Chihuahua" class="w-full h-full object-cover" />
            </div>

            <!-- Floating Badge Overlay (100% de los fondos) -->
            <div
              class="absolute left-2 sm:left-4 bottom-6 sm:bottom-10 w-[180px] sm:w-[200px] gap-2 p-4 sm:p-6 rounded-[20px] bg-white z-10"
              style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.1);">
              <span class="block text-3xl sm:text-[40px] font-bold text-[#0071bc] leading-none mb-1">
                100%
              </span>
              <span class="block text-xs sm:text-sm font-bold text-[#0071bc] leading-tight">
                De los fondos sostienen becas y terapias
              </span>
            </div>

            <!-- Decorative Arc SVG -->
            <div
              class="absolute -right-2 sm:-right-4 top-2 w-[100px] sm:w-[140px] h-[50px] sm:h-[70px] overflow-hidden">
              <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full">
                <circle cx="70" r="70" fill="#D9B421"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: El doble valor de reciclar / Doble Impacto -->
    <section aria-labelledby="doble-impacto-title"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 w-full flex flex-col gap-12 md:gap-16">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto">
        <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0071bc]">
          El doble valor de reciclar
        </span>
        <h2 id="doble-impacto-title" class="text-3xl sm:text-4xl lg:text-[44px] text-[#1d1d1b]">
          <span class="font-bold">Tu acción diaria tiene un </span>
          <span class="font-black italic">Doble Impacto</span>
        </h2>
      </div>

      <!-- 2 Impact Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <!-- Impact Card 1: Ecológico -->
        <article class="flex flex-col justify-between gap-6 p-8 sm:p-10 rounded-3xl bg-[#34a853] text-white shadow-xl">
          <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6">
              <path
                d="M2 21C2 17.9998 3.8501 15.6397 7.08029 14.9997C9.50042 14.5197 12.0006 12.9996 13.0006 11.9996M11.0002 19.9999C9.2442 20.0052 7.5503 19.3504 6.25449 18.1653C4.95868 16.9801 4.15562 15.3513 4.00458 13.6017C3.85354 11.8522 4.36556 10.1099 5.43908 8.72017C6.5126 7.3305 8.06921 6.39503 9.80018 6.09932C15.5005 4.99927 17.0006 4.47925 19.0007 1.99915C20.0008 3.99923 21.0008 6.17932 21.0008 9.99949C21.0008 15.4997 16.2205 19.9999 11.0002 19.9999Z"
                stroke="#34A853" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-2xl sm:text-[32px] font-bold leading-snug">
              Impacto Ecológico
            </h3>
            <p class="text-base sm:text-lg text-[#eaf7ec] leading-relaxed">
              Evitamos que toneladas de cartón, plástico y aluminio terminen en vertederos locales, reduciendo
              activamente la huella de carbono en la ciudad de Chihuahua.
            </p>
          </div>
        </article>

        <!-- Impact Card 2: Inclusión y Desarrollo -->
        <article class="flex flex-col justify-between gap-6 p-8 sm:p-10 rounded-3xl bg-[#e8734a] text-white shadow-xl">
          <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6">
              <path
                d="M18.0014 21C18.0014 18.8783 17.1585 16.8434 15.6581 15.3431C14.1577 13.8429 12.1226 13 10.0007 13M10.0007 13C7.8788 13 5.84378 13.8429 4.34336 15.3431C2.84293 16.8434 2 18.8783 2 21M10.0007 13C12.7624 13 15.0012 10.7614 15.0012 8C15.0012 5.23858 12.7624 3 10.0007 3C7.23905 3 5.00027 5.23858 5.00027 8C5.00027 10.7614 7.23905 13 10.0007 13ZM22.0016 20.0002C22.0016 16.6302 20.0014 13.5002 18.0012 12.0002C18.6587 11.507 19.1845 10.8593 19.5319 10.1145C19.8794 9.36965 20.0379 8.55066 19.9934 7.73C19.9489 6.90933 19.7028 6.11228 19.2768 5.40939C18.8509 4.70651 18.2582 4.11946 17.5512 3.7002"
                stroke="#E8734A" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-2xl sm:text-[32px] font-bold leading-snug">
              Inclusión y Desarrollo
            </h3>
            <p class="text-base sm:text-lg text-[#fff5e0] leading-relaxed">
              Las ganancias recolectadas financian terapias de estimulación temprana, talleres formativos y programas de
              vida independiente para nuestros alumnos del Instituto.
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- SECTION: ¿Cómo participar? -->
    <section aria-labelledby="participar-title" class="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div class="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto">
          <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#d9b421]">
            ¿Cómo participar?
          </span>
          <h2 id="participar-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0071bc]">
            Hay un camino diseñado para ti
          </h2>
        </div>

        <!-- 2 Participation Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <!-- Card 1: Personas y familias -->
          <div class="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm"
            style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.02);">
            <div class="w-full h-[220px] overflow-hidden bg-[#f4f6f8]">
              <img src="@/assets/images/reciclaje-familias.png" alt="Reciclaje para personas y familias en Chihuahua"
                class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col gap-5 p-6 sm:p-8 flex-1 justify-between">
              <div class="flex flex-col gap-3">
                <h3 class="text-2xl font-bold text-[#0071bc]">
                  Para personas y familias
                </h3>
                <p class="text-base text-[#4a4a48] leading-relaxed">
                  Acopia cartón, botellas y aluminio en casa. Tráelos directamente a nuestro centro de acopio o únete a
                  las campañas de recolección de tu colonia.
                </p>
              </div>
              <NuxtLink :to="localePath('/contacto')"
                class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline pt-2">
                <span>Ubicación del centro de acopio →</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Card 2: Empresas y maquilas -->
          <div class="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm"
            style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.02);">
            <div class="w-full h-[220px] overflow-hidden bg-[#f4f6f8]">
              <img src="@/assets/images/reciclaje-empresas.png"
                alt="Reciclaje corporativo para empresas y maquilas en Chihuahua" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col gap-5 p-6 sm:p-8 flex-1 justify-between">
              <div class="flex flex-col gap-3">
                <h3 class="text-2xl font-bold text-[#0071bc]">
                  Para empresas y maquilas
                </h3>
                <p class="text-base text-[#4a4a48] leading-relaxed">
                  Cumple tus objetivos de Responsabilidad Social y Sostenibilidad de manera certificada. Establecemos
                  convenios de recolección periódica de residuos industriales.
                </p>
              </div>
              <NuxtLink :to="localePath('/contacto')"
                class="inline-flex items-center gap-2 text-[15px] font-bold text-[#0071bc] hover:underline pt-2">
                <span>Quiero convenio corporativo →</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: ¿Qué recibimos? Materiales -->
    <section aria-labelledby="materiales-title"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 w-full flex flex-col gap-12 md:gap-16">
      <!-- Header -->
      <div class="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto">
        <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0071bc]">
          ¿Qué recibimos?
        </span>
        <h2 id="materiales-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1d1d1b]">
          Materiales que puedes traer hoy
        </h2>
      </div>

      <!-- Materials Grid (6 Items) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <!-- PET -->
        <div class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-4 border-[#0071bc]">
          <h3 class="text-xl font-bold text-[#0071bc]">PET</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Botellas de plástico de refresco, agua y jugos limpias.
          </p>
        </div>

        <!-- Cartón -->
        <div class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-4 border-[#d9b421]">
          <h3 class="text-xl font-bold text-[#0071bc]">Cartón</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Cajas corrugadas, empaques limpios y desarmados.
          </p>
        </div>

        <!-- Papel -->
        <div class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-4 border-[#e8734a]">
          <h3 class="text-xl font-bold text-[#0071bc]">Papel</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Hojas, cuadernos, libros y archivos de oficina.
          </p>
        </div>

        <!-- Vidrio -->
        <div class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-4 border-[#34a853]">
          <h3 class="text-xl font-bold text-[#0071bc]">Vidrio</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Botellas y frascos de vidrio (no rotos ni espejos).
          </p>
        </div>

        <!-- Aluminio -->
        <div class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-4 border-[#0071bc]">
          <h3 class="text-xl font-bold text-[#0071bc]">Aluminio</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Latas de bebidas, botes limpios y aplastados.
          </p>
        </div>

        <!-- Electrónicos -->
        <div class="flex flex-col gap-3 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border-l-4 border-[#e8734a]">
          <h3 class="text-xl font-bold text-[#0071bc]">Electrónicos</h3>
          <p class="text-[15px] text-[#4a4a48]">
            Equipos de cómputo, cables y electrodomésticos obsoletos.
          </p>
        </div>
      </div>

      <!-- Corporate Banner Box -->
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 sm:p-8 rounded-3xl bg-white w-full border border-blue-50"
        style="box-shadow: 0px 12px 32px 0 rgba(0,113,188,0.12);">
        <div class="flex items-center gap-4 flex-1">
          <div class="w-12 h-12 rounded-xl bg-[#d9b421] flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6">
              <path
                d="M2.96821 6.38373C2.33762 7.30066 2.00002 8.38728 2 9.50009C2 11.8001 3.50012 13.5001 5.00023 15.0001L10.5087 20.3322C10.6977 20.5438 10.9296 20.7128 11.189 20.8279C11.4484 20.943 11.7293 21.0016 12.0131 20.9998C12.2968 20.9981 12.577 20.9359 12.8349 20.8175C13.0928 20.6991 13.3225 20.5272 13.5089 20.3132L19.0013 15.0001C20.5014 13.5001 22.0015 11.7901 22.0015 9.50009C22.0069 8.38484 21.6724 7.29442 21.0426 6.37396C20.4128 5.45351 19.5176 4.74667 18.4761 4.34753C17.4347 3.94839 16.2963 3.87587 15.2126 4.13964C14.129 4.40341 13.1513 4.99095 12.4098 5.82406C12.3574 5.88007 12.2941 5.92473 12.2237 5.95526C12.1533 5.98579 12.0775 6.00154 12.0008 6.00154C11.9241 6.00154 11.8482 5.98579 11.7778 5.95526C11.7075 5.92473 11.6441 5.88007 11.5917 5.82406C10.8479 4.99633 9.87047 4.41369 8.78853 4.15309C7.7066 3.89248 6.57105 3.96618 5.53188 4.36444C4.49271 4.76271 3.5988 5.4668 2.96821 6.38373Z"
                stroke="white" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </div>
          <p class="text-base sm:text-lg font-bold text-[#1d1d1b]">
            ¿Tu empresa genera materiales reciclables? Conviértelos en inclusión social.
          </p>
        </div>
        <NuxtLink :to="localePath('/contacto')">
          <Button label="Contáctanos ahora" icon="pi pi-arrow-right" iconPos="right"
            class="!rounded-full !bg-[#d9b421] !border-none !text-[#0071bc] font-bold !px-6 !py-3 hover:!bg-[#c4a21d] transition-all shrink-0" />
        </NuxtLink>
      </div>
    </section>

    <!-- SECTION: CTA Blue Banner ("Cada kilo de material reciclado...") -->
    <section aria-labelledby="cta-reciclaje-title" class="bg-[#0071bc] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 id="cta-reciclaje-title" class="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-relaxed">
          Cada kilo de material reciclado en Chihuahua se transforma directamente en terapias, educación y autonomía
          para una persona con síndrome de Down.
        </h2>

        <NuxtLink :to="localePath('/contacto')">
          <Button label="Contáctanos ahora" icon="pi pi-arrow-right" iconPos="right"
            class="!rounded-full !bg-[#d9b421] !border-none !text-[#0071bc] font-bold !px-8 !py-4 hover:!bg-[#c4a21d] transition-all shadow-md" />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
