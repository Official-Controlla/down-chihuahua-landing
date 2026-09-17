<script lang="ts" setup>
import Button from "primevue/button";

useSeoMeta({
  title: "Contacto y Colaboración | Instituto Down de Chihuahua A.C.",
  description: "¿Tienes dudas, quieres inscribir a un familiar o conocernos? Contáctanos por WhatsApp (614 533 40 10), visítanos en Av. Mirador 4307 en Chihuahua o súmate como voluntario.",
  keywords: "Contacto Instituto Down Chihuahua, dirección Instituto Down, teléfono instituto down, voluntariado síndrome de down, donaciones chihuahua",
  ogTitle: "Contacto y Colaboración | Instituto Down de Chihuahua A.C.",
  ogDescription: "Estamos listos para escucharte. Conoce nuestras vías de contacto, ubicación, voluntariado y donaciones en Chihuahua.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Contacto y Colaboración | Instituto Down de Chihuahua A.C.",
    description: "Vías de contacto, dirección, voluntariado y datos bancarios para donaciones del Instituto Down de Chihuahua A.C.",
  }),
  defineLocalBusiness({
    "@type": "EducationalOrganization",
    name: "Instituto Down de Chihuahua A.C.",
    telephone: "+52-614-533-4010",
    email: "instituto@downchihuahua.org",
    address: {
      streetAddress: "Av. Mirador 4307, Campestre I Etapa, Campestre Residencial",
      addressLocality: "Chihuahua",
      addressRegion: "Chihuahua",
      postalCode: "31123",
      addressCountry: "MX",
    },
    geo: {
      latitude: 28.6625774,
      longitude: -106.1260559,
    },
  }),
]);

