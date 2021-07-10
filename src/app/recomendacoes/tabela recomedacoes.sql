drop table porcornando.recomendacoes;

CREATE TABLE porcornando.recomendacoes (
	TipAnun BIGINT NOT NULL,
	NomeAnun varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci
COMMENT='Essa � a Tabela para a pagina Recomenda��es em app/recomendacoes';

insert into porcornando.recomendacoes (TipAnun, NomeAnun) values (1, 'Livros de mist�rio'),
																 (1, 'Gibis'),
																 (1, 'Romances'),
																 (2, 'Escrivania'),
																 (2, 'Arm�rio para escrit�rio'),
																 (2, 'Ar-condicionado'),
																 (3, 'HotWheels'),
																 (3, 'Telefone Infantil'),
																 (3, 'Ipad para crian�as');