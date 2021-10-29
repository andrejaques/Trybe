DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes INT, ano INT)
RETURNS INT READS SQL DATA
BEGIN
RETURN ( SELECT
COUNT(*)
FROM employees
WHERE
MONTH(HIRE_DATE) = mes
AND YEAR(HIRE_DATE) = ano
);
END $$

DELIMITER ;
