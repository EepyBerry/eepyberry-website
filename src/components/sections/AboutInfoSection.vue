<template>
  <section id="section-about-info">
    <div class="section-title" role="heading" aria-label="About me">
      <hr class="title-divider">
      <span class="title-icon">
        <span class="title-bracket" aria-hidden="true">[</span>
        <iconify-icon icon="mingcute:happy-line" width="2.5rem" aria-hidden="true" />
        <span class="title-bracket" aria-hidden="true">]</span>
      </span>
      <hr class="title-divider">
    </div>
    <div class="section-content">
      <div class="avatar-wrapper">
        <span class="deco tl" />
        <span class="deco tr" />
        <span class="deco bl" />
        <span class="deco br" />
        <img
          class="avatar"
          src="/avatar.webp"
          alt="Avatar"
          aria-label="avatar"
        />
      </div>
      <div class="info-wrapper">
        <ul class="info-list">
          <li>
            <button class="info-button" @click="select('info', 0)" aria-label="transfem">
              <iconify-icon mode="svg" icon="noto:transgender-flag" height="1.75rem" aria-hidden="true" />
              <span v-if="isSelected('info', 0)" class="selection-notch down"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('info', 1)" aria-label="education & job">
              <iconify-icon mode="svg" icon="noto:books" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch down" v-if="isSelected('info', 1)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('info', 2)" aria-label="drawing">
              <iconify-icon mode="svg" icon="noto:artist-palette" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch down" v-if="isSelected('info', 2)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('info', 3)" aria-label="height">
              <iconify-icon mode="svg" icon="noto:woman-raising-hand" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch down" v-if="isSelected('info', 3)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('info', 4)" aria-label="curiosity">
              <iconify-icon mode="svg" icon="noto:exclamation-question-mark" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch down" v-if="isSelected('info', 4)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('info', 5)" aria-label="sleep">
              <iconify-icon mode="svg" icon="noto:zzz" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch down" v-if="isSelected('info', 5)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('info', 6)" aria-label="fruit">
              <iconify-icon mode="svg" icon="noto:strawberry" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch down" v-if="isSelected('info', 6)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('info', 7)" aria-label="dessert">
              <iconify-icon mode="svg" icon="noto:waffle" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch down" v-if="isSelected('info', 7)"></span>
            </button>
          </li>
        </ul>
        <InfoTerminal :data-type="selectedType" :data-index="selectedIdx" />
        <ul class="info-list">
          <li>
            <button class="info-button" @click="select('interest', 0)" aria-label="programming">
              <iconify-icon mode="svg" icon="noto:woman-technologist" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch up" v-if="isSelected('interest', 0)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('interest', 1)" aria-label="planet & space">
              <iconify-icon mode="svg" icon="noto:ringed-planet" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch up" v-if="isSelected('interest', 1)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('interest', 2)" aria-label="scp foundation">
              <iconify-icon mode="svg" icon="simple-icons:scpfoundation" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch up" v-if="isSelected('interest', 2)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('interest', 3)" aria-label="video games">
              <iconify-icon mode="svg" icon="noto:video-game" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch up" v-if="isSelected('interest', 3)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('interest', 4)" aria-label="board games">
              <iconify-icon mode="svg" icon="noto:game-die" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch up" v-if="isSelected('interest', 4)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('interest', 5)" aria-label="bicycle">
              <iconify-icon mode="svg" icon="noto:bicycle" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch up" v-if="isSelected('interest', 5)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('interest', 6)" aria-label="yoga">
              <iconify-icon mode="svg" icon="noto:lotus" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch up" v-if="isSelected('interest', 6)"></span>
            </button>
          </li>
          <li>
            <button class="info-button" @click="select('interest', 7)" aria-label="plushies">
              <iconify-icon mode="svg" icon="noto:teddy-bear" height="1.75rem" aria-hidden="true" />
              <span class="selection-notch up" v-if="isSelected('interest', 7)"></span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import InfoTerminal from '../InfoTerminal.vue';

type ListInfo = { title: string, content: string }

const selectedIdx: Ref<number> = ref(-1)
const selectedType: Ref<string> = ref('info')

function select(type: string, idx: number) {
  selectedType.value = type
  selectedIdx.value = idx
}

function isSelected(type: string, idx: number) {
  return selectedType.value === type && selectedIdx.value === idx
}

</script>

<style scoped lang="scss">
#section-about-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .section-content {
    display: grid;
    grid-template-areas: "avatar info";
    grid-template-columns: 1fr 2fr;
    align-items: center;
    padding: 1.5rem 0;
    margin: 0 auto;
    gap: 3rem;
    width: 100%;
    .avatar-wrapper {
      position: relative;
      grid-area: avatar;
      align-self: flex-end;
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      .avatar {
        width: clamp(160px, 25vw, 300px);
      }
    }
    .info-wrapper {
      position: relative;
      grid-area: info;
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  .info-list {
    list-style-type: none;
    max-width: 100%;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;

    li {
      button {
        position: relative;
        width: 100%;
        height: 3rem;
        border-radius: 6px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .selection-notch {
          position: absolute;
          height: 4px;
          border: 2px solid var(--eepy-theme-button);
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          inset: auto 25% 0;
        }
      }

      iconify-icon {
        height: 1.75rem;
        width: 1.75rem;
        filter: drop-shadow(0 1px 1px #000);
      }
    }
  }
}

@media screen and (max-width: 1199px) {
  #section-about-info {
    .info-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media screen and (max-width: 1199px) {
  #section-about-info {
    .section-content {
      gap: 2rem;
    }
  }
}

@media screen and (max-width: 895px) {
  #section-about-info {
    .section-content {
      grid-template-areas: "info";
      grid-template-columns: 1fr;
      .avatar-wrapper {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  #section-about-info {
    .section-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
}
</style>
