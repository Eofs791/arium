import { markRaw } from "vue";
import { randomBetween } from "../utils/math.ts";
import { useWindowStore } from "../composables/useWindowStore.ts";
import { type DesktopIcon } from "../types/desktop";
import {
  PhSmileySticker,
  PhGear,
  PhNotepad,
  PhFlask
} from "@phosphor-icons/vue";
import ComfirmWindow from "../components/windows/ComfirmWindow.vue";
import AsciiWindow from "../components/windows/AsciiWindow.vue";
import UserWindow from "../components/windows/UserWindow.vue";
import SystemWindow from "../components/windows/SystemWindow.vue";
import LabWindow from "../components/windows/LabWindow.vue";

export const handleOpenConfirm = (href: string, siteName: string) => {
  const windowStore = useWindowStore();

  windowStore.openWindow({
    id: `confirm-${href}`,
    title: "確認 // CONFIRM",
    x: randomBetween(window.innerWidth * 0.5, window.innerWidth * 0.8),
    y: randomBetween(window.innerHeight * 0.2, window.innerHeight * 0.6),
    content: markRaw(ComfirmWindow),
    props: {
      href: `${href}`,
      siteName: siteName,
    },
  });
};

const handleOpenUser = () => {
  const windowStore = useWindowStore();

  windowStore.openWindow({
    id: "image",
    title: "再会 // SAIKAI",
    x: 0.36 * window.innerWidth,
    y: 0.07 * window.innerHeight,
    content: markRaw(AsciiWindow),
  });

  setTimeout(() => {
    windowStore.openWindow({
      id: "user",
      title: "用戶 // USER",
      x: 0.2 * window.innerWidth,
      y: 0.18 * window.innerHeight,
      content: markRaw(UserWindow),
    });
  }, 100);
};

const handleOpenSystem = () => {
  const windowStore = useWindowStore();

  windowStore.openWindow({
    id: "system",
    title: "系統 // SYSTEM",
    x: 0.25 * window.innerWidth,
    y: 0.62 * window.innerHeight,
    content: markRaw(SystemWindow),
  });
};

const handleOpenLab = () => {
  const windowStore = useWindowStore();

  windowStore.openWindow({
    id: "lab",
    title: "實驗室 // LAB",
    x: 0.6 * window.innerWidth,
    y: 0.3 * window.innerHeight,
    content: markRaw(LabWindow),
  });
};

export const iconList: DesktopIcon[][] = [
  [
    { title: "USER", icon: PhSmileySticker, action: handleOpenUser },
    { title: "SYSTEM", icon: PhGear, action: handleOpenSystem },
  ],
  [
    {
      title: "BLOG ↗",
      icon: PhNotepad,
      action: "https://blog.saikai.moe",
      siteName: "Catarium",
    },
    { title: "LAB", icon: PhFlask, action: handleOpenLab },
  ],
];
