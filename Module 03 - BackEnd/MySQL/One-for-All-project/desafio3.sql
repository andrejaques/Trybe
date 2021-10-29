CREATE VIEW historico_reproducao_usuarios AS
SELECT
u.user AS usuario, m.music AS nome
FROM
histories AS h
JOIN
users AS u ON u.id = h.user_id
JOIN 
musics AS m ON m.id = h.music_id
ORDER BY usuario ASC , nome ASC;
