<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import axios from "axios";

const telemetry = ref(null);
const errorMessage = ref("");
let intervalId = null;

const fetchTelemetry = async () => {
  try {
    const response = await axios.get("https://backend-dji.onrender.com/api/dji/historico");
    console.log("📡 Datos en vivo recibidos:", response.data);
    telemetry.value = response.data;
  } catch (error) {
    console.error("❌ Error obteniendo datos:", error);
    errorMessage.value = "Error obteniendo datos del backend";
  }
};

onMounted(() => {
  fetchTelemetry(); // Cargar datos al inicio

  // Configurar polling cada 3 segundos
  intervalId = setInterval(fetchTelemetry, 3000);
});

onUnmounted(() => {
  // Limpiar el intervalo cuando el componente se desmonta
  clearInterval(intervalId);
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
          <q-item v-for="(item, index) in telemetry" :key="index">
            <q-item-section>🚀 Datos: {{ item }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>
