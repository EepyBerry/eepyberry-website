<template>
  <section id="section-projects">
    <div class="section-title" aria-label="Projects">
      <hr class="title-divider">
      <span class="title-icon">
        <span class="title-bracket" aria-hidden="true">[</span>
        <iconify-icon icon="mingcute:terminal-line" width="1.5em" aria-hidden="true" />
        <span class="title-bracket" aria-hidden="true">]</span>
        <h2 style="color: var(--eepy-color-text);">&nbsp;projects</h2>
      </span>
      <hr class="title-divider">
    </div>
    <div class="section-content">
      <a
        class="card-link"
        href="https://lagrange.eepyberry.me"
        target="_blank"
        rel="external nofollow noopener"
        aria-label="GitHub"
      >
        <EepyCard id="project-lagrange">
          <template v-slot:links>
            <iconify-icon
              mode="svg"
              icon="mingcute:external-link-line"
              style="color: var(--white)"
              height="2rem"
            />
          </template>
          <SvgLagrangeLogo class="logo" />
          <template v-slot:footer>
            <p>A fully procedural planet-building app 🪐</p>
          </template>
        </EepyCard>
      </a>
      <a
        class="card-link disabled"
        href="null"
        target="_blank"
        rel="external nofollow noopener"
        aria-label="Under construction"
        @click.prevent
      >
        <EepyCard id="project-redacted">
          <template v-slot:links>
            <iconify-icon mode="svg" icon="noto:construction" height="2rem" />
          </template>
          <span class="logo tx-mono tx-glitch" data-text="[REDACTED]"
            >[REDACTED]</span
          >
          <template v-slot:footer>
            <p>████████████████</p>
          </template>
        </EepyCard>
      </a>
      <EepyCard v-for="_ in 2" class="placeholder" />
    </div>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import SvgLagrangeLogo from "../svg/SvgLagrangeLogo.vue";
</script>

<!------------------------------------------------------------>
<style lang="scss">
#section-projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .section-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, auto));
    gap: 2rem;
    & .eepy-card {
      width: 100%;
      height: 14rem;
    }
  }

  #project-lagrange {
    background-image: url("/projects/project-lagrange.webp");
    color: var(--white);
    .logo {
      position: absolute;
      width: 16rem;
      inset: 0;
      margin: auto;
      transform: translateY(0.25rem);
    }
  }

  #project-redacted {
    background-image: url("/projects/project-redacted.webp");
    background-position: top;
    background-size: cover;
    color: var(--white);
    .logo {
      text-align: center;
      text-wrap: nowrap;
      font-size: 1.125rem;
    }
    .tx-glitch,
    .tx-glitch::before,
    .tx-glitch::after {
      color: var(--white);
      background: transparent;
      text-align: center;
      text-wrap: nowrap;
    }
  }
}

@media screen and (max-width: 1199px) {
  #section-projects {
    .grid-experiments {
      gap: 1.5rem;
    }
  }
}

@media screen and (max-width: 767px) {
  #section-projects {
    margin-top: 3rem;
    .section-content {
      gap: 1rem;
    }
  }
}

@media screen and (prefers-reduced-motion) {
  #section-projects {
    #project-redacted {
      background-image: url("/projects/project-redacted.jpg");
    }
  }
}
</style>
