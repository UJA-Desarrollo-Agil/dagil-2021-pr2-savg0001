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
        "<img src='./media/img/churreria.png' class='float_right' width='250' height='250'>\
        <p>Ya en la calle, cambiado y aseado afronto mi intrepidante camino hacia el Mercadona que está a 10 minutos de casa, pero de repente algo acapara toda mi atención. ¡La churrería del barrio está abierta!</p>\
        <p>Como durante la semana toca ir virtualmente a clase y los findes son para descansar pensaba que eso de la churrería abierta era un mito. Esto puede que cambie mis planes, <a href='sichurros'>¿Decido hacer una paradita para comprar churros</a> o <a href='nochurros'>continúo mi aburrido camino sin churros al mercadona?</a>.</p>",
        {
            heading: "Se ha roto un mito",
        }
    ),

    /*Elijo no comprar churros*/ 
    nochurros: new undum.SimpleSituation(
        "<img src='./media/img/mercadona.png' class='float_ce' width='400' height='400'>\
        <p>Mejor no compro churros, tengo que mantener la línea porque ¡ya es verano! Así que sigo mi camino hacia el mercadona pero antes veo algo raro en la calle.</p>\
        <p><a href='detalladamentecalle'>Mirar detalladamente que pasa</a>.</p>",
        {
            heading: "No me apetecen churros",
        }

    ),

    /*Mirar detalladamente calle*/
    detalladamentecalle: new undum.SimpleSituation(
        "<p>No veo demasiado bien debido al cansancion por el estudio, simplemete era una hoja bailando por el viento.</p>\
        <p><a href='irmercadonafin'>Dejo de mirar y me centro en seguir mi camino hacia el mercadona</a></p>",
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
       "<p>Con la boca hecha agua pido los churros y me dispongo a comerlos mientras sigo mi camino, <a href='ircasa'>creo que el frigo esta bien, vuelvo a casa</a> <a href='irmercadonaconchurros'>llegado hasta aquí, toca ir al Mercadona de una vez</a>.</p>",
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
    "<p>Cuando llego al Mercadona me quedo asombrado, ¡Está cerrado! Que extraño me parece, decido sacar mi móvil para buscar en internet que ha pasado cuando me da por mirar la fecha.</p>\
    <p>¡Hoy es domingo! Que torpe soy, será también cosa de las horas de estudio...Pues nada, toca volver a casa pero no me rendiré en mi lucha por desayunar algo rico. Ahora sí, toca <a href='churrosfin'>comprar esos churros</a>.</p>",
    {
        heading: "Adiós a la operación bikini"
    }
  ),

  churrosfin: new undum.SimpleSituation(
      "<p>LLego a la churrería rápidamente porque mi estómago no para de rugir y por fin obtengo mi preciado desayuno, ya tendré tiempo de empezar la operación bikini mañana.</p>\
      <p>Así que prosigo mi camino aliviado por haber comido algo hasta que llego a casa.</p>",
  ),

  /*Elijo ir al mercadona y volver a casa*/
  irmercadonaconchurros: new undum.SimpleSituation(
    "<p>Cuando llego al Mercadona me quedo asombrado, ¡Está cerrado! Que extraño me parece, decido sacar mi móvil para buscar en internet que ha pasado cuando me da por mirar la fecha.</p>\
    <p>¡Hoy es domingo! Que torpe soy, será también cosa de las horas de estudio...Pues nada, toca volver a casa pero por lo menos he conseguido algo rico de desayuno, ya pensaré en que como...</p>\
    <p>Así que prosigo mi camino aliviado por haber comido algo hasta que llego a casa.</p>",  
    {
        heading: "Un paseo en vano"
    }
  )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
