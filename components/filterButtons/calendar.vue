<script setup>
import regionsData from "../../JSON/regions.json";
import "v-calendar/style.css";

const date = ref(new Date());

const setPlaceTo = ref(null);
const showFromList = ref(false);
const showToList = ref(false);
const showCalendar = ref(false);

let selectedDate = ref(null);





const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value;
  console.log(date.value);
};



const hideAllLists = () => {
  //   showToList.value = false;
  //   showFromList.value = false;
  showCalendar.value = false;
  //   console.log('showToList.value =', showToList.value, 'showFromList.value = ',showFromList.value, 'showCalendar.value = ',showCalendar.value);
  console.log("hello");
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
  if (selectedDate >= today) {
    year = String(selectedDate.getFullYear());
    month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    day = String(selectedDate.getDate()).padStart(2, "0");
    selectedDate = `${year}.${month}.${day}`;
  } else {
    alert("O'tib ketgan kun tanlandi");
  }
};
</script>

<template>
  <div>
    <div
      v-if="showToList || showFromList"
      id="back"
      @click="hideAllLists"
      class="bg-red-200 w-screen h-screen fixed top-0 left-0 z-30"
    ></div>

    <!-- QACHON -->
    <button class="relative flex gap-[50px] bg-white/10 rounded-md mt-2 md">
      <div class="p-3">
        <div @click="toggleCalendar" class="flex gap-16 py-4 pr-2 pl-16">
          <div>
            <p class="text-3xl gap-[76px] text-white">Qachon</p>
            <img src="/public/calendar.svg" alt="calendar" class="" />
          </div>
          <div>
            <p>{{ selectedDate }}</p>
          </div>
        </div>
        <div
          class="absolute w-full left-0 top-full duration-300"
          :class="!setPlaceTo?.value ? 'scale-100' : 'scale-0 w-0 h-0'"
        >
          <Suspense>
            <template #default>
              <VDatePicker
                v-if="showCalendar"
                class="!w-full !bg-white/10 !text-white !border-0"
                style="box-shadow: 0 0 10px 0 white !important"
                v-model="date"
                @update:model-value="myfunction"
                mode="dateTime"
                is24hr
              />
            </template>
            <template #fallback>
              <div>Yuklanmoqda...</div>
            </template>
          </Suspense>
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
