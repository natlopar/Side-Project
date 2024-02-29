-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vetfolio
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
  `birthday` date NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case`
--

LOCK TABLES `case` WRITE;
/*!40000 ALTER TABLE `case` DISABLE KEYS */;
INSERT INTO `case` VALUES (1,'Mafalda','Canina','Bulldog Francés','2011-07-27','dolor abdominal','abdomen en tabla, mucosas congestivas, taquipnea, hipertermia','leucocitosis con neutrofilia. AST, ALT, ASP elevadas.','Pancreatitis','Hospitalización 24 horas, metronidazol, maropitant, paracetamol','Alta 24 h','Revisión en una semana',1,1);
/*!40000 ALTER TABLE `case` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-23 18:15:40
