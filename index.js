const zakasBtn = document.getElementById("zakasBerish");
const container = document.querySelector(".container");
const ikkinchiEkran = document.querySelector(".ikkinchiEkran");
const SaytBtn = document.getElementById("SaytdanСhiqish");
const hayir = document.querySelector(".hayir");

const malumotBtn = document.querySelector(".malumot");
const lavashxonaXaqida = document.querySelector(".lavashxonaXaqida");
const ortgaQaytishBtn = document.querySelector(".ortgaQaytish");

const ochiqYopiqBtn = document.querySelector(".ochiqYopiq");
const zakasTablo = document.querySelector(".zakasTablo");
const zakazMenyuBtn = document.getElementById("zakazMenyu");

const birinchiEkranBtn = document.querySelector(".birinchiEkran");
const kurushka = document.querySelector(".kurushka")
const dostapkaBtn = document.querySelector(".dostapka")



birinchiEkranBtn.addEventListener("click", () => {
    container.classList.add("hidden")
    kurushka.classList.remove("hidden")
})
dostapkaBtn.addEventListener("click", () => {
    container.classList.remove("hidden")
    kurushka.classList.add("hidden")
})


zakasBtn.addEventListener("click", () => {
    container.classList.add("hidden");
    ikkinchiEkran.classList.remove("hidden")
});
SaytBtn.addEventListener("click", () => {
    container.classList.add("hidden");
    hayir.classList.remove("hidden");
});


malumotBtn.addEventListener("click", () => {
    container.classList.add("hidden");
    lavashxonaXaqida.classList.remove("hidden");
});
ortgaQaytishBtn.addEventListener("click", () => {
    container.classList.remove("hidden");
    lavashxonaXaqida.classList.add("hidden");
    console.log("ssss")
});


ochiqYopiqBtn.addEventListener("click", () => {
    zakasTablo.classList.remove("hidden")
})
zakazMenyuBtn.addEventListener("click", () => {
    zakasTablo.classList.add("hidden")
});


const push = document.querySelectorAll(".push");
const groupBtn = document.querySelector(".group");

groupBtn.addEventListener("click", (event) => {
    event.groupBtn.push.push();
    console.log("sdfnjskadjf")
})