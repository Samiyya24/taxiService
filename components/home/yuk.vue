<script setup>
import { ref } from "vue";
import { format } from "date-fns";

const date = ref(new Date());
const dateFormatted = ref(format(date.value, "yyyy.MM.dd"));

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

const showFromList = ref(false);
const showToList = ref(false);
const selectedFrom = ref("Toshkent shahri");
const selectedTo = ref("Toshkent shahri");

const cities = [
  "Toshkent shahri",
  "Toshkent viloyati",
  "Andijon viloyati",
  "Buxoro viloyati",
  "Guliston viloyati",
  "Jizzax viloyati",
  "Qarshi viloyati",
  "Navoiy viloyati",
  "Namangan viloyati",
  "Nukus viloyati",
  "Samarqand viloyati",
  "Termiz viloyati",
  "Farg'ona viloyati",
  "Urganch viloyati",
];
</script>

<template>
  <div class="container text-white md:mt-20 mt-12 relative">
    <h1 class="md:text-[42px] text-[22px] font-medium">
      Har kuni O'zbekiston bo'ylab yuk tashish xizmati
    </h1>
    <p class="md:text-[22px] text-lg md:mt-8 mt-4">
      Biz viloyatlar bo'ylab hamyonbop qatnov turlarini taklif qilamiz
    </p>

    <div class="md:flex justify-between items-center mt-16 mb-7">
      <div
        class="bg-white/10 rounded-md md:w-[20%] rounded-b-none py-3 px-[24px] relative"
        @click="showFromList = !showFromList"
      >
        <p class="mb-4 text-[#D1D1D1]">Qayerdan</p>
        <p class="text-3xl">{{ selectedFrom }}</p>
        <transition name="slide-fade">
          <div
            v-if="showFromList"
            class="flex flex-col mt-[17px] w-full bg-black/10 px-5 text-2xl cursor-pointer overflow-y-auto max-h-40 absolute left-0"
          >
            <span
              v-for="city in cities"
              :key="city"
              class="p-2 hover:bg-black/20"
              @click="selectedFrom = city"
            >
              {{ city }}
            </span>
          </div>
        </transition>
      </div>
      <div
        class="bg-white/10 rounded-md md:w-[20%] mt-2 p-3 relative"
        @click="showToList = !showToList"
      >
        <p class="mb-4 text-[#D1D1D1]">Qayerga</p>
        <p class="text-3xl">{{ selectedTo }}</p>
        <transition name="slide-fade">
          <div
            v-if="showToList"
            class="flex flex-col mt-[17px] w-full md:bg-white/10 bg-black/100 text-white px-5 text-2xl cursor-pointer overflow-y-auto max-h-40 md:absolute left-0"
          >
            <span
              v-for="city in cities"
              :key="city"
              class="p-2 hover:bg-black/20"
              @click="selectedTo = city"
            >
              {{ city }}
            </span>
          </div>
        </transition>
      </div>
      <div
        class="relative flex gap-[50px] bg-white/10 rounded-md mt-2 p-3 md:w-[20%]"
      >
        <div>
          <p class="flex items-center gap-[76px] mb-4 text-[#D1D1D1]">Qachon</p>
          <span class="text-3xl">{{ format(new Date(), "yyyy.MM.dd") }}</span>
        </div>
        <button>
          <img src="/public/calendar.svg" alt="calendar" class="ml-2" />
        </button>
      </div>
      <button
        class="bg-primary md:py-7 md:px-14 mt-2 max-md:ml-[20%] py-3 px-14 text-3xl rounded-md"
      >
        Qidirish
      </button>
    </div>
   
  </div>
</template>

<style lang="scss" scoped>
.overflow-y-auto {
  overflow-y: auto;
}
.max-h-40 {
  max-height: 15rem;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
