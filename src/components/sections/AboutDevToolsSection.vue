<template>
  <section id="section-about-devtools">
    <div class="section-title" role="heading" aria-label="Tools & techs">
      <span>development tools</span>
      <iconify-icon
        icon="carbon:executable-program"
        style="width: 2rem; height: 2rem"
        width="2rem"
        aria-hidden="true"
      />
    </div>
    <div class="section-content">
      <ul class="tool-list">
        <li>
          <EepyPatchCard id="tool-intellij">
            <div>
              <iconify-icon inline mode="svg" icon="logos:intellij-idea" height="2rem" aria-hidden="true" />
              <span>Intell&ijlig;&nbsp;IDEA</span>
            </div>
            <p>primary IDE</p>
          </EepyPatchCard>
        </li>
        <li>
          <EepyPatchCard id="tool-vscode">
            <div>
              <iconify-icon inline mode="svg" icon="devicon:vscode" height="2rem" aria-hidden="true" />
              <span>Visual Studio Code</span>
            </div>
            <p>secondary IDE</p>
          </EepyPatchCard>
        </li>
        <li>
          <EepyPatchCard id="tool-godot">
            <div>
              <iconify-icon inline mode="svg" icon="logos:godot-icon" height="2rem" aria-hidden="true" />
              <span>Godot Engine</span>
            </div>
            <p>game development</p>
          </EepyPatchCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
#section-about-devtools {
  .section-content {
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
        min-width: 18rem;
      }
    }

    #tool-intellij,
    #tool-vscode,
    #tool-godot {
      height: 100%;
      background-position: top;
      background-size: cover;

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      p {
        font-size: 1.125rem;
        font-weight: 500;
      }
    }
    #tool-intellij {
      background-image: url('/tools/tool-intellij.webp');
    }
    #tool-vscode {
      background-image: url('/tools/tool-vscode.webp');
    }
    #tool-godot {
      background-image: url('/tools/tool-godot.webp');
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

@media screen and (max-width: 567px) {
  #section-about-devtools .section-content {
    ul.tool-list li {
      min-width: 16rem;
      li {
        min-width: unset;
      }
    }
  }
}
</style>
