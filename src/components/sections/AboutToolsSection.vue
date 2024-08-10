<template>
  <section id="section-about-tools">
    <h2>my main tools!</h2>
    <ul class="tool-list">
      <li class="idea">
        <div>
          <iconify-icon icon="logos:intellij-idea" height="1.5rem" aria-hidden="true" />
        </div>
        <span>Intellij IDEA</span>
        <iconify-icon icon="noto:glowing-star" class="star" height="1.25rem" aria-hidden="true" />
      </li>
      <li class="vscode">
        <div>
          <iconify-icon mode="svg" icon="devicon:vscode" height="1.5rem" />
        </div>
        <span>VS Code</span>
      </li>
      <li class="aseprite">
        <div>
          <iconify-icon mode="svg" icon="simple-icons:aseprite" height="1.5rem" />
        </div>
        <span>Aseprite</span>
        <iconify-icon icon="noto:glowing-star" class="star" height="1.25rem" aria-hidden="true" />
      </li>
      <li class="godot">
        <div>
          <iconify-icon mode="svg" icon="logos:godot-icon" height="1.5rem" />
        </div>
        <span>Godot</span>
      </li>
      <li class="blender">
        <div>
          <iconify-icon mode="svg" icon="logos:blender" height="1.5rem" />
        </div>
        <span>Blender</span>
      </li>
      <li class="krita">
        <div>
          <iconify-icon mode="svg" icon="simple-icons:krita" height="1.5rem" />
        </div>
        <span>Krita</span>
        <iconify-icon icon="noto:glowing-star" class="star" height="1.25rem" aria-hidden="true" />
      </li>
      <li class="illustrator">
        <div>
          <iconify-icon icon="skill-icons:illustrator" height="1.5rem" aria-hidden="true" />
        </div>
        <span>Illustrator</span>
        <iconify-icon icon="noto:glowing-star" class="star" height="1.25rem" aria-hidden="true" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
#section-about-tools {
  .tool-list {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 100%;

    li {
      position: relative;
      flex-grow: 1;
      flex-shrink: 1;
      min-width: 10rem;
      max-width: 100%;
      height: 3rem;
      background: var(--eepy-color-accent-semi);
      border-radius: 8px;

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
      &>.star {
        z-index: 1;
        position: absolute;
        top: -0.25rem;
        right: -0.25rem;
        transform: rotateZ(36deg);
        filter: drop-shadow(0 0 2px #000)
      }

      // Tool overrides
      &.illustrator {
        background-color: var(--eepy-color-illustrator);
      }
      &.krita {
        background: var(--eepy-color-krita);
      }
      &.blender {
        background: var(--eepy-color-blender);
      }
      &.godot {
        background: var(--eepy-color-godot);
      }
      &.idea,
      &.vscode,
      &.aseprite {
        background-color: var(--eepy-color-darktech);
      }
    }
  }
}
iconify-icon {
  filter: drop-shadow(0 1px 1px var(--eepy-color-primary))
}

@media screen and (max-width: 1023px) {
  #section-about-tools {
    .tool-list {
      li {
        min-width: 0;
      }
    }
  }
}
@media screen and (max-width: 895px) {
  #section-about-tools {
    h2 {
      text-align: center;
    }
  }
}
</style>