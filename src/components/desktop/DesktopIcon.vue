<script setup lang="ts">
import { computed } from 'vue'
import { type DesktopIcon } from '../../types/desktop';

const props = defineProps<DesktopIcon>()

const isLink = computed(() => typeof props.action === 'string')

const handleClick = () => {
    if (typeof props.action === 'function') {
        props.action()
    }
}
</script>

<template>
    <component :is="isLink ? 'a' : 'div'" :href="isLink ? action : undefined" :target="isLink ? '_blank' : undefined" :data-site-name="siteName"
        @click="handleClick" class="icon-item group cursor-pointer flex flex-col items-center gap-2 no-underline">

        <div class="icon-box-wrap relative w-14 h-14">
            <div
                class="icon-box relative z-1 flex items-center justify-center w-full h-full bg-surface border-2 border-ink rounded-xl">
                <div class="custom-duotone">
                    <component v-if="icon" :is="icon" :size="24" weight="duotone" />
                </div>
            </div>
        </div>


        <span
            class="icon-label flex items-center justify-center px-2 py-.5 font-bold bg-surface border-1 border-ink rounded-md">{{
                title }}</span>
    </component>
</template>

<style scoped>
.icon-box-wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translate(4px, 4px);
    border: 1.5px solid var(--color-ink);
    border-radius: var(--radius-xl);
    background-image: repeating-linear-gradient(-45deg,
            var(--color-ink) 0,
            var(--color-ink) 1px,
            transparent 1px,
            transparent 4px);
    opacity: 0.35;
    z-index: 0;
    transition: transform 0.18s ease;
}

.icon-box {
    transition: transform 0.18s ease;
}

.icon-item:hover .icon-box {
    transform: translate(-1px, -1px);
}

.icon-item:hover .icon-box-wrap::after {
    transform: translate(5.4px, 4.5px);
    opacity: 0.5;
}
</style>