<template>
  <div class="page-container">
    <TitleSection />
    <ProjectsSection />
    <ArtSection />
    <dialog ref="dialogRef" class="dialog" :class="dialogClasses" @abort="resetHash" @keydown.esc="resetHash">
      <div class="dialog-container">
        <button icon-button class="dialog-close" @click="closeDialog">
          <iconify-icon icon="mingcute:close-line" width="2.5rem"/>
        </button>
        <div id="hash-image">
          <img :src="hashImgSrc">
        </div>
      </div>
    </dialog>
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import ArtSection from '@/components/sections/ArtSection.vue';
import ProjectsSection from  '@/components/sections/ProjectsSection.vue';
import TitleSection from '@/components/sections/TitleSection.vue';
import { useHead } from '@unhead/vue';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

useHead({ meta: [
  { name: 'description', content: 'A small website about myself, my dev projects, and my drawings. Welcome! 🍓' }
]})
const route = useRoute()
const router = useRouter()

const dialogRef: Ref<HTMLDialogElement|null> = ref(null)
const hashImgSrc: Ref<string|undefined> = ref()
const hashDialogMode: Ref<'portrait'|'landscape'> = ref('landscape')

const dialogClasses = computed(() => {
  return [dialogRef.value?.open ? 'open' : '', hashDialogMode.value]
})

onMounted(() => window.addEventListener("deviceorientation", computeDialogMode, true))
onUnmounted(() => window.removeEventListener("deviceorientation", computeDialogMode, true))
watch(() => route.hash, (hash: string) => {
  computeDialogMode()
  if (!hash) {
    return
  }
  console.log('huh')
  hashImgSrc.value = '/artwork/'+hash.split('/').at(-1)
  setTimeout(() => dialogRef.value!.showModal(), 50)
}, { immediate: true })

function computeDialogMode() {
  hashDialogMode.value = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
}

function closeDialog() {
  dialogRef.value?.close()
  resetHash()
}

function resetHash() {
  router.replace('/')
}

</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .dialog {
    position: fixed;
    inset: 0;
    padding: 0;
    margin: auto;
    border: none;
    background: transparent;
    width: 100%;
    height: 100%;
  }

  .dialog-container {
    border-radius: 8px;
    background: transparent;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
      position: absolute;
      top: 0;
      right: 0;
      width: 3rem;
      height: 3rem;
      color: #ccc;
    }
    button:hover > iconify-icon {
      transform: scale(110%);
    }
  }
  .dialog::backdrop {
    background: #000c;
  }

  #hash-image {
    padding: 0;
    margin: auto;
    border-radius: 8px;
    transition: opacity 250ms;
    overflow: hidden;
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
    img {
      object-fit: contain;
    }
  }

  // anims
  .dialog.open {
    opacity: 1;
  }

  // orientation
  .dialog.landscape {
    #hash-image, .hash-image-content, img {
      height: 100%;
    }
  }
  .dialog.portrait {
    #hash-image, .hash-image-content, img {
      width: 100%;
    }
  }
}
</style>