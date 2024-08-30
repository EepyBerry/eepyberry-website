<template>
  <section id="section-about-info">
    <div>
      <h2>byte-sized info!</h2>
      <ul class="info-list">
        <li>
          <button class="info-button" @click="selectedIdx = 0">
            <iconify-icon mode="svg" icon="noto:transgender-flag" height="2.5rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 1">
            <iconify-icon mode="svg" icon="noto:books" height="2.5rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 2">
            <iconify-icon mode="svg" icon="noto:artist-palette" height="2.5rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 3">
            <iconify-icon mode="svg" icon="noto:woman-raising-hand" height="2.5rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 4">
            <iconify-icon mode="svg" icon="noto:exclamation-question-mark" height="2.5rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 5">
            <iconify-icon mode="svg" icon="noto:zzz" height="2.5rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 6">
            <iconify-icon mode="svg" icon="noto:strawberry" height="2.5rem" />
          </button>
        </li>
        <li>
          <button class="info-button" @click="selectedIdx = 7">
            <iconify-icon mode="svg" icon="noto:waffle" height="2.5rem" />
          </button>
        </li>
      </ul>
    </div>
    <div class="info-box" :class="{ 'empty': !selectedContent[selectedIdx] }">
      <span class="no-selection" v-if="!selectedContent[selectedIdx]">Select a box above to know more!</span>
      <template v-else>
        <h3>{{ selectedContent[selectedIdx].title }}</h3>
        <p>{{ selectedContent[selectedIdx].content }}</p>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

type ListInfo = { title: string, content: string }

const selectedIdx: Ref<number> = ref(-1)
const selectedContent: Ref<ListInfo[]> = ref([
  { title: 'transfem & proud! 🌈', content: 'seeing myself in the mirror always felt... wrong, at least until i finally discovered who i truly am!' },
  { title: 'software engineer!', content: 'computers are pretty awesome! i started with Java, slowly becoming a full-stack developer!' },
  { title: 'pastime illustrator!', content: 'drawing has been a hobby of mine since my chilhood. i am now able to do pixel art, digital painting & vector graphics!' },
  { title: 'very smol :3', content: 'no need to explain, i\'m smol :>' },
  { title: 'curious!', content: 'many things fascinate me, even if i don\'t entirely understand them!' },
  { title: 'eepy...', content: 'zzz...' },
  { title: 'favourite fruit!', content: 'strawberries! why? tasty! :>' },
  { title: 'favourite desserts!', content: 'waffles & crepes! especially with maple syrup :3' }
])

</script>

<style scoped lang="scss">
#section-about-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  h2 {
    text-align: center;
  }

  .info-list {
    list-style-type: none;
    max-width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    gap: 1rem;

    li {
      button {
        position: relative;
        width: 100%;
        height: 5rem;
        background: var(--eepy-theme-monochrome);
        border: 1px solid var(--eepy-theme-accent-half);
        border-radius: 8px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      iconify-icon {
        height: 2.5rem;
        width: 2.5rem;
        filter: drop-shadow(0 1px 1px #000);
      }
    }
  }
  .info-box {
    flex: 1;
    border-radius: 8px;
    min-height: 8rem;
    padding: 1rem;
    background: var(--eepy-theme-monochrome);
    border: 2px solid var(--eepy-theme-accent-half);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    &.empty {
      background: transparent;
      border: 2px dotted var(--eepy-theme-accent-half);
    }

    .no-selection {
      font-family: Dosis;
      font-size: 1.125rem;
    }
  }
}
</style>
