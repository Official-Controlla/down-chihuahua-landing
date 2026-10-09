<script lang="ts" setup>
import Button from "primevue/button";

// Imports de Imágenes V2
import heroNosotros from "@/assets/images/v2/hero_nosotros.png";
import cardTerapias from "@/assets/images/v2/terapia.png";
import clases from "@/assets/images/v2/clases.png";
import aulas from "@/assets/images/v2/aulas.png";
import reciclaje2 from "@/assets/images/v2/reci.jpg";

// Imports de Archivos PDF para los Informes Anuales
import pdf2022 from "@/assets/PDF/INFORME ANUAL 2022.pdf";
import pdf2023 from "@/assets/PDF/INFORME IDCHAC 2023.pdf";
import pdf2024 from "@/assets/PDF/INFORME IDCHAC 2024.pdf";
import pdf2025 from "@/assets/PDF/Informe Anual 2025.pdf";

useSeoMeta({
  title: "Quiénes Somos | Instituto Down de Chihuahua A.C.",
  description:
    "Desde 1984 en la ciudad de Chihuahua, damos atención integral a personas con síndrome de Down de todas las edades. Conoce nuestra historia, certificaciones, instalaciones e informes anuales.",
  keywords:
    "Quiénes Somos Instituto Down Chihuahua, historia Instituto Down, misión visión síndrome de down chihuahua, certificaciones educación especial, instalaciones instituto down, informes anuales",
  ogTitle: "Quiénes Somos | Instituto Down de Chihuahua A.C.",
  ogDescription:
    "Nuestra misión es hacer posible una vida autónoma y plena. Conoce la historia, certificaciones e instalaciones del Instituto Down de Chihuahua A.C.",
  ogImage: heroNosotros,
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Quiénes Somos | Instituto Down de Chihuahua A.C.",
    description:
      "Nuestra misión es hacer posible una vida autónoma y plena para las personas con síndrome de Down en Chihuahua.",
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
  heroBg: heroNosotros,
  terapias: cardTerapias,
  aulas: clases,
  grupal: aulas,
  acopio: reciclaje2,
};
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden">
    <!-- 1. HERO SECTION: Quiénes Somos -->
    <section aria-labelledby="hero-nosotros-title"
      class="relative px-4 sm:px-6 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-28 overflow-hidden bg-[#fc0] min-h-[620px] flex items-center justify-center text-center">
      <!-- Capa de Imagen de Fondo Hero con Transparencia -->
      <div class="absolute inset-0 z-0">
        <img :src="images.heroBg" alt="Misión del Instituto Down de Chihuahua"
          class="w-full h-full object-center opacity-25 mix-blend-multiply" />
        <div class="absolute inset-0 bg-[#fc0]/90 mix-blend-multiply"></div>
      </div>

      <!-- Contenido Hero -->
      <div class="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-9 text-center">
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center gap-6 max-w-4xl reveal-fade-up">
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 md:px-[18px] py-1.5 rounded-full border-[1.5px] border-[#0075c3] bg-white/40 backdrop-blur-xs reveal-fade-up stagger-1 badge-pulse">
            <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0075c3]">
              Quiénes Somos
            </span>
          </div>

          <h1 id="hero-nosotros-title"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0075c3] leading-tight tracking-tight reveal-fade-up stagger-2">
            Nuestra misión es hacer posible una vida autónoma y
            <span class="font-black italic">plena.</span>
          </h1>

          <p
            class="text-base sm:text-lg md:text-xl text-[#4a4a48] leading-relaxed font-normal max-w-4xl reveal-fade-up stagger-3">
            Desde 1984 en la ciudad de Chihuahua, damos atención integral a personas
            con síndrome de Down de todas las edades. Impulsamos al máximo el desarrollo
            de sus capacidades para asegurar su plena inclusión en el ámbito escolar,
            laboral y social.
          </p>

          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto pt-2 reveal-fade-up stagger-4">
            <NuxtLink :to="localePath('/contacto')" class="w-full sm:w-auto">
              <Button label="Agenda una visita" icon="pi pi-arrow-right" iconPos="right"
                class="!w-full sm:!w-auto !rounded-full !bg-[#0075c3] !border-none !text-white font-bold !px-7 !py-3.5 hover:!bg-[#005a96] transition-all shadow-md hover-lift" />
            </NuxtLink>
            <a href="https://www.paypal.com/donate/?hosted_button_id=SBY6NYQWH6CDJ" target="_blank"
              rel="noopener noreferrer" class="w-full sm:w-auto">
              <Button label="Donar ahora" icon="pi pi-heart" iconPos="right"
                class="!w-full sm:!w-auto !rounded-full !bg-transparent !border-2 !border-[#0075c3] !text-[#0075c3] font-bold !px-7 !py-3.5 hover:!bg-[#0075c3]/10 transition-all hover-lift" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. SECTION: Nuestra Trayectoria / Nuestra Historia -->
    <section aria-labelledby="historia-title" class="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-4 max-w-3xl reveal-fade-up">
          <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0075c3]">
            Nuestra Trayectoria
          </span>
          <h2 id="historia-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0075c3]">
            Nuestra Historia
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
            El Instituto Down de Chihuahua nació en 1984, cuando un grupo de
            estudiantes de Psicología decidió crear una alternativa real de educación
            e integración para niñas y niños con síndrome de Down y apoyo para sus
            familias. En 1996 conseguimos instalaciones propias, y en 1998 recibimos
            el Premio Chihuahua de Mejoramiento hacia la Calidad y el reconocimiento
            de los Servicios Educativos del Estado de Chihuahua (SEECH).
          </p>
        </div>

        <!-- Timeline Container -->
        <div class="w-full max-w-5xl flex flex-col items-center gap-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 w-full relative">
            <!-- Event 1: 1984 -->
            <div data-scroll data-scroll-class="is-inview"
              class="flex flex-col items-center text-center gap-4 relative reveal-fade-up stagger-1">
              <div
                class="w-16 h-16 rounded-full bg-[#0075c3] text-white flex items-center justify-center text-lg font-bold shadow-md shrink-0 z-10">
                1984
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-bold text-[#1d1d1b]">Fundación</h3>
                <p class="text-sm text-[#4a4a48]">
                  Creación por un grupo de estudiantes de Psicología en Chihuahua.
                </p>
              </div>
            </div>

            <!-- Event 2: 1996 -->
            <div data-scroll data-scroll-class="is-inview"
              class="flex flex-col items-center text-center gap-4 relative reveal-fade-up stagger-2">
              <div
                class="w-16 h-16 rounded-full bg-[#fc0] text-[#1d1d1b] flex items-center justify-center text-lg font-bold shadow-md shrink-0 z-10">
                1996
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-bold text-[#1d1d1b]">Casa Propia</h3>
                <p class="text-sm text-[#4a4a48]">
                  Logramos consolidar e inaugurar nuestras instalaciones propias
                  actuales.
                </p>
              </div>
            </div>

            <!-- Event 3: 1998 -->
            <div data-scroll data-scroll-class="is-inview"
              class="flex flex-col items-center text-center gap-4 relative reveal-fade-up stagger-3">
              <div
                class="w-16 h-16 rounded-full bg-[#0075c3] text-white flex items-center justify-center text-lg font-bold shadow-md shrink-0 z-10">
                1998
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-bold text-[#1d1d1b]">Premio Calidad</h3>
                <p class="text-sm text-[#4a4a48]">
                  Reconocimiento SEECH y Premio Chihuahua de Mejoramiento de la
                  Calidad.
                </p>
              </div>
            </div>

            <!-- Event 4: Hoy -->
            <div data-scroll data-scroll-class="is-inview"
              class="flex flex-col items-center text-center gap-4 relative reveal-fade-up stagger-4">
              <div
                class="w-16 h-16 rounded-full bg-[#fc0] text-[#1d1d1b] flex items-center justify-center text-lg font-bold shadow-md shrink-0 z-10">
                Hoy
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-bold text-[#1d1d1b]">40 Años</h3>
                <p class="text-sm text-[#4a4a48]">
                  Continuamos impulsando vidas con programas especializados y amplios.
                </p>
              </div>
            </div>
          </div>

          <p class="text-xs italic text-[#9a9a97] text-center mt-4">
            Fuente: sitio oficial del Instituto Down de Chihuahua y Junta de
            Asistencia Social Privada del Estado de Chihuahua.
          </p>
        </div>
      </div>
    </section>

    <!-- 3. SECTION: Certificaciones y Reconocimientos (Transparencia y Respaldo) -->
    <section aria-labelledby="certificaciones-title"
      class="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full border-t border-slate-100">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-4 max-w-3xl reveal-fade-up">
          <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0075c3]">
            Transparencia y Respaldo
          </span>
          <h2 id="certificaciones-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1d1d1b]">
            Certificaciones y Reconocimientos
          </h2>
        </div>

        <!-- 2 Grid Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          <!-- Card 1: Reconocimiento SEECH -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border border-[#eaecef] reveal-fade-up stagger-1 hover:shadow-md transition-all">
            <div class="w-16 h-16 rounded-2xl bg-[#0075c3]/10 text-[#0075c3] flex items-center justify-center shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8">
                <path
                  d="M15.5 3.20593C20.1388 3.20593 23.7498 6.63763 23.75 10.6942C23.75 13.1733 22.418 15.4005 20.3135 16.7762L19.751 17.1434L19.8789 17.8036L22.0898 29.2235L16.9961 25.7147L16.9941 25.7137L16.8262 25.6073C16.4256 25.3762 15.9679 25.2567 15.5059 25.2567C14.9778 25.2567 14.4557 25.4134 14.0176 25.7137H14.0166L8.91211 29.2225L11.1211 17.8036L11.249 17.1444L10.6865 16.7762C8.58191 15.4005 7.25 13.1734 7.25 10.6942C7.25023 6.63763 10.8612 3.20593 15.5 3.20593Z"
                  stroke="#0075C3" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1.5">
              <h3 class="text-xl font-bold text-[#0075c3]">
                Reconocimiento SEECH
              </h3>
              <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                Avalado oficialmente por los Servicios Educativos del Estado de
                Chihuahua para impartir programas de educación especial.
              </p>
            </div>
          </div>

          <!-- Card 2: Donataria Autorizada -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border border-[#eaecef] reveal-fade-up stagger-2 hover:shadow-md transition-all">
            <div class="w-16 h-16 rounded-2xl bg-[#0075c3]/10 text-[#0075c3] flex items-center justify-center shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8">
                <path
                  d="M14.9697 5.90417C15.0637 5.90417 15.1518 5.92835 15.2256 5.9696L15.2939 6.0155C17.6092 7.94532 20.9566 9.50867 23.7773 9.50867C23.86 9.50876 23.9304 9.54087 23.9756 9.58386C24.0191 9.62542 24.0351 9.6718 24.0352 9.70984V18.12C24.0351 20.8441 23.05 22.842 21.4795 24.3807C19.9787 25.851 17.9094 26.932 15.5557 27.7606L15.0898 27.9208C15.0251 27.9417 14.9532 27.9404 14.8896 27.9178L14.8682 27.91L14.3926 27.7489C12.0341 26.9256 9.96259 25.8473 8.46094 24.3788C6.8894 22.8418 5.90432 20.8442 5.9043 18.12V9.70984C5.9044 9.6718 5.92034 9.62542 5.96387 9.58386C6.00906 9.54086 6.07945 9.50876 6.16211 9.50867C8.98367 9.50867 12.3437 7.9326 14.6455 6.0155C14.7299 5.94674 14.8448 5.90417 14.9697 5.90417Z"
                  stroke="#0075C3" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1.5">
              <h3 class="text-xl font-bold text-[#0075c3]">
                Donataria Autorizada
              </h3>
              <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                Garantiza transparencia absoluta y permite emitir recibos 100%
                deducibles de impuestos para todas tus aportaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. SECTION: Nuestras Instalaciones -->
    <section aria-labelledby="instalaciones-title"
      class="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full border-t border-slate-100">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-4 max-w-3xl reveal-fade-up">
          <h2 id="instalaciones-title" class="text-3xl sm:text-4xl lg:text-[32px] font-bold text-[#0075c3]">
            Nuestras Instalaciones
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
            Contamos con espacios propios diseñados específicamente para el
            desarrollo psicomotor, cognitivo y social de nuestros alumnos.
          </p>
        </div>

        <!-- 4 Grid Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <!-- Facility 1 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col rounded-3xl bg-white border border-[#f4f6f8] overflow-hidden shadow-xs hover:shadow-md transition-all reveal-fade-up stagger-1 group"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.03);">
            <div class="w-full h-[220px] overflow-hidden bg-[#f4f6f8]">
              <img :src="images.terapias" alt="Espacios de Terapia Física"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div class="p-6">
              <h3 class="text-base font-bold text-[#0075c3]">
                Espacios de Terapia Física
              </h3>
            </div>
          </div>

          <!-- Facility 2 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col rounded-3xl bg-white border border-[#f4f6f8] overflow-hidden shadow-xs hover:shadow-md transition-all reveal-fade-up stagger-2 group"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.03);">
            <div class="w-full h-[220px] overflow-hidden bg-[#f4f6f8]">
              <img :src="images.aulas" alt="Aulas de aprendizaje"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div class="p-6">
              <h3 class="text-base font-bold text-[#0075c3]">
                Aulas de aprendizaje
              </h3>
            </div>
          </div>

          <!-- Facility 3 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col rounded-3xl bg-white border border-[#f4f6f8] overflow-hidden shadow-xs hover:shadow-md transition-all reveal-fade-up stagger-3 group"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.03);">
            <div class="w-full h-[220px] overflow-hidden bg-[#f4f6f8]">
              <img :src="images.grupal" alt="Áreas de trabajo grupal"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div class="p-6">
              <h3 class="text-base font-bold text-[#0075c3]">
                Áreas de trabajo grupal
              </h3>
            </div>
          </div>

          <!-- Facility 4 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col rounded-3xl bg-white border border-[#f4f6f8] overflow-hidden shadow-xs hover:shadow-md transition-all reveal-fade-up stagger-4 group"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.03);">
            <div class="w-full h-[220px] overflow-hidden bg-[#f4f6f8]">
              <img :src="images.acopio" alt="Centro de acopio de reciclaje"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div class="p-6">
              <h3 class="text-base font-bold text-[#0075c3]">
                Centro de acopio de reciclaje
              </h3>
            </div>
          </div>
        </div>

        <!-- Visit CTA -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-6 pt-4 max-w-2xl reveal-fade-up stagger-4">
          <h3 class="text-xl sm:text-2xl font-bold text-[#1d1d1b]">
            ¿Te gustaría recorrer nuestros espacios de cerca?
          </h3>
          <NuxtLink :to="localePath('/contacto')">
            <Button label="Agenda una visita" icon="pi pi-arrow-right" iconPos="right"
              class="!rounded-full !bg-[#fc0] !border-none !text-[#0075c3] font-bold !px-8 !py-3.5 hover:!bg-[#e6b800] transition-all shadow-md" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 5. SECTION: Blue CTA Banner -->
    <section aria-labelledby="cta-blue-nosotros-title"
      class="bg-[#0075c3] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full text-white">
      <div data-scroll data-scroll-class="is-inview"
        class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 reveal-scale">
        <h2 id="cta-blue-nosotros-title"
          class="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-relaxed">
          Cada persona con síndrome de Down tiene una vida por delante llena de
          posibilidades. Ayúdanos a que nadie la recorra solo.
        </h2>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <a href="https://www.paypal.com/donate/?hosted_button_id=SBY6NYQWH6CDJ" target="_blank"
            rel="noopener noreferrer" class="w-full sm:w-auto">
            <Button label="Donar ahora" icon="pi pi-heart" iconPos="right"
              class="!w-full sm:!w-auto !rounded-full !bg-[#fc0] !border-none !text-[#0075c3] font-bold !px-8 !py-4 hover:!bg-[#e6b800] transition-all shadow-md" />
          </a>
          <NuxtLink :to="localePath('/contacto')" class="w-full sm:w-auto">
            <Button label="Ser voluntario" icon="pi pi-user-plus" iconPos="right"
              class="!w-full sm:!w-auto !rounded-full !bg-transparent !border-2 !border-white !text-white font-bold !px-8 !py-4 hover:!bg-white/10 transition-all" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 6. SECTION: Informe Anual -->
    <section aria-labelledby="informe-anual-title" class="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-4 max-w-3xl reveal-fade-up">
          <h2 id="informe-anual-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0075c3]">
            Informe Anual
          </h2>
        </div>

        <!-- 4 Annual Reports Grid Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <!-- 2022 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col justify-between p-7 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all reveal-fade-up stagger-1 border border-slate-100"
            style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.02);">
            <h3 class="text-xl sm:text-2xl font-bold text-[#0075c3] mb-4">
              Informe Anual 2022
            </h3>
            <a :href="pdf2022" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-bold text-[#0075c3] hover:underline">
              <span>Descargar</span>
              <i class="pi pi-download text-base"></i>
            </a>
          </div>

          <!-- 2023 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col justify-between p-7 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all reveal-fade-up stagger-2 border border-slate-100"
            style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.02);">
            <h3 class="text-xl sm:text-2xl font-bold text-[#0075c3] mb-4">
              Informe Anual 2023
            </h3>
            <a :href="pdf2023" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-bold text-[#0075c3] hover:underline">
              <span>Descargar</span>
              <i class="pi pi-download text-base"></i>
            </a>
          </div>

          <!-- 2024 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col justify-between p-7 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all reveal-fade-up stagger-3 border border-slate-100"
            style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.02);">
            <h3 class="text-xl sm:text-2xl font-bold text-[#0075c3] mb-4">
              Informe Anual 2024
            </h3>
            <a :href="pdf2024" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-bold text-[#0075c3] hover:underline">
              <span>Descargar</span>
              <i class="pi pi-download text-base"></i>
            </a>
          </div>

          <!-- 2025 -->
          <div data-scroll data-scroll-class="is-inview"
            class="flex flex-col justify-between p-7 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all reveal-fade-up stagger-4 border border-slate-100"
            style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.02);">
            <h3 class="text-xl sm:text-2xl font-bold text-[#0075c3] mb-4">
              Informe Anual 2025
            </h3>
            <a :href="pdf2025" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-bold text-[#0075c3] hover:underline">
              <span>Descargar</span>
              <i class="pi pi-download text-base"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
