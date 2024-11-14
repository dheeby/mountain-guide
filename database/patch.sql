
INSERT INTO peak_lists(name,alternate_name,description,country_code,admin_1_code) VALUES 
('The Bulger Top 100','Washington Top 100','The original list of the top 100 highest peaks in Washington, created by The Bulgers peakbaggers.','US','WA'),
('NH48','New Hampshire 4000 Footers','Mountains with an elevation over 4000 feet in New Hampshire.','US','NH')
;

INSERT INTO peak_lists_peaks(peak_lists_id,geonameid) VALUES 
(1, 5807840), -- Mount Rainier
(1, 5785294), -- Mount Adams
(1, 5801358), -- Little Tahoma
(1, 5786191), -- Mount Baker
(1, 5795513), -- Glacier Peak
(1, 5787756), -- Bonanza Peak
(1, 5812371), -- Mount Stuart
(1, 5794279), -- Mount Fernow
(1, 5795770), -- Goode Mountain
(1, 5810348), -- Mount Shuksan
(1, 5788400), -- Mount Buckner
(1, 5809992), -- Seven Fingered Jack
(1, 5801454), -- Mount Logan
(1, 5798531), -- Jack Mountain
(1, 5802650), -- Mount Maude
(1, 5811667), -- Mount Spickard
(1, 5787428), -- Black Peak
(1, 5808091), -- Mount Redoubt
(1, 5790905), -- Copper Peak
(1, 5805191), -- North Gardner Mountain
(1, 5792582), -- Dome Peak
(1, 5795258), -- Gardner Mountain
(1, 5787826), -- Boston Peak
(1, 5810485), -- Silver Star Mountain
(1, 5793527), -- Eldorado Peak
(1, 5792723), -- Dragontail Peak
(1, 5794708), -- Forbidden Peak
(1, 5803191), -- Mesahchie Peak
(1, 5805924), -- Oval Peak
(1, 5794819), -- Fortress Mountain
(1, 5800148), -- Mount Lago
(1, 5808506), -- Robinson Mountain
(1, 5790485), -- Colchuck Peak
(1, 5812008), -- Star Peak
(1, 5808176), -- Remmel Mountain
(1, 5799484), -- Katsuk Peak
(1, 5809162), -- Sahale Mountain
(1, 5789035), -- Cannon Mountain
(1, 900000025), -- Mount Custer
(1, 5807504), -- Ptarmigan Peak
(1, 5810229), -- Sherpa Peak
(1, 5790196), -- Clark Mountain
(1, 5789434), -- Cathedral Peak
(1, 5799757), -- Kimtah Peak
(1, 5789242), -- Mount Carru
(1, 5803838), -- Monument Peak
(1, 5789161), -- Cardinal Peak
(1, 5805878), -- Osceola Peak
(1, 900000026), -- Raven Ridge
(1, 5788346), -- Buck Mountain
(1, 5812287), -- Storm King
(1, 900000015), -- Enchantment Peak
(1, 5808248), -- Reynolds Peak
(1, 5802526), -- Martin Peak
(1, 5807433), -- Primus Peak
(1, 5791781), -- Dark Peak
(1, 5804214), -- Mox Peaks, SE Spire
(1, 5789347), -- Cashmere Mountain
(1, 5799901), -- Klawatti Peak
(1, 5807777), -- Mount Rahm
(1, 5797803), -- Horseshoe Peak
(1, 5787145), -- Big Craggy Peak
(1, 5797651), -- Hoodoo Peak
(1, 5801767), -- Lost Peak
(1, 5790043), -- Chiwawa Mountain
(1, 5785838), -- Argonaut Peak
(1, 5813820), -- Tower Mountain
(1, 5787274), -- Mount Bigelow
(1, 900000028), -- Dorado Needle
(1, 5810541), -- Sinister Peak
(1, 5801069), -- Little Annapurna
(1, 5793747), -- Emerald Peak
(1, 5792915), -- Dumbell Mountain
(1, 900000029), -- Greenwood Mountain
(1, 900000027), -- Mox Peaks, NW Spire
(1, 5809551), -- Saska Peak
(1, 5806912), -- Pinnacle Mountain
(1, 5786041), -- Azurite Peak
(1, 900000030), -- Luahna Peak
(1, 5787453), -- Blackcap Mountain
(1, 5791143), -- Courtney Peak
(1, 5811525), -- South Spectacle Butte
(1, 5802527), -- Martin Peak
(1, 5800285), -- Lake Mountain
(1, 5795735), -- Golden Horn
(1, 900000021), -- West Craggy
(1, 5809218), -- Mount Saint Helens
(1, 5802767), -- McClellan Peak
(1, 5792349), -- Devore Peak
(1, 5785650), -- Amphitheater Mountain
(1, 5811056), -- Snowfield Peak
(1, 5786001), -- Austera Peak
(1, 5816284), -- Windy Peak
(1, 5790965), -- Cosho Peak
(1, 900000031), -- Big Snagtooth
(1, 5794771), -- Mount Formidable
(1, 5785256), -- Abernathy Peak
(1, 900000007), -- Switchback Peak
(1, 5814122), -- Tupshin Peak
(1, 5794640) -- Flora Mountain
;

