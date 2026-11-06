<script setup lang="ts">
import { useWindowStore } from '../../composables/useWindowStore.ts';
import Window from './Window.vue';
import { storeToRefs } from 'pinia';

const windowStore = useWindowStore()

const { windows } = storeToRefs(windowStore)
</script>

<template>
    <TransitionGroup name="window" class="relative w-full h-full">
        <Window class="pointer-events-auto" v-for="window in windows" :key="window.id" v-bind="window"
            @close="windowStore.closeWindow(window.id)" @focus="windowStore.bringToFront(window.id)" />
    </TransitionGroup>
</template>

<style scoped>
.window-enter-from {
    opacity: 0;
    transform: scale(0.9);
}

.window-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

.window-enter-active,
.window-leave-active {
    transition: opacity 0.18s ease, transform 0.18s ease;
}
</style>