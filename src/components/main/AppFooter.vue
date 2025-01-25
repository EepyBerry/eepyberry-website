<template>
  <footer role="contentinfo">
    <div class="footer-container">
      <div id="app-info">
        <p>made with 🌈&nbsp;&&nbsp;❤️</p>
        <p>
          powered by
          <a href="https://vuejs.org" target="_blank" rel="external nofollow noopener">VueJS</a>
          &
          <a href="https://vitejs.dev" target="_blank" rel="external nofollow noopener">Vite</a>
        </p>
      </div>
      <AppLinks class="links-bare" />
      <div id="copyright-notice">
        <div class="copyright-info">
          <span class="cc-supertext">all original content&nbsp;under</span>
          <a
            id="cc-deed-link"
            class="footer-link"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="external nofollow noopener"
            title="CC-BY-NC-SA 4.0 deed (opens in new tab)"
          >
            <span class="cc-version">4.0</span>
            <SvgCCLogo aria-label="Creative Commons logo" />
            <SvgCCBYLogo aria-label="Creative Commons attribution logo" />
            <SvgCCNCLogo aria-label="Creative Commons noncommercial-use logo" />
            <SvgCCSALogo aria-label="Creative Commons share-alike logo" />
          </a>
        </div>
        <p class="copyright-author">© {{ new Date().getFullYear() }}, EepyBerry</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppLinks from '../main/AppLinks.vue';
import SvgCCBYLogo from '../svg/creativecommons/SvgCCBYLogo.vue';
import SvgCCLogo from '../svg/creativecommons/SvgCCLogo.vue';
import SvgCCNCLogo from '../svg/creativecommons/SvgCCNCLogo.vue';
import SvgCCSALogo from '../svg/creativecommons/SvgCCSALogo.vue';
</script>

<style scoped lang="scss">
footer {
  bottom: 0;
  width: 100%;
  margin-top: 6rem;
  padding: 1rem 0;
  font-family: Poppins;

  display: flex;
  flex-direction: column;
  align-items: center;

  .footer-container {
    position: relative;
    width: 100%;
    border-radius: 8px;
    font-weight: 400;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  #copyright-notice {
    z-index: 1;
    grid-column: 3;
    text-align: end;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .copyright-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .copyright-author {
      width: 100%;
    }

    .cc-supertext {
      font-size: 0.9rem;
    }

    .cc-version {
      transform: rotateZ(-90deg) translateY(0.25rem);
      font-family: Inter, sans-serif;
      font-weight: 700;
      font-size: 0.875rem;
    }

    #cc-deed-link {
      width: fit-content;
      text-align: end;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  #app-info {
    grid-column: 1;
    font-size: 0.875rem;
    font-weight: 400;
    text-align: start;
    z-index: 1;
  }

  .links-bare::before {
    display: none;
  }
  .links-bare {
    background: none;
  }
}

@media screen and (max-width: 1023px) {
  footer {
    grid-column: 1;
  }
}

@media screen and (max-width: 895px) {
  footer {
    grid-template-columns: auto 1fr;

    .footer-container {
      grid-template-columns: 1fr 1fr;
      :deep(.links) {
        display: none;
      }
    }

    #copyright-notice {
      grid-column: 2;
    }
  }
}
@media screen and (max-width: 767px) {
  footer {
    .footer-container {
      padding: 0 1rem;
    }
  }
}
</style>
