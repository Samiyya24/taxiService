<script setup>
import regionsData from "../../JSON/regions.json";
import "v-calendar/style.css";
import { reactive, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const cities = reactive(regionsData.regions);
const setPlaceFrom = ref(null);

const showFromList = ref(false);
const showToList = ref(false);
const selectRegionFrom = ref(0);
const props = defineProps({
  title: String,
});

const target = ref(null);
onClickOutside(target, () => {
  showFromList.value = false;
});

const emit = defineEmits(["selectaddress"]);

const setPlaceFromDistrict = (region, district) => {
  setPlaceFrom.value = `${region}. ${district}`;
  emit("selectaddress", setPlaceFrom.value);
};

const selectedRegionFrom = (index) => {
  showFromList.value = false;
  selectRegionFrom.value = index;
};

const toggleFromList = () => {
  showFromList.value = !showFromList.value;
  if (showFromList.value) {
    showToList.value = false;
  }
};
</script>

<template>
  <div ref="target">
    <!-- QAYERDAN -->
    <div>
      <button
        class="bg-white/20 w-full md:w-[320px] max-md:mt-5 rounded-md px-[24px] relative shadow-md hover:shadow-lg transition-shadow duration-300"
        @click="toggleFromList"
      >
        <div
          class="duration-300"
          :class="!setPlaceFrom ? 'scale-100 gap-3 py-3' : 'scale-0 w-0 h-0'"
        >
          <p class="py-5 px-12 text-3xl text-gray-300">{{ props.title }}</p>
        </div>
        <div
          class="flex flex-col text-left duration-300"
          :class="setPlaceFrom ? 'scale-100 gap-3 py-3' : 'scale-0 w-0 h-0'"
        >
          <p class="text-gray-300">Qayerdan</p>
          <p class="text-3xl line-clamp-1 text-white">
            {{ setPlaceFrom ? setPlaceFrom : "" }}
          </p>
        </div>
        <transition name="slide-fade" v-if="showFromList">
          <div
            class="flex flex-col md:flex-row mt-[13px] z-40 w-full md:w-[225%] text-left bg-gray-700 shadow-lg text-2xl max-h-40 absolute left-0 border border-gray-600 rounded-md"
          >
            <!-- regions -->
            <div
              class="flex-col border-r flex cursor-pointer w-full md:w-[50%] overflow-auto overflow-x-hidden bg-gray-800"
            >
              <span
                v-for="(city, index) in cities"
                :key="city.region"
                class="px-5 py-2 hover:bg-gray-600 text-gray-300"
                @click="selectedRegionFrom(index)"
              >
                {{ city.region }}
              </span>
            </div>
            <!-- districts -->
            <div
              class="flex flex-col overflow-y-auto w-full md:w-[50%] bg-black/80"
              v-if="selectRegionFrom !== null"
            >
              <span
                v-for="district in cities[selectRegionFrom].district"
                :key="district"
                class="py-2 px-7 hover:bg-gray-600 text-gray-300"
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
  transform: translateX(50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
