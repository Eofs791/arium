<script setup lang="ts">
import { onMounted, onUnmounted, markRaw } from 'vue';

// 引入桌面组件
import DesktopBackground from './DesktopBackground.vue';
import DesktopIcon from './DesktopIcon.vue';
import DesktopDock from './Dock/DesktopDock.vue';

// 引入窗口相关组件
import WindowManager from './WindowManager.vue';
import { useWindowStore } from '../../store/window.ts';
import UserWindow from '../windows/UserWindow.vue';
import SystemWindow from '../windows/SystemWindow.vue';
import AsciiWindow from '../windows/AsciiWindow.vue';
import ComfirmWindow from '../windows/ComfirmWindow.vue';

// 引入图标
import { PhSmileySticker, PhGear, PhNotepad } from '@phosphor-icons/vue';

const windowStore = useWindowStore();

const handleOpenUser = () => {
    windowStore.openWindow({
        id: 'image',
        title: '圖像 // IMAGE',
        x: 550,
        y: 50,
        content: markRaw(AsciiWindow)
    })

    setTimeout(() => {
        windowStore.openWindow({
            id: 'user',
            title: '用戶 // USER',
            x: 300,
            y: 150,
            content: markRaw(UserWindow)
        })
    }, 100)
}

const handleOpenSystem = () => {
    windowStore.openWindow({
        id: 'system',
        title: '系統 // SYSTEM',
        x: 400,
        y: 464,
        content: markRaw(SystemWindow)
    })
}

const iconList = [
    [
    { title: 'USER', icon: PhSmileySticker, action: handleOpenUser },
    { title: 'SYSTEM', icon: PhGear, action: handleOpenSystem },
    ], 
    [
    { title: 'BLOG ↗', icon: PhNotepad, action: 'https://blog.saikai.moe', siteName: 'Catarium' }
    ]
]

const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const handleGlobalLinkClick = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest('a')
    if (!anchor) return

    const href = anchor.href
    const siteName = anchor.dataset.siteName || ""
    e.preventDefault()

    windowStore.openWindow({
        id: `confirm-${href}`,
        title: '確認 // CONFIRM',
        x: randomBetween(window.innerWidth * 0.5, window.innerWidth * 0.8),
        y: randomBetween(window.innerHeight * 0.2, window.innerHeight * 0.6),
        content: markRaw(ComfirmWindow),
        props: {
            href: `${href}`,
            siteName: siteName
        }
    })
}

onMounted(() => {
    document.addEventListener('click', handleGlobalLinkClick)
})

onUnmounted(() => {
    document.removeEventListener('click', handleGlobalLinkClick)
})
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