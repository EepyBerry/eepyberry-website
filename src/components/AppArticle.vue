<template>
  <article class="eepy-article">
      <div class="eepy-article-title"><slot name="title">Title</slot></div>
      <slot>Text</slot>
  </article>
</template>

<style scoped lang="scss">
article.eepy-article {
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(4px);
  background-color: var(--eepy-color-card);

  .eepy-article-title {
    line-height: 1;
  }
}
p { text-wrap: wrap; }
</style>