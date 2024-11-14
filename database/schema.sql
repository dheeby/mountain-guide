CREATE TABLE mountains (
    id              serial,
    geonameid       integer NOT NULL,
    name            text NOT NULL,
    alternate_names text,
    coordinates     point NOT NULL,
    country_code    text NOT NULL,
    admin_1_code    text,
    admin_2_code    text,
    admin_3_code    text,
    admin_4_code    text,
    elevation       integer
);

COMMENT ON COLUMN mountains.geonameid IS 'geonameid';
COMMENT ON COLUMN mountains.name IS 'utf8 name';
COMMENT ON COLUMN mountains.alternate_names IS 'comma-separated list of alternative names';
COMMENT ON COLUMN mountains.coordinates IS 'WGS82 (lat,lng) geographic coordinate';
COMMENT ON COLUMN mountains.country_code IS 'ISO-3166 2-letter country code';
COMMENT ON COLUMN mountains.admin_1_code IS 'FIPS or ISO code (see admin_1_codes)';
COMMENT ON COLUMN mountains.admin_2_code IS 'Code for the second level administrative division (see admin_2_codes)';
COMMENT ON COLUMN mountains.admin_3_code IS 'Code for the third level administrative division';
COMMENT ON COLUMN mountains.admin_4_code IS 'Code for the third level administrative division';
COMMENT ON COLUMN mountains.elevation IS 'Elevation in meters';

CREATE TABLE admin_1_codes (
    country_code    text,
    admin_1_code    text,
    name            text NOT NULL,
    geonameid       integer NOT NULL
);

COMMENT ON COLUMN admin_1_codes.country_code IS 'ISO-3166 2-letter country code';
COMMENT ON COLUMN admin_1_codes.name IS 'utf8 name';
COMMENT ON COLUMN admin_1_codes.geonameid IS 'geonameid';

CREATE TABLE admin_2_codes (
    country_code    text,
    admin_1_code    text,
    admin_2_code    text,
    code            text,
    name            text NOT NULL,
    geonameid       integer NOT NULL
);

COMMENT ON COLUMN admin_2_codes.country_code IS 'ISO-3166 2-letter country code';
COMMENT ON COLUMN admin_2_codes.name IS 'utf8 name';
COMMENT ON COLUMN admin_2_codes.geonameid IS 'geonameid';

CREATE TABLE washington_scrambles (
    id                  serial,
    name                text NOT NULL,
    difficulty          integer NOT NULL,
    skill_level         integer NOT NULL,
    distance            integer NOT NULL,
    elevation_gain      integer NOT NULL,
    trip_length_unit    text NOT NULL,
    trip_length_value   integer NOT NULL,
    best_month_start    integer NOT NULL,
    best_month_end      integer NOT NULL
);

COMMENT ON COLUMN washington_scrambles.distance IS 'standard route approximate, measured in miles';
COMMENT ON COLUMN washington_scrambles.elevation_gain IS 'standard route approximate, measured in feet';
COMMENT ON COLUMN washington_scrambles.trip_length_unit IS 'standard route approximate, hours or days';
COMMENT ON COLUMN washington_scrambles.trip_length_value IS 'standard route approximate, paired with trip_length_unit';
COMMENT ON COLUMN washington_scrambles.best_month_start IS 'start of best months to visit (inclusive), value 0 - 11';
COMMENT ON COLUMN washington_scrambles.best_month_end IS 'end of best months to visit (inclusive), value 0 - 11';

CREATE TABLE washington_scrambles_peaks (
    id          serial,
    list_id     integer,
    geonameid   integer
);

COMMENT ON COLUMN washington_scrambles_peaks.list_id IS 'foreign key to washington_scrambles.id';
COMMENT ON COLUMN washington_scrambles_peaks.geonameid IS 'foreign key to mountains.geonameid';

