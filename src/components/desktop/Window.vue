<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { type WindowInstance } from '../../types/desktop';
import { useDraggable, useMediaQuery } from '@vueuse/core';

const props = defineProps<WindowInstance>()
const emit = defineEmits<{
    (e: 'focus', id: string): void
    (e: 'close', id: string): void
}>()

const isMobile = useMediaQuery('(max-width: 767px)')

const window = useTemplateRef('draggable')
const windowTitle = useTemplateRef('window-title')

const { style } = useDraggable(window, {
    initialValue: { x: props.x, y: props.y },
    preventDefault: true,
    disabled: isMobile,
    handle: windowTitle,
    onStart: () => {
        emit('focus', props.id)
    }
})
</script>

<template>
    <div ref="draggable" :style="[
        style,
        { width: width ? `${width}px` : 'max-content', height: height ? `${height}px` : 'auto', zIndex: zIndex }
    ]" class="window-shell absolute" @mousedown="$emit('focus', id)">

        <div class="window-shadow absolute inset-0 pointer-events-none"></div>

        <div class="window-body relative bg-surface border-2 border-ink rounded-xl flex-col w-full max-h-full overflow-hidden">
            <div ref="window-title" class="window-title cursor-grab w-full shrink-0 flex flex-row items-center justify-between h-9 border-b-2">
                <span class="mx-3 font-bold">{{ title }}</span>
                <button
                    class="mx-3 h-5.5 w-5.5 border rounded-md flex items-center justify-center font-black bg-surface hover:bg-ink hover:text-surface transition-colors duration-500"
                    @click="$emit('close', id)">
                    <span class="translate-y-[-0.5px]">×</span>
                </button>
            </div>

            <div class="window-content flex-1 min-h-0">
                <component :is="content" v-bind="props.props" @close="$emit('close', id)" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .window-shell {
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    max-width: 100vw !important;
    max-height: 80vh;
  }
}

.window-shadow {
    transform: translate(5px, 5px);
    border: 1.5px solid var(--color-ink);
    border-radius: var(--radius-xl);
    background-image: repeating-linear-gradient(-45deg,
            var(--color-ink) 0,
            var(--color-ink) 1px,
            transparent 1px,
            transparent 4px);
    opacity: 0.35;
    pointer-events: none;
}
</style>