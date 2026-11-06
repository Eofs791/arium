<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { frostnovaFrames } from '../../assets/frostnovaFrams';

const currentFrame = ref(0);
let timer: number | undefined

onMounted(() => {
    timer = window.setInterval(() => {
        currentFrame.value = (currentFrame.value + 1) % frostnovaFrames.length
    }, 3000)
})

onUnmounted(() => {
    clearInterval(timer)
})
</script>

<template>
    <pre class="text-[10px] leading-[14px] tracking-normal">{{ frostnovaFrames[currentFrame] }}</pre>
</template>