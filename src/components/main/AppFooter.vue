<template>
  <footer role="contentinfo">
    <AppLinks />
    <div id="copyright-notice">
      <p>© {{ new Date().getFullYear() }}, EepyBerry</p>
      <p>
        All original content under
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="external nofollow noopener"
          >CC BY-NC-SA 4.0</a
        >
      </p>
    </div>
    <div id="app-info">
      <p>made with 🌈&nbsp;&&nbsp;❤️</p>
      <p>
        powered by
        <a
          href="https://vuejs.org"
          target="_blank"
          rel="external nofollow noopener"
          >VueJS</a
        >
        &
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="external nofollow noopener"
          >Vite</a
        >
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppLinks from "../main/AppLinks.vue";
import SvgBluesky from "../svg/icons/SvgBluesky.vue";
import SvgGithub from "../svg/icons/SvgGithub.vue";
import SvgKofi from "../svg/icons/SvgKofi.vue";
</script>

<style scoped lang="scss">
footer {
  background-position: 50% 0;
  background-size: cover;
  margin: 4rem 0;
  font-family: Dosis;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  font-weight: 500;

  #copyright-notice {
    font-size: clamp(1rem, 5vw, 1.25rem);
  }
  #app-info {
    font-weight: 200;
  }
}
</style>
