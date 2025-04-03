<template>
  <q-layout view="hHh lpR fFf">
    <router-view />
    <DjiTelemetry />
  </q-layout>
</template>

<script setup>
import DjiTelemetry from "./components/DjiTelemetry.vue";
</script>
