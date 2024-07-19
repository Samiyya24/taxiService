<template>
  <div>
    <div>
      <div class="md:flex justify-between items-center mt-16 mb-7">
        <SelectAddress title="Qayerdan" @selectaddress="SelectFrom" />
        <SelectAddress title="Qayerga" @selectaddress="SelectTo" />
        <FilterButtonsCalendar />

        <!-- QIDIRISH -->
        <button
          class="bg-primary md:py-7 md:px-14 mt-2 max-md:ml-[20%] py-3 px-14 text-3xl rounded-md"
        >
          Qidirish
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const filterForm = ref({
  to: "",
  from: "",
  when: "",
});
const SelectTo = (address) => {
  filterForm.to = address;
};
const SelectFrom = (address) => {
  filterForm.from = address;
};
</script>
