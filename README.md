# EdgarMoraCV

## Laboratorio 7. Desarrollo de Portafolio Web Responsivo  
**Autor:** Edgar Mora

###  Descripción
Este es un proyecto que presenta mi currículum vitae en formato digital, accesible desde cualquier dispositivo mediante un diseño responsivo y adaptable.

---

### 🔗 Enlaces relevantes

-  [Repositorio GitHub](https://github.com/MoraEdg/EdgarMoraCV.git)
-  [Sitio desplegado (GitHub Pages)](https://moraedg.github.io/EdgarMoraCV/)
-  [Diseño base en Figma](https://www.figma.com/design/7zK11qpHPi2sC1ZGmOXm9f/Laboratiorio-1?node-id=22-2&t=u4s74PGsNLMGqSJs-1)

---

##  Accesibilidad e Inclusión

Este portafolio ha sido optimizado aplicando principios de **accesibilidad web** y **diseño inclusivo** basados en las pautas **WCAG** y buenas prácticas de desarrollo:

###  Laboratorio 7
- Uso de etiquetas semánticas HTML5 (`header`, `main`, `section`, `footer`) para mejorar la estructura y comprensión del contenido.
- Contraste adecuado entre texto y fondo en modo claro.
- Imágenes con descripciones en atributos `alt`.
- Jerarquía clara en títulos (`h1`, `h2`, `h3`) para mejorar legibilidad y navegación por lectores de pantalla.
- Navegación con teclado habilitada (`tab`, `focus-visible`) para usuarios sin mouse.
- Tipografía escalable mediante unidades `rem`.

---

###  Laboratorio 8 – Mejoras en Accesibilidad

En esta segunda fase se aplicaron mejoras adicionales para garantizar **accesibilidad inclusiva**:

- Activación de **modo oscuro y claro** con botón flotante accesible y etiquetas adecuadas (`aria-label`, `title`).
- Contrastes optimizados tanto para el modo claro como el oscuro, usando variables CSS (`--bg-color`, `--card-text`, etc.).
- Correcciones en tarjetas de proyectos para que adapten correctamente color de fondo y texto en ambos modos.
- Inclusión de animaciones suaves (`fade-in`) para facilitar comprensión progresiva del contenido sin afectar accesibilidad.
- Mejora de diseño responsivo para que las tarjetas se adapten vertical u horizontalmente según el dispositivo.
- Contenido textual con estructura clara, párrafos justificados y legibles.
- Evitación de enlaces con textos ambiguos (como "clic aquí").

---

###  Laboratorio 10 – Eye-tracking con Webgazer

Se ha incluido una funcionalidad experimental de eye-tracking que realiza las siguientes acciones:

1.  **Seguimiento Ocular**: Utiliza la cámara web del usuario para estimar la posición de su mirada en la pantalla en tiempo real.
2.  **Recolección de Datos**: Registra las coordenadas de la mirada mientras el usuario navega por la página.
3.  **Generación de Mapa de Calor**: Al detener el seguimiento, procesa los datos recolectados y genera una superposición visual (mapa de calor) que muestra las "zonas calientes" o áreas de mayor interés visual.
4.  **Controles Interactivos**: El usuario puede iniciar y detener el seguimiento, así como ocultar el mapa de calor generado para reiniciar la experiencia.



## 📱 Tecnología utilizada

- **React**
- **CSS3 con variables personalizadas (`:root`)**
- **Vite + GitHub Pages para despliegue**
- **WebGazer.js**: Librería para el seguimiento ocular a través de la cámara web, sin necesidad de hardware especializado.
- **Heatmap.js**: Librería para crear mapas de calor interactivos a partir de datos de puntos.

---


## ¿Cómo ejecutarlo?

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/MoraEdg/EdgarMoraCV.git](https://github.com/MoraEdg/EdgarMoraCV.git)
    ```

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd EdgarMoraCV
    ```

3.  **Instalar las dependencias:**
    ```bash
    npm install
    ```

4.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  Abre tu navegador y visita `http://localhost:5173` (o la URL que indique Vite en tu terminal).

**Nota importante**: Para que el seguimiento ocular funcione, deberás **permitir el acceso a la cámara web** cuando el navegador te lo solicite.
