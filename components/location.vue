<script setup>
import { format } from "date-fns";
import regionsData from "../../JSON/regions.json";
import VCalendar from "v-calendar";
import "v-calendar/style.css";

const date = ref(new Date());
const cities = reactive(regionsData.regions);

const setPlaceFrom = ref(null);
const setPlaceTo = ref(null);

const setPlaceFromDistrict = (region, district) => {
  setPlaceFrom.value = `${region}. ${district}`;
};

const setPlaceToDistrict = (region, district) => {
  setPlaceTo.value = `${region}. ${district}`;
};

const showFromList = ref(false);
const showToList = ref(false);

const selectRegionFrom = ref(0);
const selectRegionTo = ref(0);

const selectedRegionFrom = (index) => {
  showFromList.value = false;
  selectRegionFrom.value = index;
};

const selectedRegionTo = (index) => {
  showToList.value = false;
  selectRegionTo.value = index;
};

const toggleFromList = () => {
  showFromList.value = !showFromList.value;
  if (showFromList.value) {
    showToList.value = false;
  }
};

const toggleToList = () => {
  showToList.value = !showToList.value;
  if (showToList.value) {
    showFromList.value = false;
  }
};
</script>

<template>
  <div
    v-if="showToList || showFromList"
    id="back"
    @click="
      showToList = false;
      showFromList = false;
    "
    class="bg-transparent w-screen h-screen fixed top-0 left-0 z-30"
  ></div>
  <div>
    <div class="md:flex justify-between items-center mt-16 mb-7">
      <!-- QAYERDAN -->
      <div
        class="bg-white/10 rounded-md py-3 px-[24px] relative w-[22%]"
        @click="toggleFromList"
      >
        <div
          class="duration-300"
          :class="!setPlaceFrom ? 'scale-100' : 'scale-0 w-0 h-0'"
        >
          <p class="py-5 px-12 text-3xl text-white">Qayerdan</p>
        </div>
        <div
          class="flex flex-col gap-3 duration-300"
          :class="setPlaceFrom ? 'scale-100' : 'scale-0 w-0 h-0'"
        >
          <p>Qayerdan</p>
          <p class="text-3xl line-clamp-1">
            {{ setPlaceFrom ? setPlaceFrom : "" }}
          </p>
        </div>
        <transition name="slide-fade" v-if="showFromList">
          <div
            class="flex mt-[17px] z-40 w-[500px] bg-black/60 text-2xl max-h-40 absolute left-0"
          >
            <!-- regions -->
            <div
              class="flex-col border flex cursor-pointer overflow-auto overflow-x-hidden"
            >
              <span
                v-for="(city, index) in cities"
                :key="city.region"
                class="p-2 hover:bg-white/20 w-[300px]"
                @click="selectedRegionFrom(index)"
              >
                {{ city.region }}
              </span>
            </div>
            <!-- districts -->
            <div
              class="flex flex-col overflow-y-auto w-full"
              v-if="selectRegionFrom !== null"
            >
              <span
                v-for="district in cities[selectRegionFrom].district"
                :key="district"
                class="p-2 hover:bg-white/20"
                @click="
                  setPlaceFromDistrict(
                    cities[selectRegionFrom].region,
                    district
                  )
                "
              >
                <p>{{ district }}</p>
              </span>
            </div>
          </div>
        </transition>
      </div>

      <!-- QAYERGA -->

      <div
        class="bg-white/10 rounded-md rounded-b-none py-3 px-[24px] w-[22%] relative"
        @click="toggleToList"
      >
        <div
          class="duration-300"
          :class="!setPlaceTo ? 'scale-100' : 'scale-0 w-0 h-0'"
        >
          <p class="py-5 px-12 text-3xl text-white">Qayerga</p>
        </div>
        <div
          class="flex flex-col gap-3 duration-300"
          :class="setPlaceTo ? 'scale-100' : 'scale-0 w-0 h-0'"
        >
          <p>Qayrega</p>
          <p class="text-3xl line-clamp-1">
            {{ setPlaceTo ? setPlaceTo : "" }}
          </p>
        </div>

        <transition name="slide-fade" v-if="showToList">
          <div
            class="flex mt-[17px] w-[500px] z-40 bg-black/60 text-2xl max-h-40 absolute left-0"
          >
            <!-- regions -->
            <div
              class="flex-col border flex cursor-pointer overflow-auto overflow-x-hidden"
            >
              <span
                v-for="(city, index) in cities"
                :key="city.region"
                class="p-2 hover:bg-white/20 w-[300px]"
                @click="selectedRegionTo(index)"
              >
                {{ city.region }}
              </span>
            </div>
            <!-- districts -->
            <div
              class="flex flex-col overflow-y-auto w-full"
              v-if="selectRegionTo !== null"
            >
              <span
                v-for="district in cities[selectRegionTo].district"
                :key="district"
                class="p-2 hover:bg-white/20"
                @click="
                  setPlaceToDistrict(cities[selectRegionTo].region, district)
                "
              >
                <p>{{ district }}</p>
              </span>
            </div>
          </div>
        </transition>
      </div>
      <!-- QACHON -->
      <div class="relative flex gap-[50px] bg-white/10 rounded-md mt-2 md">
        <div class="p-3">
          <div class="flex gap-16 py-4 pr-2 pl-16">
            <p class="text-3xl gap-[76px] text-white">Qachon</p>
            <img src="/public/calendar.svg" alt="calendar" class="" />
          </div>
          <div
            class="absolute w-full left-0 top-full duration-300"
            :class="!setPlaceTo ? 'scale-100' : 'scale-0 w-0 h-0'"
          >
            <VDatePicker
              class="!w-full !bg-white/10 !text-white !border-0"
              style="box-shadow: 0 0 10px 0 white !important"
              v-model="date"
              mode="dateTime"
              is24hr
            />
          </div>
        </div>
      </div>
      <!-- QIDIRISH -->
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
