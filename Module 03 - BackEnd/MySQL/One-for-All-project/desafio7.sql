CREATE VIEW perfil_artistas AS
SELECT 
a.artist AS artista,
al.album AS album,
COUNT(f.user_id) AS seguidores
FROM
artists AS a
INNER JOIN
albums AS al ON a.id = al.artist_id
INNER JOIN
following AS f ON a.id = f.artist_id
GROUP BY artista , album
ORDER BY seguidores DESC , artista ASC;
