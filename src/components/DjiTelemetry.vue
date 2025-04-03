<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const telemetry = ref(null);
const errorMessage = ref("");

onMounted(() => {
  const datos = {
    message: "Prueba de telemetría",
    timestamp: new Date().toISOString(),
  };

  axios.post("https://backend-dji.onrender.com/api/dji/telemetry/webhook", datos)
    .then(response => {
      console.log("✅ Datos enviados:", response.data);
      telemetry.value = response.data; // Guarda los datos si es necesario
    })
    .catch(error => {
      console.error("❌ Error enviando datos:", error);
      errorMessage.value = "Error enviando datos al backend";
    });
});
</script>

<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <h1>📡 Telemetría del Dron</h1>
        <q-banner v-if="errorMessage" dense class="bg-red text-white">
          ⚠ {{ errorMessage }}
        </q-banner>
        <q-list v-if="telemetry">
          <q-item>
            <q-item-section>🚀 Respuesta: {{ telemetry }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

