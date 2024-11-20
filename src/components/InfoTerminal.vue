<template>
  <div class="info-terminal">
    <div class="terminal-header">
      <span>eepy-os v2.3 --- info-terminal </span>
      <div class="terminal-header-decoration">
        <span><iconify-icon icon="material-symbols:minimize-rounded" width="0.875rem" aria-hidden="true" /></span>
        <span><iconify-icon icon="mdi:maximize" width="0.75rem" aria-hidden="true" /></span>
        <span><iconify-icon icon="material-symbols:transgender" width="0.875rem" aria-hidden="true" /></span>
      </div>
    </div>
    <div class="terminal-content" :style="{ visibility: isTextVisible ? 'visible' : 'hidden' }">
      <template v-if="!infoList[dataIndex]">
        <p><span class="accent">user@infoterm</span>:<span class="tilde">~</span>$ help</p>
        <br />
        <p>
          <span>click on a button above (info) or below (interests) to know more!</span>
          <BlinkCharacter />
        </p>
      </template>
      <template v-else>
        <p>
          <span class="accent">user@infoterm</span>:<span class="tilde">~</span>$ show{{ dataType }} -i {{ dataIndex }}
        </p>
        <br />
        <p>{{ getData().title }}</p>
        <p>---</p>
        <p v-for="content of getData().content.slice(0, getData().content.length - 1)">{{ content }}</p>
        <p>
          <span>{{ getData().content[getData().content.length - 1] }}</span>
          <BlinkCharacter />
        </p>
      </template>
    </div>
    <div class="terminal-controls">
      <button class="terminal-button" @click="select('info', 0)"><span>~0</span>&nbsp;Gender</button>
      <button class="terminal-button" @click="select('info', 1)"><span>~1</span>&nbsp;Edu</button>
      <button class="terminal-button" @click="select('info', 2)"><span>~2</span>&nbsp;Draw</button>
      <button class="terminal-button" @click="select('info', 3)"><span>~3</span>&nbsp;Smol</button>
      <button class="terminal-button" @click="select('info', 4)"><span>~4</span>&nbsp;Knwldg</button>
      <button class="terminal-button" @click="select('info', 5)"><span>~5</span>&nbsp;Slep</button>
      <button class="terminal-button" @click="select('info', 6)"><span>~6</span>&nbsp;Fruit</button>
      <button class="terminal-button" @click="select('info', 7)"><span>~7</span>&nbsp;Dssrts</button>

      <button class="terminal-button" @click="select('interest', 0)"><span>~8</span>&nbsp;Prgm</button>
      <button class="terminal-button" @click="select('interest', 1)"><span>~9</span>&nbsp;Space</button>
      <button class="terminal-button" @click="select('interest', 2)"><span>~A</span>&nbsp;SCPFn</button>
      <button class="terminal-button" @click="select('interest', 3)"><span>~B</span>&nbsp;BrdGms</button>
      <button class="terminal-button" @click="select('interest', 4)"><span>~C</span>&nbsp;VidGms</button>
      <button class="terminal-button" @click="select('interest', 5)"><span>~D</span>&nbsp;Cyclng</button>
      <button class="terminal-button" @click="select('interest', 6)"><span>~E</span>&nbsp;Yoga</button>
      <button class="terminal-button" @click="select('interest', 7)"><span>~F</span>&nbsp;Plshs</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import BlinkCharacter from './BlinkCharacter.vue'

type Info = { title: string; content: string[] }
const infoList: Ref<Info[]> = ref([
  {
    title: 'transfem & proud! 🌈',
    content: [
      'seeing myself in the mirror always felt... wrong, at least until i finally discovered who i truly am!',
      '---',
      'hrt since: [2023-06-29]',
    ],
  },
  {
    title: 'software engineer!',
    content: [
      'i started with java, slowly becoming a full-stack developer over time! :>',
      '---',
      'current techs: [aws], [docker], [spring boot], [angular]',
    ],
  },
  {
    title: 'pastime illustrator!',
    content: [
      'drawing has been a hobby of mine since my chilhood. i am now able to do pixel art, digital painting & vector graphics!',
    ],
  },
  {
    title: 'very smol :3',
    content: ["no need to explain, i'm smol :>"],
  },
  {
    title: 'always learning!',
    content: [
      'understanding how stuff works is a never-ending source of fascination for me :>',
      'some examples: the human brain, space, 3d modeling, old computer malware, organic chemistry, ...',
    ],
  },
  {
    title: 'eepy...',
    content: ['zzz...'],
  },
  {
    title: 'favourite fruit!',
    content: ['strawberries! why? tasty! :>'],
  },
  {
    title: 'favourite desserts!',
    content: ['waffles & crepes! especially with maple syrup :3'],
  },
])
const interestList: Ref<Info[]> = ref([
  {
    title: 'programming!',
    content: ['not only my job, but a passion as well! :>', "check out my projects if you're interested!"],
  },
  {
    title: 'planets & space!',
    content: [
      'thanks to ratchet & clank for giving me a planet fixation lmao',
      'fun fact: basically the main reason i made lagrange :3',
    ],
  },
  {
    title: 'scp foundation!',
    content: [
      'a collaborative writing project around the containment of "anomalies", it\'s absolutely amazing!',
      'also, the foundation is [REDACTED BY ORDER OF THE O5 COUNCIL]',
    ],
  },
  {
    title: 'board games!',
    content: [
      'favourites from my collection: "exploding kittens", "unstable unicorns", "terraforming mars", "binding of isaac: four souls" :>',
    ],
  },
  {
    title: 'video games!',
    content: [
      'too many to list here, but favs include "the talos principle 1/2", "ultrakill", "factorio", "hades 1/2", "celeste", "oneshot" & "omori" :3',
    ],
  },
  {
    title: 'bicycling!',
    content: ["because it's good for your health! very pleasant too ^w^"],
  },
  {
    title: 'yoga!',
    content: ["...at least when i'm motivated enough to do some, which is not often enough sadly :c"],
  },
  {
    title: 'plushies :>',
    content: [
      'i have about 25 in my collection, and it keeps growing :3',
      '(will probably show it later in [miscellaneous] OwO)',
    ],
  },
])

