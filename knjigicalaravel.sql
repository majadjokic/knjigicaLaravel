-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2022 at 12:17 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `knjigicalaravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `type_user` varchar(20) NOT NULL,
  `user_name` varchar(60) NOT NULL,
  `activity` varchar(300) NOT NULL,
  `date` varchar(11) NOT NULL,
  `time` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `type_user`, `user_name`, `activity`, `date`, `time`) VALUES
(1, 'admin', 'Maja', 'Maja has loged in.', '05.05.2022.', '19:44:24'),
(2, 'admin', 'Maja', 'Maja has loged in.', '05.05.2022.', '19:44:42'),
(3, 'admin', 'Maja', 'Maja has loged in.', '05.05.2022.', '19:45:47'),
(4, 'admin', 'Maja', 'Maja has loged in.', '05.05.2022.', '19:46:59'),
(5, 'admin', 'Maja', 'Maja has loged in.', '05.05.2022.', '19:49:31'),
(6, 'admin', 'Maja', 'Maja has loged out.', '05.05.2022.', '19:49:33'),
(7, 'admin', 'Maja', 'Maja has loged in.', '05.05.2022.', '19:49:36'),
(8, 'admin', 'Maja', 'Maja has loged in.', '06.05.2022.', '08:55:52'),
(9, 'admin', 'Maja', 'Maja has loged in.', '06.05.2022.', '09:48:08'),
(10, 'admin', 'Maja', 'Maja has loged in.', '06.05.2022.', '13:19:15'),
(11, 'admin', 'Maja', 'Maja je dodao/la pisca: Maja Djokic.', '06.05.2022.', '16:47:37'),
(12, 'admin', 'Maja', 'Maja je dodao/la kategoriju: Majaizam.', '06.05.2022.', '16:47:48'),
(13, 'admin', 'Maja', 'Maja se ulogovao.', '06.05.2022.', '19:05:40'),
(14, 'admin', 'Maja', 'Maja je dodao/la kategoriju: Mimi.', '06.05.2022.', '19:28:35'),
(15, 'known', '2', '2 se ulogovao.', '06.05.2022.', '22:53:09'),
(16, 'known', '2', '2 se izlogovao.', '06.05.2022.', '22:53:53'),
(17, 'known', 'milicaaa', 'milicaaa se ulogovao.', '06.05.2022.', '22:54:07'),
(18, 'known', 'milicaaa', 'milicaaa se izlogovao.', '06.05.2022.', '22:57:45'),
(19, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '06.05.2022.', '23:00:46'),
(20, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '07.05.2022.', '01:05:26'),
(21, 'admin', 'petarAdmin', 'petarAdmin se izlogovao.', '07.05.2022.', '01:05:35'),
(22, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '07.05.2022.', '01:05:54'),
(23, 'known', 'milicaaa', 'milicaaa se ulogovao.', '07.05.2022.', '08:00:30'),
(24, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '07.05.2022.', '12:59:59'),
(25, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '07.05.2022.', '15:39:03'),
(26, 'admin', 'petarAdmin', 'petarAdmin se izlogovao.', '07.05.2022.', '15:39:59'),
(27, 'unknown', 'Nepoznati korisnik', 'Nepoznati korisnik se ulogovao.', '07.05.2022.', '15:40:11'),
(28, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '07.05.2022.', '15:40:25'),
(29, 'admin', 'petarAdmin', 'petarAdmin se izlogovao.', '07.05.2022.', '15:44:43'),
(30, 'unknown', 'Nepoznati korisnik', 'Nepoznati korisnik nam je poslao mejl. Odgovorite što pre možete.', '07.05.2022.', '15:46:11'),
(31, 'known', 'milicaaa', 'milicaaa se ulogovao.', '07.05.2022.', '15:46:24'),
(32, 'known', 'milicaaa', 'milicaaa nam je poslao mejl. Odgovorite što pre možete.', '07.05.2022.', '15:46:35'),
(33, 'known', 'milicaaa', 'milicaaa se izlogovao.', '07.05.2022.', '15:46:44'),
(34, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '07.05.2022.', '15:47:28'),
(35, 'admin', 'petarAdmin', 'petarAdmin nam je poslao mejl. Odgovorite što pre možete.', '07.05.2022.', '15:47:39'),
(36, 'admin', 'petarAdmin', 'petarAdmin je obrisao/la proizvod: Srce tame.', '07.05.2022.', '16:58:17'),
(37, 'known', 'milicaaa', 'milicaaa se ulogovao.', '07.05.2022.', '22:09:33'),
(38, '2', 'milicaaa', 'milicaaa je obavio kupovinu.', '07.05.2022.', '22:25:26'),
(39, '2', 'milicaaa', 'milicaaa je obavio kupovinu.', '07.05.2022.', '22:27:32'),
(40, '2', 'milicaaa', 'milicaaa je obavio kupovinu.', '07.05.2022.', '22:42:13'),
(41, '2', 'milicaaa', 'milicaaa je obavio kupovinu.', '07.05.2022.', '22:43:39'),
(43, '2', 'milicaaa', 'milicaaa je obavio kupovinu.', '07.05.2022.', '22:52:03'),
(44, '2', 'milicaaa', 'milicaaa je obavio kupovinu.', '08.05.2022.', '01:45:34'),
(45, 'known', 'milicaaa', 'milicaaa se izlogovao.', '08.05.2022.', '01:45:50'),
(46, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '08.05.2022.', '01:46:26'),
(47, 'known', 'milicaaa', 'milicaaa se ulogovao.', '09.12.2022.', '18:37:39'),
(48, 'known', 'milicaaa', 'milicaaa se izlogovao.', '09.12.2022.', '18:38:09'),
(49, 'known', 'milicaaa', 'milicaaa se ulogovao.', '09.12.2022.', '18:38:31'),
(50, 'known', 'milicaaa', 'milicaaa se izlogovao.', '09.12.2022.', '18:38:42'),
(51, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '09.12.2022.', '18:39:06'),
(52, 'admin', 'petarAdmin', 'petarAdmin se izlogovao.', '09.12.2022.', '18:42:44'),
(53, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '09.12.2022.', '18:43:00'),
(54, 'admin', 'petarAdmin', 'petarAdmin se izlogovao.', '09.12.2022.', '18:45:16'),
(55, 'known', 'milicaaa', 'milicaaa se ulogovao.', '09.12.2022.', '18:45:30'),
(56, 'known', 'milicaaa', 'milicaaa se izlogovao.', '09.12.2022.', '18:45:37'),
(57, 'admin', 'petarAdmin', 'petarAdmin se ulogovao.', '09.12.2022.', '18:45:47'),
(58, 'admin', 'petarAdmin', 'petarAdmin je dodao/la pisca: Inio Asano.', '09.12.2022.', '19:41:58'),
(59, 'admin', 'petarAdmin', 'petarAdmin je dodao/la kategoriju: Manga i strip.', '09.12.2022.', '19:42:34'),
(60, 'admin', 'petarAdmin', 'petarAdmin je dodao/la kategoriju: StarWay.', '09.12.2022.', '19:42:51'),
(61, 'admin', 'Maja', 'Maja pokušava da vidi da li ovo radi', '09.12.2022.', '19:45:30'),
(62, 'admin', 'petarAdmin', 'petarAdmin je dodao/la proizvod: Naslov.', '09.12.2022.', '21:12:11'),
(63, 'admin', 'petarAdmin', 'petarAdmin je dodao/la proizvod: Naslov.', '09.12.2022.', '22:30:30'),
(64, 'admin', 'petarAdmin', 'petarAdmin je dodao/la proizvod: Naslov.', '09.12.2022.', '22:32:03'),
(65, 'admin', 'petarAdmin', 'petarAdmin je dodao/la proizvod: Laku noć, Punpune 1.', '09.12.2022.', '22:34:31'),
(66, 'admin', 'petarAdmin', 'petarAdmin je dodao/la proizvod: Laku noć, Punpune 1.', '09.12.2022.', '22:38:09'),
(67, 'admin', 'petarAdmin', 'petarAdmin je obrisao/la proizvod: Naslov.', '09.12.2022.', '22:40:47'),
(68, 'admin', 'petarAdmin', 'petarAdmin je obrisao/la proizvod: Naslov.', '09.12.2022.', '22:41:00'),
(69, 'admin', 'petarAdmin', 'petarAdmin je obrisao/la proizvod: Laku noć, Punpune 1.', '09.12.2022.', '22:41:06'),
(70, 'admin', 'petarAdmin', 'Korisnik petarAdmin se ulogovao.', '10.12.2022.', '12:14:44'),
(71, 'admin', 'petarAdmin', 'petarAdmin je izmenio/la proizvod: Laku noć, Punpune 1.', '10.12.2022.', '16:01:15'),
(72, 'admin', 'petarAdmin', 'petarAdmin je dodao/la proizvod: Majina knjiga.', '10.12.2022.', '17:03:49'),
(73, 'admin', 'petarAdmin', 'petarAdmin je izmenio/la proizvod: Majina knjiga.', '10.12.2022.', '17:07:53'),
(74, 'unknown', 'Nepoznati korisnik', 'Neko nam je poslao mejl. Odgovorite što pre možete.', '10.12.2022.', '21:24:36'),
(75, 'unknown', 'Nepoznati korisnik', 'Neko nam je poslao mejl. Odgovorite što pre možete.', '10.12.2022.', '21:33:09'),
(76, 'unknown', 'Nepoznati korisnik', 'Neko nam je poslao mejl. Odgovorite što pre možete.', '10.12.2022.', '21:34:45'),
(77, 'unknown', 'Nepoznati korisnik', 'Neko nam je poslao mejl. Odgovorite što pre možete.', '10.12.2022.', '21:40:10'),
(78, 'unknown', 'Nepoznati korisnik', 'Neko nam je poslao mejl. Odgovorite što pre možete.', '10.12.2022.', '21:47:23'),
(79, 'unknown', 'Nepoznati korisnik', 'Neko nam je poslao mejl. Odgovorite što pre možete.', '10.12.2022.', '21:49:35');

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `author` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `author`) VALUES
(1, 'Frenk Mekort'),
(2, 'Samuel Bjerk'),
(3, 'Vedrana Rudan'),
(4, 'Aleksandar Bilanović'),
(5, 'Dejan Tiago-Stanković'),
(6, 'Žarko Radaković'),
(7, 'Skot Abot'),
(8, 'Sandra Sisneros'),
(9, 'Rahman Ali'),
(10, 'Fijaz Rafik'),
(11, 'Olivera Milošević'),
(12, 'Tibo Moris'),
(13, 'Andrej Makin'),
(14, 'Adam Grant'),
(15, 'Zoran Penevski'),
(16, 'Slavimir Stojanović'),
(17, 'Kejt Kvin'),
(18, 'Petar Žebeljan'),
(19, 'Lusinda Rajli'),
(20, 'Džozef Konrad'),
(21, 'Nikolas Sparks'),
(22, 'Maja'),
(23, 'Maja Djokic'),
(24, 'Inio Asano');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `cart_date` varchar(11) NOT NULL,
  `is_checked_out` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `cart_date`, `is_checked_out`) VALUES
(1, 1, '07.05.2022.', 1),
(2, 2, '07.05.2022.', 1),
(3, 2, '07.05.2022.', 1),
(4, 2, '07.05.2022.', 1),
(5, 2, '07.05.2022.', 1),
(6, 2, '08.05.2022.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cart_lists`
--

