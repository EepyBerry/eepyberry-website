<template>
  <article class="eepy-article">
    <div class="eepy-article-title"><slot name="title">Title</slot></div>
    <slot>Text</slot>
  </article>
</template>

<style scoped lang="scss">
article.eepy-article {
  border-radius: 8px;
  padding: 1.5rem 0;
  backdrop-filter: blur(4px);
  //background-color: var(--eepy-theme-card);

  .eepy-article-title {
    line-height: 1;
    margin-bottom: 1rem;
  }
}
p {
  text-wrap: wrap;
}
</style>
