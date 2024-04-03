<template>
    <section id="section-about">
        <div class="about-text">
            <h1>About me !</h1>
            <article>
                <p>Hello, I'm EepyBerry! I'm a software engineer at work, and a code goblin at home >:3</p>
                <!-- <p>Oh, and I'm trans, I guess :p</p> -->
            </article>
            <EepyDivider w="4rem" />
            <article>
                <h2>Techs n' stuff</h2>
                <p>Have a grid of my fav techs! Also includes stuff I'm learning right now:</p>
                <div class="grid-techs">
                    <EepyChip>☕ Java</EepyChip>
                    <EepyChip>🌐 Node.js</EepyChip>
                    <EepyChip>🔎 VueJS</EepyChip>
                    <EepyChip>📐 Angular</EepyChip>
                    <EepyChip>🐳 Docker</EepyChip>
                    <EepyChip>🚢 Kubernetes</EepyChip>
                    <EepyChip>☁️ AWS</EepyChip>
                </div>
            </article>
            <EepyDivider w="4rem" />
            <article>
                <h2>Other interests ?</h2>
                <p>Here's a cute little list of stuff I really enjoy outside of programming:</p>
                <div class="grid-interests">
                    <EepyChip>🍓 Celeste</EepyChip>
                    <EepyChip>🎩 A Hat in Time</EepyChip>
                    <EepyChip>💡 OMORI</EepyChip>
                    <EepyChip>🔥 ULTRAKILL</EepyChip>
                </div>
                <div class="grid-interests">
                    <EepyChip>📖 SCP Foundation</EepyChip>
                    <EepyChip>🥞 Crèpes & Waffles</EepyChip>
                </div>
            </article>
        </div>
        <img class="about-avatar" src="/avatar.png">
    </section>
</template>

<style scoped lang="scss">
#section-about {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    margin: 0 auto;
    gap: 0 3rem;

    .about-text {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .about-avatar {
        align-self: flex-start;
        width: min(80vw, 360px);
        filter: brightness(150%);
    }
}
.grid-interests, .grid-techs {
    margin-top: .5rem;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    //grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}
</style>