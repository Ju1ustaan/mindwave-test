<template>
    <header>
        <div class="header_wrapper">
        <div class="header-content">
            <a href="https://mindwave.kz/" target="_blank" class="logo">
                <img src="https://mindwave.kz/img/logo/new-logo.svg" class="Vite mindwave " alt="mindwave logo" />
            </a>
            <p class="header-title">MindWave</p>
        </div>
        <nav class="header-content">
            <a href="#about-me" class="header-link">AboutMe</a>
            <a href="#work" class="header-link">Work</a>
            <a href="#technology" class="header-link">Technology</a>
        </nav>
    </div>
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
header {
    background: #242424;
    position: sticky;
    top: 0px;
    z-index: 100;
}
.header_wrapper {
    background: #a28ada;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 50px;
    gap: 10px;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo {
    height: 2em;
}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.header-title {
    color: #000;
    font-size: 24px;
    font-weight: 700;
}
.header-link {
    cursor: pointer;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    transition: 300ms ease-in;
}
.header-link:hover {
    color: #646cff;
    border-bottom: 2px #646cff solid;
}
</style>