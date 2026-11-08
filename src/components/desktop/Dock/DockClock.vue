<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core';

const formattedTime = useDateFormat(useNow(), 'HH:mm')
</script>

<template>
    <div class="dock-clock flex items-center tabular-nums shrink-0 font-semibold">
        <span class="tracking-widest">{{ formattedTime }}</span>
    </div>
</template>