UPDATE mountains SET elevation = 4392 WHERE geonameid = 5807840;
UPDATE mountains SET elevation = 3741 WHERE geonameid = 5785294;
UPDATE mountains SET elevation = 3394 WHERE geonameid = 5801358;
UPDATE mountains SET elevation = 3286 WHERE geonameid = 5786191;
UPDATE mountains SET elevation = 3212 WHERE geonameid = 5795513;
UPDATE mountains SET elevation = 2899 WHERE geonameid = 5787756;
UPDATE mountains SET elevation = 2869 WHERE geonameid = 5812371;
UPDATE mountains SET elevation = 2819 WHERE geonameid = 5794279;
UPDATE mountains SET elevation = 2804 WHERE geonameid = 5795770;
UPDATE mountains SET elevation = 2783 WHERE geonameid = 5810348;
UPDATE mountains SET elevation = 2777 WHERE geonameid = 5788400;
UPDATE mountains SET elevation = 2774 WHERE geonameid = 5809992;
UPDATE mountains SET elevation = 2770 WHERE geonameid = 5801454;
UPDATE mountains SET elevation = 2763 WHERE geonameid = 5798531;
UPDATE mountains SET elevation = 2768 WHERE geonameid = 5802650;
UPDATE mountains SET elevation = 2737 WHERE geonameid = 5811667;
UPDATE mountains SET elevation = 2734 WHERE geonameid = 5787428;
UPDATE mountains SET elevation = 2734 WHERE geonameid = 5808091;
UPDATE mountains SET elevation = 2732 WHERE geonameid = 5790905;
UPDATE mountains SET elevation = 2730 WHERE geonameid = 5805191;
UPDATE mountains SET elevation = 2719 WHERE geonameid = 5792582;
UPDATE mountains SET elevation = 2712 WHERE geonameid = 5795258;
UPDATE mountains SET elevation = 2711 WHERE geonameid = 5787826;
UPDATE mountains SET elevation = 2705 WHERE geonameid = 5810485;
UPDATE mountains SET elevation = 2705 WHERE geonameid = 5793527;
UPDATE mountains SET elevation = 2694 WHERE geonameid = 5792723;
UPDATE mountains SET elevation = 2687 WHERE geonameid = 5794708;
UPDATE mountains SET elevation = 2681 WHERE geonameid = 5803191;
UPDATE mountains SET elevation = 2681 WHERE geonameid = 5805924;
UPDATE mountains SET elevation = 2670 WHERE geonameid = 5794819;
UPDATE mountains SET elevation = 2665 WHERE geonameid = 5800148;
UPDATE mountains SET elevation = 2660 WHERE geonameid = 5808506;
UPDATE mountains SET elevation = 2653 WHERE geonameid = 5790485;
UPDATE mountains SET elevation = 2649 WHERE geonameid = 5812008;
UPDATE mountains SET elevation = 2647 WHERE geonameid = 5808176;
UPDATE mountains SET elevation = 2649 WHERE geonameid = 5799484;
UPDATE mountains SET elevation = 2646 WHERE geonameid = 5809162;
UPDATE mountains SET elevation = 2633 WHERE geonameid = 5789035;
UPDATE mountains SET elevation = 2630 WHERE geonameid = 900000025;
UPDATE mountains SET elevation = 2626 WHERE geonameid = 5807504;
UPDATE mountains SET elevation = 2623 WHERE geonameid = 5810229;
UPDATE mountains SET elevation = 2622 WHERE geonameid = 5790196;
UPDATE mountains SET elevation = 2622 WHERE geonameid = 5789434;
UPDATE mountains SET elevation = 2621 WHERE geonameid = 5799757;
UPDATE mountains SET elevation = 2620 WHERE geonameid = 5789242;
UPDATE mountains SET elevation = 2619 WHERE geonameid = 5803838;
UPDATE mountains SET elevation = 2618 WHERE geonameid = 5789161;
UPDATE mountains SET elevation = 2617 WHERE geonameid = 5805878;
UPDATE mountains SET elevation = 2618 WHERE geonameid = 900000026;
UPDATE mountains SET elevation = 2599 WHERE geonameid = 5788346;
UPDATE mountains SET elevation = 2597 WHERE geonameid = 5812287;
UPDATE mountains SET elevation = 2597 WHERE geonameid = 900000015;
UPDATE mountains SET elevation = 2594 WHERE geonameid = 5808248;
UPDATE mountains SET elevation = 2594 WHERE geonameid = 5802526;
UPDATE mountains SET elevation = 2593 WHERE geonameid = 5807433;
UPDATE mountains SET elevation = 2592 WHERE geonameid = 5791781;
UPDATE mountains SET elevation = 2592 WHERE geonameid = 5804214;
UPDATE mountains SET elevation = 2591 WHERE geonameid = 5789347;
UPDATE mountains SET elevation = 2586 WHERE geonameid = 5799901;
UPDATE mountains SET elevation = 2585 WHERE geonameid = 5807777;
UPDATE mountains SET elevation = 2585 WHERE geonameid = 5797803;
UPDATE mountains SET elevation = 2582 WHERE geonameid = 5787145;
UPDATE mountains SET elevation = 2580 WHERE geonameid = 5797651;
UPDATE mountains SET elevation = 2580 WHERE geonameid = 5801767;
UPDATE mountains SET elevation = 2578 WHERE geonameid = 5790043;
UPDATE mountains SET elevation = 2578 WHERE geonameid = 5785838;
UPDATE mountains SET elevation = 2574 WHERE geonameid = 5813820;
UPDATE mountains SET elevation = 2573 WHERE geonameid = 5787274;
UPDATE mountains SET elevation = 2573 WHERE geonameid = 900000028;
UPDATE mountains SET elevation = 2573 WHERE geonameid = 5810541;
UPDATE mountains SET elevation = 2573 WHERE geonameid = 5801069;
UPDATE mountains SET elevation = 2567 WHERE geonameid = 5793747;
UPDATE mountains SET elevation = 2567 WHERE geonameid = 5792915;
UPDATE mountains SET elevation = 2565 WHERE geonameid = 900000029;
UPDATE mountains SET elevation = 2592 WHERE geonameid = 900000027;
UPDATE mountains SET elevation = 2562 WHERE geonameid = 5809551;
UPDATE mountains SET elevation = 2560 WHERE geonameid = 5806912;
UPDATE mountains SET elevation = 2560 WHERE geonameid = 5786041;
UPDATE mountains SET elevation = 2560 WHERE geonameid = 900000030;
UPDATE mountains SET elevation = 2559 WHERE geonameid = 5787453;
UPDATE mountains SET elevation = 2558 WHERE geonameid = 5791143;
UPDATE mountains SET elevation = 2558 WHERE geonameid = 5811525;
UPDATE mountains SET elevation = 2553 WHERE geonameid = 5802527;
UPDATE mountains SET elevation = 2551 WHERE geonameid = 5800285;
UPDATE mountains SET elevation = 2550 WHERE geonameid = 5795735;
UPDATE mountains SET elevation = 2550 WHERE geonameid = 900000021;
UPDATE mountains SET elevation = 2550 WHERE geonameid = 5809218;
UPDATE mountains SET elevation = 2549 WHERE geonameid = 5802767;
UPDATE mountains SET elevation = 2548 WHERE geonameid = 5792349;
UPDATE mountains SET elevation = 2548 WHERE geonameid = 5785650;
UPDATE mountains SET elevation = 2544 WHERE geonameid = 5811056;
UPDATE mountains SET elevation = 2540 WHERE geonameid = 5786001;
UPDATE mountains SET elevation = 2540 WHERE geonameid = 5816284;
UPDATE mountains SET elevation = 2540 WHERE geonameid = 5790965;
UPDATE mountains SET elevation = 2539 WHERE geonameid = 900000031;
UPDATE mountains SET elevation = 2537 WHERE geonameid = 5794771;
UPDATE mountains SET elevation = 2536 WHERE geonameid = 5785256;
UPDATE mountains SET elevation = 2536 WHERE geonameid = 900000007;
UPDATE mountains SET elevation = 2536 WHERE geonameid = 5814122;
UPDATE mountains SET elevation = 2536 WHERE geonameid = 5794640;

