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
-- Структура на таблица `images`
--

CREATE TABLE `images` (
  `practices_id` tinyint(4) NOT NULL,
  `imgPath` varchar(500) NOT NULL,
  `imgTitle` varchar(500) NOT NULL,
  `thumbPath` varchar(500) NOT NULL,
  `thumbAlt` varchar(500) NOT NULL,
  `thumbTitle` varchar(500) NOT NULL,
  `bgName` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `images`
--

INSERT INTO `images` (`practices_id`, `imgPath`, `imgTitle`, `thumbPath`, `thumbAlt`, `thumbTitle`, `bgName`, `created_at`, `updated_at`) VALUES
(1, '../../../../../assets/diseases/Erysiphe_graminis.jpg', 'Erysiphe graminis f. sp. tritici', '../../../../../assets/diseases/Erysiphe_graminis_thums.jpg', 'Erysiphe graminis f. sp. tritici', 'Erysiphe graminis f. sp. tritici', 'Брашнеста мана', '2018-01-07 15:55:21', '2018-01-07 15:55:21'),
(1, '../../../../../assets/diseases/Blumeria_graminis_on_winter_wheat.jpg', 'Брашнеста мана по пшеница', '../../../../../assets/diseases/Blumeria_graminis_on_winter_wheat_thumb.jpg', 'Erysiphe graminis по пшеницата', 'Брашнеста мана по пшеница', 'Бр. мана по пшеница', '2018-01-07 15:56:26', '2018-01-07 15:56:26'),
(1, '../../../../../assets/diseases/Erysiphe_graminis_leaf.jpg', 'Брашнеста мана по листа и класове', '../../../../../assets/diseases/Erysiphe_graminis_leaf_thumb.jpg', 'Erysiphe graminis leaf thumb', 'Брашнеста мана по листа', 'Бр. мана по листа и класове', '2018-01-07 15:57:43', '2018-01-07 15:57:43'),
(1, '../../../../../assets/diseases/Erysiphe_graminis_pr.jpg', 'Брашнеста мана по листа и класове', '../../../../../assets/diseases/Erysiphe_graminis_pr_thumb.jpg', 'Erysiphe graminis on leafs', 'Erysiphe graminis sp. tritici', 'Бр. мана по листа и класове', '2018-01-07 15:58:37', '2018-01-07 15:58:37'),
(2, '../../../../../assets/diseases/Puccinia_recondita_f.sp._tritici_on_Triticum_aestivum.jpg', 'Кафява ръжда по пшеница', '../../../../../assets/diseases/Puccinia_recondita_f.sp._tritici_on_Triticum_aestivum_thumb.jpg', 'Puccinia recondita on leaf', 'Puccinia recondita f.sp. tritici', 'Кафява ръжда по пшеница', '2018-01-07 16:03:40', '2018-01-07 16:03:40'),
(2, '../../../../../assets/diseases/Puccinia_recondita.jpg', 'Кафява ръжда на лист', '../../../../../assets/diseases/Puccinia_recondita_thumb.jpg', 'Puccinia recondita', 'Puccinia recondita', 'Кафява ръжда', '2018-01-07 16:04:40', '2018-01-07 16:04:40'),
(3, '../../../../../assets/diseases/Tilletia_levis_pr.jpg', 'Главня - Tilletia levis', '../../../../../assets/diseases/Tilletia_levis_pz_thumb.jpg', 'Tilletia levis', 'Tilletia levis', 'Главня - Tilletia levis', '2018-01-07 16:08:43', '2018-01-07 16:08:43'),
(3, '../../../../../assets/diseases/Tilletia_caries_(DC.)_Tul._C._Tul.jpg', 'Главня - Tilletia tritici', '../../../../../assets/diseases/Tilletia_caries_(DC.)_Tul._C._Tul.thumb.jpg', 'Tilletia tritici', 'Tilletia tritici', 'Главня - Tilletia tritici', '2018-01-07 16:09:37', '2018-01-07 16:09:37'),
(4, '../../../../../assets/diseases/Fusarium_culmorum.jpg', 'Базично гниене', '../../../../../assets/diseases/Fusarium_culmorum_thumb.jpg', 'Fusarium culmorum', 'Fusarium culmorum', 'Базично гниене', '2018-01-07 16:12:30', '2018-01-07 16:12:30'),
(5, '../../../../../assets/diseases/Monographella_nivalis.jpg', 'Снежна плесен', '../../../../../assets/diseases/Monographella_nivalis_thumb.jpg', 'Monographella nivalis', 'Monographella nivalis', 'Снежна плесен', '2018-01-07 16:15:22', '2018-01-07 16:15:22'),
(6, '../../../../../assets/diseases/Gibberella_zeae.jpg', 'Гниене на класовете', '../../../../../assets/diseases/Gibberella_zeae_thumb.jpg', 'Gibberella zeae', 'Gibberella zeae', 'Гниене на класовете', '2018-01-07 16:18:48', '2018-01-07 16:18:48'),
(7, '../../../../../assets/diseases/Septoria-tritici.jpg', 'Ран листен пригор - Septoria tritici', '../../../../../assets/diseases/Septoria-tritici_thumb.jpg', 'Septoria tritici', 'Septoria tritici', 'Ран листен пригор', '2018-01-07 16:22:31', '2018-01-07 16:22:31'),
(8, '../../../../../assets/diseases/Leptosphaeria_nodorum.jpg', 'Петносване на класовете', '../../../../../assets/diseases/Leptosphaeria_nodorum_thumb.jpg', 'Leptosphaeria nodorum', 'Leptosphaeria nodorum', 'Петносване на класовете', '2018-01-07 16:29:18', '2018-01-07 16:29:18'),
(9, '../../../../../assets/diseases/Helminthosporium_sativum_pr.jpg', 'Хелминтоспориоза по пшеницата', '../../../../../assets/diseases/Helminthosporium_sativum_pr_thumb.jpg', 'Helminthosporium sativum', 'Helminthosporium sativum', 'Хелминтоспориоза по пшеницата', '2018-01-07 16:32:12', '2018-01-07 16:32:12'),
(10, '../../../../../assets/diseases/Pseudocercosporella_herpotrichoides.jpg', 'Гниене на основите', '../../../../../assets/diseases/Pseudocercosporella_herpotrichoides_thums.jpg', 'Pseudocercosporella herpotrichoides', 'Pseudocercosporella herpotrichoides', 'Гниене на основите', '2018-01-07 16:34:53', '2018-01-07 16:34:53'),
(11, '../../../../../assets/diseases/Gaeumannomyces_graminis.jpg', 'Черно кореново гниене', '../../../../../assets/diseases/Gaeumannomyces_graminis_thumb.jpg', 'Gaeumannomyces graminis', 'Gaeumannomyces graminis', 'Черно кореново гниене', '2018-01-07 16:38:22', '2018-01-07 16:38:22'),
(12, '../../../../../assets/insects/Eurygaster_testudinaria_ZSM.jpg', 'Вредна житна дървеница', '../../../../../assets/insects/Eurygaster_testudinaria_ZSM1.thumb.jpg', 'Eurygaster integriceps', 'Eurygaster integriceps', 'Вредна житна дървеница', '2018-01-07 16:49:00', '2018-01-07 16:49:00'),
(12, '../../../../../assets/insects/Eurygaster_maura1.jpg', 'Мавърска дървеница', '../../../../../assets/insects/Eurygaster_maura1_thumb.jpg', 'Eurygaster maura', 'Eurygaster maura', 'Мавърска дървеница', '2018-01-07 16:49:46', '2018-01-07 16:49:46'),
(12, '../../../../../assets/insects/Aelia_acuminata_MHNT_Fronton.jpg', 'Остроглава дървеница', '../../../../../assets/insects/Aelia_acuminata_MHNT_Fronton_thumb.jpg', 'Aelia acuminata', 'Aelia acuminata', 'Остроглава дървеница', '2018-01-07 16:50:36', '2018-01-07 16:50:36'),
(13, '../../../../../assets/insects/Zabrus_tenebrioides.jpg', 'Обикновен житен бегач', '../../../../../assets/insects/Zabrus_tenebrioides_thumb.jpg', 'Zabrus tenebrioides Goeze', 'Обикновен житен бегач', 'Обикновен житен бегач', '2018-01-07 16:54:06', '2018-01-07 16:54:06'),
(13, '../../../../../assets/insects/Zabrus_spinipes.jpg', 'Голям житен бегач', '../../../../../assets/insects/Zabrus_spinipes_thumb.jpg', 'Zabrus spinipes', 'Голям житен бегач', 'Голям житен бегач', '2018-01-07 16:55:17', '2018-01-07 16:55:17'),
(14, '../../../../../assets/insects/Haplothrips_tritici.jpg', 'Пшеничен трипс', '../../../../../assets/insects/Haplothrips_tritici_thumb.jpg', 'Haplothrips tritici Kurd', 'Пшеничен трипс', 'Пшеничен трипс', '2018-01-07 16:59:00', '2018-01-07 16:59:00'),
(15, '../../../../../assets/insects/Sitobion_avenae_Fabricius.jpg', 'Овесена листна въшка', '../../../../../assets/insects/Sitobion_avenae_Fabricius_thumb.jpg', 'Sitobion avenae L.', 'Овесена листна въшка', 'Овесена листна въшка', '2018-01-07 17:02:15', '2018-01-07 17:02:15'),
(15, '../../../../../assets/insects/Schizaphis_graminum_oat_usda_(cropped).jpg', 'Обикновена житна въшка', '../../../../../assets/insects/Schizaphis_graminum_oat_usda_(cropped).thumb.jpg', 'Schizaphis graminum Rond', 'Обикновена житна въшка', 'Обикновена житна въшка', '2018-01-07 17:03:07', '2018-01-07 17:03:07'),
(16, '../../../../../assets/insects/Mayetiola_destructor.jpg', 'Хесенска муха', '../../../../../assets/insects/Mayetiola_destructor_thumb.jpg', 'Mayetiola destructor Say', 'Хесенска муха', 'Хесенска муха', '2018-01-07 17:07:25', '2018-01-07 17:07:25'),
(16, '../../../../../assets/insects/Opomyza_florum.jpg', 'Житна тревна муха', '../../../../../assets/insects/Opomyza_florum_thumb.jpg', 'Opomyza florum Fab', 'Житна тревна муха', 'Житна тревна муха', '2018-01-07 17:08:09', '2018-01-07 17:08:09'),
(16, '../../../../../assets/insects/Phorbia_fumigata.jpg', 'Черна пшеничена муха', '../../../../../assets/insects/Phorbia_fumigata_thumb.jpg', 'Phorbia fumigata Meigen', 'Черна пшеничена муха', 'Черна пшеничена муха', '2018-01-07 17:08:53', '2018-01-07 17:08:53'),
(17, '../../../../../assets/insects/Cephus_pygmaeus.jpg', 'Житна стъблена оса', '../../../../../assets/insects/Cephus_pygmaeus_thumb.jpg', 'Cephus pygmaeus L.', 'Житна стъблена оса', 'Житна стъблена оса', '2018-01-07 17:12:01', '2018-01-07 17:12:01'),
(17, '../../../../../assets/insects/Trachelus_tabidus.jpg', 'Черна житна стъблена оса', '../../../../../assets/insects/Trachelus_tabidus_thumb.jpg', 'Cephus (Trachelus) tabidus F.', 'Черна житна стъблена оса', 'Черна житна стъблена оса', '2018-01-07 17:12:45', '2018-01-07 17:12:45'),
(18, '../../../../../assets/insects/Anisoplia_austriaca.jpg', 'Обикновен житар', '../../../../../assets/insects/Anisoplia_austriaca_thumb.jpg', 'Anisoplia austriaca Hrbst', 'Обикновен житар', 'Обикновен житар', '2018-01-07 17:15:36', '2018-01-07 17:15:36'),
(19, '../../../../../assets/insects/Lema_melanopus.jpg', 'Обикновена житна пиявица', '../../../../../assets/insects/Lema_melanopus_thumb.jpg', 'Lema melanopus L', 'Обикновена житна пиявица', 'Житна пиявица', '2018-01-07 17:18:32', '2018-01-07 17:18:32'),
(19, '../../../../../assets/insects/Lema_lichenis.jpg', 'Синя житна пиявица', '../../../../../assets/insects/Lema_lichenis_thumb.jpg', 'Lema lichenis Voet', 'Синя житна пиявица', 'Синя житна пиявица', '2018-01-07 17:19:31', '2018-01-07 17:19:31'),
(22, '../../../../../assets/weeds/Veronica_hederifolia_s._str._sl9.jpg', 'Бръшлянолистно великденче', '../../../../../assets/weeds/Veronica_hederifolia_s._str._sl9_thumb.jpg', 'Veronica hederifolia', 'Бръшлянолистно великденче', 'Бръшлянолистно великденче', '2018-01-07 17:26:05', '2018-01-07 17:26:05'),
(22, '../../../../../assets/weeds/Alopecurus_myosuroides1.jpg', 'Полска лисича опашка', '../../../../../assets/weeds/Alopecurus_myosuroides1_thumb.jpg', 'Alopecurus myosuroides', 'Полска лисича опашка', 'Полска лисича опашка', '2018-01-07 17:26:50', '2018-01-07 17:26:50'),
(22, '../../../../../assets/weeds/Avena_fatua1.jpg', 'Див овес', '../../../../../assets/weeds/Avena_fatua1_thumb.jpg', 'Avena fatua', 'Див овес', 'Див овес', '2018-01-07 17:27:37', '2018-01-07 17:27:37'),
(22, '../../../../../assets/weeds/Cirsium_arvense2.jpg', 'Паламида', '../../../../../assets/weeds/Cirsium_arvense2_thumb.jpg', 'Cirsium arvense', 'Паламида', 'Паламида', '2018-01-07 17:28:19', '2018-01-07 17:28:19'),
(24, '../../../../../assets/diseases/Ustilago_hordei_pr.jpg', 'Покрита главня Ustilago hordei', '../../../../../assets/diseases/Ustilago_hordei_pr_thumb.jpg', 'Ustilago hordei', 'Ustilago hordei', 'Покрита главня', '2018-01-10 12:37:21', '2018-01-10 12:37:21'),
(24, '../../../../../assets/diseases/Ustilago_nuda_barley.jpg', 'Праховита главня Ustilago nuda', '../../../../../assets/diseases/Ustilago_nuda_barley_thumb.jpg', 'Ustilago nuda', 'Ustilago nuda', 'Праховита главня', '2018-01-10 12:38:35', '2018-01-10 12:38:35'),
(25, '../../../../../assets/diseases/Hordeum_vulgare_Erysiphe_graminis_f._hordei.jpg', 'Брашнеста мана по ечемик', '../../../../../assets/diseases/Hordeum_vulgare_Erysiphe_graminis_f._hordei_thumb.jpg', 'Erysiphe graminis f.hordei', 'Erysiphe graminis f.hordei', 'Брашнеста мана по ечемик', '2018-01-10 12:43:24', '2018-01-10 12:43:24'),
(25, '../../../../../assets/diseases/Erysiphe_graminis_leaf.jpg', 'Брашнеста мана', '../../../../../assets/diseases/Erysiphe_graminis_leaf_thumb.jpg', 'Erysiphe graminis', 'Erysiphe graminis', 'Брашнеста мана', '2018-01-10 12:44:18', '2018-01-10 12:44:18'),
(26, '../../../../../assets/diseases/Pyrenophora_graminea_pr.jpg', 'Ленточна болест - Pyrenophora graminea', '../../../../../assets/diseases/Pyrenophora_graminea_pr_thumb.jpg', 'Pyrenophora graminea', 'Pyrenophora graminea', 'Ленточна болест', '2018-01-10 12:47:29', '2018-01-10 12:47:29'),
(27, '../../../../../assets/diseases/Puccinia_hordei.jpg', 'Листна ръжда', '../../../../../assets/diseases/Puccinia_hordei_thumb.jpg', 'Puccinia hordei', 'Puccinia hordei', 'Листна ръжда', '2018-01-10 12:51:37', '2018-01-10 12:51:37'),
(28, '../../../../../assets/diseases/Fusarium_culmorum.jpg', 'Базично гниене', '../../../../../assets/diseases/Fusarium_culmorum_thumb.jpg', 'Fusarium culmorum', 'Fusarium culmorum', 'Базично гниене', '2018-01-10 12:56:28', '2018-01-10 12:56:28'),
(28, '../../../../../assets/diseases/Monographella_nivalis.jpg', 'Снежна плесен', '../../../../../assets/diseases/Monographella_nivalis_thumb.jpg', 'Monographella nivalis', 'Monographella nivalis', 'Снежна плесен', '2018-01-10 12:57:26', '2018-01-10 12:57:26'),
(30, '../../../../../assets/diseases/Spot_blotch.jpg', 'Мрежести петна', '../../../../../assets/diseases/Spot_blotch_thumb.jpg', 'Pyrenophora teres', 'Pyrenophora teres', 'Мрежести петна', '2018-01-10 13:02:14', '2018-01-10 13:02:14'),
(31, '../../../../../assets/insects/Zabrus_tenebrioides.jpg', 'Обикновен житен бегач', '../../../../../assets/insects/Zabrus_tenebrioides_thumb.jpg', 'Zabrus tenebrioides Goeze', 'Обикновен житен бегач', 'Обикновен житен бегач', '2018-01-10 13:35:58', '2018-01-10 13:35:58'),
(31, '../../../../../assets/insects/Zabrus_spinipes.jpg', 'Голям житен бегач', '../../../../../assets/insects/Zabrus_spinipes_thumb.jpg', 'Zabrus spinipes', 'Голям житен бегач', 'Голям житен бегач', '2018-01-10 13:36:44', '2018-01-10 13:36:44'),
(32, '../../../../../assets/insects/Sitobion_avenae_Fabricius.jpg', 'Овесена листна въшка', '../../../../../assets/insects/Sitobion_avenae_Fabricius_thumb.jpg', 'Sitobion avenae L.', 'Овесена листна въшка', 'Овесена листна въшка', '2018-01-10 13:42:15', '2018-01-10 13:42:15'),
(32, '../../../../../assets/insects/Schizaphis_graminum_oat_usda_(cropped).jpg', 'Обикновена житна въшка', '../../../../../assets/insects/Schizaphis_graminum_oat_usda_(cropped).thumb.jpg', 'Schizaphis graminum Rond', 'Обикновена житна въшка', 'Обикновена житна въшка', '2018-01-10 13:43:03', '2018-01-10 13:43:03'),
(33, '../../../../../assets/insects/Lema_melanopus.jpg', 'Обикновена житна пиявица', '../../../../../assets/insects/Lema_melanopus_thumb.jpg', 'Lema melanopus L', 'Обикновена житна пиявица', 'Житна пиявица', '2018-01-10 13:50:29', '2018-01-10 13:50:29'),
(33, '../../../../../assets/insects/Lema_lichenis.jpg', 'Синя житна пиявица', '../../../../../assets/insects/Lema_lichenis_thumb.jpg', 'Lema lichenis Voet', 'Синя житна пиявица', 'Синя житна пиявица', '2018-01-10 13:51:12', '2018-01-10 13:51:12'),
(34, '../../../../../assets/insects/Oscinella.sp.1.jpg', 'Овесена шведска муха', '../../../../../assets/insects/Oscinella.sp.1_thumb.jpg', 'Oscinell frit', 'Овесена шведска муха', 'Овесена шведска муха', '2018-01-10 13:55:14', '2018-01-10 13:55:14'),
(36, '../../../../../assets/insects/Haplothrips_tritici.jpg', 'Пшеничен трипс', '../../../../../assets/insects/Haplothrips_tritici_thumb.jpg', 'Haplothrips tritici Kurd', 'Пшеничен трипс', 'Пшеничен трипс', '2018-01-10 14:11:45', '2018-01-10 14:11:45'),
(39, '../../../../../assets/weeds/1024px-Lamium_amplexicaule_Kaldari_01.jpg', 'Мъртва коприва', '../../../../../assets/weeds/1024px-Lamium_amplexicaule_Kaldari_01_thumb.jpg', 'Lamium amplexicaule', 'Мъртва коприва', 'Мъртва коприва', '2018-01-10 14:17:08', '2018-01-10 14:17:08'),
(39, '../../../../../assets/weeds/Ranunculus_arvensis_sl5.jpg', 'Полско лютиче', '../../../../../assets/weeds/Ranunculus_arvensis_sl5_thumb.jpg', 'Ranunculus arvensis', 'Полско лютиче', 'Полско лютиче', '2018-01-10 14:17:53', '2018-01-10 14:17:53'),
(39, '../../../../../assets/weeds/Brassicaceae_-_Sinapis_arvensis_(3).jpg', 'Полски синап', '../../../../../assets/weeds/Brassicaceae_-_Sinapis_arvensis_(3)_thumb.jpg', 'Sinapis arvensis', 'Полски синап', 'Полски синап', '2018-01-10 14:18:37', '2018-01-10 14:18:37'),
(39, '../../../../../assets/weeds/Sorghum_halepensis1.jpg', 'Балур', '../../../../../assets/weeds/Sorghum_halepensis1_thumb.jpg', 'Sorghum halepensis', 'Балур', 'Балур', '2018-01-10 14:19:20', '2018-01-10 14:19:20'),
(41, '../../../../../assets/diseases/Puccinia_coronata.jpg', 'Коронеста ръжда', '../../../../../assets/diseases/Puccinia_coronata_thumb.jpg', 'Puccinia coronata', 'Puccinia coronata', 'Коронеста ръжда', '2018-01-11 08:12:34', '2018-01-11 08:12:34'),
(42, '../../../../../assets/diseases/Loose_smut_(Ustilago_avenae)_5187022.png', 'Праховита главня по овеса', '../../../../../assets/diseases/Loose_smut_(Ustilago_avenae)_5187022_thumb.jpg', 'Ustilago avenae', 'Ustilago avenae', 'Праховита главня', '2018-01-11 08:15:23', '2018-01-11 08:15:23'),
(45, '../../../../../assets/diseases/Erysiphe_graminis_avena.jpg', 'Брашнеста мана', '../../../../../assets/diseases/Erysiphe_graminis_avena_thumb.jpg', 'Erysiphe graminis', 'Erysiphe graminis', 'Брашнеста мана', '2018-01-11 08:21:22', '2018-01-11 08:21:22'),
(46, '../../../../../assets/diseases/Fusarium_spp.jpg', 'Фузарийно кореново гниене', '../../../../../assets/diseases/Fusarium_spp_thumb.jpg', 'Fusarium spp.', 'Fusarium spp.', 'Фузарийно кореново гниене', '2018-01-11 08:24:34', '2018-01-11 08:24:34'),
(47, '../../../../../assets/insects/Lema_melanopus.jpg', 'Обикновена житна пиявица', '../../../../../assets/insects/Lema_melanopus_thumb.jpg', 'Lema melanopus L.', 'Обикновена житна пиявица', 'Житна пиявица', '2018-01-11 08:43:45', '2018-01-11 08:43:45'),
(47, '../../../../../assets/insects/Lema_lichenis.jpg', 'Синя житна пиявица', '../../../../../assets/insects/Lema_lichenis_thumb.jpg', 'Lema lichenis Voet', 'Синя житна пиявица', 'Синя житна пиявица', '2018-01-11 08:44:37', '2018-01-11 08:44:37'),
(48, '../../../../../assets/insects/Oscinella.sp.1.jpg', 'Овесена шведска муха', '../../../../../assets/insects/Oscinella.sp.1_thumb.jpg', 'Oscinell_frit', 'Овесена шведска муха', 'Овесена шведска муха', '2018-01-11 08:47:46', '2018-01-11 08:47:46'),
(49, '../../../../../assets/insects/Sitobion_avenae_Fabricius.jpg', 'Овесена листна въшка', '../../../../../assets/insects/Sitobion_avenae_Fabricius_thumb.jpg', 'Sitobion avenae L.', 'Овесена листна въшка', 'Овесена листна въшка', '2018-01-11 08:50:36', '2018-01-11 08:50:36'),
(49, '../../../../../assets/insects/Schizaphis_graminum_oat_usda_(cropped).jpg', 'Обикновена житна въшка', '../../../../../assets/insects/Schizaphis_graminum_oat_usda_(cropped).thumb.jpg', 'Schizaphis graminum Rond', 'Обикновена житна въшка', 'Обикновена житна въшка', '2018-01-11 08:51:36', '2018-01-11 08:51:36'),
(52, '../../../../../assets/weeds/Avena_fatua1.jpg', 'Див овес', '../../../../../assets/weeds/Avena_fatua1_thumb.jpg', 'Avena fatua', 'Див овес', 'Див овес', '2018-01-11 08:57:11', '2018-01-11 08:57:11'),
(52, '../../../../../assets/weeds/AvenaFatua2.jpg', 'Див овес', '../../../../../assets/weeds/AvenaFatua2_thumb.jpg', 'Avena fatua plant', 'Див овес - растения', 'Див овес', '2018-01-11 08:58:24', '2018-01-11 08:58:24'),
(54, '../../../../../assets/diseases/Clavicps_purpurea.jpg', 'Мораво рогче', '../../../../../assets/diseases/Clavicps_purpurea_thumb.jpg', 'Clavicps purpurea', 'Clavicps purpurea', 'Мораво рогче', '2018-01-11 10:23:10', '2018-01-11 10:23:10'),
(55, '../../../../../assets/diseases/Rhynchosporium_secalis.jpg', 'Листен пригор', '../../../../../assets/diseases/Rhynchosporium_secalis_thumb.jpg', 'Rhynchosporium secalis', 'Rhynchosporium secalis', 'Листен пригор', '2018-01-11 10:26:40', '2018-01-11 10:26:40'),
(56, '../../../../../assets/diseases/Puccinia_recondita_secale.jpg', 'Kафява ръжда', '../../../../../assets/diseases/Puccinia_recondita_secale_thumb.jpg', 'Puccinia_recondita', 'Puccinia_recondita', 'Kафява ръжда', '2018-01-11 10:30:57', '2018-01-11 10:30:57'),
(57, '../../../../../assets/diseases/Fusarium_culmorum.jpg', 'Базичното гниене', '../../../../../assets/diseases/Fusarium_culmorum_thumb.jpg', 'Fusarium culmorum', 'Fusarium culmorum', 'Базичното гниене', '2018-01-11 10:34:36', '2018-01-11 10:34:36'),
(58, '../../../../../assets/diseases/Monographella_nivalis_2.jpg', 'Снежна плесен', '../../../../../assets/diseases/Monographella_nivalis_2_thumb.jpg', 'Monographella nivalis', 'Monographella nivalis', 'Снежна плесен', '2018-01-11 10:37:30', '2018-01-11 10:37:30'),
(59, '../../../../../assets/insects/Zabrus_tenebrioides.jpg', 'Обикновен житен бегач', '../../../../../assets/insects/Zabrus_tenebrioides_thumb.jpg', 'Zabrus tenebrioides Goeze', 'Обикновен житен бегач', 'Обикновен житен бегач', '2018-01-11 10:41:21', '2018-01-11 10:41:21'),
(59, '../../../../../assets/insects/Zabrus_spinipes.jpg', 'Голям житен бегач', '../../../../../assets/insects/Zabrus_spinipes_thumb.jpg', 'Zabrus spinipes', 'Голям житен бегач', 'Голям житен бегач', '2018-01-11 10:42:30', '2018-01-11 10:42:30'),
(60, '../../../../../assets/insects/Sitobion_avenae_Fabricius.jpg', 'Овесена листна въшка', '../../../../../assets/insects/Sitobion_avenae_Fabricius_thumb.jpg', 'Sitobion avenae L.', 'Овесена листна въшка', 'Овесена листна въшка', '2018-01-11 10:45:22', '2018-01-11 10:45:22'),
(60, '../../../../../assets/insects/Schizaphis_graminum_oat_usda_(cropped).jpg', 'Обикновена житна въшка', '../../../../../assets/insects/Schizaphis_graminum_oat_usda_(cropped).thumb.jpg', 'Schizaphis graminum Rond', 'Обикновена житна въшка', 'Обикновена житна въшка', '2018-01-11 10:46:09', '2018-01-11 10:46:09'),
(61, '../../../../../assets/insects/Lema_melanopus.jpg', 'Обикновена житна пиявица', '../../../../../assets/insects/Lema_melanopus_thumb.jpg', 'Lema melanopus L.', 'Обикновена житна пиявица', 'Обикновена житна пиявица', '2018-01-11 10:49:48', '2018-01-11 10:49:48'),
(61, '../../../../../assets/insects/Lema_lichenis.jpg', 'Синя житна пиявица', '../../../../../assets/insects/Lema_lichenis_thumb.jpg', 'Lema lichenis Voet', 'Синя житна пиявица', 'Синя житна пиявица', '2018-01-11 10:50:35', '2018-01-11 10:50:35'),
(62, '../../../../../assets/insects/Oscinella.sp.1.jpg', 'Овесена шведска муха', '../../../../../assets/insects/Oscinella.sp.1_thumb.jpg', 'Oscinella frit', 'Овесена шведска муха', 'Овесена шведска муха', '2018-01-11 10:55:25', '2018-01-11 10:55:25'),
(64, '../../../../../assets/insects/Haplothrips_tritici.jpg', 'Пшеничен трипс', '../../../../../assets/insects/Haplothrips_tritici_thumb.jpg', 'Haplothrips tritici Kurd', 'Пшеничен трипс', 'Пшеничен трипс', '2018-01-11 11:00:17', '2018-01-11 11:00:17'),
(66, '../../../../../assets/weeds/Alopecurus_myosuroides1.jpg', 'Полска лисича опашка', '../../../../../assets/weeds/Alopecurus_myosuroides1_thumb.jpg', 'Alopecurus myosuroides', 'Полска лисича опашка', 'Полска лисича опашка', '2018-01-11 11:03:58', '2018-01-11 11:03:58'),
(66, '../../../../../assets/weeds/Galium_aparine_10288.JPG', 'Обикновена лепка', '../../../../../assets/weeds/Galium_aparine_10288_tjumb.jpg', 'Galium aparine', 'Обикновена лепка', 'Обикновена лепка', '2018-01-11 11:04:44', '2018-01-11 11:04:44'),
(69, '../../../../../assets/diseases/Fusarium_spp_zea.jpg', 'Гниене на стъблата', '../../../../../assets/diseases/Fusarium_spp_zea_thumb.jpg', 'Fusarium spp', 'Fusarium spp', 'Гниене на стъблата', '2018-01-11 20:16:57', '2018-01-11 20:16:57'),
(70, '../../../../../assets/diseases/Ustilago_maydis_001.jpg', 'Обикновена главня', '../../../../../assets/diseases/Ustilago_maydis_001_thumb.jpg', 'Ustilago maidis', 'Ustilago maidis', 'Обикновена главня', '2018-01-11 20:19:43', '2018-01-11 20:19:43'),
(71, '../../../../../assets/diseases/Sporulation_on_leaf.jpg', 'Северен листен пригор', '../../../../../assets/diseases/Sporulation_on_leaf1_thumb.jpg', 'Setosphaeria turcica', 'Setosphaeria turcica', 'Северен листен пригор', '2018-01-11 20:22:57', '2018-01-11 20:22:57'),
(72, '../../../../../assets/insects/Tanymecus_dilaticollis.jpg', 'Сив царевичен хоботник', '../../../../../assets/insects/Tanymecus_dilaticollis_thumb.jpg', 'Tanymecus dilaticollis', 'Сив царевичен хоботник', 'Сив царевичен хоботник', '2018-01-11 20:29:41', '2018-01-11 20:29:41'),
(72, '../../../../../assets/insects/Tanymecus_palliatus.JPG', 'Сив цвеклов хоботник', '../../../../../assets/insects/Tanymecus_palliatus_thumb.jpg', 'Tanymecus palliatus', 'Сив цвеклов хоботник', 'Сив цвеклов хоботник', '2018-01-11 20:31:22', '2018-01-11 20:31:22'),
(73, '../../../../../assets/insects/Ostrinia_nubilalis.jpg', 'Царевичен стъблопробивач - възрастно', '../../../../../assets/insects/Ostrinia_nubilalis_thumb.jpg', 'Ostrinia nubilalis', 'Царевичен стъблопробивач', 'Царевичен стъблопробивач', '2018-01-11 20:36:44', '2018-01-11 20:36:44'),
(73, '../../../../../assets/insects/Ostrinia_nubilalis1.jpg', 'Царевичен стъблопробивач - ларва', '../../../../../assets/insects/Ostrinia_nubilalis1_thumb.jpg', 'Ostrinia nubilalis', 'Царевичен стъблопробивач ларва', 'Царевичен стъблопробивач - ларва', '2018-01-11 20:37:49', '2018-01-11 20:37:49'),
(74, '../../../../../assets/insects/Elateridae.jpg', 'Телени червеи - възрастно', '../../../../../assets/insects/Elateridae_thumb.jpg', 'Elateridae', 'Телени червеи - възрастно', 'Телени червеи - възрастно', '2018-01-11 20:40:59', '2018-01-11 20:40:59'),
(74, '../../../../../assets/insects/Click_beetle_larva.jpg', 'Телени червеи - ларва', '../../../../../assets/insects/Click_beetle_larva_thumb.jpg', 'Elateridae', 'Телени червеи - ларва', 'Телени червеи', '2018-01-11 20:41:55', '2018-01-11 20:41:55'),
(76, '../../../../../assets/insects/Helicoverpa_armigera_dorsal.jpg', 'Памукова нощенка', '../../../../../assets/insects/Helicoverpa_armigera_dorsal_thumb.jpg', 'Helicoverpa armigera', 'Памукова нощенка', 'Памукова нощенка', '2018-01-11 20:48:22', '2018-01-11 20:48:22'),
(76, '../../../../../assets/insects/Helicoverpa_armigera_larva.jpg', 'Памукова нощенка - ларва', '../../../../../assets/insects/Helicoverpa_armigera_larva_thumb.jpg', 'Helicoverpa armigera', 'Памукова нощенка - ларва', 'Памукова нощенка - ларва', '2018-01-11 20:49:14', '2018-01-11 20:49:14'),
(78, '../../../../../assets/insects/Lema_melanopus.jpg', 'Обикновена житна пиявица', '../../../../../assets/insects/Lema_melanopus_thumb.jpg', 'Lema melanopus L.', 'Обикновена житна пиявица', 'Житна пиявица', '2018-01-11 20:54:43', '2018-01-11 20:54:43'),
(79, '../../../../../assets/insects/Pentodon_monodon.jpg', 'Царевичен торник', '../../../../../assets/insects/Pentodon_monodon_thumb.jpg', 'Pentodon monodon', 'Царевичен торник', 'Царевичен торник', '2018-01-11 21:00:15', '2018-01-11 21:00:15'),
(80, '../../../../../assets/weeds/Echinochloa_crus-galli_2006.08.27_15.00.29-p8270054.jpg', 'Кокоше просо', '../../../../../assets/weeds/Echinochloa_crus-galli_2006.08.27_15.00.29-p8270054_thumb.jpg', 'Echinochloa crus-galli', 'Кокоше просо', 'Кокоше просо', '2018-01-11 21:04:31', '2018-01-11 21:04:31'),
(80, '../../../../../assets/weeds/Setaria_sp.jpg', 'Кощрява', '../../../../../assets/weeds/Setaria_sp_thumb.jpg', 'Setaria sp', 'Кощрява', 'Кощрява', '2018-01-11 21:05:18', '2018-01-11 21:05:18'),
(80, '../../../../../assets/weeds/Amaranthus_retroflexus_bgiu.jpg', 'Щир', '../../../../../assets/weeds/Amaranthus_retroflexus_bgiu_thumb.jpg', 'Amaranthus sp.', 'Щир', 'Щир', '2018-01-11 21:06:07', '2018-01-11 21:06:07'),
(80, '../../../../../assets/weeds/Sorghum_halepensis1.jpg', 'Балур', '../../../../../assets/weeds/Sorghum_halepensis1_thumb.jpg', 'Sorghum halepensis', 'Балур', 'Балур', '2018-01-11 21:10:39', '2018-01-11 21:10:39');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
