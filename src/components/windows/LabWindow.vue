<script setup lang="ts">
import LabItem from './LabItem.vue';
import { labList } from '../../constants/labs.ts';
</script>

<template>
    <div class="w-max max-w-md space-y-3 p-3 leading-relaxed">
        <p class="text-muted">建设中……</p>
        <div class="lab-box flex flex-wrap gap-3">
            <LabItem v-for="(lab, index) in labList" v-bind="lab" :key="index" />

            <div class="btn-pill border-1 rounded-xl border-dashed px-3 py-2 w-[180px] flex flex-col gap-1">
                <blockquote class="text-[10px] opacity-60">{{ String(labList.length + 1).padStart(2, '0') }}</blockquote>
                <h1 class="opacity-60">[unknown]</h1>
            </div>
        </div>
    </div>
</template>