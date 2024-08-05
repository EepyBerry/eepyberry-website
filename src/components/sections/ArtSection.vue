<template>
    <section id="section-art">
      <h2 class="section-title">art corner!</h2>
      <div class="section-content">
        
      </div>
    </section>
  </template>
  
  <!------------------------------------------------------------>
  <style lang="scss">
  #section-art {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    .section-title {
      align-self: flex-start;
      .eepy-divider { flex: 1 }
    }
    .section-content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(22rem, auto));
      gap: 2rem;
      & .eepy-card {
        width: 100%;
        height: 14rem;
      }
    }
  }
  
  @media screen and (max-width: 1199px) {
    #section-art {
    }
  }
  
  @media screen and (max-width: 767px) {
    #section-art {
      margin-top: 3rem;
      .section-title {
        align-self: center;
      }
      .section-content {
        gap: 1rem;
      }
    }
  }
  </style>