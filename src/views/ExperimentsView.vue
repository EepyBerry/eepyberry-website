<template>
  <section id="section-projects-experiments">
    <section id="section-projects">
      <h2 class="section-title">Main projects <EepyDivider w="auto" /></h2>
      <div class="section-content">
        <div class="grid-experiments">
          <a class="card-link"
            href="https://github.com/EepyBerry/zephyr-sd-aws"
            target="_blank"
            rel="external nofollow noopener"
            aria-label="GitHub"
          >
            <EepyCard id="project-zephyrsd" centered>
              <template v-slot:links>
                  <iconify-icon mode="style" icon="simple-icons:github" style="color: var(--white);" height="2rem" />
              </template>
              <img class="logo" src="/experiments/experiment-zephyrsd-logo.svg" alt="ZephyrSD Logo" aria-label="ZephyrSD logo">
              <template v-slot:footer>
                <p class="mt-l">A dashboard for managing Stable Diffusion WebUIs 🚀</p>
              </template>
            </EepyCard>
          </a>
          <a class="card-link disabled"
            href=""
            target="_blank"
            rel="external nofollow noopener"
            aria-label="Under construction"
            @click.prevent
          >
            <EepyCard id="project-orin" centered>
              <template v-slot:links>
                <iconify-icon mode="style" icon="noto:construction" height="2rem" />
              </template>
              <span class="logo tx-mono">OR█████ IN███████</span>
              <template v-slot:footer>
                <p class="tx-glitch tx-mono mt-l" data-text="WARNING: DO NOT PROCEED!">
                  WARNING: DO NOT PROCEED!
                </p>
              </template>
            </EepyCard>
          </a>
          <EepyCard v-for="_ in 4" placeholder>
            <IconEepyBerry class="placeholder-icon" />
          </EepyCard>
        </div>
      </div>
    </section>
    <section id="section-experiments">
      <h2 class="section-title">Experiments <EepyDivider w="auto" /></h2>
      <div class="section-content">
        <div class="grid-experiments">
          <a class="card-link disabled"
            href="https://github.com/EepyBerry/zephyr-sd-aws"
            target="_blank"
            rel="external nofollow noopener"
            aria-label="GitHub"
            @click.prevent
          >
            <EepyCard>
              <template v-slot:title>
                <p>Lagrange</p>
                <iconify-icon mode="style" icon="noto:construction" height="2rem" />
              </template>
              <template v-slot:footer>
                <p class="mt-l">A small planet-making app 🪐</p>
              </template>
            </EepyCard>
          </a>
          <a class="card-link disabled"
            href=""
            target="_blank"
            rel="external nofollow noopener"
            aria-label="Under construction"
            @click.prevent
          >
            <EepyCard>
              <template v-slot:title>
                <p>Blockbench web project</p>
                <iconify-icon mode="style" icon="noto:thinking-face" height="2rem" />
              </template>
              <template v-slot:footer>
                <p class="tx-mono mt">
                  [REDACTED: UNDER CONSTRUCTION]
                </p>
              </template>
            </EepyCard>
          </a>
          <EepyCard v-for="_ in 4" placeholder>
            <IconEepyBerry class="placeholder-icon" />
          </EepyCard>
        </div>
      </div>
    </section>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import IconEepyBerry from '@/components/icons/IconEepyBerry.vue';
import { useHead } from '@unhead/vue';
useHead({ meta: [
  { name: 'description', content: 'A repository of my various projects, available on this website or on my GitHub!' }
]})
</script>

<!------------------------------------------------------------>
<style lang="scss">
#section-projects-experiments {
  display: flex;
  flex-direction: column;
  gap: 8rem;
}
#section-projects, #section-experiments {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .section-title {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    .eepy-divider { flex: 1 }
  }
  .section-content {
    width: 100%;
  }
  .grid-experiments {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    & .eepy-card {
      width: 100%;
      min-height: 12rem;
    }
  }

  #project-zephyrsd {
    $bg: var(--eepy-color-zephyrsd);
    background-image: url('/experiments/experiment-zephyrsd-1024.webp');
    background-position: top;
    background-size: cover;
    background-color: $bg;
    color: var(--white);
    .logo {
      height: 6rem;
      backdrop-filter: blur(4px);
    }
    .eepy-card-header {
      background: linear-gradient(to bottom, $bg 0%, $bg 50%, transparent 100%)
    }
    .eepy-card-footer {
      background: linear-gradient(to top, $bg 0%, $bg 50%, transparent 100%)
    }
  }
  #project-orin {
    .logo {
      font-size: 1.5rem;
    }
  }

  .eepy-card[placeholder] {
    .placeholder-icon {
      height: 3.5rem;
      color: red;
    }
  }
}

@media screen and (max-width: 1199px) {
  #section-experiments {
    .grid-experiments {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    #project-zephyrsd {
      background-image: url('/experiments/experiment-zephyrsd-640.webp');
    }
  }
}

@media screen and (max-width: 767px) {
  #section-experiments {
    .grid-experiments {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    #project-zephyrsd {
      background-image: url('/experiments/experiment-zephyrsd-640.webp');
    }
  }
}
</style>