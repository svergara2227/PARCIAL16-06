var videojuegos = [
    { 
      titulo: 'Super Mario Bros', 
      genero: 'Plataformas', 
      plataforma: 'NES', 
      anioLanzamiento: 1985, 
      desarrolladora: 'Nintendo'
    },
    { 
      titulo: 'The Legend of Zelda: Breath of the Wild', 
      genero: 'Acción, Aventura', 
      plataforma: 'Nintendo Switch', 
      anioLanzamiento: 2017, 
      desarrolladora: 'Nintendo'
    },
    { 
      titulo: 'Grand Theft Auto V', 
      genero: 'Acción, Aventura', 
      plataforma: 'PlayStation 4, Xbox One, PC', 
      anioLanzamiento: 2013, 
      desarrolladora: 'Rockstar Games'
    },
    { 
      titulo: 'Minecraft', 
      genero: 'Sandbox', 
      plataforma: 'Multiplataforma', 
      anioLanzamiento: 2011, 
      desarrolladora: 'Mojang Studios'
    }
  ];
  for (var i = 0; i < videojuegos.length; i++) {
    console.log('Videojuego ' + (i + 1) + ':');
    console.log('Título:', videojuegos[i].titulo);
    console.log('Género:', videojuegos[i].genero);
    console.log('Plataforma:', videojuegos[i].plataforma);
    console.log('Año de lanzamiento:', videojuegos[i].anioLanzamiento);
    console.log('Desarrolladora:', videojuegos[i].desarrolladora);
    console.log('----------------------------------');
  }
  