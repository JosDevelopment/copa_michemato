// src/constants/content/HomeConstants.ts

import type {
  HomeContactSectionContentType,
  HomeFaqContentType,
  HomeGalleryContentType,
  HomeHeroContentType,
  HomePricingContentType,
  HomeServicesContentType,
} from "../../types/content/homeTypes";

import { EMAIL } from "../data";
import type { Lang } from "../../lib/i18n";
import { getLanguage, subscribeLanguage } from "../../lib/i18n";

import heroImg from "../../assets/img/hero.jpeg";
import aboutImg from "../../assets/img/about.jpeg";
import footerImg from "../../assets/img/footer.jpeg";
import productBlackImg from "../../assets/img/product_black.jpeg";
import productPrepImg from "../../assets/img/product_prep.jpeg";
import productMixImg from "../../assets/img/product_mix.jpeg";

type HomeBundle = {
  hero: HomeHeroContentType;
  services: HomeServicesContentType;
  gallery: HomeGalleryContentType;
  pricing: HomePricingContentType;
  contact: HomeContactSectionContentType;
  faq: HomeFaqContentType;
};

// Una sola imagen de footer para ambos idiomas
const FOOTER_IMAGE_SRC = footerImg;

const HOME_CONTENT: Record<Lang, HomeBundle> = {
  en: {
    hero: {
      eslogan: '“ Beer & Cocktail Mixer ”',
      eslogan2: '“ Mix it. Pour it. Enjoy it. ”',
      title: "Franky's Michelados.",
      highlight: "The Ultimate Mixers for Beer & Cocktails.",
      description:
        "Discover a World of New Intense Flavors. Three signature blends — Black, Prep and Mix — crafted to turn any cold beer into a bold, savory michelada.",
      image: { src: heroImg, alt: "Franky's Michelados — Beer & Cocktail Mixer" },
      ctaPrimary: { url: "#contact", title: "Contact us" },
      ctaSecondary: { url: "#products", title: "See products" },
      badges: ["Special Condiments Blend", "Made in Mexico", "Beer & Cocktail Mixer"],
    },

    services: {
      heading: "Our Products",
      cta: { url: "#products", title: "View product line →" },
      items: [
        {
          title: "Franky's Michelados Black",
          desc:
            "A specially crafted blend of savory sauces, spices, and seasonings made to create an incredibly bold and flavorful michelada. Just mix with your favorite beer, serve over ice, and enjoy the authentic taste of Franky's Michelados Black.",
          img: { src: productBlackImg, alt: "Franky's Michelados Black bottle" },
        },
        {
          title: "Franky's Michelados Prep",
          tagline: "Ready to Serve. Ready Anywhere.",
          desc:
            "A perfectly balanced blend of savory flavors and spices, crafted to bring the michelada bar experience wherever you are. At home, at a party, or on the go—just pour, mix with your favorite beer, and enjoy. Your favorite michelada bar is now wherever you are.",
          img: { src: productPrepImg, alt: "Franky's Michelados Prep bottle" },
        },
        {
          title: "Franky's Michelados Mix – Prep + Black",
          tagline: "Two Flavors. Your Perfect Mix.",
          desc:
            "The perfect combination of Franky's Michelados Prep and Black, blended your way. Adjust the balance to your taste and create your perfect michelada—bold, savory, and uniquely yours. You choose the mix. You create the flavor.",
          img: { src: productMixImg, alt: "Franky's Michelados Mix — Prep + Black bottle" },
        },
      ],
    },

    gallery: {
      heading: "Gallery",
      items: [
        { type: 'image', src: heroImg, alt: "Franky's Michelados — Beer & Cocktail Mixer" },
        { type: 'image', src: aboutImg, alt: "Spring breakers love Franky's Michelados" },
        { type: 'image', src: footerImg, alt: "Franky's Michelados served on the beach" },
      ],
    },

    pricing: {
      heading: `"SUN, SAND & MICHELADOS"\nENJOY THE MOMENT!`,
      cta: { url: "#contact", title: "Request information" },
      plans: [
        {
          name: "Michelados Black",
          price: "Request a quote",
          features: [
            "A special blend of savory sauces, spices and seasonings.",
            "Incredibly bold and flavorful michelada.",
            "Just mix with your favorite beer and serve over ice.",
            "Perfect for bars, restaurants and retail.",
          ],
        },
        {
          name: "Michelados Prep",
          price: "Request a quote",
          highlight: true,
          badge: "Most Popular",
          features: [
            "Ready to serve. Ready anywhere.",
            "Perfectly balanced savory flavors and spices.",
            "The michelada bar experience wherever you are.",
            "At home, at a party, or on the go.",
          ],
        },
        {
          name: "Michelados Mix – Prep + Black",
          price: "Request a quote",
          features: [
            "Two flavors. Your perfect mix.",
            "Prep and Black, blended your way.",
            "Adjust the balance to your taste.",
            "You choose the mix. You create the flavor.",
          ],
        },
      ],
    },

    contact: {
      heading: "For more information",
      intro: "Email us for orders and product information.",
      phone: "",
      image: { src: FOOTER_IMAGE_SRC, alt: "Franky's Michelados — enjoy the moment" },
      contactLinks: [
        { url: `mailto:${EMAIL}`, title: EMAIL },
      ],
      hours: ["Hours: Not listed"],
      labels: {
        sectionKicker: "Contact",
        locationTitle: "Locations",
        contactTitle: "Contact",
        hoursTitle: "Hours",
        mapsCtaLabel: "Open in Maps",
        mapIframeTitle: "Map",
        branchNameFallback: "Branch",
      },
    },

    faq: {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          q: "How do I use Franky's Michelados?",
          a: "Shake well. Pour the mixer into a glass rimmed with salt and chile, add your favorite cold beer and ice, stir and enjoy.",
        },
        {
          q: "What products are available?",
          a: "Three: Franky's Michelados Black, Franky's Michelados Prep, and Franky's Michelados Mix – Prep + Black.",
        },
        {
          q: "What is the difference between Black and Prep?",
          a: "Black is the dark, intense blend of savory sauces, spices and seasonings. Prep is the ready-to-serve balanced blend that brings the michelada bar wherever you are. Mix combines both, balanced to your taste.",
        },
        {
          q: "Does it contain alcohol?",
          a: "No. Franky's Michelados is a non-alcoholic mixer designed to be combined with beer or cocktails.",
        },
        {
          q: "Where is it made?",
          a: "Made in Mexico.",
        },
        {
          q: "How can I contact you for more information?",
          a: `Email us at ${EMAIL}.`,
        },
      ],
    },
  },

  es: {
    hero: {
      eslogan: '“ Mezclador para cerveza y cocteles ”',
      eslogan2: '“ Mézclalo. Sírvelo. Disfrútalo. ”',
      title: "Franky's Michelados.",
      highlight: "Los mejores mezcladores para cerveza y cocteles.",
      description:
        "Descubre un mundo de nuevos sabores intensos. Tres mezclas de la casa — Black, Prep y Mix — creadas para convertir cualquier cerveza fría en una michelada intensa y llena de sabor.",
      image: { src: heroImg, alt: "Franky's Michelados — mezclador para cerveza y cocteles" },
      ctaPrimary: { url: "#contact", title: "Contáctanos" },
      ctaSecondary: { url: "#products", title: "Ver productos" },
      badges: ["Mezcla especial de condimentos", "Hecho en México", "Mezclador para cerveza y cocteles"],
    },

    services: {
      heading: "Nuestros Productos",
      cta: { url: "#products", title: "Ver línea de productos →" },
      items: [
        {
          title: "Franky's Michelados Black",
          desc:
            "Una mezcla especialmente elaborada de salsas, especias y sazonadores, creada para lograr una michelada increíblemente intensa y llena de sabor. Solo mézclala con tu cerveza favorita, sírvela con hielo y disfruta el auténtico sabor de Franky's Michelados Black.",
          img: { src: productBlackImg, alt: "Botella de Franky's Michelados Black" },
        },
        {
          title: "Franky's Michelados Prep",
          tagline: "Listo para servir. Listo en cualquier lugar.",
          desc:
            "Una mezcla perfectamente equilibrada de sabores y especias, creada para llevar la experiencia de la barra de micheladas a donde tú estés. En casa, en una fiesta o de viaje: solo sirve, mezcla con tu cerveza favorita y disfruta. Tu barra de micheladas favorita ahora está donde tú estés.",
          img: { src: productPrepImg, alt: "Botella de Franky's Michelados Prep" },
        },
        {
          title: "Franky's Michelados Mix – Prep + Black",
          tagline: "Dos sabores. Tu mezcla perfecta.",
          desc:
            "La combinación perfecta de Franky's Michelados Prep y Black, mezclada a tu manera. Ajusta el balance a tu gusto y crea tu michelada perfecta: intensa, sabrosa y única. Tú eliges la mezcla. Tú creas el sabor.",
          img: { src: productMixImg, alt: "Botella de Franky's Michelados Mix — Prep + Black" },
        },
      ],
    },

    gallery: {
      heading: "Galería",
      items: [
        { type: 'image', src: heroImg, alt: "Franky's Michelados — mezclador para cerveza y cocteles" },
        { type: 'image', src: aboutImg, alt: "Spring breakers disfrutando Franky's Michelados" },
        { type: 'image', src: footerImg, alt: "Franky's Michelados servido en la playa" },
      ],
    },

    pricing: {
      heading: `"SOL, ARENA Y MICHELADAS"\n¡DISFRUTA EL MOMENTO!`,
      cta: { url: "#contact", title: "Solicitar información" },
      plans: [
        {
          name: "Michelados Black",
          price: "Solicitar cotización",
          features: [
            "Mezcla especial de salsas, especias y sazonadores.",
            "Una michelada increíblemente intensa y sabrosa.",
            "Solo mézclalo con tu cerveza favorita y sirve con hielo.",
            "Ideal para bares, restaurantes y retail.",
          ],
        },
        {
          name: "Michelados Prep",
          price: "Solicitar cotización",
          highlight: true,
          badge: "Más popular",
          features: [
            "Listo para servir. Listo en cualquier lugar.",
            "Sabores y especias perfectamente equilibrados.",
            "La experiencia de la barra de micheladas donde estés.",
            "En casa, en una fiesta o de viaje.",
          ],
        },
        {
          name: "Michelados Mix – Prep + Black",
          price: "Solicitar cotización",
          features: [
            "Dos sabores. Tu mezcla perfecta.",
            "Prep y Black, mezclados a tu manera.",
            "Ajusta el balance a tu gusto.",
            "Tú eliges la mezcla. Tú creas el sabor.",
          ],
        },
      ],
    },

    contact: {
      heading: "Para más información",
      intro: "Escríbenos por correo para pedidos e información.",
      phone: "",
      image: { src: FOOTER_IMAGE_SRC, alt: "Franky's Michelados — disfruta el momento" },
      contactLinks: [
        { url: `mailto:${EMAIL}`, title: EMAIL },
      ],
      hours: ["Horario: No listado"],
      labels: {
        sectionKicker: "Contacto",
        locationTitle: "Ubicaciones",
        contactTitle: "Contacto",
        hoursTitle: "Horario",
        mapsCtaLabel: "Abrir en Maps",
        mapIframeTitle: "Mapa",
        branchNameFallback: "Sucursal",
      },
    },

    faq: {
      heading: "Preguntas frecuentes",
      faqs: [
        {
          q: "¿Cómo se usa Franky's Michelados?",
          a: "Agita bien. Sirve el mezclador en un vaso escarchado con sal y chile, agrega tu cerveza fría favorita y hielo, revuelve y disfruta.",
        },
        {
          q: "¿Qué productos manejan?",
          a: "Tres: Franky's Michelados Black, Franky's Michelados Prep y Franky's Michelados Mix – Prep + Black.",
        },
        {
          q: "¿Cuál es la diferencia entre Black y Prep?",
          a: "Black es la mezcla oscura e intensa de salsas, especias y sazonadores. Prep es la mezcla equilibrada lista para servir que lleva la barra de micheladas a donde estés. Mix combina ambas, balanceadas a tu gusto.",
        },
        {
          q: "¿Contiene alcohol?",
          a: "No. Franky's Michelados es un mezclador sin alcohol, pensado para combinarse con cerveza o cocteles.",
        },
        {
          q: "¿Dónde se produce?",
          a: "Hecho en México.",
        },
        {
          q: "¿Cómo los contacto para más información?",
          a: `Escríbenos a ${EMAIL}.`,
        },
      ],
    },
  },
};