-- 0.3048
INSERT INTO peak_lists_peaks(peak_lists_id,geonameid) VALUES 
(2,5094284), --Washington, 6288
(2,5082535), --Adams, 5774
(2,5088099), --Jefferson, 5712
(2,5089744), --Monroe, 5384
(2,5089161), --Madison, 5367
(2,5088464), --Lafayette, 5260, 1603
(2,5088715), --Lincoln, 5089
(2,5092948), --South Twin, 4902
(2,5084275), --Carter Dome, 4832
(2,5089810), --Moosilauke, 4802
(2,5085830), --Eisenhower, 4780
(2,5090435), --North Twin, 4761
(2,5084245), --Carrigain, 4700
(2,5083647), --Bond, 4698
(2,5089530), --Middle Carter, 4610
(2,6692215), --West Bond, 4540
(2,5086461), --Garfield, 4500
(2,5088662), --Liberty, 4459
(2,5092872), --South Carter, 4430
(2,5094738), --Wildcat, A peak, 4422, 1348
(2,5087160), --Hancock, 4420
(2,5092932), --South Kinsman, 4358
(2,5086073), --Field, 4340
(2,5090694), --Osceola, 4340
(2,5086231), --Flume, 4328
(2,6697273), --South Hancock, 4319
(2,5091079), --Pierce, 4310
(2,5090406), --North Kinsman, 4293
(2,5094762), --Willey, 4285
(2,5084711), --Bondcliff, 4265
(2,8125984), --Zealand, 4260
(2,5090405), --North Tripyramid, 4180
(2,5084004), --Cabot, 4170
(2,5085730), --East Osceola, 4156
(2,5089537), --Middle Tripyramid, 4140
(2,5084179), --Cannon, 4100, 1249
(2,5087056), --Hale, 4054, 1236
(2,5088054), --Jackson, 4052
(2,5093719), --Tom, 4051, 1234.7448
(2,6697223), --Wildcat, D Peak, 4050, 1234.44
(2,5089825), --Moriah, 4049, 1234.1352
(2,5090835), --Passaconaway, 4043, 1232
(2,5090737), --Owl's Head, 4025
(2,5086441), --Galehead, 4024, 1226
(2,5094654), --Whiteface, 4020
(2,5094324), --Waumbek, 4006
(2,5088020), --Isolation, 4004, 1220.4192
(2,5093513) --Tecumseh, 4003, 1220.1144
;

UPDATE mountains SET elevation = 4392 WHERE geonameid = 5807840;
UPDATE mountains SET elevation = 1603 WHERE geonameid = 5088464;
UPDATE mountains SET elevation = 1348 WHERE geonameid = 5094738;
UPDATE mountains SET elevation = 1249 WHERE geonameid = 5084179;
UPDATE mountains SET elevation = 1236 WHERE geonameid = 5087056;
UPDATE mountains SET elevation = 1234.7448 WHERE geonameid = 5093719;
UPDATE mountains SET elevation = 1234.44 WHERE geonameid = 6697223;
UPDATE mountains SET elevation = 1234.1352 WHERE geonameid = 5089825;
UPDATE mountains SET elevation = 1232 WHERE geonameid = 5090835;
UPDATE mountains SET elevation = 1226 WHERE geonameid = 5086441;
UPDATE mountains SET elevation = 1220.4192 WHERE geonameid = 5088020;
UPDATE mountains SET elevation = 1220.1144 WHERE geonameid = 5093513;
