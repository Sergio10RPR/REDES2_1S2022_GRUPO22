create database bd_redes2;

use db_redes2;

create table rol (
    id_rol int not null AUTO_INCREMENT,
    nombre_rol varchar(30),
    CONSTRAINT pk_puesto PRIMARY KEY (id_rol)
);

create table curso (
    id_curso int not null AUTO_INCREMENT,
    nombre_curso varchar(50),
    CONSTRAINT pk_curso PRIMARY KEY (id_curso)
);

create table administrador (
    id_administrador int not null AUTO_INCREMENT,
    nombre_admin varchar(30),
    apellido_admin varchar(30),
    descripcion varchar(300),
    cod_rol int,
    link_imagen varchar(300),
    CONSTRAINT pk_administrador PRIMARY KEY (id_administrador),
    CONSTRAINT fk_administrador_rol FOREIGN KEY (cod_rol) REFERENCES rol (id_rol) ON DELETE CASCADE
);

create table desarrollador (
    id_desarrollador int not null AUTO_INCREMENT,
    nombre_dev varchar(30),
    carnet int,
    cod_curso int,
    cod_rol int,
    link_imagen varchar(300),
    descripcion varchar(300),
    CONSTRAINT pk_desarrollador PRIMARY KEY (id_desarrollador),
    CONSTRAINT fk_desarrollador_curso FOREIGN KEY (cod_curso) REFERENCES curso(id_curso) ON DELETE CASCADE,
    CONSTRAINT fk_desarrollador_rol FOREIGN KEY (cod_rol) REFERENCES rol(id_rol) ON DELETE CASCADE
);

create table imagen (
    id_imagen int AUTO_INCREMENT,
    link_imagen varchar(300),
    CONSTRAINT pk_imagen PRIMARY KEY (id_imagen)
);

# ELIMINAR BASE DE DATOS
drop table imagen;
drop table desarrollador;
drop table administrador;
drop table curso;
drop table rol;


# DATOS PRUEBA

insert into rol(nombre_rol) 
values ('Presidente'), ('Vicepresidente'), ('Ministro Educacion'), ('Ministro Cultura'), ('Ministro de Seguridad'), ('Ministro de Gobernacion');

insert into rol(nombre_rol)
values ('Desarrollador de Backend'), ('Desarrollador de Fronend'), ('Desarrollador de DevOps'), ('Arquitecto de Proyecto');

insert into curso(nombre_curso)
values ('Redes de Computadoras 2'), ('Sistemas Operativos 2'), ('Modelacion y Simulacion 2'), ('Seminario de Sistemas 2');

insert into administrador (nombre_admin,apellido_admin,descripcion,cod_rol)
values ('Justo Rufuno','Barrios','Presidente de Guatemala, a la cabeza del ejecutivo',1),
('Juanito','Alcachofa','Se encarga de otras tareas relegadas por el presidnete y propias del puesto',2),
('Juanito','Juanez','Administra y gestiona el ministro de Educacion',3);

insert into desarrollador (nombre_dev,carnet,cod_curso,cod_rol,descripcion)
values ('Airton Yelstin de Leon',201602836,1,2,'Encargado de App en Front-End'),
('Cristian Suy',20170099,1,3,'Encargado de gestionar plataforma Cloud-Computing AWS');
