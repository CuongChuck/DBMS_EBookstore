CREATE DATABASE  IF NOT EXISTS `Bookstore` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `Bookstore`;
-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: Bookstore
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.24.04.1

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
-- Table structure for table `Author`
--

DROP TABLE IF EXISTS `Author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Author` (
  `AuthorID` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Description` tinytext,
  PRIMARY KEY (`AuthorID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Author`
--

LOCK TABLES `Author` WRITE;
/*!40000 ALTER TABLE `Author` DISABLE KEYS */;
INSERT INTO `Author` VALUES (00001,'Jane Austen','Celebrated novelist of the Regency era, known for works like Pride and Prejudice.'),(00002,'William Shakespeare','Widely regarded as the greatest writer in the English language, author of numerous plays and sonnets.'),(00003,'Agatha Christie','Queen of crime fiction, renowned for her detective novels featuring Hercule Poirot and Miss Marple.'),(00004,'Charles Dickens','Victorian novelist known for his social commentary and memorable characters in works like Oliver Twist.'),(00005,'Leo Tolstoy','Russian novelist and philosopher, author of the epic novels War and Peace and Anna Karenina.'),(00006,'Virginia Woolf','Modernist writer known for her experimental style and novels like Mrs. Dalloway and To the Lighthouse.'),(00007,'Gabriel García Márquez','Nobel laureate and author of magical realism masterpieces such as One Hundred Years of Solitude.'),(00008,'J.R.R. Tolkien','Author of the influential fantasy epic The Lord of the Rings.'),(00009,'Harper Lee','Author of the Pulitzer Prize-winning novel To Kill a Mockingbird.'),(00010,'Stephen King','Master of horror fiction, known for his prolific output and works like It and The Shining.'),(00012,'Charles Xavier','asd');
/*!40000 ALTER TABLE `Author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Authors`
--

DROP TABLE IF EXISTS `Authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Authors` (
  `BookID` int(10) unsigned zerofill NOT NULL,
  `AuthorID` int(10) unsigned zerofill NOT NULL,
  PRIMARY KEY (`BookID`,`AuthorID`),
  KEY `fk_Authors-Author` (`AuthorID`),
  CONSTRAINT `fk_Authors-Author` FOREIGN KEY (`AuthorID`) REFERENCES `Author` (`AuthorID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Authors-Book` FOREIGN KEY (`BookID`) REFERENCES `Book` (`BookID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Authors`
--

LOCK TABLES `Authors` WRITE;
/*!40000 ALTER TABLE `Authors` DISABLE KEYS */;
INSERT INTO `Authors` VALUES (0000000002,0000000001),(0000000012,0000000001),(0000000003,0000000002),(0000000013,0000000002),(0000000004,0000000003),(0000000014,0000000003),(0000000005,0000000004),(0000000015,0000000004),(0000000006,0000000005),(0000000016,0000000005),(0000000007,0000000006),(0000000017,0000000006),(0000000008,0000000007),(0000000018,0000000007),(0000000009,0000000008),(0000000019,0000000008),(0000000010,0000000009),(0000000011,0000000010),(0000000020,0000000010),(0000000021,0000000010),(0000000024,0000000012);
/*!40000 ALTER TABLE `Authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Book`
--

DROP TABLE IF EXISTS `Book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Book` (
  `BookID` int(8) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `CoverImage` longblob,
  `OriginalPrice` int NOT NULL,
  `PublicationDate` int DEFAULT NULL,
  `QuantityStored` int NOT NULL DEFAULT '0',
  `QuantitySold` int DEFAULT '0',
  `AgeRating` int DEFAULT NULL,
  `Width` decimal(2,0) DEFAULT NULL,
  `Length` decimal(2,0) DEFAULT NULL,
  `Height` decimal(2,0) DEFAULT NULL,
  `PageCount` int DEFAULT NULL,
  `Mass` decimal(2,0) DEFAULT NULL,
  `Description` text,
  `BookName` varchar(50) NOT NULL,
  `Status` varchar(10) NOT NULL,
  `TotalQuantity` int NOT NULL DEFAULT '0',
  `Format` varchar(45) DEFAULT NULL,
  `SellingPrice` int NOT NULL,
  `PublisherID` int(4) unsigned zerofill NOT NULL,
  PRIMARY KEY (`BookID`),
  KEY `fk_Publisher-Book` (`PublisherID`),
  CONSTRAINT `fk_Publisher-Book` FOREIGN KEY (`PublisherID`)
  REFERENCES `Publisher` (`PublisherID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Book_chk_1` CHECK ((`QuantityStored` >= 0)),
  CONSTRAINT `Book_chk_2` CHECK ((`QuantitySold` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book`
--

LOCK TABLES `Book` WRITE;
/*!40000 ALTER TABLE `Book` DISABLE KEYS */;
INSERT INTO `Book` VALUES (00000001,NULL,20000,2000,1000,0,NULL,NULL,NULL,NULL,NULL,NULL,'asdasd','asd','In stock',1000,NULL,20000,0001),(00000002,NULL,150000,1813,15,0,NULL,NULL,NULL,NULL,432,NULL,'A witty and insightful novel about love, family, and social class in 19th-century England.','Pride and Prejudice','In stock',15,NULL,150000,0002),(00000003,NULL,200000,1609,22,0,NULL,NULL,NULL,NULL,312,NULL,'A collection of sonnets exploring themes of love, loss, and mortality.','Sonnets','In stock',22,NULL,200000,0003),(00000004,NULL,120000,1920,8,0,NULL,NULL,NULL,NULL,288,NULL,'A thrilling mystery featuring the brilliant detective Hercule Poirot.','Murder on the Orient Express','In stock',8,NULL,120000,0004),(00000005,NULL,180000,1859,30,0,NULL,NULL,NULL,NULL,600,NULL,'A poignant tale of an orphan boy\'s journey through the grim realities of Victorian London.','Oliver Twist','In stock',30,NULL,180000,0005),(00000006,NULL,250000,1869,18,0,NULL,NULL,NULL,NULL,1200,NULL,'An epic novel exploring themes of war, peace, love, and family in 19th-century Russia.','War and Peace','In stock',18,NULL,250000,0006),(00000007,NULL,175000,1925,12,0,NULL,NULL,NULL,NULL,256,NULL,'A stream-of-consciousness novel exploring the inner lives of its characters.','Mrs. Dalloway','In stock',12,NULL,175000,0007),(00000008,NULL,220000,1967,25,0,NULL,NULL,NULL,NULL,400,NULL,'A magical realism masterpiece set in a fictional Colombian town.','One Hundred Years of Solitude','In stock',25,NULL,220000,0008),(00000009,NULL,280000,1954,35,0,NULL,NULL,NULL,NULL,1178,NULL,'An epic fantasy novel about a quest to destroy a powerful ring.','The Fellowship of the Ring','In stock',35,NULL,280000,0009),(00000010,NULL,160000,1960,7,0,NULL,NULL,NULL,NULL,281,NULL,'A coming-of-age story set in the American South during the 1930s.','To Kill a Mockingbird','In stock',7,NULL,160000,0010),(00000011,NULL,190000,1977,40,0,NULL,NULL,NULL,NULL,1138,NULL,'A terrifying novel about a malevolent clown who preys on children.','It','In stock',40,NULL,190000,0011),(00000012,NULL,100000,1811,5,0,NULL,NULL,NULL,NULL,216,NULL,'Another Austen novel exploring themes of love and social standing.','Sense and Sensibility','In stock',5,NULL,100000,0002),(00000013,NULL,130000,1623,10,0,NULL,NULL,NULL,NULL,250,NULL,'A famous Shakespearean tragedy.','Hamlet','In stock',10,NULL,130000,0003),(00000014,NULL,140000,1930,15,0,NULL,NULL,NULL,NULL,300,NULL,'A classic mystery featuring Miss Marple.','The Murder at the Vicarage','In stock',15,NULL,140000,0004),(00000015,NULL,165000,1860,20,0,NULL,NULL,NULL,NULL,500,NULL,'A novel with memorable characters and social commentary.','Great Expectations','In stock',20,NULL,165000,0005),(00000016,NULL,210000,1877,17,0,NULL,NULL,NULL,NULL,800,NULL,'Another Tolstoy masterpiece exploring themes of love and adultery.','Anna Karenina','In stock',17,NULL,210000,0006),(00000017,NULL,185000,1928,21,0,NULL,NULL,NULL,NULL,350,NULL,'A modernist novel with experimental narrative techniques.','To the Lighthouse','In stock',21,NULL,185000,0007),(00000018,NULL,230000,1985,28,0,NULL,NULL,NULL,NULL,500,NULL,'A magical realism story with fantastical elements.','Chronicle of a Death Foretold','In stock',28,NULL,230000,0008),(00000019,NULL,260000,1965,32,0,NULL,NULL,NULL,NULL,1000,NULL,'A fantasy novel that is part of a larger series.','The Two Towers','In stock',32,NULL,260000,0009),(00000020,NULL,155000,1987,9,0,NULL,NULL,NULL,NULL,400,NULL,'A horror novel with supernatural elements.','Misery','In stock',9,NULL,155000,0010),(00000021,NULL,205000,1982,38,0,NULL,NULL,NULL,NULL,800,NULL,'A horror novel about a writer who is stalked by his biggest fan.','The Shining','In stock',38,NULL,205000,0011),(00000024,NULL,100000,1999,100,0,NULL,NULL,NULL,NULL,NULL,NULL,'abc','abc','In stock',100,NULL,100000,0001);
/*!40000 ALTER TABLE `Book` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `beforeInsert_Book` BEFORE INSERT ON `Book` FOR EACH ROW BEGIN
    DECLARE validYear condition for SQLSTATE '45000';
    
    SET NEW.`TotalQuantity` = NEW.`QuantityStored` + NEW.`QuantitySold`;
    IF (NEW.`QuantityStored` > 0) THEN 
		SET NEW.`Status` = 'In stock';
	ELSE SET NEW.`Status` = 'Out of stock';
	END IF;
    
    IF (NEW.`PublicationDate` < 0 OR NEW.`PublicationDate` > 2024) THEN
		SIGNAL validYear
		SET MESSAGE_TEXT = 'Error: Year must be valid.';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `beforeUpdate_TotalQuantity_Price` BEFORE UPDATE ON `Book` FOR EACH ROW BEGIN
	DECLARE validYear condition for SQLSTATE '45000';
    
    SET NEW.`TotalQuantity` = NEW.`QuantityStored` + NEW.`QuantitySold`;
    IF (NEW.`QuantityStored` > 0) THEN 
		SET NEW.`Status` = 'In stock';
	ELSE SET NEW.`Status` = 'Out of stock';
	END IF;
    
    IF (NEW.`PublicationDate` < 0 OR NEW.`PublicationDate` > 2024) THEN
		SIGNAL validYear
		SET MESSAGE_TEXT = 'Error: Year must be valid.';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Book_Language`
--

DROP TABLE IF EXISTS `Book_Language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Book_Language` (
  `Language` varchar(20) NOT NULL,
  `BookID` int(10) unsigned zerofill NOT NULL,
  PRIMARY KEY (`Language`,`BookID`),
  KEY `fk_Book-Language` (`BookID`),
  CONSTRAINT `fk_Book-Language` FOREIGN KEY (`BookID`) REFERENCES `Book` (`BookID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book_Language`
--

LOCK TABLES `Book_Language` WRITE;
/*!40000 ALTER TABLE `Book_Language` DISABLE KEYS */;
INSERT INTO `Book_Language` VALUES ('English',0000000002),('French',0000000002),('German',0000000002),('English',0000000003),('English',0000000004),('English',0000000005),('English',0000000006),('French',0000000006),('Russian',0000000006),('English',0000000007),('French',0000000007),('English',0000000008),('French',0000000008),('German',0000000008),('Spanish',0000000008),('English',0000000009),('German',0000000009),('Japanese',0000000009),('English',0000000010),('Italian',0000000010),('Spanish',0000000010),('English',0000000011),('French',0000000011),('Italian',0000000011),('English',0000000012),('English',0000000013),('French',0000000013),('German',0000000013),('English',0000000014),('Spanish',0000000014),('English',0000000015),('English',0000000016),('German',0000000016),('Russian',0000000016),('English',0000000017),('Spanish',0000000018),('English',0000000019),('English',0000000020),('English',0000000021);
/*!40000 ALTER TABLE `Book_Language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categorizes`
--

DROP TABLE IF EXISTS `Categorizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categorizes` (
  `BookID` int(8) unsigned zerofill NOT NULL,
  `CategoryID` int(2) unsigned zerofill NOT NULL,
  PRIMARY KEY (`BookID`,`CategoryID`),
  KEY `fk_Category-Categorized` (`CategoryID`),
  CONSTRAINT `fk_Book-Categorized` FOREIGN KEY (`BookID`) REFERENCES `Book` (`BookID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Category-Categorized` FOREIGN KEY (`CategoryID`) REFERENCES `Category` (`CategoryID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categorizes`
--

LOCK TABLES `Categorizes` WRITE;
/*!40000 ALTER TABLE `Categorizes` DISABLE KEYS */;
INSERT INTO `Categorizes` VALUES (00000011,01),(00000020,01),(00000021,01),(00000002,02),(00000005,02),(00000006,02),(00000007,02),(00000012,02),(00000013,02),(00000015,02),(00000016,02),(00000017,02),(00000004,03),(00000014,03),(00000008,04),(00000018,04),(00000009,05),(00000019,05),(00000010,07),(00000003,08);
/*!40000 ALTER TABLE `Categorizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Category` (
  `CategoryID` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Description` tinytext,
  PRIMARY KEY (`CategoryID`),
  UNIQUE KEY `Name_UNIQUE` (`Name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (01,'Horror','Scary'),(02,'Classic Literature','Works of enduring literary merit, often recognized for their artistic excellence, historical significance, and lasting influence on subsequent literature. They typically explore universal themes and human experiences.'),(03,'Mystery/Crime Fiction','Stories centered around the investigation of a crime, often featuring detectives, suspense, clues, and a resolution that reveals the culprit. Emphasis is placed on plot twists and intrigue.'),(04,'Magical Realism','A genre that blends realistic narrative and magical elements. The fantastical elements are presented as ordinary occurrences within a seemingly realistic setting, creating a sense of wonder and questioning reality.'),(05,'Fantasy','Stories set in imaginary worlds with supernatural elements, often involving magic, mythical creatures, and quests. They typically explore themes of good versus evil, heroism, and self-discovery.'),(07,'Coming-of-Age','Stories that focus on the growth and development of a protagonist from youth to adulthood, often involving challenges, self-discovery, and the development of a stronger sense of identity.'),(08,'Poetry','Literary works characterized by the use of aesthetic and rhythmic qualities of language—such as phonaesthetics, sound symbolism, and meter—to evoke meanings in addition to, or in place of, ordinary prose.'),(10,'Sci-fi','Scienctific Fiction');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Discount`
--

DROP TABLE IF EXISTS `Discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Discount` (
  `DiscountID` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `DiscountPercentage` decimal(3,2) DEFAULT NULL,
  `StartDate` datetime(5) NOT NULL,
  `EndDate` datetime(5) NOT NULL,
  `DiscountValue` int DEFAULT NULL,
  PRIMARY KEY (`DiscountID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Discount`
--

LOCK TABLES `Discount` WRITE;
/*!40000 ALTER TABLE `Discount` DISABLE KEYS */;
/*!40000 ALTER TABLE `Discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Discounts`
--

DROP TABLE IF EXISTS `Discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Discounts` (
  `BookID` int(8) unsigned zerofill NOT NULL,
  `DiscountID` int(5) unsigned zerofill NOT NULL,
  PRIMARY KEY (`BookID`,`DiscountID`),
  KEY `fk_Discount-Discounts` (`DiscountID`),
  CONSTRAINT `fk_Book-Discounts` FOREIGN KEY (`BookID`) REFERENCES `Book` (`BookID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Discount-Discounts` FOREIGN KEY (`DiscountID`) REFERENCES `Discount` (`DiscountID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Discounts`
--

LOCK TABLES `Discounts` WRITE;
/*!40000 ALTER TABLE `Discounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Discounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `afterInsert_Discount` BEFORE INSERT ON `Discounts` FOR EACH ROW BEGIN
	DECLARE percentage decimal(6, 2);
    DECLARE discount_value int;
    DECLARE start_date datetime(5);
    DECLARE end_date datetime(5);
    DECLARE today datetime(5);
    
	SELECT CURRENT_TIMESTAMP(5) INTO today;
    
    SELECT `DiscountPercentage`, `DiscountValue`, `StartDate`, `EndDate`
    INTO percentage, discount_value, start_date, end_date
    FROM `Discount`
    WHERE `DiscountID` = NEW.`DiscountID`;
    
    IF ((today >= start_date) AND (today <= end_date)) THEN
		IF (percentage IS NOT NULL) THEN
			UPDATE `Book`
			SET `SellingPrice` = `OriginalPrice` * (1 - percentage)
			WHERE `BookID` = NEW.`BookID`;
		ELSEIF ((percentage IS NULL) AND (discount_value IS NOT NULL)) THEN
			UPDATE `Book`
			SET `SellingPrice` = `OriginalPrice` - discount_value
			WHERE `BookID` = NEW.`BookID`;
		END IF;
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `afterUpdate_Discount` BEFORE UPDATE ON `Discounts` FOR EACH ROW BEGIN
	DECLARE percentage decimal(6, 2);
    DECLARE discount_value int;
    DECLARE start_date datetime(5);
    DECLARE end_date datetime(5);
    DECLARE today datetime(5);
    
	SELECT CURRENT_TIMESTAMP(5) INTO today;
    
    SELECT `DiscountPercentage`, `DiscountValue`, `StartDate`, `EndDate`
    INTO percentage, discount_value, start_date, end_date
    FROM `Discount`
    WHERE `DiscountID` = NEW.`DiscountID`;
    
    IF ((today >= start_date) AND (today <= end_date)) THEN
		IF (percentage IS NOT NULL) THEN
			UPDATE `Book`
			SET `SellingPrice` = `OriginalPrice` * (1 - percentage)
			WHERE `BookID` = NEW.`BookID`;
		ELSEIF ((percentage IS NULL) AND (discount_value IS NOT NULL)) THEN
			UPDATE `Book`
			SET `SellingPrice` = `OriginalPrice` - discount_value
			WHERE `BookID` = NEW.`BookID`;
		END IF;
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Order`
--

DROP TABLE IF EXISTS `Order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Order` (
  `OrderID` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `OrderDate` datetime(5) DEFAULT NULL,
  `Status` bit(2) NOT NULL,
  `UserID` int(10) unsigned zerofill NOT NULL,
  `TotalPrice` int DEFAULT '0',
  PRIMARY KEY (`OrderID`),
  KEY `fk_User-Order` (`UserID`),
  CONSTRAINT `fk_User-Order` FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Order_chk_1` CHECK ((`TotalPrice` > 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Order`
--

LOCK TABLES `Order` WRITE;
/*!40000 ALTER TABLE `Order` DISABLE KEYS */;
/*!40000 ALTER TABLE `Order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderItem`
--

DROP TABLE IF EXISTS `OrderItem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrderItem` (
  `OrderItemID` int(9) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `Quantity` int NOT NULL DEFAULT '0',
  `ItemTotalPrice` int NOT NULL DEFAULT '0',
  `BookID` int(10) unsigned zerofill NOT NULL,
  `OrderID` int(10) unsigned zerofill NOT NULL,
  PRIMARY KEY (`OrderItemID`),
  KEY `fk_Book-OrderItem` (`BookID`),
  KEY `fk_Order-OrderItem` (`OrderID`),
  CONSTRAINT `fk_Book-OrderItem` FOREIGN KEY (`BookID`) REFERENCES `Book` (`BookID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Order-OrderItem` FOREIGN KEY (`OrderID`) REFERENCES `Order` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `OrderItem_chk_1` CHECK ((`Quantity` >= 0)),
  CONSTRAINT `OrderItem_chk_2` CHECK ((`ItemTotalPrice` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderItem`
--

LOCK TABLES `OrderItem` WRITE;
/*!40000 ALTER TABLE `OrderItem` DISABLE KEYS */;
/*!40000 ALTER TABLE `OrderItem` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `afterInsert_OrderItem` BEFORE INSERT ON `OrderItem` FOR EACH ROW BEGIN
	DECLARE price int;
    
    SELECT `SellingPrice` INTO price
    FROM `Book`
    WHERE `BookID` = NEW.`BookID`;
    
    IF (NEW.`Quantity` > 0) THEN
		SET NEW.`ItemTotalPrice` = price * NEW.`Quantity`;
        
        UPDATE `Order`
        SET `TotalPrice` = `TotalPrice` + price * NEW.`Quantity`
        WHERE `OrderID` = NEW.`OrderID`;
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `afterUpdate_OrderItem` BEFORE UPDATE ON `OrderItem` FOR EACH ROW BEGIN
	DECLARE price int;
    
    SELECT `SellingPrice` INTO price
    FROM `Book`
    WHERE `BookID` = NEW.`BookID`;
    
    IF (NEW.`Quantity` > 0) THEN
		SET NEW.`ItemTotalPrice` = price * NEW.`Quantity`;
        
        UPDATE `Order`
        SET `TotalPrice` = `TotalPrice` + price * NEW.`Quantity`
        WHERE `OrderID` = NEW.`OrderID`;
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `afterDelete_OrderItem` AFTER DELETE ON `OrderItem` FOR EACH ROW BEGIN
	DECLARE price int;
    
    SELECT `SellingPrice` INTO price
    FROM `Book`
    WHERE `BookID` = OLD.`BookID`;
	
    UPDATE `Order`
	SET `TotalPrice` = `TotalPrice` - price * OLD.`Quantity`
	WHERE `OrderID` = OLD.`OrderID`;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Payment`
--

DROP TABLE IF EXISTS `Payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Payment` (
  `PaymentID` int(9) unsigned zerofill NOT NULL,
  `PaymentDate` datetime(5) NOT NULL DEFAULT CURRENT_TIMESTAMP(5),
  `PaymentAmount` int NOT NULL,
  `PaymentStatus` binary(2) NOT NULL,
  `OrderID` int(10) unsigned zerofill DEFAULT NULL,
  `UserID` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`PaymentID`),
  KEY `fk_Order-Payment` (`OrderID`),
  KEY `fk_User-Payment` (`UserID`),
  CONSTRAINT `fk_Order-Payment` FOREIGN KEY (`OrderID`) REFERENCES `Order` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_User-Payment` FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Payment`
--

LOCK TABLES `Payment` WRITE;
/*!40000 ALTER TABLE `Payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `Payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Publisher`
--

DROP TABLE IF EXISTS `Publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Publisher` (
  `PublisherID` int(4) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Location` tinytext NOT NULL,
  PRIMARY KEY (`PublisherID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Publisher`
--

LOCK TABLES `Publisher` WRITE;
/*!40000 ALTER TABLE `Publisher` DISABLE KEYS */;
INSERT INTO `Publisher` VALUES (0001,'SkyBooks','HCMC'),(0002,'Penguin Classics','London, UK'),(0003,'Oxford University Press','Oxford, UK'),(0004,'Random House','New York, USA'),(0005,'HarperCollins','New York, USA'),(0006,'Vintage Books','New York, USA'),(0007,'Scribner','New York, USA'),(0008,'Bloomsbury Publishing','London, UK'),(0009,'Houghton Mifflin Harcourt','Boston, USA'),(0010,'Macmillan Publishers','New York, USA'),(0011,'Little, Brown and Company','New York, USA');
/*!40000 ALTER TABLE `Publisher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Review`
--

DROP TABLE IF EXISTS `Review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Review` (
  `ReviewID` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `Rating` int unsigned NOT NULL,
  `ReviewDate` datetime(5) NOT NULL DEFAULT CURRENT_TIMESTAMP(5),
  `ReviewContent` tinytext,
  `UserID` int(6) unsigned zerofill NOT NULL,
  `BookID` int(8) unsigned zerofill NOT NULL,
  PRIMARY KEY (`ReviewID`),
  KEY `fk_Book-Review` (`BookID`),
  KEY `fk_User-Review` (`UserID`),
  CONSTRAINT `fk_Book-Review` FOREIGN KEY (`BookID`) REFERENCES `Book` (`BookID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_User-Review` FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Review`
--

LOCK TABLES `Review` WRITE;
/*!40000 ALTER TABLE `Review` DISABLE KEYS */;
/*!40000 ALTER TABLE `Review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Translates`
--

DROP TABLE IF EXISTS `Translates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Translates` (
  `BookID` int(10) unsigned zerofill NOT NULL,
  `TranslatorID` int(10) unsigned zerofill NOT NULL,
  PRIMARY KEY (`BookID`,`TranslatorID`),
  KEY `fk_Translator_idx` (`TranslatorID`),
  CONSTRAINT `fk_Book-Translate` FOREIGN KEY (`BookID`) REFERENCES `Book` (`BookID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Translator` FOREIGN KEY (`TranslatorID`) REFERENCES `Translator` (`TranslatorID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Translates`
--

LOCK TABLES `Translates` WRITE;
/*!40000 ALTER TABLE `Translates` DISABLE KEYS */;
INSERT INTO `Translates` VALUES (0000000006,0000000002),(0000000016,0000000002),(0000000008,0000000003),(0000000002,0000000004),(0000000013,0000000005),(0000000010,0000000006),(0000000009,0000000007),(0000000014,0000000009),(0000000007,0000000010),(0000000011,0000000011);
/*!40000 ALTER TABLE `Translates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Translator`
--

DROP TABLE IF EXISTS `Translator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Translator` (
  `TranslatorID` int(4) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Description` tinytext,
  PRIMARY KEY (`TranslatorID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Translator`
--

LOCK TABLES `Translator` WRITE;
/*!40000 ALTER TABLE `Translator` DISABLE KEYS */;
INSERT INTO `Translator` VALUES (0001,'Me','English'),(0002,'Anya Petrova','A renowned translator of Russian literature, known for her nuanced understanding of Tolstoy\'s prose and her ability to capture his emotional depth.'),(0003,'Javier Rodriguez','A celebrated translator of Spanish literature, specializing in magical realism and known for his elegant and evocative translations.'),(0004,'Emily Carter','A highly respected translator of English literature, specializing in Victorian novels and praised for her precise and faithful renderings.'),(0005,'Jean-Pierre Dubois','A distinguished translator of English and French literature, known for his ability to adapt nuanced language to different cultural contexts.'),(0006,'Isabella Rossi','A prolific translator of both classic and contemporary literature, praised for her fluency and attention to detail.'),(0007,'Klaus Richter','A German translator with a particular focus on English-language fantasy and science fiction, known for his engaging and accessible style.'),(0008,'Aiko Tanaka','A Japanese translator specializing in American literature, known for her insightful interpretations of complex themes.'),(0009,'David Hernandez','A translator of Spanish and English literature, specializing in historical fiction and praised for his ability to capture the historical context.'),(0010,'Margaret Olsen','A translator of English literature, specializing in poetry and known for her sensitivity to rhythm and rhyme.'),(0011,'Alessandro Moretti','An Italian translator with a broad range of experience, known for his accurate and clear translations of diverse literary styles.');
/*!40000 ALTER TABLE `Translator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `UserID` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Email` varchar(45) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Username` varchar(30) NOT NULL,
  `Role` bit(1) NOT NULL,
  `Address` tinytext,
  `DateJoined` datetime(5) NOT NULL DEFAULT CURRENT_TIMESTAMP(5),
  `PhoneNumber` varchar(10) DEFAULT NULL,
  `Gender` bit(2) DEFAULT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (000001,NULL,'abc@mail.com','1','ABC',_binary '\0',NULL,'2024-11-20 21:00:48.41468',NULL,NULL),(000004,NULL,'def@mail.com','2','DEF',_binary '',NULL,'2024-11-22 08:23:29.04997',NULL,NULL),(000005,NULL,'ghi@mail.com','1','GHI',_binary '\0',NULL,'2024-11-22 08:40:09.33606',NULL,NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `User_BEFORE_INSERT` BEFORE INSERT ON `User` FOR EACH ROW BEGIN
	DECLARE admin_count int;
    
	SELECT COUNT(*) INTO admin_count FROM `User` WHERE `Role` = 0;
    
    IF (admin_count = 2 and NEW.`Password` = '1') THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Maximum of 2 admins is allowed.';
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Wishes`
--

DROP TABLE IF EXISTS `Wishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Wishes` (
  `BookID` int(8) unsigned zerofill NOT NULL,
  `WishlistID` int(7) unsigned zerofill NOT NULL,
  PRIMARY KEY (`BookID`,`WishlistID`),
  KEY `fk_Wishlist-Wished` (`WishlistID`),
  CONSTRAINT `fk_Book-Wished` FOREIGN KEY (`BookID`) REFERENCES `Book` (`BookID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Wishlist-Wished` FOREIGN KEY (`WishlistID`) REFERENCES `Wishlist` (`WishlistID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Wishes`
--

LOCK TABLES `Wishes` WRITE;
/*!40000 ALTER TABLE `Wishes` DISABLE KEYS */;
/*!40000 ALTER TABLE `Wishes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Wishlist`
--

DROP TABLE IF EXISTS `Wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Wishlist` (
  `WishlistID` int(7) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `DateCreated` datetime(5) NOT NULL DEFAULT CURRENT_TIMESTAMP(5),
  `UserID` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`WishlistID`),
  KEY `fk_User-Wishlist` (`UserID`),
  CONSTRAINT `fk_User-Wishlist` FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Wishlist`
--

LOCK TABLES `Wishlist` WRITE;
/*!40000 ALTER TABLE `Wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `Wishlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'Bookstore'
--
/*!50003 DROP PROCEDURE IF EXISTS `AddAuthor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddAuthor`(
	IN p_Name VARCHAR(50),
    IN p_Description TINYTEXT
)
BEGIN
	INSERT INTO Author(`Name`, `Description`)
    VALUES(p_Name, p_Description);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AddBook` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddBook`(
	IN ID INT,
	IN p_BookName VARCHAR(50),
    IN p_OriginalPrice INT,
    IN p_QuantityStored INT,
    IN p_PublisherID INT,
    IN p_PublicationDate INT,
    IN p_QuantitySold INT,
    IN p_Description TEXT,
    IN p_SellingPrice INT
)
BEGIN
    DECLARE p_BookID INT;

	INSERT INTO Book(BookName, OriginalPrice, PublicationDate, QuantityStored, QuantitySold, `Description`, SellingPrice, PublisherID)
    VALUES(p_BookName, p_OriginalPrice, p_PublicationDate, p_QuantityStored, p_QuantitySold, p_Description, p_SellingPrice, p_PublisherID);
    
	SELECT max(BookID) INTO p_BookID FROM Book;
    
    INSERT INTO Authors(AuthorID, BookID)
    VALUES(ID, p_BookID);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteAuthor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteAuthor`(
  IN p_AuthorID INT
)
BEGIN
  DELETE FROM Author WHERE AuthorID = p_AuthorID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteBook` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteBook`(
	IN p_BookID INT
)
BEGIN
	DELETE FROM Book WHERE BookID = p_BookID;
    
    DELETE FROM Authors WHERE BookID = p_BookID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllAuthors` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllAuthors`()
BEGIN
	SELECT `AuthorID`, `Name` FROM `Author`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllBooks` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllBooks`()
BEGIN
	SELECT BookID, BookName, SellingPrice FROM Book;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCategories` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCategories`()
BEGIN
	SELECT CategoryID, `Name`, `Description` FROM Category;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllPublishers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllPublishers`()
BEGIN
	SELECT PublisherID, `Name`, Location FROM Publisher;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllTranslators` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllTranslators`()
BEGIN
	SELECT * FROM Translator;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAuthor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAuthor`(IN ID INT)
BEGIN
	SELECT `Name`, `Description`
	FROM Author
	WHERE AuthorID = ID;
    
    SELECT `BookName`, A.`BookID`
    FROM Authors AS A JOIN Book AS B ON A.BookID = B.BookID
    WHERE A.AuthorID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetBook` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetBook`(IN ID INT)
BEGIN
	SELECT OriginalPrice, PublicationDate, QuantityStored, QuantitySold, AgeRating,
	Width, `Length`, Height, PageCount, Mass, A.`Description`, BookName, `Status`,
    `Format`, `SellingPrice`, A.PublisherID, B.`Name` AS PublisherName
    FROM Book AS A JOIN Publisher AS B ON A.PublisherID = B.PublisherID
	WHERE BookID = ID;
    
    SELECT  B.`Name` AS AuthorName, A.AuthorID
    FROM Authors AS A JOIN Author AS B ON A.AuthorID = B.AuthorID
    WHERE BookID = ID;
    
    SELECT B.`Name` AS TranslatorName, A.TranslatorID
    FROM Translates AS A JOIN Translator AS B ON A.TranslatorID = B.TranslatorID
    WHERE BookID = ID;
    
    SELECT B.`Name` AS CategoryName, A.CategoryID
    FROM Categorizes AS A JOIN Category AS B ON A.CategoryID = B.CategoryID
    WHERE BookID = ID;
    
	SELECT `Language`
    FROM `Book_Language`
    WHERE BookID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCategory`(IN ID INT)
BEGIN
	SELECT `Name`, `Description`
	FROM Category
	WHERE CategoryID = ID;
    
    SELECT `BookName`, A.`BookID`
    FROM Categorizes AS A JOIN Book AS B ON A.BookID = B.BookID
    WHERE A.CategoryID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetPublisher` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetPublisher`(IN ID INT)
BEGIN
	SELECT `Name`, `Location`
	FROM Publisher
	WHERE PublisherID = ID;
    
    SELECT `BookName`, `BookID`
    FROM Book
    WHERE PublisherID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetTranslator` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetTranslator`(IN ID INT)
BEGIN
	SELECT `Name`, `Description`
	FROM Translator
	WHERE TranslatorID = ID;
    
    SELECT `BookName`, A.`BookID`
    FROM Translates AS A JOIN Book AS B ON A.BookID = B.BookID
    WHERE A.TranslatorID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateAuthor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateAuthor`(
	IN ID INT,
    IN p_Name VARCHAR(50),
    IN p_Description TINYTEXT
)
BEGIN
	UPDATE Author
	SET `Name` = p_Name, `Description` = p_Description
	WHERE AuthorID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateBook` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateBook`(
	IN ID INT,
    IN p_BookName VARCHAR(50),
    IN p_OriginalPrice INT,
    IN p_QuantityStored INT,
    IN p_PublisherID INT,
    IN p_PublicationDate INT,
    IN p_QuantitySold INT,
    IN p_Description TEXT,
    IN p_SellingPrice INT
)
BEGIN
	UPDATE Book
	SET BookName = p_BookName, OriginalPrice = p_OriginalPrice, QuantityStored = p_QuantityStored,
		PublisherID = p_PublisherID, PublicationDate = p_PublicationDate, QuantitySold = p_QuantitySold,
        `Description` = p_Description, SellingPrice = p_SellingPrice
	WHERE BookID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCategory`(
	IN ID INT,
    IN p_Name VARCHAR(50),
    IN p_Description TINYTEXT
)
BEGIN
	UPDATE Category
	SET `Name` = p_Name, `Description` = p_Description
	WHERE CategoryID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdatePublisher` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdatePublisher`(
	IN ID INT,
    IN p_Name VARCHAR(50),
    IN p_Location TINYTEXT
)
BEGIN
	UPDATE Publisher
	SET `Name` = p_Name, `Location` = p_Location
	WHERE PublisherID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateTranslator` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateTranslator`(
	IN ID INT,
    IN p_Name VARCHAR(50),
    IN p_Description TINYTEXT
)
BEGIN
	UPDATE Translator
	SET `Name` = p_Name, `Description` = p_Description
	WHERE TranslatorID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-09  9:28:54
