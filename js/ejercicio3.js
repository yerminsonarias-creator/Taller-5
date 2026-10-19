
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const servicios = [
  { titulo: "Market Analysis", img: "img/analisis.svg", boton: null },
  { titulo: "Fast Support", img: "img/soporte.svg", boton: null },
  { titulo: "Top Security", img: "img/seguridad.svg", boton: "Learn More" },
  { titulo: "Social Work", img: "img/social.svg", boton: "Details" },
];

function crear(tag, clase, texto) {
  const el = document.createElement(tag);
  if (clase) el.className = clase;
  if (texto) el.textContent = texto;
  return el;
}


const nav = crear("nav");
for (let i = 1; i <= 5; i++) {
  const a = crear("a", null, "Opción " + i);
  a.href = "#";
  nav.appendChild(a);
}

const main = crear("main");
main.append(
  crear("h1", null, "What We Do"),
  crear("p", "intro", lorem + " " + lorem)
);

const seccion = crear("section", "servicios");
servicios.forEach((s) => {
  const art = crear("article", "servicio");
  const img = crear("img");
  img.src = s.img;
  img.alt = s.titulo;
  const texto = crear("div");
  texto.append(crear("h2", null, s.titulo), crear("p", null, lorem));
  if (s.boton) {
    const b = crear("a", "boton", s.boton);
    b.href = "#";
    texto.appendChild(b);
  }
  art.append(img, texto);
  seccion.appendChild(art);
});
main.appendChild(seccion);

document.body.append(nav, main);
