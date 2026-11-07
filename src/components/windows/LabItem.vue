<script setup lang="ts">
import { type LabItem } from '../../types/desktop';

const props = defineProps<LabItem>();
</script>

<template>
    <a class="btn-pill border-1 rounded-xl px-3 py-2 w-[180px] flex flex-col gap-1 no-underline" :href="url" :data-site-name="title">
        <blockquote class="text-[10px]">{{ id }}</blockquote>
        <h1>{{ title }}</h1>
        <p class="text-muted italic max-w-[12em]">{{ desc }}</p>
    </a>
</template>

<style scoped>
</style>