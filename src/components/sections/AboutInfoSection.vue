<template>
  <section id="section-about-info">
    <div>
      <ul class="info-list">
        <li>
          <button class="info-button" :class="{ selected: selectedIdx === 0 }" @click="selectedIdx = 0">
            <iconify-icon mode="svg" icon="noto:transgender-flag" height="2rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 1">
            <iconify-icon mode="svg" icon="noto:books" height="2rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 2">
            <iconify-icon mode="svg" icon="noto:artist-palette" height="2rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 3">
            <iconify-icon mode="svg" icon="noto:woman-raising-hand" height="2rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 4">
            <iconify-icon mode="svg" icon="noto:exclamation-question-mark" height="2rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 5">
            <iconify-icon mode="svg" icon="noto:zzz" height="2rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 6">
            <iconify-icon mode="svg" icon="noto:strawberry" height="2rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 7">
            <iconify-icon mode="svg" icon="noto:waffle" height="2rem" />
          </button>
        </li>
      </ul>
    </div>
    <InfoTerminal :data-index="selectedIdx" />
  </section>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import InfoTerminal from '../InfoTerminal.vue';

type ListInfo = { title: string, content: string }

const selectedIdx: Ref<number> = ref(-1)

</script>

<style scoped lang="scss">
#section-about-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  h2 {
    text-align: center;
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
        height: 4rem;
        border-radius: 8px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      iconify-icon {
        height: 2rem;
        width: 2rem;
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
</style>
