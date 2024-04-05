<template>
  <section id="section-about">
    <div class="section-title">
      <h1>Hello, I'm&nbsp;EepyBerry!&nbsp;🍓</h1>
      <span class="subtitle">Software&nbsp;Engineer at&nbsp;work, Code&nbsp;Goblin&nbsp;at&nbsp;home&nbsp;>:3</span>
    </div>
    <div class="about-text">
      <EepyDivider w="4rem" />
      <article>
        <h2>Some info!</h2>
        <p class="mt">
          
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
  grid-template-columns: 2.5fr 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  margin: 0 auto;
  gap: 0 3rem;

  //background-color: var(--eepy-color-card);
  border-radius: 1rem;

  .section-title {
    grid-column: 1;
    margin-bottom: 2rem;
  }

  .about-text {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .about-avatar {
    grid-column: 2;
    grid-row: 1 / span 2;
    justify-self: center;
    align-self: flex-start;
    width: clamp(160px, 25vw, 380px);
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

@media screen and (min-width: 1024px) and (max-width: 1199px) {
  #section-about {
    .about-text {
      grid-column: 1 / span 2;
      grid-row: 2;
    }
    .about-avatar {
      grid-row: 1;
    }
  }
}

@media screen and (max-width: 1023px) {
  #section-about {
    padding: 1rem;
    .section-title {
      grid-column: 1 / span 2;
      text-align: center;
    }
    .about-text {
      grid-column: 1 / span 2;
    }
    .about-avatar {
      display: none;
    }
  }

}

</style>