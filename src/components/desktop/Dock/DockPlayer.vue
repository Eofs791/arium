<script setup lang="ts">
import { ref, onUnmounted, Transition } from 'vue';
import bgmUrl from '@/assets/unconnectedCord.mp3';
import { PhPlay, PhPause } from '@phosphor-icons/vue';

const bgm = new Audio(bgmUrl)

bgm.loop = true
bgm.volume = 0.05
const isPlaying = ref(false)

const togglePlay = () => {
    if (isPlaying.value) {
        bgm.pause()
    } else {
        bgm.play()
    }

    isPlaying.value = !isPlaying.value
}

onUnmounted(() => {
    bgm.pause()
})
</script>

<template>
    <div class="flex items-center gap-2">
        <button @click="togglePlay">
            <transition class="custom-duotone" name="play-pause" mode="out-in">
                <component :is="isPlaying ? PhPause : PhPlay" :size="16" weight="duotone" />
            </transition>
        </button>
    </div>
</template>

<style scoped>
.play-pause-enter-active,
.play-pause-leave-active {
    transition: all 0.15s ease-in-out;
}

.play-pause-enter-from,
.play-pause-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.play-pause-enter-to,
.play-pause-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>