<template>
  <section id="section-about">
    <div class="section-title">
      <h1 class="title">Hello, I'm EepyBerry!&nbsp;🍓</h1>
      <span class="subtitle">Software&nbsp;Engineer & Art&nbsp;Gremlin&nbsp;<span class="tx-nowrap">>:3</span></span>
    </div>
    <div class="section-content">
      <article>
        <h2>Byte-sized info! <span class="tx-mini">(get it? :3)</span></h2>
        <p class="mb">
          Here's some quick facts about me, because big blocks of text are <i>boooring</i>!
        </p>
        <ul>
          <li><iconify-icon mode="style" icon="noto:laptop-computer" height="1.25rem" />&nbsp; Started programming in C during high school</li>
          <li><iconify-icon mode="style" icon="noto:books" height="1.25rem" />&nbsp; Pretty much a full-stack developer now!</li>
          <li><iconify-icon mode="style" icon="noto:face-with-steam-from-nose" height="1.25rem" />&nbsp; Really likes Java, and will fight anyone mocking it >:U</li>
          <li><iconify-icon mode="style" icon="noto:artist-palette" height="1.25rem" />&nbsp; Started drawing at the age of 6!</li>
          <li><iconify-icon mode="style" icon="noto:woman-raising-hand" height="1.25rem" />&nbsp; Very smol :3 (~5'2")</li>
          <li><iconify-icon mode="style" icon="noto:transgender-flag" height="1.25rem" />&nbsp; Came out as transfem in May 2024!</li>
        </ul>

      </article>
      <article>
        <h2>Techs n' stuff</h2>
        <p>Have a list of my favourite coding techs & tools! Also includes stuff I'm learning right now:</p>
        <div class="cardlet-list mt">
          <EepyCardlet class="java">
            <iconify-icon icon="skill-icons:java-dark" height="2rem" aria-hidden="true" />Java
          </EepyCardlet>
          <EepyCardlet class="vuejs">
            <iconify-icon
              mode="style"
              icon="simple-icons:vuedotjs"
              style="color: #41b883; padding-left: .25rem"
              height="1.5rem"
            />
            VueJS
          </EepyCardlet>
          <EepyCardlet class="angular">
            <iconify-icon
              mode="style"
              icon="simple-icons:angular"
              style="padding-left: .25rem"
              height="1.5rem"
            />
            Angular
          </EepyCardlet>
          <EepyCardlet class="docker">
            <iconify-icon
              mode="style"
              icon="simple-icons:docker"
              style="padding-left: .25rem"
              height="1.5rem"
            />
            Docker
          </EepyCardlet>
          <EepyCardlet class="kubernetes">
            <iconify-icon
              mode="style"
              icon="simple-icons:kubernetes"
              style="padding-left: .25rem"
              height="1.5rem"
            />
            Kubernetes
          </EepyCardlet>
          <EepyCardlet class="aws">
            <iconify-icon
              mode="style"
              icon="skill-icons:aws-dark"
              height="2rem"
            />
            AWS
          </EepyCardlet>
        </div>
        <div class="cardlet-list mt">
          <EepyCardlet class="idea">
            <iconify-icon
              mode="style"
              icon="skill-icons:idea-dark"
              height="2rem"
            />
            IntelliJ&nbsp;IDEA
          </EepyCardlet>
          <EepyCardlet class="vscode">
            <iconify-icon
              mode="style"
              icon="skill-icons:vscode-dark"
              height="2rem"
            />
            VS&nbsp;Code
          </EepyCardlet>
          <EepyCardlet class="godot">
            <iconify-icon
              mode="style"
              icon="skill-icons:godot-dark"
              height="2rem"
            />
            Godot
          </EepyCardlet>
        </div>
        <p class="mt-l">And these are my main drawing tools:</p>
        <div class="cardlet-list mt">
          <EepyCardlet class="illustrator">
            <iconify-icon
              mode="style"
              icon="skill-icons:illustrator"
              height="2rem"
            />
            Illustrator
          </EepyCardlet>
          <EepyCardlet class="krita">
            <iconify-icon
              mode="style"
              icon="simple-icons:krita"
              style="padding-left: .25rem"
              height="1.5rem"
            />
            Krita
          </EepyCardlet>
          <EepyCardlet class="aseprite">
            <iconify-icon
              mode="style"
              icon="simple-icons:aseprite"
              style="padding-left: .25rem"
              height="1.5rem"
            />
            Aseprite
          </EepyCardlet>
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
    <img class="avatar" src="/avatar.png" alt="Avatar" aria-label="avatar">
  </section>
</template>

<style scoped lang="scss">
#section-about {
  flex: 1;
  display: grid;
  grid-template-columns: 2.25fr 1fr;
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

  .section-content {
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
  .avatar {
    grid-column: 2;
    grid-row: 1 / span 2;
    justify-self: center;
    align-self: flex-start;
    width: clamp(160px, 25vw, 380px);
    filter: brightness(150%);
  }
}

.cardlet-list {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: .5rem;
  & > * { flex: 0 1 0; }

  .vuejs { background: var(--eepy-color-vuejs); }
  .angular { background: var(--eepy-color-angular); }
  .docker { background-color: var(--eepy-color-docker); }
  .kubernetes { background-color: var(--eepy-color-kubernetes); }
  .illustrator { background-color: var(--eepy-color-illustrator); }
  .krita { background: var(--eepy-color-krita); }
  .java, .aws, .godot, .idea, .vscode, .aseprite { background-color: var(--eepy-color-darktech); }
}

.chip-list {
  margin-top: .5rem;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex: 0 1 0;
  //grid-template-columns: 1fr 1fr 1fr;
  gap: .5rem;
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  #section-about {
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    .section-content {
      grid-column: 1 / span 2;
      grid-row: 2;
    }
    .avatar {
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
      padding: 0 1rem;
    }
    .section-contet {
      grid-column: 1;
    }
    .avatar {
      display: none;
    }
  }

}

</style>