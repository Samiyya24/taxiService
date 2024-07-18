<script setup>
import regionsData from '../../JSON/regions.json';
import 'v-calendar/style.css';

const date = ref(new Date());
const cities = reactive(regionsData.regions);
const setPlaceFrom = ref(null);
const setPlaceTo = ref(null);
const showFromList = ref(false);
const showToList = ref(false);
const showCalendar = ref(false);
const selectRegionFrom = ref(0);
const selectRegionTo = ref(0);
let selectedDate = ref(null);

const setPlaceFromDistrict = (region, district) => {
  setPlaceFrom.value = `${region}. ${district}`;
};

const setPlaceToDistrict = (region, district) => {
  setPlaceTo.value = `${region}. ${district}`;
};

const selectedRegionFrom = (index) => {
  showFromList.value = false;
  selectRegionFrom.value = index;
};

const selectedRegionTo = (index) => {
  showToList.value = false;
  selectRegionTo.value = index;
};

const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value;
  if (showCalendar.value) {
    showFromList.value = false;
    showToList.value = false;
  }
  console.log(date.value);
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
    month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    day = String(selectedDate.getDate()).padStart(2, '0');
    selectedDate = `${year}.${month}.${day}`;
  } else {
    alert('tanlamang');
  }
};
</script><template>
  <div>
    <div
      v-if="showToList || showFromList"
      id="back"
      @click="hideAllLists"
      class="bg-transparent w-screen h-screen fixed top-0 left-0 z-30"
    ></div>

    <!-- QAYERGA -->
    <button
      class="bg-white/10 rounded-md rounded-b-none py-3 px-[24px] relative"
      @click="toggleToList"
    >
      <div
        class="duration-300"
        :class="!setPlaceTo?.value ? 'scale-100' : 'scale-0 w-0 h-0'"
      >
        <p class="py-5 px-12 text-3xl text-white">Qayerga</p>
      </div>
      <div
        class="flex flex-col gap-3 duration-300"
        :class="setPlaceTo?.value ? 'scale-100' : 'scale-0 w-0 h-0'"
      >
        <p>Qayrega</p>
        <p class="text-3xl line-clamp-1">
          {{ setPlaceTo?.value ? setPlaceTo.value : "" }}
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