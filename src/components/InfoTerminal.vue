<template>
  <div class="info-terminal">
    <div class="terminal-content" :style="{ visibility: isTextVisible ? 'visible' : 'hidden' }">
      <p><span class="accent">infoterm@eepyberry.me</span>:<span class="tilde">~</span>$ showinfo</p>
      <br />
      <template v-if="selectedInfoIdx < 0">
        <p>
          <span>select an option (or press the corresponding key) to learn more!</span>
          <BlinkCharacter />
        </p>
      </template>
      <template v-else>
        <p>{{ getSelectedInfo().title }}</p>
        <p>---</p>
        <p
          v-for="(content, idx) of getSelectedInfo().content.slice(0, getSelectedInfo().content.length - 1)"
          :key="idx"
        >
          {{ content }}
        </p>
        <p>
          <span>{{ getSelectedInfo().content[getSelectedInfo().content.length - 1] }}</span>
          <BlinkCharacter />
        </p>
      </template>
    </div>
    <div class="terminal-controls">
      <button class="terminal-button" @click="selectInfo(0)"><span>~0</span>&nbsp;Gender</button>
      <button class="terminal-button" @click="selectInfo(1)"><span>~1</span>&nbsp;Education</button>
      <button class="terminal-button" @click="selectInfo(2)"><span>~2</span>&nbsp;Drawing</button>
      <button class="terminal-button" @click="selectInfo(3)"><span>~3</span>&nbsp;Knowledge</button>
      <button class="terminal-button" @click="selectInfo(4)"><span>~4</span>&nbsp;Sleep</button>
      <button class="terminal-button" @click="selectInfo(5)"><span>~5</span>&nbsp;Fruits</button>
      <button class="terminal-button" @click="selectInfo(6)"><span>~6</span>&nbsp;Desserts</button>

      <button class="terminal-button" @click="selectInfo(7)"><span>~7</span>&nbsp;Programming</button>
      <button class="terminal-button" @click="selectInfo(8)"><span>~8</span>&nbsp;Space</button>
      <button class="terminal-button" @click="selectInfo(9)"><span>~9</span>&nbsp;SCP&nbsp;Wiki</button>
      <button class="terminal-button" @click="selectInfo(10)"><span>~A</span>&nbsp;Board&nbsp;Games</button>
      <button class="terminal-button" @click="selectInfo(11)"><span>~B</span>&nbsp;Video&nbsp;Games</button>
      <button class="terminal-button" @click="selectInfo(12)"><span>~C</span>&nbsp;Cycling</button>
      <button class="terminal-button" @click="selectInfo(13)"><span>~D</span>&nbsp;Plushies</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import BlinkCharacter from './BlinkCharacter.vue';

type Info = { title: string; content: string[] };
const infoList: Ref<Info[]> = ref([
  {
    title: 'transfem & proud! 🌈',
    content: ["don't like that? my stuff isn't for you, then :3c", '---', 'hrt since: [2023-06-29]'],
  },
  {
    title: 'education',
    content: [
      'computer science degree; started programming in java, slowly becoming a full-stack developer over time',
      '---',
      'current techs: [aws], [docker], [spring boot], [vue]',
    ],
  },
  {
    title: 'my main hobby: pastime artist',
    content: [
      'drawing has been a hobby of mine since my chilhood. i am now able to do pixel art, digital painting & vector graphics',
    ],
  },
  {
    title: 'always learning',
    content: [
      'understanding how stuff works is a never-ending source of fascination for me',
      'some examples: the human brain, space, 3d modeling, old computer malware, organic chemistry, ...',
    ],
  },
  {
    title: 'eepy...',
    content: ['zzz...'],
  },
  {
    title: 'favourite fruit',
    content: ['strawberries!'],
  },
  {
    title: 'favourite desserts',
    content: ['waffles & crepes! especially with maple syrup!'],
  },
  {
    title: 'programming',
    content: ['not only my job, but a passion as well!', "check out my projects if you're interested!"],
  },
  {
    title: 'planets & space',
    content: [
      'thanks to ratchet & clank for giving me a planet fixation lmao',
      'fun fact: basically the main reason i made lagrange',
    ],
  },
  {
    title: 'scp foundation',
    content: [
      'a collaborative writing project around the containment of "anomalies", it\'s absolutely amazing!',
      'also, the foundation is [REDACTED BY ORDER OF THE O5 COUNCIL]',
    ],
  },
  {
    title: 'board games',
    content: [
      'favourites from my collection: "exploding kittens", "unstable unicorns", "terraforming mars", "binding of isaac: four souls"',
    ],
  },
  {
    title: 'video games',
    content: [
      'too many to list here, but favs include "nine sols", "hollow knight (+ silksong)", "the talos principle 1/2", "ultrakill", "factorio", "hades 1/2", "celeste", "oneshot" & "omori"',
    ],
  },
  {
    title: 'bicycling',
    content: ['keeps my legs active with all the sitting i do at home and for my job'],
  },
  {
    title: 'plushies',
    content: [
      'i have about 30 in my collection, and it keeps growing!',
      '(will probably show it later in [miscellaneous] OwO)',
    ],
  },
]);

const isTextVisible = ref(false);
const selectedInfoIdx = ref(-1);

onMounted(() => {
  window.addEventListener('keydown', handleKeyboardInput);
  setTimeout(() => (isTextVisible.value = true), 500);
});
onUnmounted(() => window.removeEventListener('keydown', handleKeyboardInput));

function handleKeyboardInput(evt: KeyboardEvent) {
  const validKeys = '0123456789ABCD'.split('');
  if (!validKeys.includes(evt.key.toUpperCase())) {
    return;
  }
  selectInfo(validKeys.indexOf(evt.key.toUpperCase()));
}

function selectInfo(idx: number) {
  selectedInfoIdx.value = idx;
}

function getSelectedInfo() {
  return infoList.value[selectedInfoIdx.value];
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
    grid-template-columns: repeat(auto-fill, minmax(15ch, auto));
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
  gap: 0;

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
