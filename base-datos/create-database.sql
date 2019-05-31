/**
 template para crear tabla e insertar datos en la base de datos mysql 
*/
CREATE DATABASE IF NOT EXISTS irso_2019;

USE irso_2019;

CREATE TABLE clientes (
	id INT NOT NULL AUTO_INCREMENT,
	nombres VARCHAR(30), 
	apellido VARCHAR(30),
    direccion VARCHAR(50),
    cod_postal VARCHAR(50),
    telefono INT,
	PRIMARY KEY(id)
);


INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('adrian','ramos','pasteur 200', '1045', 1548965874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('pedro','rocca','lima 100', '1045', 1548965874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('marcelo','ezeiza','pasteur 500', '1045', 1544595874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('julieta','chavez','peron 200', '1045', 1548911174);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('florencia','bourdieu','callao 200', '1045', 1588965874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('luis','bourdieu','zarate 200', '1045', 1525665874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('josue','gatto','peru 500', '1045', 1548967444);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('moises','perez','pasteur 200', '1045', 1548954774);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('franklyn','ramos','pasteur 200', '1045', 1548965674);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('sofia','leon','ate 200', '1045', 1548895874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('adrian','carlotto','pasteur 200', '1045', 1548965874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('pedro','peron','lima 100', '1045', 1548965874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('marcelo','fernandez','pasteur 500', '1045', 1544595874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('julieta','alvarez','peron 200', '1045', 1548911174);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('florencia','bocio','callao 200', '1045', 1588965874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('luis','zen','zarate 200', '1045', 1525665874);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('josue','pipa','peru 500', '1045', 1548967444);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('moises','peru','pasteur 200', '1045', 1548954774);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('franklyn','rimac','pasteur 200', '1045', 1548965674);

INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('sofia','leonel','ate 200', '1045', 1548895874);