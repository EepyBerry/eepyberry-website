<template>
  <div class="eepy-score-card">
    <span class="score-title"><slot></slot></span>
    <div class="score-value">
      <EepyIcon size="lg">{{ getIconForScore() }}</EepyIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ score: number }>()

function getIconForScore(): string {
  switch(props.score) {
    case 1: return 'school'
    case 2: return 'thumb_up'
    case 3: return 'favorite'
    case 4: return 'heart_plus'
    case 5: return 'local_fire_department'
    default: return 'question_mark'
  }
}

</script>

<style scoped lang="scss">
.eepy-score-card {
  padding: .5rem .75rem;
  
  background-color: var(--eepy-color-card);
  //border: 1px solid var(--eepy-color-secondary);
  //box-shadow: 0 1px 2px rgba(0,0,0,0.5);
  border-radius: .5rem;
  
  display: flex;
  flex-direction: row;
  gap: 4px;

  .score-title {
    flex: 1;
    display: flex;
    align-items: center;
    font-family: Dosis;
    font-size: 1.125rem;
    font-weight: 600;
  }
  .score-value {
    display: flex;
    align-items: center;
    .eepy-icon {
      font-variation-settings: "FILL" 1;
      transform: rotateZ(-5deg);
    }
  }
}
</style>