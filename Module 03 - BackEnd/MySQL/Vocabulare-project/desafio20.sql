DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(usr_email VARCHAR(100))
BEGIN
SELECT
CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
d.DEPARTMENT_NAME AS Departamento,
j.JOB_TITLE AS Cargo
FROM job_history AS jh
JOIN employees AS e ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
JOIN departments AS d ON jh.DEPARTMENT_ID = d.DEPARTMENT_ID
JOIN jobs AS j ON jh.JOB_ID = j.JOB_ID
WHERE e.EMAIL = usr_email
ORDER BY Departamento, Cargo;
END $$

DELIMITER ;
