<template>
  <div class="info-terminal">
    <div class="terminal-header" :style="{ visibility: isTextVisible ? 'visible' : 'hidden' }">
      <span>eepy-os v1.2 --- info-terminal </span>
    </div>
    <div class="terminal-content" :style="{ visibility: isTextVisible ? 'visible' : 'hidden' }">
      <template v-if="!infoList[dataIndex]">
        <p><span class="accent">user@infoterm</span>:<span class="tilde">~</span>$ help</p>
        <br>
        <p>click on a box above (info) or below (interests) to know more!<BlinkCharacter /></p>
      </template>
      <template v-else>
        <p><span class="accent">user@infoterm</span>:<span class="tilde">~</span>$ show{{ dataType }} -i {{ dataIndex }}</p>
        <br>
        <p>{{ getData().title }}</p>
        <p>---</p>
        <p>{{ getData().content }}<BlinkCharacter /></p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import BlinkCharacter from './BlinkCharacter.vue';

type Info = { title: string, content: string }
const infoList: Ref<Info[]> = ref([
  { title: 'transfem & proud! 🌈', content: 'seeing myself in the mirror always felt... wrong, at least until i finally discovered who i truly am!' },
  { title: 'software engineer!', content: 'computers are pretty awesome! i started with java, slowly becoming a full-stack developer!' },
  { title: 'pastime illustrator!', content: 'drawing has been a hobby of mine since my chilhood. i am now able to do pixel art, digital painting & vector graphics!' },
  { title: 'very smol :3', content: 'no need to explain, i\'m smol :>' },
  { title: 'curious!', content: 'many things fascinate me, even if i don\'t entirely understand them!' },
  { title: 'eepy...', content: 'zzz...' },
  { title: 'favourite fruit!', content: 'strawberries! why? tasty! :>' },
  { title: 'favourite desserts!', content: 'waffles & crepes! especially with maple syrup :3' }
])
const interestList: Ref<Info[]> = ref([
  { title: 'programming! </>', content: 'not only my job, but a passion as well :>' },
  { title: 'planets & space!', content: 'thanks to ratchet & clank for giving me a planet fixation, lmao' },
  { title: 'scp foundation!', content: 'a collaborative writing project around the containment of "anomalies", it\'s absolutely amazing! also the foundation is [REDACTED BY ORDER OF THE O5 COUNCIL]' },
  { title: 'board games!', content: 'favourites from my collection: "exploding kittens", "unstable unicorns", "terraforming mars", "binding of isaac: four souls" :>' },
  { title: 'video games!', content: 'too many to list here, but favs include "the talos principle 1/2", "celeste", "hades 1/2", "oneshot" & "omori" :3' },
  { title: 'bicycling!', content: 'because it\'s good for your health! very pleasant too ^w^' },
  { title: 'yoga!', content: '...at least when i\'m motivated enough to do some, which is not often enough sadly :c' },
  { title: 'plushies :>', content: 'i have about 20 my collection, and it keeps growing :3' }
])

const isTextVisible = ref(false)

const $props = defineProps<{ dataType: string, dataIndex: number }>()
onMounted(() => setTimeout(() => isTextVisible.value = true, 500))

function getData() {
  return $props.dataType === 'info' ? infoList.value[$props.dataIndex] : interestList.value[$props.dataIndex]
}

</script>


<style scoped lang="scss">
.info-terminal {
  flex: 1;
  border-radius: 8px;
  min-height: 16rem;
  padding: 1.5rem;
  background: var(--eepy-theme-terminal-background);
  color: var(--eepy-theme-terminal-text);
  border: 1px solid var(--eepy-theme-accent-threequarter);
  font-family: monospace;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  font-size: 1rem;

  .terminal-header {
    text-align: center;
    color: var(--eepy-theme-terminal-text-accent);
  }
  .terminal-content {
    flex: 1;
    width: 100%;
    .accent { color: var(--eepy-theme-terminal-text-accent); }
    .tilde { color: var(--eepy-theme-terminal-text-tilde); }
  }
}
</style>