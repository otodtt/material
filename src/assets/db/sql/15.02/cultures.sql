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
(17, 3, 'Фъстъци', 'arachis-hypogaea', '2017-03-25 21:24:11', '2017-03-25 21:24:11'),
(18, 4, 'Домати, Пипер, Патладжан', 'vegetables', '2018-01-21 09:00:41', '2018-01-21 09:00:41'),
(19, 4, 'Картофи', 'potatoes', '2018-01-21 09:01:28', '2018-01-21 09:01:44'),
(20, 4, 'Лукови култури', 'onion', '2018-01-21 09:03:43', '2018-01-21 09:03:43'),
(21, 4, 'Зелеви култури', 'cabbage', '2018-01-21 09:05:08', '2018-01-21 09:05:08'),
(22, 4, 'Тиквови култури', 'pumpkin', '2018-01-21 09:06:20', '2018-01-21 09:06:20'),
(23, 4, 'Листни зеленчуци', 'leafy', '2018-01-21 09:08:05', '2018-01-21 09:08:05'),
(24, 5, 'Домати', 'solanum-lycopersicum', '2018-02-02 08:03:38', '2018-02-02 08:03:38'),
(25, 5, 'Тиквови', 'cucurbitaceae', '2018-02-02 08:27:06', '2018-02-08 07:34:02'),
(26, 5, 'Украсни', 'decorate', '2018-02-02 08:28:15', '2018-02-02 08:28:28'),
(27, 5, 'Пипер', 'capsicum-annuum', '2018-02-02 08:29:10', '2018-02-02 08:29:10'),
(28, 5, 'Листни зеленчуци', 'leafy-facilities', '2018-02-02 08:34:06', '2018-02-02 08:34:06'),
(29, 6, 'Семкови', 'seed-species', '2018-02-09 07:51:17', '2018-02-09 07:53:52'),
(30, 6, 'Костилкови', 'stone-species', '2018-02-09 07:53:41', '2018-02-09 07:53:41'),
(31, 7, 'Ягода', 'fragaria', '2018-02-09 07:56:00', '2018-02-09 07:56:00'),
(32, 7, 'Малина', 'rubus-idaeus', '2018-02-09 07:57:11', '2018-02-09 07:57:11'),
(33, 7, 'Касис', 'ribes-nigrum', '2018-02-09 07:58:03', '2018-02-09 07:58:03'),
(34, 8, 'Лоза', 'vitis-vinifera', '2018-02-09 07:59:54', '2018-02-09 07:59:54');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