CREATE TABLE `cart_lists` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `prod_price` decimal(10,0) NOT NULL,
  `num_of_prod` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart_lists`
--

INSERT INTO `cart_lists` (`id`, `cart_id`, `prod_id`, `prod_price`, `num_of_prod`) VALUES
(2, 1, 5, '1099', 8),
(3, 2, 11, '999', 3),
(4, 2, 7, '1199', 8),
(5, 2, 15, '499', 6),
(6, 3, 1, '599', 1),
(7, 4, 8, '799', 6),
(8, 4, 3, '699', 6),
(9, 5, 1, '599', 1),
(10, 6, 11, '999', 6);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(1, 'Nagrađene knjige'),
(2, 'Ekranizovane knjige'),
(3, 'Publicistika'),
(4, 'Autobiografija'),
(5, 'E-knjige'),
(6, 'Trileri'),
(7, 'Istražitelji Munk i Kriger'),
(8, 'Drama'),
(9, 'Komedija'),
(10, 'Domaći autori'),
(11, 'Avanturistički'),
(12, 'Istorijski'),
(13, 'Biografija'),
(14, 'Tinejdž'),
(15, 'Popularna psihologija'),
(16, 'Popularna nauka'),
(17, 'Za poklon'),
(18, 'Istorijski triler'),
(19, 'Istorija'),
(21, 'Klasici'),
(22, 'Klasici svetske književnosti'),
(23, 'Ljubavni'),
(24, 'Maja'),
(25, 'Majaizam'),
(26, 'Mimi'),
(27, 'Manga i strip'),
(28, 'StarWay');

-- --------------------------------------------------------

--
-- Table structure for table `contact_email`
--

CREATE TABLE `contact_email` (
  `id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(200) NOT NULL,
  `text_mail` varchar(3000) NOT NULL,
  `date` varchar(11) NOT NULL,
  `time` varchar(8) NOT NULL,
  `relied_to` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_email`
--

INSERT INTO `contact_email` (`id`, `first_name`, `last_name`, `email`, `text_mail`, `date`, `time`, `relied_to`) VALUES
(3, 'Maja', 'Djokic', 'maja@gmail.com', 'ovo je mej 1', '07.05.2022.', '15:46:11', 0),
(4, 'Maja', 'Djokic', 'maja@gmail.com', 'ovo je mejl 2', '07.05.2022.', '15:46:35', 0),
(5, 'Maja', 'Djokic', 'maja@gmail.com', 'ovo je mejl 3', '07.05.2022.', '15:47:39', 0);

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `country` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country`) VALUES
(1, 'Srbija'),
(2, 'Hrvatska'),
(3, 'Bugarska'),
(4, 'Crna Gora');

-- --------------------------------------------------------

--
-- Table structure for table `menu_main`
--

CREATE TABLE `menu_main` (
  `id` int(11) NOT NULL,
  `href` varchar(150) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu_main`
--

INSERT INTO `menu_main` (`id`, `href`, `name`) VALUES
(1, 'home', 'Početna'),
(2, 'products', 'Proizvodi'),
(3, 'cart', 'Korpa'),
(4, 'contact', 'Kontakt'),
(5, 'author', 'Autor'),
(6, 'admin', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `menu_user`
--

CREATE TABLE `menu_user` (
  `id` int(11) NOT NULL,
  `href` varchar(150) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu_user`
--

INSERT INTO `menu_user` (`id`, `href`, `name`) VALUES
(1, 'signup', 'Sing up'),
(2, 'login', 'Log in');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `address` varchar(200) NOT NULL,
  `city` varchar(30) NOT NULL,
  `country_id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `cart_id`, `address`, `city`, `country_id`, `payment_id`) VALUES
(4, 2, 'ul Dj.A.Kuna 21', 'Bor', 1, 6),
(5, 2, 'ul Dj.A.Kuna 21', 'Bor', 1, 7),
(6, 2, 'ul Dj.A.Kuna 21', 'Bor', 1, 8),
(7, 3, 'ul Dj.A.Kuna 21', 'Bor', 1, 9),
(8, 3, 'ul Dj.A.Kuna 21', 'Bor', 1, 10),
(9, 4, 'ul Dj.A.Kuna 21', 'Bor', 1, 11),
(11, 5, 'ul Dj.A.Kuna 21', 'Bor', 3, 13),
(12, 6, 'ul Dj.A.Kuna 21', 'Bor', 1, 14);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `payment_method` varchar(20) NOT NULL,
  `card` varchar(19) DEFAULT NULL,
  `payed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `cart_id`, `price`, `payment_method`, `card`, `payed`) VALUES
