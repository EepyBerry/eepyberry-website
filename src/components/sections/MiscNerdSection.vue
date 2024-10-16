<template>
  <section id="section-nerd">
    <div class="section-title" role="heading" aria-label="Nerd stuff">
      <iconify-icon icon="tabler:mood-nerd" width="2.5rem" aria-hidden="true" />
    </div>
    <div class="section-content">
      <a
        class="button-link"
        href="https://www.nerdtests.com/ft_nq.php"
        target="_blank"
        rel="external nofollow noopener"
      >
        <img
          src="https://www.nerdtests.com/images/ft/nq/3da57b0395.gif"
          alt="I am nerdier than 93% of all people. Are you a nerd? Click here to take the Nerd Test, get nerdy images and jokes, and write on the nerd forum!"
        />
      </a>
      <a
        class="button-link custom-88x31 e2v2"
        href="https://alyx.sh/posts/hrt-geocities-buttons/"
        target="_blank"
        rel="external nofollow noopener"
      >
        <img class="e2v2" src="/misc/e2v2.gif" alt="Powered by estrogen" />
        <span class="info">based on gif from Alyx Wijers</span>
      </a>
      <a
        class="button-link custom-88x31 scpf"
        href="https://scp-wiki.wikidot.com"
        target="_blank"
        rel="external nofollow noopener"
      >
        <div class="inner">
          <iconify-icon icon="simple-icons:scpfoundation" height="4rem" />
          <span>SCP<br />Foundation</span>
        </div>
        <span class="info">unaffiliated, i just love the project!</span>
      </a>
      <img src="/misc/intersexprogressflag.png" />
      <img src="/misc/evilcatface_small.webp" />
    </div>
    <div class="section-wip">
      <p>(this page is random, i know, but i wanted a fun space for interesting links :3)</p>
      <p>(more stuff to be added later... probably)</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
#section-nerd {
  .section-content {
    padding: 1.5rem 0;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    & > a,
    & > img {
      height: 105px;
      border: 1px solid var(--eepy-theme-accent);
      border-radius: 6px;
      overflow: hidden;
    }

    .custom-88x31 {
      position: relative;
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

      & > span.info {
        position: absolute;
        bottom: 4px;
        left: 4px;
        right: 4px;
        text-align: center;
        text-shadow: none;
        font-size: 12px;
        font-family: Dosis;
        font-weight: 500;
      }
    }
    .custom-88x31.e2v2 {
      & > span.info {
        right: 4px;
        color: #000;
      }
    }
    .custom-88x31.scpf {
      background: linear-gradient(to bottom, #000 0%, #823f3f 100%);
      text-shadow: none;
      color: #fff;

      .inner {
        padding: 12px;

        iconify-icon {
          filter: none;
        }
      }
      & > span.info {
        color: #fff;
      }
    }
  }
  .section-wip {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Dosis;
    font-weight: 500;
    font-size: 1.125rem;
    color: var(--eepy-theme-accent);
  }
}
</style>
