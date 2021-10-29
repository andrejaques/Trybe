CREATE VIEW estatisticas_musicais AS
    SELECT 
        (SELECT 
                COUNT(*)
            FROM
                musics
        ) AS cancoes,
        (SELECT 
                COUNT(*)
            FROM
                artists
        ) AS artistas,
        (SELECT 
                COUNT(*)
            FROM
                albums
        ) AS albuns;
