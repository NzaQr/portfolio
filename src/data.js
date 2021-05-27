import picsome from "./assets/picsome.png";
import countries from "./assets/where.png";
import myteam from "./assets/myteam.png";
import linkshortener from "./assets/linkshortener.png";

const data = [
  {
    title: "Pic Some",
    tech: "React.js + Firebase",
    img: picsome,
    demo: "https://pic-some.vercel.app/",
    repo: "https://github.com/NzaQr/pic-some",
    description:
      "Creado con React.js y Firebase, este proyecto te permite comprar imágenes agregándolas a un carrito. Para proceder al pago el usuario debe crearse una cuenta.",
    description1:
      "Utilicé Hooks, Context y la libreria React-router para un routing declarativo entre las páginas del proyecto.",
    description2:
      "Implementé Context tanto para las funcionalidades de agregar y remover las imágenes del carrito (imágenes tomadas de una API), como así también las funciones para la autenticación de usuario: Iniciar o cerrar sesión y cambiar email o contraseña.",
  },

  {
    title: "Where in the world?",
    tech: "React.js + Countries API",
    img: countries,
    demo: "https://countries-app-nzaqr.vercel.app",
    repo: "https://github.com/NzaQr/countries-app",
    description:
      "Este proyecto te permite buscar cualquier país, ver su información y filtrar por región. Además podés cambiar a un tema oscuro.",
    description1:
      "Conecté el proyecto a una API que contiene la información de los países. A partir de esto mostré los datos y desarrollé las funcionalidades de filtrado de países por región y live search para una búsqueda más dinámica.",
    description2:
      "Utilicé Flexbox y propiedades personalizadas en CSS. El flujo de trabajo fue mobile-first.",
  },
  {
    title: "Link shortener",
    tech: "React.js + Shrtcode API",
    img: linkshortener,
    demo: "https://link-shortener-nu.vercel.app/",
    repo: "https://github.com/NzaQr/link-shortener",
    description: "Acortador de Links creado con shrtcode API.",
    description1:
      "Acortá cualquier link que necesites y guardalo para volver a usarlo más tarde.",
    description2: "",
  },
  {
    title: "Myteam",
    tech: "React.js",
    img: myteam,
    demo: "https://my-team-seven.vercel.app/",
    repo: "https://github.com/NzaQr/my-team",
    description: "Proyecto multipágina responsive creado con React.js.",
    description1: "",
    description2: "",
  },
];

export default data;
