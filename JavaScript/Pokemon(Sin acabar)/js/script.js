    var timer;

        function platform(){

            $("#mypokemon").animate({top: "+=20px"}, 600).animate({top: "-=20px"}, 600)
            $("#enemy").animate({top: "-=10px"}, 600).animate({top: "+=10px"}, 600)
            //$("#platform2").animate({top: "-=10px"}, 800).animate({top: "+=10px"}, 800)

            timer = setTimeout('platform()' ,1200);
        }

        $(document).ready(function(){
            platform();

            $(".selector").hide();
            $("#selector1").show();

            $(".actionBox").on("mouseenter", function(){
                $(".selector").hide();
                id = $(".actionBox").index(this);
                $("#selector" + (id+1)).show();
            })

            $(".attackBox").on("mouseenter", function(){
                $(".triangle").hide();
                id = $(".attackBox").index(this);
                $("#triangle" + (id+1)).show();
            })

            /*$("#fightButton").on("click", function(){
                console.log("click");
                $("#mainBox").hide();
                $("#attacks").show();
            })*/

            $("#selector1").on("click", function(){
                console.log("click");
                $("#mainBox").hide();
                $("#attacks").css("display", "flex");
                $(".triangle").hide();
                $("#triangle1").show();
            })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            ///////// DEZLIZAMINETO HORIZONTAL DE LAS PLATAFORMAS  Y POKEMONS ////////////////////////////////////


            $('#boton_inicio').click(function(){

                $('#fight').css('display','block');
                $('.caja_externa').css('visibility','visible');
                $('.close').css('visibility','visible');

                $('#boton_inicio').css('display','none');

                //// POKEMON ENEMIGO

                $('#platform2').css('display','block');
                $('#platform2').animate({left:'+=1300'},1000);

                setTimeout(()=>{ //aparece articuno
                    $('#enemy').css('display','block');
                    $('#enemy').animate({left:'+=1550'},200);

                    setTimeout(()=>{

                        $('#estado_enemigo').css('display','block');
                        $('#estado_enemigo').animate({left:'+=500'},1000);
                    },800);

                },200);

                /////
             
                $('#platform1').css('display','block');
                $('#platform1').animate({right:'+=1200'},1000);

                setTimeout(()=>{
                    
                    $('#mypokemon').css('display','block');
                    $('#mypokemon').animate({right:'+=1600'},200)

                    setTimeout(()=>{

                        $('#estado_miPokemon').css('display','block');
                        $('#estado_miPokemon').animate({left:'-=1100'},1500)
                    },1000);
                },1000);


                
             


            });


            //////////////// BOTON DE LUCHAR //////////////////////////////////////////////////
            $('#luchar').click(function(){
                $('.consola_combate').css('visibility', 'hidden');
                $('.movimientos').css('visibility','visible');
                $('.salir').css('visibility','visible');

            })

            ////////////// SALIR DE LUCHAR 

            $('.salir').click(function(){
                $('.salir').css( "visibility", "hidden" );
                $('.movimientos').css( "visibility", "hidden" );
                
                $('.consola_combate').css( "visibility", "visible");
            })
        
            ////////////// BOTON DE BOLSA ///////////////////////////////////////////////////////
            $('#bolsa').click(function(){
                $('.consola_combate').css('visibility', 'hidden');
                $('.bolsas').css('visibility','visible');
                $('.salir2').css('visibility','visible');

            })
            
            ///////////// SALIR DE BOLSA y BOLSA DE POKEMONS

            $('.salir2').click(function(){
                $('.bolsas').css('visibility', 'hidden');
                $('.salir2').css('visibility', 'hidden');
                $('.misPokemons').css('visibility','hidden');

                $('.consola_combate').css( "visibility", "visible");



            })

            ///////////// BOTON DE BOLSA DE POKEMONS //////////////////////////////////////////

            $('#bolsa_pokemon').click(function(){
                $('.consola_combate').css('visibility', 'hidden');

                $('.misPokemons').css('visibility','visible');
                $('.salir2').css('visibility','visible');

            })

///////////////////////////////////////// BOTON HUIR ///////////////////////////////////////////////////////

            function btn_huir_exito(){ //funcion si la accion huir, tuvo exito

                    $('#mainText').text('You run...');
                    $('.huiste').css( "display", "block" );

                    setTimeout(()=>{
                        $('.huiste').css({
                            'width' : '100vw',
                            'height' : '100vh'
                        })

                    },2000)

                    setTimeout(()=>{
                        $('.huiste').text('WIN?');
                    },4000)

                    return true;
                
            }

            function btn_huir_fracaso(){ //funcion si la accion huir, fracaso

                $('#mainText').text("You couldn't run away...");
    
                setTimeout(()=>{
                    $('#mainText').text('What should PIKACHU do?');
                },3000);
            
                return false;
            }
            ///////////////////////
            function condicion_huir(){ //Funcion de huir con condicion //si el random sale menor que 0,3, tendra exito la funcion anterior

                let aleatorio = Math.floor(Math.random() * 10);    //genera un numero random entre 0 y 10
                return new Promise((exito,fracaso)=>{

                    setTimeout(()=>{
                        if(aleatorio <= 2){
                            console.log(aleatorio);
                            exito(btn_huir_exito());
                            
                        
                        }else{
                            console.log(aleatorio);
                            fracaso(btn_huir_fracaso());
                        }

                    },1)

                   
                });
            }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            /*FUNCION ASINCRONA huir*/
            async function boton_huir(){

                try {
                    let huir = await condicion_huir();
                    console.log('Éxito: ', huir);

                } catch (error) {
                    console.error('Fracaso: ', error);
                }
            }

            

           

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            /*EVENTOS CLICK DE LA CONSOLA DE COMBATE*/

            //HUIR
            let btn_huir = document.getElementById('huir');

            btn_huir.addEventListener('click',()=>{
                boton_huir();
                
            })

            //Luchar -> movimientos

            // $("#enemy").animate({top: "-=10px"}, 600).animate({top: "+=10px"}, 600)

                function vida() {
                    let barra_enemigo = $('#vida_enemigo');
                    let ancho = barra_enemigo.css('width');

                    if (ancho <= '18%') {
                        barra_enemigo.css('background-color', 'yellow');
                    
                    // }if (ancho == '8%') {
                    //     barra_enemigo.css('background-color', 'red');

                    // }
                    } 
                    
                }
                
                function mov_tackle() {
                    $('#aura_electrica').css('display', 'block');
                    $('#mypokemon').css('display', 'none');
                
                    $('#aura_electrica').animate({ left: '+=950', top: '-=750' }, 200).animate({ left: '-=950', top: '+=750' }, 100);
                
                    $('#vida_enemigo').animate({
                        width: '-=7%',
                    }, 1000, function() {
                        // Esta función se ejecutará después de que termine la animación
                        vida(); // Verificar el ancho del elemento después de la animación
                    });

                    setTimeout(() => {
                        $('#aura_electrica').css('display','none');
                        $('#mypokemon').css('display','block');
                    }, 500);
                }

                /*FUNCION ASINCRONA luchar*/
                async function boton_luchar(){

                    try {
                        let huir = await mov_tackle();
                        console.log('Éxito: ', tackle);

                    } catch (error) {
                        console.error('Fracaso: ', error);
                    }
                }

                ////////////////
                let tackle = document.getElementById('tackle');

                tackle.addEventListener('click',()=>{
                    boton_luchar();
                    
                })

  




            

        }); 

    