<template>
  <section id="section-about-tools">
    <div class="section-title" role="heading" aria-label="Tools & techs">
      <hr class="title-divider" />
      <span class="title-icon">
        <span class="title-bracket" aria-hidden="true">[</span>
        <iconify-icon
          icon="mingcute:tool-line"
          width="2.5rem"
          aria-hidden="true"
        />
        <span class="title-bracket" aria-hidden="true">]</span>
      </span>
      <hr class="title-divider" />
    </div>
    <div class="section-content">
      <EepyGroup>
        <template v-slot:icon>
          <iconify-icon
            mode="svg"
            icon="carbon:executable-program"
            height="2.5rem"
            aria-hidden="true"
          />
        </template>
        <template v-slot:items>
          <li>
            <iconify-icon
              mode="svg"
              icon="simple-icons:intellijidea"
              height="2rem"
              aria-hidden="true"
            />
            <span>Intell&ijlig;&nbsp;IDEA</span>
          </li>
          <li>
            <iconify-icon
              mode="svg"
              icon="devicon-plain:vscode"
              height="2rem"
              aria-hidden="true"
            />
            <span>VS&nbsp;Code</span>
          </li>
          <li>
            <iconify-icon
              mode="svg"
              icon="simple-icons:godotengine"
              height="2rem"
              aria-hidden="true"
            />
            <span>Godot</span>
          </li>
        </template>
      </EepyGroup>
      <EepyGroup :class="{ reverse: shouldReverse }">
        <template v-slot:icon>
          <iconify-icon
            mode="svg"
            icon="mingcute:paint-brush-line"
            height="2.5rem"
            aria-hidden="true"
          />
        </template>
        <template v-slot:items>
          <li>
            <iconify-icon
              mode="svg"
              icon="simple-icons:aseprite"
              height="2rem"
              aria-hidden="true"
            />
            <span>Aseprite</span>
          </li>
          <li>
            <iconify-icon
              mode="svg"
              icon="simple-icons:krita"
              height="2rem"
              aria-hidden="true"
            />
            <span>Krita</span>
          </li>
          <li>
            <iconify-icon
              mode="svg"
              icon="simple-icons:adobeillustrator"
              height="2rem"
              aria-hidden="true"
            />
            <span>Illustrator</span>
          </li>
        </template>
      </EepyGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";

const shouldReverse = ref(true);

onMounted(() => window.addEventListener("resize", checkReverse));
onUnmounted(() => window.removeEventListener("resize", checkReverse));

function checkReverse() {
  shouldReverse.value = window.innerWidth > 1023;
}
</script>

<style scoped lang="scss">
#section-about-tools {
  .section-content {
    padding: 1.5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media screen and (max-width: 1023px) {
  #section-about-tools {
    .section-content {
      grid-template-columns: 1fr;
    }
  }
}
</style>
