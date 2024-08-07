<template>
  <section id="section-art">
    <h2 class="section-title">art corner!</h2>
    <div class="section-content">
      <ul class="gallery">
        <li class="image-wrapper" style="width: 36rem;">
          <img src="/thumbnails/2024-08-03_1000-LC.jpg">
        </li>
        <li class="image-wrapper" style="width: 20rem;">
          <img src="/thumbnails/2023-01-09_Heart_of_the_Mountain.jpg">
        </li>
        <li class="image-wrapper" style="width: 20rem;">
          <img src="/thumbnails/2022-12-11_Niko_Holding_the_Sun.jpg">
        </li>
        <li class="image-wrapper" style="width: 20rem;">
          <img src="/thumbnails/2022-02-12_Strange_Reflection.jpg">
        </li>
        <li class="image-wrapper" style="width: 20rem;">
          <img src="/thumbnails/2024-08-03_1000-LC.jpg">
        </li>
      </ul>
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
  }
  .section-content {
    display: flex;
    flex-direction: column;
  }
}

.gallery {
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .image-wrapper {
    flex-grow: 1;
    flex-shrink: 1;
    
    border-radius: 4px;
    max-width: 100%;
    height: 24rem;
    overflow: hidden;
    
    display: flex;

    img {
      flex-grow: 1;
      flex-shrink: 1;
      object-position: center;
      object-fit: cover;
      max-width: 100%;
    }
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