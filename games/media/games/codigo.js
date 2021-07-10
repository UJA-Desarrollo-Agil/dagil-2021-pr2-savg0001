// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>El comienzo de un nuevo día</h1>\
        <img src='./media/img/sol.png' class='float_ce' width='500' height='500'>\
        <p>El despertador...¡NO HA SONADO! Por fin estoy de vacaciones y se acabó eso de madrugar.</p>\
        <p>Pongo mis pies con firmeza sobre el suelo y cojo el móvil como de costumbre, me da por mirar la hora y... ¿CÓMO? </p>\
        <p> Son las 9 de la mañana!!! Es el primer día que podía hacer desaparecer mis ojeras después de meses de madrugones y ¡¡mi cuerpo no ha querido hacerlo!!\
        Será que se ha habituado a eso de levantarme temprano pero ¿Qué hago ahora?</p>\
        <p><a href='dormir'>¿Vuelvo a la cama</a> o <a href='desaunar'>bajo a desayunar?</a>.</p>"
    ),

    /*Elijo volver a la cama*/
    dormir: new undum.SimpleSituation(
        "<img src='./media/img/desayuno.png' class='float_right' width='250' height='250'>\
        <p>Vuelvo a la cama pero tras un rato intentando dormir me doy cuenta de que es imposible. Que injusta es la vida, los días de clase me levantaba cual zombie que desea volver a su tumba y hoy, que por fin puedo hacerlo mi cuerpo me dice que no es posible.</p>\
        <p>Sin embargo, mi apetito me llama, <a href='desaunar'>hora de bajar a desayunar</a></p>",
        {
            heading: "Vuelta al sobre",
        }
    ),

    /*Elijo bajar a desayunar*/
    desaunar: new undum.SimpleSituation(
        "<img src='./media/img/frigo.png' class='float_right' width='250' height='250'>\
        <p>Entro en la cocina sin saber muy bien que desayunar porque aunque me imagino un frigorífico lleno de comida, me temo lo peor y al abrirlo lo confirmo.</p>\
        <p>Solo hay unas latas de cerveza y un plato de macarrones que sobraron de ayer aunque es extraño que sobrasen con lo que me gustan...</p>\
        <p><a href='macarrones'>Bah, desayuno los macarrones y que pase lo que tenga que pasar</a> o mejor <a href='comprar'>voy ir a comprar algo que pegue más a estas horas</a>.</p>",
        {
            heading: "Hora de abrir el frigo...",
        }
    ),

    /*Elijo desayunar los macarrones*/
    macarrones: new undum.SimpleSituation(
        "<img src='./media/img/azucar.png' class='float_right' width='250' height='250'>\
        <p>Ahora recuerdo por qué me sobraron tantos macarrones, agotado por el estudio del último examen confundí la sal con el azúcar y no son para nada apetecibles...¡Vaya desastre!</p>\
         <p>Supongo que una retirada a tiempo siempre es una victoria así que ahora sí que sí, <a href='comprar'>AL MERCADONAAAAA</a>.</p>",
         {
             heading: "¿Cómo puede ser que dos cosas tan parecidas sepan tan diferente?",
         }

    ),

    /*Elijo ir a comprar*/
    comprar: new undum.SimpleSituation(
        "<img src='./media/img/churreria.png' class='float_right' width='350' height='250'>\
        <p>Ya en la calle, cambiado y aseado afronto mi intrepidante camino hacia el Mercadona que está a 10 minutos de casa, pero de repente algo acapara toda mi atención. ¡La churrería del barrio está abierta!</p>\
        <p>Como durante la semana toca ir virtualmente a clase y los findes son para descansar pensaba que eso de la churrería abierta era un mito. Esto puede que cambie mis planes, <a href='sichurros'>¿Decido hacer una paradita para comprar churros</a> o <a href='nochurros'>continúo mi aburrido camino sin churros al mercadona?</a>.</p>",
        {
            heading: "Se ha roto un mito",
        }
    ),

    /*Elijo no comprar churros*/ 
    nochurros: new undum.SimpleSituation(
        "<img src='./media/img/mercadona.png' class='float_right' width='250' height='250'>\
        <p>Mejor no compro churros, tengo que mantener la línea porque ¡ya es verano! Así que sigo mi camino hacia el mercadona pero antes veo algo raro en la calle.</p>\
        <p><a href='detalladamentecalle'>Mirar detalladamente que pasa</a>.</p>",
        {
            heading: "No me apetecen churros",
        }

    ),

    /*Mirar detalladamente calle*/
    detalladamentecalle: new undum.SimpleSituation(
        "<p>No veo demasiado bien debido al cansancion por el estudio, simplemete era una hoja bailando por el viento.</p>\
        <p><a href='irmercadonasinchurros'>Dejo de mirar y me centro en seguir mi camino hacia el mercadona</a></p>",
        {
            heading: "Tras mirar detalladamente ...",
        }
    ),
    
    /*Elijo comprar churros y voy al Mercadona*/
    sichurros: new undum.SimpleSituation(
        "<img src='./media/img/churros.png' class='float_right' width='250' height='250'>\
        <p>Me los merezco, y además ya es demasiado tarde como para empezar la operación bikini, allá que voy.</p>\
        <p>Cuando llego algo extraño oigo</p>\
        <p><a href='detalladamentechurros'>Escuchar detalladamente la conversación</a>.</p>",
        {
            heading: "¡A por esos ricos churros!",
        }
    ),

  /*Mirar detalladamente churreria*/
  detalladamentechurros: new undum.SimpleSituation(
       "<p>Creo que tengo el oido algo tocado también debido al cansancio del estudio, simplemente era una anciana pidiendo la vez.</p>\
        <p><a href='seguir'>Dejo de escuchar y me centro en comprar</a></p>",
       {
            heading: "Tras escuchar detalladamente ...",
       }
  ),

  /*Dejar de escuchar detalladamente*/
  seguir: new undum.SimpleSituation(
       "<p>Con la boca hecha agua <a href='eleccion_objetou'>el churrero me da a elegir entre estos.</a>",
       {
           heading: "¡A comprar!"
       }
  ),

  continuarhistoria1: new undum.SimpleSituation(
      "<p>Ya con los churros, vuelvo a dudar, no se si <a href='ircasa'>volver a casa</a> o <a href='irmercadonaconchurros'>ya que estoy aquí, voy al Mercadona de una vez</a>.</p>",
      {
          heading: "¿Y ahora qué?"
      }
  ),

  /*Elijo volver a casa sin ir al mercadona*/
  ircasa: new undum.SimpleSituation(
    "<img src='./media/img/cerrado.png' class='float_right' width='250' height='250'>\
      <p>Vuelvo a casa mientras desayuno tranquilamente, y me doy cuenta de que todos los escaparates de las tiendas del barrio están cerrados, lo cual me resulta muy extraño</p>\
      <p>Saco mi móvil del bolsillo para buscar en internet que pasa cuando me da por mirar la fecha...¡Es domingo! Menos mal que no decidí ir al Mercadona porque estaría cerrado</p>\
      <p>Así que prosigo mi camino aliviado por no haber hecho unos metros inútiles hasta que llego a casa.</p>",
      {
          heading: "Ya no se ni en qué día vivo"
      }

  ),

  /*Elijo ir al mercadona, comprar churros y volver a casa*/
  irmercadonasinchurros: new undum.SimpleSituation(
    "<img src='./media/img/cerrado.png' class='float_right' width='250' height='250'>\
    <p>Cuando llego al Mercadona me quedo asombrado, ¡Está cerrado! Que extraño me parece, decido sacar mi móvil para buscar en internet que ha pasado cuando me da por mirar la fecha.</p>\
    <p>¡Hoy es domingo! Que torpe soy, será también cosa de las horas de estudio...Pues nada, toca volver a casa pero no me rendiré en mi lucha por desayunar algo rico. Ahora sí, toca <a href='churrosfin'>comprar esos churros</a>.</p>",
    {
        heading: "Adiós a la operación bikini"
    }
  ),

  churrosfin: new undum.SimpleSituation(
    "<img src='./media/img/churros.png' class='float_right' width='250' height='250'>\
      <p>LLego a la churrería rápidamente porque mi estómago no para de rugir y con la boca hecha agua <a href='eleccion_objeto2'>el churrero me da a elegir entre estos.</a></p>",
  ),

  continuarhistoria2: new undum.SimpleSituation(
    "<p>Así que prosigo mi camino aliviado por haber comido algo hasta que llego a casa.</p>",
    {
        heading: "Tanto esfuerzo ha tenido su recompensa...."
    }
  ),

  /*Elijo ir al mercadona y volver a casa*/
  irmercadonaconchurros: new undum.SimpleSituation(
    "<img src='./media/img/cerrado.png' class='float_right' width='250' height='250'>\
    <p>Cuando llego al Mercadona me quedo asombrado, ¡Está cerrado! Que extraño me parece, decido sacar mi móvil para buscar en internet que ha pasado cuando me da por mirar la fecha.</p>\
    <p>¡Hoy es domingo! Que torpe soy, será también cosa de las horas de estudio...Pues nada, toca volver a casa pero por lo menos he conseguido algo rico de desayuno, ya pensaré en que como...</p>\
    <p>Así que prosigo mi camino aliviado por haber comido algo hasta que llego a casa.</p>",  
    {
        heading: "Un paseo en vano"
    }
  ),