(1, 2, '12589', 'pouzece', NULL, 0),
(2, 2, '12589', 'pouzece', NULL, 0),
(3, 2, '12589', 'pouzece', NULL, 0),
(4, 2, '12589', 'pouzece', NULL, 0),
(5, 2, '12589', 'pouzece', NULL, 0),
(6, 2, '12589', 'kartica', '0000-0000-0000-0000', 0),
(7, 2, '12589', 'kartica', '0000-0000-0000-0000', 0),
(8, 2, '12589', 'kartica', '0000-0000-0000-0000', 0),
(9, 3, '599', 'pouzece', NULL, 0),
(10, 3, '599', 'pouzece', NULL, 0),
(11, 4, '8988', 'pouzece', NULL, 0),
(13, 5, '599', 'kartica', '0000-0000-0000-0000', 0),
(14, 6, '5994', 'pouzece', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `format` varchar(30) NOT NULL,
  `num_pages` int(5) NOT NULL,
  `letter` varchar(20) NOT NULL,
  `cover_type` varchar(20) NOT NULL,
  `published` varchar(30) NOT NULL,
  `isbn` varchar(100) NOT NULL,
  `translator` varchar(100) DEFAULT NULL,
  `price` int(10) NOT NULL,
  `cover` varchar(1000) NOT NULL,
  `active` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `format`, `num_pages`, `letter`, `cover_type`, `published`, `isbn`, `translator`, `price`, `cover`, `active`) VALUES
