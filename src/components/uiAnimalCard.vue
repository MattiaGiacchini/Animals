<template>
    <div class="rounded-md bg-white w-96 flex flex-col gap-1 p-6 text-lg font-medium">
        <div class="text-3xl font-semibold bg-primary-ultralight rounded-md mb-2 p-2">{{ name }}</div>
        <div class="flex flex-row justify-between">
            <div>{{ type }}</div>
            <div>{{ breed }}</div>
        </div>
    </div>
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
    }
};
</script>