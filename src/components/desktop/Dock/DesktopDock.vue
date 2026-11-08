<script setup lang="ts">
import DockPlayer from './DockPlayer.vue';
import DockClock from './DockClock.vue';
import DockerDivider from './DockerDivider.vue';
</script>

<template>
    <div
        class="dock flex items-center justify-between gap-3 w-fit h-11 border-2 border-ink bg-surface rounded-full px-3 whitespace-nowrap select-none leading-none">
        <div class="dock-brand flex items-center gap-1 shrink-0">
            <span class="text-sm translate-y-[-0.5px] font-semibold">「-arium」</span>
        </div>

        <DockerDivider />
        <DockPlayer />
        <DockerDivider />
        <DockClock />
    </div>
</template>

<style scoped>
.dock {
    box-shadow: 0 4px 0 rgba(34, 34, 34, 0.12);
}
</style>