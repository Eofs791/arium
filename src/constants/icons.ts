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

const xCenter = window.innerWidth * 0.5;
const yCenter = window.innerHeight * 0.5;

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
    x: xCenter - 215,
    y: yCenter - 315,
    content: markRaw(AsciiWindow),
  });

  setTimeout(() => {
    windowStore.openWindow({
      id: "user",
      title: "用戶 // USER",
      x: xCenter - 460,
      y: yCenter - 235,
      content: markRaw(UserWindow),
    });
  }, 100);
};

const handleOpenSystem = () => {
  const windowStore = useWindowStore();

  windowStore.openWindow({
    id: "system",
    title: "系統 // SYSTEM",
    x: xCenter + 132,
    y: yCenter + 100,
    content: markRaw(SystemWindow),
  });
};

const handleOpenLab = () => {
  const windowStore = useWindowStore();

  windowStore.openWindow({
    id: "lab",
    title: "實驗室 // LAB",
    x: xCenter + 82,
    y: yCenter - 253,
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
