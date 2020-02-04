-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-02-2020 a las 14:15:08
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id12461082_formpersona`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_asp`
--

CREATE TABLE `users_asp` (
  `id_aspi` int(11) NOT NULL,
  `identificacion` int(12) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sexo` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `correo` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `cargo` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `competencias` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users_asp`
--

INSERT INTO `users_asp` (`id_aspi`, `identificacion`, `name`, `sexo`, `fecha`, `correo`, `cargo`, `competencias`) VALUES
(1, 1234567890, 'andres prueba ', 'Ccff', '2012-12-12', 'Vvvggggg', 'Ffff', 'zxxzfzfdsfsdfsdfsdfsdfsfsdfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users_asp`
--
ALTER TABLE `users_asp`
  ADD PRIMARY KEY (`id_aspi`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users_asp`
--
ALTER TABLE `users_asp`
  MODIFY `id_aspi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
