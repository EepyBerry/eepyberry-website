<template>
  <section id="section-nerd">
    <div class="section-title" role="heading" aria-label="Drawings">
      <hr class="title-divider">
      <span class="title-icon">
        <span class="title-bracket" aria-hidden="true">[</span>
        <iconify-icon icon="mingcute:star-line" width="2.5rem" aria-hidden="true" />
        <span class="title-bracket" aria-hidden="true">]</span>
      </span>
      <hr class="title-divider">
    </div>
    <div class="section-content">
      <a class="button-link" href="http://www.nerdtests.com/ft_nq.php">
        <img src="http://www.nerdtests.com/images/ft/nq/3da57b0395.gif" alt="I am nerdier than 93% of all people. Are you a nerd? Click here to take the Nerd Test, get nerdy images and jokes, and write on the nerd forum!">
      </a>
      <img src="/e2v2-352x124.gif">
      <a class="button-link custom-88x31 scpf" href="https://scp-wiki.wikidot.com" target="_blank" rel="external nofollow noopener">
        <div class="inner">
          <iconify-icon icon="simple-icons:scpfoundation" height="4rem" />
          <span>
            SCP<br>Foundation
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
#section-nerd {
  .section-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    img {
      height: 105px;
      border: 1px solid var(--eepy-theme-accent);
      border-radius: 6px;
    }

    .custom-88x31 {
      background: #c7c9c6;
      border: 1px solid var(--eepy-theme-accent);
      border-radius: 6px;

      color: #000;
      font-size: 32px;
      font-weight: bold;
      line-height: 1;
      text-shadow: 2px 2px 1px #585a58;

      .inner {
        padding: 12px;
        border-top: 6px solid white;
        border-right: 6px solid #464946;
        border-bottom: 6px solid #373936;
        border-left: 6px solid #d1d8d0;
        display: flex;
        align-items: center;
        gap: 12px;

        span {
          transform: translateY(-4px);
        }
        iconify-icon {
          filter: drop-shadow(2px 2px 1px #585a58);
        }
      }
    }
    .custom-88x31.scpf {
      background: linear-gradient(to bottom, #000 0%, #823f3f 100%);
      text-shadow: none;
      color: #fff;
      
      .inner {
        padding: 12px;
        border-top: 6px solid #301616;
        border-right: 6px solid #000;
        border-bottom: 6px solid #000;
        border-left: 6px solid #301616;
        
        iconify-icon {
          filter: none;
        }
      }
    }
  }
}
</style>