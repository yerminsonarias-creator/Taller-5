
const enlaces = [
  { texto: "Ejemplo  # 2", href: "ejercicio2.html" },
  { texto: "Ejercicio  # 3", href: "ejercicio3.html" },
];

function crear(tag, clase, texto) {
  const el = document.createElement(tag);
  if (clase) el.className = clase;
  if (texto) el.textContent = texto;
  return el;
}

const header = crear("header");
header.appendChild(crear("h1", null, "Menú Principal"));

const main = crear("main");
const lista = crear("ul", "lista");
enlaces.forEach(({ texto, href }) => {
  const li = document.createElement("li");
  const a = crear("a");
  a.href = href;
  a.appendChild(crear("strong", null, texto));
  li.appendChild(a);
  lista.appendChild(li);
});
main.appendChild(lista);

document.body.append(header, main);
