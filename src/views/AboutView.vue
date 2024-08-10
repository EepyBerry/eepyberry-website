<template>
  <div class="page-container">
    <TitleSection />
    <div class="layout-grid">
      <AboutInfoSection />
      <AboutTechsSection />
      <AboutToolsSection />
      <AboutInterestsSection />
      <div class="avatar-wrapper">
        <img class="avatar" src="/avatar.webp" alt="Avatar" aria-label="avatar">
      </div>
      <!-- <EepyArticle>
        <template v-slot:title><h2>Other interests ?</h2></template>
        <p>Here's a cute little list of stuff I really enjoy outside of programming/drawing:</p>
        <div class="chip-list">
          <EepyChip>📖 SCP Foundation</EepyChip>
          <EepyChip>🪐 Planets & Space</EepyChip>
          <EepyChip>🧩 Board Games</EepyChip>
        </div>
        <p class="mt-l">And of course, games I like/love/am clearly too obsessed with:</p>
        <div class="chip-list">
          <EepyChip>🍓 Celeste</EepyChip>
          <EepyChip>😶 Hollow Knight</EepyChip>
          <EepyChip>💡 OMORI</EepyChip>
          <EepyChip>🎩 A Hat in Time</EepyChip>
          <EepyChip>🔥 ULTRAKILL</EepyChip>
          <EepyChip>💤 Yume Nikki / 2kki</EepyChip>
          <EepyChip>🍸 VA-11 Hall-A</EepyChip>
          <EepyChip>🧩 The Talos Principle 1/2</EepyChip>
          <EepyChip>⚙️ Submachine</EepyChip>
          <EepyChip>💎 GemCraft Series</EepyChip>
        </div>
      </EepyArticle> -->
    </div>
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import AboutInfoSection from '@/components/sections/AboutInfoSection.vue';
import AboutInterestsSection from '@/components/sections/AboutInterestsSection.vue';
import AboutTechsSection from '@/components/sections/AboutTechsSection.vue';
import AboutToolsSection from '@/components/sections/AboutToolsSection.vue';
import TitleSection from '@/components/sections/TitleSection.vue';
import { useHead } from '@unhead/vue';
useHead({ meta: [
  { name: 'description', content: 'Who am I? What do I like to do? Why strawberries? It\'s all in here!' }
]})
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .layout-grid {
    display: grid;
    grid-template-areas:
      "info   info        avatar"
      "tech   tool        interests";
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin: 0 auto;
    gap: 1.5rem 4rem;
    
    #section-about-info {
      grid-area: info;
      align-self: center;
    }
    #section-about-techs {
      grid-area: tech;
      align-self: flex-start;
    }
    #section-about-tools {
      grid-area: tool;
      align-self: flex-start;
    }
    #section-about-interests {
      grid-area: interests;
      align-self: flex-start;
    }
    .avatar-wrapper {
      grid-area: avatar;
      align-self: flex-end;

      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      height: 100%;

      .avatar {
        width: clamp(160px, 33vw, 320px);
        max-width: 320px;
      }
    }
  }
}

.chip-list {
  margin-top: .5rem;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex: 0 1 0;
  //grid-template-columns: 1fr 1fr 1fr;
  gap: .5rem;
}

@media screen and (max-width: 1377px) {
  .page-container {
    .layout-grid {
      grid-template-areas:
        "info   info   avatar"
        "tech   tech   tool"
        "interests   interests   interests";
        grid-template-columns: 1fr 1fr 1.5fr;
      #section-about-techs {
        align-self: flex-start;
      }
      #section-about-tools {
        align-self: flex-start;
      }
    }
  }
}

@media screen and (max-width: 1199px) {
  .page-container {
    .layout-grid {
      grid-template-columns: 1fr 1fr 2fr;
      #section-about-info {
        align-self: center;
      }
      .avatar-wrapper {
        align-items: flex-end;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .page-container {
    .layout-grid {
      grid-template-areas:
        "info      info"
        "tech      avatar"
        "tool      avatar"
        "interests interests";
      grid-template-columns: 1fr auto;
      
      #section-about-techs {
        align-self: flex-start;
      }
      #section-about-tools {
        align-self: flex-start;
      }
      .avatar-wrapper {
        align-items: center;
      }
    }
  }
}

@media screen and (max-width: 895px) {
  .page-container {
    .layout-grid {
      grid-template-areas:
        "info      info"
        "tech      avatar"
        "tool      tool"
        "interests interests";
      grid-template-columns: 1fr auto;
      
      #section-about-techs {
        align-self: center;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .page-container {
    .layout-grid {
      grid-template-areas:
        "info"
        "tech"
        "tool"
        "interests";
      grid-template-columns: 1fr;
      gap: 3rem;
      .avatar-wrapper {
        display: none;
      }
    }
  }
}

</style>