<template>
  <div id="canvas">
    <!-- canvas, centered on screen  -->

  </div>
</template>
<script type="text/javascript" src="../public/earth/clay.js"></script>

<script>
require("@/../public/earth/clay")

export default {
  name: "earth",
  mounted() {
    function Earth() {
      // eslint-disable-next-line no-undef
      var stage = new Clay.Stage(800, 600);
      var world = stage.getWorld();
      var camera = stage.getCamera();

      camera.set(0, 0, 0);
      camera.setResolution(800, 600);
      // eslint-disable-next-line no-undef
      camera.setTarget(new Clay.Vector(-100, 0, 100));

      window.onresize = function () {
        stage.resizeTo(
            window.innerWidth || document.documentElement.clientWidth,
            window.innerHeight || document.documentElement.clientHeight
        );
      };

      window.onresize();
      // eslint-disable-next-line no-undef
      Clay.Collada.load('static/earth.xml', function (scene) {
        scene.init(stage);
        // eslint-disable-next-line no-undef
        var earth = new Clay.Texture('static/earthmap1k.jpg', stage);

        var clouds = new Image();
        clouds.src = 'static/earthclouds1k.png';

        var dark = new Image();
        dark.src = 'static/darkside.png';

        var waiting = setInterval(function () {
          if (earth.complete && clouds.complete && dark.complete) {
            clearInterval(waiting);
            play();
          }
        }, 1000);

        function play() {
          var shape = world.getShapes()[0];
          shape.setMaterial(earth);

          // eslint-disable-next-line no-unused-vars
          var x, y, z, t = Math.PI / 4, r = 0, tick = 0.01, radius = 200;
          var ttx = earth.canvas.getContext('2d');
          var base = earth.image;
          var wind = 0;

          stage.addEvent('enterframe', function () {


            var pos = (++wind) % 1000;
            ttx.drawImage(base, pos, 0);
            ttx.drawImage(base, pos - 1000, 0);
            ttx.drawImage(clouds, pos, 0);
            ttx.drawImage(clouds, pos - 1000, 0);
            // 阴影
            // ttx.drawImage(dark, 0, 0);

            t += tick;
            x = -100 + Math.sin(t) * radius;
            z = 100 + Math.cos(t) * radius;
            y = Math.cos(t / 3) * 50
            camera.set(0, 0, 0);
          });

          stage.run();
        }
      });
    }

    window.addEventListener('load', function () {
      new Earth();
    }, false);
  }
}
</script>

<style scoped>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  background: black;
}

.canvas3D {
  background: black;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
