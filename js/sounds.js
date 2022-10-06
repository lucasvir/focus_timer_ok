import { btnTree, btnCloud, btnMarket, btnFire } from "./elements.js";

export default function Sounds() {
    const treeAudio = new Audio("./assets/audio/Floresta.wav");

    const cloudAudio = new Audio("./assets/audio/Chuva.wav");

    const marketAudio = new Audio("./assets/audio/Cafeteria.wav");

    const fireAudio = new Audio("./assets/audio/Lareira.wav");

    function btnColorChange(btn, fill) {
        btn.classList.toggle("bg-check");
        fill.classList.toggle("color-icon-change");
    }

    function playTree() {
        if (treeAudio.paused) {
            treeAudio.play();
        } else {
            treeAudio.pause();
        }
    }

    function playCloud() {
        if (cloudAudio.paused) {
            cloudAudio.play();
        } else {
            cloudAudio.pause();
        }
    }

    function playMarket() {
        if (marketAudio.paused) {
            marketAudio.play();
        } else {
            marketAudio.pause();
        }
    }

    function playFire() {
        if (fireAudio.paused) {
            fireAudio.play();
        } else {
            fireAudio.pause();
        }
    }

    return {
        btnColorChange,
        playTree,
        playCloud,
        playMarket,
        playFire,
    };
}
