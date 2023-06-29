let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color: #151015;"> Desarrollo sitios web con creatividad e innovación.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
