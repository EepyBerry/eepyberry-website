<template>
  <section id="section-about">
    <div class="section-title">
      <h1>Hello, I'm EepyBerry!&nbsp;🍓</h1>
      <span class="subtitle">Software&nbsp;Engineer & Art&nbsp;Gremlin&nbsp;>:3</span>
    </div>
    <div class="about-text">
      <article>
        <h2>Byte-sized info! <span class="tx-mini">(get it? :3)</span></h2>
        <p class="mb">
          Here's some quick facts about me, because big blocks of text are <i>boooring</i>!
        </p>
        <ul>
          <li><iconify-icon icon="noto:laptop-computer" height="1.25rem" />&nbsp; Started programming in C during high school</li>
          <li><iconify-icon icon="noto:books" height="1.25rem" />&nbsp; Pretty much a full-stack developer these days</li>
          <li><iconify-icon icon="noto:face-with-steam-from-nose" height="1.25rem" />&nbsp; Really likes Java, and will fight anyone disparaging it >:U</li>
          <li><iconify-icon icon="noto:artist-palette" height="1.25rem" />&nbsp; Started drawing at the age of 6!</li>
          <li><iconify-icon icon="noto:woman-raising-hand" height="1.25rem" />&nbsp; Very smol :3 (~5'2")</li>
          <li><iconify-icon icon="noto:transgender-flag" height="1.25rem" />&nbsp; Came out as transfem in May 2024!</li>
        </ul>

      </article>
      <article>
        <h2>Techs n' stuff</h2>
        <p>Have a list of my fav techs & tools! Also includes stuff I'm learning right now:</p>
        <div class="techs mt">
          <EepyScoreCard class="java"       :score="5">Java</EepyScoreCard>
          <EepyScoreCard class="vuejs"      :score="5">VueJS</EepyScoreCard>
          <EepyScoreCard class="docker"     :score="4">Docker</EepyScoreCard>
          <EepyScoreCard class="kubernetes" :score="3">Kubernetes</EepyScoreCard>
          <EepyScoreCard class="aws"        :score="3">AWS</EepyScoreCard>
        </div>
      </article>
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
  gap: 1.5rem 3rem;

  //background-color: var(--eepy-color-card);
  border-radius: 1rem;

  .section-title {
    grid-column: 1;
    margin: 2rem 0;
  }

  .about-text {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    article {
      border-left: 2px solid var(--eepy-color-accent);
      padding-left: 1rem;
    }
    p { text-wrap: wrap;}
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

.techs {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: .5rem;
  & > * { flex: 0 1 0; }

  .java {
    background: var(--eepy-color-java);
    color: white;
  }
  .vuejs {
    background: var(--eepy-color-vuejs);
    color: white;
  }
  .docker {
    background: var(--eepy-color-docker);
    color: white;
  }
  .kubernetes {
    background: var(--eepy-color-kubernetes);
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

@media screen and (min-width: 768px) and (max-width: 1199px) {
  #section-about {
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    .about-text {
      grid-column: 1 / span 2;
      grid-row: 2;
    }
    .about-avatar {
      grid-row: 1;
    }
  }
}

@media screen and (max-width: 767px) {
  #section-about {
    grid-template-columns: 1fr;
    .section-title {
      grid-column: 1;
      text-align: center;
    }
    .about-text {
      grid-column: 1;
    }
    .about-avatar {
      display: none;
    }
  }

}

</style>