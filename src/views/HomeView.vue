<template>
  <div class="page-container">
    <TitleSection />
    <ProjectsSection />
    <ArtSection />
    <dialog
      ref="dialogRef"
      class="dialog"
      :class="hashDialogMode"
      @abort="resetHash"
      @keydown.esc="resetHash"
    >
      <div class="dialog-container">
        <button
          icon-button
          class="dialog-close"
          @click="closeDialog"
          tabindex="0"
        >
          <iconify-icon icon="mingcute:close-line" width="3rem" />
        </button>
        <div id="hash-image">
          <img :src="hashImgSrc" />
        </div>
      </div>
    </dialog>
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import ArtSection from "@/components/sections/ArtSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import TitleSection from "@/components/sections/TitleSection.vue";
import { useHead } from "@unhead/vue";
import { onMounted, onUnmounted, onUpdated, ref, watch, type Ref } from "vue";
import { useRoute, useRouter } from "vue-router";

useHead({
  meta: [
    {
      name: "description",
      content:
        "A small website about myself, my dev projects, and my drawings. Welcome! 🍓",
    },
  ],
});
const route = useRoute();
const router = useRouter();

const dialogRef: Ref<HTMLDialogElement | null> = ref(null);
const hashImgSrc: Ref<string | undefined> = ref();
const hashDialogMode: Ref<"portrait" | "landscape"> = ref("landscape");

onMounted(() => {
  window.addEventListener("click", handleClick, true);
  window.addEventListener("resize", computeDialogMode, true);
  window.addEventListener("deviceorientation", closeDialog, true);
});
onUnmounted(() => {
  window.removeEventListener("click", handleClick, true);
  window.removeEventListener("resize", computeDialogMode, true);
  window.removeEventListener("deviceorientation", closeDialog, true);
});
onUpdated(() => {
  if (dialogRef.value?.open) {
    dialogRef.value?.classList.add("animate");
  }
});

watch(
  () => route.hash,
  (hash: string) => {
    computeDialogMode();
    if (!hash) {
      return;
    }
    hashImgSrc.value = "/artwork/" + hash.split("/").at(-1);
    setTimeout(() => {
      dialogRef.value!.showModal();
      dialogRef.value?.classList.add("animate");
    }, 50);
  },
  { immediate: true },
);

function computeDialogMode() {
  hashDialogMode.value =
    window.innerWidth > window.innerHeight ? "landscape" : "portrait";
}

function handleClick($event: MouseEvent) {
  if (($event.target as HTMLElement).classList.contains("dialog-container")) {
    closeDialog();
  }
}

function closeDialog() {
  dialogRef.value?.classList.remove("animate");
  setTimeout(
    () => {
      resetHash();
      dialogRef.value?.close();
    },
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 400,
  );
}

function resetHash() {
  router.replace("/");
}
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  gap: 6rem;

  hr {
    width: 75%;
    align-self: center;
    border: 1px solid var(--eepy-theme-accent-half);
    border-radius: 2px;
    margin-top: 3rem;
  }

  .dialog {
    position: fixed;
    inset: 0;
    padding: 0;
    margin: auto;
    border: none;
    background: transparent;
    width: 100lvw;
    height: 100lvh;
    opacity: 0;
    transition:
      opacity 400ms ease-in-out,
      background-color 400ms ease-in-out;
  }
  .dialog.animate {
    opacity: 1;
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
      top: 24px;
      right: 24px;
      width: 4rem;
      height: 4rem;
      color: white;
    }
    button:hover > iconify-icon {
      transform: scale(110%);
    }
  }
  .dialog::backdrop {
    background-color: #0009;
  }

  #hash-image {
    padding: 0;
    margin: auto;
    border-radius: 8px;
    overflow: hidden;
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      object-fit: contain;
    }
  }

  // orientation
  .dialog.landscape {
    #hash-image,
    .hash-image-content,
    img {
      height: 100%;
    }
  }
  .dialog.portrait {
    #hash-image,
    .hash-image-content,
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1199px) {
  .page-container {
    gap: 1.5rem;
    hr {
      margin-top: 1.5rem;
    }
    #section-art {
      margin-top: 0;
    }
    .dialog-container {
      button {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 4rem;
        height: 4rem;
        color: white;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .page-container {
    gap: 1.5rem;
    hr {
      margin-top: 1.5rem;
    }
    #section-art {
      margin-top: 0;
    }
    .dialog-container {
      button {
        position: absolute;
        top: 0;
        right: 0;
        width: 4rem;
        height: 4rem;
        color: white;
      }
    }
  }
}

@media screen and (prefers-reduced-motion) {
  .page-container {
    .dialog {
      transition: none;
    }
  }
}
</style>
