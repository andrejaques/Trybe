DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN artistaNome VARCHAR(30))
BEGIN
SELECT 
    a.artist AS artista, alb.album AS album
FROM
    albums AS alb
        JOIN
    artists AS a ON a.id = alb.artist_id
WHERE
    a.artist = artistaNome
ORDER BY alb.album;
END $$

DELIMITER ;
