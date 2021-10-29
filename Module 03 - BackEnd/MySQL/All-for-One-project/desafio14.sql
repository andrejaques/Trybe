SELECT 
    supplier_id
FROM
    northwind.purchase_orders
where supplier_id >= 1 and supplier_id <= 3;

/* or BETWEEN 1 and 3 */
