var peticion, bd, almacenVehiculos, almacenRecambios, almacenReparaciones;

			function crearBD() {

				if (window.indexedDB) {
					peticion = window.indexedDB.open("taller",1);

					peticion.onsuccess = function (event) {
						bd = peticion.result;
						var transaccion = bd.transaction(bd.objectStoreNames,"readwrite");

						var almacenVehiculos = transaccion.objectStore("vehiculos");
						var almacenRecambios = transaccion.objectStore("recambios");
						//var almacenReparaciones = transaccion.objectStore("reparaciones");

                        /*COCHES*/
						almacenVehiculos.put({id:1,marca:"Seat",modelo:"Leon",color:"Rojo",cv:132,precio:19000});
						almacenVehiculos.put({id:2,marca:"Seat",modelo:"Ibiza",color:"Amarillo",cv:98,precio:12400});
						almacenVehiculos.put({id:3,marca:"Seat",modelo:"Cupra",color:"Negro",cv:187,precio:28500});
						almacenVehiculos.put({id:4,marca:"bmw",modelo:"Serie 1",color:"Azul",cv:130,precio:24000});
						almacenVehiculos.put({id:5,marca:"bmw",modelo:"X6",color:"Negro",cv:195,precio:89600});
						almacenVehiculos.put({id:6,marca:"bmw",modelo:"M3",color:"Verde",cv:308,precio:123000});
						almacenVehiculos.put({id:7,marca:"Peugeot",modelo:"407",color:"Gris",cv:134,precio:32450});
						almacenVehiculos.put({id:8,marca:"Peugeot",modelo:"208",color:"Rojo",cv:115,precio:22000});
						almacenVehiculos.put({id:9,marca:"Peugeot",modelo:"2008",color:"Blanco",cv:146,precio:38900});
						almacenVehiculos.put({id:10,marca:"Skoda",modelo:"Fabia",color:"Gris",cv:92,precio:9800});
						almacenVehiculos.put({id:11,marca:"Skoda",modelo:"Karok",color:"Marron",cv:98,precio:12000});
						almacenVehiculos.put({id:12,marca:"Skoda",modelo:"Octavia",color:"Rojo",cv:117,precio:14250});
						almacenVehiculos.put({id:13,marca:"Audi",modelo:"TT",color:"Rojo",cv:144,precio:54000});
						almacenVehiculos.put({id:14,marca:"Audi",modelo:"RS3",color:"Blanco",cv:173,precio:71630});
						almacenVehiculos.put({id:15,marca:"Audi",modelo:"A2",color:"Azul",cv:122,precio:26800});
						almacenVehiculos.put({id:16,marca:"wolsvagen",modelo:"Scciroco",color:"Blanco",cv:188,precio:31700});
                        almacenVehiculos.put({id:17,marca:"wolsvagen",modelo:"Gti",color:"Verde",cv:120,precio:24900});
                        almacenVehiculos.put({id:17,marca:"wolsvagen",modelo:"Golf",color:"Gris",cv:107,precio:19000});
						

                        /*PIEZAS*/
						almacenRecambios.put({id:1,marca:"Castrol",tipo:"Aceite de motor",stock:20,precio:34.95});
						almacenRecambios.put({id:2,marca:"Krafft",tipo:"Aceite de motor",stock:18,precio:32.85});
						almacenRecambios.put({id:3,marca:"Repsol",tipo:"Aceite de motor",stock:20,precio:38.95});
						almacenRecambios.put({id:4,marca:"Power-one",tipo:"Aceite de motor",stock:5,precio:28.00});
						almacenRecambios.put({id:5,marca:"Quartz",tipo:"Aceite de motor",stock:7,precio:41.99});
                        almacenRecambios.put({id:6,marca:"Mobil",tipo:"Aceite de motor",stock:7,precio:23.87});
                        /*--------------------------------------------------------------------------------------*/
						almacenRecambios.put({id:7,marca:"Bosch",tipo:"Filtro de aire",stock:74,precio:12.60});
						almacenRecambios.put({id:8,marca:"Motul",tipo:"Liquido de frenos",stock:32,precio:14.98});
						almacenRecambios.put({id:9,marca:"Valeo",tipo:"Liquido de frenos",stock:25,precio:12.95});
						almacenRecambios.put({id:10,marca:"Castrol",tipo:"Liquido de frenos",stock:12,precio:18.50});
						almacenRecambios.put({id:11,marca:"Seat",tipo:"Anticogelante",stock:3,precio:14.20});
                        almacenRecambios.put({id:12,marca:"Krafft",tipo:"Anticogelante",stock:24,precio:12.95});
                        /*--------------------------------------------------------------------------------------*/
						almacenRecambios.put({id:13,marca:"+Dcha",tipo:"Bateria",stock:3,precio:73.49});
						almacenRecambios.put({id:14,marca:"Bosch",tipo:"Bateria",stock:9,precio:128.29});
						almacenRecambios.put({id:15,marca:"Philips",tipo:"Luz de posicion",stock:80,precio:1.80});
						almacenRecambios.put({id:16,marca:"Osram",tipo:"Luz de posicion",stock:78,precio:6.84});
                        almacenRecambios.put({id:17,marca:"Philips",tipo:"Luz de cruce",stock:65,precio:5.12});
                        almacenRecambios.put({id:18,marca:"Philips",tipo:"Luz de cruce",stock:66,precio:20.92});
                        /*--------------------------------------------------------------------------------------*/
                        almacenRecambios.put({id:19,marca:"Philips",tipo:"Luz antiniebla delantera",stock:32,precio:18.34});
                        almacenRecambios.put({id:20,marca:"Philips",tipo:"Luz antiniebla delantera",stock:29,precio:12.10});
                        almacenRecambios.put({id:21,marca:"Philips",tipo:"Luz de freno",stock:42,precio:3.80});
                        almacenRecambios.put({id:22,marca:"Hella",tipo:"Luz marcha atras",stock:35,precio:5.85});
                        almacenRecambios.put({id:23,marca:"Bosch",tipo:"Luz de intermitente",stock:22,precio:1.61});
                        almacenRecambios.put({id:24,marca:"Bosch",tipo:"Luz de intermitente",stock:14,precio:6.95});
                        /*--------------------------------------------------------------------------------------*/
                        almacenRecambios.put({id:25,marca:"Bosch",tipo:"Limpiaparabrisas",stock:45,precio:16.07});
                        almacenRecambios.put({id:25,marca:"Bosch",tipo:"Limpiaparabrisas",stock:31,precio:18.10});
                        almacenRecambios.put({id:25,marca:"Anonima",tipo:"Parasol",stock:12,precio:1.16});
                        almacenRecambios.put({id:25,marca:"Lencent",tipo:"Kit manos libres",stock:5,precio:12.74});
                        almacenRecambios.put({id:25,marca:"Auto-t",tipo:"Kit manos libres",stock:9,precio:26.56});
                        almacenRecambios.put({id:25,marca:"Beikell",tipo:"Cargador usb",stock:18,precio:6.59});

/*
                        /*REPARACIONES*/
						/*almacenReparaciones.put({isbn:12,socio:"jperezg",fechaprestamo:fecha(0),fechadevolucion:fecha(7)});
						almacenPrestamos.put({isbn:23,socio:"jperezg",fechaprestamo:fecha(-3),fechadevolucion:fecha(12)});
						almacenPrestamos.put({isbn:42,socio:"jperezg",fechaprestamo:fecha(-7),fechadevolucion:fecha(10)});
						almacenPrestamos.put({isbn:65,socio:"amartinf",fechaprestamo:fecha(-2),fechadevolucion:fecha(6)});
						almacenPrestamos.put({isbn:23,socio:"lgarciar",fechaprestamo:fecha(-5),fechadevolucion:fecha(8)});
						almacenPrestamos.put({isbn:17,socio:"lgarciar",fechaprestamo:fecha(-4),fechadevolucion:fecha(12)});
						almacenPrestamos.put({isbn:58,socio:"lgarciar",fechaprestamo:fecha(0),fechadevolucion:fecha(9)});
						almacenPrestamos.put({isbn:44,socio:"msanchezm",fechaprestamo:fecha(-4),fechadevolucion:fecha(7)});
						almacenPrestamos.put({isbn:51,socio:"aprietoh",fechaprestamo:fecha(-8),fechadevolucion:fecha(9)});
						almacenPrestamos.put({isbn:67,socio:"amarcosi",fechaprestamo:fecha(-1),fechadevolucion:fecha(5)});
						almacenPrestamos.put({isbn:72,socio:"lmediavillar",fechaprestamo:fecha(-9),fechadevolucion:fecha(7)});
						almacenPrestamos.put({isbn:81,socio:"sperezs",fechaprestamo:fecha(-8),fechadevolucion:fecha(3)});
                        */
                       
					};


					peticion.onerror = function (evento) {
						console.log("No se ha creado la base de datos: " + evento.target.errorCode);
					};

                    
					peticion.onupgradeneeded = function (evento) {

						bd = peticion.result;

						var almacenVehiculos = bd.createObjectStore("vehiculos",{keyPath:"id"});
						var almacenRecambios = bd.createObjectStore("recambios",{keyPath:"id"});
						//var almacenPrestamos = bd.createObjectStore("reparaciones",{keyPath:["isbn","socio"]});

						almacenVehiculos.createIndex("por_id", "id", {unique: true});
						almacenVehiculos.createIndex("por_marca", "marca");
                        almacenVehiculos.createIndex("por_cv", "cv");
                        almacenVehiculos.createIndex("por_precio", "precio");

						almacenRecambios.createIndex("por_id", "id", {unique: true});
						almacenRecambios.createIndex("por_marca", "marca");
                        almacenRecambios.createIndex("por_tipo", "tipo");
                        almacenRecambios.createIndex("por_precio", "precio");

                        /*
						almacenPrestamos.createIndex("por_isbn", "isbn");
						almacenPrestamos.createIndex("por_socio", "socio");
						almacenPrestamos.createIndex("por_fechaprestamo", "fechaprestamo");
                        almacenPrestamos.createIndex("por_fechadevolucion", "fechadevolucion");
                        */
                    };
                    
					
				} else {
					console.log("IndexedDB no está soportado");
				}
			}