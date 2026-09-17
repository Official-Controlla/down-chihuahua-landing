<script lang="ts" setup>
const localePath = useLocalePath();

withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    buttonLabel?: string;
    buttonTo?: string;
  }>(),
  {
    title: "¿Acabas de recibir la noticia?",
    subtitle: "Estamos listos para recibirte y caminar a tu lado desde el primer día.",
    buttonLabel: "Empieza aquí",
    buttonTo: "/nosotros",
  }
);
</script>

<template>
  <div
    class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-5 p-5 md:p-6 w-full rounded-tl-xl rounded-tr-3xl rounded-bl-xl rounded-br-3xl bg-white border-l-[5px] border-[#d9b421]"
    style="box-shadow: 0px 12px 32px 0 rgba(0,113,188,0.12);">
    <div class="flex items-center gap-4 flex-1">
      <div class="flex justify-center items-center shrink-0 w-12 h-12 rounded-xl bg-[#d9b421] text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            d="M16.1289 1.18066C17.1986 0.874628 18.3221 0.957527 19.3594 1.4248C20.4005 1.89392 21.324 2.7379 21.9854 3.87402C22.6471 5.01093 23.0057 6.37276 23 7.77637V7.78027C23 10.6103 21.4385 12.7728 19.6494 14.877L13.0586 22.3711L13.0312 22.4023L13.0059 22.4365C12.8637 22.6284 12.6978 22.7697 12.5264 22.8623C12.3557 22.9544 12.1786 22.9987 12.0068 23C11.8352 23.0012 11.659 22.9602 11.4883 22.8711C11.3164 22.7814 11.1497 22.6425 11.0059 22.4531L10.9844 22.4248L10.9609 22.3984L4.35156 14.8779C2.56141 12.7727 1 10.6244 1 7.78027L1.00391 7.51855C1.04608 6.21096 1.40312 4.95161 2.02441 3.88965C2.68668 2.75769 3.60911 1.91648 7.87305 1.20117C8.94474 1.5046 9.94108 2.19102 10.7148 3.20312L10.7207 3.21094L10.7266 3.21777C10.8725 3.40115 11.0584 3.55873 11.2783 3.6709C11.4991 3.78351 11.7452 3.8457 12 3.8457C12.2548 3.8457 12.5009 3.78351 12.7217 3.6709C12.9416 3.55873 13.1275 3.40113 13.2734 3.21777L13.2803 3.20898L13.2881 3.19922C14.0595 2.18042 15.0557 1.4877 16.1289 1.18066Z"
            stroke="white" stroke-width="2" stroke-linecap="round"></path>
        </svg>
      </div>
      <div class="flex flex-col gap-1 text-left">
        <h2 class="text-base sm:text-lg font-bold text-[#1d1d1b]">
          {{ title }}
        </h2>
        <p class="text-xs sm:text-sm text-[#4a4a48]">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <NuxtLink :to="localePath(buttonTo)">
      <Button :label="buttonLabel" icon="pi pi-arrow-right" iconPos="right"
        class="!bg-[#d9b421] !hover:bg-[#c4a11c] !text-[#0071bc] !font-bold !px-5 !py-2.5 !rounded-full !border-none flex items-center gap-2 shrink-0 self-start sm:self-center text-sm"
        :aria-label="buttonLabel" />
    </NuxtLink>
  </div>
</template>
