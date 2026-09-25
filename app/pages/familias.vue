<script lang="ts" setup>
import Button from "primevue/button";

useSeoMeta({
  title: "Comunidad y Orientación Familiar | Instituto Down de Chihuahua A.C.",
  description: "Acompañamiento emocional, información práctica, guías para nuevos padres, orientación en trámites y esquema de becas para familias en Chihuahua.",
  keywords: "Familias Síndrome de Down Chihuahua, orientación padres síndrome de down, becas instituto down chihuahua, guias nuevos padres trisomia 21, apoyo emocional chihuahua",
  ogTitle: "Comunidad y Orientación Familiar | Instituto Down de Chihuahua A.C.",
  ogDescription: "Aquí no estás solo. Red de apoyo, recursos, guías y vinculación comunitaria para familias de personas con síndrome de Down en Chihuahua.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Comunidad y Orientación Familiar | Instituto Down de Chihuahua A.C.",
    description: "Red de apoyo integral, recursos y guías de orientación para familias con síndrome de Down en Chihuahua.",
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
    <!-- HERO SECTION: Aquí no estás solo -->
    <section aria-labelledby="hero-familias-title" data-scroll data-scroll-class="is-inview"
      class="bg-[#fff5e0] px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <!-- Left Content -->
        <div class="flex flex-col items-start gap-6 lg:w-1/2 reveal-fade-up">
          <div
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-[1.5px] border-[#d9b421] shadow-xs reveal-fade-up stagger-1">
            <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0071bc]">
              Aquí no estás solo
            </span>
          </div>

          <h1 id="hero-familias-title"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#0071bc] leading-tight reveal-fade-up stagger-2">
            <span class="font-bold">Familias unidas en un camino de </span>
            <span class="font-black italic">amor y desarrollo.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed max-w-2xl reveal-fade-up stagger-3">
            Si tu bebé acaba de nacer o acabas de recibir el diagnóstico, respira: no estás solo. Miles de familias han
            estado justo donde tú estás hoy, y muchas de ellas forman parte de nuestra comunidad. Aquí encontrarás
            información clara, apoyo emocional y personas que entienden lo que sientes porque ya lo vivieron.
          </p>
        </div>

        <!-- Right Visual Container -->
        <div class="flex justify-center items-center lg:w-1/2 w-full reveal-scale">
          <div class="relative w-full max-w-[440px] flex justify-center py-4">
            <!-- Main Arched Image Frame -->
            <div data-scroll data-scroll-speed="0.03"
              class="w-full max-w-[380px] sm:max-w-[420px] h-[400px] sm:h-[500px] overflow-hidden rounded-tl-[180px] sm:rounded-tl-[210px] rounded-tr-[180px] sm:rounded-tr-[210px] rounded-bl-3xl rounded-br-3xl bg-[#f4f6f8] border border-[#9a9a97] shadow-xl relative">
              <img src="@/assets/images/familias-hero.png" alt="Familias unidas en el Instituto Down de Chihuahua"
                class="w-full h-full object-cover" />
            </div>

            <!-- Floating Badge Overlay -->
            <div data-scroll data-scroll-speed="0.06"
              class="absolute left-2 sm:left-4 bottom-6 sm:bottom-10 w-[180px] sm:w-[220px] gap-2 p-4 sm:p-6 rounded-[20px] bg-white z-10"
              style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.1);">
              <span class="block text-2xl sm:text-[28px] font-bold text-[#0071bc]">
                Comunidad
              </span>
              <span class="block text-xs sm:text-[13px] font-bold uppercase text-[#4a4a48] tracking-wider">
                Unida por el amor
              </span>
            </div>

            <!-- Decorative Arc SVG -->
            <div data-scroll data-scroll-speed="-0.03"
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

    <!-- SECTION: Banner & Vinculación al Mundo Exterior -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 w-full flex flex-col gap-16 md:gap-20">
      <!-- Banner Card: ¿Acabas de recibir la noticia? -->
      <div data-scroll data-scroll-class="is-inview" class="w-full reveal-fade-up">
        <FamiliasNuevasCard />
      </div>

      <!-- Block: Vinculación al Mundo Exterior -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <!-- Left Image -->
        <div data-scroll data-scroll-class="is-inview" data-scroll-speed="0.04"
          class="w-full lg:w-[480px] h-[260px] sm:h-[360px] rounded-[32px] border-[12px] border-white overflow-hidden shrink-0 shadow-xl reveal-scale"
          style="filter: drop-shadow(0px 16px 40px rgba(29,29,27,0.09));">
          <img src="@/assets/images/vme-image.png" alt="Vinculación al Mundo Exterior del Instituto Down de Chihuahua"
            class="w-full h-full object-cover" />
        </div>

        <!-- Right Content -->
        <div data-scroll data-scroll-class="is-inview" class="flex flex-col gap-6 lg:w-1/2 reveal-slide-left">
          <h2 class="text-3xl sm:text-4xl lg:text-[40px] text-[#0071bc] leading-tight">
            <span class="font-bold">Vinculacion con </span>
            <span class="font-black italic">la comunidad</span>
          </h2>
          <p class="text-base sm:text-lg text-[#4a4a48] leading-relaxed">
            Nuestro trabajo no termina en las puertas del Instituto. Impulsamos que las personas con síndrome de Down
            participen en la vida de la ciudad: en la escuela, en el trabajo, en el deporte y en la cultura. Tender esos
            puentes con la comunidad, las empresas y las instituciones es parte esencial de lo que hacemos.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION: Recursos y Becas (Apoyo e Información Práctica) -->
    <section aria-labelledby="recursos-title" class="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        <!-- Header -->
        <div data-scroll data-scroll-class="is-inview" class="flex flex-col items-center text-center gap-4 max-w-3xl reveal-fade-up">
          <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#d9b421]">
            Apoyo e Información Práctica
          </span>
          <h2 id="recursos-title" class="text-3xl sm:text-4xl lg:text-[44px] text-[#0071bc]">
            <span class="font-bold">Recursos y </span>
            <span class="font-black italic">Becas</span>
          </h2>
          <p class="text-base sm:text-[17px] text-[#4a4a48] leading-relaxed">
            Reunimos aquí lo que puede ayudarte en el día a día: guías para nuevos padres, orientación sobre trámites y
            derechos, información sobre nuestras cuotas y becas, y contactos útiles. Si no encuentras lo que buscas,
            escríbenos: preferimos que preguntes a que te quedes con la duda.
          </p>
        </div>

        <!-- 2x2 Grid of Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          <!-- Card 1 -->
          <div data-scroll data-scroll-class="is-inview" class="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#f4f6f8] shadow-sm card-hover-subtle reveal-fade-up stagger-1"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.04);">
            <div class="w-14 h-14 rounded-2xl bg-[#0071bc] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.2002 1H7.2002C8.17191 1.00006 9.12788 1.42844 9.85059 2.23145C10.5763 3.0379 10.9999 4.15189 11 5.33301H13C13.0001 4.15189 13.4237 3.0379 14.1494 2.23145C14.8721 1.42844 15.8281 1.00006 16.7998 1H22.7998C22.8168 1 22.8577 1.00666 22.9053 1.05957C22.956 1.11591 22.9999 1.21278 23 1.33301V18.667C22.9999 18.7872 22.956 18.8841 22.9053 18.9404C22.8577 18.9933 22.8168 19 22.7998 19H15.5996C14.3437 19.0001 13.164 19.5558 12.3115 20.5029C12.2012 20.6255 12.0971 20.7531 12 20.8857C11.9029 20.7531 11.7988 20.6255 11.6885 20.5029C10.836 19.5558 9.65627 19.0001 8.40039 19H1.2002C1.18319 19 1.14235 18.9933 1.09473 18.9404C1.04405 18.8841 1.00008 18.7872 1 18.667V1.33301C1.00008 1.21278 1.04405 1.11592 1.09473 1.05957C1.14235 1.00666 1.18319 1 1.2002 1Z"
                  stroke="white" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-bold text-[#0071bc]">
                Guías para nuevos padres
              </h3>
              <p class="text-[15px] text-[#4a4a48]">
                Documentos con consejos y primeros pasos emocionales y médicos.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div data-scroll data-scroll-class="is-inview" class="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#f4f6f8] shadow-sm card-hover-subtle reveal-fade-up stagger-2"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.04);">
            <div class="w-14 h-14 rounded-2xl bg-[#d9b421] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 1H15.001C15.3714 0.99952 15.7354 1.05825 16.0693 1.16895C16.4033 1.27967 16.6943 1.43799 16.9297 1.62695L16.9316 1.62793L22.3135 5.93359L22.3154 5.93555C22.5524 6.12397 22.725 6.33605 22.8369 6.55176C22.9482 6.76624 23.0004 6.98538 23 7.19824V21.5996C23 21.8897 22.8578 22.228 22.4971 22.5166C22.1305 22.8099 21.5937 23 21 23H3C2.40625 23 1.86952 22.8099 1.50293 22.5166C1.14218 22.228 1 21.8897 1 21.5996V2.40039C1 2.11029 1.14218 1.77202 1.50293 1.4834C1.86952 1.19013 2.40625 1 3 1Z"
                  stroke="white" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-bold text-[#0071bc]">
                Trámites y derechos
              </h3>
              <p class="text-[15px] text-[#4a4a48]">
                Orientación legal y administrativa sobre discapacidad.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div data-scroll data-scroll-class="is-inview" class="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#f4f6f8] shadow-sm card-hover-subtle reveal-fade-up stagger-3"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.04);">
            <div class="w-14 h-14 rounded-2xl bg-[#e8734a] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 1C18.2192 1 23 5.31935 23 10.3486C23 13.4237 21.2411 16.2045 18.4316 17.9307L17.834 18.2979L17.9756 18.9854L20.9629 33.4883C20.9594 33.4874 20.956 33.4873 20.9531 33.4863C20.9454 33.4836 20.9414 33.4814 20.9414 33.4814L20.9248 33.4697L20.9082 33.459L13.748 28.8242L13.7461 28.8232L13.5488 28.7061C13.0786 28.451 12.5446 28.3204 12.0078 28.3203C11.3942 28.3203 10.7839 28.4912 10.2686 28.8232L10.2676 28.8242L3.0957 33.4561L3.07812 33.4678L3.06152 33.4795C3.06081 33.4799 3.05742 33.482 3.05078 33.4844C3.04753 33.4855 3.04315 33.4854 3.03906 33.4863L6.02539 18.9854L6.16699 18.2988L5.56934 17.9316C2.75922 16.2056 1 13.4241 1 10.3486C1 5.31935 5.78079 1 12 1Z"
                  stroke="white" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-bold text-[#0071bc]">
                Cuotas y becas
              </h3>
              <p class="text-[15px] text-[#4a4a48]">
                Esquema de apoyos para asegurar la continuidad de tu hijo.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div data-scroll data-scroll-class="is-inview" class="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#f4f6f8] shadow-sm card-hover-subtle reveal-fade-up stagger-4"
            style="box-shadow: 0px 12px 24px 0 rgba(29,29,27,0.04);">
            <div class="w-14 h-14 rounded-2xl bg-[#0071bc] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.40039 1H6C6.3713 1 6.72768 1.1476 6.99023 1.41016C7.25266 1.67269 7.40039 2.02918 7.40039 2.40039V6C7.40039 6.21734 7.34915 6.43158 7.25195 6.62598C7.15475 6.82037 7.01372 6.98971 6.83984 7.12012L6.27832 7.54102L6.27148 7.54688C5.86773 7.85526 5.5829 8.29371 5.46582 8.78809C5.34878 9.28244 5.40635 9.80211 5.62891 10.2588L5.63086 10.2627C7.36848 13.7919 10.2264 16.6457 13.7578 18.3789L13.7812 18.3906C14.2355 18.5992 14.7474 18.6465 15.2324 18.5254C15.7172 18.4043 16.1454 18.1211 16.4482 17.7236L16.4492 17.7246L16.875 17.167L16.8799 17.1602C17.0103 16.9863 17.1796 16.8452 17.374 16.748C17.5684 16.6508 17.7827 16.5996 18 16.5996H21.5996C21.9708 16.5996 22.3273 16.7473 22.5898 17.0098C22.8524 17.2723 23 17.6287 23 18V21.5996C23 21.9709 22.8524 22.3273 22.5898 22.5898C22.3273 22.8524 21.9709 23 21.5996 23C16.1363 22.9999 10.8964 20.83 7.0332 16.9668C3.17005 13.1036 1.0001 7.86371 1 2.40039C1 2.02909 1.14761 1.67271 1.41016 1.41016C1.63991 1.1804 1.94119 1.03864 2.26172 1.00684L2.40039 1Z"
                  stroke="white" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-bold text-[#0071bc]">
                Contactos útiles
              </h3>
              <p class="text-[15px] text-[#4a4a48]">
                Directorio de especialistas y redes de apoyo recomendadas.
              </p>
            </div>
          </div>
        </div>

        <!-- WhatsApp Help Card -->
        <div data-scroll data-scroll-class="is-inview"
          class="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 sm:p-8 rounded-[36px] bg-white w-full max-w-4xl shadow-md card-hover-subtle reveal-scale"
          style="box-shadow: 0px 8px 24px 0 rgba(0,113,188,0.12);">
          <p class="text-lg font-bold text-[#1d1d1b] text-center sm:text-left">
            ¿No encuentras lo que buscas? Escríbenos
          </p>
          <a href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25d366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-all shrink-0">
            <span>WhatsApp</span>
            <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.6 6.32005C16.8669 5.58147 15.9943 4.99602 15.033 4.59773C14.0716 4.19945 13.0406 3.99628 12 4.00005C10.6089 4.00141 9.24248 4.36825 8.03771 5.06383C6.83294 5.75941 5.83208 6.75932 5.13534 7.96341C4.4386 9.16751 4.07046 10.5335 4.06776 11.9247C4.06507 13.3158 4.42793 14.6833 5.12 15.8901L4 20.0001L8.2 18.9001C9.35975 19.5453 10.6629 19.8891 11.99 19.9001C14.0997 19.9001 16.124 19.0669 17.6222 17.5817C19.1205 16.0965 19.9715 14.0796 19.99 11.9701C19.983 10.9174 19.7682 9.8764 19.3581 8.90686C18.948 7.93731 18.3505 7.05825 17.6 6.32005ZM12 18.5301C10.8177 18.5308 9.65701 18.213 8.64 17.6101L8.4 17.4601L5.91 18.1201L6.57 15.6901L6.41 15.4401C5.55925 14.0667 5.24174 12.429 5.51762 10.8373C5.7935 9.24551 6.64361 7.81021 7.9069 6.80328C9.1702 5.79634 10.7589 5.28771 12.3721 5.37374C13.9853 5.45976 15.511 6.13447 16.66 7.27005C17.916 8.49825 18.635 10.1735 18.66 11.9301C18.6442 13.686 17.9355 15.3646 16.6882 16.6006C15.441 17.8367 13.756 18.5301 12 18.5301ZM15.61 13.5901C15.41 13.4901 14.44 13.0101 14.26 12.9501C14.08 12.8901 13.94 12.8501 13.81 13.0501C13.6144 13.3181 13.404 13.5752 13.18 13.8201C13.07 13.9601 12.95 13.9701 12.75 13.8201C11.6097 13.3694 10.6597 12.5395 10.06 11.4701C9.85 11.1201 10.26 11.1401 10.64 10.3901C10.6681 10.336 10.6827 10.276 10.6827 10.2151C10.6827 10.1541 10.6681 10.0941 10.64 10.0401C10.64 9.94005 10.19 8.96005 10.03 8.57005C9.87 8.18005 9.71 8.24005 9.58 8.23005H9.19C9.08895 8.2316 8.9894 8.25471 8.898 8.29782C8.8066 8.34093 8.72546 8.40306 8.66 8.48005C8.43562 8.69823 8.26061 8.96197 8.14676 9.25349C8.03291 9.54501 7.98287 9.85755 8 10.1701C8.0627 10.9181 8.34443 11.6312 8.81 12.2201C9.6622 13.4958 10.8301 14.5293 12.2 15.2201C12.9185 15.6395 13.7535 15.8149 14.58 15.7201C14.8552 15.6654 15.1159 15.5535 15.345 15.3916C15.5742 15.2296 15.7667 15.0213 15.91 14.7801C16.0428 14.4857 16.0846 14.1583 16.03 13.8401C15.94 13.7401 15.81 13.6901 15.61 13.5901Z"
                  fill="#34A853"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION: CTA Blue Banner ("Cada familia tiene una historia...") -->
    <section aria-labelledby="cta-familias-title" class="bg-[#0071bc] py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full">
      <div data-scroll data-scroll-class="is-inview" class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 reveal-scale">
        <h2 id="cta-familias-title" class="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-relaxed">
          Cada familia tiene una historia de amor y superación. Queremos escuchar la tuya y ser parte de tu camino.
        </h2>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <NuxtLink href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer">
            <Button label="Habla con nosotros" icon="pi pi-phone" iconPos="right"
              class="!rounded-full !bg-[#d9b421] !border-none !text-[#0071bc] font-bold !px-8 !py-4 hover:!bg-[#c4a21d] transition-all shadow-md" />
          </NuxtLink>
          <NuxtLink :to="localePath('/contacto')">
            <Button label="Agenda una visita" icon="pi pi-arrow-right" iconPos="right"
              class="!rounded-full !bg-transparent !border-2 !border-white !text-white font-bold !px-8 !py-4 hover:!bg-white/10 transition-all" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
