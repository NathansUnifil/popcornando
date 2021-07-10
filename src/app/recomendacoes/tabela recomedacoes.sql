drop table porcornando.recomendacoes;

CREATE TABLE porcornando.recomendacoes (
	TipAnun BIGINT NOT NULL,
	NomeAnun varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci
COMMENT='Essa é a Tabela para a pagina Recomendações em app/recomendacoes';

insert into porcornando.recomendacoes (TipAnun, NomeAnun) values (1, 'Livros de mistério'),
																 (1, 'Gibis'),
																 (1, 'Romances'),
																 (2, 'Escrivania'),
																 (2, 'Armário para escritório'),
																 (2, 'Ar-condicionado'),
																 (3, 'HotWheels'),
																 (3, 'Telefone Infantil'),
																 (3, 'Ipad para crianças');