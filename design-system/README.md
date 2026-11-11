# Sistema de diseño Childbook

**Versión:** 1.4
**Actualizado:** 10 de noviembre de 2026  
**Alcance:** sitio de marketing Childbook, muestra interactiva, galería de libros y sistema de precios.

## Fuentes tipográficas

Las fuentes se cargan desde Google Fonts mediante el `@import` de `src/style.css`:

- **DM Sans**: fuente principal para titulares, navegación, controles y texto de interfaz. Pesos disponibles en el sitio: 400, 500, 600 y 700.
- **Fraunces**: fuente editorial secundaria para algunos párrafos y detalles narrativos. Pesos disponibles: 500, 600 y 700.
- **Fallbacks**: Arial/sans-serif para DM Sans; Georgia/serif para Fraunces.

El tamaño base de botones, navegación, cuerpo, listas, precios secundarios y footer es **16 px**. Los titulares conservan una escala mayor para mantener jerarquía. Las etiquetas pequeñas se reservan para overlines breves.

## Sistema de color

Childbook usa **Yellow** para acciones primarias y **Paper** para fondos. Paper es la base neutral cálida del sitio y de las tarjetas de libros; no se deben sustituir las superficies por fondos verdes o azules. Los tonos de color vivos se reservan para acciones, iconos y detalles.

### Escala Paper

| Token | Valor | Uso |
|---|---|---|
| Paper 50 | `#FDFBE9` | Superficie crema de tarjetas |
| Paper 100 | `#F5F5F2` | Fondo general y secciones |
| Paper 200 | `#E8E8E5` | Superficies secundarias e imágenes |
| Paper 300 | `#D8D8D1` | Separadores y bordes suaves |
| Paper 400 | `#BDBFB7` | Detalles neutrales |
| Paper 500 | `#989A91` | Texto neutral medio |
| Paper 600 | `#77786F` | Texto secundario |
| Paper 700 | `#565851` | Botón secundario y texto de énfasis |
| Paper 800 | `#3F413C` | Superficie oscura |
| Paper 900 | `#292B27` | Superficie oscura profunda |
| Paper 950 | `#191A19` | Tinta principal |

### Escala Yellow

| Token | Valor | Uso |
|---|---|---|
| Yellow 50 | `#FDFBE9` | Matiz claro del CTA |
| Yellow 100 | `#FBF6C6` | Fondo de degradado |
| Yellow 200 | `#F8EB90` | Fondo de degradado |
| Yellow 300 | `#F4D950` | Acento amarillo |
| Yellow 400 | `#EFC522` | Acento amarillo intenso |
| Yellow 500 | `#DFAD13` | Botón primario |
| Yellow 600 | `#C0860E` | Hover del botón primario |
| Yellow 700 | `#9A600E` | Énfasis |
| Yellow 800 | `#7F4C14` | Énfasis profundo |
| Yellow 900 | `#6C3F17` | Tono profundo |
| Yellow 950 | `#3F2009` | Tono más oscuro |

### Colores de apoyo

| Token | Valor | Uso |
|---|---|---|
| Ink / Story ink | `#191A19` / `#202522` | Texto principal y títulos |
| Coral | `#F46D56` | Acento |
| Sage | `#B6C8A7` | Acento de icono |
| Lilac | `#C7B9E8` | Acento de icono |
| Teal accent | `#258F94` | Iconos de lista y enlaces puntuales; no usar como fondo |
| Ocean ink | `#203B55` | Texto del preview; no usar como fondo |
| Ocean muted | `#596F83` | Texto secundario del preview; no usar como fondo |
| Night sky | `#10213F` | Overlay sobre la fotografía del hero |
| White | `#FFFFFF` | Texto sobre superficies oscuras o imágenes |

**Regla de superficies:** el sitio usa Paper 100 como fondo base, Paper 50 para tarjetas y Paper 200 para superficies secundarias. Amarillo es el color primario de acción, no un sustituto de Paper para fondos de contenido. Evitar fondos azules y verdes. Se retiraron los fondos verdes `#EAF3F1` y `#E2EEEB` de la galería; usa Paper en su lugar. Los valores de las ilustraciones temporales no forman parte de la paleta de superficies.

