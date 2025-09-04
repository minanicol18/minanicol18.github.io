$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1300,100,50,2000,"black");
createPlatform(150,700,600,700, "blue");
createPlatform(700,600,50,700, "green");
createPlatform(80,570,500,20, "orange");
createPlatform(150,450,1200,20,"pink");
createPlatform(100,320,1040,20,"purple");
createPlatform(600,200,300,20, "blue");
createPlatform(600,60,48,140, "black");
createPlatform(50,100,20,2000,"black");
createPlatform(800,600,20,20);



    // TODO 3 - Create Collectables
createCollectable("steve", 200,400,0.5,0.7);
createCollectable("steve", 600,400,0.5,0.7);
createCollectable("diamond",400,550,0.5,0.7);
createCollectable("diamond",600,600,0.5,0.7);
createCollectable("diamond",500,300,0.5,0.7);
createCollectable("steve",300,200,0.5,0.7);


    
    // TODO 4 - Create Cannons
createCannon("top",400,1000);
createCannon("right",500,1300);
createCannon("bottom", 200,2500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