-- Add missing peaks
INSERT INTO mountains(geonameid, name, alternate_names, coordinates, country_code, admin_1_code, admin_2_code, admin_3_code, admin_4_code, elevation)
VALUES (900000000,'Coleman Pinnacle',null,'(48.820865,-121.740908)','US','WA','073',null,null,1955),
(900000001,'Bauerman Ridge',null,'(48.977161,-120.066728)','US','WA','047',null,null,2454),
(900000002,'Wallaby Peak',null,'(48.506773,-120.615238)','US','WA','047',null,null,2438),
(900000003,'Gilbert Mountain',null,'(48.480925,-120.581117)','US','WA','047',null,null,2446),
(900000004,'Camels Hump',null,'(48.359263,-120.565709)','US','WA','007',null,null,2444),
(900000005,'Buttermilk Ridge',null,'(48.266579,-120.435641)','US','WA','047',null,null,2521),
(900000006,'Cheops',null,'(48.196766,-120.349104)','US','WA','047',null,null,2523),
(900000007,'Switchback Peak','Cooney Mountain','(48.175612,-120.358225)','US','WA','047',null,null,2537),
(900000008,'Breccia Peak',null,'(48.123986,-121.302624)','US','WA','061',null,null,1978),
(900000009,'Camp Robber Peak',null,'(47.571167,-121.331948)','US','WA','033',null,null,1917),
(900000010,'La Bohn Peak',null,'(47.562486,-121.249868)','US','WA','033',null,null,2008),
(900000011,'Otter Point',null,'(47.576998,-121.271589)','US','WA','033',null,null,1939),
(900000012,'Paddy-Go-Easy Peak','Tucquala Peak','(47.535641,-121.040437)','US','WA','007',null,null,2080),
(900000013,'Paddy-Go-South Peak',null,'(47.538049,-121.054051)','US','WA','007',null,null,2002),
(900000014,'Paddy-Go-North Peak',null,'(47.548496,-121.065804)','US','WA','007',null,null,2004),
(900000015,'Enchantment Peak',null,'(47.489201,-120.802667)','US','WA','007',null,null,2603),
(900000016,'Bills Peak',null,'(47.427805,-120.892046)','US','WA','037',null,null,2109),
(900000017,'Bean Peak',null,'(47.420556,-120.861454)','US','WA','037',null,null,2056),
(900000018,'Volcanic Neck',null,'(47.426423,-120.859142)','US','WA','037',null,null,2013),
(900000019,'Hemlock Peak',null,'(47.4486,-121.458902)','US','WA','033',null,null,1696),
(900000020,'Mount Skookum','The Louvre','(47.408021,-121.000104)','US','WA','037',null,null,1950),
(900000021,'West Craggy Peak',null,'(48.762425,-120.346174)','US','WA','047',null,null,2552),
(900000022,'Echo Rock',null,'(46.906875,-121.800682)','US','WA','053',null,null,2400),
(900000023,'Banshee Peak',null,'(46.851115,-121.620636)','US','WA','053',null,null,2257),
(900000024,'Governors Ridge',null,'(46.86472,-121.573252)','US','WA','053',null,null,2013),
(900000025,'Mount Custer',null,'(48.988938,-121.249776)','US','WA','073',null,null,2613),
(900000026,'Raven Ridge',null,'(48.237898,-120.331964)','US','WA','047',null,null,2608),
(900000027,'Mox Peaks, NW Spire',null,'(48.948747,-121.262656)','US','WA','073',null,null,2563),
(900000028,'Dorado Needle',null,'(48.549794,-121.138595)','US','WA','057',null,null,2576),
(900000029,'Greenwood Mountain',null,'(48.185376,-120.85079)','US','WA','007',null,null,2564)
(900000030,'Luahna Peak',null,'(48.060669,-120.984974)','US','WA','007',null,null,2575),
(900000031,'Big Snagtooth',null,'(48.534047,-120.588402)','US','WA','047',null,null,2553),
(900000032,'The Palisades',null,'(46.947738,-121.604522)','US','WA','053',null,null,2147)
;

-- Fix Data
UPDATE mountains SET name = 'Mount Carru' WHERE geonameid = 5789242;

CREATE TABLE ad1tmp (
    code            text PRIMARY KEY,
    name            text NOT NULL,
    ascii_name      text NOT NULL,
    geonameid       integer NOT NULL
);

CREATE TABLE ad2tmp (
    code            text PRIMARY KEY,
    name            text NOT NULL,
    ascii_name      text NOT NULL,
    geonameid       integer NOT NULL
);

CREATE TABLE peak_lists (
    id              serial,
    name            text NOT NULL,
    alternate_name  text,
    description     text NOT NULL,
    country_code    text NOT NULL,
    admin_1_code    text,
    admin_2_code    text
);

CREATE TABLE peak_lists_peaks (
    peak_lists_id   integer NOT NULL,
    geonameid       integer NOT NULL
);
