<script setup>
// import { ref } from 'vue';
// import { VDatePicker } from 'vue-datepicker-next';

const date = ref(new Date());

const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates: date.value,
  },
]);
</script>

<template>
  <div class="container text-white md:mt-20 mt-12 relative">
    <h1 class="md:text-[42px] text-[22px] font-medium">
      Har kuni O'zbekiston bo'ylab taxi va yuk tashish xizmati
    </h1>
    <p class="md:text-[22px] text-lg md:mt-8 mt-4">
      Biz viloyatlar bo'ylab hamyonbop qatnov turlarini taklif qilamiz
    </p>

    <div class="flex justify-between mt-16 mb-7">
      <div class="bg-white/10 rounded-md p-3">
        <p>Qayerdan</p>
        <p class="text-3xl">Toshkent shahri</p>
      </div>
      <div class="bg-white/10 rounded-md p-3">
        <p>Qayerga</p>
        <p class="text-3xl">Toshkent shahri</p>
      </div>
      <div class="">
        <button class="bg-white/10 flex items-center rounded-md p-3">
          Qachon <img src="/public/calendar.svg" alt="calendar" class="ml-2" />
        </button>
        <!-- <client-only>
          <VDatePicker
            class="absolute top-0"
            v-model="date"
            :attributes="attrs"
          />
        </client-only> -->
      </div>
      <button class="bg-primary p-3 rounded-md">Qidirish</button>
    </div>
    <div class="flex flex-wrap justify-between">
      <button class="p-2">* Toshkent</button>
      <button class="p-2">* Andijon</button>
      <button class="p-2">* Buxoro</button>
      <button class="p-2">* Guliston</button>
      <button class="p-2">* Jizzax</button>
      <button class="p-2">* Qarshi</button>
      <button class="p-2">* Navoiy</button>
      <button class="p-2">* Namangan</button>
      <button class="p-2">* Nukus</button>
      <button class="p-2">* Samarqand</button>
      <button class="p-2">* Termiz</button>
      <button class="p-2">* Farg'ona</button>
      <button class="p-2">* Urganch</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
