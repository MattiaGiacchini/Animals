<template>
    <router-link :to="`animals/${id}`"
        class="rounded-md bg-white w-96 flex flex-col p-6 text-lg font-medium shadow-lg hover:cursor-pointer">
        <div class="text-3xl font-semibold bg-primary-light/50 rounded-md mb-6 p-2">{{ name }}</div>
        <div class="flex flex-col">
            <div class="flex justify-start">Type: {{ type }}</div>
            <div class="flex justify-start">Breed: {{ breed }}</div>
        </div>
        <div class="flex flex-col">
            <div class="flex justify-start">Gender: {{ gender }}</div>
        </div>
        <div class="flex flex-col">
            <div class="flex justify-start">Vaccinated: {{ vaccinated ? "YES" : "NO" }}</div>
            <div class="flex justify-start">Last visit: {{ new Date(lastVisit).toLocaleDateString("es-ES") }}</div>
        </div>
    </router-link>
</template>
  
<script>
export default {
    name: "uiAnimalCard",
    props: {
        id: { type: String, default: null },
        name: { type: String, default: null },
        type: { type: String, default: null },
        breed: { type: String, default: null },
        gender: { type: String, default: null },
        vaccinated: { type: Boolean, default: false },
        lastVisit: { type: String, default: null },
        lastUpdate: { type: String, default: null },
    },

};
</script>