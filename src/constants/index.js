import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  mocks1,
  mocks2,
  mocks3,
} from "../assets/images";

import { pageBussines } from "../assets/works";

export const navLinks = [
  { href: "/", label_english: "Home", label_spanish: "inicio" ,name:'inicio' },
  { href: "#services", label_english: "services", label_spanish: "servicios", name:'servicios' },


  { href: "#staff", label_english: "staff", label_spanish: "Sobre Nosotros",name:'integrantes' },

 
  { href: "#footer", label_english: "contact", label_spanish: "contacto",name:'contacto' },
];


export const shoes = [
  {
    thumbnail: mocks1,
    bigShoe: mocks1,
  },
  {
    thumbnail: mocks2,
    bigShoe: mocks2,
  },
  {
    thumbnail: mocks3,
    bigShoe: mocks3,
  },
];

export const statistics = [
  { value: "+10", label: "Desarrollo web" },
  { value: "+5", label: "Branding" },
  { value: "+3", label: "Seo" },
];

import coffeShop from "../assets/works/coffeeShop.png";
import travelWeb from "../assets/works/travelWebReact.png";
import starkeFitt from "../assets/works/starkeFit.png";
import famf from "../assets/works/famf.png";

import menu from "../assets/works/menu-card.png";

export const products = [

  {
    imgURL: travelWeb,
    name: "Web Basica",
    price: "$230.000",

    services: [
      "Hosting 1 mes.",
      "Dominio 1 año.",
      "SSL 1 año.",
      "Personalización baja.",
      "Botón de WhatsApp.",
      "Vinculo de redes sociales.",
      "Personalización baja.",
      "Mantenimiento gratis por 15 días.",
      "Primero pago 70%.",
      "5 secciones.",
      "Tiempo de entrega acordado.",
    ],
  },
  {
    imgURL: starkeFitt,
    name: "Web Premium",
    price: "$300.000",

    services: [
      "Hosting 1 año.",
      "Dominio 1 año.",
      "SSL 1 año.",
      "Personalización alta.",
      "Ajustes de marca.",
      "Carrito, pasarela de pago",
      "Sección de servicios.",
      "Portafolio",
      "Formulario",
      "Botón de WhatsApp.",
      "Vinculo de redes sociales.",
      "Correo empresarial.",
      "Mantenimiento gratis por 30 días.",
      "Primero pago 55%.",
      "5 secciones.",
      "Tiempo de entrega acordado.",
    ],
  },
  {
    imgURL: famf,
    name: "Web Empresarial",
    price: "$375.000",

    services: [
      "Hosting 1 año.",
      "Dominio 1 año.",
      "SSL 1 año.",
      "Personalización especial.",
      "Ajustes de marca.",
      "Carrito, pasarela de pago",
      "Sección de servicios.",
      "Portafolio",
      "Formulario",
      "Botón de WhatsApp.",
      "Vinculo de redes sociales.",
      "Correo empresarial.",
      "Mantenimiento gratis por 60 días.",
      "Reseñas de Google My Business.",
      "Reseñas de Google Analytics.",
      "Primero pago 50%.",
      "+5 secciones.",
      "Tiempo de entrega acordado.",
    ],
  },
   /* {
    name: "Menu´s (Para comercio de comida)   ",
    price: "$100.000",

    imgURL: menu,
    services: [
      "Personalización especial.",
      "Ajustes de marca.",
      "Botón de WhatsApp.",
      "Vinculo de redes sociales.",
      "Ofertas y Promociones",
      "Filtros de Búsqueda",
      "Slider de Imágenes",
      "Widget de Calendario de Eventos",
      "Secciones de Destacados o Populares",
      "Mantenimiento gratis por 60 días.",
      "Primero pago 40%.",
      "+ 5 secciones.",
      "Tiempo de entrega acordado.",
    ],
    message:
      "¡Hola! estoy interesado/a  por el Menu Único. ¿Podrías darme más información? ",
} */
];

export const services = [
  {
    imgURL: null, // Manteniendo la imagen original
    label: "SEO y Desarrollo Web",
    subtext:
      "Optimización de motores de búsqueda y desarrollo de páginas web para mejorar tu visibilidad y presencia en línea.",
    name:'webs'
  },
  {
    imgURL: null, // Manteniendo la imagen original
    label: "Community Manager",
    subtext:
      "Gestión de redes sociales para potenciar la interacción y fortalecer tu presencia digital.",
      name:'comunity_manager'
  },
  {
    imgURL: null, // Manteniendo la imagen original
    label: "Logos y Branding",
    subtext:
      "Diseño de logos y creación de identidad visual que refleja la esencia de tu marca.",
      name:'branding'
  },
  {
    imgURL: null, // Manteniendo la imagen original
    label: "Webs para comerciantes",
    subtext:
      "Diseño de logos y creación de identidad visual que refleja la esencia de tu marca.",
      name:'web_comerciantes'
  },
  {
    imgURL: null, // Manteniendo la imagen original
    label: "Menus para Restaurants",
    subtext:
      "Diseño de logos y creación de identidad visual que refleja la esencia de tu marca.",
      name:'menus'
  },


];

export const reviews = [

  {
    imgURL: customer1,
    customerName: "Rodrigos Piriz",
    rating: 4.5,
    feedback: "Diseñador Grafico",
  },
  {
    imgURL: customer2,
    customerName: "Franco David",
    rating: 4.5,
    feedback: "Programador Web / Analista SEO",
  },
];

export const footerLinks = [
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo Web", link: "webs" },
      { name: "Seo", link: "seo" },
      { name: "Comunity Manager", link: "comunity_manager" },
      { name: "Logos", link: "branding" },
      { name: "Branding", link: "branding" },
    ],
  },
  {
    title: "Ayuda Sobre",
    links: [
      { name: "Desarrollo Web", link: "webs" },
      { name: "Seo", link: "seo" },
      { name: "Comunity Manager", link: "comunity_manager" },
      { name: "Logos", link: "branding" },
      { name: "Branding", link: "branding" },
    ],
  },
  {
    title: "Ponte en contacto",
    links: [
      { name: "visibilidaweb@outlook.es", link: "visibilidaweb@outlook.es" },
      { name: "+54 1164235336", link: "tel:+541164235336" },
    ],
  },
];

export const socialMedia = [{ src: instagram, alt: "instagram logo" }];
