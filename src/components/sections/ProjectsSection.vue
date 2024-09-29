<template>
  <section id="section-projects">
    <div class="section-title" role="heading" aria-label="Projects">
      <hr class="title-divider" />
      <span class="title-icon">
        <span class="title-bracket" aria-hidden="true">[</span>
        <iconify-icon icon="mingcute:terminal-line" width="2.5rem" aria-hidden="true" />
        <span class="title-bracket" aria-hidden="true">]</span>
      </span>
      <hr class="title-divider" />
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
            <p>A fully procedural planet-building app 🪐</p>
          </template>
        </EepyCard>
      </a>
      <a
        class="card-link"
        :href="checkConditions() ? '/nothing' : undefined"
        target="_blank"
        rel="external nofollow noopener"
        aria-label="Under construction"
        @click="checkConditions() ? undefined : $event.preventDefault()"
      >
        <EepyCard id="project-redacted" :class="{ huh: checkConditions() }">
          <template v-slot:links>
            <iconify-icon mode="svg" icon="noto:construction" height="2rem" />
          </template>
          <span class="logo tx-mono tx-glitch" data-text="[REDACTED]">[REDACTED]</span>
          <template v-slot:footer>
            <p>████████████████</p>
          </template>
        </EepyCard>
      </a>
      <EepyCard v-for="_ in 4" class="placeholder" />
    </div>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import type { ThemeHelper } from '@/utils/theme.helper'
import SvgLagrangeLogo from '../svg/SvgLagrangeLogo.vue'
import { inject, ref, watch, type Ref } from 'vue'
const themeHelper: ThemeHelper = inject('ThemeHelper') as ThemeHelper
const counter: Ref<number> = ref(0)

watch(
  () => themeHelper.themeRef.value,
  (v) => {
    if (v === 'light') return
    incrementCounter()
  },
)

function incrementCounter() {
  counter.value++
}

function checkConditions() {
  return counter.value >= 5 && themeHelper.themeRef.value === 'dark'
}
</script>

<!------------------------------------------------------------>
<style lang="scss">
#section-projects {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .section-content {
    padding: 1.5rem 0;
    width: 100%;

    background-color: var(--eepy-theme-background);
    background-image: url('/svg/hero_circuits.svg');
    background-repeat: repeat;
    background-position: 50%;
    background-size: 16rem;
    box-shadow: inset 0 0 4rem 2rem var(--eepy-theme-background);

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24rem, auto));
    gap: 2rem;
    & .eepy-card {
      width: 100%;
      height: 14rem;
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
[data-theme='dark'] #section-projects {
  .section-content {
    background-image: url('/svg/hero_circuits_dark.svg');
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
      background-image: url('/projects/project-redacted.jpg');
    }
  }
}
</style>
