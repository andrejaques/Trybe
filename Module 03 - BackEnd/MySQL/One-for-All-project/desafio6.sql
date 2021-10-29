CREATE VIEW faturamento_atual AS
SELECT 
MIN(plan_value) AS `faturamento_minimo`,
MAX(plan_value) AS `faturamento_maximo`,
(SELECT 
ROUND(AVG(p.plan_value), 2)
FROM
users AS u
JOIN
plans AS p ON u.plan_id = p.id) AS `faturamento_medio`,
ROUND(SUM(plan_value), 2) AS `faturamento_total`
FROM
plans;
