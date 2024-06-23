-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: bizpa0atsqhnbybc2y7r-mysql.services.clever-cloud.com    Database: bizpa0atsqhnbybc2y7r
-- ------------------------------------------------------
-- Server version	8.0.22-13

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'a05a675a-1414-11e9-9c82-cecd01b08c7e:1-491550428,
a38a16d0-767a-11eb-abe2-cecd029e558e:1-448827987';

--
-- Table structure for table `case`
--

DROP TABLE IF EXISTS `case`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `case` (
  `idCase` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `specie` varchar(30) NOT NULL,
  `breed` varchar(30) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `birthday` int NOT NULL,
  `clinical` varchar(200) NOT NULL,
  `exploration` varchar(200) NOT NULL,
  `tests` varchar(200) NOT NULL,
  `results` varchar(200) NOT NULL,
  `treatment` varchar(200) NOT NULL,
  `evolution` varchar(200) NOT NULL,
  `comments` varchar(200) NOT NULL,
  `public` tinyint(1) NOT NULL,
  `fk_Vet` int NOT NULL,
  PRIMARY KEY (`idCase`),
  KEY `fk_case_user_idx` (`fk_Vet`),
  CONSTRAINT `fk_case_user` FOREIGN KEY (`fk_Vet`) REFERENCES `vet` (`idVet`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case`
--

LOCK TABLES `case` WRITE;
/*!40000 ALTER TABLE `case` DISABLE KEYS */;
INSERT INTO `case` VALUES (1,'Brigitte','Canina','Bulldog Francés','femenino',2011,'dolor abdominal','abdomen en tabla, mucosas congestivas, taquipnea, hipertermia','leucocitosis con neutrofilia. AST, ALT, ASP elevadas.','Pancreatitis','Hospitalización 24 horas, metronidazol, maropitant, paracetamol','Alta 24 h','Revisión en una semana',1,1),(2,'Raya','felina','Común','femenino',2021,'vómitos','Dolor abdominal','eco abdomen. coprológico','pancreatitis','hospitalización','favorable. Alta en 24 horas ','revisión en dos días',1,2),(3,'Negu','canina','Cane Corso','femenino',2014,'dolor oídos','espiga oído derecho','exploración física','otitis por cuerpo extraño','atb tópico ','favorable','revisión en una semana',1,2),(4,'Puchino','felina','Común','masculino',2022,'herida lomo','palidez mucosas; herida no cicatriza','analítica completa','FelV/FIV +','antibiótico y meloxicam','mejora de la anemia, herida mejora pero no termina de cerrar','curas todos los días para mantener la herida sin infección.',1,2),(5,'Mafalda','canina','Bulldog Francés','femenino',2011,'prurito generalizado','Eccema','Exploración física, prueba alergias','Atopia+ intolerancia alimentaria','pienso hipoalergénico + apoquel ','favorable durante tratamiento','mantener pienso hipoalergénico',1,2);
/*!40000 ALTER TABLE `case` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vet`
--

DROP TABLE IF EXISTS `vet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vet` (
  `idVet` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `nameVet` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `public` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idVet`),
  UNIQUE KEY `userName_UNIQUE` (`userName`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vet`
--

LOCK TABLES `vet` WRITE;
/*!40000 ALTER TABLE `vet` DISABLE KEYS */;
INSERT INTO `vet` VALUES (1,'nat','nat','nat@nat.com','12341234','zaragoza','españa',1),(2,'demo','demo','demo@demo.com','$2b$10$svbeMpM7Llu9kU2UpICFWO.sQQX9aw/6kW52f7X.UmZOrAbv6kwVC','Zaragoza','España',1);
/*!40000 ALTER TABLE `vet` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-23 13:26:31
