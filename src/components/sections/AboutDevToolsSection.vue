<template>
  <section id="section-about-devtools">
    <div class="section-title" role="heading" aria-label="Tools & techs">
      <hr class="title-divider" />
      <span class="title-icon">
        <span class="title-bracket" aria-hidden="true">[</span>
        <iconify-icon icon="carbon:executable-program" width="2.5rem" aria-hidden="true" />
        <span class="title-bracket" aria-hidden="true">]</span>
      </span>
      <hr class="title-divider" />
    </div>
    <div class="section-content">
      <ul class="tool-list">
        <li>
          <EepyCard id="tool-intellij" class="center">
            <template v-slot:title>
              <iconify-icon inline mode="svg" icon="logos:intellij-idea" height="2rem" aria-hidden="true" />
              <span>intell&ijlig;&nbsp;idea</span>
            </template>
            <template v-slot:footer> Primary IDE </template>
          </EepyCard>
        </li>
        <li>
          <EepyCard id="tool-vscode" class="center">
            <template v-slot:title>
              <iconify-icon inline mode="svg" icon="devicon:vscode" height="2rem" aria-hidden="true" />
              <span>visual studio code</span>
            </template>
            <template v-slot:footer> Secondary IDE </template>
          </EepyCard>
        </li>
        <li>
          <EepyCard id="tool-godot" class="center">
            <template v-slot:title>
              <iconify-icon inline mode="svg" icon="logos:godot-icon" height="2rem" aria-hidden="true" />
              <span>godot engine</span>
            </template>
            <template v-slot:footer> Game development </template>
          </EepyCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
#section-about-devtools {
  .section-content {
    padding: 1.5rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    ul.tool-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
      color: var(--eepy-color-white);

      li {
        height: 10rem;
        flex: 1;
        min-width: 16rem;
      }

      li.turn-l {
        transform: rotateZ(-1.5deg);
      }

      li.turn-r {
        transform: rotateZ(1.5deg);
      }
    }

    #tool-intellij {
      height: 100%;
      background-image: url('/tools/tool-intellij.webp');
      background-position: top;
      background-size: cover;

      :deep(.placeholder-icon) {
        display: none;
      }
    }

    #tool-vscode {
      height: 100%;
      background-image: url('/tools/tool-vscode.webp');
      background-position: top;
      background-size: cover;

      :deep(.placeholder-icon) {
        display: none;
      }
    }

    #tool-godot {
      height: 100%;
      background-image: url('/tools/tool-godot.webp');
      background-position: top;
      background-size: cover;

      :deep(.placeholder-icon) {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  #section-about-devtools .section-content {
    grid-template-columns: 1fr;
    gap: 2rem;

    ul.tool-list {
      gap: 1.5rem;
    }
  }
}

@media screen and (max-width: 767px) {
  #section-about-devtools .section-content {
    ul.tool-list {
      gap: 1rem;
    }
  }
}
</style>
