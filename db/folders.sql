-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 07 2023 г., 16:48
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `lesson20`
--

-- --------------------------------------------------------

--
-- Структура таблицы `folders`
--

CREATE TABLE `folders` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `parentId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `folders`
--

INSERT INTO `folders` (`id`, `name`, `parentId`) VALUES
(1, 'Каталог товаров', NULL),
(2, 'Мойки', 1),
(3, 'Ulgran', 2),
(4, 'Smth', 3),
(5, 'Smth', 3),
(6, 'Virgo Glass', 2),
(7, 'Handmade', 2),
(8, 'Smth', 7),
(9, 'Smth', 7),
(10, 'Фильтры', 1),
(11, 'Ulgran', 10),
(12, 'Smth', 11),
(13, 'Smth', 11),
(14, 'Vigro Mramor', 10);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `folders`
--
ALTER TABLE `folders`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
