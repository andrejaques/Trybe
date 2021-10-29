CREATE VIEW top_2_hits_do_momento AS
SELECT m.music AS cancao, COUNT(h.user_id) AS reproducoes
FROM histories AS h
INNER JOIN musics AS m ON m.id = h.music_id
GROUP BY m.music
ORDER BY reproducoes DESC, cancao ASC
LIMIT 2;
