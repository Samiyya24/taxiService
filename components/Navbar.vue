<script setup>
import { ref } from "vue";

const showDropdown = ref(false);
const showSidebar = ref(false);
const currentLanguage = ref("O’zbekcha");
const languages = ref([
  { full: "O’zbekcha", short: "UZ" },
  { full: "Krilcha", short: "KR" },
  { full: "Inglizcha", short: "ENG" },
  { full: "Ruscha", short: "RU" },
]);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const switchLanguage = (language) => {
  currentLanguage.value = language.full;
  showDropdown.value = false;
};
</script>

<template>
  <div class="bg-primary text-white fixed w-full z-10">
    <div class="container relative">
      <div class="flex justify-between items-center">
        <nuxt-link to="/home">
          <img class="md:w-[150px] w-[70px]" src="/logo.png" alt="" />
        </nuxt-link>
        <div class="flex gap-10 items-center">
          <ul class="flex gap-[30px] max-md:hidden">
            <li>
              <nuxt-link to="/about">Biz haqimizda</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/questions">Savol/javob</nuxt-link>
            </li>
          </ul>
          <div class="relative flex items-center gap-3">
            <div class="relative">
              <div
                @click="toggleDropdown"
                class="cursor-pointer flex items-center gap-3"
              >
                <p class="max-md:hidden">{{ currentLanguage }}</p>
                <p class="md:hidden">
                  {{
                    languages.find((lang) => lang.full === currentLanguage)
                      .short
                  }}
                </p>
                <img src="/down.svg" alt="Toggle Dropdown" />
              </div>
              <transition name="dropdown">
                <div
                  v-if="showDropdown"
                  class="absolute bg-white text-black mt-1 rounded shadow"
                >
                  <span
                    v-for="language in languages"
                    :key="language.full"
                    @click="switchLanguage(language)"
                    class="block px-4 py-2 cursor-pointer"
                  >
                    <span class="max-md:hidden">{{ language.full }}</span>
                    <span class="md:hidden">{{ language.short }}</span>
                  </span>
                </div>
              </transition>
            </div>
            <img class="max-md:hidden" src="/user.svg" alt="User" />
            <img
              @click="toggleSidebar"
              class="md:hidden cursor-pointer"
              src="/burger.svg"
              alt="Sidebar"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Sidebar -->
  <div
    v-if="showSidebar"
    @click="toggleSidebar"
    class="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-20"
  >
    <div class="absolute right-0 top-0 bg-primary w-2/3 h-full text-white p-5">
      <ul>
        <li class="mb-5">
          <nuxt-link to="/about" @click="toggleSidebar"
            >Biz haqimizda</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/questions" @click="toggleSidebar"
            >Savol/javob</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.9s ease, transform 0.9s ease;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.dropdown-enter-to,
.dropdown-leave {
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
