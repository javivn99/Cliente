//Hacer un objeto y recorrerlo

var persona = new Object;
persona.nombre = "Javier";
persona.apelllido="Velazquez";
persona.edad=21;
persona.domicilio="Medina del campo";

persona.forEach(x => console.log(x + " - " + persona[x]));