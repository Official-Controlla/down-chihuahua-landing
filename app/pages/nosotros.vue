<script lang="ts" setup>
import Button from "primevue/button";

useSeoMeta({
  title: "Sobre Nosotros | Instituto Down de Chihuahua A.C.",
  description: "Desde 1984 en Chihuahua, damos atención integral a personas con síndrome de Down de todas las edades. Conoce nuestra historia, especialistas, instalaciones y misión.",
  keywords: "Nosotros Instituto Down Chihuahua, historia Instituto Down, misión visión síndrome de down chihuahua, especialistas síndrome de down, instalaciones instituto down",
  ogTitle: "Sobre Nosotros | Instituto Down de Chihuahua A.C.",
  ogDescription: "40 Años construyendo caminos de inclusión. Conoce la historia, equipo e instalaciones del Instituto Down de Chihuahua A.C.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Sobre Nosotros | Instituto Down de Chihuahua A.C.",
    description: "Nuestra misión es hacer posible una vida autónoma y plena para las personas con síndrome de Down en Chihuahua.",
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
    <!-- HERO SECTION: Quiénes Somos -->
    <section aria-labelledby="hero-nosotros-title"
      class="bg-[#fff5e0] px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <!-- Left Content -->
        <div class="flex flex-col items-start gap-6 lg:w-1/2">
          <div
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#d9b421] shadow-xs">
            <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0071bc]">
              Quiénes Somos
            </span>
          </div>

          <h1 id="hero-nosotros-title"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#0071bc] leading-tight">
            <span class="font-bold">Nuestra misión es hacer posible una vida autónoma y </span>
            <span class="font-black italic">plena.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed max-w-2xl">
            Desde 1984 en la ciudad de Chihuahua, damos atención integral a personas con síndrome de Down de todas las
            edades. Impulsamos al máximo el desarrollo de sus capacidades para asegurar su plena inclusión en el ámbito
            escolar, laboral y social.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <NuxtLink :to="localePath('/contacto')">
              <Button label="Agenda una visita" icon="pi pi-arrow-right" iconPos="right"
                class="!rounded-full !bg-[#d9b421] !border-none !text-[#0071bc] font-bold !px-6 !py-3 hover:!bg-[#c4a21d] transition-all shadow-md" />
            </NuxtLink>
            <a href="https://www.paypal.com/donate/?hosted_button_id=SBY6NYQWH6CDJ" target="_blank" rel="noopener noreferrer">
              <Button label="Donar ahora" icon="pi pi-heart" iconPos="right"
                class="!rounded-full !bg-transparent !border-2 !border-[#0071bc] !text-[#0071bc] font-bold !px-6 !py-3 hover:!bg-[#0071bc]/10 transition-all" />
            </a>
          </div>
        </div>

        <!-- Right Visual Container -->
        <div class="flex justify-center items-center lg:w-1/2 w-full">
          <div class="relative w-full max-w-[440px] flex justify-center py-4">
            <!-- Main Arched Image Frame -->
            <div
              class="w-full max-w-[380px] sm:max-w-[420px] h-[400px] sm:h-[500px] overflow-hidden rounded-tl-[180px] sm:rounded-tl-[210px] rounded-tr-[180px] sm:rounded-tr-[210px] rounded-bl-3xl rounded-br-3xl bg-[#f4f6f8] border border-[#9a9a97] shadow-xl relative">
              <img src="@/assets/images/nosotros-hero.png" alt="Misión del Instituto Down de Chihuahua"
                class="w-full h-full object-cover" />
            </div>

            <!-- Floating Badge Overlay -->
            <div
              class="absolute left-2 sm:left-4 bottom-6 sm:bottom-10 w-[170px] sm:w-[190px] gap-2 p-4 sm:p-5 rounded-[20px] bg-white z-10"
              style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.1);">
              <span class="block text-4xl sm:text-[56px] font-bold text-[#0071bc] leading-none">
                40
              </span>
              <span class="block text-xs sm:text-[15px] font-bold text-[#0071bc] leading-snug mt-1">
                Años construyendo caminos de inclusión
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

    <!-- SECTION: Nuestra Historia / Trayectoria -->
    <section aria-labelledby="historia-title" class="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div class="flex flex-col items-center text-center gap-4 max-w-3xl">
          <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0071bc]">
            Nuestra Trayectoria
          </span>
          <h2 id="historia-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0071bc]">
            Nuestra Historia
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
            El Instituto Down de Chihuahua nació en 1984, cuando un grupo de estudiantes de Psicología decidió crear una
            alternativa real de educación e integración para niñas y niños con síndrome de Down y apoyo para sus
            familias. En 1996 conseguimos instalaciones propias, y en 1998 recibimos el Premio Chihuahua de Mejoramiento
            hacia la Calidad y el reconocimiento de los Servicios Educativos del Estado de Chihuahua (SEECH).
          </p>
        </div>

        <!-- Timeline -->
        <div class="w-full max-w-5xl flex flex-col items-center gap-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 w-full">
            <!-- Event 1: 1984 -->
            <div class="flex flex-col items-center text-center gap-4 relative">
              <div
                class="w-16 h-16 rounded-full bg-[#0071bc] text-white flex items-center justify-center text-lg font-bold shadow-md shrink-0">
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
            <div class="flex flex-col items-center text-center gap-4 relative">
              <div
                class="w-16 h-16 rounded-full bg-[#d9b421] text-white flex items-center justify-center text-lg font-bold shadow-md shrink-0">
                1996
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-bold text-[#1d1d1b]">Casa Propia</h3>
                <p class="text-sm text-[#4a4a48]">
                  Logramos consolidar e inaugurar nuestras instalaciones propias actuales.
                </p>
              </div>
            </div>

            <!-- Event 3: 1998 -->
            <div class="flex flex-col items-center text-center gap-4 relative">
              <div
                class="w-16 h-16 rounded-full bg-[#0071bc] text-white flex items-center justify-center text-lg font-bold shadow-md shrink-0">
                1998
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-bold text-[#1d1d1b]">Premio Calidad</h3>
                <p class="text-sm text-[#4a4a48]">
                  Reconocimiento SEECH y Premio Chihuahua de Mejoramiento de la Calidad.
                </p>
              </div>
            </div>

            <!-- Event 4: Hoy -->
            <div class="flex flex-col items-center text-center gap-4 relative">
              <div
                class="w-16 h-16 rounded-full bg-[#d9b421] text-white flex items-center justify-center text-lg font-bold shadow-md shrink-0">
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
            Fuente: sitio oficial del Instituto Down de Chihuahua y Junta de Asistencia Social Privada del Estado de
            Chihuahua.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION: Certificaciones y Reconocimientos (Transparencia) -->
    <section aria-labelledby="certificaciones-title" class="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div class="flex flex-col items-center text-center gap-4 max-w-3xl">
          <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0071bc]">
            Transparencia y Respaldo
          </span>
          <h2 id="certificaciones-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1d1d1b]">
            Certificaciones y Reconocimientos
          </h2>
        </div>

        <!-- 2 Grid Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          <!-- Card 1: Reconocimiento SEECH -->
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border border-[#eaecef]">
            <div class="w-16 h-16 rounded-2xl bg-[#0071bc]/10 flex items-center justify-center shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8">
                <path
                  d="M15.5 3.20593C20.1388 3.20593 23.7498 6.63763 23.75 10.6942C23.75 13.1733 22.418 15.4005 20.3135 16.7762L19.751 17.1434L19.8789 17.8036L22.0898 29.2235L16.9961 25.7147L16.9941 25.7137L16.8262 25.6073C16.4256 25.3762 15.9679 25.2567 15.5059 25.2567C14.9778 25.2567 14.4557 25.4134 14.0176 25.7137H14.0166L8.91211 29.2225L11.1211 17.8036L11.249 17.1444L10.6865 16.7762C8.58191 15.4005 7.25 13.1734 7.25 10.6942C7.25023 6.63763 10.8612 3.20593 15.5 3.20593Z"
                  stroke="#0071BC" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1.5">
              <h3 class="text-xl font-bold text-[#0071bc]">
                Reconocimiento SEECH
              </h3>
              <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                Avalado oficialmente por los Servicios Educativos del Estado de Chihuahua para impartir programas de
                educación especial.
              </p>
            </div>
          </div>

          <!-- Card 2: Donataria Autorizada -->
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-3xl bg-[#f4f6f8] border border-[#eaecef]">
            <div class="w-16 h-16 rounded-2xl bg-[#0071bc]/10 flex items-center justify-center shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8">
                <path
                  d="M14.9697 5.90417C15.0637 5.90417 15.1518 5.92835 15.2256 5.9696L15.2939 6.0155C17.6092 7.94532 20.9566 9.50867 23.7773 9.50867C23.86 9.50876 23.9304 9.54087 23.9756 9.58386C24.0191 9.62542 24.0351 9.6718 24.0352 9.70984V18.12C24.0351 20.8441 23.05 22.842 21.4795 24.3807C19.9787 25.851 17.9094 26.932 15.5557 27.7606L15.0898 27.9208C15.0251 27.9417 14.9532 27.9404 14.8896 27.9178L14.8682 27.91L14.3926 27.7489C12.0341 26.9256 9.96259 25.8473 8.46094 24.3788C6.8894 22.8418 5.90432 20.8442 5.9043 18.12V9.70984C5.9044 9.6718 5.92034 9.62542 5.96387 9.58386C6.00906 9.54086 6.07945 9.50876 6.16211 9.50867C8.98367 9.50867 12.3437 7.9326 14.6455 6.0155C14.7299 5.94674 14.8448 5.90417 14.9697 5.90417Z"
                  stroke="#0071BC" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1.5">
              <h3 class="text-xl font-bold text-[#0071bc]">
                Donataria Autorizada
              </h3>
              <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                Garantiza transparencia absoluta y permite emitir recibos 100% deducibles de impuestos para todas tus
                aportaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: Nuestros Especialistas -->
    <section aria-labelledby="especialistas-title" class="bg-[#fff5e0] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div class="flex flex-col items-center text-center gap-4 max-w-3xl">
          <h2 id="especialistas-title" class="text-3xl sm:text-4xl lg:text-[32px] font-bold text-[#0071bc]">
            Nuestros Especialistas
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
            Detrás de cada avance hay un equipo multidisciplinario altamente especializado en discapacidad intelectual,
            comprometido con guiar a cada familia y alumno hacia el éxito.
          </p>
        </div>

        <!-- 3 Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <!-- Specialist 1 -->
          <div
            class="flex flex-col justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#eaecef] h-full"
            style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.02);">
            <div class="flex flex-col gap-1">
              <h3 class="text-xl font-bold text-[#1d1d1b]">
                Lic. María Elena Chávez
              </h3>
              <span class="text-[13px] font-bold uppercase text-[#d9b421] tracking-wider">
                Dirección General
              </span>
            </div>
            <p class="text-[15px] text-[#4a4a48] leading-relaxed">
              Coordinando esfuerzos de desarrollo integral, vinculación institucional y aseguramiento de la calidad
              terapéutica.
            </p>
          </div>

          <!-- Specialist 2 -->
          <div
            class="flex flex-col justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#eaecef] h-full"
            style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.02);">
            <div class="flex flex-col gap-1">
              <h3 class="text-xl font-bold text-[#1d1d1b]">
                Psic. Andrés Gómez
              </h3>
              <span class="text-[13px] font-bold uppercase text-[#d9b421] tracking-wider">
                Terapia de Aprendizaje
              </span>
            </div>
            <p class="text-[15px] text-[#4a4a48] leading-relaxed">
              Especialista en desarrollo cognitivo temprano, estimulación sensorial y procesos adaptativos de
              aprendizaje.
            </p>
          </div>

          <!-- Specialist 3 -->
          <div
            class="flex flex-col justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#eaecef] h-full"
            style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.02);">
            <div class="flex flex-col gap-1">
              <h3 class="text-xl font-bold text-[#1d1d1b]">
                T.F. Sofía Rodríguez
              </h3>
              <span class="text-[13px] font-bold uppercase text-[#d9b421] tracking-wider">
                Terapia Física
              </span>
            </div>
            <p class="text-[15px] text-[#4a4a48] leading-relaxed">
              Acompañamiento psicomotriz e independencia física, enfocado en el desarrollo de la motricidad gruesa y
              fina.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: Nuestras Instalaciones -->
    <section aria-labelledby="instalaciones-title" class="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div class="flex flex-col items-center text-center gap-4 max-w-3xl">
          <h2 id="instalaciones-title" class="text-3xl sm:text-4xl lg:text-[32px] font-bold text-[#0071bc]">
            Nuestras Instalaciones
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
            Contamos con espacios propios diseñados específicamente para el desarrollo psicomotor, cognitivo y social de
            nuestros alumnos.
          </p>
        </div>

        <!-- 4 Grid Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <!-- Facility 1 -->
          <div
            class="flex flex-col rounded-3xl bg-white border border-[#f4f6f8] overflow-hidden shadow-xs hover:shadow-md transition-all"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.03);">
            <img src="@/assets/images/card-2.png" alt="Espacios de estimulación temprana"
              class="w-full h-[220px] object-cover bg-[#f4f6f8]" />
            <div class="p-6">
              <h3 class="text-base font-bold text-[#0071bc]">
                Espacios de estimulación temprana
              </h3>
            </div>
          </div>

          <!-- Facility 2 -->
          <div
            class="flex flex-col rounded-3xl bg-white border border-[#f4f6f8] overflow-hidden shadow-xs hover:shadow-md transition-all"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.03);">
            <img src="@/assets/images/aulas.png" alt="Aulas de aprendizaje"
              class="w-full h-[220px] object-cover bg-[#f4f6f8]" />
            <div class="p-6">
              <h3 class="text-base font-bold text-[#0071bc]">
                Aulas de aprendizaje
              </h3>
            </div>
          </div>

          <!-- Facility 3 -->
          <div
            class="flex flex-col rounded-3xl bg-white border border-[#f4f6f8] overflow-hidden shadow-xs hover:shadow-md transition-all"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.03);">
            <img src="@/assets/images/area.png" alt="Áreas de trabajo grupal"
              class="w-full h-[220px] object-cover bg-[#f4f6f8]" />
            <div class="p-6">
              <h3 class="text-base font-bold text-[#0071bc]">
                Áreas de trabajo grupal
              </h3>
            </div>
          </div>

          <!-- Facility 4 -->
          <div
            class="flex flex-col rounded-3xl bg-white border border-[#f4f6f8] overflow-hidden shadow-xs hover:shadow-md transition-all"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.03);">
            <img src="@/assets/images/reciclaje-2.png" alt="Centro de acopio de reciclaje"
              class="w-full h-[220px] object-cover bg-[#f4f6f8]" />
            <div class="p-6">
              <h3 class="text-base font-bold text-[#0071bc]">
                Centro de acopio de reciclaje
              </h3>
            </div>
          </div>
        </div>

        <!-- Visit CTA -->
        <div class="flex flex-col items-center text-center gap-6 pt-4 max-w-2xl">
          <p class="text-xl sm:text-2xl font-bold text-[#1d1d1b]">
            ¿Te gustaría recorrer nuestros espacios de cerca?
          </p>
          <NuxtLink :to="localePath('/contacto')">
            <Button label="Agenda una visita" icon="pi pi-arrow-right" iconPos="right"
              class="!rounded-full !bg-[#d9b421] !border-none !text-[#0071bc] font-bold !px-8 !py-3.5 hover:!bg-[#c4a21d] transition-all shadow-md" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- SECTION: Blue CTA Banner -->
    <section aria-labelledby="cta-blue-nosotros-title" class="bg-[#0071bc] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 id="cta-blue-nosotros-title"
          class="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-relaxed">
          Cada persona con síndrome de Down tiene una vida por delante llena de posibilidades. Ayúdanos a que nadie la
          recorra solo.
        </h2>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <a href="https://www.paypal.com/donate/?hosted_button_id=SBY6NYQWH6CDJ" target="_blank" rel="noopener noreferrer">
            <Button label="Donar ahora" icon="pi pi-heart" iconPos="right"
              class="!rounded-full !bg-[#d9b421] !border-none !text-[#0071bc] font-bold !px-8 !py-4 hover:!bg-[#c4a21d] transition-all shadow-md" />
          </a>
          <NuxtLink :to="localePath('/contacto')">
            <Button label="Ser voluntario" icon="pi pi-user-plus" iconPos="right"
              class="!rounded-full !bg-transparent !border-2 !border-white !text-white font-bold !px-8 !py-4 hover:!bg-white/10 transition-all" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
