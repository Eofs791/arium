import { defineStore } from "pinia";
import { ref, type Component } from "vue";

export interface WindowInstance {
  id: string;
  title: string;
  width?: number;
  height?: number;
  x: number;
  y: number;
  zIndex: number;
  content: Component;
  props?: Record<string, any>;
}

export const useWindowStore = defineStore("window", () => {
  const windows = ref<WindowInstance[]>([]);
  let maxZ = 10;

  const openWindow = (config: Omit<WindowInstance, "zIndex">) => {
    const existing = windows.value.find((w) => w.id === config.id);
    if (existing) {
      bringToFront(config.id);
      return;
    }

    maxZ++;
    windows.value.push({
      ...config,
      zIndex: maxZ,
    });
  };

  const closeWindow = (id: string) => {
    const index = windows.value.findIndex((w) => w.id === id);

    if (index !== -1) {
      windows.value.splice(index, 1);
    }
  };

  const bringToFront = (id: string) => {
    const window = windows.value.find((w) => w.id === id);
    if (window) {
        maxZ++;
        window.zIndex = maxZ;
    }
  };

  return {
    windows,
    openWindow,
    closeWindow,
    bringToFront,
  };
});
