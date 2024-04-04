<template>
  <section id="section-about">
    <div class="about-text">
      <article>
        <h1 class="section-title">Hello World !</h1>
        <p>Hello, I'm EepyBerry! I'm a software engineer at work, and a code goblin at home >:3</p>
        <p>Oh, and I'm trans too!</p>
        <p class="mt">
            g
        </p>
      </article>
      <EepyDivider w="4rem" />
      <article>
        <h2>Techs n' stuff</h2>
        <p>Have a grid of my fav techs! Also includes stuff I'm learning right now:</p>
        <div class="grid-techs mt">
          <EepyScoreCard class="java"       :score="5">Java</EepyScoreCard>
          <EepyScoreCard class="vuejs"      :score="5">VueJS</EepyScoreCard>
          <EepyScoreCard class="angular"    :score="2">Angular</EepyScoreCard>
          <EepyScoreCard class="docker"     :score="4">Docker</EepyScoreCard>
          <EepyScoreCard class="kubernetes" :score="3">Kubernetes</EepyScoreCard>
          <EepyScoreCard class="aws"        :score="3">AWS</EepyScoreCard>
        </div>
      </article>
      <EepyDivider w="4rem" />
      <article>
        <h2>Other interests ?</h2>
        <p>Here's a cute little list of stuff I really enjoy outside of programming:</p>
        <div class="chip-list">
          <EepyChip>🎨 Digital drawing (pixel, painting, vector)</EepyChip>
          <EepyChip>🧇 Crêpes & Waffles</EepyChip>
          <EepyChip>📖 SCP Foundation</EepyChip>
        </div>
        <p class="mt-l">And of course, games I like/love/am clearly too obsessed with :</p>
        <div class="chip-list">
          <EepyChip>🎩 A Hat in Time</EepyChip>
          <EepyChip>🍓 Celeste</EepyChip>
          <EepyChip>💡 OMORI</EepyChip>
          <EepyChip>🔥 ULTRAKILL</EepyChip>
        </div>
      </article>
    </div>
    <img class="about-avatar" src="/avatar.png">
  </section>
</template>

<style scoped lang="scss">
#section-about {
  flex: 1;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  margin: 0 auto;
  gap: 0 3rem;

  background-color: var(--eepy-color-card);
  padding: 3rem;
  border-radius: 1rem;

  .section-title {
    grid-column: 1 / span 2;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .about-avatar {
    justify-self: center;
    align-self: flex-start;
    width: min(80vw, 360px);
    filter: brightness(150%);
  }
}

.grid-techs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: 1rem;
  & > * { width: 100%; }

  .java {
    background: var(--eepy-color-java);
    color: white;
  }
  .angular {
    background: var(--eepy-color-angular);
    color: white;
  }
  .vuejs {
    background: var(--eepy-color-vuejs);
    color: white;
  }
}

.chip-list {
  margin-top: .5rem;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex: 0 1 0;
  //grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
</style>