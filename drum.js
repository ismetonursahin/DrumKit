let keys = window.document;

keys.addEventListener("keydown", (tus) => {
  switch (tus.key) {
    case "a":
      let audioA = new Audio("/sound/clap.wav");
      audioA.play();
      let clap = document.getElementById("clap");
      clap.classList.add("playing");
      keys.addEventListener("keyup", (e) => {
        clap.classList.remove("playing");
      });
      break;

    case "s":
      let audioS = new Audio("/sound/hitat.wav");
      audioS.play();
      let hitat = document.getElementById("hitat");
      hitat.classList.add("playing");
      keys.addEventListener("keyup", (e) => {
        hitat.classList.remove("playing");
      });
      break;

    case "d":
      let audioD = new Audio("/sound/kick.wav");
      audioD.play();
      let kick = document.getElementById("kick");
      kick.classList.add("playing");
      keys.addEventListener("keyup", (e) => {
        kick.classList.remove("playing");
      });
      break;

    case "f":
      let audioF = new Audio("/sound/openhat.wav");
      audioF.play();
      let openhat = document.getElementById("openhat");
      openhat.classList.add("playing");
      keys.addEventListener("keyup", (e) => {
        openhat.classList.remove("playing");
      });
      break;

    case "g":
      let audioG = new Audio("/sound/boom.wav");
      audioG.play();
      let boom = document.getElementById("boom");
      boom.classList.add("playing");
      keys.addEventListener("keyup", (e) => {
        boom.classList.remove("playing");
      });
      break;

    case "h":
      let audioH = new Audio("/sound/ride.wav");
      audioH.play();
      let ride = document.getElementById("ride");
      ride.classList.add("playing");
      keys.addEventListener("keyup", (e) => {
        ride.classList.remove("playing");
      });
      break;
    case "j":
      let audioJ = new Audio("/sound/snare.wav");
      audioJ.play();
      let snare = document.getElementById("snare");
      snare.classList.add("playing");
      keys.addEventListener("keyup", (e) => {
        snare.classList.remove("playing");
      });
      break;
    case "k":
      let audioK = new Audio("/sound/tom.wav");
      audioK.play();
      let tom = document.getElementById("tom");
      tom.classList.add("playing");
      keys.addEventListener("keyup", (e) => {
        tom.classList.remove("playing");
      });
      break;
    case "l":
      let audioL = new Audio("/sound/tink.wav");
      audioL.play();
      let tink = document.getElementById("tink");
      tink.classList.add("playing");
      keys.addEventListener("keyup", (e) => {
        tink.classList.remove("playing");
      });
      break;
  }
});
