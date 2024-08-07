<template>
  <span class="footer-filler"></span>
  <div id="footer-info">
    <p> made with 🌈&nbsp;&&nbsp;❤️</p>
    <p>
      powered by
      <a href="https://vuejs.org" target="_blank" rel="external nofollow noopener">VueJS</a>
      &
      <a href="https://vitejs.dev" target="_blank" rel="external nofollow noopener">Vite</a>
    </p>
  </div>
  <div id="footer-copyright-links">
    <div id="links">
      <a href="https://ko-fi.com" target="_blank" rel="external" aria-label="Ko-fi" disabled>
        <iconify-icon mode="style" icon="simple-icons:kofi" height="2.5rem" aria-hidden="true" />
      </a>
      <a href="https://github.com/EepyBerry" target="_blank" rel="external nofollow noopener" aria-label="GitHub">
        <iconify-icon mode="style" icon="simple-icons:github" height="2rem" />
      </a>
      <a href="https://bsky.app/profile/eepyberry.bsky.social" target="_blank" rel="external nofollow noopener" aria-label="Bluesky">
        <iconify-icon mode="style" icon="simple-icons:bluesky" height="2rem" />
      </a>
    </div>
    <p class="mt">© {{ new Date().getFullYear() }}, EepyBerry</p>
  </div>
</template>

<style scoped lang="scss">
#links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  min-height: 2rem;
}

.footer-filler { flex: 1; display: block; }
#footer-info { flex: 1; text-align: center; }
#footer-copyright-links { flex: 1;  text-align: end; }

@media screen and (max-width: 767px) {
  #links { justify-content: center; }
  #footer-copyright-links { text-align: center; }
}
</style>