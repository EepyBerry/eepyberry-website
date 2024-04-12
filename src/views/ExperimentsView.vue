<template>
  <section id="section-experiments">
    <div class="section-title">
      <h1>Experiments & projects!</h1>
    </div>
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
           href="https://github.com/EepyBerry/zephyr-sd-aws"
           target="_blank"
           rel="external nofollow noopener"
           aria-label="GitHub"
           @click.prevent
        >
          <EepyCard>
            <template v-slot:title>
              <p>Planet-themed web project</p>
              <iconify-icon mode="style" icon="noto:thinking-face" height="2rem" />
            </template>
            <template v-slot:footer>
              <p class="tx-mono mt">
                [REDACTED: UNDER CONSTRUCTION]
              </p>
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
              <p>Project ORIN</p>
              <iconify-icon mode="style" icon="noto:thinking-face" height="2rem" />
            </template>
            <template v-slot:footer>
              <p class="tx-mono mt">
                [REDACTED: UNDER CONSTRUCTION]
              </p>
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
        <EepyCard v-for="_ in 5" placeholder>
          <template v-slot:title></template>
          <iconify-icon mode="style" icon="material-symbols:question-mark-rounded" height="3rem" />
        </EepyCard>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#section-experiments {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .section-content {
    margin-top: 4rem;
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