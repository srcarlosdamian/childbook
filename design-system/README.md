# Sistema de diseño Childbook

**Versión:** 1.3  
**Actualizado:** 10 de noviembre de 2026  
**Alcance:** sitio de marketing Childbook, muestra interactiva, galería de libros y sistema de precios.

## Fuentes tipográficas

Las fuentes se cargan desde Google Fonts mediante el `@import` de `src/style.css`:

- **DM Sans**: fuente principal para titulares, navegación, controles y texto de interfaz. Pesos disponibles en el sitio: 400, 500, 600 y 700.
- **Fraunces**: fuente editorial secundaria para algunos párrafos y detalles narrativos. Pesos disponibles: 500, 600 y 700.
- **Fallbacks**: Arial/sans-serif para DM Sans; Georgia/serif para Fraunces.

El tamaño base de botones, navegación, cuerpo, listas, precios secundarios y footer es **16 px**. Los titulares conservan una escala mayor para mantener jerarquía. Las etiquetas pequeñas se reservan para overlines breves.

## Tokens de color

| Token | Valor | Uso |
|---|---|---|
| Coral Childbook | `#F46D56` | Acentos y estados de énfasis |
| Yellow 500 | `#996600` | Acción primaria con texto blanco |
| Story ink | `#202522` | Texto y superficies oscuras |
| Paper | `#F5F5F2` | Fondo general |
| Soft surface | `#E8E8E5` | Contenedores suaves del header y la interfaz |
| Night sky | `#10213F` | Overlay y texto/fondo del hero nocturno |
| White | `#FFFFFF` | Texto sobre imágenes oscuras |

El fondo fotográfico del hero lleva una capa oscura para mantener contraste. El titular y la etiqueta del hero son blancos. Todos los CTA tienen texto blanco; Yellow 500 (`#996600`) mantiene contraste legible sobre el botón primario.

## Atomic design

### Átomos

- **Botón primario**: fondo Yellow 500 (`#996600`), texto blanco, 16 px semibold, altura mínima 48 px, esquinas redondeadas.
- **Botón secundario**: fondo gris carbón (`#565851`), texto blanco, 16 px semibold, sin subrayado ni icono decorativo.
- **Botón oscuro**: fondo Story ink, texto blanco; se usa en superficies claras cuando se requiere una acción principal de alto contraste.
- **Tipografía de control**: 16 px; enlaces de navegación también usan 16 px.
- **Iconografía**: trazos estilo Lucide en SVG inline, `viewBox` 24 × 24, extremos redondos y trazo de 1.8–2 px.
- **Circle check**: círculo y check de Lucide para listas de beneficios. Sustituye los checks de texto anteriores.
- **Superficie de marca**: wordmark Childbook tipográfico, sin símbolo, en un contenedor compacto.

### Moléculas

- **Grupo de acciones**: botón primario y secundario juntos; los dos textos van sin iconos.
- **Selector de tema y niño**: cuatro temas y cuatro perfiles. Cada selección actualiza el estado activo y la imagen de muestra.
- **Ítem de perfil**: avatar fotográfico circular más nombre; el estado seleccionado usa una superficie suave y un borde visible.
- **Elemento de lista de beneficios**: Circle check de Lucide a la izquierda, seguido de una frase de 16 px.
- **Resumen de plan**: nombre, descripción, precio, detalle de renovación, características y CTA.

### Organismos

- **Header sticky**: wordmark compacto a la izquierda y navegación en un panel separado. Cada contenedor tiene fondo suave propio; la altura se ajusta al contenido. Los enlaces aparecen en dos columnas.
- **Hero**: fondo fotográfico nocturno de ancho completo, overlay oscuro, etiqueta de plataforma sobre el titular, titular blanco, párrafo legible y dos CTA.
- **Muestra “See for yourself”**: selector de tema, imagen central y selector de perfil. Tema y perfil modifican la foto temporal.
- **“What would you like to create?”**: tres tarjetas con elementos `<img>` reales y botones secundarios de 16 px.
- **“From one idea to a complete book”**: cuatro pasos con iconos Lucide alineados a la izquierda. Su CTA secundario está debajo de los pasos.
- **“Made with Childbook”**: seis tarjetas con imágenes temporales, categoría, nombre del libro y acción.
- **Precios**: tarjetas con altura pareja. Listas antes de los botones; los tres CTA quedan alineados abajo. El precio Premium es blanco sobre la tarjeta oscura.
- **Footer**: texto y navegación ampliados; no lleva patrón de puntos.

## Imágenes

Las fotografías actuales son **placeholders temporales**. Se reemplazarán cuando estén disponibles las imágenes finales. Las tarjetas, la muestra y el bloque de historia usan elementos `<img>`; no se deben reemplazar por dibujos CSS. El archivo del hero está en `public/images/childbook-hero-reference.png`.

## Interacción y accesibilidad

- No se permite movimiento al pasar el cursor: sin `translate`, elevación, zoom ni escala.
- El hover puede cambiar color o borde, sin mover el elemento.
- Las opciones de tema y niño son botones semánticos con `aria-pressed`.
- Los iconos decorativos usan `aria-hidden="true"`; las fotografías tienen texto alternativo.
- En móvil, los selectores se apilan y las galerías conservan imágenes y controles accesibles.
