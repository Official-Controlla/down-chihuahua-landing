<script lang="ts" setup>
useSeoMeta({
  title: "Comprendiendo el Síndrome de Down | Instituto Down de Chihuahua A.C.",
  description: "Información, concientización y tipos de síndrome de Down (Trisomía 21, Translocación y Mosaicismo). Apoyo y orientación familiar en Chihuahua.",
  keywords: "Síndrome de Down Chihuahua, qué es el síndrome de Down, Trisomía 21, diagnostico síndrome de down, estimulación temprana Chihuahua, apoyo familiar síndrome de down",
  ogTitle: "Comprendiendo el Síndrome de Down | Instituto Down de Chihuahua A.C.",
  ogDescription: "Información veraz y esperanzadora sobre el síndrome de Down, diagnósticos, estadísticas en México y primeros pasos para las familias.",
  ogImage: "@/assets/images/arch-bg.png",
  ogType: "article",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Comprendiendo el Síndrome de Down | Instituto Down de Chihuahua A.C.",
    description: "Información educativa sobre causas, tipos y primeros pasos en el diagnóstico del síndrome de Down.",
  }),
  defineQuestion({
    name: "¿Qué es el síndrome de Down?",
    acceptedAnswer: "Es una condición genética que ocurre cuando una persona nace con una copia extra del cromosoma 21. No es una enfermedad, no se contagia y no se cura.",
  }),
  defineQuestion({
    name: "¿Cuántos tipos de síndrome de Down existen?",
    acceptedAnswer: "Existen 3 tipos principales: Trisomía 21 libre (95% de los casos), Translocación (3%) y Mosaicismo (2%).",
  }),
]);
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden">
    <!-- HERO SECTION: Educación y Concientización -->
    <section aria-labelledby="hero-title"
      class="bg-[#fff5e0] px-4 sm:px-6 md:px-12 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
      <div class="max-w-5xl mx-auto flex flex-col items-center text-center gap-8 md:gap-10">
        <div class="flex flex-col items-center gap-5 max-w-4xl">
          <!-- Badge -->
          <div
            class="inline-flex items-center px-[18px] py-1.5 rounded-full bg-white border-[1.5px] border-[#d9b421] shadow-xs">
            <span class="text-xs md:text-[13px] font-bold uppercase tracking-wider text-[#0071bc]">
              Educación y Concientización
            </span>
          </div>

          <!-- H1 Title -->
          <h1 id="hero-title"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-center text-[#0071bc] leading-tight">
            <span class="font-bold">Comprendiendo el </span>
            <span class="font-black italic text-[#d9b421]">Síndrome de Down</span>
          </h1>
        </div>

        <!-- Highlight Box: Familias Nuevas -->
        <FamiliasNuevasCard />
      </div>
    </section>

    <!-- SECTION: ¿Qué es el síndrome de Down? & Estadísticas -->
    <section aria-labelledby="what-is-title"
      class="bg-[#f4f6f8] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[100px]">
      <div class="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
        <!-- Text & Stats Container -->
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <!-- Text Content Column -->
          <div class="flex flex-col items-start flex-1 gap-6">
            <h2 id="what-is-title" class="text-3xl sm:text-4xl lg:text-[40px] text-left leading-tight">
              <span class="font-bold text-[#0071bc]">¿Qué es el </span>
              <span class="font-black italic text-[#d9b421]">síndrome de Down?</span>
            </h2>

            <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
              El síndrome de Down es una condición genética, no una enfermedad. Ocurre cuando una persona nace con una
              copia extra —total o parcial— del cromosoma 21. Ese cromosoma adicional influye en la forma en que se
              desarrollan el cuerpo y el cerebro. No se contagia, no se cura y no es culpa de nadie: simplemente es otra
              manera de ser persona.
            </p>

            <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
              Es la condición cromosómica más común en los seres humanos. En México nace aproximadamente 1 de cada 700
              bebés con síndrome de Down, y se estima que viven en el país alrededor de 220 mil personas con esta
              condición. Cada una es única, con su propia personalidad, gustos, talentos y sueños.
            </p>

            <span class="text-xs italic text-left text-[#9a9a97]">
              Fuente: Secretaría de Salud de México / Instituto Nacional de Pediatría (2024); CDC (2024).
            </span>
          </div>

          <!-- Stats Cards Column -->
          <div class="flex flex-col gap-5 w-full lg:w-[460px] shrink-0">
            <!-- Stat 1 -->
            <div class="flex flex-col gap-3 p-8 rounded-3xl bg-[#0071bc] text-white shadow-md">
              <span class="text-4xl sm:text-[44px] font-black text-left leading-none">
                1 de cada 700
              </span>
              <span class="text-xs sm:text-[13px] font-bold text-left uppercase text-[#fff5e0] tracking-wide">
                bebés nacen con esta condición en México.
              </span>
            </div>

            <!-- Stat 2 -->
            <div class="flex flex-col gap-3 p-8 rounded-3xl bg-[#d9b421] text-[#0071bc] shadow-md">
              <span class="text-4xl sm:text-[44px] font-black text-left leading-none">
                ~220,000
              </span>
              <span class="text-xs sm:text-[13px] font-bold text-left uppercase text-white tracking-wide">
                personas con síndrome de Down viven en el país.
              </span>
            </div>
          </div>
        </div>

        <!-- Tipos de Síndrome de Down Grid -->
        <div class="flex flex-col gap-10">
          <div class="flex flex-col items-start gap-3 max-w-3xl">
            <h2 class="text-2xl sm:text-3xl lg:text-[28px] font-bold text-left text-[#0071bc]">
              Tipos de síndrome de Down
            </h2>
            <p class="text-base text-left text-[#4a4a48] leading-relaxed">
              Existen tres formas principales de esta variación cromosómica. En todos los casos el impacto y las
              necesidades de apoyo son individuales.
            </p>
          </div>

          <!-- 3 Types Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <!-- Type 1: Trisomía 21 libre -->
            <article
              class="flex flex-col justify-between gap-5 p-8 md:p-9 rounded-3xl bg-white border-l-[6px] border-[#0071bc] shadow-sm hover:shadow-md transition-shadow">
              <div class="flex justify-between items-center w-full">
                <span class="text-sm font-bold uppercase text-[#4a4a48]">
                  Trisomía 21 libre
                </span>
                <span class="text-3xl sm:text-4xl font-black text-[#0071bc]">
                  95%
                </span>
              </div>
              <p class="text-base text-left text-[#4a4a48] leading-relaxed">
                Cada célula del cuerpo tiene tres copias completas del cromosoma 21 en lugar de dos.
              </p>
            </article>

            <!-- Type 2: Translocación -->
            <article
              class="flex flex-col justify-between gap-5 p-8 md:p-9 rounded-3xl bg-white border-l-[6px] border-[#d9b421] shadow-sm hover:shadow-md transition-shadow">
              <div class="flex justify-between items-center w-full">
                <span class="text-sm font-bold uppercase text-[#4a4a48]">
                  Translocación
                </span>
                <span class="text-3xl sm:text-4xl font-black text-[#d9b421]">
                  3%
                </span>
              </div>
              <p class="text-base text-left text-[#4a4a48] leading-relaxed">
                Hay una copia extra del cromosoma 21, pero unida (translocada) a otro cromosoma. Es el único tipo que a
                veces puede heredarse, por lo que conviene que la familia consulte a un genetista.
              </p>
            </article>

            <!-- Type 3: Mosaicismo -->
            <article
              class="flex flex-col justify-between gap-5 p-8 md:p-9 rounded-3xl bg-white border-l-[6px] border-[#e8734a] shadow-sm hover:shadow-md transition-shadow">
              <div class="flex justify-between items-center w-full">
                <span class="text-sm font-bold uppercase text-[#4a4a48]">
                  Mosaicismo
                </span>
                <span class="text-3xl sm:text-4xl font-black text-[#e8734a]">
                  2%
                </span>
              </div>
              <p class="text-base text-left text-[#4a4a48] leading-relaxed">
                Sólo algunas células tienen la copia extra del cromosoma 21, mientras que otras tienen las dos copias
                habituales.
              </p>
            </article>
          </div>

          <span class="text-xs italic text-left text-[#9a9a97]">
            Fuente: CDC (2024). Down España reporta cifras muy cercanas (95% / 3,5% / 1,5%).
          </span>
        </div>
      </div>
    </section>

    <!-- SECTION: Diagnóstico y primeros pasos -->
    <section aria-labelledby="diagnosis-title"
      class="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[100px]">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div class="flex flex-col items-center text-center gap-5 max-w-4xl">
          <h2 id="diagnosis-title"
            class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-center text-[#0071bc] leading-tight">
            Diagnóstico y primeros pasos
          </h2>
          <p class="text-base sm:text-lg text-center text-[#4a4a48] leading-relaxed">
            El síndrome de Down puede detectarse durante el embarazo mediante pruebas de cribado (como el análisis de
            ADN fetal en sangre materna o la ecografía) y confirmarse con un estudio de cariotipo antes o después del
            nacimiento. Recibir el diagnóstico puede remover muchas emociones. Todas son válidas, y no tienes que
            resolverlo todo en un solo día.
          </p>
          <p class="text-base sm:text-lg text-center text-[#4a4a48] leading-relaxed">
            El primer paso más importante no es médico: es acompañarte. En el Instituto Down de Chihuahua te orientamos
            desde el inicio, resolvemos tus dudas y te presentamos a otras familias que ya recorrieron este camino. A
            partir de ahí, iniciamos juntos la estimulación temprana, que da los mejores resultados cuando empieza en
            los primeros meses de vida.
          </p>
        </div>

        <!-- WhatsApp CTA -->
        <a href="https://wa.me/526144123456" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-4 pl-7 pr-5 py-4 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          aria-label="Contactar un orientador en WhatsApp">
          <span>Contactar un orientador en WhatsApp</span>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-white text-[#25d366] shrink-0">
            <i class="pi pi-whatsapp text-xl"></i>
          </div>
        </a>

        <!-- Timeline Steps (3 Steps) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full max-w-5xl px-4 py-5 items-start">
          <!-- Step 1 -->
          <div class="flex flex-col items-center text-center gap-4">
            <div
              class="flex justify-center items-center w-14 h-14 rounded-full bg-[#0071bc] text-white text-xl font-bold shadow-md">
              1
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-bold text-[#1d1d1b]">
                Habla con nosotros
              </h3>
              <p class="text-sm text-[#4a4a48] leading-relaxed">
                Una llamada o un mensaje bastan para empezar.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col items-center text-center gap-4">
            <div
              class="flex justify-center items-center w-14 h-14 rounded-full bg-[#d9b421] text-white text-xl font-bold shadow-md">
              2
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-bold text-[#1d1d1b]">
                Agenda una visita
              </h3>
              <p class="text-sm text-[#4a4a48] leading-relaxed">
                Conoce el Instituto y a nuestro equipo de especialistas.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center text-center gap-4">
            <div
              class="flex justify-center items-center w-14 h-14 rounded-full bg-[#0071bc] text-white text-xl font-bold shadow-md">
              3
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-bold text-[#1d1d1b]">
                Estimulación temprana
              </h3>
              <p class="text-sm text-[#4a4a48] leading-relaxed">
                Cuanto antes, mejor para el desarrollo integral del bebé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: Evolución de la esperanza de vida & Cada caso es único -->
    <section aria-labelledby="life-expectancy-title"
      class="bg-[#f4f6f8] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[100px]">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <!-- Chart Column -->
        <div class="flex flex-col gap-6 p-7 md:p-9 rounded-[28px] bg-white w-full lg:w-[520px] shrink-0 shadow-sm">
          <h3 class="text-xl md:text-[22px] font-bold text-left text-[#0071bc]">
            Evolución de la esperanza de vida
          </h3>
          <p class="text-sm text-left text-[#4a4a48]">
            El impacto del acompañamiento profesional y la inclusión médica en la longevidad.
          </p>

          <!-- Simple Bar Chart -->
          <div class="flex justify-around items-end h-[180px] pt-5 border-b border-slate-100 gap-8">
            <!-- 1960 -->
            <div class="flex flex-col items-center gap-3 flex-1">
              <span class="text-base font-bold text-[#4a4a48]">~10 años</span>
              <div class="w-full h-9 rounded-xl bg-[#d9b421]"></div>
              <span class="text-sm font-bold text-[#4a4a48]">1960</span>
            </div>

            <!-- Actualidad -->
            <div class="flex flex-col items-center gap-3 flex-1">
              <span class="text-xl font-bold text-[#0071bc]">~60 años</span>
              <div class="w-full h-[110px] rounded-xl bg-[#0071bc]"></div>
              <span class="text-sm font-bold text-[#0071bc]">Actualidad</span>
            </div>
          </div>

          <span class="text-xs italic text-left text-[#9a9a97]">
            Fuente: Secretaría de Salud de México / Instituto Nacional de Pediatría. Down España (2024) reporta una
            longevidad media de ~60-63 años.
          </span>
        </div>

        <!-- Text Column -->
        <div class="flex flex-col items-start flex-1 gap-6">
          <h2 id="life-expectancy-title" class="text-3xl sm:text-4xl lg:text-[40px] text-left leading-tight">
            <span class="font-bold text-[#0071bc]">Cada caso es </span>
            <span class="font-black italic text-[#d9b421]">único</span>
          </h2>

          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Ninguna persona con síndrome de Down es igual a otra. Comparten una condición genética, pero no una
            personalidad ni un destino. Con el acompañamiento adecuado, las personas con síndrome de Down aprenden a
            leer y escribir, van a la escuela, hacen amigos, practican deportes, trabajan y construyen una vida adulta
            plena.
          </p>

          <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
            Hoy, gracias a la atención médica oportuna y a la inclusión, la esperanza de vida ha crecido enormemente: de
            apenas 10 años en 1960 a cerca de 60 años en la actualidad, e incluso más con el cuidado adecuado. Vivir más
            y vivir mejor: ese es el cambio de época que celebramos y por el que seguimos trabajando.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION: CTA BANNER FINAL -->
    <section aria-labelledby="cta-title"
      class="bg-[#0071bc] text-white px-4 sm:px-6 md:px-12 lg:px-[120px] py-16 md:py-20 lg:py-[110px] overflow-hidden">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 md:gap-9">
        <h2 id="cta-title"
          class="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-center text-white leading-tight md:leading-snug">
          Cada paso cuenta para hacer posible un futuro autónomo y pleno. Conoce nuestros programas de estimulación,
          educación y apoyo familiar.
        </h2>

        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-5">
          <Button label="Conocer programas" icon="pi pi-arrow-right" iconPos="right"
            class="!bg-[#d9b421] !hover:bg-[#c4a11c] !text-[#0071bc] !font-bold !px-6 !py-3.5 !rounded-full !border-none flex items-center gap-3 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            aria-label="Conocer programas del instituto" @click="$router.push(useLocalePath()('/programas'))" />

          <Button label="¿Acabas de recibir la noticia?" icon="pi pi-arrow-right" iconPos="right" outlined
            class="!border-2 !border-white !text-white !hover:bg-white/10 !font-bold !px-6 !py-3.5 !rounded-full flex items-center gap-3 transition-all duration-300"
            aria-label="Orientación para familias con diagnóstico reciente"
            @click="$router.push(useLocalePath()('contact'))" />
        </div>
      </div>
    </section>
  </main>
</template>
