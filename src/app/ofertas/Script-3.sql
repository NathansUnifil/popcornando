drop table porcornando.ofertas 

CREATE TABLE porcornando.ofertas (
  `NumAnun` bigint(110) default null auto_increment,
  `NomeAnun` varchar(100) DEFAULT NULL,
  `TipoAnun` int(11) DEFAULT NULL,
  `PreAnun` double DEFAULT null,
  primary key (NumAnun)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Essa é a Tabela para a pagina Ofertas em app/Ofertas'

alter table porcornando.ofertas modify column NumAnun bigint(110) not null auto_increment;



insert into porcornando.ofertas (NomeAnun, TipoAnun, PreAnun) values ('Carro luxuoso!', 1, 999.90),
														 				('Carro esportivo!', 1, 599.90),
														 			('Carro Barato!', 1, 159.90),
														 			('Roupas de Casamento!', 2, 1999.90),
																	('Roupas de Festa!', 2, 1099.90),
																	('Pijama!', 2, 299.90),
																	('Celular!', 3, 1599.90),
																	('Computador!', 3, 6999.90),
																	('Geladeira!', 3, 3999.90),
																	('Roteador!', 3, 79.90),
																	('Livro de Mistério!', 4, 82.90),
																	('Livro de Romance!', 4, 47.90),
																	('Livro de Humor!', 4, 35.90),
																	('Apostilas Escolares!', 4, 52.90),
																	('Cadeiras!', 5, 22.90),
																	('Armario!', 5, 82.90),
																	('Mesa de Jantar!', 5, 193.90),
																	('Sofa!', 5, 327.90),
																	('Cama!', 5, 96.90);
																	