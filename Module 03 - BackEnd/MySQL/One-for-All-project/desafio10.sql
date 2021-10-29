DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(id INT)
RETURNS INT READS SQL DATA
BEGIN
RETURN (
SELECT COUNT(*) quantidade_musicas_no_historico
FROM histories
WHERE user_id = id);
END $$

DELIMITER ;
