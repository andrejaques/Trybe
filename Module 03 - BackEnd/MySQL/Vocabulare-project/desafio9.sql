SELECT 
CONCAT(e.FirstName, ' ', e.LastName) AS 'Nome completo',
(SELECT COUNT(*)
FROM w3schools.orders
WHERE EmployeeID = e.EmployeeID) AS 'Total de pedidos'
FROM w3schools.employees AS e
GROUP BY EmployeeID
HAVING `Total de pedidos` > 0
ORDER BY `Total de pedidos`;