function applyHomeLang(lang: Lang) {
  const bundle = HOME_CONTENT[lang];
  FALLBACK_HOME_HERO_CONTENT = bundle.hero;
  FALLBACK_HOME_SERVICES_CONTENT = bundle.services;
  FALLBACK_HOME_GALLERY_CONTENT = bundle.gallery;
  FALLBACK_HOME_PRICING_CONTENT = bundle.pricing;
  FALLBACK_HOME_CONTACT_CONTENT = bundle.contact;
  FALLBACK_HOME_FAQ_CONTENT = bundle.faq;
}

// ===== Exports "compatibles" con tu código actual =====
export let FALLBACK_HOME_HERO_CONTENT: HomeHeroContentType = HOME_CONTENT[getLanguage()].hero;
export let FALLBACK_HOME_SERVICES_CONTENT: HomeServicesContentType = HOME_CONTENT[getLanguage()].services;
export let FALLBACK_HOME_GALLERY_CONTENT: HomeGalleryContentType = HOME_CONTENT[getLanguage()].gallery;
export let FALLBACK_HOME_PRICING_CONTENT: HomePricingContentType = HOME_CONTENT[getLanguage()].pricing;
export let FALLBACK_HOME_CONTACT_CONTENT: HomeContactSectionContentType = HOME_CONTENT[getLanguage()].contact;
export let FALLBACK_HOME_FAQ_CONTENT: HomeFaqContentType = HOME_CONTENT[getLanguage()].faq;

subscribeLanguage(() => applyHomeLang(getLanguage()));
