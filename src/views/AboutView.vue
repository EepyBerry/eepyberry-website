<template>
  <div class="page-container">
    <TitleSectionSmall />
    <div class="section-title" role="heading" aria-label="Drawings">
      <hr class="title-divider">
      <span class="title-icon">
        <span class="title-bracket" aria-hidden="true">[</span>
        <iconify-icon icon="mingcute:happy-line" width="2.5rem" aria-hidden="true" />
        <span class="title-bracket" aria-hidden="true">]</span>
      </span>
      <hr class="title-divider">
    </div>
    <div class="main-grid">
      <div class="avatar-wrapper">
        <span class="deco tl" />
        <span class="deco tr" />
        <span class="deco bl" />
        <span class="deco br" />
        <img
          class="avatar"
          src="/avatar.webp"
          alt="Avatar"
          aria-label="avatar"
        />
      </div>
      <AboutInfoSection />
    </div>
    <div class="section-title" role="heading" aria-label="Drawings">
      <hr class="title-divider">
      <span class="title-icon">
        <span class="title-bracket" aria-hidden="true">[</span>
        <iconify-icon icon="mingcute:tool-line" width="2.5rem" aria-hidden="true" />
        <span class="title-bracket" aria-hidden="true">]</span>
      </span>
      <hr class="title-divider">
    </div>
    <div class="misc-grid">
      <AboutTechsSection />
      <AboutToolsSection />
    </div>
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import AboutInfoSection from "@/components/sections/AboutInfoSection.vue";
import AboutTechsSection from "@/components/sections/AboutTechsSection.vue";
import AboutToolsSection from "@/components/sections/AboutToolsSection.vue";
import TitleSectionSmall from "@/components/sections/TitleSectionSmall.vue";
import { useHead } from "@unhead/vue";
useHead({
  meta: [
    {
      name: "description",
      content:
        "Who am I? What do I like to do? Why a berry? It's all in here!",
    },
  ],
});
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;

  .main-grid {
    display: grid;
    grid-template-areas: "avatar info";
    grid-template-columns: 1fr 2fr;
    align-items: center;
    margin: 0 auto;
    gap: 3rem;
    width: 100%;

    #section-about-info {
      grid-area: info;
      align-self: flex-start;
    }
    .avatar-wrapper {
      position: relative;
      grid-area: avatar;
      align-self: flex-end;
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      .avatar {
        width: clamp(160px, 25vw, 300px);
      }
    }
  }
  .misc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.chip-list {
  margin-top: 0.5rem;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex: 0 1 0;
  //grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
}

@media screen and (max-width: 1199px) {
  .page-container {
    gap: 1.5rem;
    .main-grid {
      gap: 2rem;
      #section-about-info {
        align-self: center;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .page-container {
    .main-grid {
      .avatar-wrapper {
        align-items: center;
      }
    }
  }
}

@media screen and (max-width: 895px) {
  .page-container {
    .main-grid {
      grid-template-areas: "info";
      grid-template-columns: 1fr auto;

      #section-about-interests {
        text-align: center;
      }
      .avatar-wrapper {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .page-container {
    .main-grid {
      grid-template-areas:
        "info"
        "interests";
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .misc-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
