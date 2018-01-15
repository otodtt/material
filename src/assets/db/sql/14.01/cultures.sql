-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 
-- Версия на сървъра: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products`
--

-- --------------------------------------------------------

--
-- Структура на таблица `cultures`
--

CREATE TABLE `cultures` (
  `id` int(11) NOT NULL,
  `group_id` tinyint(4) NOT NULL,
  `name` varchar(100) NOT NULL,
  `latin_name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `cultures`
--

INSERT INTO `cultures` (`id`, `group_id`, `name`, `latin_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Пшеница', 'triticum-ssp', '2017-03-25 19:01:01', '2017-03-25 19:01:01'),
(2, 1, 'Ечемик', 'hordeum-vulgare', '2017-03-25 19:01:45', '2017-03-25 19:01:45'),
(3, 1, 'Овес', 'avena-sativa', '2017-03-25 19:03:03', '2017-03-25 19:03:03'),
(4, 1, 'Ръж', 'secale-cereale', '2017-03-25 19:04:00', '2017-03-25 19:04:00'),
(5, 1, 'Царевица', 'zea-mays', '2017-03-25 19:05:06', '2017-03-25 19:05:06'),
(6, 2, 'Фасул', 'phaseolus-vulgaris', '2017-03-25 21:09:07', '2017-11-23 19:33:01'),
(7, 2, 'Соя', 'glycine-max', '2017-03-25 21:09:51', '2017-03-25 21:09:51'),
(8, 2, 'Грах', 'pisum-sativum', '2017-03-25 21:10:43', '2017-03-25 21:10:43'),
(9, 2, 'Леща', 'lens-culinaris', '2017-03-25 21:12:04', '2017-03-25 21:12:04'),
(10, 2, 'Нахут', 'cicer-arietinum', '2017-03-25 21:13:04', '2017-03-25 21:13:04'),
(11, 2, 'Люцерна', 'medicago-sativa', '2017-03-25 21:14:58', '2017-03-25 21:14:58'),
(12, 3, 'Тютюн', 'nicotiana-tabacum', '2017-03-25 21:16:47', '2017-03-25 21:16:47'),
(13, 3, 'Цвекло', 'beta-vulgaris', '2017-03-25 21:17:57', '2017-03-25 21:17:57'),
(14, 3, 'Памук', 'gossypium', '2017-03-25 21:19:10', '2017-03-25 21:19:10'),
(15, 3, 'Слънчоглед', 'helianthus-annuus', '2017-03-25 21:20:33', '2017-03-25 21:20:33'),
(16, 3, 'Рапица', 'brassica-napus', '2017-03-25 21:21:29', '2017-03-25 21:21:29'),
(17, 3, 'Фъстъци', 'arachis-hypogaea', '2017-03-25 21:24:11', '2017-03-25 21:24:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cultures`
--
ALTER TABLE `cultures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cultures`
--
ALTER TABLE `cultures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
