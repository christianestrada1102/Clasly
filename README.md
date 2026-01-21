
## 💡 Sobre el Proyecto

**Clasly** es una aplicación diseñada para transformar la experiencia de organización estudiantil. A diferencia de los horarios tradicionales estáticos, este dashboard ofrece una interfaz viva que **entiende el contexto temporal del estudiante**.

El objetivo principal fue crear una herramienta que no solo muestre información, sino que se adapte al momento del día, indicando claramente qué clase está cursando, cuánto tiempo falta para la siguiente y permitiendo gestionar tareas académicas en un solo lugar.

---

## ✨ Características destacadas

- 🎨 **Diseño Portal UI**: Interfaz glassmorphism premium con tipografía cuidada (Lexend + Noto Sans).
- ⏱️ **Estado en Tiempo Real**: Tarjetas inteligentes que indican si estás en clase, receso o tiempo libre.
- 📱 **Responsive Total**: 
  - **Desktop**: Grid semanal completo con resaltado del día actual.
  - **Móvil**: Vista diaria optimizada con navegación por pestañas.
- 🧹 **Auto-Cleanup**: Sistema inteligente que elimina notas y tareas antiguas (>7 días) automáticamente.
- ⚡ **Alto Rendimiento**: Construido con Vite para carga instantánea y persistencia local (LocalStorage).
- 📝 **Gestor de Tareas**: Bloc de notas y lista de pendientes integrados en la misma interfaz.

## 🚀 Tecnologías Utilizadas

Este proyecto fue construido utilizando un stack moderno enfocado en **rendimiento** y **escalabilidad**:

### Frontend
- **React 18**: Librería principal para la construcción de interfaces reactivas.
- **TypeScript**: Garantiza la seguridad de tipos y facilita el mantenimiento del código.
- **Vite**: Entorno de desarrollo de última generación para tiempos de carga ultrarrápidos.
- **TailwindCSS**: Sistema de utilidades para un diseño rápido y consistente.
- **Framer Motion**: Motor de animaciones para transiciones fluidas y micro-interacciones.
- **Lucide React**: Biblioteca de iconos SVG optimizados.
- **LocalStorage**: Implementación de persistencia de datos del lado del cliente sin necesidad de base de datos.

---

## 🧱 Arquitectura del Proyecto

El código está estructurado para ser modular y mantenible:

```
Clasly/
├── src/
│   ├── components/         # Componentes UI (Header, ClassCard, NotesView...)
│   ├── hooks/              # Lógica reutilizable (useCurrentClass, hooks de tiempo...)
│   ├── types/              # Definiciones TypeScript para datos académicos
│   ├── utils/              # Funciones auxiliares y datos estáticos del horario
│   ├── App.tsx             # Layout principal y enrutamiento visual
│   └── index.css           # Estilos globales y configuración de variables
├── public/                 # Assets estáticos
└── README.md               # Documentación
```

---

## 🎨 Paleta de Diseño

Se utilizó una paleta de colores moderna y oscura para reducir la fatiga visual:

```css
--primary: #2563EB;      /* Azul vibrante */
--secondary: #10B981;    /* Verde esmeralda */
--background: #111827;   /* Fondo oscuro profundo */
--glass: rgba(255, 255, 255, 0.03); /* Efecto cristal */
```

---

## 👤 Autor

**Codebynas**  
<> Dev 
🔗 [GitHub](https://github.com/christianestrada1102)

---

Código abierto bajo licencia **MIT** © 2026 · Hecho con React y TypeScript 💙
