<template>
  <section id="section-experiments">
    <div class="section-title">
      <h1>Experiments & projects!</h1>
    </div>
    <div class="section-content">
      <div class="grid-experiments">
        <EepyCard id="project-zephyrsd" centered>
          <template v-slot:links>
            <a href="https://github.com/EepyBerry/zephyr-sd-aws" target="_blank" rel="external nofollow noopener" aria-label="GitHub">
              <iconify-icon mode="style" icon="simple-icons:github" style="color: white;" height="2rem" />
            </a>
          </template>
          <img class="logo" src="/experiments/experiment-zephyrsd-logo.svg">
          <template v-slot:footer>
            <p class="mt-l">A dashboard for managing Stable Diffusion WebUIs 🚀</p>
          </template>
        </EepyCard>
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
        <EepyCard v-for="i in 11" placeholder>
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

  .section-content {
    margin-top: 4rem;
  }
  .grid-experiments {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    & > .eepy-card {
      min-height: 12rem;
    }
  }

  #project-zephyrsd {
    background-image: url('/experiments/experiment-zephyrsd.webp');
    background-position: top;
    background-size: cover;
    color: white;
    .logo { height: 6rem; backdrop-filter: blur(4px); }
    .eepy-card-header { background: linear-gradient(to bottom, #131422 0%, #131422 50%, transparent 100%) }
    .eepy-card-footer { background: linear-gradient(to top, #131422 0%, #131422 50%, transparent 100%) }
  }
}
</style>