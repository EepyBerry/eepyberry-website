<template>
  <section id="section-about-interests">
    <h2>interests and stuff!</h2>
    <ul class="tool-list">
      <li class="idea">
        <div>
          <iconify-icon icon="logos:intellij-idea" height="1.5rem" aria-hidden="true" />
        </div>
        <span>Intellij IDEA</span>
      </li>
      <li class="vscode">
        <div>
          <iconify-icon mode="svg" icon="devicon:vscode" height="1.5rem" />
        </div>
        <span>VS Code</span>
      </li>
      <li class="godot">
        <div>
          <iconify-icon mode="svg" icon="logos:godot-icon" height="1.5rem" />
        </div>
        <span>Godot</span>
      </li>
      <li class="illustrator">
        <div>
          <iconify-icon icon="skill-icons:illustrator" height="1.5rem" aria-hidden="true" />
        </div>
        <span>Illustrator</span>
      </li>
      <li class="krita">
        <div>
          <iconify-icon mode="svg" icon="simple-icons:krita" height="1.5rem" />
        </div>
        <span>Krita</span>
      </li>
      <li class="aseprite">
        <div>
          <iconify-icon mode="svg" icon="simple-icons:aseprite" height="1.5rem" />
        </div>
        <span>Aseprite</span>
      </li>
      <li class="blender">
        <div>
          <iconify-icon mode="svg" icon="logos:blender" height="1.5rem" />
        </div>
        <span>Blender</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
#section-about-interests {
  .tool-list {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 100%;

    li {
      flex-grow: 1;
      flex-shrink: 1;
      max-width: 100%;
      height: 3rem;
      background: var(--eepy-color-accent-semi);
      border-radius: 8px;
      backdrop-filter: blur(4px);

      display: flex;
      align-items: center;
      justify-content: space-between;

      font-family: Dosis;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1rem;

      &>span {
        padding: 1rem;
        color: var(--white);
      }
      &>div {
        padding: 0.75rem;
        width: 3rem;
        height: 3rem;
        color: var(--white);
      }
    }
  }
}
@media screen and (max-width: 767px) {
  #section-about-interests {
    h2 {
      text-align: center;
    }
  }
}
</style>