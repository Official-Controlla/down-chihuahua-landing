<script lang="ts" setup>
import heroHeroIndex from "@/assets/images/v2/heroindex.jpg";
import aboutUsImg from "@/assets/images/qs-image.png";
import card1V2 from "@/assets/images/v2/card-1.jpg";
import card2V2 from "@/assets/images/v2/card-2.jpg";
import card3V2 from "@/assets/images/v2/card-3.png";
import card1Img from "@/assets/images/v2/familias.jpg";
import card2Img from "@/assets/images/v2/programas.jpg";
import card3Img from "@/assets/images/v2/hero_reciclaje.jpg";
import card4Img from "@/assets/images/v2/colabora.png";
import impactoBgImg from "@/assets/images/v2/alumna.png";
import pdf2022 from "@/assets/PDF/INFORME ANUAL 2022.pdf";
import pdf2023 from "@/assets/PDF/INFORME IDCHAC 2023.pdf";
import pdf2024 from "@/assets/PDF/INFORME IDCHAC 2024.pdf";
import pdf2025 from "@/assets/PDF/Informe Anual 2025.pdf";

// Configuración de imágenes para reemplazo manual sencillo
const images = {
    // Imagen principal Hero
    heroBg: heroHeroIndex,

    // Imagen Sección "¿Quiénes Somos?"
    aboutUs: aboutUsImg,

    // Imagen Fondo Sección "Nuestro Impacto"
    impactoBg: impactoBgImg,

    // Imágenes para las tarjetas de "Lo que hacemos" (Imágenes a pantalla completa)
    loQueHacemos: [
        {
            id: "festival",
            title: "Festival de fin de cursos",
            description: "Una celebración para compartir el talento, los logros y la alegría de nuestra comunidad.",
            image: card1V2,
        },
        {
            id: "huerto",
            title: "Huerto Escolar",
            description: "Una celebración para compartir el talento, los logros y la alegría de nuestra comunidad.",
            image: card2V2,
        },
        {
            id: "consultorio",
            title: "Consultorio dental",
            description: "Una celebración para compartir el talento, los logros y la alegría de nuestra comunidad.",
            image: card3V2,
        },
    ],

    // Imágenes para la sección "¿Cómo puedes formar parte?"
    caminos: {
        familias: card1Img,
        programas: card2Img,
        reciclaje: card4Img,
        colabora: card3Img,
    },
};

const informes = [
    { year: "2022", title: "Informe Anual 2022", file: pdf2022, fileName: "INFORME ANUAL 2022.pdf" },
    { year: "2023", title: "Informe Anual 2023", file: pdf2023, fileName: "INFORME IDCHAC 2023.pdf" },
    { year: "2024", title: "Informe Anual 2024", file: pdf2024, fileName: "INFORME IDCHAC 2024.pdf" },
    { year: "2025", title: "Informe Anual 2025", file: pdf2025, fileName: "Informe Anual 2025.pdf" },
];

const impactoStats = [
    { number: "40", label: "años de experiencia" },
    { number: "500", label: "familias impactadas" },
    { number: "54", label: "aliados" },
    { number: "1,230", label: "alumnos" },
    { number: "24", label: "becas" },
    { number: "24", label: "Proyectos" },
];

useSeoMeta({
    title: "Instituto Down de Chihuahua A.C. | 40 Años Impulsando Vidas",
    description: "En Instituto Down de Chihuahua A.C. acompañamos a niñas, niños, jóvenes y adultos con síndrome de Down y a sus familias con estimulación temprana, educación, inclusión y apoyo integral en Chihuahua.",
    keywords: "Instituto Down Chihuahua, Síndrome de Down Chihuahua, atención integral síndrome de Down, inclusión educativa, estimulación temprana Chihuahua, apoyo familias síndrome de down, donaciones chihuahua",
    ogTitle: "Instituto Down de Chihuahua A.C. | 40 Años Impulsando Vidas",
    ogDescription: "Acompañamos a niñas, niños, jóvenes y adultos con síndrome de Down y a sus familias con estimulación temprana, educación e inclusión en Chihuahua desde 1984.",
    ogImage: images.heroBg,
    ogType: "website",
    twitterCard: "summary_large_image",
});

