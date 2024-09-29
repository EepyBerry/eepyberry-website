<template>
  <div class="info-terminal">
    <div class="terminal-header">
      <span>eepy-os v2.1 --- info-terminal </span>
      <div class="terminal-header-decoration">
        <span><iconify-icon icon="material-symbols:minimize-rounded" width="0.875rem" aria-hidden="true" /></span>
        <span><iconify-icon icon="mdi:maximize" width="0.75rem" aria-hidden="true" /></span>
        <span><iconify-icon icon="material-symbols:transgender" width="0.875rem" aria-hidden="true" /></span>
      </div>
    </div>
    <div class="terminal-content" :style="{ visibility: isTextVisible ? 'visible' : 'hidden' }">
      <template v-if="!infoList[dataIndex]">
        <p>
          <span class="accent">user@infoterm</span>:<span class="tilde">~</span>$ help
        </p>
        <br />
        <p>
          <span>click on a button above (info) or below (interests) to know
            more!</span>
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import BlinkCharacter from "./BlinkCharacter.vue";

type Info = { title: string; content: string[] };
const infoList: Ref<Info[]> = ref([
  {
    title: "transfem & proud! 🌈",
    content: ["seeing myself in the mirror always felt... wrong, at least until i finally discovered who i truly am!", "---", "hrt since: [2023-06-29]"],
  },
  {
    title: "software engineer!",
    content: ["i started with java, slowly becoming a full-stack developer over time! :>", "---", "current techs: [aws], [docker], [spring boot], [angular]"],
  },
  {
    title: "pastime illustrator!",
    content: ["drawing has been a hobby of mine since my chilhood. i am now able to do pixel art, digital painting & vector graphics!"],
  },
  {
    title: "very smol :3",
    content: ["no need to explain, i'm smol :>"]
  },
  {
    title: "curious!",
    content: ["many things fascinate me, even if i don't fully understand them!", "some examples: our brains, consciousness and sentience, space, old computer malware, stuff around chemistry, ..."],
  },
  {
    title: "eepy...",
    content: ["zzz..."]
  },
  {
    title: "favourite fruit!",
    content: ["strawberries! why? tasty! :>"]
  },
  {
    title: "favourite desserts!",
    content: ["waffles & crepes! especially with maple syrup :3"],
  },
]);
const interestList: Ref<Info[]> = ref([
  {
    title: "programming!",
    content: ["not only my job, but a passion as well! :>", "check out my projects if you're interested!"],
  },
  {
    title: "planets & space!",
    content: ["thanks to ratchet & clank for giving me a planet fixation lmao", "fun fact: basically the main reason i made lagrange :3"],
  },
  {
    title: "scp foundation!",
    content:
      ['a collaborative writing project around the containment of "anomalies", it\'s absolutely amazing!', 'also, the foundation is [REDACTED BY ORDER OF THE O5 COUNCIL]'],
  },
  {
    title: "board games!",
    content:
      ['favourites from my collection: "exploding kittens", "unstable unicorns", "terraforming mars", "binding of isaac: four souls" :>'],
  },
  {
    title: "video games!",
    content:
      ['too many to list here, but favs include "the talos principle 1/2", "celeste", "hades 1/2", "oneshot" & "omori" :3'],
  },
  {
    title: "bicycling!",
    content: ["because it's good for your health! very pleasant too ^w^"],
  },
  {
    title: "yoga!",
    content:
      ["...at least when i'm motivated enough to do some, which is not often enough sadly :c"],
  },
  {
    title: "plushies :>",
    content: ["i have about 25 in my collection, and it keeps growing :3", "(will probably show it later in [miscellaneous] OwO)"],
  },
]);

const isTextVisible = ref(false);

const $props = defineProps<{ dataType: string; dataIndex: number }>();
onMounted(() => setTimeout(() => (isTextVisible.value = true), 500));

function getData() {
  return $props.dataType === "info"
    ? infoList.value[$props.dataIndex]
    : interestList.value[$props.dataIndex];
}
</script>

<style scoped lang="scss">
.info-terminal {
  flex: 1;
  min-height: 18rem;
  overflow: hidden;

  background: var(--eepy-theme-terminal-background);
  background-size: 150% 150%;
  color: var(--eepy-theme-terminal-text);
  border: 1px solid var(--eepy-theme-accent-threequarter);
  border-radius: 6px;
  animation: gradient 10s linear infinite;

  font-family: Jetbrains Mono, monospace;
  font-size: 0.875rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .terminal-header {
    position: relative;
    width: 100%;
    padding: 0.375rem;

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
