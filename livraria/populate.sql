-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: livraria
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `nacionalidade` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,'JRR Tolkien','sul-africano','2022-12-07 14:12:31','2022-12-07 14:12:31'),(2,'Ursula LeGuin','estadunidense','2022-12-07 14:12:31','2022-12-07 14:12:31'),(3,'Machado de Assis','brasileiro','2022-12-07 14:12:31','2022-12-07 14:12:31');
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editoras`
--

DROP TABLE IF EXISTS `editoras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editoras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `cidade` text NOT NULL,
  `email` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editoras`
--

LOCK TABLES `editoras` WRITE;
/*!40000 ALTER TABLE `editoras` DISABLE KEYS */;
INSERT INTO `editoras` VALUES (1,'Europa-América','Lisboa','e@e.com','2022-12-07 14:12:31','2022-12-07 14:12:31'),(2,'Morro Branco','São Paulo','m@m.com','2022-12-07 14:12:31','2022-12-07 14:12:31'),(3,'Aleph','São Paulo','al@al.com','2022-12-07 14:12:31','2022-12-07 14:12:31'),(4,'Ateliê','São Paulo','a@a.com','2022-12-07 14:12:31','2022-12-07 14:12:31');
/*!40000 ALTER TABLE `editoras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livros`
--

DROP TABLE IF EXISTS `livros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` text NOT NULL,
  `paginas` int NOT NULL,
  `editora_id` int NOT NULL,
  `autor_id` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `editora_id` (`editora_id`),
  KEY `autor_id` (`autor_id`),
  CONSTRAINT `livros_ibfk_1` FOREIGN KEY (`editora_id`) REFERENCES `editoras` (`id`),
  CONSTRAINT `livros_ibfk_2` FOREIGN KEY (`autor_id`) REFERENCES `autores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livros`
--

LOCK TABLES `livros` WRITE;
/*!40000 ALTER TABLE `livros` DISABLE KEYS */;
INSERT INTO `livros` VALUES (1,'O Hobbit',230,1,1,'2022-12-07 14:12:31','2022-12-07 14:12:31'),(2,'O Silmarillion',400,1,1,'2022-12-07 14:12:31','2022-12-07 14:12:31'),(3,'O Silmarillion',400,1,1,'2022-12-07 14:12:31','2022-12-07 14:12:31'),(4,'O Feiticeiro de Terramar',450,2,2,'2022-12-07 14:12:31','2022-12-07 14:12:31'),(5,'Os Despossuídos',300,3,2,'2022-12-07 14:12:31','2022-12-07 14:12:31'),(6,'Memórias Póstumas de Brás Cubas',150,4,3,'2022-12-07 14:12:31','2022-12-07 14:12:31');
/*!40000 ALTER TABLE `livros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-07 15:39:25
