<script setup lang="ts">
interface ComfirmWindowProps {
    href: string
    siteName: string
}

const props = defineProps<ComfirmWindowProps>()
const emit = defineEmits<{
    (e: 'close'): void
}>()

const handleYes = () => {
    window.open(props.href, '_blank')
    emit('close')
}
</script>

<template>
    <div
        class="flex flex-col justify-between gap-3 w-full min-w-[240px] max-w-xs space-y-1 p-3 leading-relaxed">
        <div class="flex flex-col justify-center items-center">
            <p>确认前往</p>
            <h1 class="tracking-normal">{{ siteName }}</h1>
            <p class="text-muted">{{ href }}</p>
        </div>

        <div class="grid grid-cols-2 gap-2 font-bold">
            <button class="btn-pill" @click="handleYes">YES</button>
            <button class="btn-pill" @click="$emit('close')">NO</button>
        </div>
    </div>
</template>