<script lang="ts" setup>
import Button from "primevue/button";

useSeoMeta({
  title: "Programas de Atención e Inclusión | Instituto Down de Chihuahua A.C.",
  description: "Conoce los programas de vida del Instituto Down de Chihuahua: estimulación temprana, grupos escolarizados, inclusión educativa, autonomía para jóvenes y adultos, y guía de servicios y cuotas.",
  keywords: "Programas Síndrome de Down Chihuahua, Estimulación temprana Chihuahua, Inclusión educativa, Educación especial Chihuahua, Autonomía adultos síndrome de down, Cuotas Instituto Down Chihuahua",
  ogTitle: "Programas de Atención e Inclusión | Instituto Down de Chihuahua A.C.",
  ogDescription: "Acompañamos a la persona con síndrome de Down en cada etapa de su vida con estimulación temprana, escolarización, desarrollo laboral y cuotas accesibles en Chihuahua.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Programas de Atención e Inclusión | Instituto Down de Chihuahua A.C.",
    description: "Programas de vida y desarrollo integral para personas con síndrome de Down en Chihuahua.",
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
    <!-- HERO SECTION: Programas de Vida -->
    <section aria-labelledby="hero-title" class="bg-[#fff5e0] px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <!-- Left Content -->
        <div class="flex flex-col items-start gap-6 lg:w-1/2">
          <div
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#d9b421] shadow-xs">
            <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0071bc]">
              Nuestros Caminos de Apoyo
            </span>
          </div>

          <h1 id="hero-title" class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#0071bc] leading-tight">
            <span class="font-bold">Programas de </span>
            <span class="font-black italic">Vida</span>
          </h1>

          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed max-w-2xl">
            Acompañamos a la persona con síndrome de Down en cada etapa de su vida. Nuestros programas están pensados
            para que, paso a paso, gane autonomía, confianza y las herramientas que necesita para incluirse en la
            escuela, el trabajo y la comunidad.
          </p>
        </div>

        <!-- Right Visual Container -->
        <div class="flex justify-center items-center lg:w-1/2 w-full">
          <div class="relative w-full max-w-[420px]">
            <!-- Main Arched Image Frame -->
            <div
              class="w-full h-[420px] sm:h-[500px] overflow-hidden rounded-tl-[180px] sm:rounded-tl-[210px] rounded-tr-[180px] sm:rounded-tr-[210px] rounded-bl-3xl rounded-br-3xl bg-[#f4f6f8] border border-[#9a9a97] shadow-xl">
              <img src="@/assets/images/programas-hero.png"
                alt="Programas de Vida e Inclusión del Instituto Down de Chihuahua"
                class="w-full h-full object-cover" />
            </div>
            <!-- Decorative Arc SVG -->
            <div
              class="absolute -right-4 sm:-right-8 top-5 w-[100px] sm:w-[140px] h-[50px] sm:h-[70px] overflow-hidden">
              <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full">
                <circle cx="70" r="70" fill="#D9B421"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BANNER: ¿Acabas de recibir la noticia? -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 md:pt-16 pb-6 w-full">
      <FamiliasNuevasCard />
    </section>

    <!-- SECTION: El Camino del Desarrollo (Development Stages) -->
    <section aria-labelledby="camino-desarrollo-title"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 w-full flex flex-col gap-12">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4 text-center">
        <h2 id="camino-desarrollo-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0071bc]">
          El Camino del Desarrollo
        </h2>
        <div class="w-20 h-1 rounded-full bg-[#d9b421]"></div>
      </div>

      <!-- Development Stages List -->
      <div class="flex flex-col gap-12 lg:gap-16">
        <!-- Stage 1 -->
        <article
          class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#0071bc] shadow-xl text-white"
          style="box-shadow: 0px 16px 40px 0 rgba(29,29,27,0.06);">
          <div
            class="w-full lg:w-[480px] h-[260px] sm:h-[340px] rounded-3xl border-8 border-white overflow-hidden shadow-2xl shrink-0">
            <img src="@/assets/images/etapa-1.png" alt="Etapa 1: Estimulación Temprana 0 a 3 años"
              class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col items-start gap-5 flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-4 py-1.5 rounded-full bg-[#d9b421] text-sm font-bold text-[#1d1d1b]">
                Etapa 1: 0 a 3 años
              </span>
              <span class="text-sm font-bold text-[#d9b421]">
                Estimulación Temprana
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
              Estimulación Temprana: "La ventana de mayor plasticidad cerebral."
            </h3>
            <div class="flex flex-col gap-4 text-[#fff5e0] text-base sm:text-[17px] leading-relaxed">
              <p>
                Los primeros años son una ventana única. En esta etapa el cerebro tiene su mayor plasticidad: es cuando
                más y mejores conexiones neuronales se pueden formar. Por eso la estimulación temprana es la mejor
                inversión en el futuro de tu hijo o hija.
              </p>
              <p>
                Trabajamos el desarrollo motor, el lenguaje, la comunicación y las habilidades sociales y emocionales,
                con terapia individualizada para los más pequeños y con la familia como protagonista. No se trata de
                corregir, sino de acompañar a cada niña y niño para que alcance su máximo potencial.
              </p>
            </div>
            <p class="opacity-80 text-xs sm:text-[13px] italic text-[#fff5e0] mt-2">
              Fuente: Fundación Iberoamericana Down21 y revisiones clínicas 2021-2024.
            </p>
          </div>
        </article>

        <!-- Stage 2 -->
        <article
          class="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#d9b421] shadow-xl text-[#1d1d1b]"
          style="box-shadow: 0px 16px 40px 0 rgba(29,29,27,0.06);">
          <div class="flex flex-col items-start gap-5 flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-4 py-1.5 rounded-full bg-[#0071bc] text-sm font-bold text-white">
                Etapa 2: 3 a 12 años
              </span>
              <span class="text-sm font-bold text-[#0071bc]">
                Grupos Escolarizados
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1d1d1b] leading-snug">
              Grupos Escolarizados: "Aprender contenidos y aprender a crecer con otros."
            </h3>
            <div class="flex flex-col gap-4 text-[#1d1d1b] text-base sm:text-[17px] leading-relaxed">
              <p>
                A partir de los tres años pasamos al trabajo en grupo. Aquí niñas y niños desarrollan habilidades
                académicas, de comunicación y de convivencia en un entorno preparado para ellos. El objetivo es doble:
                aprender contenidos y, sobre todo, aprender a estar y crecer con otros.
              </p>
            </div>
          </div>
          <div
            class="w-full lg:w-[480px] h-[260px] sm:h-[340px] rounded-3xl border-8 border-white overflow-hidden shadow-2xl shrink-0">
            <img src="@/assets/images/etapa-2.png" alt="Etapa 2: Grupos escolarizados 3 a 12 años"
              class="w-full h-full object-cover" />
          </div>
        </article>

        <!-- Stage 3 -->
        <article
          class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#e8734a] shadow-xl text-white"
          style="box-shadow: 0px 16px 40px 0 rgba(29,29,27,0.06);">
          <div
            class="w-full lg:w-[480px] h-[260px] sm:h-[340px] rounded-3xl border-8 border-white overflow-hidden shadow-2xl shrink-0">
            <img src="@/assets/images/etapa-3.png" alt="Puente Transversal: Inclusión Educativa"
              class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col items-start gap-5 flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-4 py-1.5 rounded-full bg-[#fff5e0] text-sm font-bold text-[#0071bc]">
                Puente Transversal
              </span>
              <span class="text-sm font-bold text-[#fff5e0]">
                Inclusión Educativa
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
              Inclusión Educativa: "La escuela para todos."
            </h3>
            <div class="flex flex-col gap-4 text-white text-base sm:text-[17px] leading-relaxed">
              <p>
                Creemos en la escuela para todos. Acompañamos a las familias y a los centros educativos para que niñas y
                niños con síndrome de Down puedan integrarse en aulas regulares con los apoyos adecuados. La inclusión
                educativa es uno de los factores que más impulsa la autonomía y la vida social a largo plazo.
              </p>
            </div>
          </div>
        </article>

        <!-- Stage 4 -->
        <article
          class="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#2aa198] shadow-xl text-white"
          style="box-shadow: 0px 16px 40px 0 rgba(29,29,27,0.06);">
          <div class="flex flex-col items-start gap-5 flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-4 py-1.5 rounded-full bg-[#d9b421] text-sm font-bold text-[#1d1d1b]">
                Etapa 3: Jóvenes y Adultos
              </span>
              <span class="text-sm font-bold text-[#d9b421]">
                Proyecto de Vida
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
              Jóvenes y adultos: "Autonomía, trabajo y proyecto de vida propio."
            </h3>
            <div class="flex flex-col gap-4 text-white text-base sm:text-[17px] leading-relaxed">
              <p>
                El síndrome de Down no termina en la infancia, y nuestro acompañamiento tampoco. Con adolescentes y
                adultos trabajamos la autonomía, las habilidades para la vida diaria, la formación para el trabajo y la
                participación social. Porque una persona con síndrome de Down de 30 o 40 años no es un niño grande: es
                un adulto con derecho a su propio proyecto de vida.
              </p>
            </div>
          </div>
          <div
            class="w-full lg:w-[480px] h-[260px] sm:h-[340px] rounded-3xl border-8 border-white overflow-hidden shadow-2xl shrink-0">
            <img src="@/assets/images/etapa-4.png" alt="Etapa 3: Jóvenes y Adultos Proyecto de Vida"
              class="w-full h-full object-cover" />
          </div>
        </article>
      </div>
    </section>

    <!-- SECTION: Servicios y Cuotas (Guía de Orientación 2026-2027) -->
    <section aria-labelledby="cuotas-title" class="bg-[#fffdf4] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-20">
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center gap-5 max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0071bc]">
            <span class="text-xs font-bold uppercase tracking-wider text-white">
              GUÍA DE ORIENTACIÓN · CICLO ESCOLAR 2026–2027
            </span>
          </div>
          <h2 id="cuotas-title" class="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0071bc]">
            Servicios y Cuotas
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48] max-w-3xl">
            Ofrecemos un esquema de cuotas accesibles y transparentes para asegurar la sostenibilidad y la excelencia en
            el desarrollo integral de cada alumno.
          </p>
          <div class="w-20 h-1 rounded-full bg-[#d9b421] mt-2"></div>
        </div>

        <!-- Inscripción General Banner Card -->
        <div
          class="max-w-4xl mx-auto w-full p-6 sm:p-8 rounded-[20px] bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xl"
          style="box-shadow: 0px 12px 32px 0 rgba(0,113,188,0.15);">
          <div class="flex flex-col gap-1">
            <h3 class="text-xl font-bold text-[#1d1d1b]">
              Cuota de Inscripción General
            </h3>
            <p class="text-sm sm:text-[15px] text-[#1d1d1b]">
              Aplica un pago único anual para el ingreso a cualquiera de nuestros programas de apoyo.
            </p>
          </div>
          <div class="flex flex-col items-start sm:items-end shrink-0">
            <span class="text-3xl sm:text-[32px] font-black text-[#0071bc]">
              $650 MXN
            </span>
            <span class="text-xs font-bold uppercase text-[#0071bc] tracking-wider">
              Pago Único
            </span>
          </div>
        </div>

        <!-- Subcategory 1: Acompañamiento individual -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4">
              <div class="w-1.5 h-8 rounded-full bg-[#0071bc]"></div>
              <h3 class="text-2xl font-bold text-[#0071bc]">
                Acompañamiento individual
              </h3>
            </div>
            <p class="text-base text-[#4a4a48] ml-5">
              Terapias personalizadas de estimulación y aprendizaje enfocadas en potenciar habilidades específicas en
              horarios matutinos o vespertinos.
            </p>
          </div>

          <!-- Individual Services Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] shadow-sm h-full gap-4"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex flex-col gap-3">
                <span
                  class="inline-block self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Matutino / Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">
                  Estimulación Temprana (Individual)
                </h4>
                <p class="text-sm text-[#4a4a48]">
                  Terapia individual personalizada; incluye lenguaje a partir del año de edad.
                </p>
              </div>
              <div class="mt-auto pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421] block">
                  $1,200 / mes
                </span>
              </div>
            </div>

            <!-- Card 2 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] shadow-sm h-full gap-4"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex flex-col gap-3">
                <span
                  class="inline-block self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Matutino / Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">
                  Terapia Motora
                </h4>
                <p class="text-sm text-[#4a4a48]">
                  Terapia individual de desarrollo motor. Opción de paquete: $500 / mes por 4 sesiones.
                </p>
              </div>
              <div class="mt-auto pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421] block">
                  $200 / sesión
                </span>
              </div>
            </div>

            <!-- Card 3 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] shadow-sm h-full gap-4"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex flex-col gap-3">
                <span
                  class="inline-block self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Matutino / Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">
                  Terapia de Lenguaje y Comunicación
                </h4>
                <p class="text-sm text-[#4a4a48]">
                  Sesiones de terapia individual orientadas a la adquisición y desarrollo del habla.
                </p>
              </div>
              <div class="mt-auto pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421] block">
                  $200 / sesión
                </span>
              </div>
            </div>

            <!-- Card 4 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] shadow-sm h-full gap-4"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex flex-col gap-3">
                <span
                  class="inline-block self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Matutino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">
                  Taller de Apoyo
                </h4>
                <p class="text-sm text-[#4a4a48]">
                  Como programa principal (16 sesiones). Adicional como complemento: $200 / sesión o $500 / mes.
                </p>
              </div>
              <div class="mt-auto pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421] block">
                  $2,400 / mes
                </span>
              </div>
            </div>

            <!-- Card 5 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] shadow-sm h-full gap-4"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex flex-col gap-3">
                <span
                  class="inline-block self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">
                  Inclusión Educativa
                </h4>
                <p class="text-sm text-[#4a4a48]">
                  Terapia de aprendizaje para apoyar el trayecto escolar regular (no incluye terapia de lenguaje).
                </p>
              </div>
              <div class="mt-auto pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421] block">
                  $1,400 / mes
                </span>
              </div>
            </div>

            <!-- Card 6 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] shadow-sm h-full gap-4"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex flex-col gap-3">
                <span
                  class="inline-block self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">
                  Taller de Lectura y Escritura
                </h4>
                <p class="text-sm text-[#4a4a48]">
                  Servicio único para alumnos externos. Tarifa preferencial si ya toma otro programa: $700 / mes.
                </p>
              </div>
              <div class="mt-auto pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421] block">
                  $1,400 / mes
                </span>
              </div>
            </div>

            <!-- Card 7 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] shadow-sm h-full gap-4"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex flex-col gap-3">
                <span
                  class="inline-block self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Horario Flexible
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">
                  Atención Foránea
                </h4>
                <p class="text-sm text-[#4a4a48]">
                  Primera valoración integral: $200 / día. Cada sesión de terapia posterior: $200.
                </p>
              </div>
              <div class="mt-auto pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421] block">
                  Desde $300
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Subcategory 2: Acompañamiento grupal escolares -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4">
              <div class="w-1.5 h-8 rounded-full bg-[#d9b421]"></div>
              <h3 class="text-2xl font-bold text-[#0071bc]">
                Acompañamiento grupal escolares
              </h3>
            </div>
            <p class="text-base text-[#4a4a48] ml-5">
              Estructura escolarizada completa por niveles con actividades integrales diseñadas para el desarrollo
              integral y socialización.
            </p>
          </div>

          <!-- Group Programs Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Group Card 1: Estimulación Temprana (Grupal) -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-6"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex justify-between items-center flex-wrap gap-3">
                <h4 class="text-xl sm:text-[22px] font-bold text-[#1d1d1b]">
                  Estimulación Temprana (Grupal)
                </h4>
                <span
                  class="px-3 py-1.5 rounded-full bg-[#fffceb] border border-[#d9b421] text-xs sm:text-[13px] font-bold text-[#1d1d1b]">
                  9:00 AM – 12:00 PM
                </span>
              </div>
              <div class="w-full h-px bg-[#e8ecef]"></div>
              <div class="flex flex-col gap-3">
                <span class="text-xs font-bold uppercase tracking-wider text-[#4a4a48]">
                  Incluye semanalmente:
                </span>
                <div class="flex flex-wrap gap-2">
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Lenguaje</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#0071bc]">×2</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Deporte</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#e8734a]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Motora</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#2aa198]">×1</span>
                  </div>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421]">
                  $2,500 / mes
                </span>
              </div>
            </div>

            <!-- Group Card 2: Adaptación -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-6"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex justify-between items-center flex-wrap gap-3">
                <h4 class="text-xl sm:text-[22px] font-bold text-[#1d1d1b]">
                  Adaptación
                </h4>
                <span
                  class="px-3 py-1.5 rounded-full bg-[#fffceb] border border-[#d9b421] text-xs sm:text-[13px] font-bold text-[#1d1d1b]">
                  9:00 AM – 12:45 PM
                </span>
              </div>
              <div class="w-full h-px bg-[#e8ecef]"></div>
              <div class="flex flex-col gap-3">
                <span class="text-xs font-bold uppercase tracking-wider text-[#4a4a48]">
                  Incluye semanalmente:
                </span>
                <div class="flex flex-wrap gap-2">
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Lenguaje</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#0071bc]">×2</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Deporte</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#e8734a]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Danza</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#d9b421]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Música</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#2aa198]">×1</span>
                  </div>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421]">
                  $2,800 / mes
                </span>
              </div>
            </div>

            <!-- Group Card 3: Nivel 1 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-6"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex justify-between items-center flex-wrap gap-3">
                <h4 class="text-xl sm:text-[22px] font-bold text-[#1d1d1b]">
                  Nivel 1
                </h4>
                <span
                  class="px-3 py-1.5 rounded-full bg-[#fffceb] border border-[#d9b421] text-xs sm:text-[13px] font-bold text-[#1d1d1b]">
                  9:00 AM – 1:30 PM
                </span>
              </div>
              <div class="w-full h-px bg-[#e8ecef]"></div>
              <div class="flex flex-col gap-3">
                <span class="text-xs font-bold uppercase tracking-wider text-[#4a4a48]">
                  Incluye semanalmente:
                </span>
                <div class="flex flex-wrap gap-2">
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Lenguaje</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#0071bc]">×2</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Deporte</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#e8734a]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Danza</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#d9b421]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Cómputo</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#1d1d1b]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Música</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#2aa198]">×1</span>
                  </div>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421]">
                  $3,000 / mes
                </span>
              </div>
            </div>

            <!-- Group Card 4: Nivel 2 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-6"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex justify-between items-center flex-wrap gap-3">
                <h4 class="text-xl sm:text-[22px] font-bold text-[#1d1d1b]">
                  Nivel 2
                </h4>
                <span
                  class="px-3 py-1.5 rounded-full bg-[#fffceb] border border-[#d9b421] text-xs sm:text-[13px] font-bold text-[#1d1d1b]">
                  9:00 AM – 2:00 PM
                </span>
              </div>
              <div class="w-full h-px bg-[#e8ecef]"></div>
              <div class="flex flex-col gap-3">
                <span class="text-xs font-bold uppercase tracking-wider text-[#4a4a48]">
                  Incluye semanalmente:
                </span>
                <div class="flex flex-wrap gap-2">
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Lenguaje</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#0071bc]">×2</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Deporte</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#e8734a]">×2</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Danza</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#d9b421]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Cómputo</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#1d1d1b]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Música</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#2aa198]">×1</span>
                  </div>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421]">
                  $3,000 / mes
                </span>
              </div>
            </div>

            <!-- Group Card 5: Transición -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-6 lg:col-span-2"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex justify-between items-center flex-wrap gap-3">
                <h4 class="text-xl sm:text-[22px] font-bold text-[#1d1d1b]">
                  Transición
                </h4>
                <span
                  class="px-3 py-1.5 rounded-full bg-[#fffceb] border border-[#d9b421] text-xs sm:text-[13px] font-bold text-[#1d1d1b]">
                  9:00 AM – 2:00 PM
                </span>
              </div>
              <div class="w-full h-px bg-[#e8ecef]"></div>
              <div class="flex flex-col gap-3">
                <span class="text-xs font-bold uppercase tracking-wider text-[#4a4a48]">
                  Incluye semanalmente:
                </span>
                <div class="flex flex-wrap gap-2">
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Lenguaje</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#0071bc]">×2</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Deporte</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#e8734a]">×2</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Danza</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#d9b421]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Cómputo</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#1d1d1b]">×1</span>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f6f8] border border-[#e8ecef]">
                    <span class="text-xs sm:text-[13px] font-semibold text-[#1d1d1b]">Música</span>
                    <span class="text-xs sm:text-[13px] font-bold text-[#2aa198]">×1</span>
                  </div>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl sm:text-[28px] font-bold text-[#d9b421]">
                  $3,000 / mes
                </span>
              </div>
            </div>
          </div>

          <!-- Note Box -->
          <div class="flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-[#e8ecef] shadow-xs">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 shrink-0 text-[#0071bc]">
              <path
                d="M8.00021 10.6671V8.00021M8.00021 5.33333H8.00688M14.6674 8.00021C14.6674 11.6824 11.6824 14.6674 8.00021 14.6674C4.31801 14.6674 1.33301 11.6824 1.33301 8.00021C1.33301 4.31801 4.31801 1.33301 8.00021 1.33301C11.6824 1.33301 14.6674 4.31801 14.6674 8.00021Z"
                stroke="#0071BC" stroke-width="2" stroke-linecap="round"></path>
            </svg>
            <p class="text-sm font-semibold text-[#4a4a48]">
              La maestra titular del grupo acompaña activamente a los alumnos durante toda la jornada de actividades.
            </p>
          </div>
        </div>

        <!-- Subcategory 3: Acompañamiento a jóvenes y adultos -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4">
              <div class="w-1.5 h-8 rounded-full bg-[#e8734a]"></div>
              <h3 class="text-2xl font-bold text-[#0071bc]">
                Acompañamiento a jóvenes y adultos
              </h3>
            </div>
            <p class="text-base text-[#4a4a48] ml-5">
              Programas orientados al desarrollo de la independencia, habilidades sociolaborales y expresión artística
              para una vida autónoma.
            </p>
          </div>

          <!-- Layout Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Main Program Card (Autonomía Personal) -->
            <div
              class="lg:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-6 shadow-sm"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex justify-between items-center flex-wrap gap-3">
                <span class="px-4 py-1.5 rounded-full bg-[#0071bc] text-xs font-bold uppercase text-white">
                  Programa Principal
                </span>
                <span class="text-sm font-bold text-[#4a4a48]">
                  Turno Matutino • 1 día por semana
                </span>
              </div>

              <div class="flex flex-col gap-2">
                <h4 class="text-2xl sm:text-[32px] font-bold text-[#1d1d1b]">
                  Autonomía Personal
                </h4>
                <p class="text-base text-[#4a4a48]">
                  Programa ancla que brinda acceso al conjunto integral de talleres formativos y recreativos del
                  Instituto.
                </p>
              </div>

              <div class="w-full h-px bg-[#e8ecef]"></div>

              <div class="flex flex-col gap-3">
                <span class="text-sm font-bold uppercase text-[#0071bc] tracking-wider">
                  Talleres de Apoyo Incluidos:
                </span>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-sm font-semibold text-[#1d1d1b]">
                    Autodeterminación y habilidades sociales
                  </span>
                  <span class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-sm font-semibold text-[#1d1d1b]">
                    Desarrollo de destrezas laborales
                  </span>
                  <span class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-sm font-semibold text-[#1d1d1b]">
                    Deporte
                  </span>
                  <span class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-sm font-semibold text-[#1d1d1b]">
                    Lenguaje y comunicación
                  </span>
                  <span class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-sm font-semibold text-[#1d1d1b]">
                    Danza y expresión corporal
                  </span>
                  <span class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-sm font-semibold text-[#1d1d1b]">
                    Música
                  </span>
                  <span class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-sm font-semibold text-[#1d1d1b]">
                    Computación
                  </span>
                </div>
              </div>

              <div class="flex justify-between items-center flex-wrap pt-3 gap-3">
                <span class="text-base font-bold text-[#1d1d1b]">
                  Cuota Mensual del Programa:
                </span>
                <span class="text-3xl sm:text-4xl font-black text-[#d9b421]">
                  $3,200 / mes
                </span>
              </div>
            </div>

            <!-- Side Cards (Apoyo Adicional & Valoración) -->
            <div class="flex flex-col gap-6 lg:col-span-1">
              <!-- Apoyo Adicional Card -->
              <div
                class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-4 flex-1 shadow-sm"
                style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
                <div class="flex justify-between items-center">
                  <h4 class="text-xl font-bold text-[#1d1d1b]">
                    Apoyo Adicional
                  </h4>
                  <span class="px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                    Matutino
                  </span>
                </div>
                <p class="text-[15px] text-[#4a4a48]">
                  Terapia de soporte complementario disponible semanalmente o por sesión individualizada.
                </p>
                <span class="text-2xl font-bold text-[#d9b421]">
                  $800 / sesión
                </span>
              </div>

              <!-- Valoración Card -->
              <div
                class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-4 flex-1 shadow-sm"
                style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
                <h4 class="text-xl font-bold text-[#1d1d1b]">
                  Valoración para Externos
                </h4>
                <p class="text-[15px] text-[#4a4a48]">
                  Sesión de diagnóstico inicial y evaluación especializada para personas de nuevo ingreso externas al
                  Instituto.
                </p>
                <span class="text-2xl font-bold text-[#d9b421]">
                  $200 / sesión
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Subcategory 4: Talleres Extracurriculares -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4">
              <div class="w-1.5 h-8 rounded-full bg-[#2aa198]"></div>
              <h3 class="text-2xl font-bold text-[#0071bc]">
                Talleres Extracurriculares
              </h3>
            </div>
            <p class="text-base text-[#4a4a48] ml-5">
              Ofrecemos terapias de especialidad adicionales utilizando metodologías de vanguardia para impulsar el
              desarrollo motriz y de deglución.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Vital Stim 1 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-5 shadow-sm"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex justify-between items-center flex-wrap gap-2">
                <h4 class="text-xl font-bold text-[#1d1d1b]">
                  Terapia Vital Stim 1
                </h4>
                <span class="px-2.5 py-1 rounded-full bg-[#0071bc] text-[11px] font-bold uppercase text-white">
                  Para Alumnos
                </span>
              </div>
              <p class="text-[15px] text-[#4a4a48]">
                Terapia de electroestimulación neuromuscular especializada, reservada para usuarios activos inscritos en
                los programas regulares del Instituto.
              </p>
              <span class="text-2xl font-bold text-[#d9b421]">
                $400 / sesión
              </span>
            </div>

            <!-- Vital Stim 2 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-tl-lg rounded-tr-[20px] rounded-bl-lg rounded-br-[20px] bg-white border-t border-r border-b border-l-[6px] border-[#0071bc] gap-5 shadow-sm"
              style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.05);">
              <div class="flex justify-between items-center flex-wrap gap-2">
                <h4 class="text-xl font-bold text-[#1d1d1b]">
                  Terapia Vital Stim 2
                </h4>
                <span class="px-2.5 py-1 rounded-full bg-[#d9b421] text-[11px] font-bold uppercase text-[#1d1d1b]">
                  Para Externos
                </span>
              </div>
              <p class="text-[15px] text-[#4a4a48]">
                Servicio de electroestimulación disponible de manera abierta para pacientes externos al Instituto bajo
                previa valoración médica.
              </p>
              <span class="text-2xl font-bold text-[#d9b421]">
                $800 / sesión
              </span>
            </div>
          </div>
        </div>

        <!-- Subcategory 5: Subvenciones, Becas & Acciones -->
        <div class="flex flex-col items-center gap-12 max-w-4xl mx-auto w-full pt-6">
          <!-- Funding note -->
          <div
            class="w-full p-6 sm:p-10 rounded-tl-lg rounded-tr-3xl rounded-bl-lg rounded-br-3xl bg-white border-l-[6px] border-[#d9b421] shadow-md"
            style="box-shadow: 0px 8px 24px 0 rgba(29,29,27,0.03);">
            <p class="text-base sm:text-lg text-[#1d1d1b] leading-relaxed">
              Gracias a los esfuerzos permanentes de procuración de fondos, alianzas estratégicas y gestión de fuentes
              de financiamiento alternas, el Instituto logra obtener recursos que permiten subvencionar una parte muy
              importante del costo real de los servicios, haciendo posible ofrecerlos a las familias a cuotas
              accesibles.
            </p>
          </div>

          <!-- Scholarship & SAT details + CTA Buttons -->
          <div class="flex flex-col items-center text-center gap-8 w-full">
            <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
              Estas cuotas son meramente orientativas y pueden variar según la situación socioeconómica de cada familia.
              Contamos con un sólido esquema de becas y cuotas escalonadas para garantizar que ninguna familia se quede
              sin atención por motivos económicos. Cuéntanos tu situación y buscaremos juntos el camino ideal para tu
              familia. Como donataria autorizada ante el SAT, todos los donativos que recibimos para este fin son
              deducibles de impuestos.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              <NuxtLink :to="localePath('/contacto')">
                <Button label="Agenda una visita" icon="pi pi-chevron-right" iconPos="right"
                  class="!rounded-full !bg-[#0071bc] !border-none !text-white font-bold !px-8 !py-4 hover:!bg-[#005a96] transition-all shadow-md" />
              </NuxtLink>
              <a href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer">
                <Button label="Escríbenos por WhatsApp" icon="pi pi-chevron-right" iconPos="right"
                  class="!rounded-full !bg-white !border-2 !border-[#0071bc] !text-[#0071bc] font-bold !px-8 !py-4 hover:!bg-blue-50 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
