<script setup>
import { ref } from "vue";

const showDropdown = ref(false);
const currentLanguage = ref("O’zbekcha");
const languages = ref(["O’zbekcha", "Krilcha", "Inglizcha", "Ruscha"]);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const switchLanguage = (language) => {
  currentLanguage.value = language;
  showDropdown.value = false; // dropdownni yopamiz
};
</script>

<template>
  <div class="bg-primary text-white">
    <div class="container flex justify-between items-center">
      <img class="w-[150px]" src="/logo.png" alt="" />
      <div class="flex gap-10 items-center">
        <ul class="flex gap-[30px]">
          <li><nuxt-link to="/about">Biz haqimizda</nuxt-link></li>
          <li><nuxt-link to="/questions">Savol/javob</nuxt-link></li>
        </ul>
        <div class="relative flex items-center gap-3">
          <div class="relative">
            <div @click="toggleDropdown" class="cursor-pointer flex items-center gap-3">
              <p>{{ currentLanguage }}</p>
              <img src="/down.svg" alt="" />
            </div>
            <transition name="dropdown">
              <div v-if="showDropdown" class="absolute bg-white text-black mt-1 rounded shadow">
                <span v-for="language in languages" :key="language" @click="switchLanguage(language)" class="block px-4 py-2 cursor-pointer">{{ language }}</span>
              </div>
            </transition>
          </div>
          <img src="/user.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.9s ease, transform 0.9s ease;
}
.dropdown-enter, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.dropdown-enter-to, .dropdown-leave {
  opacity: 1;
  transform: translateY(0);
}

.relative {
  position: relative;
}
.mt-1 {
  margin-top: 0.25rem;
}
.rounded {
  border-radius: 0.25rem;
}
.shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.cursor-pointer {
  cursor: pointer;
}
</style>
