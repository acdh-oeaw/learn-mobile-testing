<template>
  <div id="app">
    <header>
      <h1>Mobile Testing Demo</h1>
    </header>
    <main>
      <div>
        <h2>1. Cross-Fade - Not supported in Firefox</h2>
        <div class="crossfade"></div>
      </div>
      

      <div>
        <h2>2. ::selection - Not supported in Safari</h2>
        <div class="selection">
          This text has special styles when you highlight it.
        </div>
      </div>

      <div>
        <h2>3. canvas background - Only supported in Safari</h2>
        <div class="canvas-bg">
          
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  if (!(document.getCSSCanvasContext))
    return
  let ctx = document.getCSSCanvasContext("2d", "squares", 200, 200);

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (10, 10, 55, 50);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect (30, 30, 55, 50);
  
  }
};
</script>

<style scoped>
#app {
  font-family: ui-sans-serif, 'Times New Roman', Times, serif;
}
header {
  background-color: #4c6baf;
  color: white;
  text-align: center;
  padding: 1rem;
}

main {
  padding: 1rem;
}
/* Does not work on Firefox */
.crossfade {
  width: 300px;
  height: 300px;
  background-image: -webkit-cross-fade(url("https://live.mdnplay.dev/en-US/docs/Web/CSS/cross-fade/br.png"), url("https://live.mdnplay.dev/en-US/docs/Web/CSS/cross-fade/tr.png"), 15%);
  background-image: cross-fade(url("https://live.mdnplay.dev/en-US/docs/Web/CSS/cross-fade/br.png"), url("https://live.mdnplay.dev/en-US/docs/Web/CSS/cross-fade/tr.png"), 15%);
}

/* Make selected text gold on a red background
   Works in Chrome but not in Safari */
.selection::selection {
  color: gold;
  background-color: black;
}

.filter img{
  filter: hue-rotate(90deg);
}

.canvas-bg {
  background: -webkit-canvas(squares);
    width: 300px;
    height: 300px;
    border: 2px solid black;
}

</style>
