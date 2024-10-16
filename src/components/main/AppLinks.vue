<template>
  <div class="links">
    <span class="bracket">[</span>
    <a href="#" disabled @click="$event.preventDefault()" aria-label="Ko-fi">
      <SvgKofi width="2.5rem" />
      <span class="coming-soon" aria-hidden="true">soon!</span>
    </a>
    <a href="https://github.com/EepyBerry" target="_blank" rel="external nofollow noopener" aria-label="GitHub">
      <SvgGithub width="2.5rem" />
    </a>
    <a
      href="https://bsky.app/profile/eepyberry.bsky.social"
      target="_blank"
      rel="external nofollow noopener"
      aria-label="Bluesky"
    >
      <SvgBluesky width="2.5rem" />
    </a>
    <span class="bracket">]</span>
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import SvgBluesky from '../svg/icons/SvgBluesky.vue'
import SvgGithub from '../svg/icons/SvgGithub.vue'
import SvgKofi from '../svg/icons/SvgKofi.vue'
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.links:before {
  z-index: -5;
  content: '';
  position: absolute;
  inset: -6px;
  border: 2px solid var(--eepy-theme-background);
  border-radius: 12px;
}
.links {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--eepy-theme-background);
  border-radius: 8px;
  padding: 0.5rem 0.675rem;

  & > .bracket {
    font-family: Dosis;
    font-size: 2.5rem;
    font-weight: 100;
    line-height: 1;
  }
  & > a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .coming-soon {
      position: absolute;
      bottom: -0.5rem;

      text-align: center;
      line-height: 1.1;
      font-size: 0.875rem;

      pointer-events: none;
      backdrop-filter: blur(4px);
    }
  }
}
</style>
