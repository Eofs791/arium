<script setup lang="ts">
import { useLinkIntercepter } from '../../composables/useLinkIntercepter.ts';
import { iconList } from '../../constants/icons.ts';
import DesktopBackground from './DesktopBackground.vue';
import DesktopIcon from './DesktopIcon.vue';
import DesktopDock from './Dock/DesktopDock.vue';
import WindowManager from './WindowManager.vue';

useLinkIntercepter()
</script>

<template>
    <div class="relative w-full h-full">
        <DesktopBackground />

        <div class="absolute px-12 py-10 grid grid-cols-2 gap-8">
            <div v-for="(col, index) in iconList" :key="index" class="grid grid-cols-1 gap-3">
                <DesktopIcon v-for="(item, index) in col" v-bind="item" :key="index" />
            </div>
        </div>

        <DesktopDock class="absolute z-9999 justify-self-center bottom-8" />

        <WindowManager class="relative w-full h-full inset-0 z-20 pointer-events-none" />
    </div>
</template>