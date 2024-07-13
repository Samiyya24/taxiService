<script setup>
const currentComponent = ref("taxi");

const setComponent = (component) => {
  currentComponent.value = component;
};
</script>

<template>
  <div class="home min-h-screen min-w-full md:pt-52 pt-24">
    <div class="container text-center">
      <div
        class="text-white border border-primary md:text-[26px] text-xs font-medium rounded-full md:max-w-[620px] mx-auto flex items-center"
      >
        <button
          class="py-3 md:px-[74px] px-[48px] rounded-s-full"
          :class="{
            'bg-primary': currentComponent === 'taxi',
            'bg-transparent': currentComponent !== 'taxi',
          }"
          @click="setComponent('taxi')"
        >
          Taxi
        </button>
        <button
          class="py-3 md:px-[74px] px-[48px]"
          :class="{
            'bg-primary': currentComponent === 'yuk',
            'bg-transparent': currentComponent !== 'yuk',
          }"
          @click="setComponent('yuk')"
        >
          Yuk
        </button>
        <button
          class="py-3 md:px-[74px] px-[48px] rounded-e-full"
          :class="{
            'bg-primary': currentComponent === 'pochta',
            'bg-transparent': currentComponent !== 'pochta',
          }"
          @click="setComponent('pochta')"
        >
          Pochta
        </button>
      </div>
    </div>
    <div v-if="currentComponent === 'taxi'">
      <HomeTaxi />
    </div>
    <div v-if="currentComponent === 'yuk'">
      <HomeYuk />
    </div>
    <div v-if="currentComponent === 'pochta'">
      <HomePochta />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-image: url("/home_bg.png");
  background-size: cover;
  background-position: center;
}

button {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
}

button.bg-primary {
  background-color: #f7931e;
}

button.bg-transparent {
  background-color: transparent;
}
</style>
