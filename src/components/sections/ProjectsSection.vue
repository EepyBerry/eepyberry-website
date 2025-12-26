<template>
  <section id="section-projects">
    <div class="section-title" role="heading" aria-label="Projects">
      <span>projects</span>
      <iconify-icon icon="mingcute:terminal-line" style="width: 2rem; height: 2rem" width="2rem" aria-hidden="true" />
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
              style="color: var(--eepy-color-white)"
              height="2rem"
            />
          </template>
          <SvgLagrangeLogo class="logo" />
          <template v-slot:footer>
            <p>A fully procedural planet-building app&nbsp;🪐</p>
          </template>
        </EepyCard>
      </a>
      <a
        class="card-link"
        href="https://site-make-text.eepyberry.me"
        target="_blank"
        rel="external nofollow noopener"
        aria-label="SITE MAKE TEXT"
      >
        <EepyCard id="project-sitemaketext">
          <template v-slot:links>
            <iconify-icon
              mode="svg"
              icon="mingcute:external-link-line"
              style="color: var(--eepy-color-white)"
              height="2rem"
            />
          </template>
          <img src="/projects/logo-sitemaketext.webp" class="logo" />
          <template v-slot:footer>
            <p>A small <i>Baba Is You</i>-like word maker&nbsp;💬</p>
          </template>
        </EepyCard>
      </a>
      <a
        class="card-link"
        :href="counter >= 5 ? '/nothing' : undefined"
        target="_blank"
        rel="external nofollow noopener"
        aria-label="Under construction"
        @click="checkConditions($event)"
      >
        <EepyCard id="project-redacted" :class="{ huh: counter >= 5 }">
          <template v-slot:links>
            <iconify-icon mode="svg" icon="noto:construction" height="2rem" />
          </template>
          <span class="logo tx-mono tx-glitch" data-text="[REDACTED]">[REDACTED]</span>
          <template v-slot:footer>
            <p>████████████████</p>
          </template>
        </EepyCard>
      </a>
      <EepyCard v-for="i in 4" :key="i" class="placeholder" />
    </div>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import SvgLagrangeLogo from '../svg/SvgLagrangeLogo.vue';
import { ref, type Ref } from 'vue';

const counter: Ref<number> = ref(0);
function checkConditions($event: Event) {
  counter.value++;
  if (counter.value <= 5) {
    $event.preventDefault();
  }
}
</script>

<!------------------------------------------------------------>
<style lang="scss">
#section-projects {
  .section-content {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24rem, auto));
    gap: 2rem;

    & .eepy-card {
      width: 100%;
      height: 12rem;
    }
  }

  #project-lagrange {
    background-image: url('/projects/project-lagrange.webp');
    color: var(--eepy-color-white);

    .logo {
      position: absolute;
      width: 16rem;
      inset: 0;
      margin: auto;
    }
  }

  #project-sitemaketext {
    background-image: url('/projects/project-sitemaketext.webp');
    background-position: 50%;
    background-size: contain;
    .logo {
      position: absolute;
      width: 16rem;
      inset: 0;
      margin: auto;
      padding: 0.25rem;
      background: #0a090c;
    }
  }

  #project-redacted {
    background-image: url('/projects/project-redacted.webp');
    background-position: top;
    background-size: cover;
    color: var(--eepy-color-white);
    cursor: not-allowed;

    &.huh {
      cursor: pointer;
      filter: sepia(1) hue-rotate(320deg) saturate(10) brightness(0.875);
    }

    .logo {
      text-align: center;
      text-wrap: nowrap;
      font-size: 1.125rem;
    }

    .tx-glitch,
    .tx-glitch::before,
    .tx-glitch::after {
      color: var(--eepy-color-white);
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
      grid-template-columns: repeat(auto-fill, minmax(18rem, auto));
      gap: 1rem;
    }
  }
}

@media screen and (max-width: 567px) {
  #section-projects {
    margin-top: 3rem;

    .section-content {
      grid-template-columns: repeat(auto-fill, minmax(15rem, auto));
      gap: 1rem;
    }
  }
}

@media screen and (prefers-reduced-motion) {
  #section-projects {
    #project-redacted {
      background-image: url('/projects/project-redacted.jpg');
    }
  }
}
</style>
