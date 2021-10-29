DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(usr_email VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
RETURN ( SELECT COUNT(*)
FROM job_history AS jh
WHERE
EXISTS ( SELECT
*
FROM
employees
WHERE
EMAIL = usr_email
AND EMPLOYEE_ID = jh.EMPLOYEE_ID)
);
END $$

DELIMITER ;
