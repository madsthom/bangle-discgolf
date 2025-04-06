var  on = false;
// The layout, referencing the custom renderer
var Layout = require("Layout");
var layout = new Layout( {
  type:"v", c: [
    {type:"v", c: [
      {type: "txt", font:"6x8:2", label:"Choose Mode"},
      {type:"btn", label:"1 Player", cb: l=>{ console.log("1 player"); }},
      {type:"btn", label:"2 Player", cb: l=>{ console.log("2 players"); twoPlayerMode();}},
    ]}
  ]
});

g.clear();
layout.render(); // first call to layout.render() works out positions and draws


function twoPlayerMode(){
  g.clear();
  var layout = new Layout( {
    type:"v", c: [
      {type:"v", c: [
        {type: "txt", font:"6x8:2", label:"Choose course"},
        {type:"btn", label:"Aalborg", cb: l=>{ startCourse("Aalborg"); }},
        {type:"btn", label:"Ryhaven", cb: l=>{ console.log("Ryhaven"); }},
      ]}
    ]
  });
  layout.render();
}

function startCourse(course) {
  switch(course) {
    case "Aalborg":
      console.log("starting Aalborg Course");
      startAalborgCourse(2);
  }
}

function holeLabel(holeNumber) {
  return "Hole " + holeNumber;
}

function startAalborgCourse(numberOfPlayers) {
  const playerStats = {p1: 0, p2: 0};
  const aalborgCourse = [
    { hole: 1, par: 3 },
    { hole: 2, par: 3 },
    { hole: 3, par: 3 },
    { hole: 4, par: 3 },
    { hole: 5, par: 4 },
    { hole: 6, par: 3 },
    { hole: 7, par: 3 },
    { hole: 8, par: 4 },
    { hole: 9, par: 3 },
    { hole: 10, par: 3 },
    { hole: 11, par: 3 },
    { hole: 12, par: 3 },
    { hole: 13, par: 3 },
    { hole: 14, par: 4 },
    { hole: 15, par: 3 },
    { hole: 16, par: 3 },
    { hole: 17, par: 4 },
    { hole: 18, par: 5 },
    { hole: 19, par: 3 },
    { hole: 20, par: 3 }
  ];
  var i = 0;
   g.clear();
  var layout = new Layout( {
    type:"v", c: [
      {
        type: "v", c: [
          {type: "txt", font:"6x8:1", label: "p1: -1", id: "p1"},
          {type: "txt", font:"6x8:1", label: "p2: 3", id: "p2"}
        ]
      },
      {type:"h", c: [
        {type: "txt", font:"6x8:1", label: holeLabel(aalborgCourse[0].hole), id: "hole"},
        {type: "txt", font:"6x8:1", label: " par " + aalborgCourse[0].par, id: "par"}
      ]},
    ]
  });
  layout.render();
  
  Bangle.on('swipe', function(directionLR, directionUD) {
    console.log(directionLR, directionUD);
    if (directionLR == -1) {
      i++;
      holeScreen(layout,  aalborgCourse[i], playerStats);
    }

    if (directionLR == 1) {
      i--;
      holeScreen(layout, aalborgCourse[i], playerStats);
    }
  });
}


function holeScreen(layout, holeData, playerStats) {
  g.clear();
  console.log(holeData);
  layout.hole.label = holeLabel(holeData.hole);
  layout.par.label = " par " + holeData.par;
  console.log(layout.par.label);
  layout.render();
}

