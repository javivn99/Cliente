/* USAR LA BASE DE DATOS LOCAL */
CREATE DATABASE  IF NOT EXISTS `dwec_biblioteca`;
USE `dwec_biblioteca`;


/*SE CREA LA TABLA LIBROS SI NO EXISTE*/
DROP TABLE IF EXISTS `temperaturas`;
CREATE TABLE `temperaturas` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `provincia` varchar(255) DEFAULT NULL,
  `temperatura` int NOT NULL DEFAULT NULL,
  `estado` int NOT NULL DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;








INSERT INTO `temperaturas` (`codigo`, `provincia`, `temperatura`, `estado`) VALUES
('Albacete',10,1),('Valladolid',5,2),('Barcelona',7,1),('Alicante',15,3),('Valencia',12,4),
('Sevilla',21,3),('Granada',11,2),('Mallorca',13,3);
