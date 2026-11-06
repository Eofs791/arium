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
        class="flex flex-col justify-between gap-3 w-full min-w-[240px] max-w-xs space-y-1 p-3 leading-relaxed text-ink">
        <div class="flex flex-col justify-center items-center">
            <p>确认前往</p>
            <h2 class="text-sm font-black">{{ siteName }}</h2>
            <p class="text-xs font-normal opacity-60">{{ href }}</p>
        </div>

        <div class="confirm-button grid grid-cols-2 gap-2 font-bold">
            <button @click="handleYes">YES</button>
            <button @click="$emit('close')">NO</button>
        </div>
    </div>
</template>

<style scoped>
.confirm-button>* {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border: 1px solid;
    border-radius: 9999px;
    box-shadow: 0 4px 0 rgba(34, 34, 34, 0.12);
    transition: transform 0.2s ease;
}

.confirm-button>*:hover {
    transform: translate(-1px, -1px);
    box-shadow: 0 5px 0 rgba(34, 34, 34, 0.12);
}
</style>