//Menu elecciones
// Churros normales
opcion1: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());
      system.animateQuality(
        "churroNormal",
        character.qualities.churroNormal + 1
      );
      if (character.qualities.churroNormal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#compro_churronormal").html());
    },
    tags: ["eleccion_objetou"],
    optionText: "Churros normales",
    displayOrder: 1,
  }),

// Churros normales rellenos de chocolate
opcion2: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());
      system.animateQuality(
        "churroNormalChocolate",
        character.qualities.churroNormalChocolate + 1
      );
      if (character.qualities.churroNormalChocolate <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#compro_churronormalchocolate").html());
    },
    tags: ["eleccion_objetou"],
    optionText: "Churros normales con chocolate",
    displayOrder: 1,
  }),

  // Churros de lazo normales
  opcion3: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());
      system.animateQuality(
        "churroLazoNormal",
        character.qualities.churroLazoNormal + 1
      );
      if (character.qualities.churroLazoNormal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#compro_lazonormal").html());
    },
    tags: ["eleccion_objetou"],
    optionText: "Churros de lazo normales",
    displayOrder: 1,
  }),

// Churro de lazo relleno de chocolate
opcion4: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations1").html());
      system.animateQuality(
        "churroLazoChocolate",
        character.qualities.churroLazoChocolate + 1
      );
      if (character.qualities.churroLazoChocolate <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#compro_lazochocolate").html());
    },
    tags: ["eleccion_objetou"],
    optionText: "Churros de lazo con chocolate",
    displayOrder: 1,
  }),

  // Churros normales
