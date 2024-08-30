<template>
  <div class="info-terminal">
    <div class="terminal-header" :style="{ visibility: isTextVisible ? 'visible' : 'hidden' }">
      <span>eepy-os v1.2 --- info-terminal </span>
    </div>
    <div class="terminal-content" :style="{ visibility: isTextVisible ? 'visible' : 'hidden' }">
      <span class="no-selection" v-if="!selectedContent[dataIndex]">Select a box above to know more!<BlinkCharacter /></span>
      <template v-else>
        <p><span class="accent">root@infoterm</span>:<span class="tilde">~</span>$ showinfo -i {{ dataIndex }}</p>
        <br>
        <p>{{ selectedContent[dataIndex].title }}</p>
        <p>---</p>
        <p>{{ selectedContent[dataIndex].content }}<BlinkCharacter /></p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import BlinkCharacter from './BlinkCharacter.vue';

type ListInfo = { title: string, content: string }
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

const isTextVisible = ref(false)

defineProps<{ dataIndex: number }>()

onMounted(() => setTimeout(() => isTextVisible.value = true, 500))
</script>


<style scoped lang="scss">
.info-terminal {
  flex: 1;
  border-radius: 8px;
  min-height: 16rem;
  padding: 1.5rem;
  background: var(--eepy-color-terminal-background);
  color: var(--eepy-color-terminal-text);
  border: 1px solid var(--eepy-theme-accent);
  font-family: monospace;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  font-size: 1rem;

  .terminal-header {
    text-align: center;
    color: var(--eepy-color-terminal-text-accent);
  }
  .terminal-content {
    flex: 1;
    width: 100%;
    .accent { color: var(--eepy-color-terminal-text-accent); }
    .tilde { color: var(--eepy-color-terminal-text-tilde); }
  }
}
</style>