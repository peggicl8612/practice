<template>
    <VuePdfEmbed :source="pdfUrl" />
  </template>
  
  <script setup lang="ts">
  import VuePdfEmbed from 'vue-pdf-embed';
  const pdfUrl = '/test.pdf'

  console.log("pdfUrl", pdfUrl)
  console.log("pdfUrl type", typeof pdfUrl)
  </script>
  
  <style scoped>
  
  </style>