opcion5: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality(
        "churroNormal",
        character.qualities.churroNormal + 1
      );
      if (character.qualities.churroNormal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#compro_churronormal").html());
    },
    tags: ["eleccion_objeto2"],
    optionText: "Churros normales",
    displayOrder: 1,
  }),

// Churros normales rellenos de chocolate
opcion6: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality(
        "churroNormalChocolate",
        character.qualities.churroNormalChocolate + 1
      );
      if (character.qualities.churroNormalChocolate <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#compro_churronormalchocolate").html());
    },
    tags: ["eleccion_objeto2"],
    optionText: "Churros normales con chocolate",
    displayOrder: 1,
  }),

  // Churros de lazo normales
  opcion7: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality(
        "churroLazoNormal",
        character.qualities.churroLazoNormal + 1
      );
      if (character.qualities.churroLazoNormal <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#compro_lazonormal").html());
    },
    tags: ["eleccion_objeto2"],
    optionText: "Churros de lazo normales",
    displayOrder: 1,
  }),

// Churro de lazo relleno de chocolate
opcion8: new undum.Situation({
    enter: function (character, system, from) {
      system.write($("#s_situations2").html());
      system.animateQuality(
        "churroLazoChocolate",
        character.qualities.churroLazoChocolate + 1
      );
      if (character.qualities.churroLazoChocolate <= 1) {
        system.setQuality("equipamiento", character.qualities.equipamiento + 1);
      }
      system.write($("#compro_lazochocolate").html());
    },
    tags: ["eleccion_objeto2"],
    optionText: "Churros de lazo con chocolate",
    displayOrder: 1,
  }),

};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    churroNormal: new undum.OnOffQuality("Churros normales", {
      priority: "0002",
      group: "objetos",
      onDisplay: "&#10003;",
    }),
    churroNormalChocolate: new undum.OnOffQuality("Churros normales con chocolate", {
        priority: "0002",
        group: "objetos",
        onDisplay: "&#10003;",
      }),
      churroLazoNormal: new undum.OnOffQuality("Churros de lazo normales", {
        priority: "0002",
        group: "objetos",
        onDisplay: "&#10003;",
      }),
      churroLazoChocolate: new undum.OnOffQuality("Churros de lazo con chocolate", {
        priority: "0002",
        group: "objetos",
        onDisplay: "&#10003;",
      }),
  };

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),

    objetos: new undum.QualityGroup(null, { priority: "0001" }),

    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.churroNormal = 0;
    character.qualities.churroNormalChocolate = 0;
    character.qualities.churroLazoNormal = 0;
    character.qualities.churroLazoChocolate = 0;
  
    system.setCharacterText("<p>Listado de objetos que lleva encima:</p>");
  };
