<script lang="ts" setup>
import Button from "primevue/button";

// Imports de Imágenes
import heroContacto from "@/assets/images/v2/hero_contacto.jpg";
import mapaUbicacion from "@/assets/images/mapa-ubicacion.png";

useSeoMeta({
  title: "Contacto y Colaboración | Instituto Down de Chihuahua A.C.",
  description:
    "¿Tienes dudas, quieres inscribir a un familiar o conocernos? Contáctanos por WhatsApp, visítanos en Av. Mirador 4307 en Chihuahua o súmate como voluntario.",
  keywords:
    "Contacto Instituto Down Chihuahua, dirección Instituto Down, teléfono instituto down, voluntariado síndrome de down, donaciones chihuahua",
  ogTitle: "Contacto y Colaboración | Instituto Down de Chihuahua A.C.",
  ogDescription:
    "Estamos listos para escucharte. Conoce nuestras vías de contacto, ubicación, voluntariado y donaciones en Chihuahua.",
  ogImage: heroContacto,
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Contacto y Colaboración | Instituto Down de Chihuahua A.C.",
    description:
      "Vías de contacto, dirección, voluntariado y datos bancarios para donaciones del Instituto Down de Chihuahua A.C.",
  }),
  defineLocalBusiness({
    "@type": "EducationalOrganization",
    name: "Instituto Down de Chihuahua A.C.",
    telephone: "+52-614-416-0521",
    email: "instituto@downchihuahua.org",
    address: {
      streetAddress:
        "Av. Mirador 4307, Campestre I Etapa, Campestre Residencial",
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

// Objeto de imágenes configurable para reemplazo manual fácil
const images = {
  heroBg: heroContacto,
  mapa: mapaUbicacion,
};
</script>

<template>
  <main class="flex flex-col flex-1 bg-white font-sans overflow-x-hidden">
    <!-- 1. HERO SECTION: Contacto y Colaboración -->
    <section
      aria-labelledby="hero-contacto-title"
      class="relative px-4 sm:px-6 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 overflow-hidden bg-[#0075c3] min-h-[620px] flex items-center justify-center text-center text-white"
    >
      <!-- Capa de Imagen de Fondo Hero con Transparencia -->
      <div class="absolute inset-0 z-0">
        <img
          :src="images.heroBg"
          alt="Contacto y Colaboración Instituto Down de Chihuahua"
          class="w-full h-full object-cover object-center opacity-25 mix-blend-multiply"
        />
        <div class="absolute inset-0 bg-[#0075c3]/85 mix-blend-multiply"></div>
      </div>

      <!-- Contenido Hero -->
      <div
        class="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-9 text-center"
      >
        <div
          data-scroll
          data-scroll-class="is-inview"
          class="flex flex-col items-center gap-6 max-w-4xl reveal-fade-up"
        >
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 md:px-[18px] py-1.5 rounded-full border-[1.5px] border-[#fc0] bg-white/10 backdrop-blur-xs reveal-fade-up stagger-1"
          >
            <span
              class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#fc0]"
            >
              Estamos listos para escucharte
            </span>
          </div>

          <h1
            id="hero-contacto-title"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-white leading-tight tracking-tight reveal-fade-up stagger-2"
          >
            Contacto y Colaboración
          </h1>

          <p
            class="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-normal max-w-3xl reveal-fade-up stagger-3"
          >
            ¿Tienes dudas, quieres inscribir a un familiar o simplemente conocernos? Escríbenos
            por WhatsApp, visítanos o súmate a nuestro propósito de vida.
          </p>

          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto pt-2 reveal-fade-up stagger-4"
          >
            <a
              href="https://wa.me/526144160521"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto"
            >
              <Button
                label="WhatsApp"
                icon="pi pi-whatsapp"
                iconPos="right"
                class="!w-full sm:!w-auto !rounded-full !bg-[#25d366] !border-none !text-white font-bold !px-7 !py-3.5 hover:!bg-[#20bd5a] transition-all shadow-md"
              />
            </a>
            <a href="#banco-info" class="w-full sm:w-auto">
              <Button
                label="Colaborar"
                icon="pi pi-arrow-right"
                iconPos="right"
                class="!w-full sm:!w-auto !rounded-full !bg-transparent !border-2 !border-white !text-white font-bold !px-7 !py-3.5 hover:!bg-white/10 transition-all"
              />
            </a>
          </div>

          <!-- Banner Destacado dentro del Hero -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 p-5 sm:p-6 rounded-3xl bg-white w-full max-w-3xl mt-4 reveal-fade-up stagger-4 shadow-lg"
            style="box-shadow: 0px 12px 32px 0 rgba(0, 113, 188, 0.08);"
          >
            <div
              class="w-12 h-12 rounded-xl bg-[#fc0] text-white flex items-center justify-center shrink-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
              >
                <path
                  d="M2.96821 6.38385C2.33762 7.30078 2.00002 8.38741 2 9.50022C2 11.8002 3.50012 13.5003 5.00023 15.0003L10.5087 20.3323C10.6977 20.544 10.9296 20.7129 11.189 20.828C11.4484 20.9432 11.7293 21.0018 12.0131 21C12.2968 20.9982 12.577 20.936 12.8349 20.8176C13.0928 20.6992 13.3225 20.5273 13.5089 20.3133L19.0013 15.0003C20.5014 13.5003 22.0015 11.7902 22.0015 9.50022C22.0069 8.38496 21.6724 7.29454 21.0426 6.37409C20.4128 5.45363 19.5176 4.74679 18.4761 4.34765C17.4347 3.94851 16.2963 3.876 15.2126 4.13977C14.129 4.40353 13.1513 4.99107 12.4098 5.82418C12.3574 5.88019 12.2941 5.92485 12.2237 5.95538C12.1533 5.98591 12.0775 6.00167 12.0008 6.00167C11.9241 6.00167 11.8482 5.98591 11.7778 5.95538C11.7075 5.92485 11.6441 5.88019 11.5917 5.82418C10.8479 4.99645 9.87047 4.41381 8.78853 4.15321C7.7066 3.89261 6.57105 3.9663 5.53188 4.36457C4.49271 4.76283 3.5988 5.46692 2.96821 6.38385Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <p class="text-base font-bold text-center sm:text-left text-[#1d1d1b]">
              Tu aportación y cercanía cambian el destino de decenas de familias en Chihuahua.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. SECTION: Visítanos - Atención Directa y Ubicación -->
    <section
      aria-labelledby="ubicacion-title"
      class="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full"
    >
      <div
        class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
      >
        <!-- Detalles de Contacto -->
        <div class="flex flex-col items-start gap-8 lg:w-1/2 w-full">
          <div class="flex flex-col gap-4 reveal-fade-up">
            <div
              class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#fc0] shadow-xs self-start"
            >
              <span
                class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0075c3]"
              >
                Visítanos
              </span>
            </div>

            <h2
              id="ubicacion-title"
              class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0075c3] leading-tight"
            >
              Atención Directa y Ubicación
            </h2>

            <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
              Nuestras puertas están siempre abiertas. Ven a conocer las instalaciones o
              contáctanos por los canales directos.
            </p>
          </div>

          <!-- Lista de canales de contacto -->
          <div class="flex flex-col gap-6 w-full">
            <!-- 1. WhatsApp de Atención -->
            <a
              href="https://wa.me/526144160521"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 group reveal-fade-up stagger-1"
            >
              <div
                class="w-12 h-12 rounded-xl bg-[#fc0] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
              >
                <i class="pi pi-whatsapp text-white text-xl"></i>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold uppercase text-[#4a4a48]"
                  >WhatsApp de Atención</span
                >
                <span
                  class="text-base font-bold text-[#1d1d1b] group-hover:text-[#0075c3] transition-colors"
                  >(614) 416 0521</span
                >
              </div>
            </a>

            <!-- 2. Dirección Oficial -->
            <a
              href="https://maps.google.com/?q=Av.+Mirador+4307,+Campestre+Residencial,+Chihuahua,+Chih."
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 group reveal-fade-up stagger-2"
            >
              <div
                class="w-12 h-12 rounded-xl bg-[#0075c3] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
              >
                <i class="pi pi-map-marker text-white text-xl"></i>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold uppercase text-[#4a4a48]"
                  >Dirección Oficial</span
                >
                <span
                  class="text-base font-bold text-[#1d1d1b] group-hover:text-[#0075c3] transition-colors"
                >
                  Av. Mirador 4307, Campestre I Etapa, Campestre Residencial, 31123
                  Chihuahua, Chih.
                </span>
              </div>
            </a>

            <!-- 3. Correo Electrónico -->
            <a
              href="mailto:instituto@downchihuahua.org"
              class="flex items-center gap-4 group reveal-fade-up stagger-3"
            >
              <div
                class="w-12 h-12 rounded-xl bg-[#0075c3] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
              >
                <i class="pi pi-envelope text-white text-xl"></i>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold uppercase text-[#4a4a48]"
                  >Correo Electrónico</span
                >
                <span
                  class="text-base font-bold text-[#1d1d1b] group-hover:text-[#0075c3] transition-colors"
                  >instituto@downchihuahua.org</span
                >
              </div>
            </a>

            <!-- 4. Horario de Oficina -->
            <div class="flex items-center gap-4 reveal-fade-up stagger-4">
              <div
                class="w-12 h-12 rounded-xl bg-[#e8734a] text-white flex items-center justify-center shrink-0"
              >
                <i class="pi pi-clock text-white text-xl"></i>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-xs font-bold uppercase text-[#4a4a48]"
                  >Horario de Oficina</span
                >
                <span class="text-base font-bold text-[#1d1d1b]"
                  >Lunes a Viernes: 8:00 AM - 4:00 PM</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Contenedor del Mapa -->
        <div
          class="w-full lg:w-1/2 h-[400px] sm:h-[520px] rounded-[32px] overflow-hidden bg-[#f4f6f8] border-4 border-[#f4f6f8] shadow-lg relative group reveal-scale"
        >
          <img
            :src="images.mapa"
            alt="Mapa de ubicación Instituto Down de Chihuahua Av. Mirador 4307"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <a
            href="https://maps.google.com/?q=Av.+Mirador+4307,+Campestre+Residencial,+Chihuahua,+Chih."
            target="_blank"
            rel="noopener noreferrer"
            class="absolute bottom-6 right-6 inline-flex items-center gap-2 bg-white text-[#0075c3] font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-[#0075c3] hover:text-white transition-all"
          >
            <span>Abrir en Google Maps</span>
            <i class="pi pi-external-link"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- 3. SECTION: Tú puedes ser el cambio (Apoyo e Impacto Social) -->
    <section
      aria-labelledby="apoyo-impacto-title"
      class="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full"
    >
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div
          data-scroll
          data-scroll-class="is-inview"
          class="flex flex-col items-center text-center gap-4 max-w-3xl reveal-fade-up"
        >
          <div
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#fc0] shadow-xs"
          >
            <span
              class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0075c3]"
            >
              Apoyo e Impacto Social
            </span>
          </div>
          <h2
            id="apoyo-impacto-title"
            class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0075c3]"
          >
            Tú puedes ser el cambio
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
            Hay muchas formas de sumarte. Cada aporte sostiene 40 años de historia y
            hace posible el futuro de decenas de familias.
          </p>
        </div>

        <!-- 4 Grid Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <!-- Card 1: Voluntariado -->
          <div
            data-scroll
            data-scroll-class="is-inview"
            class="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all h-full reveal-fade-up stagger-1 border border-slate-100"
            style="box-shadow: 0px 8px 16px 0 rgba(29,29,27,0.03);"
          >
            <div class="flex flex-col gap-6">
              <div
                class="w-14 h-14 rounded-2xl bg-[#0075c3] flex items-center justify-center shrink-0"
              >
                <i class="pi pi-users text-white text-2xl"></i>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-xl font-bold text-[#0075c3]">Voluntariado</h3>
                <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                  Suma tu tiempo y talentos. Acompaña a nuestros alumnos en dinámicas
                  terapéuticas, artísticas y eventos de inclusión.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2: Donativos en Especie -->
          <div
            data-scroll
            data-scroll-class="is-inview"
            class="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all h-full reveal-fade-up stagger-2 border border-slate-100"
            style="box-shadow: 0px 8px 16px 0 rgba(29,29,27,0.03);"
          >
            <div class="flex flex-col gap-6">
              <div
                class="w-14 h-14 rounded-2xl bg-[#fc0] flex items-center justify-center shrink-0 text-[#0075c3]"
              >
                <i class="pi pi-box text-[#0075c3] text-2xl"></i>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-xl font-bold text-[#0075c3]">Donativos en Especie</h3>
                <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                  Materiales didácticos, escolares, médicos y recursos de mantenimiento
                  directo que fortalecen el día a día del instituto.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Alianzas Empresariales -->
          <div
            data-scroll
            data-scroll-class="is-inview"
            class="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all h-full reveal-fade-up stagger-3 border border-slate-100"
            style="box-shadow: 0px 8px 16px 0 rgba(29,29,27,0.03);"
          >
            <div class="flex flex-col gap-6">
              <div
                class="w-14 h-14 rounded-2xl bg-[#e8734a] flex items-center justify-center shrink-0"
              >
                <i class="pi pi-building text-white text-2xl"></i>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-xl font-bold text-[#0075c3]">
                  Alianzas Empresariales
                </h3>
                <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                  Para corporativos y maquiladoras comprometidas que desean destinar
                  fondos, patrocinios o materiales reciclables.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Eventos y Campañas -->
          <div
            data-scroll
            data-scroll-class="is-inview"
            class="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all h-full reveal-fade-up stagger-4 border border-slate-100"
            style="box-shadow: 0px 8px 16px 0 rgba(29,29,27,0.03);"
          >
            <div class="flex flex-col gap-6">
              <div
                class="w-14 h-14 rounded-2xl bg-[#0075c3] flex items-center justify-center shrink-0"
              >
                <i class="pi pi-calendar text-white text-2xl"></i>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-xl font-bold text-[#0075c3]">Eventos y Campañas</h3>
                <p class="text-[15px] text-[#4a4a48] leading-relaxed">
                  Participa activamente en nuestras colectas, rifas anuales y campamentos
                  de sensibilización comunitaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. SECTION: Blue CTA Banner & Datos Bancarios -->
    <section
      id="banco-info"
      aria-labelledby="cta-banco-title"
      class="bg-[#0075c3] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full text-white"
    >
      <div
        data-scroll
        data-scroll-class="is-inview"
        class="max-w-4xl mx-auto flex flex-col items-center text-center gap-10 reveal-fade-up"
      >
        <h2
          id="cta-banco-title"
          class="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-relaxed"
        >
          Tu aportación económica directa sostiene nuestro programa de becas. ¡Haz un donativo!
        </h2>

        <!-- Tarjeta Blanca con Datos de Depósito -->
        <div
          class="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-2xl flex flex-col gap-5 text-left shadow-xl reveal-scale stagger-1"
        >
          <h3 class="text-lg font-bold text-center text-[#0075c3]">
            Datos para Depósito o Transferencia
          </h3>
          <hr class="border-t border-[#f4f6f8]" />

          <div class="flex flex-col gap-3 text-sm">
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1"
            >
              <span class="font-bold text-[#4a4a48]">Beneficiario:</span>
              <span class="font-bold text-[#1d1d1b]"
                >Instituto Down de Chihuahua A.C.</span
              >
            </div>
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1"
            >
              <span class="font-bold text-[#4a4a48]">Banco:</span>
              <span class="font-bold text-[#1d1d1b]">Banamex</span>
            </div>
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1"
            >
              <span class="font-bold text-[#4a4a48]">Cuenta:</span>
              <span class="font-bold text-[#1d1d1b]">1234567 / Suc. 700</span>
            </div>
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1"
            >
              <span class="font-bold text-[#4a4a48]">CLABE Interbancaria:</span>
              <span class="font-bold text-[#1d1d1b]">002150070012345678</span>
            </div>
          </div>

          <p class="text-xs text-center text-[#4a4a48] mt-2">
            *Como donataria autorizada por el SAT, emitimos recibos 100% deducibles de impuestos.
          </p>
        </div>

        <!-- Botones de Acción -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full reveal-fade-up stagger-2"
        >
          <a
            href="https://wa.me/526144160521"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto"
          >
            <Button
              label="Reportar Donativo"
              icon="pi pi-arrow-right"
              iconPos="right"
              class="!w-full sm:!w-auto !rounded-full !bg-[#fc0] !border-none !text-[#0075c3] font-bold !px-8 !py-4 hover:!bg-[#e6b800] transition-all shadow-md"
            />
          </a>
          <a href="mailto:instituto@downchihuahua.org" class="w-full sm:w-auto">
            <Button
              label="Escríbenos para dudas"
              icon="pi pi-envelope"
              iconPos="right"
              class="!w-full sm:!w-auto !rounded-full !bg-transparent !border-2 !border-white !text-white font-bold !px-8 !py-4 hover:!bg-white/10 transition-all"
            />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
