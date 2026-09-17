<script lang="ts" setup>
import ogImg from "@/assets/images/arch-bg.png";
import pdf2022 from "@/assets/PDF/INFORME ANUAL 2022.pdf";
import pdf2023 from "@/assets/PDF/INFORME IDCHAC 2023.pdf";
import pdf2024 from "@/assets/PDF/INFORME IDCHAC 2024.pdf";
import pdf2025 from "@/assets/PDF/Informe Anual 2025.pdf";

const informes = [
    { year: "2022", title: "Informe Anual 2022", file: pdf2022, fileName: "INFORME ANUAL 2022.pdf" },
    { year: "2023", title: "Informe Anual 2023", file: pdf2023, fileName: "INFORME IDCHAC 2023.pdf" },
    { year: "2024", title: "Informe Anual 2024", file: pdf2024, fileName: "INFORME IDCHAC 2024.pdf" },
    { year: "2025", title: "Informe Anual 2025", file: pdf2025, fileName: "Informe Anual 2025.pdf" },
];

useSeoMeta({
    title: "Instituto Down de Chihuahua A.C. | 40 Años Impulsando Vidas",
    description: "En Instituto Down de Chihuahua A.C. acompañamos a niñas, niños, jóvenes y adultos con síndrome de Down y a sus familias con estimulación temprana, educación, inclusión y apoyo integral en Chihuahua.",
    keywords: "Instituto Down Chihuahua, Síndrome de Down Chihuahua, atención integral síndrome de Down, inclusión educativa, estimulación temprana Chihuahua, apoyo familias síndrome de down, donaciones chihuahua",
    ogTitle: "Instituto Down de Chihuahua A.C. | 40 Años Impulsando Vidas",
    ogDescription: "Acompañamos a niñas, niños, jóvenes y adultos con síndrome de Down y a sus familias con estimulación temprana, educación e inclusión en Chihuahua desde 1984.",
    ogImage: ogImg,
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
        <!-- HERO SECTION -->
        <section aria-labelledby="hero-title"
            class="relative bg-[#fff5e0] px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-[110px] overflow-hidden">
            <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                <!-- Left Content Column -->
                <div class="flex flex-col items-start w-full lg:max-w-[620px] gap-8 md:gap-9">
                    <div class="flex flex-col items-start gap-6 w-full">
                        <!-- Badge -->
                        <div
                            class="inline-flex items-center px-[18px] py-1.5 rounded-full bg-white border-[1.5px] border-[#d9b421] shadow-xs">
                            <span
                                class="text-xs md:text-[13px] font-bold text-left uppercase text-[#0071bc] tracking-wide">
                                40 Años de Amor y Desarrollo
                            </span>
                        </div>

                        <!-- H1 Title -->
                        <h1 id="hero-title"
                            class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-left text-[#0071bc] leading-tight md:leading-[1.15]">
                            40 años impulsando a cada persona con síndrome de Down a vivir su vida <span
                                class="font-black">al máximo.</span>
                        </h1>

                        <!-- Subtitle -->
                        <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
                            En Chihuahua acompañamos a niñas, niños, jóvenes y adultos con síndrome de Down y a sus
                            familias con estimulación temprana, educación, inclusión y una comunidad que camina a su
                            lado en cada etapa de la vida.
                        </p>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-wrap items-center gap-4 sm:gap-5 w-full">
                        <a href="https://www.paypal.com/donate/?hosted_button_id=SBY6NYQWH6CDJ" target="_blank"
                            rel="noopener noreferrer">
                            <Button label="Donar" icon="pi pi-arrow-right" iconPos="right"
                                class="!bg-[#d9b421] !hover:bg-[#c4a11c] !text-[#0071bc] !font-bold !px-6 !py-3 !rounded-full !border-none flex items-center gap-3 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                                aria-label="Realizar una donación al Instituto Down de Chihuahua" />
                        </a>
                        <!-- link para ir a programas-->
                        <a href="/programas">
                            <Button label="Conoce nuestros programas" icon="pi pi-arrow-right" iconPos="right" outlined
                                class="!border-2 !border-[#0071bc] !text-[#0071bc] !hover:bg-[#0071bc]/10 !font-bold !px-6 !py-3 !rounded-full flex items-center gap-3 transition-all duration-300"
                                aria-label="Conocer los programas del Instituto Down de Chihuahua" />
                        </a>
                    </div>

                    <!-- Highlight Card: Familias Nuevas -->
                    <FamiliasNuevasCard />
                </div>

                <!-- Right Visual Column -->
                <div
                    class="relative flex justify-center items-center w-full max-w-[420px] lg:max-w-none lg:w-[480px] shrink-0">
                    <div
                        class="relative w-full aspect-[4/5] max-h-[500px] overflow-hidden rounded-t-[180px] sm:rounded-t-[210px] rounded-b-3xl bg-[#f4f6f8] border border-[#9a9a97] shadow-xl">
                        <img src="/assets/images/arch-bg.png"
                            alt=" Niños y jóvenes participando en el Instituto Down Chihuahua"
                            class="w-full h-full object-cover" loading="eager" />
                    </div>

                    <!-- Floating Badge -->
                    <div class="absolute -left-4 sm:left-2 lg:-left-6 bottom-6 sm:bottom-10 flex flex-col p-5 md:p-6 rounded-[20px] bg-white shadow-xl max-w-[180px] sm:max-w-[200px]"
                        style="box-shadow: 0px 12px 32px 0 rgba(29,29,27,0.15);">
                        <span
                            class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-left text-[#0071bc] leading-none mb-1">
                            40
                        </span>
                        <span class="text-xs sm:text-sm font-bold text-left text-[#0071bc] leading-snug">
                            Años de impacto continuo
                        </span>
                    </div>

                    <!-- Decorative Arch SVG -->
                    <div class="absolute -right-4 sm:-right-6 -top-4 sm:-top-6 pointer-events-none z-10">
                        <div class="w-[100px] h-[50px] sm:w-[140px] sm:h-[70px] overflow-hidden">
                            <svg width="140" height="70" viewBox="0 0 140 70" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="none">
                                <circle cx="70" r="70" fill="#D9B421" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION: QUIÉNES SOMOS -->
        <section aria-labelledby="about-title" class="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
            <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                <!-- Text Column -->
                <div class="flex flex-col items-start flex-1 gap-6 md:gap-7">
                    <h2 id="about-title"
                        class="text-3xl sm:text-4xl lg:text-[40px] text-left text-[#0071bc] leading-tight">
                        <span class="font-bold">¿Quiénes </span>
                        <span class="font-black">Somos?</span>
                    </h2>
                    <p class="text-base sm:text-lg text-left text-[#4a4a48] leading-relaxed">
                        Somos una asociación civil sin fines de lucro fundada en 1984 en la ciudad de Chihuahua. Desde
                        entonces damos atención integral a personas con síndrome de Down de todas las edades. Nuestra
                        misión es impulsar a cada persona al máximo desarrollo de sus capacidades, para hacer posible su
                        plena inclusión en la escuela, el trabajo y la vida social.
                    </p>
                </div>

                <!-- Image Frame Column -->
                <div class="w-full lg:w-[480px] shrink-0">
                    <div class="relative w-full aspect-[4/3] rounded-[32px] border-[8px] md:border-[12px] border-white overflow-hidden shadow-2xl"
                        style="filter: drop-shadow(0px 16px 40px rgba(29,29,27,0.08));">
                        <img src="/assets/images/qs-image.png"
                            alt="Instalaciones y equipo del Instituto Down de Chihuahua"
                            class="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION: TRAYECTORIA / 40 AÑOS -->
        <section aria-labelledby="trajectory-title"
            class="bg-[#fff5e0] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[120px]">
            <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
                <!-- Section Header -->
                <div class="flex flex-col items-center text-center gap-3 md:gap-4 max-w-3xl">
                    <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0071bc]">
                        El valor de nuestra trayectoria
                    </span>
                    <h2 id="trajectory-title"
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1d1d1b] leading-tight">
                        Cuatro décadas construyendo futuro
                    </h2>
                </div>

                <!-- 3 Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                    <!-- Card 1 (Blue) -->
                    <article
                        class="flex flex-col justify-between items-start gap-8 p-8 md:p-10 rounded-3xl bg-[#0071bc] text-white shadow-lg transition-transform hover:-translate-y-1">
                        <div
                            class="flex justify-center items-center w-14 h-14 rounded-2xl bg-white text-[#0071bc] shadow-xs">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M8 1.99915V5.99947M16 1.99915V5.99947M3 9.99979H21M5 3.99931H19C20.1046 3.99931 21 4.89481 21 5.99947V20.0006C21 21.1052 20.1046 22.0007 19 22.0007H5C3.89543 22.0007 3 21.1052 3 20.0006V5.99947C3 4.89481 3.89543 3.99931 5 3.99931Z"
                                    stroke="#0071BC" stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col gap-2.5">
                            <h3
                                class="text-2xl md:text-3xl lg:text-[32px] font-bold text-left text-white leading-tight">
                                Desde 1984
                            </h3>
                            <p class="text-base text-left text-[#fff5e0]">
                                cuatro décadas de trabajo continuo.
                            </p>
                        </div>
                    </article>

                    <!-- Card 2 (Yellow) -->
                    <article
                        class="flex flex-col justify-between items-start gap-8 p-8 md:p-10 rounded-3xl bg-[#d9b421] text-[#0071bc] shadow-lg transition-transform hover:-translate-y-1">
                        <div
                            class="flex justify-center items-center w-14 h-14 rounded-2xl bg-white text-[#d9b421] shadow-xs">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M16.0001 21V19C16.0001 17.9391 15.5787 16.9217 14.8285 16.1716C14.0783 15.4214 13.0608 15 11.9998 15H5.99934C4.93839 15 3.9209 15.4214 3.17069 16.1716C2.42048 16.9217 1.99902 17.9391 1.99902 19V21M16.0001 3.12793C16.858 3.3503 17.6177 3.85119 18.16 4.55199C18.7023 5.25279 18.9966 6.11382 18.9966 6.99993C18.9966 7.88604 18.7023 8.74707 18.16 9.44787C17.6177 10.1487 16.858 10.6496 16.0001 10.8719M22.0006 20.9999V18.9999C22 18.1136 21.705 17.2527 21.1619 16.5522C20.6189 15.8517 19.8586 15.3515 19.0004 15.1299M12.9999 7C12.9999 9.20914 11.2089 11 8.99958 11C6.79027 11 4.99926 9.20914 4.99926 7C4.99926 4.79086 6.79027 3 8.99958 3C11.2089 3 12.9999 4.79086 12.9999 7Z"
                                    stroke="#D9B421" stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col gap-2.5">
                            <h3
                                class="text-2xl md:text-3xl lg:text-[32px] font-bold text-left text-[#0071bc] leading-tight">
                                Todas las edades
                            </h3>
                            <p class="text-base text-left text-white">
                                desde recién nacidos hasta la vida adulta.
                            </p>
                        </div>
                    </article>

                    <!-- Card 3 (Coral/Orange) -->
                    <article
                        class="flex flex-col justify-between items-start gap-8 p-8 md:p-10 rounded-3xl bg-[#e8734a] text-white shadow-lg transition-transform hover:-translate-y-1">
                        <div
                            class="flex justify-center items-center w-14 h-14 rounded-2xl bg-white text-[#e8734a] shadow-xs">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M15 20.9991V12.9991C15 12.7339 14.8946 12.4796 14.7071 12.292C14.5196 12.1045 14.2652 11.9991 14 11.9991H10C9.73478 11.9991 9.48043 12.1045 9.29289 12.292C9.10536 12.4796 9 12.7339 9 12.9991V20.9991M3 9.99963C2.99993 9.70869 3.06333 9.42125 3.18579 9.15734C3.30824 8.89344 3.4868 8.65942 3.709 8.47163L10.709 2.47162C11.07 2.16653 11.5274 1.99915 12 1.99915C12.4726 1.99915 12.93 2.16653 13.291 2.47162L20.291 8.47163C20.5132 8.65942 20.6918 8.89344 20.8142 9.15734C20.9367 9.42125 21.0001 9.70869 21 9.99963V18.9996C21 19.5301 20.7893 20.0388 20.4142 20.4138C20.0391 20.7889 19.5304 20.9996 19 20.9996H5C4.46957 20.9996 3.96086 20.7889 3.58579 20.4138C3.21071 20.0388 3 19.5301 3 18.9996V9.99963Z"
                                    stroke="#E8734A" stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col gap-2.5">
                            <h3
                                class="text-2xl md:text-3xl lg:text-[32px] font-bold text-left text-white leading-tight">
                                Instalaciones propias
                            </h3>
                            <p class="text-base text-left text-[#fff5e0]">
                                un espacio pensado para el desarrollo y la terapia.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- SECTION: CAMINOS DE PARTICIPACIÓN -->
        <section aria-labelledby="paths-title"
            class="bg-[#f4f6f8] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[120px]">
            <div class="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-14">
                <!-- Section Header -->
                <div class="flex flex-col items-center text-center gap-3 md:gap-4 max-w-3xl">
                    <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#d9b421]">
                        Caminos de participación
                    </span>
                    <h2 id="paths-title"
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0071bc] leading-tight">
                        ¿Cómo puedes formar parte de Instituto Down?
                    </h2>
                </div>

                <!-- 4 Cards Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    <!-- Card 1 -->
                    <article
                        class="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="w-full h-44 overflow-hidden relative bg-slate-100">
                            <img src="@/assets/images/card-1.png"
                                alt="Familias nuevas - Apoyo a familias con síndrome de Down"
                                class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div class="flex flex-col justify-between flex-1 p-6 md:p-7 gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-xl md:text-[22px] font-bold text-left text-[#0071bc]">
                                    Familias nuevas
                                </h3>
                                <p class="text-sm text-left text-[#4a4a48]">
                                    ¿Acabas de recibir la noticia? Estamos aquí.
                                </p>
                            </div>
                            <NuxtLink to="/familias">
                                <Button label="Encuentra apoyo →" text
                                    class="!p-0 !justify-start !text-sm !font-bold !text-[#0071bc] hover:!underline"
                                    aria-label="Encuentra apoyo para familias nuevas" />
                            </NuxtLink>
                        </div>
                    </article>

                    <!-- Card 2 -->
                    <article
                        class="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="w-full h-44 overflow-hidden relative bg-slate-100">
                            <img src="@/assets/images/card-2.png" alt="Programas de atención integral y educación"
                                class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div class="flex flex-col justify-between flex-1 p-6 md:p-7 gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-xl md:text-[22px] font-bold text-left text-[#0071bc]">
                                    Programas
                                </h3>
                                <p class="text-sm text-left text-[#4a4a48]">
                                    Un camino de apoyo para cada edad.
                                </p>
                            </div>
                            <!-- boton para ir a programas-->
                            <NuxtLink to="/programas">
                                <Button label="Conoce más →" text
                                    class="!p-0 !justify-start !text-sm !font-bold !text-[#0071bc] hover:!underline"
                                    aria-label="Conoce más sobre los programas del Instituto Down" />
                            </NuxtLink>
                        </div>
                    </article>

                    <!-- Card 3 -->
                    <article
                        class="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="w-full h-44 overflow-hidden relative bg-slate-100">
                            <img src="@/assets/images/card-4.png" alt="Programa de reciclaje ecológico y donaciones"
                                class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div class="flex flex-col justify-between flex-1 p-6 md:p-7 gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-xl md:text-[22px] font-bold text-left text-[#0071bc]">
                                    Reciclaje
                                </h3>
                                <p class="text-sm text-left text-[#4a4a48]">
                                    Reciclar con nosotros -también transforma vidas.
                                </p>
                            </div>
                            <!-- boton para ir a reciclaje-->
                            <NuxtLink to="/reciclaje">
                                <Button label="Quiero reciclar →" text
                                    class="!p-0 !justify-start !text-sm !font-bold !text-[#0071bc] hover:!underline"
                                    aria-label="Quiero reciclar con el Instituto Down" />
                            </NuxtLink>
                        </div>
                    </article>

                    <!-- Card 4 -->
                    <article
                        class="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="w-full h-44 overflow-hidden relative bg-slate-100">
                            <img src="@/assets/images/card-3.png" alt="Colabora y apoya al Instituto Down de Chihuahua"
                                class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div class="flex flex-col justify-between flex-1 p-6 md:p-7 gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-xl md:text-[22px] font-bold text-left text-[#0071bc]">
                                    Colabora
                                </h3>
                                <p class="text-sm text-left text-[#4a4a48]">
                                    Tu apoyo sostiene 40 años de historia.
                                </p>
                            </div>
                            <NuxtLink to="/contacto#cta-banco-title">
                                <Button label="Apoyar ahora →" text
                                    class="!p-0 !justify-start !text-sm !font-bold !text-[#0071bc] hover:!underline"
                                    aria-label="Apoyar ahora con una colaboración" />
                            </NuxtLink>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- SECTION: CTA BANNER -->
        <section aria-labelledby="cta-title"
            class="bg-[#0071bc] text-white px-4 sm:px-6 md:px-12 lg:px-[120px] py-16 md:py-20 lg:py-[110px] overflow-hidden">
            <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 md:gap-9">
                <h2 id="cta-title"
                    class="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-center text-white leading-tight md:leading-snug">
                    Cada persona con síndrome de Down tiene una vida por delante llena de posibilidades. Ayúdanos a que
                    nadie la recorra solo.
                </h2>

                <div class="flex flex-wrap justify-center items-center gap-4 md:gap-5">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=SBY6NYQWH6CDJ" target="_blank"
                        rel="noopener noreferrer">
                        <Button label="Donar" icon="pi pi-arrow-right" iconPos="right"
                            class="!bg-[#d9b421] !hover:bg-[#c4a11c] !text-[#0071bc] !font-bold !px-6 !py-3 !rounded-full !border-none flex items-center gap-3 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
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

        <!-- SECTION: INFORME ANUAL -->
        <section aria-labelledby="informe-anual-title"
            class="bg-[#f4f6f8] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
            <div class="max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-14">
                <!-- Header -->
                <div class="flex flex-col items-center text-center">
                    <h2 id="informe-anual-title"
                        class="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0071bc] text-center inline-block border-b-4 border-[#0071bc] pb-1 tracking-tight">
                        Informe Anual
                    </h2>
                </div>

                <!-- 4 Cards Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    <article v-for="informe in informes" :key="informe.year"
                        class="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white shadow-xs hover:shadow-md transition-all duration-300 min-h-[140px]">
                        <div class="flex flex-col gap-2">
                            <h3 class="text-xl sm:text-[22px] font-bold text-left text-[#0071bc]">
                                {{ informe.title }}
                            </h3>
                        </div>
                        <a :href="informe.file" :download="informe.fileName" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0071bc] hover:underline transition-all mt-6 w-fit"
                            :aria-label="`Descargar ${informe.title}`">
                            <span>Descargar</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>
