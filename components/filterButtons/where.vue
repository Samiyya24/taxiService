<script setup>
import { reactive, ref } from "vue";
import regionsData from "../../JSON/regions.json";
import "v-calendar/style.css";

const cities = reactive(regionsData.regions);
const setPlaceFrom = ref(null);
const setPlaceTo = ref(null);
const showFromList = ref(false);
const showToList = ref(false);
const showCalendar = ref(false);
const selectRegionFrom = ref(0);
const selectRegionTo = ref(0);

const setPlaceFromDistrict = (region, district) => {
  setPlaceFrom.value = `${region}. ${district}`;
  hideAllLists();
};

const setPlaceToDistrict = (region, district) => {
  setPlaceTo.value = `${region}. ${district}`;
  hideAllLists();
};

const selectedRegionFrom = (index) => {
  selectRegionFrom.value = index;
  showFromList.value = true; // Add this line to ensure the list remains open
};

const selectedRegionTo = (index) => {
  selectRegionTo.value = index;
  showToList.value = true; // Add this line to ensure the list remains open
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

const hideAllLists = () => {
  showToList.value = false;
  showFromList.value = false;
  showCalendar.value = false;
};
</script>

<template>
  <div>
    <div
      v-if="showToList || showFromList"
      id="back"
      @click="hideAllLists"
      class="bg-transparent w-screen h-screen fixed top-0 left-0 z-30"
    ></div>

    <!-- QAYERDAN -->
    <button
      class="bg-white/10 rounded-md py-3 px-[24px] relative"
      @click="toggleFromList"
    >
      <div
        class="duration-300"
        :class="!setPlaceFrom?.value ? 'scale-100' : 'scale-0 w-0 h-0'"
      >
        <p class="py-5 px-12 text-3xl text-white">Qayerdan</p>
      </div>
      <div
        class="flex flex-col gap-3 duration-300"
        :class="setPlaceFrom?.value ? 'scale-100' : 'scale-0 w-0 h-0'"
      >
        <p>Qayerdan</p>
        <p class="text-3xl line-clamp-1">
          {{ setPlaceFrom?.value ? setPlaceFrom.value : "" }}
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
                setPlaceFromDistrict(cities[selectRegionFrom].region, district)
              "
            >
              <p>{{ district }}</p>
            </span>
          </div>
        </div>
      </transition>
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
