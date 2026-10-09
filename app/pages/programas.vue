<script lang="ts" setup>
import Button from "primevue/button";
import heroProgramasImg from "@/assets/images/v2/hero_programas.jpg";
import etapa1Img from "@/assets/images/etapa-1.png";
import etapa2Img from "@/assets/images/etapa-2.png";
import etapa3Img from "@/assets/images/etapa-3.png";
import etapa4Img from "@/assets/images/etapa-4.png";

// Configuración de imágenes para reemplazo manual sencillo
const images = {
  heroBg: heroProgramasImg,
  etapa1: etapa1Img,
  etapa2: etapa2Img,
  etapa3: etapa3Img,
  etapa4: etapa4Img,
};

const localePath = useLocalePath();

useSeoMeta({
  title: "Programas de Atención e Inclusión | Instituto Down de Chihuahua A.C.",
  description: "Conoce los programas de vida del Instituto Down de Chihuahua: estimulación temprana, grupos escolarizados, inclusión educativa, autonomía para jóvenes y adultos, y guía de servicios y cuotas.",
  keywords: "Programas Síndrome de Down Chihuahua, Estimulación temprana Chihuahua, Inclusión educativa, Educación especial Chihuahua, Autonomía adultos síndrome de down, Cuotas Instituto Down Chihuahua",
  ogTitle: "Programas de Atención e Inclusión | Instituto Down de Chihuahua A.C.",
  ogDescription: "Acompañamos a la persona con síndrome de Down en cada etapa de su vida con estimulación temprana, escolarización, desarrollo laboral y cuotas accesibles en Chihuahua.",
  ogImage: images.heroBg,
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
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden">
    <!-- 1. HERO SECTION CON IMAGEN DE FONDO Y TRANSPARENCIA AZUL -->
    <section aria-labelledby="hero-title"
      class="relative px-4 sm:px-6 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-24 overflow-hidden text-white min-h-[620px] flex items-center justify-center">
      <!-- Capa de Imagen de Fondo y Transparencia Azul -->
      <div class="absolute inset-0 z-0">
        <img :src="images.heroBg" alt="Fondo Hero - Programas de Vida Instituto Down de Chihuahua"
          class="w-full h-full object-cover object-center" />
        <div class="absolute inset-0 bg-[#0075c3]/85 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-[#0075c3]/40"></div>
      </div>

      <!-- Contenido Hero -->
      <div
        class="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-10 text-center">
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center gap-5 max-w-4xl reveal-fade-up">
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 md:px-[18px] py-1.5 rounded-full border-[1.5px] border-[#fc0] bg-[#0075c3]/40 backdrop-blur-xs reveal-fade-up stagger-1">
            <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#fc0]">
              Nuestros Caminos de Apoyo
            </span>
          </div>

          <!-- Title -->
          <h1 id="hero-title"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-center text-white leading-tight reveal-fade-up stagger-2">
            <span class="font-bold">Programas de </span>
            <span class="font-black italic text-[#fc0]">Vida</span>
          </h1>

          <p class="text-base sm:text-lg text-white/95 leading-relaxed max-w-3xl reveal-fade-up stagger-3">
            Acompañamos a la persona con síndrome de Down en cada etapa de su vida. Nuestros programas están pensados
            para que, paso a paso, gane autonomía, confianza y las herramientas que necesita para incluirse en la
            escuela, el trabajo y la comunidad.
          </p>
        </div>

        <!-- Tarjeta Flotante Familias Nuevas -->
        <div data-scroll data-scroll-class="is-inview" class="w-full max-w-2xl reveal-fade-up stagger-4">
          <FamiliasNuevasCard buttonTo="/familias" />
        </div>
      </div>
    </section>

    <!-- 2. SECTION: El Camino del Desarrollo -->
    <section aria-labelledby="camino-desarrollo-title"
      class="bg-[#f4f6f8] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div class="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        <!-- Section Header -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center gap-4 text-center reveal-fade-up">
          <h2 id="camino-desarrollo-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0075c3]">
            El Camino del Desarrollo
          </h2>
          <div class="w-20 h-1 rounded-full bg-[#fc0]"></div>
        </div>

        <!-- 4 Stages List -->
        <div class="flex flex-col gap-8 md:gap-12">
          <!-- Stage 1 -->
          <article data-scroll data-scroll-class="is-inview"
            class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all duration-300 reveal-fade-up"
            style="box-shadow: 0px 16px 40px 0 rgba(29,29,27,0.06);">
            <div
              class="w-full lg:w-[480px] h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-xs">
              <img :src="images.etapa1" alt="Etapa 1: Estimulación Temprana (0 a 3 años)"
                class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col items-start gap-4 flex-1">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-4 py-1.5 rounded-full bg-[#fc0] text-xs sm:text-sm font-bold text-[#1d1d1b]">
                  Etapa 1: 0 a 3 años
                </span>
                <span class="text-sm font-bold text-[#fc0]">Estimulación Temprana</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold text-[#1d1d1b] leading-tight">
                Estimulación Temprana: "La ventana de mayor plasticidad cerebral."
              </h3>
              <p class="text-base text-[#4a4a48] leading-relaxed">
                Los primeros años son una ventana única. En esta etapa el cerebro tiene su mayor plasticidad: es cuando
                más y mejores conexiones neuronales se pueden formar. Por eso la estimulación temprana es la mejor
                inversión en el futuro de tu hijo o hija.
              </p>
              <p class="text-base text-[#4a4a48] leading-relaxed">
                Trabajamos el desarrollo motor, el lenguaje, la comunicación y las habilidades sociales y emocionales,
                con terapia individualizada para los más pequeños y con la familia como protagonista. No se trata de
                corregir, sino de acompañar a cada niña y niño para que alcance su máximo potencial.
              </p>
              <span class="text-xs italic text-[#9a9a97]">
                Fuente: Fundación Iberoamericana Down21 y revisiones clínicas 2021-2024.
              </span>
            </div>
          </article>

          <!-- Stage 2 -->
          <article data-scroll data-scroll-class="is-inview"
            class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all duration-300 reveal-fade-up"
            style="box-shadow: 0px 16px 40px 0 rgba(29,29,27,0.06);">
            <div
              class="w-full lg:w-[480px] h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-xs">
              <img :src="images.etapa2" alt="Etapa 2: Grupos Escolarizados (3 a 12 años)"
                class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col items-start gap-4 flex-1">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-4 py-1.5 rounded-full bg-[#0075c3] text-xs sm:text-sm font-bold text-white">
                  Etapa 2: 3 a 12 años
                </span>
                <span class="text-sm font-bold text-[#0075c3]">Grupos Escolarizados</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold text-[#1d1d1b] leading-tight">
                Grupos Escolarizados: "Aprender contenidos y aprender a crecer con otros."
              </h3>
              <p class="text-base text-[#4a4a48] leading-relaxed">
                A partir de los tres años pasamos al trabajo en grupo. Aquí niñas y niños desarrollan habilidades
                académicas, de comunicación y de convivencia en un entorno preparado para ellos. El objetivo es doble:
                aprender contenidos y, sobre todo, aprender a estar y crecer con otros.
              </p>
            </div>
          </article>

          <!-- Stage 3 -->
          <article data-scroll data-scroll-class="is-inview"
            class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all duration-300 reveal-fade-up"
            style="box-shadow: 0px 16px 40px 0 rgba(29,29,27,0.06);">
            <div
              class="w-full lg:w-[480px] h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-xs">
              <img :src="images.etapa3" alt="Puente Transversal: Inclusión Educativa"
                class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col items-start gap-4 flex-1">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-4 py-1.5 rounded-full bg-[#fc0] text-xs sm:text-sm font-bold text-[#0075c3]">
                  Puente Transversal
                </span>
                <span class="text-sm font-bold text-[#fc0]">Inclusión Educativa</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold text-[#1d1d1b] leading-tight">
                Inclusión Educativa: "La escuela para todos."
              </h3>
              <p class="text-base text-[#4a4a48] leading-relaxed">
                Creemos en la escuela para todos. Acompañamos a las familias y a los centros educativos para que niñas y
                niños con síndrome de Down puedan integrarse en aulas regulares con los apoyos adecuados. La inclusión
                educativa es uno de los factores que más impulsa la autonomía y la vida social a largo plazo.
              </p>
            </div>
          </article>

          <!-- Stage 4 -->
          <article data-scroll data-scroll-class="is-inview"
            class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all duration-300 reveal-fade-up"
            style="box-shadow: 0px 16px 40px 0 rgba(29,29,27,0.06);">
            <div
              class="w-full lg:w-[480px] h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-xs">
              <img :src="images.etapa4" alt="Etapa 3: Jóvenes y Adultos" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col items-start gap-4 flex-1">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-4 py-1.5 rounded-full bg-[#fc0] text-xs sm:text-sm font-bold text-[#1d1d1b]">
                  Etapa 3: Jóvenes y Adultos
                </span>
                <span class="text-sm font-bold text-[#fc0]">Proyecto de Vida</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold text-[#1d1d1b] leading-tight">
                Jóvenes y adultos: "Autonomía, trabajo y proyecto de vida propio."
              </h3>
              <p class="text-base text-[#4a4a48] leading-relaxed">
                El síndrome de Down no termina en la infancia, y nuestro acompañamiento tampoco. Con adolescentes y
                adultos trabajamos la autonomía, las habilidades para la vida diaria, la formación para el trabajo y la
                participación social. Porque una persona con síndrome de Down de 30 o 40 años no es un niño grande: es
                un adulto con derecho a su propio proyecto de vida.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. SECTION: Servicios y Cuotas -->
    <section aria-labelledby="cuotas-title" class="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div class="max-w-7xl mx-auto flex flex-col gap-16">
        <!-- Section Header -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto reveal-fade-up">
          <span class="px-4 py-1.5 rounded-full bg-[#0075c3] text-xs font-bold uppercase text-white tracking-wider">
            GUÍA DE ORIENTACIÓN · CICLO ESCOLAR 2026–2027
          </span>
          <h2 id="cuotas-title" class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0075c3]">
            Servicios y Cuotas
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48]">
            Ofrecemos un esquema de cuotas accesibles y transparentes para asegurar la sostenibilidad y la excelencia en
            el desarrollo integral de cada alumno.
          </p>
          <div class="w-20 h-1 rounded-full bg-[#fc0] mt-1"></div>
        </div>

        <!-- Banner Cuota de Inscripción General -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-md max-w-4xl mx-auto w-full reveal-scale"
          style="box-shadow: 0px 12px 32px 0 rgba(0,113,188,0.15);">
          <div class="flex flex-col items-start gap-1">
            <h3 class="text-xl font-bold text-[#1d1d1b]">Cuota de Inscripción General</h3>
            <p class="text-sm text-[#4a4a48]">
              Aplica un pago único anual para el ingreso a cualquiera de nuestros programas de apoyo.
            </p>
          </div>
          <div class="flex flex-col items-center sm:items-end shrink-0">
            <span class="text-3xl sm:text-[32px] font-black text-[#0075c3]">$650 MXN</span>
            <span class="text-xs font-bold uppercase text-[#0075c3]">Pago Único</span>
          </div>
        </div>

        <!-- BLOQUE 1: Acompañamiento individual -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col items-start gap-2 border-l-4 border-[#0075c3] pl-4">
            <h3 class="text-2xl font-bold text-[#0075c3]">Acompañamiento individual</h3>
            <p class="text-base text-[#4a4a48]">
              Terapias personalizadas de estimulación y aprendizaje enfocadas en potenciar habilidades específicas en
              horarios matutinos o vespertinos.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div
              class="flex flex-col justify-between p-6 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4">
              <div class="flex flex-col gap-3">
                <span
                  class="self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Matutino / Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">Estimulación Temprana (Individual)</h4>
                <p class="text-sm text-[#4a4a48]">Terapia individual personalizada; incluye lenguaje a partir del año de
                  edad.</p>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$1,200 / mes</span>
              </div>
            </div>

            <!-- Card 2 -->
            <div
              class="flex flex-col justify-between p-6 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4">
              <div class="flex flex-col gap-3">
                <span
                  class="self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Matutino / Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">Terapia Motora</h4>
                <p class="text-sm text-[#4a4a48]">Terapia individual de desarrollo motor. Opción de paquete: $500 / mes
                  por 4 sesiones.</p>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$200 / sesión</span>
              </div>
            </div>

            <!-- Card 3 -->
            <div
              class="flex flex-col justify-between p-6 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4">
              <div class="flex flex-col gap-3">
                <span
                  class="self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Matutino / Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">Terapia de Lenguaje y Comunicación</h4>
                <p class="text-sm text-[#4a4a48]">Sesiones de terapia individual orientadas a la adquisición y
                  desarrollo del habla.</p>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$200 / sesión</span>
              </div>
            </div>

            <!-- Card 4 -->
            <div
              class="flex flex-col justify-between p-6 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4">
              <div class="flex flex-col gap-3">
                <span
                  class="self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Matutino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">Taller de Apoyo</h4>
                <p class="text-sm text-[#4a4a48]">Como programa principal (16 sesiones). Adicional como complemento:
                  $200 / sesión o $500 / mes.</p>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$2,400 / mes</span>
              </div>
            </div>

            <!-- Card 5 -->
            <div
              class="flex flex-col justify-between p-6 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4">
              <div class="flex flex-col gap-3">
                <span
                  class="self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">Inclusión Educativa</h4>
                <p class="text-sm text-[#4a4a48]">Terapia de aprendizaje para apoyar el trayecto escolar regular (no
                  incluye terapia de lenguaje).</p>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$1,400 / mes</span>
              </div>
            </div>

            <!-- Card 6 -->
            <div
              class="flex flex-col justify-between p-6 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4">
              <div class="flex flex-col gap-3">
                <span
                  class="self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Vespertino
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">Taller de Lectura y Escritura</h4>
                <p class="text-sm text-[#4a4a48]">Servicio único para alumnos externos. Tarifa preferencial si ya toma
                  otro programa: $700 / mes.</p>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$1,400 / mes</span>
              </div>
            </div>

            <!-- Card 7 -->
            <div
              class="flex flex-col justify-between p-6 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4 sm:col-span-2 lg:col-span-1">
              <div class="flex flex-col gap-3">
                <span
                  class="self-start px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">
                  Horario Flexible
                </span>
                <h4 class="text-lg font-bold text-[#1d1d1b]">Atención Foránea</h4>
                <p class="text-sm text-[#4a4a48]">Primera valoración integral: $200 / día. Cada sesión de terapia
                  posterior: $200.</p>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">Desde $300</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BLOQUE 2: Acompañamiento grupal escolares -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col items-start gap-2 border-l-4 border-[#fc0] pl-4">
            <h3 class="text-2xl font-bold text-[#0075c3]">Acompañamiento grupal escolares</h3>
            <p class="text-base text-[#4a4a48]">
              Estructura escolarizada completa por niveles con actividades integrales diseñadas para el desarrollo
              integral y socialización.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Escolarizado 1 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-5">
              <div class="flex flex-wrap justify-between items-center gap-3">
                <h4 class="text-xl font-bold text-[#1d1d1b]">Estimulación Temprana (Grupal)</h4>
                <span class="px-3 py-1 rounded-full bg-[#fffceb] border border-[#fc0] text-xs font-bold text-[#1d1d1b]">
                  9:00 AM – 12:00 PM
                </span>
              </div>
              <div class="w-full h-px bg-slate-100"></div>
              <div class="flex flex-col gap-2">
                <span class="text-xs font-bold uppercase text-[#4a4a48]">Incluye semanalmente:</span>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Lenguaje <strong class="text-[#0075c3]">×2</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Deporte <strong class="text-[#e8734a]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Motora <strong class="text-[#2aa198]">×1</strong>
                  </span>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$2,500 / mes</span>
              </div>
            </div>

            <!-- Escolarizado 2 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-5">
              <div class="flex flex-wrap justify-between items-center gap-3">
                <h4 class="text-xl font-bold text-[#1d1d1b]">Adaptación</h4>
                <span class="px-3 py-1 rounded-full bg-[#fffceb] border border-[#fc0] text-xs font-bold text-[#1d1d1b]">
                  9:00 AM – 12:45 PM
                </span>
              </div>
              <div class="w-full h-px bg-slate-100"></div>
              <div class="flex flex-col gap-2">
                <span class="text-xs font-bold uppercase text-[#4a4a48]">Incluye semanalmente:</span>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Lenguaje <strong class="text-[#0075c3]">×2</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Deporte <strong class="text-[#e8734a]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Danza <strong class="text-[#fc0]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Música <strong class="text-[#2aa198]">×1</strong>
                  </span>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$2,800 / mes</span>
              </div>
            </div>

            <!-- Escolarizado 3 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-5">
              <div class="flex flex-wrap justify-between items-center gap-3">
                <h4 class="text-xl font-bold text-[#1d1d1b]">Nivel 1</h4>
                <span class="px-3 py-1 rounded-full bg-[#fffceb] border border-[#fc0] text-xs font-bold text-[#1d1d1b]">
                  9:00 AM – 1:30 PM
                </span>
              </div>
              <div class="w-full h-px bg-slate-100"></div>
              <div class="flex flex-col gap-2">
                <span class="text-xs font-bold uppercase text-[#4a4a48]">Incluye semanalmente:</span>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Lenguaje <strong class="text-[#0075c3]">×2</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Deporte <strong class="text-[#e8734a]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Danza <strong class="text-[#fc0]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Cómputo <strong class="text-[#1d1d1b]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Música <strong class="text-[#2aa198]">×1</strong>
                  </span>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$3,000 / mes</span>
              </div>
            </div>

            <!-- Escolarizado 4 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-5">
              <div class="flex flex-wrap justify-between items-center gap-3">
                <h4 class="text-xl font-bold text-[#1d1d1b]">Nivel 2</h4>
                <span class="px-3 py-1 rounded-full bg-[#fffceb] border border-[#fc0] text-xs font-bold text-[#1d1d1b]">
                  9:00 AM – 2:00 PM
                </span>
              </div>
              <div class="w-full h-px bg-slate-100"></div>
              <div class="flex flex-col gap-2">
                <span class="text-xs font-bold uppercase text-[#4a4a48]">Incluye semanalmente:</span>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Lenguaje <strong class="text-[#0075c3]">×2</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Deporte <strong class="text-[#e8734a]">×2</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Danza <strong class="text-[#fc0]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Cómputo <strong class="text-[#1d1d1b]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Música <strong class="text-[#2aa198]">×1</strong>
                  </span>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$3,000 / mes</span>
              </div>
            </div>

            <!-- Escolarizado 5 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-5 md:col-span-2 lg:col-span-1">
              <div class="flex flex-wrap justify-between items-center gap-3">
                <h4 class="text-xl font-bold text-[#1d1d1b]">Transición</h4>
                <span class="px-3 py-1 rounded-full bg-[#fffceb] border border-[#fc0] text-xs font-bold text-[#1d1d1b]">
                  9:00 AM – 2:00 PM
                </span>
              </div>
              <div class="w-full h-px bg-slate-100"></div>
              <div class="flex flex-col gap-2">
                <span class="text-xs font-bold uppercase text-[#4a4a48]">Incluye semanalmente:</span>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Lenguaje <strong class="text-[#0075c3]">×2</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Deporte <strong class="text-[#e8734a]">×2</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Danza <strong class="text-[#fc0]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Cómputo <strong class="text-[#1d1d1b]">×1</strong>
                  </span>
                  <span
                    class="px-3 py-1 rounded-lg bg-[#f4f6f8] border border-slate-200 text-xs font-semibold text-[#1d1d1b] flex items-center gap-1.5">
                    Música <strong class="text-[#2aa198]">×1</strong>
                  </span>
                </div>
              </div>
              <div class="pt-2">
                <span class="text-2xl font-bold text-[#fc0]">$3,000 / mes</span>
              </div>
            </div>
          </div>

          <div
            class="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#4a4a48]">
            <i class="pi pi-info-circle text-[#0075c3] text-lg shrink-0"></i>
            <span>La maestra titular del grupo acompaña activamente a los alumnos durante toda la jornada de
              actividades.</span>
          </div>
        </div>

        <!-- BLOQUE 3: Acompañamiento a jóvenes y adultos -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col items-start gap-2 border-l-4 border-[#e8734a] pl-4">
            <h3 class="text-2xl font-bold text-[#0075c3]">Acompañamiento a jóvenes y adultos</h3>
            <p class="text-base text-[#4a4a48]">
              Programas orientados al desarrollo de la independencia, habilidades sociolaborales y expresión artística
              para una vida autónoma.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <!-- Main Card: Autonomía Personal -->
            <div
              class="lg:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-6">
              <div class="flex flex-wrap justify-between items-center gap-3">
                <span class="px-4 py-1.5 rounded-full bg-[#0075c3] text-xs font-bold uppercase text-white">
                  Programa Principal
                </span>
                <span class="text-sm font-bold text-[#4a4a48]">
                  Turno Matutino • 1 día por semana
                </span>
              </div>

              <div class="flex flex-col gap-2">
                <h4 class="text-2xl sm:text-3xl font-bold text-[#1d1d1b]">Autonomía Personal</h4>
                <p class="text-base text-[#4a4a48]">
                  Programa ancla que brinda acceso al conjunto integral de talleres formativos y recreativos del
                  Instituto.
                </p>
              </div>

              <div class="w-full h-px bg-slate-100"></div>

              <div class="flex flex-col gap-3">
                <span class="text-xs font-bold uppercase text-[#0075c3]">Talleres de Apoyo Incluidos:</span>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-xs sm:text-sm font-semibold text-[#1d1d1b]">Autodeterminación
                    y habilidades sociales</span>
                  <span
                    class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-xs sm:text-sm font-semibold text-[#1d1d1b]">Desarrollo
                    de destrezas laborales</span>
                  <span
                    class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-xs sm:text-sm font-semibold text-[#1d1d1b]">Deporte</span>
                  <span
                    class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-xs sm:text-sm font-semibold text-[#1d1d1b]">Lenguaje
                    y comunicación</span>
                  <span
                    class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-xs sm:text-sm font-semibold text-[#1d1d1b]">Danza
                    y expresión corporal</span>
                  <span
                    class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-xs sm:text-sm font-semibold text-[#1d1d1b]">Música</span>
                  <span
                    class="px-3.5 py-1.5 rounded-lg bg-[#f4f6f8] text-xs sm:text-sm font-semibold text-[#1d1d1b]">Computación</span>
                </div>
              </div>

              <div class="flex flex-wrap justify-between items-center gap-3 pt-3">
                <span class="text-base font-bold text-[#1d1d1b]">Cuota Mensual del Programa:</span>
                <span class="text-3xl sm:text-4xl font-black text-[#fc0]">$3,200 / mes</span>
              </div>
            </div>

            <!-- Subcards column -->
            <div class="flex flex-col gap-6">
              <!-- Apoyo Adicional -->
              <div
                class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4 flex-1">
                <div class="flex justify-between items-center">
                  <h4 class="text-xl font-bold text-[#1d1d1b]">Apoyo Adicional</h4>
                  <span
                    class="px-2.5 py-1 rounded-full bg-[#f4f6f8] text-[11px] font-bold uppercase text-[#4a4a48]">Matutino</span>
                </div>
                <p class="text-sm text-[#4a4a48]">Terapia de soporte complementario disponible semanalmente o por sesión
                  individualizada.</p>
                <span class="text-xl font-black text-[#fc0]">$800 / sesión <span class="text-sm font-light text-black">
                    (ó $200 por semana / día)</span></span>

              </div>

              <!-- Valoración para Externos -->
              <div
                class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4 flex-1">
                <h4 class="text-xl font-bold text-[#1d1d1b]">Valoración para Externos</h4>
                <p class="text-sm text-[#4a4a48]">Sesión de diagnóstico inicial y evaluación especializada para personas
                  de nuevo ingreso externas al Instituto.</p>
                <span class="text-xl font-black text-[#fc0]">$200 / sesión</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BLOQUE 4: Talleres Extracurriculares -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col items-start gap-2 border-l-4 border-[#2aa198] pl-4">
            <h3 class="text-2xl font-bold text-[#0075c3]">Talleres Extracurriculares</h3>
            <p class="text-base text-[#4a4a48]">
              Ofrecemos terapias de especialidad adicionales utilizando metodologías de vanguardia para impulsar el
              desarrollo motriz y de deglución.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Vital Stim 1 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4">
              <div class="flex justify-between items-center">
                <h4 class="text-xl font-bold text-[#1d1d1b]">Terapia Vital Stim 1</h4>
                <span class="px-3 py-1 rounded-full bg-[#0075c3] text-xs font-bold uppercase text-white">Para
                  Alumnos</span>
              </div>
              <p class="text-sm text-[#4a4a48]">Terapia de electroestimulación neuromuscular especializada, reservada
                para usuarios activos inscritos en los programas regulares del Instituto.</p>
              <span class="text-2xl font-bold text-[#fc0]">$400 / sesión</span>
            </div>

            <!-- Vital Stim 2 -->
            <div
              class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-t border-r border-b border-l-[6px] border-[#0075c3] shadow-sm hover:shadow-md transition-all gap-4">
              <div class="flex justify-between items-center">
                <h4 class="text-xl font-bold text-[#1d1d1b]">Terapia Vital Stim 2</h4>
                <span class="px-3 py-1 rounded-full bg-[#fc0] text-xs font-bold uppercase text-[#1d1d1b]">Para
                  Externos</span>
              </div>
              <p class="text-sm text-[#4a4a48]">Servicio de electroestimulación disponible de manera abierta para
                pacientes externos al Instituto bajo previa valoración médica.</p>
              <span class="text-2xl font-bold text-[#fc0]">$800 / sesión</span>
            </div>
          </div>
        </div>

        <!-- Banner Transparencia & Becas (Final) -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col items-center gap-10 max-w-4xl mx-auto text-center reveal-fade-up">
          <div class="p-8 sm:p-10 rounded-2xl bg-white border-l-[6px] border-[#fc0] shadow-sm text-left"
            style="box-shadow: 0px 8px 24px 0 rgba(29,29,27,0.03);">
            <p class="text-base sm:text-lg text-[#1d1d1b] leading-relaxed">
              Gracias a los esfuerzos permanentes de procuración de fondos, alianzas estratégicas y gestión de fuentes
              de financiamiento alternas, el Instituto logra obtener recursos que permiten subvencionar una parte muy
              importante del costo real de los servicios, haciendo posible ofrecerlos a las familias a cuotas
              accesibles.
            </p>
          </div>

          <div class="flex flex-col items-center gap-8">
            <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
              Estas cuotas son meramente orientativas y pueden variar según la situación socioeconómica de cada familia.
              Contamos con un sólido esquema de becas y cuotas escalonadas para garantizar que ninguna familia se quede
              sin atención por motivos económicos. Cuéntanos tu situación y buscaremos juntos el camino ideal para tu
              familia. Como donataria autorizada ante el SAT, todos los donativos que recibimos para este fin son
              deducibles de impuestos.
            </p>

            <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <NuxtLink :to="localePath('/contacto')">
                <Button label="Agenda una visita" icon="pi pi-arrow-right" iconPos="right"
                  class="!bg-[#0075c3] hover:!bg-[#005f9e] !text-white !font-bold !px-7 !py-3.5 !rounded-full !border-none flex items-center gap-3 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  aria-label="Agenda una visita al Instituto Down de Chihuahua" />
              </NuxtLink>

              <a href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer">
                <Button label="Escríbenos por WhatsApp" icon="pi pi-whatsapp" iconPos="right" outlined
                  class="!border-2 !border-[#0075c3] !text-[#0075c3] hover:!bg-[#0075c3]/10 !font-bold !px-7 !py-3.5 !rounded-full flex items-center gap-3 transition-all duration-300"
                  aria-label="Contactar al Instituto por WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
