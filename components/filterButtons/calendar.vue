<script setup>
import "v-calendar/style.css";
import { onClickOutside } from "@vueuse/core";
import { toast } from "vue3-toastify";

const date = ref(new Date());

const showCalendar = ref(false);

let selectedDate = ref(null);

const target = ref(null);
onClickOutside(target, () => {
  showCalendar.value = false;
});

const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value;
  console.log(date.value);
};

const myfunction = () => {
  console.log(date.value);
  selectedDate = date.value;
  let today = new Date();
  selectedDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  let year = ref(null);
  let month = ref(null);
  let day = ref(null);
  console.log(selectedDate >= today, selectedDate, today);

  const notify = (mess) => {
    useNuxtApp().$toast.info(mess);
  };
  if (selectedDate >= today) {
    year = String(selectedDate.getFullYear());
    month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    day = String(selectedDate.getDate()).padStart(2, "0");
    selectedDate = `${year}.${month}.${day}`;
  } else {
    selectedDate = "";
    toast("Kun xato tanlandi", {
      theme: "dark",
      type: "error",
      transition: "slide",
      dangerouslyHTMLString: true,
    });
  }
};
</script>

<template>
  <div ref="target" class="">
    <div
      class="absolute md:w-[320px] w-[370px] md:left-0 lefy-10 top-[29%] md:top-full duration-300"
      :class="!showCalendar ? 'scale-100' : 'scale-0 w-0 h-0'"
    >
      <Suspense>
        <template #default>
          <VDatePicker
            v-if="showCalendar"
            :class="showCalendar ? 'scale-100' : 'scale-0 w-0 h-0'"
            class="!w-full !bg-black !text-white !border-0 duration-300"
            style="box-shadow: 0 0 10px 0 white !important"
            v-model="date"
            @update:model-value="myfunction"
          />
        </template>
        <template #fallback>
          <div>Yuklanmoqda...</div>
        </template>
      </Suspense>
    </div>

    <!-- QACHON -->
    <button
      class="relative flex bg-white/20 rounded-md md:w-[320px] w-[370px] max-md:my-4"
    >
      <div class="p-3">
        <div @click="toggleCalendar" class="flex">
          <div
            class="flex gap-10 duration-300"
            :class="!selectedDate ? 'scale-100  py-4 px-10' : 'scale-0 w-0 h-0'"
          >
            <p class="text-3xl text-white">Qachon</p>
            <img src="/public/calendar.svg" alt="calendar" class="" />
          </div>
          <div
            class="flex gap-14 pr-7 pl-2 py-1 duration-300"
            :class="selectedDate ? 'scale-100' : 'scale-0 w-0 h-0'"
          >
            <div class="text-left flex flex-col gap-3">
              <p class="gap-[76px] text-[#D1D1D1]">Qachon</p>
              <p class="text-3xl">{{ selectedDate }}</p>
            </div>
            <img
              src="/public/calendar.svg"
              alt="calendar"
              class="w-[43px] shrink-0"
            />
          </div>
        </div>
      </div>
    </button>
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
  transform: translateX(50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
