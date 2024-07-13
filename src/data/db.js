export const productos = [
  {
    id: 1,
    name: "Lukather",
    imagen: "guitarra_01",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 299,
  },
  {
    id: 2,
    name: "SRV",
    imagen: "guitarra_02",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 349,
  },
  {
    id: 3,
    name: "Borland",
    imagen: "guitarra_03",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 329,
  },
  {
    id: 4,
    name: "VAI",
    imagen: "guitarra_04",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 299,
  },
  {
    id: 5,
    name: "Thompson",
    imagen: "guitarra_05",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 399,
  },
  {
    id: 6,
    name: "White",
    imagen: "guitarra_06",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 329,
  },
  {
    id: 7,
    name: "Cobain",
    imagen: "guitarra_07",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 349,
  },
  {
    id: 8,
    name: "Dale",
    imagen: "guitarra_08",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 379,
  },
  {
    id: 9,
    name: "Krieger",
    imagen: "guitarra_09",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 289,
  },
  {
    id: 10,
    name: "Campbell",
    imagen: "guitarra_10",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 349,
  },
  {
    id: 11,
    name: "Reed",
    imagen: "guitarra_11",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 399,
  },
  {
    id: 12,
    name: "Hazel",
    imagen: "guitarra_12",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 379,
  },
];
const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export default obtenerProductos;