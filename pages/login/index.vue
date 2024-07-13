<script setup>
import { ref } from "vue";
import axios from "axios";

const phone = ref("");
const password = ref("");

const login = async () => {
  console.log("Nomer:", phone.value);
  console.log("Parol:", password.value);

  const data = {
    phone: phone.value,
    password: password.value,
  };

  try {
    const response = await axios.post("http://localhost:3000/api/login", data);
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<template>
  <div class="login min-h-screen flex items-center justify-center">
    <div class="w-[400px] bg-white/20 p-8 rounded-lg shadow-md max-w-md">
      <form @submit.prevent="login">
        <div class="text-center mb-4">
          <h2 class="text-2xl font-bold text-white">Kirish</h2>
        </div>
        <div class="mb-4">
          <label class="block text-white">Nomer</label>
          <input
            v-model="phone"
            type="text"
            placeholder="Sizning raqamingiz"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
        <div class="mb-4">
          <label class="block text-white">Parol</label>
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
            Kirish
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 400px;
}
.login {
  background-image: url("/login_bg.png");
  background-size: cover;
  background-position: center;
}
</style>
