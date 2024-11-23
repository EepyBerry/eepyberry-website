<template>
  <div class="links">
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
    <a href="mailto:contact@eepyberry.me" aria-label="Ko-fi">
      <SvgMail width="2.5rem" />
    </a>
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import SvgBluesky from '../svg/icons/SvgBluesky.vue';
import SvgGithub from '../svg/icons/SvgGithub.vue';
import SvgMail from '../svg/icons/SvgMail.vue';
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.links:before {
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
  padding: 0.75rem 1rem;

  & > a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 125ms ease;

    &:hover {
      transform: scale(105%) rotateZ(-5deg);
    }
    &:active {
      cursor: pointer;
      transform: scale(95%);
    }
  }
}
</style>
