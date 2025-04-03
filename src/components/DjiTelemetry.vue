<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const telemetry = ref(null);
const errorMessage = ref("");

onMounted(() => {
  if (window.djiBridge) {
    console.log("✅ DJI Bridge disponible");

    // Obtener datos de telemetría del dron
    window.djiBridge.aircraft.getFlightStatus()
      .then(data => {
        telemetry.value = data;
        console.log("📡 Telemetría recibida:", data);

        // Enviar datos al backend
        axios.post("/api/telemetry", data)
          .then(response => console.log("✅ Datos enviados:", response.data))
          .catch(error => {
            console.error("❌ Error enviando datos:", error);
            errorMessage.value = "Error enviando datos al backend";
          });
      })
      .catch(error => {
        console.error("❌ Error obteniendo telemetría:", error);
        errorMessage.value = "No se pudo obtener telemetría";
      });
  } else {
    console.log("❌ DJI Bridge no disponible");
    errorMessage.value = "DJI Bridge no está disponible";
  }
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
            <q-item-section>🚀 Estado: {{ telemetry }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

