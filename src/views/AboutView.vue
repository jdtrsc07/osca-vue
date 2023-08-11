<template>
  <div class="about">
    <h1>Scanner</h1>
  </div>

  
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
  <input type="" name="" id="result">
</template>

<script setup>

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

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