const localePath = useLocalePath();
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden">
    <!-- HERO SECTION: Contacto y Colaboración -->
    <section aria-labelledby="hero-contacto-title"
      class="bg-[#fff5e0] px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <!-- Left Content -->
        <div class="flex flex-col items-start gap-6 lg:w-1/2">
          <div
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#d9b421] shadow-xs">
            <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0071bc]">
              Estamos listos para escucharte
            </span>
          </div>

          <h1 id="hero-contacto-title"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-[#0071bc] leading-tight">
            Contacto y Colaboración
          </h1>

          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed max-w-2xl">
            ¿Tienes dudas, quieres inscribir a un familiar o simplemente conocernos? Escríbenos por WhatsApp, visítanos
            o súmate a nuestro propósito de vida.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer">
              <Button label="WhatsApp" icon="pi pi-whatsapp" iconPos="right"
                class="!rounded-full !bg-[#25d366] !border-none !text-white font-bold !px-6 !py-3 hover:!bg-[#20bd5a] transition-all shadow-md" />
            </a>
            <NuxtLink :to="localePath('/donaciones')">
              <Button label="Colaborar" icon="pi pi-arrow-right" iconPos="right"
                class="!rounded-full !bg-transparent !border-2 !border-[#0071bc] !text-[#0071bc] font-bold !px-6 !py-3 hover:!bg-[#0071bc]/10 transition-all" />
            </NuxtLink>
          </div>

          <!-- Highlight Banner Card -->
          <div class="flex items-center gap-4.5 p-5 sm:p-6 rounded-3xl bg-white w-full max-w-xl mt-4"
            style="box-shadow: 0px 12px 32px 0 rgba(0,113,188,0.08);">
            <div class="w-12 h-12 rounded-xl bg-[#d9b421] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6">
                <path
                  d="M2.96821 6.38385C2.33762 7.30078 2.00002 8.38741 2 9.50022C2 11.8002 3.50012 13.5003 5.00023 15.0003L10.5087 20.3323C10.6977 20.544 10.9296 20.7129 11.189 20.828C11.4484 20.9432 11.7293 21.0018 12.0131 21C12.2968 20.9982 12.577 20.936 12.8349 20.8176C13.0928 20.6992 13.3225 20.5273 13.5089 20.3133L19.0013 15.0003C20.5014 13.5003 22.0015 11.7902 22.0015 9.50022C22.0069 8.38496 21.6724 7.29454 21.0426 6.37409C20.4128 5.45363 19.5176 4.74679 18.4761 4.34765C17.4347 3.94851 16.2963 3.876 15.2126 4.13977C14.129 4.40353 13.1513 4.99107 12.4098 5.82418C12.3574 5.88019 12.2941 5.92485 12.2237 5.95538C12.1533 5.98591 12.0775 6.00167 12.0008 6.00167C11.9241 6.00167 11.8482 5.98591 11.7778 5.95538C11.7075 5.92485 11.6441 5.88019 11.5917 5.82418C10.8479 4.99645 9.87047 4.41381 8.78853 4.15321C7.7066 3.89261 6.57105 3.9663 5.53188 4.36457C4.49271 4.76283 3.5988 5.46692 2.96821 6.38385Z"
                  stroke="white" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <p class="text-base font-bold text-[#1d1d1b] leading-snug">
              Tu aportación y cercanía cambian el destino de decenas de familias en Chihuahua.
            </p>
          </div>
        </div>

        <!-- Right Visual Container -->
        <div class="flex justify-center items-center lg:w-1/2 w-full">
          <div class="relative w-full max-w-[440px] flex justify-center py-4">
            <!-- Arched Image Frame -->
            <div
              class="w-full max-w-[380px] sm:max-w-[420px] h-[400px] sm:h-[500px] overflow-hidden rounded-tl-[180px] sm:rounded-tl-[210px] rounded-tr-[180px] sm:rounded-tr-[210px] rounded-bl-3xl rounded-br-3xl bg-[#f4f6f8] border border-[#9a9a97] shadow-xl relative">
              <img src="@/assets/images/contacto-hero.png"
                alt="Atención y orientación directa en Instituto Down de Chihuahua"
                class="w-full h-full object-cover" />
            </div>

            <!-- Floating Badge -->
            <div
              class="absolute left-2 sm:left-4 bottom-6 sm:bottom-10 w-[180px] sm:w-[200px] p-5 rounded-[20px] bg-white z-10"
              style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.1);">
              <span class="block text-[15px] font-bold text-[#0071bc] leading-snug">
                Atención y Orientación Directa
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

    <!-- SECTION: Visítanos - Atención Directa y Ubicación -->
    <section aria-labelledby="ubicacion-title" class="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <!-- Left: Contact Details -->
        <div class="flex flex-col items-start gap-8 lg:w-1/2 w-full">
          <div class="flex flex-col gap-4">
            <div
              class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#d9b421] shadow-xs self-start">
              <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0071bc]">
                Visítanos
              </span>
            </div>

            <h2 id="ubicacion-title" class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0071bc] leading-tight">
              Atención Directa y Ubicación
            </h2>

            <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
              Nuestras puertas están siempre abiertas. Ven a conocer las instalaciones o contáctanos por los canales
              directos.
            </p>
          </div>

          <!-- Contact items list -->
          <div class="flex flex-col gap-6 w-full">
            <!-- Item 1: WhatsApp -->
            <a href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-4 group">
              <div
                class="w-12 h-12 rounded-xl bg-[#d9b421] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <i class="pi pi-whatsapp text-white text-xl"></i>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold uppercase text-[#4a4a48]">WhatsApp de Atención</span>
                <span class="text-base font-bold text-[#1d1d1b] group-hover:text-[#0071bc] transition-colors">614 533 40 10</span>
              </div>
            </a>

            <!-- Item 2: Address -->
            <a href="https://maps.google.com/?q=Av.+Mirador+4307,+Campestre+Residencial,+Chihuahua,+Chih."
              target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 group">
              <div
                class="w-12 h-12 rounded-xl bg-[#0071bc] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <i class="pi pi-map-marker text-white text-xl"></i>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold uppercase text-[#4a4a48]">Dirección Oficial</span>
                <span class="text-base font-bold text-[#1d1d1b] group-hover:text-[#0071bc] transition-colors">
                  Av. Mirador 4307, Campestre I Etapa, Campestre Residencial, 31123 Chihuahua, Chih.
                </span>
              </div>
            </a>

            <!-- Item 3: Email -->
            <a href="mailto:instituto@downchihuahua.org" class="flex items-center gap-4 group">
              <div
                class="w-12 h-12 rounded-xl bg-[#0071bc] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <i class="pi pi-envelope text-white text-xl"></i>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold uppercase text-[#4a4a48]">Correo Electrónico</span>
                <span
                  class="text-base font-bold text-[#1d1d1b] group-hover:text-[#0071bc] transition-colors">instituto@downchihuahua.org</span>
              </div>
            </a>

            <!-- Item 4: Schedule -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-[#e8734a] flex items-center justify-center shrink-0">
                <i class="pi pi-clock text-white text-xl"></i>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold uppercase text-[#4a4a48]">Horario de Oficina</span>
                <span class="text-base font-bold text-[#1d1d1b]">Lunes a Viernes: 8:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Map Image Container -->
        <div
          class="w-full lg:w-1/2 h-[400px] sm:h-[520px] rounded-[32px] overflow-hidden bg-[#f4f6f8] border-4 border-[#f4f6f8] shadow-lg relative group">
          <img src="@/assets/images/mapa-ubicacion.png"
            alt="Mapa de ubicación Instituto Down de Chihuahua Av. Mirador 4307"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <a href="https://maps.google.com/?q=Av.+Mirador+4307,+Campestre+Residencial,+Chihuahua,+Chih." target="_blank"
            rel="noopener noreferrer"
            class="absolute bottom-6 right-6 inline-flex items-center gap-2 bg-white text-[#0071bc] font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-[#0071bc] hover:text-white transition-all">
            <span>Abrir en Google Maps</span>
            <i class="pi pi-external-link"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION: Tú puedes ser el cambio (Apoyo e Impacto Social) -->
    <section aria-labelledby="apoyo-impacto-title" class="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div class="flex flex-col items-center text-center gap-4 max-w-3xl">
          <div
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#d9b421] shadow-xs">
            <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0071bc]">
              Apoyo e Impacto Social
            </span>
          </div>
          <h2 id="apoyo-impacto-title" class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0071bc]">
            Tú puedes ser el cambio
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
            Hay muchas formas de sumarte. Cada aporte sostiene 40 años de historia y hace posible el futuro de decenas
            de familias.
          </p>
        </div>

        <!-- 4 Grid Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <!-- Card 1: Voluntariado -->
          <div
            class="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all h-full"
            style="box-shadow: 0px 8px 16px 0 rgba(29,29,27,0.03);">
            <div class="flex flex-col gap-6">
              <div class="w-14 h-14 rounded-2xl bg-[#0071bc] flex items-center justify-center shrink-0">
                <i class="pi pi-users text-white text-2xl"></i>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-xl font-bold text-[#0071bc]">Voluntariado</h3>
                <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                  Suma tu tiempo y talentos. Acompaña a nuestros alumnos en dinámicas terapéuticas, artísticas y eventos
                  de inclusión.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2: Donativos en Especie -->
          <div
            class="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all h-full"
            style="box-shadow: 0px 8px 16px 0 rgba(29,29,27,0.03);">
            <div class="flex flex-col gap-6">
              <div class="w-14 h-14 rounded-2xl bg-[#d9b421] flex items-center justify-center shrink-0">
                <i class="pi pi-box text-white text-2xl"></i>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-xl font-bold text-[#0071bc]">Donativos en Especie</h3>
                <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                  Materiales didácticos, escolares, médicos y recursos de mantenimiento directo que fortalecen el día a
                  día del instituto.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Alianzas Empresariales -->
          <div
            class="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all h-full"
            style="box-shadow: 0px 8px 16px 0 rgba(29,29,27,0.03);">
            <div class="flex flex-col gap-6">
              <div class="w-14 h-14 rounded-2xl bg-[#e8734a] flex items-center justify-center shrink-0">
                <i class="pi pi-building text-white text-2xl"></i>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-xl font-bold text-[#0071bc]">Alianzas Empresariales</h3>
                <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                  Para corporativos y maquiladoras comprometidas que desean destinar fondos, patrocinios o materiales
                  reciclables.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Eventos y Campañas -->
          <div
            class="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all h-full"
            style="box-shadow: 0px 8px 16px 0 rgba(29,29,27,0.03);">
            <div class="flex flex-col gap-6">
              <div class="w-14 h-14 rounded-2xl bg-[#0071bc] flex items-center justify-center shrink-0">
                <i class="pi pi-calendar text-white text-2xl"></i>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-xl font-bold text-[#0071bc]">Eventos y Campañas</h3>
                <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                  Participa activamente en nuestras colectas, rifas anuales y campamentos de sensibilización
                  comunitaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: Blue CTA & Bank Deposit Details -->
    <section aria-labelledby="cta-banco-title" class="bg-[#0071bc] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-10">
        <h2 id="cta-banco-title" class="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-relaxed">
          Tu aportación económica directa sostiene nuestro programa de becas. ¡Haz un donativo!
        </h2>

        <!-- White Card with Bank Details -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-2xl flex flex-col gap-5 text-left shadow-xl">
          <h3 class="text-lg font-bold text-center text-[#0071bc]">
            Datos para Depósito o Transferencia
          </h3>
          <hr class="border-t border-[#f4f6f8]" />

          <div class="flex flex-col gap-3 text-sm">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
              <span class="font-bold text-[#4a4a48]">Beneficiario:</span>
              <span class="font-bold text-[#1d1d1b]">Instituto Down de Chihuahua A.C.</span>
            </div>
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
              <span class="font-bold text-[#4a4a48]">Banco:</span>
              <span class="font-bold text-[#1d1d1b]">Banamex</span>
            </div>
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
              <span class="font-bold text-[#4a4a48]">Cuenta:</span>
              <span class="font-bold text-[#1d1d1b]">1234567 / Suc. 700</span>
            </div>
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
              <span class="font-bold text-[#4a4a48]">CLABE Interbancaria:</span>
              <span class="font-bold text-[#1d1d1b]">002150070012345678</span>
            </div>
          </div>

          <p class="text-xs text-center text-[#4a4a48] mt-2">
            *Como donataria autorizada por el SAT, emitimos recibos 100% deducibles de impuestos.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <a href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer">
            <Button label="Reportar Donativo" icon="pi pi-arrow-right" iconPos="right"
              class="!rounded-full !bg-[#d9b421] !border-none !text-[#0071bc] font-bold !px-8 !py-4 hover:!bg-[#c4a21d] transition-all shadow-md" />
          </a>
          <a href="mailto:instituto@downchihuahua.org">
            <Button label="Escríbenos para dudas" icon="pi pi-envelope" iconPos="right"
              class="!rounded-full !bg-transparent !border-2 !border-white !text-white font-bold !px-8 !py-4 hover:!bg-white/10 transition-all" />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
