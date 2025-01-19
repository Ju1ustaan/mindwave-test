<template>
    <div>
        <Title id="about-me" :title="'AboutMe'"></Title>
        <div class="aboutme">
            <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
            </div>
            <div>
                <p class="aboutme_const">const <span>frontendDeveloper</span> <span>=</span> <span>{{'{'}}</span></p>
            <div class="aboutme_body">
                <p class="aboutme_key">name: <span class="aboutme_string">'Julustaan'</span> ,</p>
                <p class="aboutme_key">lastName: <span class="aboutme_string">'Luginov'</span> ,</p>
                <p class="aboutme_key">age: <span class="aboutme_number">31</span> ,</p>
                <p class="aboutme_key">gender: <span class="aboutme_string">'male'</span> ,</p>
                <p class="aboutme_key">programmingLang: <span class="aboutme_string">'JavaScript'</span> ,</p>
                <p class="aboutme_key">phone: <span class="aboutme_string">'+7 (705) 306 0465'</span> ,</p>
                <p class="aboutme_key">email: <span class="aboutme_string">'luijulus@gmail.com'</span> ,</p>
                <p class="aboutme_key">perseverance: <span class="aboutme_boolean">true</span> ,</p>
                <p class="aboutme_key">creativity: <span class="aboutme_boolean">true</span> ,</p>
            </div>
            <p class="aboutme_curlybrake">{{ '}' }}</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Title } from '../title';
</script>
<style scoped>
.aboutme {
    display: flex;
    gap: 50px;
    background: #000;
    font-size: 32px;
    font-weight: 700;
    padding: 20px;
}
.aboutme div:first-child {
    text-align: end;
    color: gray;
}
.aboutme div:last-child {
    border-left: 1px solid gray;
}
.aboutme_const, .aboutme_boolean {
    color: rgb(1, 57, 109);
}
.aboutme_const span{
    color: rgb(255, 255, 255);
}
.aboutme_const span:first-child{
    color: rgb(1, 84, 161);
}
.aboutme_const span:last-child, .aboutme_curlybrake{
    color: rgb(221, 133, 0);
}
.aboutme_key {
    color: rgb(48, 145, 236);
}
.aboutme_string {
    color: rgb(136, 69, 69);
}
.aboutme_number {
    color: rgb(153, 192, 102);
}
.aboutme_body {
    padding: 0 100px;
}
</style>