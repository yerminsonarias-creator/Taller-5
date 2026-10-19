
const items = [
  { texto: "Real Estate", img: "https://commons.wikimedia.org/wiki/Special:FilePath/1981_BMW_320_2.0_Front.jpg?width=600", respaldo: "img/bmw-serie3.svg" },
  { texto: "Library", img: "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_E30_front2_20080127.jpg?width=600", respaldo: "img/bmw-serie5.svg" },
  { texto: "Transportation", img: "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_E36_rear_20070816.jpg?width=600", respaldo: "img/bmw-x5.svg" },
  { texto: "Gas & Oil", img: "https://commons.wikimedia.org/wiki/Special:FilePath/2001-2005_BMW_318i_(E46)_sedan_02.jpg?width=600", respaldo: "img/bmw-m4.svg" },
  { texto: "Marketing Agency", img: "https://commons.wikimedia.org/wiki/Special:FilePath/2005-2008_BMW_325i_(E90)_sedan_03.jpg?width=600", respaldo: "img/bmw-i4.svg" },
  { texto: "Pizza", img: "https://commons.wikimedia.org/wiki/Special:FilePath/2013_BMW_328i_(F30)_M_Sport_sedan_(2018-11-02)_01.jpg?width=600", respaldo: "img/bmw-z4.svg" },
  { texto: "Flooring", img: "https://commons.wikimedia.org/wiki/Special:FilePath/2013_BMW_328i_(F30)_M_Sport_sedan_(2018-11-02)_02.jpg?width=600", respaldo: "img/bmw-x3.svg" },
  { texto: "Steel Processing", img: "https://commons.wikimedia.org/wiki/Special:FilePath/2019_BMW_318d_SE_Automatic_2.0_Front.jpg?width=600", respaldo: "img/bmw-m3.svg" },
];

function crear(tag, clase, texto) {
  const el = document.createElement(tag);
  if (clase) el.className = clase;
  if (texto) el.textContent = texto;
  return el;
}

const titulo = crear("h1", null, "Beautiful, Hand-crafted Layouts");
const galeria = crear("section", "galeria");

items.forEach(({ texto, img, respaldo }) => {
  const fig = crear("figure", "item");
  const imagen = crear("img");
  imagen.onerror = () => { imagen.onerror = null; imagen.src = respaldo; };
  imagen.src = img;
  imagen.alt = texto;
  fig.append(imagen, crear("figcaption", null, texto));
  galeria.appendChild(fig);
});

const pronto = crear("figure", "item pronto");
const caja = crear("div", "caja");
const icono = crear("img");
icono.src = "img/bmw-pronto.svg";
icono.alt = "Coming Soon";
caja.appendChild(icono);
pronto.append(caja, crear("figcaption", null, "Coming Soon"));
galeria.appendChild(pronto);

document.body.append(titulo, galeria);
