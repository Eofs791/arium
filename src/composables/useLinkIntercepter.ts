import { onMounted, onUnmounted } from "vue";
import { handleOpenConfirm } from "../constants/icons";

export function useLinkIntercepter() {
  const handleGlobalLinkClick = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;

    e.preventDefault();

    const href = anchor.href;
    const siteName = anchor.dataset.siteName || "";

    handleOpenConfirm(href, siteName);
  };

  onMounted(() => {
    document.addEventListener("click", handleGlobalLinkClick);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleGlobalLinkClick);
  });
}
