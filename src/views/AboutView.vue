<template>
  <div class="about">
    <h1>Scanner</h1>
    <h3 v-if="user">Hi, {{ user.name }}</h3>

  </div>

  <div style="width: 300px;">
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
</div>
  <input type="" name="" id="result">
</template>

<script setup>
import { StreamBarcodeReader } from "vue-barcode-reader";
import { ref, onMounted } from "vue";
import axios from "axios";

const user = ref(null);

const onDecode = (text) => {
  const resultInput = document.getElementById('result');
  if (resultInput) {
    resultInput.value = text;
  }
};

const onLoaded = () => {
  console.log(`Ready to start scanning barcodes`);
};

onMounted(async () => {
  const userId = localStorage.getItem('id');
  const response = await axios.get(`user/${userId}`);
  user.value = response.data;
});
</script>

<!-- <script setup>

import { StreamBarcodeReader } from "vue-barcode-reader"


const onDecode = (text) => {
  const resultInput = document.getElementById('result');
  if (resultInput) {
    resultInput.value = text;
  }
};

const onLoaded = () => {
  console.log(`Ready to start scanning barcodes`);
};

</script>

<script>
import axios from "axios";
export default {
  // name : 'about',
  data() {
    return {
      user: null
    }
  },
  async created() {
    const userId = localStorage.getItem('id');
    const response = await axios.get(`user/${userId}`);
    // this.user = response.data;
    console.log(response);
    // Store the user data in the `user` variable
    this.user = response.data;

    // Display the user name
    // this.$refs.name.textContent = this.user.name;
  }
}
</script> -->

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
