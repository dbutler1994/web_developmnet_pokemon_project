CREATE DATABASE  IF NOT EXISTS `pokemon_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pokemon_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: pokemon_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ability`
--

DROP TABLE IF EXISTS `ability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ability` (
  `ability_id` int NOT NULL AUTO_INCREMENT,
  `ability_type_id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`ability_id`),
  KEY `ability_type_id` (`ability_type_id`),
  CONSTRAINT `ability_ibfk_1` FOREIGN KEY (`ability_type_id`) REFERENCES `ability_type` (`ability_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ability`
--

LOCK TABLES `ability` WRITE;
/*!40000 ALTER TABLE `ability` DISABLE KEYS */;
INSERT INTO `ability` VALUES (7,1,'Strikes Back','Whenever your opponent\'s attack damages Machamp (even if Machamp is Knoced Out), this power does 10 damage to attacking Pokémon. (Don\'t apply Weakness and Resistance.) This power can\'t be used if Machamp is already Asleep, Confused, or Paralyzed when your opponent attacks.'),(8,1,'Energy Trans','As often as you like during your turn (before your attack), you may take 1 Grass Energy card attached to 1 of your Pokémon and attach it to a different one. This power can\'t be used if Venusaur is Asleep, Confused, or Paralyzed.'),(9,1,'Damage Swap','As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don\'t Knock Out that Pokémon. This power can\'t be used if Alakazam is Asleep, Confused, or Paralyzed.'),(10,1,'Rain Dance','As often as you like during your turn (before your attack), you may attach 1 Water Energy Card to 1 of your Water Pokémon. (This doesn\'t use up your 1 Energy card attachment for the turn.) This power can\'t be used if Blastoise is Asleep, Confused, or Paralyzed.'),(11,1,'Buzzap','At any time during your turn (before your attack) you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, chose a type of Energy. Electrode is now an Energy card (instead of a Pokémon) that provides 2 energy of that type. This power can\'t be used if Electrode is Asleep, Confused, or Paralyzed.'),(12,1,'Energy Burn','As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can\'t be used if Charizard is Asleep, Confused, or Paralyzed.'),(15,2,NULL,'Play Clefairy Doll as if it were a Basic Pokémon. While in play, Clefairy Doll counts as a Pokémon (instead of a Trainer card). Clefairy Doll has no attacks, can\'t retreat, and can\'t be Asleep, Confused, Paralyzed, or Poisoned. If Clefairy Doll is Knocked Out, it doesn\'t count as a Knocked Out Pokémon. At any time during your turn before your attack, you may discard Clefairy Doll.'),(16,2,NULL,'Discard 2 of the other cards from your hand in order to search your deck for any card and put it into your hand. Shuffle your deck afterward.'),(17,2,NULL,'Choose 1 of your own Pokémon in play and a Stage of Evolution. Discard all Evolution cards of that Stage or higher attached to that Pokémon. That Pokémon is no longer Asleep, Confused, Paralyzed, Poisoned, or anything else that might be the result of an attack (just as if you had evolved it).'),(18,2,NULL,'Your opponent shuffles his or her hand into his or her deck, then draws 7 cards.'),(19,2,NULL,'Discard 2 of the other cards from your hand in order to put a Trainer card from your discard pile into your hand.'),(20,2,NULL,'You and your opponent show each other your hands, then shuffle all the Trainer cards from your hands into your decks.'),(21,2,NULL,'Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can only play this card when you would be allowed to evolve that Pokémon anyway.'),(22,2,NULL,'Trade 1 of the Basic Pokémon or Evolution cards in your hand for 1 of the Basic Pokémon or Evolution cards from your deck. Show both cards to your opponent. Shuffle your deck afterward.'),(23,2,NULL,'Choose 1 of your own Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)'),(24,2,NULL,'Discard 1 Energy card attached to 1 of your own Pokémon in order to choose 1 of your opponent\'s Pokémon and up to 2 Energy cards attached to it. Discard those energy cards.'),(25,2,NULL,'Attach Defender to 1 of your Pokémon. At the end of your opponent\'s next turn, discard Defender. Damage done to that Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).'),(26,2,NULL,'Trade 1 of the other cards in your hand for up to 2 basic Energy cards from your discard pile.'),(27,2,NULL,'Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.'),(28,2,NULL,'Shuffle 2 of the other cards from your hand into your deck in order to draw a card.'),(29,2,NULL,'Attach PlusPower to your Active Pokémon. At the end of your turn, discard PlusPower. If this Pokémon\'s attack does damage to the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon.'),(30,2,NULL,'Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon.'),(31,2,NULL,'Choose 1 Basic Pokémon card from your opponent\'s discard pile and put it onto his or her Bench. (You can\'t play Pokémon Flute if your opponent\'s Bench is full.)'),(32,2,NULL,'Look at up to 5 cards from the top of your deck and rearrange them as you like.'),(33,2,NULL,'Discard your hand, then draw 7 cards.'),(34,2,NULL,'Put 1 Basic Pokémon card from your discard pile onto your Bench. Put damage counters on that Pokémon equal to half its HP (rounded down to the nearest 10). (You can\'t play Revive if your Bench is full.)'),(35,2,NULL,'Discard 1 Energy card attached to 1 of your own Pokémon in order to remove up to 4 damage counters from that Pokémon.'),(36,2,NULL,'Draw 2 cards.'),(37,2,NULL,'Choose 1 Energy card attached to 1 of your opponent\'s Pokémon and discard it.'),(38,2,NULL,'Choose 1 of your opponent\'s Benched Pokémon and switch it with his or her Active Pokémon.'),(39,2,NULL,'Remove up to 2 damage counters from 1 of your Pokémon.'),(40,2,NULL,'Switch 1 of your own Benched Pokémon with your Active Pokémon.');
/*!40000 ALTER TABLE `ability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ability_type`
--

DROP TABLE IF EXISTS `ability_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ability_type` (
  `ability_type_id` int NOT NULL AUTO_INCREMENT COMMENT 'ability_type_id',
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ability_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ability_type`
--

LOCK TABLES `ability_type` WRITE;
/*!40000 ALTER TABLE `ability_type` DISABLE KEYS */;
INSERT INTO `ability_type` VALUES (1,'Pokemon Power'),(2,'Trainer Ability');
/*!40000 ALTER TABLE `ability_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `account_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (8,'aaaa','ssss','Mist101'),(11,'aaaaaaaaaa','aasssssssss','Brock'),(12,'Ask','Ketchup','AshleyK');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_email`
--

DROP TABLE IF EXISTS `account_email`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_email` (
  `account_email_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`account_email_id`),
  UNIQUE KEY `account_id` (`account_id`),
  CONSTRAINT `account_email_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_email`
--

LOCK TABLES `account_email` WRITE;
/*!40000 ALTER TABLE `account_email` DISABLE KEYS */;
INSERT INTO `account_email` VALUES (8,8,'fake1@mail.com'),(11,11,'fake2@mail.com'),(12,12,'fake3@mail.com');
/*!40000 ALTER TABLE `account_email` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_password`
--

DROP TABLE IF EXISTS `account_password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_password` (
  `account_password_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `password` varbinary(255) NOT NULL,
  PRIMARY KEY (`account_password_id`),
  UNIQUE KEY `account_id` (`account_id`),
  CONSTRAINT `account_password_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_password`
--

LOCK TABLES `account_password` WRITE;
/*!40000 ALTER TABLE `account_password` DISABLE KEYS */;
INSERT INTO `account_password` VALUES (8,8,_binary '$2b$10$kYTZE/J60kfJe2jjwJmtNeq6Da0.M2NhQKULRsoPw1YWy0mgi5/S6'),(11,11,_binary '$2b$10$DYk9.e6yHk2rXtER4e40e.HUMXmDzz6jDhaJvYG243XaVvApD1JcC'),(12,12,_binary '$2b$10$z8mGg0xac0dfZG4K9sAHUegwTrTka.Urb8/Niu3dFBlpo28EWmfba');
/*!40000 ALTER TABLE `account_password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attack`
--

DROP TABLE IF EXISTS `attack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attack` (
  `attack_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(1048) DEFAULT NULL,
  `damage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`attack_id`)
) ENGINE=InnoDB AUTO_INCREMENT=561 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attack`
--

LOCK TABLES `attack` WRITE;
/*!40000 ALTER TABLE `attack` DISABLE KEYS */;
INSERT INTO `attack` VALUES (447,'String Shot','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','10'),(448,'Bite',NULL,'20'),(449,'Psychic','Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.','10+'),(450,'Barrier','Discard 1 Energy card attached to Mewtwo in order to use this attack. During your opponent\'s next turn, prevent all effects of attacks, including damage, done to Mewtwo.',NULL),(451,'Bite',NULL,'20'),(452,'Super Fang','Does damage to the Defending Pokémon equal to half the Defending Pokémon\'s remaining HP (rounded up to the nearest 10).','?'),(453,'Withdraw','Flip a coin. If heads, prevent all damage done to Wartortle during your opponent\'s next turn. (Any other effects of attacks still happen.)',NULL),(454,'Bite',NULL,'40'),(455,'Low Kick',NULL,'20'),(456,'Water Gun','Does 10 damage plus 10 damage for each Energy attached to Poliwag but not used to pay for this attack\'s Energy cost. Extra Energy after the end don\'t count.','10+'),(457,'Twineedle','Flip 2 coins. This attack does 30 damage times the number of heads.','30x'),(458,'Poison Sting','Flip a coin. If heads, the Defending Pokémon is now Poisoned.','40'),(459,'Thundershock','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','10'),(460,'Thunderpunch','Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Electabuzz does 10 damage to itself.','30+'),(461,'Jab',NULL,'20'),(462,'Special Punch',NULL,'40'),(463,'Recover','Discard 1 Energy card attached to Kadabra in order use this attack. Remove all damage counters from Kadabra.',NULL),(464,'Super Psy',NULL,'50'),(465,'Aurora Beam',NULL,'50'),(466,'Ice Beam','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','30'),(467,'Stiffen','Flip a coin. If heads, prevent all damage done to Kakuna during your opponent\'s next turn. (Any other effects of attacks still happen.)',NULL),(468,'Poisonpowder','Flip a coin. If heads, the Defending Pokémon is now Poisoned.','20'),(469,'Slap',NULL,'20'),(470,'Leech Seed','Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.','20'),(471,'Whirlwind','If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)','10'),(472,'Double Kick','Flip 2 coins. This attack does 30 damage times the number of heads.','30x'),(473,'Horn Drill',NULL,'50'),(474,'Thunder Wave','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','30'),(475,'Selfdestruct','Does 20 damage to each Pokémon on each player\'s Bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Magneton does 80 damage to itself.','80'),(476,'Gnaw',NULL,'10'),(477,'Thunder Jolt','Flip a coin. If tails, Pikachu does 10 damage to itself.','30'),(478,'Fury Attack','Flip 2 coins. This attack does 10 damage times the number of heads.','10x'),(479,'Poison Sting','Flip a coin. If heads, Defending Pokémon is now Poisoned.','10'),(480,'Smash Kick',NULL,'20'),(481,'Flame Tail',NULL,'30'),(482,'Whirlwind','If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)','20'),(483,'Mirror Move','If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokémon.',NULL),(484,'Dragon Rage',NULL,'50'),(485,'Bubblebeam','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','40'),(486,'Sing','Flip a coin. If heads, the Defending Pokémon is now Asleep.',NULL),(487,'Metronome','Choose 1 of Defending Pokémon\'s attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding energy cards. (No matter what type the defender is, Clefairy\'s type is still Colorless.)',NULL),(488,'Thunder','Flip a coin. If tails, Zapdos does 30 damage to itself.','60'),(489,'Thunderbolt','Discard all Energy cards attached to Zapdos in order to use this attack.','100'),(490,'Headbutt',NULL,'10'),(491,'Sleeping Gas','Flip a coin. If heads, the Defending Pokémon is now Asleep.',NULL),(492,'Destiny Bond','Discard 1 Energy card attached to Gastly in order to use this attack. If a Pokémon Knocks Out Gastly during your opponent\'s next turn, Knock Out that Pokémon.',NULL),(493,'Lure','If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.',NULL),(494,'Fire Blast','Discard 1 Energy card attached to Ninetales in order to use this attack.','80'),(495,'Slash',NULL,'30'),(496,'Flamethrower','Discard 1 Energy card attached to Charmeleon in order to use this attack.','50'),(497,'Flamethrower','Discard 1 Energy card attached to Arcanine in order to use this attack.','50'),(498,'Take Down','Arcanine does 30 damage to itself.','80'),(499,'Slash',NULL,'40'),(500,'Earthquake','Does 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)','70'),(501,'Leek Slap','Flip a coin. If tails, this attack does nothing. Either way, you can\'t use this attack again as long as Farfetch\'d stays in play (even putting Farfetch\'d on the Bench won\'t let you use it again.)','30'),(502,'Pot Smash',NULL,'30'),(503,'Vine Whip',NULL,'30'),(504,'Poisonpowder','The Defending Pokémon is now Poisoned.','20'),(505,'Pound',NULL,'10'),(506,'Recover','Discard 1 Energy card to Starmie in order to use this attack. Remove all damage counters from Starmie.',NULL),(507,'Star Freeze','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','20'),(508,'Seismic Toss',NULL,'60'),(509,'Solarbeam',NULL,'60'),(510,'Dig',NULL,'10'),(511,'Mud Slap',NULL,'30'),(512,'Tackle',NULL,'10'),(513,'Flail','Does 10 damage times number of damage counters on Magikarp.','10x'),(514,'Psyshock','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','10'),(515,'Foul Gas','Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused.','10'),(516,'Pound',NULL,'10'),(517,'Confuse Ray','Flip a coin. If heads, the Defending Pokémon is now Confused.','10'),(518,'Bubble','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','10'),(519,'Withdraw','Flip a coin. If heads, prevent all damage done to Squirtle during your opponent\'s next turn. (Any other effects of attacks still happen.)',NULL),(520,'Scrunch','Flip a coin. If heads, prevent all damage done to Chansey during your opponent\'s next turn. (Any other effects of attacks still happen.)',NULL),(521,'Double-edge','Chansey does 80 damage to itself.','80'),(522,'Karate Chop','Does 50 damage minus 10 for each damage counter on Machoke.','50-'),(523,'Submission','Machoke does 20 damage to itself.','60'),(524,'Bind','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','20'),(525,'Poisonpowder','The Defending Pokémon is now Poisoned.','20'),(526,'Tackle',NULL,'10'),(527,'Confuse Ray','Flip a coin. If heads, the Definding Pokémon is now Confused.','30'),(528,'Hypnosis','The Defending Pokémon is now Asleep.',NULL),(529,'Dream Eater','You can\'t this attack unless the Defending Pokémon is Asleep.','50'),(530,'Hydro Pump','Does 40 damage plus 10 more damage for each attached Water Energy attached to Blastoise but not used to pay for this attack\'s Energy cost. Extra Water Energy after the 2nd doesn\'t count.','40+'),(531,'Fire Punch',NULL,'30'),(532,'Flamethrower','Discard 1 Energy card attached to Magmar in order to use this attack.','50'),(533,'Flare',NULL,'20'),(534,'Conversion 1','If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.',NULL),(535,'Conversion 2','Change Porygon\'s Resistance to a type of your choice other than Colorless.',NULL),(536,'Amnesia','Choose 1 of defenders attacks. Defender cannot use that attack next turn.',NULL),(537,'Doubleslap','Flip 2 coins. This attack does 30 damage times number of heads.','30x'),(538,'Confuse Ray','Flip a coin. If heads, the Defending Pokémon is now Confused.','10'),(539,'Rock Throw',NULL,'10'),(540,'Harden','During opponent\'s next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)',NULL),(541,'Thunder Wave','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','10'),(542,'Selfdestruct','Does 10 damage to each Pokémon on each player\'s Bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Magnemite does 40 damage to itself.','40'),(543,'Sand-attack','If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.','10'),(544,'Water Gun','Does 30 damage plus 10 more damage for each Water Energy attached to Poliwrath but not used to pay for this attack\'s Energy cost. Extra Water Energy after the 2nd doesn\'t count.','30+'),(545,'Whirlpool','If the Defending Pokémon has any Energy cards attached to it, choose 1 and discard it.','40'),(546,'Scratch',NULL,'10'),(547,'Ember','Discard 1 Energy card attached to Charmander in order to use this attack.','30'),(548,'Agility','Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Raichu.','20'),(549,'Thunder','Flip a coin. If tails, Raichu does 30 damage to itself.','60'),(550,'Slam','Flip 2 coins. This attack does 30 damage times the number of heads.','30x'),(551,'Hyper Beam','If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.','20'),(552,'Horn Hazard','Flip a coin. If tails, this attack does nothing.','30'),(553,'Thrash','Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.','30+'),(554,'Toxic','The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player\'s turn (even if it was already Poisoned).','20'),(555,'Stiffen','Flip a coin. If heads, prevent all damage done to Metapod during your opponent\'s next turn. (Any other effects of attacks still happen.)',NULL),(556,'Stun Spore','Flip a coin. If heads, the Defending Pokémon is now Paralyzed.','20'),(557,'Electric Shock','Flip a coin. If tails, Electrode does 10 damage to itself.','50'),(558,'Fire Spin','Discard 2 Energy cards attached to Charizard in order to use this attack.','100'),(559,'Doubleslap','Flip 2 coins. This attack does 10 damage times the number of heads.','10x'),(560,'Meditate','Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.','20+');
/*!40000 ALTER TABLE `attack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attack_cost`
--

DROP TABLE IF EXISTS `attack_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attack_cost` (
  `attack_cost_id` int NOT NULL AUTO_INCREMENT,
  `attack_id` int NOT NULL,
  `energy_type_id` int NOT NULL,
  `amount` int NOT NULL,
  PRIMARY KEY (`attack_cost_id`),
  KEY `attack_id` (`attack_id`),
  KEY `energy_type_id` (`energy_type_id`),
  CONSTRAINT `attack_cost_ibfk_1` FOREIGN KEY (`attack_id`) REFERENCES `attack` (`attack_id`),
  CONSTRAINT `attack_cost_ibfk_2` FOREIGN KEY (`energy_type_id`) REFERENCES `energy_type` (`energy_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attack_cost`
--

LOCK TABLES `attack_cost` WRITE;
/*!40000 ALTER TABLE `attack_cost` DISABLE KEYS */;
INSERT INTO `attack_cost` VALUES (1,447,113,1),(2,448,114,1),(3,449,115,1),(4,449,114,1),(5,450,115,2),(6,451,114,1),(7,452,114,3),(8,453,116,1),(9,453,114,1),(10,454,116,1),(11,454,114,2),(12,455,117,1),(13,456,116,1),(14,457,114,3),(15,458,113,3),(16,459,118,1),(17,460,118,1),(18,460,114,1),(19,461,117,1),(20,462,117,2),(21,462,114,1),(22,463,115,2),(23,464,115,2),(24,464,114,1),(25,465,116,2),(26,465,114,1),(27,466,116,2),(28,466,114,2),(29,467,114,2),(30,468,113,2),(31,469,116,1),(32,470,113,2),(33,471,114,2),(34,472,113,1),(35,472,114,2),(36,473,113,2),(37,473,114,2),(38,474,118,2),(39,474,114,1),(40,475,118,2),(41,475,114,2),(42,476,114,1),(43,477,118,1),(44,477,114,1),(45,478,114,1),(46,479,113,1),(47,480,114,2),(48,481,119,2),(49,482,114,2),(50,483,114,3),(51,484,116,3),(52,485,116,4),(53,486,114,1),(54,487,114,3),(55,488,118,3),(56,488,114,1),(57,489,118,4),(58,490,116,1),(59,491,115,1),(60,492,115,1),(61,492,114,1),(62,493,114,2),(63,494,119,4),(64,495,114,3),(65,496,119,2),(66,496,114,1),(67,497,119,2),(68,497,114,1),(69,498,119,2),(70,498,114,2),(71,499,117,2),(72,499,114,1),(73,500,117,4),(74,501,114,1),(75,502,114,3),(76,503,113,1),(77,503,114,2),(78,504,113,3),(79,505,114,1),(80,506,116,2),(81,507,116,1),(82,507,114,2),(83,508,117,3),(84,508,114,1),(85,509,113,4),(86,510,117,1),(87,511,117,2),(88,512,114,1),(89,513,116,1),(90,514,114,1),(91,515,113,2),(92,516,114,1),(93,517,115,2),(94,518,116,1),(95,519,116,1),(96,519,114,1),(97,520,114,2),(98,521,114,4),(99,522,117,2),(100,522,114,1),(101,523,117,2),(102,523,114,2),(103,524,113,1),(104,524,114,1),(105,525,113,3),(106,526,114,1),(107,527,115,3),(108,528,115,1),(109,529,115,2),(110,530,116,3),(111,531,119,2),(112,532,119,2),(113,532,114,1),(114,533,119,1),(115,533,114,1),(116,534,114,1),(117,535,114,2),(118,536,116,2),(119,537,116,2),(120,537,114,1),(121,538,119,2),(122,539,117,1),(123,540,117,2),(124,541,118,1),(125,542,118,1),(126,542,114,1),(127,543,117,1),(128,544,116,2),(129,544,114,1),(130,545,116,2),(131,545,114,2),(132,546,114,1),(133,547,119,1),(134,547,114,1),(135,548,118,1),(136,548,114,2),(137,549,118,3),(138,549,114,1),(139,550,114,3),(140,551,114,4),(141,552,113,1),(142,553,113,1),(143,553,114,2),(144,554,113,3),(145,555,114,2),(146,556,113,2),(147,557,118,3),(148,558,119,4),(149,559,115,1),(150,560,115,2),(151,560,114,1);
/*!40000 ALTER TABLE `attack_cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `card_id` int NOT NULL AUTO_INCREMENT,
  `card_name_id` int NOT NULL,
  `card_number` int NOT NULL,
  `evolves_from` int DEFAULT NULL,
  `category_id` int NOT NULL,
  `release_set_id` int NOT NULL,
  `evolution_stage_id` int DEFAULT NULL,
  `regulation_mark_id` int DEFAULT NULL,
  `illustrator_id` int NOT NULL,
  `rarity_id` int NOT NULL,
  `health` int DEFAULT NULL,
  PRIMARY KEY (`card_id`),
  KEY `card_name_id` (`card_name_id`),
  KEY `evolves_from` (`evolves_from`),
  KEY `release_set_id` (`release_set_id`),
  KEY `evolution_stage_id` (`evolution_stage_id`),
  KEY `regulation_mark_id` (`regulation_mark_id`),
  KEY `illustrator_id` (`illustrator_id`),
  KEY `rarity_id` (`rarity_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `card_ibfk_1` FOREIGN KEY (`card_name_id`) REFERENCES `card_name` (`card_name_id`),
  CONSTRAINT `card_ibfk_2` FOREIGN KEY (`evolves_from`) REFERENCES `card_name` (`card_name_id`),
  CONSTRAINT `card_ibfk_3` FOREIGN KEY (`release_set_id`) REFERENCES `release_set` (`release_set_id`),
  CONSTRAINT `card_ibfk_4` FOREIGN KEY (`evolution_stage_id`) REFERENCES `evolution_stage` (`evolution_stage_id`),
  CONSTRAINT `card_ibfk_5` FOREIGN KEY (`regulation_mark_id`) REFERENCES `regulation_mark` (`regulation_mark_id`),
  CONSTRAINT `card_ibfk_6` FOREIGN KEY (`illustrator_id`) REFERENCES `illustrator` (`illustrator_id`),
  CONSTRAINT `card_ibfk_7` FOREIGN KEY (`rarity_id`) REFERENCES `rarity` (`rarity_id`),
  CONSTRAINT `card_ibfk_8` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=502 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (400,45,45,NULL,10,1,2,NULL,1,1,40),(401,61,61,NULL,10,1,2,NULL,2,1,30),(402,10,10,NULL,10,1,2,NULL,1,2,60),(403,74,74,NULL,11,1,NULL,NULL,4,2,NULL),(404,40,40,NULL,10,1,3,NULL,1,3,60),(405,42,42,63,10,1,3,NULL,1,3,70),(406,52,52,NULL,10,1,2,NULL,2,1,50),(407,59,59,NULL,10,1,2,NULL,1,1,40),(408,17,17,33,10,1,4,NULL,1,2,80),(409,76,76,NULL,11,1,NULL,NULL,1,2,NULL),(410,72,72,NULL,11,1,NULL,NULL,4,2,NULL),(411,20,20,NULL,10,1,2,NULL,1,2,70),(412,7,7,NULL,10,1,2,NULL,1,2,70),(413,32,32,43,10,1,3,NULL,1,3,60),(414,25,25,41,10,1,3,NULL,2,3,80),(415,81,81,NULL,11,1,NULL,NULL,4,3,NULL),(416,33,33,69,10,1,3,NULL,4,3,80),(417,65,65,NULL,10,1,2,NULL,4,1,40),(418,44,44,NULL,10,1,2,NULL,2,1,40),(419,57,57,NULL,10,1,2,NULL,1,1,40),(420,37,37,55,10,1,3,NULL,2,3,60),(421,86,86,NULL,11,1,NULL,NULL,4,3,NULL),(422,9,9,53,10,1,3,NULL,4,2,60),(423,102,102,NULL,12,1,2,NULL,4,1,NULL),(424,93,93,NULL,11,1,NULL,NULL,4,1,NULL),(425,78,78,NULL,11,1,NULL,NULL,4,2,NULL),(426,58,58,NULL,10,1,2,NULL,2,1,40),(427,48,48,NULL,10,1,2,NULL,2,1,50),(428,69,69,NULL,10,1,2,NULL,2,1,40),(429,60,60,NULL,10,1,2,NULL,1,1,40),(430,80,80,NULL,11,1,NULL,NULL,4,3,NULL),(431,22,22,57,10,1,3,NULL,1,2,60),(432,6,6,35,10,1,3,NULL,2,2,100),(433,83,83,NULL,11,1,NULL,NULL,4,3,NULL),(434,5,5,NULL,10,1,2,NULL,1,2,40),(435,16,16,NULL,10,1,2,NULL,1,2,90),(436,41,41,NULL,10,1,2,NULL,1,3,60),(437,50,50,NULL,10,1,2,NULL,4,1,30),(438,97,97,NULL,12,1,2,NULL,4,1,NULL),(439,94,94,NULL,11,1,NULL,NULL,4,1,NULL),(440,12,12,68,10,1,3,NULL,1,2,80),(441,24,24,46,10,1,3,NULL,2,3,80),(442,73,73,NULL,11,1,NULL,NULL,1,2,NULL),(443,23,23,28,10,1,3,NULL,1,3,100),(444,19,19,47,10,1,3,NULL,4,2,70),(445,96,96,NULL,12,1,NULL,NULL,4,3,NULL),(446,27,27,NULL,10,1,2,NULL,1,3,50),(447,30,30,NULL,10,1,3,NULL,1,3,60),(448,87,87,NULL,11,1,NULL,NULL,4,3,NULL),(449,26,26,NULL,10,1,2,NULL,1,3,40),(450,64,64,65,10,1,3,NULL,4,1,60),(451,8,8,34,10,1,4,NULL,1,2,100),(452,15,15,30,10,1,4,NULL,2,2,100),(453,47,47,NULL,10,1,2,NULL,4,1,30),(454,75,75,NULL,11,1,NULL,NULL,1,2,NULL),(455,79,79,NULL,11,1,NULL,NULL,4,2,NULL),(456,35,35,NULL,10,1,2,NULL,2,3,30),(457,43,43,NULL,10,1,2,NULL,2,1,30),(458,51,51,NULL,10,1,2,NULL,2,1,50),(459,49,49,NULL,10,1,2,NULL,1,1,50),(460,63,63,NULL,10,1,2,NULL,2,1,40),(461,95,95,NULL,11,1,NULL,NULL,4,1,NULL),(462,91,91,NULL,11,1,NULL,NULL,1,1,NULL),(463,99,99,NULL,12,1,2,NULL,4,1,NULL),(464,3,3,NULL,10,1,2,NULL,1,2,120),(465,89,89,NULL,11,1,NULL,NULL,4,3,NULL),(466,34,34,52,10,1,3,NULL,1,3,80),(467,66,66,NULL,10,1,2,NULL,2,1,50),(468,67,67,NULL,10,1,2,NULL,4,1,40),(469,100,100,NULL,12,1,2,NULL,4,1,NULL),(470,1,1,32,10,1,4,NULL,1,2,80),(471,29,29,50,10,1,3,NULL,4,3,60),(472,2,2,42,10,1,4,NULL,1,2,100),(473,70,70,NULL,11,1,NULL,NULL,4,2,10),(474,36,36,NULL,10,1,2,NULL,1,3,50),(475,28,28,NULL,10,1,2,NULL,1,3,60),(476,39,39,NULL,10,1,2,NULL,3,3,30),(477,38,38,59,10,1,3,NULL,1,3,60),(478,92,92,NULL,11,1,NULL,NULL,4,1,NULL),(479,71,71,NULL,11,1,NULL,NULL,4,2,NULL),(480,68,68,NULL,10,1,2,NULL,1,1,50),(481,56,56,NULL,10,1,2,NULL,1,1,90),(482,53,53,NULL,10,1,2,NULL,4,1,40),(483,62,62,NULL,10,1,2,NULL,1,1,40),(484,101,101,NULL,12,1,2,NULL,4,1,NULL),(485,13,13,38,10,1,4,NULL,1,2,90),(486,46,46,NULL,10,1,2,NULL,2,1,50),(487,98,98,NULL,12,1,2,NULL,4,1,NULL),(488,14,14,58,10,1,3,NULL,1,2,80),(489,77,77,NULL,11,1,NULL,NULL,1,2,NULL),(490,90,90,NULL,11,1,NULL,NULL,4,3,NULL),(491,18,18,26,10,1,3,NULL,2,2,80),(492,88,88,NULL,11,1,NULL,NULL,1,3,NULL),(493,55,55,NULL,10,1,2,NULL,1,1,40),(494,11,11,37,10,1,4,NULL,1,2,90),(495,54,54,45,10,1,3,NULL,1,1,70),(496,84,84,NULL,11,1,NULL,NULL,4,3,NULL),(497,85,85,NULL,11,1,NULL,NULL,4,3,NULL),(498,82,82,NULL,11,1,NULL,NULL,4,3,NULL),(499,21,21,67,10,1,2,NULL,4,2,80),(500,4,4,24,10,1,4,NULL,2,2,120),(501,31,31,NULL,10,1,2,NULL,1,3,70);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_ability`
--

DROP TABLE IF EXISTS `card_ability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_ability` (
  `card_ability_id` int NOT NULL AUTO_INCREMENT,
  `card_id` int NOT NULL,
  `ability_id` int NOT NULL,
  PRIMARY KEY (`card_ability_id`),
  KEY `card_id` (`card_id`),
  KEY `ability_id` (`ability_id`),
  CONSTRAINT `card_ability_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`),
  CONSTRAINT `card_ability_ibfk_2` FOREIGN KEY (`ability_id`) REFERENCES `ability` (`ability_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_ability`
--

LOCK TABLES `card_ability` WRITE;
/*!40000 ALTER TABLE `card_ability` DISABLE KEYS */;
INSERT INTO `card_ability` VALUES (1,451,7),(2,452,8),(3,470,9),(4,472,10),(5,499,11),(6,500,12),(7,473,15),(8,479,16),(9,410,17),(10,442,18),(11,403,19),(12,454,20),(13,409,21),(14,489,22),(15,425,23),(16,455,24),(17,430,25),(18,415,26),(19,498,27),(20,433,28),(21,496,29),(22,497,30),(23,421,31),(24,448,32),(25,492,33),(26,465,34),(27,490,35),(28,462,36),(29,478,37),(30,424,38),(31,439,39),(32,461,40);
/*!40000 ALTER TABLE `card_ability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_attack`
--

DROP TABLE IF EXISTS `card_attack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_attack` (
  `card_attack_id` int NOT NULL AUTO_INCREMENT,
  `attack_id` int NOT NULL,
  `card_id` int NOT NULL,
  PRIMARY KEY (`card_attack_id`),
  KEY `card_id` (`card_id`),
  KEY `attack_id` (`attack_id`),
  CONSTRAINT `card_attack_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`),
  CONSTRAINT `card_attack_ibfk_2` FOREIGN KEY (`attack_id`) REFERENCES `attack` (`attack_id`)
) ENGINE=InnoDB AUTO_INCREMENT=351 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_attack`
--

LOCK TABLES `card_attack` WRITE;
/*!40000 ALTER TABLE `card_attack` DISABLE KEYS */;
INSERT INTO `card_attack` VALUES (237,447,400),(238,449,402),(239,452,404),(240,456,407),(241,457,408),(242,458,408),(243,459,411),(244,460,411),(245,466,414),(246,468,416),(247,470,418),(248,471,419),(249,472,420),(250,474,422),(251,475,422),(252,477,426),(253,478,427),(254,479,428),(255,482,431),(256,485,432),(257,488,435),(258,489,435),(259,494,440),(260,496,441),(261,497,443),(262,498,443),(263,500,444),(264,501,446),(265,504,447),(266,507,450),(267,513,456),(268,514,457),(269,515,458),(270,517,459),(271,518,460),(272,521,464),(273,522,466),(274,523,466),(275,524,467),(276,504,467),(277,527,470),(278,529,471),(279,530,472),(280,532,474),(281,537,477),(282,517,480),(283,541,482),(284,542,482),(285,543,483),(286,544,485),(287,545,485),(288,547,486),(289,548,488),(290,549,488),(291,550,491),(292,551,491),(293,552,493),(294,553,494),(295,554,494),(296,556,495),(297,557,499),(298,558,500),(299,559,501),(300,560,501),(301,520,464),(302,486,434),(303,487,434),(304,484,432),(305,461,412),(306,462,412),(307,508,451),(308,450,402),(309,493,440),(310,509,452),(311,499,444),(312,483,431),(313,495,441),(314,465,414),(315,516,449),(316,502,446),(317,533,475),(318,528,471),(319,503,447),(320,463,413),(321,464,413),(322,467,416),(323,512,456),(324,531,474),(325,473,420),(326,536,477),(327,534,476),(328,535,476),(329,448,404),(330,490,436),(331,453,405),(332,454,405),(333,546,486),(334,510,453),(335,511,453),(336,505,459),(337,491,437),(338,492,437),(339,455,406),(340,555,495),(341,539,481),(342,540,481),(343,476,426),(344,480,429),(345,481,429),(346,451,401),(347,519,460),(348,506,450),(349,469,417),(350,512,468);
/*!40000 ALTER TABLE `card_attack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_collection`
--

DROP TABLE IF EXISTS `card_collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_collection` (
  `card_collection_id` int NOT NULL AUTO_INCREMENT,
  `collection_id` int NOT NULL,
  `card_id` int NOT NULL,
  `note` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `copies` int DEFAULT NULL,
  PRIMARY KEY (`card_collection_id`),
  UNIQUE KEY `collection_id` (`collection_id`,`card_id`),
  KEY `card_id` (`card_id`),
  CONSTRAINT `card_collection_ibfk_2` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`),
  CONSTRAINT `card_collection_ibfk_3` FOREIGN KEY (`collection_id`) REFERENCES `collection` (`collection_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1573 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_collection`
--

LOCK TABLES `card_collection` WRITE;
/*!40000 ALTER TABLE `card_collection` DISABLE KEYS */;
INSERT INTO `card_collection` VALUES (1479,10,500,'',3),(1481,7,472,'',9),(1482,7,500,'charrry',5),(1483,7,422,'',2),(1484,7,470,'Ally lad heelo, again and again and again',5),(1485,7,434,'',3),(1486,7,432,'',1),(1494,7,464,'',4),(1504,7,451,'',1),(1506,13,500,'',1),(1507,13,402,'',1),(1508,13,464,'',1),(1509,19,470,'',1),(1510,19,471,'',1),(1511,13,491,'',1),(1512,13,499,'',1),(1513,19,459,'',1),(1514,19,484,'',1),(1515,19,402,'',1),(1516,7,446,'',1),(1517,7,449,'',1),(1518,7,414,'',1),(1519,7,448,'',1),(1520,7,492,'',1),(1521,7,402,'',3),(1522,7,494,'',0),(1524,7,498,'hello',0),(1525,7,415,'Star',3),(1527,7,416,'',1),(1528,7,456,'fish',2),(1529,13,456,'',1),(1530,10,499,'',1),(1532,10,435,'',1),(1534,10,485,'',3),(1536,10,488,'',4),(1538,10,452,'',1),(1540,10,408,'',1),(1542,10,412,'',1),(1544,10,422,'',1),(1546,10,464,'',1),(1549,10,472,'',4),(1550,10,451,'goes to the gym',1),(1551,10,446,'plays golf',1),(1552,10,434,'',1),(1553,10,402,'',3),(1554,20,440,'',1),(1555,20,435,'',1),(1557,21,500,'',2),(1558,21,402,'',1),(1559,21,472,'Water guns',1),(1560,21,494,'',1),(1561,21,440,'',1),(1562,21,485,'',0),(1563,21,434,'',0),(1564,21,451,'',1),(1565,21,470,'',0),(1566,21,464,'',1),(1568,21,443,'flases',0),(1569,21,431,'',0),(1570,21,478,'',1),(1571,21,469,'lightning energy',0),(1572,10,470,'Ally lad',1);
/*!40000 ALTER TABLE `card_collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_energy_type`
--

DROP TABLE IF EXISTS `card_energy_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_energy_type` (
  `card_energy_type_id` int NOT NULL AUTO_INCREMENT,
  `card_id` int NOT NULL,
  `energy_type_id` int NOT NULL,
  PRIMARY KEY (`card_energy_type_id`),
  KEY `card_id` (`card_id`),
  KEY `energy_type_id` (`energy_type_id`),
  CONSTRAINT `card_energy_type_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`),
  CONSTRAINT `card_energy_type_ibfk_2` FOREIGN KEY (`energy_type_id`) REFERENCES `energy_type` (`energy_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=343 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_energy_type`
--

LOCK TABLES `card_energy_type` WRITE;
/*!40000 ALTER TABLE `card_energy_type` DISABLE KEYS */;
INSERT INTO `card_energy_type` VALUES (267,400,113),(268,401,114),(269,402,115),(270,404,114),(271,405,116),(272,406,117),(273,407,116),(274,408,113),(275,411,118),(276,412,117),(277,413,115),(278,414,116),(279,416,113),(280,417,116),(281,418,113),(282,419,114),(283,420,113),(284,422,118),(285,426,118),(286,427,114),(287,428,113),(288,429,119),(289,431,114),(290,432,116),(291,434,114),(292,435,118),(293,436,116),(294,437,115),(295,440,119),(296,441,119),(297,443,119),(298,444,117),(299,446,114),(300,447,113),(301,449,114),(302,450,116),(303,451,117),(304,452,113),(305,453,117),(306,456,116),(307,457,115),(308,458,113),(309,459,115),(310,460,116),(311,464,114),(312,466,117),(313,467,113),(314,468,118),(315,470,115),(316,471,115),(317,472,116),(318,474,119),(319,475,119),(320,476,114),(321,477,116),(322,480,119),(323,481,117),(324,482,118),(325,483,117),(326,485,116),(327,486,119),(328,488,118),(329,491,114),(330,493,113),(331,494,113),(332,495,113),(333,499,118),(334,500,119),(335,501,115),(336,445,114),(337,438,117),(338,487,119),(339,463,113),(340,469,118),(341,484,115),(342,423,116);
/*!40000 ALTER TABLE `card_energy_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_name`
--

DROP TABLE IF EXISTS `card_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_name` (
  `card_name_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`card_name_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_name`
--

LOCK TABLES `card_name` WRITE;
/*!40000 ALTER TABLE `card_name` DISABLE KEYS */;
INSERT INTO `card_name` VALUES (43,'Abra'),(1,'Alakazam'),(159,'Alph Lithograph'),(163,'Ampharos'),(23,'Arcanine'),(200,'Ariados'),(143,'Azumarill'),(147,'Bayleef'),(17,'Beedrill'),(91,'Bill'),(2,'Blastoise'),(220,'Blissey'),(44,'Bulbasaur'),(186,'Butterfree'),(45,'Caterpie'),(3,'Chansey'),(4,'Charizard'),(46,'Charmander'),(24,'Charmeleon'),(201,'Chikorita'),(182,'Clefable'),(5,'Clefairy'),(70,'Clefairy Doll'),(156,'Cleffa'),(71,'Computer Search'),(165,'Copycat'),(179,'Corsola'),(141,'Croconaw'),(210,'Cyndaquil'),(198,'Darkness Energy'),(80,'Defender'),(152,'Delibird'),(72,'Devolution Spray'),(25,'Dewgong'),(47,'Diglett'),(48,'Doduo'),(178,'Donphan'),(96,'Double Colorless Energy'),(18,'Dragonair'),(26,'Dratini'),(49,'Drowzee'),(19,'Dugtrio'),(167,'Dunsparce'),(20,'Electabuzz'),(21,'Electrode'),(92,'Energy Removal'),(81,'Energy Retrieval'),(148,'Energy Switch'),(219,'Exeggcute'),(209,'Exeggutor'),(27,'Farfetch\'d'),(175,'Farfetch’d'),(136,'Feraligatr'),(97,'Fighting Energy'),(98,'Fire Energy'),(196,'Fisherman'),(185,'Flaaffy'),(82,'Full Heal'),(177,'Furret'),(50,'Gastly'),(197,'Girafarig'),(206,'Granbull'),(99,'Grass Energy'),(28,'Growlithe'),(93,'Gust of Wind'),(6,'Gyarados'),(29,'Haunter'),(191,'Heracross'),(7,'Hitmonchan'),(190,'Hitmontop'),(135,'Ho-Oh LEGEND'),(150,'Hoothoot'),(194,'Hoppip'),(199,'Hypno'),(137,'Igglybuff'),(73,'Impostor Professor Oak'),(74,'Item Finder'),(30,'Ivysaur'),(146,'Jigglypuff'),(215,'Jumpluff'),(31,'Jynx'),(32,'Kadabra'),(33,'Kakuna'),(51,'Koffing'),(166,'Lapras'),(75,'Lass'),(192,'Ledian'),(170,'Ledyba'),(100,'Lightning Energy'),(213,'Lugia LEGEND'),(8,'Machamp'),(34,'Machoke'),(52,'Machop'),(35,'Magikarp'),(36,'Magmar'),(53,'Magnemite'),(9,'Magneton'),(83,'Maintenance'),(164,'Mantine'),(202,'Mareep'),(155,'Marill'),(157,'Meganium'),(161,'Meowth'),(139,'Metal Energy'),(54,'Metapod'),(10,'Mewtwo'),(181,'Miltank'),(218,'Moomoo Milk'),(11,'Nidoking'),(55,'Nidoran♂'),(37,'Nidorino'),(12,'Ninetales'),(142,'Noctowl'),(56,'Onix'),(189,'Paras'),(180,'Parasect'),(174,'Persian'),(154,'Phanpy'),(168,'Pichu'),(22,'Pidgeotto'),(57,'Pidgey'),(58,'Pikachu'),(84,'PlusPower'),(217,'Poké Ball'),(87,'Pokédex'),(188,'Pokégear3.0'),(76,'Pokémon Breeder'),(85,'Pokémon Center'),(184,'Pokémon Collector'),(172,'Pokémon Communication'),(86,'Pokémon Flute'),(151,'Pokémon Reversal'),(77,'Pokémon Trader'),(59,'Poliwag'),(38,'Poliwhirl'),(13,'Poliwrath'),(60,'Ponyta'),(39,'Porygon'),(94,'Potion'),(176,'Professor Elm’s Training Method'),(88,'Professor Oak'),(173,'Professor Oak’s New Theory'),(101,'Psychic Energy'),(145,'Quagsire'),(171,'Quilava'),(138,'Qwilfish'),(14,'Raichu'),(140,'Rainbow Energy'),(40,'Raticate'),(61,'Rattata'),(89,'Revive'),(62,'Sandshrew'),(214,'Sandslash'),(78,'Scoop Up'),(41,'Seel'),(160,'Sentret'),(162,'Shuckle'),(169,'Skiploom'),(203,'Slowbro'),(207,'Slowking'),(205,'Slowpoke'),(212,'Smoochum'),(183,'Snubbull'),(153,'Spinarak'),(63,'Squirtle'),(64,'Starmie'),(65,'Staryu'),(193,'Sunflora'),(187,'Sunkern'),(79,'Super Energy Removal'),(90,'Super Potion'),(95,'Switch'),(66,'Tangela'),(144,'Totodile'),(149,'Typhlosion'),(216,'Tyrogue'),(195,'Unown'),(15,'Venusaur'),(67,'Voltorb'),(68,'Vulpix'),(42,'Wartortle'),(102,'Water Energy'),(69,'Weedle'),(208,'Weezing'),(204,'Wigglytuff'),(211,'Wobbuffet'),(158,'Wooper'),(16,'Zapdos');
/*!40000 ALTER TABLE `card_name` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_resistance`
--

DROP TABLE IF EXISTS `card_resistance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_resistance` (
  `card_resistance_id` int NOT NULL AUTO_INCREMENT,
  `resistance_id` int NOT NULL,
  `card_id` int NOT NULL,
  PRIMARY KEY (`card_resistance_id`),
  KEY `card_id` (`card_id`),
  KEY `resistance_id` (`resistance_id`),
  CONSTRAINT `card_resistance_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`),
  CONSTRAINT `card_resistance_ibfk_2` FOREIGN KEY (`resistance_id`) REFERENCES `resistance` (`resistance_id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_resistance`
--

LOCK TABLES `card_resistance` WRITE;
/*!40000 ALTER TABLE `card_resistance` DISABLE KEYS */;
INSERT INTO `card_resistance` VALUES (98,1,401),(99,1,404),(100,2,408),(101,2,419),(102,2,427),(103,2,431),(104,2,432),(105,1,434),(106,2,435),(107,2,437),(108,3,444),(109,2,446),(110,1,449),(111,3,453),(112,1,464),(113,2,471),(114,1,476),(115,3,483),(116,1,491),(117,2,500);
/*!40000 ALTER TABLE `card_resistance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_retreat_cost`
--

DROP TABLE IF EXISTS `card_retreat_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_retreat_cost` (
  `card_retreat_cost_id` int NOT NULL AUTO_INCREMENT,
  `retreat_cost_id` int NOT NULL,
  `card_id` int NOT NULL,
  PRIMARY KEY (`card_retreat_cost_id`),
  KEY `card_id` (`card_id`),
  KEY `reatreat_cost_id` (`retreat_cost_id`),
  CONSTRAINT `card_retreat_cost_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`),
  CONSTRAINT `card_retreat_cost_ibfk_2` FOREIGN KEY (`retreat_cost_id`) REFERENCES `retreat_cost` (`retreat_cost_id`)
) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_retreat_cost`
--

LOCK TABLES `card_retreat_cost` WRITE;
/*!40000 ALTER TABLE `card_retreat_cost` DISABLE KEYS */;
INSERT INTO `card_retreat_cost` VALUES (241,1,400),(242,2,402),(243,1,404),(244,1,405),(245,1,406),(246,1,407),(247,3,411),(248,3,412),(249,2,413),(250,2,414),(251,3,416),(252,1,417),(253,1,418),(254,1,419),(255,1,420),(256,1,422),(257,1,426),(258,1,428),(259,1,429),(260,1,431),(261,2,432),(262,1,434),(263,2,435),(264,1,436),(265,1,440),(266,1,441),(267,2,443),(268,3,444),(269,1,446),(270,1,447),(271,1,449),(272,1,450),(273,2,451),(274,3,452),(275,1,456),(276,1,458),(277,1,459),(278,1,460),(279,1,464),(280,2,466),(281,3,467),(282,1,468),(283,2,470),(284,1,471),(285,2,472),(286,3,474),(287,1,475),(288,1,476),(289,1,477),(290,1,480),(291,2,481),(292,1,482),(293,1,483),(294,2,485),(295,1,486),(296,1,488),(297,3,491),(298,1,493),(299,2,494),(300,3,495),(301,1,499),(302,2,500),(303,3,501);
/*!40000 ALTER TABLE `card_retreat_cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_variant`
--

DROP TABLE IF EXISTS `card_variant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_variant` (
  `card_variant_id` int NOT NULL AUTO_INCREMENT,
  `card_id` int NOT NULL,
  `variant_id` int NOT NULL,
  PRIMARY KEY (`card_variant_id`),
  KEY `card_id` (`card_id`),
  KEY `variant_id` (`variant_id`),
  CONSTRAINT `card_variant_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`),
  CONSTRAINT `card_variant_ibfk_2` FOREIGN KEY (`variant_id`) REFERENCES `variant` (`variant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1447 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_variant`
--

LOCK TABLES `card_variant` WRITE;
/*!40000 ALTER TABLE `card_variant` DISABLE KEYS */;
INSERT INTO `card_variant` VALUES (1141,400,2),(1142,400,3),(1143,400,4),(1144,401,2),(1145,401,3),(1146,401,4),(1147,402,2),(1148,402,3),(1149,402,4),(1150,403,2),(1151,403,3),(1152,403,4),(1153,404,2),(1154,404,3),(1155,404,4),(1156,405,2),(1157,405,3),(1158,405,4),(1159,406,2),(1160,406,3),(1161,406,4),(1162,407,2),(1163,407,3),(1164,407,4),(1165,408,2),(1166,408,3),(1167,408,4),(1168,409,2),(1169,409,3),(1170,409,4),(1171,410,2),(1172,410,3),(1173,410,4),(1174,411,2),(1175,411,3),(1176,411,4),(1177,412,2),(1178,412,3),(1179,412,4),(1180,413,2),(1181,413,3),(1182,413,4),(1183,414,2),(1184,414,3),(1185,414,4),(1186,415,2),(1187,415,3),(1188,415,4),(1189,416,2),(1190,416,3),(1191,416,4),(1192,417,2),(1193,417,3),(1194,417,4),(1195,418,2),(1196,418,3),(1197,418,4),(1198,419,2),(1199,419,3),(1200,419,4),(1201,420,2),(1202,420,3),(1203,420,4),(1204,421,2),(1205,421,3),(1206,421,4),(1207,422,2),(1208,422,3),(1209,422,4),(1210,423,2),(1211,423,3),(1212,423,4),(1213,424,2),(1214,424,3),(1215,424,4),(1216,425,2),(1217,425,3),(1218,425,4),(1219,426,2),(1220,426,3),(1221,426,4),(1222,427,2),(1223,427,3),(1224,427,4),(1225,428,2),(1226,428,3),(1227,428,4),(1228,429,2),(1229,429,3),(1230,429,4),(1231,430,2),(1232,430,3),(1233,430,4),(1234,431,2),(1235,431,3),(1236,431,4),(1237,432,2),(1238,432,3),(1239,432,4),(1240,433,2),(1241,433,3),(1242,433,4),(1243,434,2),(1244,434,3),(1245,434,4),(1246,435,2),(1247,435,3),(1248,435,4),(1249,436,2),(1250,436,3),(1251,436,4),(1252,437,2),(1253,437,3),(1254,437,4),(1255,438,2),(1256,438,3),(1257,438,4),(1258,439,2),(1259,439,3),(1260,439,4),(1261,440,2),(1262,440,3),(1263,440,4),(1264,441,2),(1265,441,3),(1266,441,4),(1267,442,2),(1268,442,3),(1269,442,4),(1270,443,2),(1271,443,3),(1272,443,4),(1273,444,2),(1274,444,3),(1275,444,4),(1276,445,2),(1277,445,3),(1278,445,4),(1279,446,2),(1280,446,3),(1281,446,4),(1282,447,2),(1283,447,3),(1284,447,4),(1285,448,2),(1286,448,3),(1287,448,4),(1288,449,2),(1289,449,3),(1290,449,4),(1291,450,2),(1292,450,3),(1293,450,4),(1294,451,2),(1295,451,3),(1296,451,4),(1297,452,2),(1298,452,3),(1299,452,4),(1300,453,2),(1301,453,3),(1302,453,4),(1303,454,2),(1304,454,3),(1305,454,4),(1306,455,2),(1307,455,3),(1308,455,4),(1309,456,2),(1310,456,3),(1311,456,4),(1312,457,2),(1313,457,3),(1314,457,4),(1315,458,2),(1316,458,3),(1317,458,4),(1318,459,2),(1319,459,3),(1320,459,4),(1321,460,2),(1322,460,3),(1323,460,4),(1324,461,2),(1325,461,3),(1326,461,4),(1327,462,2),(1328,462,3),(1329,462,4),(1330,463,2),(1331,463,3),(1332,463,4),(1333,464,2),(1334,464,3),(1335,464,4),(1336,465,2),(1337,465,3),(1338,465,4),(1339,466,2),(1340,466,3),(1341,466,4),(1342,467,2),(1343,467,3),(1344,467,4),(1345,468,2),(1346,468,3),(1347,468,4),(1348,469,2),(1349,469,3),(1350,469,4),(1351,470,2),(1352,470,3),(1353,470,4),(1354,471,2),(1355,471,3),(1356,471,4),(1357,472,2),(1358,472,3),(1359,472,4),(1360,473,2),(1361,473,3),(1362,473,4),(1363,474,2),(1364,474,3),(1365,474,4),(1366,475,2),(1367,475,3),(1368,475,4),(1369,476,2),(1370,476,3),(1371,476,4),(1372,477,2),(1373,477,3),(1374,477,4),(1375,478,2),(1376,478,3),(1377,478,4),(1378,479,2),(1379,479,3),(1380,479,4),(1381,480,2),(1382,480,3),(1383,480,4),(1384,481,2),(1385,481,3),(1386,481,4),(1387,482,2),(1388,482,3),(1389,482,4),(1390,483,2),(1391,483,3),(1392,483,4),(1393,484,2),(1394,484,3),(1395,484,4),(1396,485,2),(1397,485,3),(1398,485,4),(1399,486,2),(1400,486,3),(1401,486,4),(1402,487,2),(1403,487,3),(1404,487,4),(1405,488,2),(1406,488,3),(1407,488,4),(1408,489,2),(1409,489,3),(1410,489,4),(1411,490,2),(1412,490,3),(1413,490,4),(1414,491,2),(1415,491,3),(1416,491,4),(1417,492,2),(1418,492,3),(1419,492,4),(1420,493,2),(1421,493,3),(1422,493,4),(1423,494,2),(1424,494,3),(1425,494,4),(1426,495,2),(1427,495,3),(1428,495,4),(1429,496,2),(1430,496,3),(1431,496,4),(1432,497,2),(1433,497,3),(1434,497,4),(1435,498,2),(1436,498,3),(1437,498,4),(1438,499,2),(1439,499,3),(1440,499,4),(1441,500,2),(1442,500,3),(1443,500,4),(1444,501,2),(1445,501,3),(1446,501,4);
/*!40000 ALTER TABLE `card_variant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_weakness`
--

DROP TABLE IF EXISTS `card_weakness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_weakness` (
  `card_weakness_id` int NOT NULL AUTO_INCREMENT,
  `weakness_id` int NOT NULL,
  `card_id` int NOT NULL,
  PRIMARY KEY (`card_weakness_id`),
  KEY `card_id` (`card_id`),
  KEY `weakness_id` (`weakness_id`),
  CONSTRAINT `card_weakness_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`),
  CONSTRAINT `card_weakness_ibfk_2` FOREIGN KEY (`weakness_id`) REFERENCES `weakness` (`weakness_id`)
) ENGINE=InnoDB AUTO_INCREMENT=318 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_weakness`
--

LOCK TABLES `card_weakness` WRITE;
/*!40000 ALTER TABLE `card_weakness` DISABLE KEYS */;
INSERT INTO `card_weakness` VALUES (254,1,400),(255,2,401),(256,3,402),(257,2,404),(258,4,405),(259,3,406),(260,5,407),(261,1,408),(262,2,411),(263,3,412),(264,3,413),(265,4,414),(266,1,416),(267,4,417),(268,1,418),(269,4,419),(270,3,420),(271,2,422),(272,2,426),(273,4,427),(274,1,428),(275,6,429),(276,4,431),(277,5,432),(278,2,434),(279,4,436),(280,6,440),(281,6,441),(282,6,443),(283,5,444),(284,4,446),(285,1,447),(286,4,450),(287,3,451),(288,1,452),(289,5,453),(290,4,456),(291,3,457),(292,3,458),(293,3,459),(294,4,460),(295,2,464),(296,3,466),(297,1,467),(298,2,468),(299,3,470),(300,4,472),(301,6,474),(302,6,475),(303,2,476),(304,5,477),(305,6,480),(306,5,481),(307,2,482),(308,5,483),(309,5,485),(310,6,486),(311,2,488),(312,3,493),(313,3,494),(314,1,495),(315,2,499),(316,6,500),(317,3,501);
/*!40000 ALTER TABLE `card_weakness` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (12,'Energy'),(10,'Pokemon'),(11,'Trainer');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collection`
--

DROP TABLE IF EXISTS `collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection` (
  `collection_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`collection_id`),
  UNIQUE KEY `account_id` (`account_id`,`name`),
  CONSTRAINT `collection_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection`
--

LOCK TABLES `collection` WRITE;
/*!40000 ALTER TABLE `collection` DISABLE KEYS */;
INSERT INTO `collection` VALUES (7,8,'Owned',1),(10,11,'Owned',1),(13,8,'best pokemon',0),(19,8,'Physic',0),(20,11,'Yellow Pokemon',0),(21,12,'Owned',1);
/*!40000 ALTER TABLE `collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collection_type`
--

DROP TABLE IF EXISTS `collection_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection_type` (
  `collection_type_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_mandatory` tinyint(1) NOT NULL,
  PRIMARY KEY (`collection_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection_type`
--

LOCK TABLES `collection_type` WRITE;
/*!40000 ALTER TABLE `collection_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `collection_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `energy_type`
--

DROP TABLE IF EXISTS `energy_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `energy_type` (
  `energy_type_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `icon_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`energy_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `energy_type`
--

LOCK TABLES `energy_type` WRITE;
/*!40000 ALTER TABLE `energy_type` DISABLE KEYS */;
INSERT INTO `energy_type` VALUES (113,'Grass','http://localhost:4000/images/energy/grass.png'),(114,'Colorless','http://localhost:4000/images/energy/colorless.png'),(115,'Psychic','http://localhost:4000/images/energy/psychic.png'),(116,'Water','http://localhost:4000/images/energy/water.png'),(117,'Fighting','http://localhost:4000/images/energy/fighting.png'),(118,'Lightning','http://localhost:4000/images/energy/lightning.png'),(119,'Fire','http://localhost:4000/images/energy/fire.png');
/*!40000 ALTER TABLE `energy_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evolution_stage`
--

DROP TABLE IF EXISTS `evolution_stage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evolution_stage` (
  `evolution_stage_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`evolution_stage_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evolution_stage`
--

LOCK TABLES `evolution_stage` WRITE;
/*!40000 ALTER TABLE `evolution_stage` DISABLE KEYS */;
INSERT INTO `evolution_stage` VALUES (2,'Basic'),(3,'Stage 1'),(4,'Stage 2');
/*!40000 ALTER TABLE `evolution_stage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expansion`
--

DROP TABLE IF EXISTS `expansion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expansion` (
  `expansion_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `api_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`expansion_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expansion`
--

LOCK TABLES `expansion` WRITE;
/*!40000 ALTER TABLE `expansion` DISABLE KEYS */;
INSERT INTO `expansion` VALUES (1,'Base Series','base'),(2,'Heart Gold & Soul Silver','hgss1');
/*!40000 ALTER TABLE `expansion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `illustrator`
--

DROP TABLE IF EXISTS `illustrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `illustrator` (
  `illustrator_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`illustrator_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `illustrator`
--

LOCK TABLES `illustrator` WRITE;
/*!40000 ALTER TABLE `illustrator` DISABLE KEYS */;
INSERT INTO `illustrator` VALUES (33,'Atsuko Nishida'),(25,'Aya Kusube'),(26,'Hajime Kusajima'),(14,'Hideaki Hakozaki'),(34,'Kagemaru Himeno'),(12,'Kanako Eo'),(10,'kawayoo'),(4,'Keiji Kinebuchi'),(1,'Ken Sugimori'),(31,'Kent Kanetsuna'),(9,'Kouki Saitou'),(16,'MAHOU'),(22,'Masakazu Fukuda'),(32,'Midori Harada'),(19,'Miki Tanaka'),(30,'Milky Isobe'),(2,'Mitsuhiro Arita'),(20,'Naoki Saito'),(13,'Naoyo Kimura'),(11,'Noriko Hotta'),(23,'Sachiko Adachi'),(7,'Shin Nagasawa'),(29,'Shinji Higuchi'),(15,'sui'),(18,'Sumiyoshi Kizuki'),(21,'Suwama Chiaki'),(24,'Takashi Yamaguchi'),(27,'TOKIYA'),(3,'Tomoaki Imakuni'),(28,'Tomokazu Komiya'),(6,'Wataru Kawahara'),(8,'Yuka Morii'),(17,'Yukiko Baba');
/*!40000 ALTER TABLE `illustrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rarity`
--

DROP TABLE IF EXISTS `rarity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rarity` (
  `rarity_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `icon_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rarity_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rarity`
--

LOCK TABLES `rarity` WRITE;
/*!40000 ALTER TABLE `rarity` DISABLE KEYS */;
INSERT INTO `rarity` VALUES (1,'Common','http://localhost:4000/images/rarity/common.svg'),(2,'Rare','http://localhost:4000/images/rarity/rare.svg'),(3,'Uncommon','http://localhost:4000/images/rarity/uncommon.svg');
/*!40000 ALTER TABLE `rarity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regulation_mark`
--

DROP TABLE IF EXISTS `regulation_mark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regulation_mark` (
  `regulation_mark_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`regulation_mark_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regulation_mark`
--

LOCK TABLES `regulation_mark` WRITE;
/*!40000 ALTER TABLE `regulation_mark` DISABLE KEYS */;
/*!40000 ALTER TABLE `regulation_mark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `release_set`
--

DROP TABLE IF EXISTS `release_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `release_set` (
  `release_set_id` int NOT NULL AUTO_INCREMENT,
  `expansion_id` int NOT NULL,
  `total_cards` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `set_code` varchar(255) DEFAULT NULL,
  `api_id` varchar(255) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `logo_URL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`release_set_id`),
  UNIQUE KEY `name` (`name`),
  KEY `expansion_id` (`expansion_id`),
  CONSTRAINT `release_set_ibfk_1` FOREIGN KEY (`expansion_id`) REFERENCES `expansion` (`expansion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `release_set`
--

LOCK TABLES `release_set` WRITE;
/*!40000 ALTER TABLE `release_set` DISABLE KEYS */;
INSERT INTO `release_set` VALUES (1,1,102,'Base Set','BS','base1','1999-01-09','http://localhost:4000/images/sets/base1.png');
/*!40000 ALTER TABLE `release_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resistance`
--

DROP TABLE IF EXISTS `resistance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resistance` (
  `resistance_id` int NOT NULL AUTO_INCREMENT,
  `energy_type_id` int NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`resistance_id`),
  KEY `energy_type_id` (`energy_type_id`),
  CONSTRAINT `resistance_ibfk_1` FOREIGN KEY (`energy_type_id`) REFERENCES `energy_type` (`energy_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resistance`
--

LOCK TABLES `resistance` WRITE;
/*!40000 ALTER TABLE `resistance` DISABLE KEYS */;
INSERT INTO `resistance` VALUES (1,115,'-30'),(2,117,'-30'),(3,118,'-30');
/*!40000 ALTER TABLE `resistance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `retreat_cost`
--

DROP TABLE IF EXISTS `retreat_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `retreat_cost` (
  `retreat_cost_id` int NOT NULL AUTO_INCREMENT,
  `energy_type_id` int NOT NULL,
  `amount` int DEFAULT NULL,
  PRIMARY KEY (`retreat_cost_id`),
  KEY `energy_type_id` (`energy_type_id`),
  CONSTRAINT `retreat_cost_ibfk_1` FOREIGN KEY (`energy_type_id`) REFERENCES `energy_type` (`energy_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retreat_cost`
--

LOCK TABLES `retreat_cost` WRITE;
/*!40000 ALTER TABLE `retreat_cost` DISABLE KEYS */;
INSERT INTO `retreat_cost` VALUES (1,114,1),(2,114,3),(3,114,2);
/*!40000 ALTER TABLE `retreat_cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variant`
--

DROP TABLE IF EXISTS `variant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variant` (
  `variant_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`variant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variant`
--

LOCK TABLES `variant` WRITE;
/*!40000 ALTER TABLE `variant` DISABLE KEYS */;
INSERT INTO `variant` VALUES (1,'firstEdition'),(2,'holo'),(3,'normal'),(4,'reverse'),(5,'wPromo');
/*!40000 ALTER TABLE `variant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_account`
--

DROP TABLE IF EXISTS `view_account`;
/*!50001 DROP VIEW IF EXISTS `view_account`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_account` AS SELECT 
 1 AS `id`,
 1 AS `first_name`,
 1 AS `last_name`,
 1 AS `user_name`,
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_allcollectionsentries`
--

DROP TABLE IF EXISTS `view_allcollectionsentries`;
/*!50001 DROP VIEW IF EXISTS `view_allcollectionsentries`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_allcollectionsentries` AS SELECT 
 1 AS `collection_id`,
 1 AS `account_id`,
 1 AS `name`,
 1 AS `is_default`,
 1 AS `entry_id`,
 1 AS `card_id`,
 1 AS `note`,
 1 AS `copies`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_cardability`
--

DROP TABLE IF EXISTS `view_cardability`;
/*!50001 DROP VIEW IF EXISTS `view_cardability`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_cardability` AS SELECT 
 1 AS `card_id`,
 1 AS `type`,
 1 AS `name`,
 1 AS `description`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_cardattack`
--

DROP TABLE IF EXISTS `view_cardattack`;
/*!50001 DROP VIEW IF EXISTS `view_cardattack`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_cardattack` AS SELECT 
 1 AS `card_id`,
 1 AS `attack_name`,
 1 AS `description`,
 1 AS `damage`,
 1 AS `energy_type`,
 1 AS `icon_url`,
 1 AS `amount`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_carddetails`
--

DROP TABLE IF EXISTS `view_carddetails`;
/*!50001 DROP VIEW IF EXISTS `view_carddetails`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_carddetails` AS SELECT 
 1 AS `card_id`,
 1 AS `card_name`,
 1 AS `card_number`,
 1 AS `category_id`,
 1 AS `category_name`,
 1 AS `rarity_id`,
 1 AS `rarity`,
 1 AS `rarity_icon_url`,
 1 AS `illustrator`,
 1 AS `health`,
 1 AS `evolution_stage_name`,
 1 AS `evolution_stage_id`,
 1 AS `evolves_from`,
 1 AS `expansion_api_id`,
 1 AS `release_set_api_id`,
 1 AS `release_set_name`,
 1 AS `release_set_total_cards`,
 1 AS `release_set_code`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_cardenergytype`
--

DROP TABLE IF EXISTS `view_cardenergytype`;
/*!50001 DROP VIEW IF EXISTS `view_cardenergytype`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_cardenergytype` AS SELECT 
 1 AS `card_id`,
 1 AS `energy_id`,
 1 AS `name`,
 1 AS `icon_url`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_cardgridinformation`
--

DROP TABLE IF EXISTS `view_cardgridinformation`;
/*!50001 DROP VIEW IF EXISTS `view_cardgridinformation`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_cardgridinformation` AS SELECT 
 1 AS `card_id`,
 1 AS `card_number`,
 1 AS `name`,
 1 AS `rarity`,
 1 AS `rarity_icon_url`,
 1 AS `release_set_id`,
 1 AS `release_date`,
 1 AS `set_name`,
 1 AS `set_code`,
 1 AS `release_set_total_cards`,
 1 AS `expansion_api_id`,
 1 AS `release_set_api_id`,
 1 AS `rarityId`,
 1 AS `weaknessId`,
 1 AS `resistanceId`,
 1 AS `energyTypeId`,
 1 AS `evolutionStageId`,
 1 AS `categoryId`,
 1 AS `illustrator`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_cardresistance`
--

DROP TABLE IF EXISTS `view_cardresistance`;
/*!50001 DROP VIEW IF EXISTS `view_cardresistance`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_cardresistance` AS SELECT 
 1 AS `card_id`,
 1 AS `energy_type_id`,
 1 AS `energy_type`,
 1 AS `icon_url`,
 1 AS `value`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_cardretreatcost`
--

DROP TABLE IF EXISTS `view_cardretreatcost`;
/*!50001 DROP VIEW IF EXISTS `view_cardretreatcost`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_cardretreatcost` AS SELECT 
 1 AS `card_id`,
 1 AS `energy_type`,
 1 AS `amount`,
 1 AS `icon_url`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_cardweakness`
--

DROP TABLE IF EXISTS `view_cardweakness`;
/*!50001 DROP VIEW IF EXISTS `view_cardweakness`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_cardweakness` AS SELECT 
 1 AS `card_id`,
 1 AS `energy_type_id`,
 1 AS `energy_type`,
 1 AS `icon_url`,
 1 AS `value`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_collectionsummary`
--

DROP TABLE IF EXISTS `view_collectionsummary`;
/*!50001 DROP VIEW IF EXISTS `view_collectionsummary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_collectionsummary` AS SELECT 
 1 AS `collection_id`,
 1 AS `account_id`,
 1 AS `name`,
 1 AS `is_default`,
 1 AS `total_cards`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_expansionsets`
--

DROP TABLE IF EXISTS `view_expansionsets`;
/*!50001 DROP VIEW IF EXISTS `view_expansionsets`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_expansionsets` AS SELECT 
 1 AS `expansion_name`,
 1 AS `expansion_id`,
 1 AS `expansion_api_id`,
 1 AS `release_set_id`,
 1 AS `total_cards`,
 1 AS `release_set_name`,
 1 AS `set_code`,
 1 AS `release_set_api_id`,
 1 AS `release_date`,
 1 AS `set_logo_url`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `weakness`
--

DROP TABLE IF EXISTS `weakness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weakness` (
  `weakness_id` int NOT NULL AUTO_INCREMENT,
  `energy_type_id` int NOT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`weakness_id`),
  KEY `energy_type_id` (`energy_type_id`),
  CONSTRAINT `weakness_ibfk_1` FOREIGN KEY (`energy_type_id`) REFERENCES `energy_type` (`energy_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weakness`
--

LOCK TABLES `weakness` WRITE;
/*!40000 ALTER TABLE `weakness` DISABLE KEYS */;
INSERT INTO `weakness` VALUES (1,119,'×2'),(2,117,'×2'),(3,115,'×2'),(4,118,'×2'),(5,113,'×2'),(6,116,'×2');
/*!40000 ALTER TABLE `weakness` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `wishlist_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `card_id` int NOT NULL,
  PRIMARY KEY (`wishlist_id`),
  UNIQUE KEY `wishlist_id` (`wishlist_id`,`account_id`),
  KEY `card_id` (`card_id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`),
  CONSTRAINT `wishlist_ibfk_3` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
INSERT INTO `wishlist` VALUES (35,8,412),(44,8,422),(45,8,494),(48,8,470),(49,8,464),(50,8,434),(60,8,500),(61,8,451),(62,8,432),(64,11,434),(65,12,464),(66,12,500),(67,12,464),(68,12,402),(69,12,434),(70,11,500);
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `view_account`
--

/*!50001 DROP VIEW IF EXISTS `view_account`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_account` AS select `account`.`account_id` AS `id`,`account`.`first_name` AS `first_name`,`account`.`last_name` AS `last_name`,`account`.`user_name` AS `user_name`,`account_email`.`email` AS `email` from (`account` join `account_email` on((`account`.`account_id` = `account_email`.`account_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_allcollectionsentries`
--

/*!50001 DROP VIEW IF EXISTS `view_allcollectionsentries`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_allcollectionsentries` AS select `card_collection`.`collection_id` AS `collection_id`,`collection`.`account_id` AS `account_id`,`collection`.`name` AS `name`,`collection`.`is_default` AS `is_default`,`card_collection`.`card_collection_id` AS `entry_id`,`card_collection`.`card_id` AS `card_id`,`card_collection`.`note` AS `note`,`card_collection`.`copies` AS `copies` from (`collection` join `card_collection` on((`collection`.`collection_id` = `card_collection`.`collection_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_cardability`
--

/*!50001 DROP VIEW IF EXISTS `view_cardability`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_cardability` AS select `card`.`card_id` AS `card_id`,`ability_type`.`name` AS `type`,`ability`.`name` AS `name`,`ability`.`description` AS `description` from (((`card` join `card_ability` on((`card_ability`.`card_id` = `card`.`card_id`))) join `ability` on((`card_ability`.`ability_id` = `ability`.`ability_id`))) join `ability_type` on((`ability`.`ability_type_id` = `ability_type`.`ability_type_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_cardattack`
--

/*!50001 DROP VIEW IF EXISTS `view_cardattack`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_cardattack` AS select `card`.`card_id` AS `card_id`,`attack`.`name` AS `attack_name`,`attack`.`description` AS `description`,`attack`.`damage` AS `damage`,`energy_type`.`name` AS `energy_type`,`energy_type`.`icon_url` AS `icon_url`,`attack_cost`.`amount` AS `amount` from ((((`card` join `card_attack` on((`card_attack`.`card_id` = `card`.`card_id`))) join `attack` on((`card_attack`.`attack_id` = `attack`.`attack_id`))) join `attack_cost` on((`attack_cost`.`attack_id` = `attack`.`attack_id`))) join `energy_type` on((`attack_cost`.`energy_type_id` = `energy_type`.`energy_type_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_carddetails`
--

/*!50001 DROP VIEW IF EXISTS `view_carddetails`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_carddetails` AS select `card`.`card_id` AS `card_id`,`card_name`.`name` AS `card_name`,`card`.`card_number` AS `card_number`,`category`.`category_id` AS `category_id`,`category`.`name` AS `category_name`,`rarity`.`rarity_id` AS `rarity_id`,`rarity`.`name` AS `rarity`,`rarity`.`icon_url` AS `rarity_icon_url`,`illustrator`.`name` AS `illustrator`,`card`.`health` AS `health`,`evolution_stage`.`name` AS `evolution_stage_name`,`evolution_stage`.`evolution_stage_id` AS `evolution_stage_id`,`evo_name`.`name` AS `evolves_from`,`expansion`.`api_id` AS `expansion_api_id`,`release_set`.`api_id` AS `release_set_api_id`,`release_set`.`name` AS `release_set_name`,`release_set`.`total_cards` AS `release_set_total_cards`,`release_set`.`set_code` AS `release_set_code` from (((((((((`card` join `card_name` on((`card_name`.`card_name_id` = `card`.`card_name_id`))) join `category` on((`category`.`category_id` = `card`.`category_id`))) left join `evolution_stage` on((`evolution_stage`.`evolution_stage_id` = `card`.`evolution_stage_id`))) left join `card_name` `evo_name` on((`evo_name`.`card_name_id` = `card`.`evolves_from`))) left join `rarity` on((`rarity`.`rarity_id` = `card`.`rarity_id`))) join `illustrator` on((`illustrator`.`illustrator_id` = `card`.`illustrator_id`))) left join `card_energy_type` on((`card_energy_type`.`card_id` = `card`.`card_id`))) join `release_set` on((`release_set`.`expansion_id` = `card`.`release_set_id`))) join `expansion` on((`release_set`.`expansion_id` = `expansion`.`expansion_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_cardenergytype`
--

/*!50001 DROP VIEW IF EXISTS `view_cardenergytype`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_cardenergytype` AS select `card`.`card_id` AS `card_id`,`energy_type`.`energy_type_id` AS `energy_id`,`energy_type`.`name` AS `name`,`energy_type`.`icon_url` AS `icon_url` from ((`card` join `card_energy_type` on((`card_energy_type`.`card_id` = `card`.`card_id`))) join `energy_type` on((`card_energy_type`.`energy_type_id` = `energy_type`.`energy_type_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_cardgridinformation`
--

/*!50001 DROP VIEW IF EXISTS `view_cardgridinformation`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_cardgridinformation` AS select `card`.`card_id` AS `card_id`,`card`.`card_number` AS `card_number`,`card_name`.`name` AS `name`,`rarity`.`name` AS `rarity`,`rarity`.`icon_url` AS `rarity_icon_url`,`release_set`.`release_set_id` AS `release_set_id`,`release_set`.`release_date` AS `release_date`,`release_set`.`name` AS `set_name`,`release_set`.`set_code` AS `set_code`,`release_set`.`total_cards` AS `release_set_total_cards`,`expansion`.`api_id` AS `expansion_api_id`,`release_set`.`api_id` AS `release_set_api_id`,`card`.`rarity_id` AS `rarityId`,`weakness`.`energy_type_id` AS `weaknessId`,`resistance`.`energy_type_id` AS `resistanceId`,`card_energy_type`.`energy_type_id` AS `energyTypeId`,`card`.`evolution_stage_id` AS `evolutionStageId`,`card`.`category_id` AS `categoryId`,`illustrator`.`name` AS `illustrator` from ((((((((((`card` join `release_set` on((`card`.`release_set_id` = `release_set`.`release_set_id`))) join `expansion` on((`release_set`.`expansion_id` = `expansion`.`expansion_id`))) join `card_name` on((`card`.`card_name_id` = `card_name`.`card_name_id`))) left join `rarity` on((`card`.`rarity_id` = `rarity`.`rarity_id`))) left join `card_weakness` on((`card_weakness`.`card_id` = `card`.`card_id`))) left join `card_resistance` on((`card_resistance`.`card_id` = `card`.`card_id`))) left join `card_energy_type` on((`card_energy_type`.`card_id` = `card`.`card_id`))) left join `illustrator` on((`illustrator`.`illustrator_id` = `card`.`illustrator_id`))) left join `weakness` on((`weakness`.`weakness_id` = `card_weakness`.`weakness_id`))) left join `resistance` on((`resistance`.`resistance_id` = `card_resistance`.`resistance_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_cardresistance`
--

/*!50001 DROP VIEW IF EXISTS `view_cardresistance`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_cardresistance` AS select `card`.`card_id` AS `card_id`,`energy_type`.`energy_type_id` AS `energy_type_id`,`energy_type`.`name` AS `energy_type`,`energy_type`.`icon_url` AS `icon_url`,`resistance`.`value` AS `value` from (((`card` join `card_resistance` on((`card_resistance`.`card_id` = `card`.`card_id`))) join `resistance` on((`card_resistance`.`resistance_id` = `resistance`.`resistance_id`))) join `energy_type` on((`energy_type`.`energy_type_id` = `resistance`.`energy_type_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_cardretreatcost`
--

/*!50001 DROP VIEW IF EXISTS `view_cardretreatcost`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_cardretreatcost` AS select `card`.`card_id` AS `card_id`,`energy_type`.`name` AS `energy_type`,`retreat_cost`.`amount` AS `amount`,`energy_type`.`icon_url` AS `icon_url` from (((`card` join `card_retreat_cost` on((`card_retreat_cost`.`card_id` = `card`.`card_id`))) join `retreat_cost` on((`card_retreat_cost`.`retreat_cost_id` = `retreat_cost`.`retreat_cost_id`))) join `energy_type` on((`energy_type`.`energy_type_id` = `retreat_cost`.`energy_type_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_cardweakness`
--

/*!50001 DROP VIEW IF EXISTS `view_cardweakness`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_cardweakness` AS select `card`.`card_id` AS `card_id`,`energy_type`.`energy_type_id` AS `energy_type_id`,`energy_type`.`name` AS `energy_type`,`energy_type`.`icon_url` AS `icon_url`,`weakness`.`value` AS `value` from (((`card` join `card_weakness` on((`card_weakness`.`card_id` = `card`.`card_id`))) join `weakness` on((`card_weakness`.`weakness_id` = `weakness`.`weakness_id`))) join `energy_type` on((`energy_type`.`energy_type_id` = `weakness`.`energy_type_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_collectionsummary`
--

/*!50001 DROP VIEW IF EXISTS `view_collectionsummary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_collectionsummary` AS select `collection`.`collection_id` AS `collection_id`,max(`collection`.`account_id`) AS `account_id`,max(`collection`.`name`) AS `name`,max(`collection`.`is_default`) AS `is_default`,count((case when (`card_collection`.`copies` > 0) then `card_collection`.`card_collection_id` else NULL end)) AS `total_cards` from (`collection` left join `card_collection` on((`collection`.`collection_id` = `card_collection`.`collection_id`))) group by `collection`.`account_id`,`collection`.`collection_id`,`collection`.`name`,`collection`.`is_default` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_expansionsets`
--

/*!50001 DROP VIEW IF EXISTS `view_expansionsets`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_expansionsets` AS select `expansion`.`name` AS `expansion_name`,`expansion`.`expansion_id` AS `expansion_id`,`expansion`.`api_id` AS `expansion_api_id`,`release_set`.`release_set_id` AS `release_set_id`,`release_set`.`total_cards` AS `total_cards`,`release_set`.`name` AS `release_set_name`,`release_set`.`set_code` AS `set_code`,`release_set`.`api_id` AS `release_set_api_id`,`release_set`.`release_date` AS `release_date`,`release_set`.`logo_URL` AS `set_logo_url` from (`expansion` join `release_set` on((`expansion`.`expansion_id` = `release_set`.`expansion_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-03  5:43:08
