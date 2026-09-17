<script setup lang="ts">
const localePath = useLocalePath();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="w-full bg-white border-t border-[#f4f6f8] pt-16 md:pt-20 lg:pt-24 pb-10 px-4 sm:px-6 md:px-12 lg:px-20 font-sans">
    <div class="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">

        <!-- Col 1: Logo & Description (lg:col-span-4) -->
        <div class="lg:col-span-4 flex flex-col items-start gap-5">
          <NuxtLink :to="localePath('/')" aria-label="Ir al inicio de Instituto Down de Chihuahua">
            <img src="@/assets/images/logo.png" alt="Logo Instituto Down de Chihuahua A.C."
              class="w-[180px] sm:w-[208px] h-auto object-contain" loading="lazy" />
          </NuxtLink>
          <p class="text-sm text-left text-[#4a4a48] leading-relaxed max-w-sm">
            Dando atención integral a personas con síndrome de Down de todas las edades en Chihuahua desde 1984.
          </p>
        </div>

        <!-- Col 2: Navegación (lg:col-span-2) -->
        <nav aria-label="Navegación del pie de página" class="lg:col-span-2 flex flex-col items-start gap-4">
          <p class="text-sm font-bold text-left uppercase text-[#0071bc] tracking-wider">
            Navegación
          </p>
          <ul class="flex flex-col gap-2.5 p-0 m-0 list-none text-left">
            <li>
              <NuxtLink :to="localePath('/')" class="text-sm text-[#1d1d1b] hover:text-[#0071bc] transition-colors">
                Inicio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/sindrome-de-down')"
                class="text-sm text-[#1d1d1b] hover:text-[#0071bc] transition-colors">
                Síndrome de Down
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/programas')"
                class="text-sm text-[#1d1d1b] hover:text-[#0071bc] transition-colors">
                Programas
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/familias')"
                class="text-sm text-[#1d1d1b] hover:text-[#0071bc] transition-colors">
                Familias
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Col 3: Participa (lg:col-span-2) -->
        <nav aria-label="Sección participa" class="lg:col-span-2 flex flex-col items-start gap-4">
          <p class="text-sm font-bold text-left uppercase text-[#0071bc] tracking-wider">
            Participa
          </p>
          <ul class="flex flex-col gap-2.5 p-0 m-0 list-none text-left">
            <li>
              <NuxtLink :to="localePath('/reciclaje')"
                class="text-sm text-[#1d1d1b] hover:text-[#0071bc] transition-colors">
                Reciclaje
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('nosotros')"
                class="text-sm text-[#1d1d1b] hover:text-[#0071bc] transition-colors">
                Nosotros
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('contact')"
                class="text-sm text-[#1d1d1b] hover:text-[#0071bc] transition-colors">
                Contacto
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/donaciones')"
                class="text-sm text-[#1d1d1b] hover:text-[#0071bc] transition-colors">
                Donaciones
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Col 4: Contacto (lg:col-span-4) -->
        <div class="lg:col-span-4 flex flex-col items-start gap-4">
          <p class="text-sm font-bold text-left uppercase text-[#0071bc] tracking-wider">
            Contacto
          </p>
          <address class="not-italic flex flex-col gap-2.5 text-sm text-[#1d1d1b] text-left">
            <p>Chihuahua, Chihuahua, México</p>
            <p>
              Teléfono / WhatsApp:
              <a href="https://wa.me/526145334010" target="_blank" rel="noopener noreferrer" class="hover:text-[#0071bc] transition-colors">
                614 533 40 10
              </a>
            </p>
            <p>
              Email:
              <a href="mailto:contacto@institutodownchihuahua.org" class="hover:text-[#0071bc] transition-colors">
                contacto@institutodownchihuahua.org
              </a>
            </p>
          </address>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-6 border-t border-[#f4f6f8] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-[13px] text-[#4a4a48]">
        <p class="text-left">
          © {{ currentYear }} Instituto Down de Chihuahua A.C. Todos los derechos reservados.
        </p>
        <p class="text-left font-medium">
          Fundado en 1984 • 40 Años Impulsando Vidas
        </p>
      </div>
    </div>
  </footer>
</template>