El hero conserva su fotografía nocturna con overlay. El CTA de cierre usa la escala Yellow; los botones primarios usan Yellow 500 (`#DFAD13`) y texto blanco.

## Atomic design

### Átomos

- **Botón primario**: fondo Yellow 500 (`#DFAD13`), texto blanco, 16 px semibold, altura mínima 48 px, esquinas redondeadas.
- **Botón secundario**: fondo gris carbón (`#565851`), texto blanco, 16 px semibold, sin subrayado ni icono decorativo.
- **Botón oscuro**: fondo Story ink, texto blanco; se usa en superficies claras cuando se requiere una acción principal de alto contraste.
- **Tipografía de control**: 16 px; enlaces de navegación también usan 16 px.
- **Iconografía**: trazos estilo Lucide en SVG inline, `viewBox` 24 × 24, extremos redondos y trazo de 1.8–2 px.
- **Circle check**: círculo y check de Lucide para listas de beneficios. Sustituye los checks de texto anteriores.
- **Superficie de marca**: wordmark Childbook tipográfico, sin símbolo, en un contenedor compacto.

### Moléculas

- **Grupo de acciones**: botón primario y secundario juntos; los dos textos van sin iconos.
- **Selector de tema y niño**: cuatro temas y cuatro perfiles. Cada selección actualiza el estado activo y la imagen de muestra.
- **Ítem de perfil**: avatar fotográfico circular más nombre; el estado seleccionado usa Paper 50 sin borde azul. El foco de teclado usa Yellow.
- **Elemento de lista de beneficios**: Circle check de Lucide a la izquierda, seguido de una frase de 16 px.
- **Resumen de plan**: nombre, descripción, precio, detalle de renovación, características y CTA.

### Organismos

- **Header sticky**: wordmark compacto a la izquierda y navegación en un panel separado. Cada contenedor tiene fondo suave propio; la altura se ajusta al contenido. Los enlaces aparecen en dos columnas.
- **Hero**: fondo fotográfico nocturno de ancho completo, overlay oscuro, etiqueta de plataforma sobre el titular, titular blanco, párrafo legible y dos CTA.
- **Muestra “See for yourself”**: selector de tema, imagen central y selector de perfil. Tema y perfil modifican la foto temporal.
- **“What would you like to create?”**: tres tarjetas con elementos `<img>` reales y botones secundarios de 16 px.
- **“From one idea to a complete book”**: cuatro filas con imágenes cuadradas temporales alineadas a la izquierda. Su CTA está debajo de los pasos.
- **“Made with Childbook”**: seis tarjetas con imágenes temporales, categoría, nombre del libro y acción; sección en Paper 100, tarjetas en Paper 50.
- **Audiencias**: cuatro iconos SVG Lucide (corazón, lápiz, sparkle y casa) en contenedores circulares de tamaño uniforme, con el icono centrado.
- **Precios**: tarjetas con altura pareja. Listas antes de los botones; los tres CTA quedan alineados abajo. El precio Premium es blanco sobre la tarjeta oscura.
- **FAQ**: enlace de contacto como botón secundario, sin icono ni subrayado.
- **Footer**: texto y navegación ampliados; no lleva patrón de puntos.

## Imágenes

Las fotografías actuales son **placeholders temporales**. Se reemplazarán cuando estén disponibles las imágenes finales. Las tarjetas, la muestra y el bloque de historia usan elementos `<img>`; no se deben reemplazar por dibujos CSS. El archivo del hero está en `public/images/childbook-hero-reference.png`.

## Interacción y accesibilidad

- No se permite movimiento al pasar el cursor: sin `translate`, elevación, zoom ni escala.
- El hover puede cambiar color, sin mover el elemento ni añadir un borde azul.
- Las opciones de tema y niño son botones semánticos con `aria-pressed`.
- Los iconos decorativos usan `aria-hidden="true"`; las fotografías tienen texto alternativo.
- En móvil, los selectores se apilan y las galerías conservan imágenes y controles accesibles.
