import { type Component } from "vue";

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

export interface DesktopIcon {
    title: string
    icon: Component
    action?: string | (() => void)
    siteName?: string
}

export interface LabItem {
  id: string,
  title: string,
  desc: string,
  url: string,
}