(1, 'Rečnik beskrajnog odrastanja', 'Slikovnica za one koji ponovo žele da odrastu.\r\n\r\nIlustrovao Slavimir Stojanović Futro.\r\n\r\nPomislite na drvo.\r\nŠta osećate kad pomislite na drvo?\r\nOno je visoko, štiti nas, bezbrižni smo ispod njegove krošnje, lepo nam je u njegovom hladu, čak nam daje i neke plodove.\r\n\r\nSada pomislite da ste dete koje ponovo uči reči. I osetite sve ono čime smo opisali drvo. Pokušajte sada da taj osećaj predstavite nečim sličnim. Šta je to visoko što nas štiti, gde smo bezbrižni, a može i da se nešto gricka?\r\n\r\nDrvo:\r\nTo je kao kad pada kiša, mama drži kišobran i ponekad ti pruži kockicu čokolade sa lešnicima.\r\n\r\nEto, ovo je takva igra. Čestim igranjem, moći ćete ponovo da budete dete.', '13x20 cm', 72, 'Latinica', 'Mek', '9. mart 2022.', '978-86-521-4404-4', NULL, 599, '1.jpg', 1),
(2, 'Želja', 'Ako biste imali na raspolaganju samo jednu želju, šta biste poželeli?\r\n\r\nGodine 1996. šesnaestogodišnja Megi Doz počela je da živi u selu Okrakoku na ostrvima Severne Karoline kod tetke koju je jedva poznavala. Bila je usamljena i nesrećna dok nije upoznala Brajsa Triketa, jednog od retkih tinejdžera u varošici. Vedar, iskren i tek primljen na Vest Point, Brajs će je upoznati sa fotografskom umetnošću, strašću koja će odrediti njen život. Pokloniće joj i savršeni poljubac, ali i još nešto, mnogo važnije od svega.\r\n\r\nGodine 2019. Megi je već renomirana fotografkinja. Svoje vreme provodi u vođenju uspešne galerije u Njujorku i fotografisanju udaljenih lokacija širom sveta. Kada se iznenada suoči sa medicinskom dijagnozom, sve više mora da se oslanja na pomoć svog mladog asistenta.\r\n\r\nDok odbrojavaju dane pred Božić, Megi počinje da mu priča priču o jednom davnom Božiću decenijama ranije i jedinoj želji koju ima.\r\n\r\n„Nema oka koje neće zasuziti nad ovom knjigom.“\r\n– Daily Mirror\r\n\r\n„Nikolas Sparks je sa razlogom među najpoznatijim piscima Amerike i Evrope: on piše priče koje razotkrivaju žudnju za našom najvrednijom dragocenošću – ljubavlju.“\r\n– Mobile Register', '13x20 cm', 376, 'Latinica', 'Mek', '5. mart 2022.', '978-86-521-4445-7', 'Dubravka Srećković Divković', 999, '2.jpg', 1),
(3, 'Srce tame', 'Snažna pripovest o sudaru civilizacija.\r\n\r\nObjavljen prvi put 1899. godine, Srce tame je roman aktuelan i danas. Džozef Konrad ga je napisao posle osam godina provedenih u Belgijskom Kongu, i u njega utkao složena razmišljanja o modernosti, imperijalizmu, licemerju i zaslugama Zapada, kao i dvostrukom licu „civilizacije“. Čuveni književni kritičar Harold Blum zapisao je da je ovaj roman najviše proučavan i analiziran na američkim univerzitetima i u školama zbog Konradove „jedinstvene sklonosti ka dvosmislenosti“.\r\n\r\nPriču o putovanju u potrazi za Kurtom, nestalim članom administrativne ispostave trgovačke kompanije, pripoveda nam Čarls Marlou. On je zagonetni pomorac-skitnica, i hrabro polazi na putovanje koje će mu obeležiti život. Po dolasku u Afriku, Marlou kao da stupa u neku drugu stvarnost, a čitalac uranja u atmosferu zasićenu užasima teško pojmljivim Evropljaninu toga vremena. Koliko god tema kolonijalizma delovala anahrono savremenom čitaocu, Konrad je u ovom romanu majstorski prikazao sukob vere u civilizaciju sa surovom borbom za profit koja traje i danas.\r\n\r\nUpravo zbog toga ovaj kontroverzni klasik oduševljava čitaoce više od sto godina i inspiriše druga ostvarenja, među kojima se ističe legendarni film Frensisa Forda Kopole Apokalipsa danas.\r\n\r\n„Njegove knjige su pune vizija koje osvetljavaju likove od krvi i mesa… Ima se utisak da nikad ne bi mogao da napiše nešto loše ni po cenu života.“\r\n– Virdžinija Vulf\r\n\r\n„Impresivan književni stvaralac.“\r\n– Sunday Times\r\n\r\n„Konradov roman nas i dalje tera da se pitamo da li je to reska kritika kolonijalizma ili oružje za rasizam. U svakom slučaju, mora se pročitati.“\r\n– Guardian', '13x20cm', 176, 'Latinica', 'Tvrd', '4. mart 2022.', '978-86-521-4417-4', 'Nada Ćurčija-Prodanović', 699, '3.jpg', 1),
(4, 'Razmisli još jednom', 'Snaga onoga što znamo da ne znamo.\r\n\r\nAutor svetskog bestselera Originalni.\r\n\r\n„Grant nas savetuje kako da odustanemo od pretpostavki i krutih stavova i postanemo radoznali i otvoreni za nove ideje.“\r\n– Washington Post\r\n\r\nInteligenciju obično shvatamo kao sposobnost da mislimo i učimo, ali u svetu koji se brzo menja postoji još jedna kognitivna veština koja može imati i veći značaj: sposobnost preispitivanja i ažuriranja znanja. U svakodnevnom životu često slušamo mišljenja koja nam prijaju umesto da prigrlimo ideje koje nas teraju da se zamislimo. Tumačimo nečije neslaganje kao pretnju egu, a ne kao priliku da nešto naučimo, okružujemo se ljudima koji se slažu sa našim zaključcima, dokazujemo da druga strana greši – a gotovo uopšte ne razmišljamo kao naučnici koji tragaju za istinom. Inteligencija nije lek za sve a može biti i kletva: to što smo dobri u razmišljanju može nam predstavljati prepreku u preispitivanju. Što smo bistriji, to više možemo postati slepi za sopstvena ograničenja.\r\n\r\nRazmisli još jednom otkriva da ne moramo da verujemo svemu što pomislimo da je tačno, niti moramo u sebe da ugrađujemo svako osećanje koje nam se javi. To je poziv da se oslobodimo beskorisnih stavova i da damo prednost umnoj fleksibilnosti nad ponekad nepotrebnom, glupom doslednošću, da prigrlimo svoje greške i izgradimo kulturu učenja i preispitivanja. Ako je znanje moć, svest da nešto ne znamo korak je ka mudrosti.\r\n\r\n„Učenje zahteva mnogo napora ali ažuriranje znanja zahteva smelost i izlazak iz zone komfora. Autor prepliće istraživanja i pripovedanje da bi nam pomogao da ojačamo intelektualne i emocionalne mišiće koji su nam potrebni da ostanemo radoznali i ne izgubimo zanimanje za svet koji možemo da promenimo nabolje.“\r\n– Dr Breni Braun, bestseler autor New York Timesa', '13x20 cm', 312, 'Latinica', 'Mek', '4.mart 2022.', '978-86-521-4300-9', 'Saša Novaković', 999, '4.jpg', 1),
(5, 'Dečak koji je voleo jelene', 'Treći roman u serijalu o detektivskom dvojcu Munk – Kriger.\r\n\r\nU zimu 1996. godine jedan čovek se vozi pustim putem preko planine. Iznenada njegovi farovi osvetljavaju životinju. Snažno koči i staje tik ispred… uplašenog dečaka. Usne su mu pomodrele od hladnoće, a na glavi nosi čvrsto uvezane jelenje rogove.\r\n\r\nČetrnaest godina kasnije nedaleko od tog mesta, obučeno u kostim balerine pronađeno je telo devojke u planinskom jezeru. Narednih nekoliko nedelja umreće još tri osobe. Pored svakog tela ubica je ostavio trag – direktan poziv detektivima Holgeru Munku i Miji Kriger da se pridruže njegovoj smrtonosnoj igri. Siguran je da oni ne mogu da pobede jer su njegova pravila najopasnija i najstrašnija. On je serijski ubica čije su žrtve potpuno nasumične.\r\n\r\nMunk i Krigerova ne mogu da predvide sledeći potez ubice. Da bi ga uhvatili, moraće da pogledaju duboko u mračnu prošlost.\r\n\r\n„Bjerk je sve bolji iz knjige u knjigu. Priča teče nezaustavljivo i nemilosrdno vas uvlači u svoj mračni tok. Izvrsno!“\r\n– Nettavisen\r\n\r\n„Ovim romanom Bjerk je Nesbeu bacio rukavicu u lice.“\r\n– Sunday Express', '13x20 cm', 392, 'Latinica', 'Mek', '3. mart 2022.', '978-86-521-4438-9', 'Igor Solunac', 1099, '5.jpg', 1),
(6, 'Doživotna robija', 'Bebe rastu, postaju ljudi, ljudi s kojima možda nikad ne bi popila kavu da nisu meso tvoga mesa, ili ljudi koji nikad ne bi s tobom popili kavu da ih netko nije izvukao iz tebe.\r\n\r\nNakon smrti muža, koga je beskrajno volela, Loli ponestaje volje. U životu je jedino drži nada da će na licu svoje prekrasne ćerke Tine konačno ugledati iskreni osmeh. Zbog tog osmeha spremna je sve da učini.\r\n\r\nU najnovijem romanu Doživotna robija Vedrana Rudan piše o svojim omiljenim temama, odnosu roditelja i dece, kao i o tome šta znači biti istinski slobodan. Da li je sloboda moguća bez materijalne sigurnosti, da li rad oplemenjuje ili porobljava čoveka i šta je neophodno da bi žena zaista bila nezavisna, samo su neka pitanja koja glavna junakinja Lola postavlja sebi, ali i svima nama.\r\n\r\nVešto izbegavajući sve postojeće stereotipe, Vedrana Rudan ispisuje priču o nesvakidašnjoj ženi s kojom se možda nećete uvek složiti, ali ćete beskrajno uživati u svakom trenutku provedenom s njom.', '13x20 cm', 216, 'Latinica', 'Mek', '1. mart 2022.', '978-86-521-4439-6', NULL, 799, '6.jpg', 1),
(7, 'Anđelin pepeo: Autobiografija', 'Dobitnik Pulicerove nagrade.\r\n\r\n„Lirski izraz Frenka Mekorta može se porediti sa Džojsovim. Tako je zavodljiv, tako veseo.“\r\n– Meri Kar\r\n\r\n„Očaravajući prikaz detinjstva u kome se neosetno smenjuju duboka tuga i humor nastao iz očajanja. Delo trajne lepote.“\r\n– Philadelphia Inquirer\r\n\r\n„Kada se osvrnem na detinjstvo, pitam se kako sam ga uopšte i preživeo. Naravno, bilo je to nesrećno detinjstvo; srećno detinjstvo jedva da zaslužuje pažnju. Gore od običnog nesrećnog detinjstva je nesrećno detinjstvo u Irskoj, a još gore je nesrećno detinjstvo u katoličkoj Irskoj.“\r\n\r\nOvako počinje živopisna autobiografija Frenka Mekorta, koji se rodio u Bruklinu ali je odrastao u Irskoj, u siromašnim četvrtima Limerika. Frenkova majka Anđela nema novca da prehrani decu jer njegov otac Malaki retko ima posao, a čak i kada ga nađe, propije sve što zaradi. S druge strane, iritantni i neodgovorni mangup Malaki kod Frenka podstiče jedino što može da mu pruži – ljubav prema priči. Frenk živi za očeve priče o Kuhulinu, koji je spasao Irsku, i o Anđelu na sedmom stepeniku, koji donosi decu njegovoj majci.\r\n\r\nMožda je Frenk i opstao upravo zbog tih priča jer živi u siromaštvu, na ivici je gladi i skuplja ugalj kraj puta da bi se grejao, dok povremeno trpi grubosti od rođaka i suseda. Ipak, uspeva da preživi kako bi nam rečito i kitnjasto ispričao svoju priču uz veliku dozu praštanja.\r\n\r\nAnđelin pepeo je sjajna knjiga, gde svaka strana odiše čudesnim humorom i saosećanjem Frenka Mekorta, a ima sve odlike jednog klasika.\r\n\r\n„Izvrsna autobiografija ispunjena i humorom i praštanjem.“\r\n– People\r\n\r\n„Spomenik neiscrpnoj snazi ljudskog duha. Sjajan primer verodostojne, iskrene i upečatljive autobiografije.“\r\n– Miami Herald\r\n\r\n„Život Frenka Mekorta i oštrina sa kojom o njemu pripoveda sasvim su dovoljni da bismo znali šta znači biti čovek.“\r\n– Detroit Free Press\r\n\r\n„Klasična savremena autobiografija. Fenomenalna.“\r\n– New ', '13x20 cm', 416, 'Latinica', 'Mek', '26. februar 2022.', '978-86-521-4387-0', 'Nenad Tomović', 1199, '7.jpg', 1),
(8, 'Ovladaj svojim emocijama', 'Praktičan vodič za prevazilaženje negativnog razmišljanja i bolje ovladavanje osećanjima.\r\n\r\nAutor knjige je bio izrazito povučen i stidljivost ga je sprečavala da postigne rezultate kakve želi. Kada je odlučio da svoj život posveti ličnom usavršavanju, sve se promenilo. Ovo je njegova priča o tome kako je pronašao radost i put do uspeha.\r\n\r\nTo bi mogao da bude obrazac i tvog preobražaja jer ovaj praktični program omogućava da ovladaš svojim emocijama, pogotovo ako si sklona negativnom razmišljanju.\r\n\r\nRazumevanje kako funkcionišu negativna osećanja i emocije samo je prvi korak. Potom moraš da naučiš kako da reprogramiraš te emocije i preobratiš ih. Naučićeš: jednostavne strategije da se izboriš sa emocijama, kako da postigneš da tvoje emocije rade ZA TEBE, formulu za reprogramiranje tvog uma, a uz sve to ćeš dobiti i radnu svesku koja će ti pomoći da sve ovo lakše savladaš.\r\n\r\n„Čitala sam članke i knjige koji se bave emocijama, ali nikada tako temeljnu i prosvetljujuću knjigu kao što je Ovladaj svojim emocijama.“\r\n– Readers’ Favorite\r\n\r\n„Ova knjiga mi je pomogla da svoje emocije sagledam kao oruđa, a ne kao nešto što ometa moj razvoj.“\r\n– Sara\r\n\r\n„Ako ne možete da obuzdate svoje emocije, morate pročitati ovu knjigu.“\r\n– Lea\r\n\r\n„Psiholog sam i volim ovu knjigu zbog njene jednostavnosti. Preporučujem je!“\r\n– Laura Bet Kuper, psiholog\r\n\r\n„Jedna od najboljih knjiga samopomoći koje sam ikad pročitala!“\r\n– Korisnica Amazona', '13x20 cm', 248, 'Latinica', 'Mek', '26. februar 2022.', '978-86-521-4298-9', 'Aleksandra Čabraja', 799, '8.jpg', 1),
(9, 'Nikita Milivojević: Ja ovde silazim', '(Ne)očekivano: Meni je dosta, ja ovde silazim, izusti Nikita Milivojević. Ali bez brige – silazi da uzme kameru, vratiće se, odmah ili malo kasnije. Još odlučniji. Posvećen, neumoran, raznovrstan, uprkos svemu već je odbranio svoju struku i svoju biografiju. Nadahnuta, živopisna, zavodljiva, značajna – mudra knjiga…\r\n\r\nMilivojević se u svom vinogradu oseća najbolje, kao u odnegovanom domu, ili na pozornici. Učenik koji brzo ne postane Majstor, neće nikad. Majstor režije koji stigne do trenutka u kome je pohvala njegovom vinu milija od pohvale predstave nadomak je savršenstva. Nisam stručnjak za vino, ali ću reći da je trideset godina naslova Nikite Milivojevića, kolekcija predstava – očaravajuća.\r\n\r\n– Boro Drašković', '18x25.5 cm', 408, 'Latinica', 'Tvrd', '24. februar 2022.', '978-86-81666-21-0', NULL, 1499, '9.jpg', 1),
(10, 'Sabor srpskih velikana', 'Graditelji modernog srpskog identiteta od 1848. do 1918. godine.\r\n\r\nKnjiga Sabor srpskih velikana na popularan način predstavlja mnoge interesantne i manje poznate podatke o znamenitim ličnostima koje su delale od 1848. do okončanja Velikog rata 1918. godine. Uz Srbe, u ovom izuzetno važnom periodu naše istorije istakli su se i pripadnici drugih naroda koji su ugrađivali svoje znanje, emocije i energiju u preobražaj srpskog društva i pomogli mu da izgradi svoj nacionalni i kulturni identitet.\r\n\r\n„O najznačajnijim ličnostima novovekovne srpske istorije često se nedovoljno zna čak i u našoj naučnoj javnosti. Sabor srpskih velikana predstavlja delo kojim se nadoknađuju mnogobrojni propusti naše novije leksikografije, istorije književnosti i savremene srpske istoriografije i u 463 odrednice podseća na stvaralaštvo, kulturna, politička i naučna pregnuća onih Srba bez kojih je nemoguće zamisliti razvoj srpske novovekovne državnosti i istrajnu, uzvišenu i iznad svega, požrtvovanu borbu srpskog naroda za očuvanje nacionalnog identiteta: od stvaranja nezavisne države, preko učvršćenja i odbrane njene autonomije do sticanja međunarodnog priznanja državne nezavisnosti i svih pobeda u ratovima koje je Srbija vodila za ostvarenje nacionalnog oslobođenja i državnog ujedinjenja. Sabor srpskih velikana Petra Žebeljana daje višestruko dragocen doprinos obnovi i učvršćenju našeg istorijskog sećanja na ličnosti koje su svojim delima trajno zadužile našu istoriju.“\r\n\r\n– Prof. dr Dejan Mikavica', '13x20 cm', 400, 'Ćirilica', 'Mek', '24. februar 2022.', '978-86-521-4143-2', NULL, 1099, '10.jpg', 1),
(11, 'Estoril: Ratni roman', 'Dobitnik Nagrade Evropske unije za književnost.\r\n\r\nNagrada Branko Ćopić 2015. i HWA Crowns Literary Award 2018.\r\n\r\nSmešten u luksuzni hotel Palasio u mondenskom letovalištu Estoril nedaleko od Lisabona, koji je tokom Drugog svetskog rata usled portugalske neutralnosti bio stecište mutnih radnji obaveštajnih službi zaraćenih strana, ali i izbeglica iz svih krajeva Evrope, Estoril je divan i potresan roman o egzilu, podeljenoj lojalnosti, strahu i preživljavanju. Gosti hotela su špijuni, pali kraljevi, pisci, nacisti, američke diplomate i Jevreji bez državljanstva, a portugalska tajna policija pažljivo nadzire posetioce, trudeći se da niko ne ugrozi neutralnost njihove zemlje.\r\n\r\nČitaoci će u holovima hotela i na plažama Estorila naići na Crnjanskog, Aleksandra Aljehina, Antoana de Sent Egziperija u razgovoru s jevrejskim dečakom tršave kose koji živi sam u hotelu, kao i na mnoge druge istorijske ličnosti koje su ovde našle utočište. Posebno interesantan lik je Duško Popov, dvostruki agent, poreklom s naših prostora, kojeg će upoznati Ijan Fleming i po uzoru na njega osmisliti lik Džejmsa Bonda.\r\n\r\nOvaj izuzetni roman prevođen je na više jezika i preporučena je lektira u školama u Portugalu.\r\n\r\n„Čim sam počeo da čitam Estoril, znao sam da sam naišao na nešto posebno. Oduševljen sam knjigom koja je istovremeno komedija, špijunska priča i zanimljivo istorijsko istraživanje. Ovaj roman ćete brzo pročitati ali ga nikada nećete zaboraviti.“\r\n– Miša Gleni\r\n\r\n„Epizode ove knjige, od lažnih izveštaja koje je Popov na brifinzima predavao nemačkim obaveštajcima do Aljehinove strašne smrti, izvanredne su. Izuzetna knjiga.“\r\n\r\n– Sunday Times\r\n\r\n„Fascinantan portret vremena kada se u Evropi ratovalo i ginulo, a suprotstavljene strane su mogle da sede jedna pored druge u kazinu, baru ili restoranu, uprkos krvavim sukobima koji besne napolju.“\r\n\r\n– Europian Literature Network\r\n', '13x20 cm', 352, 'Latinica', 'Mek', '24. februar 2022.', '978-86-521-4388-7', NULL, 999, '11.jpg', 1),
(12, 'Dripačka rapsodija', '„Ovaj nesvakidašnji roman je jedno od retkih Bilanovićevih dela za koje mu nije zaprećeno nikakvom kaznom.“\r\n– Vladimir Tabašević\r\n\r\nEdvard Nikolić, glavni junak ovog dripačkog manifesta, nesvakidašnji je književni lik. U užasima devedesetih on je, najpre kao mladić, za sebe smislio zaposlenje u samostalnom novobeogradskom sitnokrimi preduzeću, pa zatim preko oca u Državnoj bezbednosti, da bi na kraju završio u posve nebezbednim, ozbiljnijim krimi pričama „preko grane“. Kada sumanutim spletom okolnosti zapali i „preko bare“, Edvard shvata da jurnjava za lovom i lagodnim životom nije ono što ga zaista ispunjava, iako je verovao da će ga ta navada pratiti doživotno.\r\n\r\nPod nebom Latinske Amerike on se zaljubljuje u nepristojno privlačnu devojku. Navučen na lepe žene i opojne čari tamošnjeg sveta, Edvard umalo da izgubi glavu, rastrzan između onoga što želi i onoga što mora da bude. Kada napokon postanemo sigurni da se Edvard skrasio, u njegovom životu javlja se novo, neodoljivo iskušenje, kojem izgleda da ovaj put neće odoleti. Zbog njegove sklonosti da uvek živi na ivici, Edvardova čudesna sudbina sama od sebe izbija sa stranica ove knjige i uvlači nas unutra kao saučesnike.', '13x20 cm', 320, 'Latinica', 'Mek', '23. februar 2022.', '978-86-521-4312-2', NULL, 999, '12.jpg', 1),
(13, 'Moj brat Muhamed Ali: Sveobuhvatna biografija', '„Stvarni život najvećeg boksera svih vremena.“\r\n– Džordž Forman\r\n\r\nRahman Ali je mlađi brat Muhameda Alija. Bio je profesionalni bokser, Muhamedov telohranitelj i sparing-partner. Proveo je uz njega skoro ceo život.\r\n\r\nO Muhamedu Aliju se mnogo pisalo i nesumnjivo je bio jedan od najvoljenijih sportista na svetu. Kad je bio na vrhuncu slave znali su za njega u svakom kutku zemaljske kugle, a do sada još nismo čuli šta o njemu ima da kaže čovek koji ga je najbolje poznavao – njegov jedini brat, uz to i najbolji prijatelj, Rahman Ali.\r\n\r\nDok su bili mali, Kasijus i Rudolf Arnet Klej, kako su se tada zvali, odrastali su zajedno, skupa počeli da treniraju boks, putovali na takmičenja, zajedno se tukli na ulici i boksovali u ringu.\r\n\r\nRahman je bio sa svojim bratom i u trenucima uspeha i u krizama, viđao ga je u najboljim i najgorim izdanjima – kao nemilosrdnog šaljivdžiju i ljubomornog starijeg brata, borca za ljudska prava koji nije imao dlake na jeziku, kao muža i oca. U knjizi Moj brat Muhamed Ali on se vraća na neke dobro poznate događaje iz Alijevog života, sada iznete iz perspektive bliskog očevica, ali govori i o onome što dosad nikada nismo čuli, dočaravajući nam jednog ponositog i veoma kontroverznog, a ipak ranjivog čoveka.\r\n\r\nU ovim sjajnim i potresnim memoarima Rahman nam predočava mnogo krupniju i ličniju sliku od ijedne do sada ponuđene u knjigama o velikanu boksa. Ovo je poslednji i najvažniji element u mozaiku koji prikazuje možda najveću sportsku legendu prošlog veka.\r\n\r\n„Rahman je napisao vrlo zaokruženu biografiju svog pokojnog brata i ispričao nam pravu priču o Aliju.“\r\n– Majk Tajson\r\n\r\n„Baš kao i čovek o kome govori, i ova knjiga je puna iznenađenja. Ljubitelji boksa ne treba da je propuste.“\r\n– Sunday Times\r\n\r\n„Nežno, višeslojno i potresno. Zahvaljujući svom pripovedačkom daru, Rahman nam je pružio delo koje prevazilazi sve dosadašnje biografije Muhameda Alija.“\r\n– Fox Sports', '13x20 cm', 392, 'Latinica', 'Mek', '18. februar 2022.', '978-86-521-4382-5', NULL, 1199, '13.jpg', 1),
(14, 'Knjiga o prijateljstvu', '„Jedne večeri smo se, „tako“, „mi“, junak ove povesti (Skot Abot) i njen Pripovedač (moja malenkost), zadesili u nekom nepoznatom gradu. Doputovali smo „ovamo“ tragajući za bilo kakvim materijalnim dokazom boravka „ovde“ Trećega: našeg zajedničkog Junaka (Petera Handkea).“\r\n– Žarko Radaković\r\n\r\nHandkeova „zloglasna“ knjiga Zimsko putovanje do reka Dunava, Save, Morave i Drine, ili Pravda za Srbiju počinje okupljanjem družine: pisac bi za saputnika pozvao Žarka Radakovića, jednog od svojih prevodilaca na srpski koji se, međutim, povukao u „neki samoodabranu zamračenost“ te da bi stupio u kontakt s njim, obraća se „poslednjem prisnom prijatelju koji mu je preostao, jednom mormonu, daleko u američkoj državi Juti“. Reč je o Skotu Abotu, Radakovićevom dobrom prijatelju još od 1984. godine, kada su u Tibingenu zajedno pohađali doktorske studije nemačke književnosti. Pet godina kasnije ovo prijateljstvo učvrstilo se kada su putovali zajedno u južnu Austriju i Sloveniju, tragovima Handkeove knjige se Ponavljanje. Tako je nastala njihova prva zajednička knjiga Ponavljanja. Prijateljstvo je konačno sazrelo 1998, kada su se Radaković i Abot pridružili autoru knjiga koje su preveli i junaku njihovih knjiga na putovanju po istočnoj Bosni.\r\n\r\nSkot Abot opisuje i slavi to prijateljstvo ispisujući biografiju Žarka Radakovića, njegovo odrastanje u Jugoslaviji, njegovo druženje i blisku saradnju sa umetnicima poput Marine Abramović, Ere Milivojevića, Julija Knifera, Nine Pops ili sa književnicima poput Davida Albaharija i Aleksa Kaldijera, ali pre svega sa Peterom Handkeom. Žarko Radaković izvodi ovo prijateljstvo kao što se performans izvodi, u skladu sa svojim književnim postupkom koji ne opisuje stvarnost, nego je proizvodi u smislu Handkeovog „unutrašnjeg sveta spoljašnjeg sveta unutrašnjeg sveta“, koji je Radaković doveo do krajnosti.', '13x20 cm', 208, 'Latinica', 'Mek', '16. februar 2022.', '978-86-521-4308-5', 'Ivan Jovanović', 999, '14.jpg', 1),
(15, 'Kuća u Ulici Mango', 'Prodato u više od 6.000.000 primeraka\r\n\r\nOvo je priča Esperance Kordero koja živi u trošnoj kući u Ulici Mango u latinoameričkoj četvrti Čikaga. Njeno okruženje sačinjeno je od surove realnosti i jednostavne lepote. Njena očekivanja su veća od onoga što joj život trenutno pruža. Svesna svoje snage, ona se sama bori kroz život.\r\n\r\nPonekad dirljiva, ponekad duhovita, ova bolna i snažna priča govori nam o jednoj godini u životu mlade devojke koja izrasta u snažnu ženu.\r\n\r\nUbrzo po objavljivanju Kuća u Ulici Mango dobila je brojne pohvalne kritike i postala omiljena širom sveta. Sandra Sisneros je svojim poetičnim pisanjem otvorila prozor duše bez ijedne suvišne reči.\r\n\r\n„Jezgrovita, duhovita i lepa Kuća u Ulici Mango spada u bezvremene knjige. U njoj odzvanja poezija ljubavi i žudnje u kojoj se svi prepoznajemo. I kad je jednom pročitate poželećete da je ponovo uzmete u ruke i uživate iznova u njoj. “\r\n– Edviž Dantikat\r\n\r\n„Svaka mlada žena treba da pročita ovaj roman i dopusti mu da je ispuni snažnim emocijama, melodijom i otrežnjujućim saznanjem “\r\n– Gvendolin Bruks\r\n\r\n„Čudesno ispripovedana priča o odrastanju u savremenom svetu, prožeta zanosom i buntom mladih generacija.“\r\n– San Francisco Chronicle\r\n\r\n„Duboko dirljiv, divan i potresan roman.“\r\n– Miami Herald', '13x20 cm', 144, 'Latinica', 'Mek', '15. februar 2022.', '978-86-521-4395-5', 'Marko Mladenović', 499, '15.jpg', 1),
(16, 'Prijatelj Jermenin', 'Dobitnik Gonkurove nagrade.\r\n\r\nAutor savremenog klasika Francusko zaveštanje.\r\n\r\nU ovom književnom dragulju Andrej Makin otkriva nezaboravnu epizodu iz svoje rane mladosti.\r\n\r\nTrinaestogodišnji pripovedač živi u sirotištu u Sibiru u doba slabljenja sovjetskog režima. U školskom dvorištu brani Vardana, koji je zbog svoje prostodušnosti, zrelosti i krhkosti savršena meta siledžija. Ispratiće Vardana kući, u kvart poznat kao „Đavolov kraj“, u kojem žive nekadašnji zatvorenici, ostareli pustolovi, zalutali beskućnici koji su „u čitavoj svojoj biografiji imali samo geografiju svojih lutanja“.\r\n\r\nTamo ga dočekuje mala i neupadljiva kolonija Jermena, koje spaja zajednička sudbina: nastanili su se u tom kraju u nadi da će dočekati oslobođenje iz zatvora svojih bližnjih, optuženih za antisovjetsku zaveru i separatizam. Iz tog miljea se izdvajaju upečatljivi likovi: Vardanova majka Šamiram, njegova sestra Đulizar za kojom mnogi čeznu, lepa poput kavkaske princeze, i stari mudrac Sarven.\r\n\r\nNarator postaje zaštitnik mladom Jermeninu Vardanu, koji pati od smrtonosne bolesti. I sam narator će se naći u velikoj neprilici, tokom epizode kopanja tunela zarad dečje igre, za koju su režimski ljudi posumnjali da predstavlja pomoć pokušaju bekstva iz zatvora.\r\n\r\nU svetlosti dvostruke čežnje – Jermena za njihovom rodnom zemljom i pripovedača za prijateljem iz mladosti – ovaj roman odzvanja snagom velikog klasika.\r\n\r\n„Roman pun ljudskosti koja se danas sve više gubi. Izuzetno dirljivo.“\r\n– France-Inter\r\n\r\n„Neobično topao roman.“\r\n– Le Monde\r\n\r\n„Klasično napisan, roman Prijatelj Jermenin pogađa samu suštinu stvari.“\r\n– Le Figaro\r\n', '13x20 cm', 168, 'Latinica', 'Mek', '15. februar 2022.', '978-86-521-4353-5', 'Anđa Petrović', 699, '16.jpg', 1),
(17, 'Soba leptira', 'Autorka bestseler serijala Sedam sestara.\r\n\r\nPouzi Montegju se bliži sedamdesetom rođendanu. Mada i dalje živi u svom lepom porodičnom domu Admiral hausu, u prekrasnom seoskom predelu Safoka, gde je provela idilično detinjstvo hvatajući leptire sa voljenim ocem, a kasnije sama podizala decu, Ali sada mora da donese mučnu odluku. Iako je sentimentalno vezana za kuću koja uveliko propada, a ima i izuzetan vrt koji je stvarala i negovala dvadeset pet godina, Pouzi je svesna da je došlo vreme da je proda.\r\n\r\nPouzi se bori s lošim poslovnim potezima svoga sina Sema, a iznenada se vraća i njen drugi sin Nik posle deset godina života u Australiji. Povrh svega pojavljuje se i Fredi, njena prva ljubav, koji ju je pre pedeset godina ostavio slomljenog srca. Ona nema poverenja u Fredijevu obnovljenu naklonost i ne zna da Fredi i Admiral haus – kriju strašnu tajnu…\r\n\r\nS već poznatom umešnošću u građenju nezaboravnih likova i zapleta Lusinda Rajli nam pruža još jednu čarobnu, višegeneracijsku priču.\r\n\r\n„Spremite se da vas ova priča opčini, dirne do suza i uznese u neke druge svetove.“\r\n– Lancashire Evening Post\r\n\r\n„Lusinda Rajli je kraljica istorijskih porodičnih saga. Soba leptira je pravi primer njenog umeća da isplete složenu porodičnu misteriju oko tema kao što su rat, tajne, izgubljena ljubav i osećanja.“\r\n– Mrs B’s Book Reviews\r\n\r\n„Puna iznenađenja i preokreta, ova knjiga je čarobno štivo o ljubavi, gubitku i šansi za novi početak.“\r\n– Bookliterati, UK', '13x20 cm', 560, 'Latinica', 'Mek', '14. februar 2022.', '978-86-521-4407-5', 'Branislava Radević-Stojiljković', 1199, '17.jpg', 1),
(18, 'Rusalkin poljubac', 'Od autorke romana Alisina mreža.\r\n\r\nSnažna i emotivna priča o grabljivcu i lovini, zločinu i iskupljenju, i nepobitnoj moći istine.\r\n\r\nSmela i neustrašiva, Nina Markova je oduvek želela da leti. Kada nacisti napadnu Sovjetski Savez, ona se pridružuje legendarnom puku noćnih bombardera čiji su piloti bili isključivo žene. Nazvane Noćne veštice, one nemilosrdno uništavaju neprijatelja. Kada se bude našla iza neprijateljskih linija, Nina postaje plen smrtonosne nacističke ubice poznate kao Lovkinja.\r\n\r\nPreobražen užasima kojima je svedočio na poprištima Drugog svetskog rata britanski ratni dopisnik Ijan Grejem postaje lovac na naciste. Ipak, jedna meta mu izmiče – Lovkinja. Da bi je pronašao udružuje snage sa jedinim svedokom Lovkinjinih zločina: drskom, samouverenom Ninom. Ali zajednička tajna mogla bi ugroziti njihovu misiju.\r\n\r\nOdrasla u posleratnom Bostonu, sedamnaestogodišnja Džordan Mekbrajd je odlučna da postane fotografkinja. Njen otac, udovac to ne odobrava, ali podršku joj, neočekivano, daje očeva nova žena. Mađutim, postoji nešto zabrinjavajuće u vezi sa tom tihom nemačkom udovicom. Džordan počinje da istražuje prošlost svoje maćehe i otkriva tajnu koja bi mogla ugroziti sve do kojih joj je stalo.\r\n\r\n„Impresivan istorijski roman protkan aluzijama iz ruskog folklora i sočno duhovitim dijalozima. Autorka znalački prikazuje tri nepredvidljive ljubavne priče, napeti pohod za pravdom i čovekovu hrabrost u suočavanju sa najvećim strahovima.“\r\n– Booklist\r\n\r\n„Priča o Nini zasnovana je na dobro istraženom materijalu, što ovu junakinju čini žestokom ali ranjivom prethodnicom Lizbet Salander. Jezik Kejt Kvin dočarava istorijski period, a njeni likovi su dobro književno društvo.“\r\n– Kirkus Reviews\r\n', '13x20 cm', 576, 'Latinica', 'Mek', '9. februar 2022.', '978-86-521-4428-0', 'Dubravka Srećković Divković', 1599, '18.jpg', 1),
(19, 'Naslov', 'fhtedhe', '13x20 cm', 224, 'Latinica', 'Mek', '25. novembar 2022.', '978-86-521-4675-8', 'Adrijana Miladinović', 449, 'slika', 0),
(20, 'Naslov', 'powegopwejg', '13x20 cm', 224, 'Latinica', 'Mek', '25. novembar 2022.', '978-86-521-4675-8', 'Adrijana Miladinović', 449, 'slika', 0),
(21, 'Laku noć, Punpune 1', 'Laku noć, Punpune priča o odrastanju običnog klinca u gradu kao i svakom drugom. Njegova porodica je disfunkcionalna, nije najbistriji ni najmarljiviji đak i jedino što mu ide od ruke je što može da razgovara sa Bogom kada god to poželi. Ipak, sve to će se promeniti kada u njegovo odeljenje dođe Aiko, a iz njegovog doma odu roditelji.\r\n\r\nPunpun želi da osvoji Nobelovu nagradu i spasi svet.\r\nPunpun želi da se njegovi ne svađaju toliko.\r\nPunpun želi da se dopadne svojoj simpatiji.\r\nPazi šta želiš, Punpune.\r\n\r\n„Laku noć, Punpune je uspeo ono što su retki planetarno popularni serijali doživeli, a to je da prevaziđe svoju nametnutu ciljanu publiku (tinejdžeri i mladići) i postane manga van žanra, manga iz koje mladi upijaju i uče dok se stariji podsećaju i prihvataju.“\r\n\r\n– Aleksandar Nešić', '13x20 cm', 224, 'Latinica', 'Mek', '25. novembar 2022.', '978-86-521-4675-8', 'Adrijana Miladinović', 449, 'slika', 0),
(22, 'Laku noć, Punpune 1', 'Laku noć, Punpune priča o odrastanju običnog klinca u gradu kao i svakom drugom. Njegova porodica je disfunkcionalna, nije najbistriji ni najmarljiviji đak i jedino što mu ide od ruke je što može da razgovara sa Bogom kada god to poželi. Ipak, sve to će se promeniti kada u njegovo odeljenje dođe Aiko, a iz njegovog doma odu roditelji.\r\n\r\nPunpun želi da osvoji Nobelovu nagradu i spasi svet.\r\nPunpun želi da se njegovi ne svađaju toliko.\r\nPunpun želi da se dopadne svojoj simpatiji.\r\nPazi šta želiš, Punpune.\r\n\r\n„Laku noć, Punpune je uspeo ono što su retki planetarno popularni serijali doživeli, a to je da prevaziđe svoju nametnutu ciljanu publiku (tinejdžeri i mladići) i postane manga van žanra, manga iz koje mladi upijaju i uče dok se stariji podsećaju i prihvataju.“\r\n\r\n– Aleksandar Nešić', '13x20 cm', 224, 'Latinica', 'Mek', '25. novembar 2022.', '978-86-521-4675-8', 'Adrijana Miladinović', 449, '22.jpg', 1),
(23, 'Majina knjiga', 'Najbolja knjiga ikada.', '13x20 cm', 74, 'Latinica', 'Mek', '10. decembar 2022.', '978-86-521-7474-5', 'Maja', 200, '1670688473_23.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `title_author`
--

CREATE TABLE `title_author` (
  `id` int(11) NOT NULL,
  `title_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `title_author`
--

INSERT INTO `title_author` (`id`, `title_id`, `author_id`) VALUES
(1, 1, 15),
(2, 1, 16),
(3, 2, 21),
(4, 3, 20),
(5, 4, 14),
(6, 5, 2),
(7, 6, 3),
(8, 7, 1),
(9, 8, 12),
(10, 9, 11),
(11, 10, 18),
(12, 11, 5),
(13, 12, 4),
(14, 13, 9),
(15, 13, 10),
(16, 14, 6),
(17, 14, 7),
(18, 15, 8),
(19, 16, 13),
(20, 17, 19),
(21, 18, 17),
(22, 20, 24),
(23, 21, 24),
(24, 22, 24),
(26, 23, 23);

-- --------------------------------------------------------

--
-- Table structure for table `title_category`
--

CREATE TABLE `title_category` (
  `id` int(11) NOT NULL,
  `title_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `title_category`
--

INSERT INTO `title_category` (`id`, `title_id`, `category_id`) VALUES
(1, 1, 17),
(2, 1, 10),
(3, 2, 8),
(4, 2, 23),
(5, 2, 5),
(6, 3, 2),
(7, 3, 5),
(8, 3, 21),
(9, 3, 22),
(10, 4, 16),
(11, 4, 15),
(12, 4, 3),
(13, 4, 5),
(14, 5, 6),
(15, 5, 5),
(16, 5, 7),
(17, 6, 8),
(18, 6, 5),
(19, 7, 1),
(20, 7, 2),
(21, 7, 3),
(22, 7, 4),
(23, 7, 5),
(24, 8, 15),
(25, 8, 3),
(26, 9, 10),
(27, 9, 3),
(28, 9, 13),
(29, 10, 10),
(30, 10, 3),
(31, 10, 5),
(32, 10, 19),
(33, 11, 1),
(34, 11, 12),
(35, 11, 8),
(36, 11, 10),
(37, 11, 5),
(38, 12, 9),
(39, 12, 10),
(40, 12, 11),
(41, 12, 5),
(42, 13, 3),
(43, 13, 13),
(44, 13, 5),
(45, 14, 8),
(46, 14, 10),
(47, 14, 3),
(48, 14, 13),
(49, 14, 5),
(50, 15, 1),
(51, 15, 8),
(52, 15, 14),
(53, 15, 5),
(54, 16, 8),
(55, 17, 12),
(56, 17, 8),
(57, 17, 5),
(58, 18, 12),
(59, 18, 6),
(60, 18, 18),
(61, 20, 14),
(62, 20, 27),
(63, 20, 28),
(64, 21, 27),
(65, 21, 28),
(66, 22, 14),
(67, 22, 27),
(68, 22, 28),
(72, 23, 1),
(73, 23, 24),
(74, 23, 25);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `username` varchar(60) NOT NULL,
  `email` varchar(200) NOT NULL,
  `u_password` varchar(500) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `email`, `u_password`, `role_id`) VALUES
(1, 'Petar', 'Pertovic', 'petarAdmin', 'petarAdmin@gmail.com', '70af7dbc6eebb31822689ad041942b44d9bdb43b', 1),
(2, 'Milica', 'Milicevic', 'milicaaa', 'milicaaa@gmail.com', 'b08a9d3443e0d7de000a0bbfae9d241025f3e9d7', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `role`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `visitors`
--

CREATE TABLE `visitors` (
  `id` int(11) NOT NULL,
  `page` varchar(20) NOT NULL,
  `number` int(11) NOT NULL,
  `date` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visitors`
--

INSERT INTO `visitors` (`id`, `page`, `number`, `date`) VALUES
(1, 'Kontakt', 6, '05.05.2022.'),
(2, 'Kontakt', 6, '06.05.2022.'),
(3, 'Proizvodi', 17, '06.05.2022.'),
(4, 'Početna', 9, '06.05.2022.'),
(5, 'Autor', 2, '06.05.2022.'),
(6, 'Kontakt', 16, '07.05.2022.'),
(7, 'Proizvodi', 48, '07.05.2022.'),
(8, 'Početna', 8, '07.05.2022.'),
(9, 'Autor', 1, '07.05.2022.'),
(10, 'Proizvodi', 50, '08.05.2022.'),
(11, 'Početna', 1, '08.05.2022.'),
(12, 'Kontakt', 2, '08.05.2022.'),
(13, 'Početna', 1, '11.11.2022.'),
(14, 'Proizvodi', 1, '11.11.2022.'),
(15, 'Početna', 3, '14.11.2022.'),
(16, 'Kontakt', 4, '14.11.2022.'),
(17, 'Autor', 2, '14.11.2022.'),
(18, 'Proizvodi', 1, '14.11.2022.'),
(19, 'Početna', 1, '21.11.2022.'),
(20, 'Kontakt', 4, '21.11.2022.'),
(21, 'Kontakt', 1, '24.11.2022.'),
(22, 'Proizvodi', 1, '24.11.2022.'),
(23, 'Početna', 1, '02.12.2022.'),
(24, 'Proizvodi', 2, '02.12.2022.'),
(25, 'Početna', 1, '04.12.2022.'),
(26, 'Proizvodi', 1, '04.12.2022.'),
(27, 'Kontakt', 1, '04.12.2022.'),
(28, 'Autor', 1, '04.12.2022.'),
(29, 'Početna', 6, '09.12.2022.'),
(30, 'Proizvodi', 20, '09.12.2022.'),
(31, 'Početna', 3, '10.12.2022.'),
(32, 'Proizvodi', 14, '10.12.2022.'),
(33, 'Kontakt', 10, '10.12.2022.'),
(34, 'Početna', 1, '11.12.2022.'),
(35, 'Autor', 2, '11.12.2022.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_user` (`user_id`);

--
-- Indexes for table `cart_lists`
--
ALTER TABLE `cart_lists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list_cart` (`cart_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_email`
--
ALTER TABLE `contact_email`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_main`
--
ALTER TABLE `menu_main`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_user`
--
ALTER TABLE `menu_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_payment` (`payment_id`),
  ADD KEY `order_country` (`country_id`),
  ADD KEY `order_cart` (`cart_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `title_author`
--
ALTER TABLE `title_author`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_title1` (`author_id`),
  ADD KEY `author_title2` (`title_id`);

--
-- Indexes for table `title_category`
--
ALTER TABLE `title_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_title1` (`category_id`),
  ADD KEY `category_title2` (`title_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_user` (`role_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cart_lists`
--
ALTER TABLE `cart_lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `contact_email`
--
ALTER TABLE `contact_email`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `menu_main`
--
ALTER TABLE `menu_main`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `menu_user`
--
ALTER TABLE `menu_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `title_author`
--
ALTER TABLE `title_author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `title_category`
--
ALTER TABLE `title_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `visitors`
--
ALTER TABLE `visitors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `cart_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `cart_lists`
--
ALTER TABLE `cart_lists`
  ADD CONSTRAINT `list_cart` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `order_cart` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `order_country` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`),
  ADD CONSTRAINT `order_payment` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`);

--
-- Constraints for table `title_author`
--
ALTER TABLE `title_author`
  ADD CONSTRAINT `author_title1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`),
  ADD CONSTRAINT `author_title2` FOREIGN KEY (`title_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `title_category`
--
ALTER TABLE `title_category`
  ADD CONSTRAINT `category_title1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `category_title2` FOREIGN KEY (`title_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `role_user` FOREIGN KEY (`role_id`) REFERENCES `user_roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
