<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const surname = ref("");
const phone = ref("");
const password = ref("");

const register = () => {
  console.log("Ism:", name.value);
  console.log("Familiya:", surname.value);
  console.log("Nomer:", phone.value);
  console.log("Parol:", password.value);
};
const data = {
  name: name.value,
  suname: surname.value,
};
try {
  axios.post("localhost:3000/api/user", data);
} catch (error) {
  console.log(error);
}
</script>

<template>
  <div class="login min-h-screen flex items-center justify-center">
    <div class="w-[400px] bg-white/20 p-8 rounded-lg shadow-md max-w-md">
      <form @submit.prevent="register">
        <div class="text-center mb-4">
          <h2 class="text-2xl text-white font-bold">Ro'yxatdan o'tish</h2>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Ism</label>
          <input
            v-model="name"
            type="text"
            placeholder="Ism"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Familiya</label>
          <input
            v-model="surname"
            type="text"
            placeholder="Familiya"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Nomer</label>
          <input
            v-model="phone"
            type="text"
            placeholder="Sizning raqamingiz"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Parol</label>
          <input
            v-model="password"
            type="password"
            placeholder="Sizning parolingiz"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="bg-orange-500 w-full text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Ro'yxatdan o'tish
          </button>
        </div>
        <div class="text-left mt-4">
          <nuxt-link class="text-white hover:underline text-sm" to="login"
            >Ro'yxatdan o'tganmisiz ?</nuxt-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  background-image: url("/login_bg.png");
  background-size: cover;
  background-position: center;
}
</style>
