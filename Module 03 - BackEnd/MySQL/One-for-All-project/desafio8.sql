DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
DELETE FROM histories
WHERE OLD.id = user_id;
DELETE FROM `following`
WHERE OLD.id = user_id;
END $$

DELIMITER ;
