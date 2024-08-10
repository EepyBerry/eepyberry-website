<template>
  <section id="section-about-techs">
    <h2>my main techs!</h2>
    <ul class="tech-list">
      <li class="aws">
        <div>
          <iconify-icon mode="svg" icon="cib:amazon-aws" height="1.5rem" />
        </div>
        <span>AWS</span>
        <iconify-icon
          icon="noto:glowing-star"
          class="star"
          height="1.25rem"
          aria-hidden="true"
        />
      </li>
      <li class="java">
        <div>
          <iconify-icon icon="cib:java" height="1.5rem" aria-hidden="true" />
        </div>
        <span>Java</span>
        <iconify-icon
          icon="noto:glowing-star"
          class="star"
          height="1.25rem"
          aria-hidden="true"
        />
      </li>
      <li class="vuejs">
        <div>
          <iconify-icon
            mode="svg"
            icon="simple-icons:vuedotjs"
            height="1.5rem"
          />
        </div>
        <span>Vue.js</span>
      </li>
      <li class="kubernetes">
        <div>
          <iconify-icon
            mode="svg"
            icon="simple-icons:kubernetes"
            height="1.5rem"
          />
        </div>
        <span>Kubernetes</span>
      </li>
      <li class="docker">
        <div>
          <iconify-icon mode="svg" icon="simple-icons:docker" height="1.5rem" />
        </div>
        <span>Docker</span>
      </li>
      <li class="spring">
        <div>
          <iconify-icon
            icon="simple-icons:springboot"
            height="1.5rem"
            aria-hidden="true"
          />
        </div>
        <span>Spring Boot</span>
        <iconify-icon
          icon="noto:glowing-star"
          class="star"
          height="1.25rem"
          aria-hidden="true"
        />
      </li>
      <li class="git">
        <div>
          <iconify-icon mode="svg" icon="simple-icons:git" height="1.5rem" />
        </div>
        <span>Git</span>
        <iconify-icon
          icon="noto:glowing-star"
          class="star"
          height="1.25rem"
          aria-hidden="true"
        />
      </li>
      <li class="angular">
        <div>
          <iconify-icon
            mode="svg"
            icon="simple-icons:angular"
            height="1.5rem"
          />
        </div>
        <span>Angular</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
#section-about-techs {
  .tech-list {
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

      & > span {
        padding: 1rem;
        color: var(--white);
      }
      & > div {
        padding: 0.75rem;
        width: 3rem;
        height: 3rem;
        color: var(--white);
      }
      & > .star {
        z-index: 1;
        position: absolute;
        top: -0.25rem;
        right: -0.25rem;
        transform: rotateZ(36deg);
        filter: drop-shadow(0 0 2px #000);
      }

      // Tech overrides
      &.spring {
        background: var(--eepy-color-spring);
      }
      &.vuejs {
        background: var(--eepy-color-vuejs);
      }
      &.angular {
        background: var(--eepy-color-angular);
      }
      &.docker {
        background-color: var(--eepy-color-docker);
      }
      &.kubernetes {
        background-color: var(--eepy-color-kubernetes);
      }
      &.git {
        background-color: var(--eepy-color-git);
      }
      &.java,
      &.aws {
        background-color: var(--eepy-color-darktech);
      }
    }
  }
}
iconify-icon {
  filter: drop-shadow(0 1px 1px var(--eepy-color-primary));
}

@media screen and (max-width: 1023px) {
  #section-about-techs {
    .tech-list {
      li {
        min-width: 0;
      }
    }
  }
}
@media screen and (max-width: 895px) {
  #section-about-techs {
    h2 {
      text-align: center;
    }
  }
}
</style>
