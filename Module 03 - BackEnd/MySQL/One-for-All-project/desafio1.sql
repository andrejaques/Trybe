DROP DATABASE IF EXISTS SpotifyClone;
CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE artists(
id INT NOT NULL AUTO_INCREMENT,
artist VARCHAR(40),
PRIMARY KEY (id)
) ENGINE = InnoDB;

INSERT INTO artists(artist)
VALUES
("Walter Phoenix"),
("Peter Strong"),
("Lance Day"),
("Freedie Shannon");

CREATE TABLE plans(
id INT NOT NULL AUTO_INCREMENT,
plan VARCHAR(40) NOT NULL,
plan_value DECIMAL(4, 2),
PRIMARY KEY (id)
) ENGINE = InnoDB;

INSERT INTO plans(plan, plan_value)
VALUES
("gratuito", 0.00),
("familiar", 7.99),
("universitário", 5.99);

CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT,
`user` VARCHAR(50) NOT NULL,
age TINYINT,
plan_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (plan_id) REFERENCES plans(id)
) ENGINE = InnoDB;

INSERT INTO users(`user`, age, plan_id)
VALUES
("Thati", 23, 1),
("Cintia", 35, 2),
("Bill", 20, 3),
("Roger", 45, 1);

CREATE TABLE albums(
id INT NOT NULL AUTO_INCREMENT,
album VARCHAR(35),
artist_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (artist_id) REFERENCES artists(id)
) ENGINE = InnoDB;

INSERT INTO albums(album, artist_id)
VALUES
("Envious", 1),
("Exuberant", 1),
("Hallowed Steam", 2),
("Incandescent", 3),
("Temporary Culture", 4);

CREATE TABLE musics(
id INT NOT NULL AUTO_INCREMENT,
artist_id INT NOT NULL,
album_id INT NOT NULL,
music VARCHAR(40),
PRIMARY KEY (id),
FOREIGN KEY (album_id) REFERENCES albums(id),
FOREIGN KEY (artist_id) REFERENCES artists(id)
) ENGINE = InnoDB;

INSERT INTO musics(artist_id, album_id, music)
VALUES
(1, 1, 'Soul For Us'),
(1, 1, 'Reflections Of Magic'),
(1, 1, 'Dance With Her Own'),
(1, 2, 'Troubles Of My Inner Fire'),
(1, 2, 'Time Fireworks'),
(2, 3, 'Magic Circus'),
(2, 3, 'Honey, So Do I'),
(2, 3, "Sweetie, Let's Go Wild"),
(2, 3, 'She Knows'),
(3, 4, 'Fantasy For Me'),
(3, 4, 'Celebration Of More'),
(3, 4, 'Rock His Everything'),
(3, 4, 'Home Forever'),
(3, 4, 'Diamond Power'),
(3, 4, "Honey, Let's Be Silly"),
(4, 5, 'Thang Of Thunder'),
(4, 5, 'Words Of Her Life'),
(4, 5, 'Without My Streets');

CREATE TABLE histories(
user_id INT NOT NULL,
music_id INT NOT NULL,
CONSTRAINT PRIMARY KEY (user_id, music_id),
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (music_id) REFERENCES musics(id)
) ENGINE InnoDB;

INSERT INTO histories (user_id, music_id)
VALUES
(1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4, 18),
(4, 11);

CREATE TABLE `following`(
user_id INT NOT NULL,
artist_id INT NOT NULL,
CONSTRAINT PRIMARY KEY (user_id, artist_id),
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (artist_id) REFERENCES artists(id)
) ENGINE InnoDB;

INSERT INTO `following` (user_id, artist_id)
VALUES
(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);