useSchemaOrg([
    defineOrganization({
        name: "Instituto Down de Chihuahua A.C.",
        logo: "/logo-instituto.png",
        foundingDate: "1984",
        address: {
            addressLocality: "Chihuahua",
            addressRegion: "Chihuahua",
            addressCountry: "MX",
        },
    }),
    defineWebPage({
        name: "Instituto Down de Chihuahua A.C. | Inicio",
        description: "Atención integral a personas con síndrome de Down de todas las edades en Chihuahua desde 1984.",
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
                <img :src="images.heroBg" alt="Fondo Hero - Instituto Down de Chihuahua"
                    class="w-full h-full object-cover object-center" />
                <div class="absolute inset-0 bg-[#0075c3]/85 mix-blend-multiply"></div>
                <div class="absolute inset-0 bg-[#0075c3]/40"></div>
            </div>

            <!-- Contenido Hero -->
            <div
                class="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-9 text-center">
                <!-- Badge Hero -->
                <div data-scroll data-scroll-class="is-inview" class="reveal-fade-up stagger-1">
                    <div
                        class="inline-flex items-center px-4 md:px-[18px] py-1.5 rounded-full border-[1.5px] border-[#fc0] bg-[#0075c3]/40 backdrop-blur-xs">
                        <span class="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#fc0]">
                            40 Años de Amor y Desarrollo
                        </span>
                    </div>
                </div>

                <!-- H1 Title -->
                <h1 id="hero-title" data-scroll data-scroll-class="is-inview"
                    class="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-center text-white leading-tight md:leading-[1.15] reveal-fade-up stagger-2">
                    40 años impulsando a cada persona con síndrome de Down a vivir su vida <span class="font-black">al
                        máximo.</span>
                </h1>

                <!-- Subtitle Description -->
                <p data-scroll data-scroll-class="is-inview"
                    class="max-w-4xl text-base sm:text-lg text-center text-white/95 leading-relaxed reveal-fade-up stagger-3">
                    En Chihuahua acompañamos a niñas, niños, jóvenes y adultos con síndrome de Down y a sus familias con
                    estimulación temprana, educación, inclusión y una comunidad que camina a su lado en cada etapa de la
                    vida.
                </p>

                <!-- Action Buttons (PrimeVue) -->
                <div data-scroll data-scroll-class="is-inview"
                    class="flex flex-wrap justify-center items-center gap-4 sm:gap-5 reveal-fade-up stagger-4">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=SBY6NYQWH6CDJ" target="_blank"
                        rel="noopener noreferrer" aria-label="Realizar donación por PayPal">
                        <Button label="Donar" icon="pi pi-arrow-right" iconPos="right"
                            class="!bg-[#fc0] !hover:bg-[#e6b800] !text-[#0075c3] !font-bold !px-6 !py-3 !rounded-full !border-none flex items-center gap-3 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                            aria-label="Donar al Instituto Down de Chihuahua" />
                    </a>
                    <NuxtLink to="/programas">
                        <Button label="Conoce nuestros programas" icon="pi pi-arrow-right" iconPos="right" outlined
                            class="!border-2 !border-white !text-white !hover:bg-white/10 !font-bold !px-6 !py-3 !rounded-full flex items-center gap-3 transition-all duration-300"
                            aria-label="Conocer los programas del Instituto Down de Chihuahua" />
                    </NuxtLink>
                </div>

                <!-- Highlight Card: Familias Nuevas -->
                <div data-scroll data-scroll-class="is-inview" class="w-full max-w-2xl mt-4 reveal-fade-up stagger-4">
                    <FamiliasNuevasCard buttonTo="/familias" />
                </div>
            </div>
        </section>

        <!-- 2. SECTION: ¿QUIÉNES SOMOS? -->
        <section aria-labelledby="about-title" class="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
            <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                <!-- Column Text -->
                <article data-scroll data-scroll-class="is-inview"
                    class="flex flex-col items-start flex-1 gap-6 md:gap-7 reveal-slide-right">
                    <h2 id="about-title"
                        class="text-3xl sm:text-4xl lg:text-[40px] text-left text-[#0075c3] leading-tight">
                        <span class="font-bold">¿Quiénes </span>
                        <span class="font-black">Somos?</span>
                    </h2>
                    <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
                        Somos una asociación civil sin fines de lucro fundada en 1984 en la ciudad de Chihuahua. Desde
                        entonces damos atención integral a personas con síndrome de Down de todas las edades. Nuestra
                        misión es impulsar a cada persona al máximo desarrollo de sus capacidades, para hacer posible su
                        plena inclusión en la comunidad.
                    </p>
                </article>

                <!-- Column Image Frame (Manual image replacement prepared) -->
                <div data-scroll data-scroll-class="is-inview" class="w-full lg:w-[480px] shrink-0 reveal-scale">
                    <!-- IMAGEN QUIÉNES SOMOS: Reemplazar path en images.aboutUs o app/assets/images/qs-image.png -->
                    <div class="relative w-full aspect-[4/3] rounded-[32px] border-[8px] md:border-[12px] border-white overflow-hidden shadow-2xl"
                        style="filter: drop-shadow(0px 16px 40px rgba(29,29,27,0.06));">
                        <img :src="images.aboutUs" alt="Instalaciones y miembros del Instituto Down de Chihuahua"
                            class="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. SECTION: LO QUE HACEMOS (Pantalla completa / 100% de ancho) -->
        <section aria-labelledby="what-we-do-title" class="bg-white pt-12 md:pt-20 pb-0 overflow-hidden w-full">
            <!-- Header (Centrado) -->
            <div
                class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center gap-3 mb-10 md:mb-14">
                <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0075c3]">
                    Caminos de participación
                </span>
                <h2 id="what-we-do-title"
                    class="text-3xl sm:text-4xl lg:text-[40px] font-bold text-center text-[#1d1d1b]">
                    Lo que hacemos
                </h2>
            </div>

            <!-- Banners Verticales a Pantalla Completa (100% Ancho) -->
            <div class="flex flex-col w-full">
                <article v-for="(card, index) in images.loQueHacemos" :key="card.id" data-scroll
                    data-scroll-class="is-inview"
                    class="relative w-full h-[360px] sm:h-[420px] md:h-[480px] overflow-hidden bg-slate-900 text-white flex flex-col justify-end reveal-fade-up">
                    <!-- Background Image (100% Ancho) -->
                    <div class="absolute inset-0 z-0">
                        <img :src="card.image" :alt="card.title"
                            class="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                            loading="lazy" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
                        <div class="absolute inset-0 bg-black/20"></div>
                    </div>

                    <!-- Card Content (Alineado al contenedor responsive) -->
                    <div
                        class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 pb-10 md:pb-16 flex flex-col gap-2">
                        <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-white leading-tight">
                            {{ card.title }}
                        </h3>
                        <p class="text-base sm:text-lg text-left text-white/95 leading-relaxed max-w-3xl">
                            {{ card.description }}
                        </p>
                    </div>
                </article>
            </div>
        </section>

        <!-- 4. SECTION: CTA BANNER -->
        <section aria-labelledby="cta-title"
            class="bg-[#0075c3] text-white px-4 sm:px-6 md:px-12 lg:px-[120px] py-16 md:py-20 lg:py-[110px] overflow-hidden">
            <div data-scroll data-scroll-class="is-inview"
                class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 md:gap-9 reveal-scale">
                <h2 id="cta-title"
                    class="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-center text-white leading-tight md:leading-snug">
                    Cada persona con síndrome de Down tiene una vida por delante llena de posibilidades. Ayúdanos a que
                    nadie la recorra solo.
                </h2>

                <div class="flex flex-wrap justify-center items-center gap-4 md:gap-5">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=SBY6NYQWH6CDJ" target="_blank"
                        rel="noopener noreferrer" aria-label="Realizar una donación al Instituto Down por PayPal">
                        <Button label="Donar" icon="pi pi-arrow-right" iconPos="right"
                            class="!bg-[#fc0] !hover:bg-[#e6b800] !text-[#0075c3] !font-bold !px-6 !py-3 !rounded-full !border-none flex items-center gap-3 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                            aria-label="Donar al Instituto Down de Chihuahua" />
                    </a>

                    <NuxtLink to="/contacto">
                        <Button label="Ser voluntario" icon="pi pi-arrow-right" iconPos="right" outlined
                            class="!border-2 !border-white !text-white !hover:bg-white/10 !font-bold !px-6 !py-3 !rounded-full flex items-center gap-3 transition-all duration-300"
                            aria-label="Registrarse como voluntario del instituto" />
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- 5. SECTION: CAMINOS DE PARTICIPACIÓN / ¿CÓMO PUEDES FORMAR PARTE? -->
        <section aria-labelledby="paths-title"
            class="bg-[#f4f6f8] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[120px]">
            <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-14">
                <!-- Section Header -->
                <div data-scroll data-scroll-class="is-inview"
                    class="flex flex-col items-center text-center gap-3 md:gap-4 max-w-3xl reveal-fade-up">
                    <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fc0]">
                        Caminos de participación
                    </span>
                    <h2 id="paths-title"
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0075c3] leading-tight">
                        ¿Cómo puedes formar parte de Instituto Down?
                    </h2>
                </div>

                <!-- 4 Cards Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    <!-- Card 1: Familias nuevas -->
                    <article data-scroll data-scroll-class="is-inview"
                        class="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-xs hover:shadow-xl card-hover-subtle transition-all duration-300 reveal-fade-up stagger-1">
                        <!-- IMAGEN CAMINO 1: Reemplazar path en images.caminos.familias -->
                        <div class="w-full h-44 overflow-hidden relative bg-slate-100">
                            <img :src="images.caminos.familias" alt="Familias nuevas - Apoyo desde el primer día"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy" />
                        </div>
                        <div class="flex flex-col justify-between flex-1 p-6 md:p-7 gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-xl md:text-[22px] font-bold text-left text-[#0075c3]">
                                    Familias nuevas
                                </h3>
                                <p class="text-sm text-left text-[#4a4a48]">
                                    ¿Acabas de recibir la noticia? Estamos aquí.
                                </p>
                            </div>
                            <NuxtLink to="/familias">
                                <Button label="Encuentra apoyo →" text
                                    class="!p-0 !justify-start !text-sm !font-bold !text-[#0075c3] hover:!underline"
                                    aria-label="Encuentra apoyo para familias nuevas" />
                            </NuxtLink>
                        </div>
                    </article>

                    <!-- Card 2: Programas -->
                    <article data-scroll data-scroll-class="is-inview"
                        class="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-xs hover:shadow-xl card-hover-subtle transition-all duration-300 reveal-fade-up stagger-2">
                        <!-- IMAGEN CAMINO 2: Reemplazar path en images.caminos.programas -->
                        <div class="w-full h-44 overflow-hidden relative bg-slate-100">
                            <img :src="images.caminos.programas" alt="Programas educativos e inclusión integral"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy" />
                        </div>
                        <div class="flex flex-col justify-between flex-1 p-6 md:p-7 gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-xl md:text-[22px] font-bold text-left text-[#0075c3]">
                                    Programas
                                </h3>
                                <p class="text-sm text-left text-[#4a4a48]">
                                    Un camino de apoyo para cada edad.
                                </p>
                            </div>
                            <NuxtLink to="/programas">
                                <Button label="Conoce más →" text
                                    class="!p-0 !justify-start !text-sm !font-bold !text-[#0075c3] hover:!underline"
                                    aria-label="Conoce más sobre los programas del Instituto Down" />
                            </NuxtLink>
                        </div>
                    </article>

                    <!-- Card 3: Reciclaje -->
                    <article data-scroll data-scroll-class="is-inview"
                        class="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-xs hover:shadow-xl card-hover-subtle transition-all duration-300 reveal-fade-up stagger-3">
                        <!-- IMAGEN CAMINO 3: Reemplazar path en images.caminos.reciclaje -->
                        <div class="w-full h-44 overflow-hidden relative bg-slate-100">
                            <img :src="images.caminos.reciclaje" alt="Programa de reciclaje con causa social"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy" />
                        </div>
                        <div class="flex flex-col justify-between flex-1 p-6 md:p-7 gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-xl md:text-[22px] font-bold text-left text-[#0075c3]">
                                    Reciclaje
                                </h3>
                                <p class="text-sm text-left text-[#4a4a48]">
                                    Reciclar con nosotros también transforma vidas.
                                </p>
                            </div>
                            <NuxtLink to="/reciclaje">
                                <Button label="Quiero reciclar →" text
                                    class="!p-0 !justify-start !text-sm !font-bold !text-[#0075c3] hover:!underline"
                                    aria-label="Quiero reciclar con el Instituto Down" />
                            </NuxtLink>
                        </div>
                    </article>

                    <!-- Card 4: Colabora -->
                    <article data-scroll data-scroll-class="is-inview"
                        class="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-xs hover:shadow-xl card-hover-subtle transition-all duration-300 reveal-fade-up stagger-4">
                        <!-- IMAGEN CAMINO 4: Reemplazar path en images.caminos.colabora -->
                        <div class="w-full h-44 overflow-hidden relative bg-slate-100">
                            <img :src="images.caminos.colabora" alt="Colaboraciones, voluntariado y apoyo al instituto"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy" />
                        </div>
                        <div class="flex flex-col justify-between flex-1 p-6 md:p-7 gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-xl md:text-[22px] font-bold text-left text-[#0075c3]">
                                    Colabora
                                </h3>
                                <p class="text-sm text-left text-[#4a4a48]">
                                    Tu apoyo sostiene 40 años de historia.
                                </p>
                            </div>
                            <NuxtLink to="/contacto">
                                <Button label="Apoyar ahora →" text
                                    class="!p-0 !justify-start !text-sm !font-bold !text-[#0075c3] hover:!underline"
                                    aria-label="Apoyar ahora con una colaboración" />
                            </NuxtLink>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- 6. SECTION: NUESTRO IMPACTO (Fondo Amarillo con Imagen de Alumnos) -->
        <section aria-labelledby="impact-title"
            class="relative w-full overflow-hidden py-16 md:py-24 lg:py-28 text-[#0075c3]">
            <!-- Capa de Imagen de Fondo con Filtro Amarillo -->
            <div class="absolute inset-0 z-0">
                <img :src="images.impactoBg" alt="Alumnos del Instituto Down de Chihuahua"
                    class="w-full h-full object-cover object-center" />
                <div class="absolute inset-0 bg-[#fc0]/90 mix-blend-multiply"></div>
                <div class="absolute inset-0 bg-[#fc0]/60"></div>
            </div>

            <!-- Contenido de Estadísticas -->
            <div
                class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center gap-10 md:gap-14">
                <div data-scroll data-scroll-class="is-inview"
                    class="flex flex-col items-center text-center reveal-fade-up">
                    <h2 id="impact-title" class="text-3xl sm:text-4xl lg:text-[42px] font-bold text-center text-black">
                        Nuestro impacto
                    </h2>
                </div>

                <!-- Grid de Estadísticas (Sin tarjetas blancas, números azules grandes) -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full max-w-5xl mx-auto">
                    <article v-for="(stat, index) in impactoStats" :key="index" data-scroll
                        data-scroll-class="is-inview"
                        :class="['flex flex-col justify-center items-center text-center reveal-fade-up', `stagger-${(index % 4) + 1}`]">
                        <span
                            class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0075c3] leading-none mb-2">
                            {{ stat.number }}
                        </span>
                        <span class="text-sm sm:text-base md:text-lg font-bold text-[#0075c3] leading-snug">
                            {{ stat.label }}
                        </span>
                    </article>
                </div>
            </div>
        </section>

    </main>
</template>