const isTextVisible = ref(false)
const dataType = ref('')
const dataIndex = ref(-1)

onMounted(() => {
  window.addEventListener('keydown', handleKeyboardInput)
  setTimeout(() => (isTextVisible.value = true), 500)
})
onUnmounted(() => window.removeEventListener('keydown', handleKeyboardInput))

function handleKeyboardInput(evt: KeyboardEvent) {
  const validKeys = '0123456789ABCDEF'.split('')
  if (!validKeys.includes(evt.key.toUpperCase())) {
    return
  }
  const keyIndex = validKeys.indexOf(evt.key.toUpperCase())
  select(keyIndex > 7 ? 'interest' : 'info', keyIndex > 7 ? keyIndex - 8 : keyIndex)
}

function select(type: string, idx: number) {
  dataType.value = type
  dataIndex.value = idx
}

function getData() {
  return (dataType.value === 'info' ? infoList.value : interestList.value)[dataIndex.value]
}
</script>

<style scoped lang="scss">
.info-terminal {
  flex: 1;
  min-height: 24rem;
  height: 100%;
  overflow: hidden;

  background: var(--eepy-theme-terminal-background);
  background-size: 150% 150%;
  color: var(--eepy-color-terminal-text);
  border: 1px solid var(--eepy-theme-border);
  border-radius: 6px;
  animation: gradient 10s linear infinite;

  font-family:
    Jetbrains Mono,
    monospace;
  font-size: 0.875rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .terminal-header {
    position: relative;
    width: 100%;
    padding: 0.375rem 2rem;

    border-bottom: 1px solid var(--eepy-theme-terminal-header-border);
    background: var(--eepy-theme-terminal-header);
    color: var(--eepy-color-white);

    font-size: 0.8125rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    &-decoration {
      position: absolute;
      inset: auto 0.5rem auto auto;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      user-select: none;

      span {
        width: 1.25rem;
        height: 1.25rem;
        background: var(--eepy-theme-terminal-header-decoration);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .terminal-content {
    flex: 1;
    z-index: 1;
    width: 100%;
    padding: 1rem 1.25rem;

    .accent {
      color: var(--eepy-theme-terminal-text-accent);
    }

    .tilde {
      color: var(--eepy-theme-terminal-text-tilde);
    }

    pre {
      padding: 0;
      margin: 0;
      max-width: 100%;
    }
  }

  .terminal-controls {
    width: 100%;
    padding: 1rem 1.25rem;
    z-index: 1;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12ch, auto));
    justify-items: start;
    gap: 0.25rem;
  }
}

button.terminal-button {
  width: 100%;
  height: 1.25rem;
  padding: 0;
  background: none;
  border: none;
  box-shadow: none;
  font-family: JetBrains Mono;
  font-size: 0.875rem;
  color: var(--eepy-color-terminal-text);

  display: flex;
  justify-content: flex-start;

  & > span {
    background: var(--eepy-color-terminal-text);
    color: black;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &:hover {
    background: var(--eepy-color-terminal-text);
    color: black;
  }
  &:active {
    background: var(--eepy-theme-terminal-text-accent);
    & > span {
      background: var(--eepy-theme-terminal-text-accent);
      color: black;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}

@media screen and (min-width: 895px) and (max-width: 1023px), screen and (max-width: 567px) {
  .info-terminal {
    .terminal-header > .terminal-header-decoration {
      span:nth-child(1),
      span:nth-child(2) {
        display: none;
      }
    }
  }
}

@media (prefers-reduced-motion) {
  .info-terminal {
    animation: none;
  }
}

@keyframes gradient {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 50% -100%;
  }
}
</style>
