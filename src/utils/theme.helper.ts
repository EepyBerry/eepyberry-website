import { type Ref, ref } from "vue";
import { LOCAL_STORAGE_THEME_KEY } from "./constants";

export enum UserTheme {
  LIGHT = "light",
  DARK = "dark",
}

export class ThemeHelper {
  // Expose ref to watch for in relevant components
  themeRef: Ref<string> = ref("");

  loadCurrentTheme(): UserTheme {
    // Return immediately if found in local storage
    if (localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) {
      const currentTheme = <UserTheme>(
        localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
      );
      document.documentElement.setAttribute("data-theme", currentTheme);
      this.themeRef.value = currentTheme;
      return currentTheme;
    }

    // If not, check prefers-color-scheme and set corresponding theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, UserTheme.DARK);
      document.documentElement.setAttribute("data-theme", UserTheme.DARK);
      this.themeRef.value = UserTheme.DARK;
    } else {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, UserTheme.LIGHT);
      document.documentElement.setAttribute("data-theme", UserTheme.LIGHT);
      this.themeRef.value = UserTheme.LIGHT;
    }
    return <UserTheme>localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  }

  toggleSiteTheme(): void {
    const activeTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (activeTheme === "light") {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, UserTheme.DARK);
      document.documentElement.setAttribute("data-theme", UserTheme.DARK);
      this.themeRef.value = UserTheme.DARK;
    } else if (activeTheme === "dark") {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, UserTheme.LIGHT);
      document.documentElement.setAttribute("data-theme", UserTheme.LIGHT);
      this.themeRef.value = UserTheme.LIGHT;
    }
  }

  setSiteTheme(theme: string): void {
    if (theme === "light") {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, UserTheme.LIGHT);
      document.documentElement.setAttribute("data-theme", UserTheme.LIGHT);
      this.themeRef.value = UserTheme.LIGHT;
    } else if (theme === "dark") {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, UserTheme.DARK);
      document.documentElement.setAttribute("data-theme", UserTheme.DARK);
      this.themeRef.value = UserTheme.DARK;
    }
  }
}
