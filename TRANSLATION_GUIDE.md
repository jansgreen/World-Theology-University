# 🌐 Guía de Sistema de Traducción - World Theology University

## ✅ Estado de Traducción por Página

### Páginas con Traducción Completa (ES/EN)

1. **✅ index.html**
   - Hero section
   - Navegación
   - Programas
   - Beneficios (Features)
   - Blog/Noticias
   - Testimonios
   - Footer

2. **✅ admission.html**
   - Hero section
   - Pasos del proceso de admisión
   - Notas importantes
   - Sección de asistencia

3. **✅ courses-certificates.html**
   - Hero section
   - Catálogo de cursos
   - Badges de prerrequisito
   - Botones "Enroll Now" / "Inscríbete Ahora"

4. **✅ actividades.html**
   - Hero section
   - Títulos de secciones
   - Nombres de eventos
   - Próximas actividades

5. **✅ admission-form.html**
   - Hero section
   - Botón de descarga
   - Encabezados del formulario
   - Labels de campos

## 🎯 Cursos Agregados del Catálogo PDF

Todos los cursos nuevos incluyen:
- ✅ Asterisco rojo (*) en el título
- ✅ Badge rojo "Prerequisito para Certificado de Teología"
- ✅ Traducciones en español e inglés
- ✅ Formato consistente

### Cursos Nuevos:

1. **Ciencias de la Religión** (6 horas) *
   - Exploración de las ciencias de la religión
   - Prerequisito para Certificado de Teología

2. **Consejería Familiar y Formación en Pureza Sexual** (6 horas) *
   - Herramientas prácticas de consejería bíblica
   - Prerequisito para Certificado de Teología

3. **Simplificando la Antropología Bíblica** (6 horas) *
   - Visión bíblica de la naturaleza humana
   - Prerequisito para Certificado de Teología

4. **Certificación en Consejería Familiar – Edición Día de la Mujer** (6 horas) *
   - Enfoque en la realidad femenina contemporánea
   - Prerequisito para Certificado de Teología

5. **Formación Cristiana** (6 horas) *
   - Fundamentos de la vida cristiana
   - Prerequisito para Certificado de Teología

## 🔧 Cómo Funciona el Sistema de Traducción

### Estructura del Código

El archivo `static/js/script.js` contiene:

1. **Detección automática de página**: Identifica qué página está cargada
2. **Objeto de traducciones**: Contiene todos los textos en ES/EN
3. **Función `setLanguage()`**: Aplica las traducciones
4. **Función `toggleLanguage()`**: Cambia entre idiomas
5. **Inicialización automática**: Carga el idioma por defecto

### Idiomas por Defecto

- **index.html**: Español (ES)
- **Todas las demás páginas**: Inglés (EN)

### Botón de Cambio de Idioma

Todas las páginas tienen el botón `langSwitch` que permite cambiar entre:
- 🇪🇸 **Español** ↔️ 🇬🇧 **English**

## 📋 Elementos Traducidos

### Navegación Global
- Inicio / Home
- Programas / Programs
- Beneficios / Benefits
- Noticias / News
- Testimonios / Testimonials
- Contacto / Contact
- Courses & Certificates
- Admisión / Admission
- Actividades / Activities

### Badges Dinámicos
- "Prerequisito para Certificado de Teología" / "Prerequisite for Theology Certificate"
- "Asincrónico" / "Asynchronous"
- "Inglés/Español" / "English/Spanish"

### Botones
- "Inscríbete Ahora" / "Enroll Now"
- "Descargar Formulario PDF" / "Download PDF Form"
- "Leer más" / "Read more"

## 🚀 Cómo Agregar Nuevas Traducciones

### 1. Identificar la página
```javascript
if (window.location.pathname.includes('nombre-pagina')) {
    page = 'nombre-pagina';
}
```

### 2. Agregar traducciones
```javascript
translations = {
    es: {
        lang: 'Español',
        switch: 'English',
        nav: [...],
        // Agregar textos en español
        miTexto: 'Texto en español'
    },
    en: {
        lang: 'English',
        switch: 'Español',
        nav: [...],
        // Agregar textos en inglés
        miTexto: 'Text in English'
    }
};
```

### 3. Aplicar traducciones en setLanguage()
```javascript
else if (page === 'nombre-pagina') {
    document.querySelector('.mi-clase').innerText = t.miTexto;
}
```

## 🎨 Estilo de Asteriscos para Prerrequisitos

Los cursos con prerrequisito tienen:
```html
<h5 class="card-title fw-bold">
    Nombre del Curso <span style="color: red;">*</span>
</h5>
<span class="badge bg-danger mb-2">
    Prerequisito para Certificado de Teología
</span>
```

## 📱 Responsive Design

Todas las traducciones mantienen:
- ✅ Diseño responsive en móvil, tablet y desktop
- ✅ Iconos FontAwesome consistentes
- ✅ Estilo Bootstrap 5
- ✅ Colores de marca WTU

## 🔍 Testing

Para probar las traducciones:

1. Abrir cualquier página HTML en el navegador
2. Hacer clic en el botón "English" o "Español"
3. Verificar que todos los textos cambien correctamente
4. Comprobar que los badges y botones se traduzcan

## 📞 Soporte

Para agregar o modificar traducciones, contactar al equipo de desarrollo de WTU.

---

**Última actualización**: Noviembre 22, 2025
**Versión**: 2.0
**Desarrollado para**: World Theology University
