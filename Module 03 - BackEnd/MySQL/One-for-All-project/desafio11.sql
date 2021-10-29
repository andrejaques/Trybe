CREATE VIEW cancoes_premium AS
SELECT
m.music nome,
COUNT(h.music_id) reproducoes
FROM histories AS h
JOIN users AS u
ON (h.user_id = u.id) AND (u.plan_id = 2 OR u.plan_id = 3)
JOIN musics AS m ON h.music_id = m.id
GROUP BY nome
ORDER BY nome;
