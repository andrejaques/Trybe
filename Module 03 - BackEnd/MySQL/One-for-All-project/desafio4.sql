CREATE VIEW top_3_artistas AS
SELECT 
a.artist AS artista,
COUNT(f.user_id) AS seguidores
FROM
artists AS a
INNER JOIN
`following` AS f ON f.artist_id = a.id
GROUP BY a.artist
HAVING seguidores >= 2
ORDER BY seguidores DESC , artista ASC;
