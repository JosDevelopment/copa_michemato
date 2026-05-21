// src/constants/content/HomeConstants.ts

import type {
  HomeContactSectionContentType,
  HomeFaqContentType,
  HomeGalleryContentType,
  HomeHeroContentType,
  HomePricingContentType,
  HomeServicesContentType,
} from "../../types/content/homeTypes";

import { PHONE, EMAIL } from "../data";
import type { Lang } from "../../lib/i18n";
import { getLanguage, subscribeLanguage } from "../../lib/i18n";

type HomeBundle = {
  hero: HomeHeroContentType;
  services: HomeServicesContentType;
  gallery: HomeGalleryContentType;
  pricing: HomePricingContentType;
  contact: HomeContactSectionContentType;
  faq: HomeFaqContentType;
};

const HOME_CONTENT: Record<Lang, HomeBundle> = {
  en: {
    hero: {
      eslogan: '“ Beer Mixer & More ”',
      eslogan2: '“ Mix it. Pour it. Enjoy it. ”',
      title: "Michemato.",
      highlight: "The premium michelada mixer.",
      description:
        "Bold, ready-to-pour michelada mixers crafted to elevate every beer. From the original Miche Black to seafood-inspired blends, Michemato turns any can into a craft experience.",
      image: { src: "/img/hero.jpeg", alt: "Michemato product line on the beach" },
      ctaPrimary: { url: "#contact", title: "Contact us" },
      ctaSecondary: { url: "#products", title: "See products" },
      badges: ["Premium Blend", "Made with real ingredients", "No artificial colors"],
    },

    services: {
      heading: "Our Products",
      cta: { url: "#products", title: "View product line →" },
      items: [
        {
          title: "Miche Black",
          desc:
            "The original dark michelada mixer. Bold, balanced and ready to pour over any cold beer.",
          img: { src: "/img/product_micheblack.jpeg", alt: "Miche Black sauce bottle" },
        },
        {
          title: "Michemato + Black",
          desc:
            "Beer and cocktail mixer with the signature Black profile. Deep flavor, perfect for sunset cocktails.",
          img: { src: "/img/product_michemato%2Bblack.jpeg", alt: "Michemato + Black bottle" },
        },
        {
          title: "Michemato Shrimp",
          desc:
            "Seafood-inspired blend designed for shrimp cocktails and coastal pairings. Bold and savory.",
          img: { src: "/img/product_michematoshrimp.jpeg", alt: "Michemato Shrimp bottle" },
        },
        {
          title: "Michemato Prep",
          desc:
            "Beer and cocktail mixer with a bright tomato + chile profile. Versatile for micheladas and red cocktails.",
          img: { src: "/img/product_michematoprep.jpeg", alt: "Michemato Prep bottle" },
        },
      ],
    },

    gallery: {
      heading: "Our Lineup",
      items: [
        { type: 'image', src: "/img/photos0.png", alt: "Miche Black — Beer Mixer & More" },
        { type: 'image', src: "/img/photos1.jpeg", alt: "Miche Black Premium Blend" },
        { type: 'image', src: "/img/photos2.jpeg", alt: "Michemato Prep — Beer and Cocktail Mixer" },
        { type: 'image', src: "/img/photos3.jpeg", alt: "Michemato + Black — Beer and Cocktail Mixer" },
        { type: 'image', src: "/img/photos4.jpeg", alt: "Michemato Shrimp — Beer and Cocktail Mixer" },
      ],
    },

    pricing: {
      heading: `"SUN, SAND & MICHEMATO"\n¡ENJOY THE MOMENT!`,
      cta: { url: "#contact", title: "Request information" },
      plans: [
        {
          name: "Miche Black",
          price: "Request a quote",
          features: [
            "The original dark michelada mixer.",
            "Bold, balanced flavor.",
            "Ready to pour over any cold beer.",
            "Perfect for bars, restaurants and retail.",
          ],
        },
        {
          name: "Michemato Prep",
          price: "Request a quote",
          highlight: true,
          badge: "Most Popular",
          features: [
            "Beer and cocktail mixer.",
            "Bright tomato + chile profile.",
            "Versatile for micheladas and red cocktails.",
            "Consistent flavor, every pour.",
          ],
        },
        {
          name: "Michemato Shrimp",
          price: "Request a quote",
          features: [
            "Seafood-inspired michelada mixer.",
            "Designed for shrimp cocktails and pairings.",
            "Bold, savory profile.",
            "A signature option for coastal menus.",
          ],
        },
      ],
    },

    contact: {
      heading: "For more information",
      intro:
        "Call, WhatsApp, or email us for orders and product information. If you prefer, call us at",
      phone: PHONE.display,
      image: { src: "/img/en/footer_en.png", alt: "Michemato — Always by your side" },
      contactLinks: [
        { url: PHONE.tel, title: PHONE.display },
        { url: PHONE.whatsapp, title: "WhatsApp" },
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
          q: "How do I use Michemato?",
          a: "Pour the mixer over a chilled beer in a glass rimmed with salt and chile. Add ice and lime to taste.",
        },
        {
          q: "What flavors are available?",
          a: "Miche Black, Michemato Prep, Michemato + Black and Michemato Shrimp — each with its own flavor profile.",
        },
        {
          q: "Is Michemato alcoholic?",
          a: "No. Michemato is a non-alcoholic mixer designed to be combined with beer or cocktails.",
        },
        {
          q: "How can I contact you for more information?",
          a: `Call us at ${PHONE.display}, message us on WhatsApp, or email ${EMAIL}.`,
        },
      ],
    },
  },

  es: {
    hero: {
      eslogan: '“ Beer Mixer & More ”',
      eslogan2: '“ Mézclalo. Sírvelo. Disfrútalo. ”',
      title: "Michemato.",
      highlight: "El mixer premium para tu michelada.",
      description:
        "Mezclas listas para servir, hechas para llevar cualquier cerveza a otro nivel. Desde el clásico Miche Black hasta opciones con mariscos, Michemato convierte cada lata en una experiencia artesanal.",
      image: { src: "/img/hero.jpeg", alt: "Línea de productos Michemato en la playa" },
      ctaPrimary: { url: "#contact", title: "Contáctanos" },
      ctaSecondary: { url: "#products", title: "Ver productos" },
      badges: ["Mezcla Premium", "Ingredientes reales", "Sin colorantes artificiales"],
    },

    services: {
      heading: "Nuestros Productos",
      cta: { url: "#products", title: "Ver línea de productos →" },
      items: [
        {
          title: "Miche Black",
          desc:
            "El mixer oscuro original. Sabor intenso y equilibrado, listo para servir sobre cualquier cerveza fría.",
          img: { src: "/img/product_micheblack.jpeg", alt: "Botella de Miche Black Sauce" },
        },
        {
          title: "Michemato + Black",
          desc:
            "Mixer para cerveza y coctel con el perfil Black de la casa. Sabor profundo, perfecto para cocteles al atardecer.",
          img: { src: "/img/product_michemato%2Bblack.jpeg", alt: "Botella de Michemato + Black" },
        },
        {
          title: "Michemato Shrimp",
          desc:
            "Mezcla con inspiración marinera, diseñada para cocteles de camarón y maridajes costeros. Saladito y sabroso.",
          img: { src: "/img/product_michematoshrimp.jpeg", alt: "Botella de Michemato Shrimp" },
        },
        {
          title: "Michemato Prep",
          desc:
            "Mixer para cerveza y cocteles con perfil de tomate y chile vibrante. Versátil para micheladas y cocteles rojos.",
          img: { src: "/img/product_michematoprep.jpeg", alt: "Botella de Michemato Prep" },
        },
      ],
    },

    gallery: {
      heading: "Nuestra Línea",
      items: [
        { type: 'image', src: "/img/photos0.png", alt: "Miche Black — Beer Mixer & More" },
        { type: 'image', src: "/img/photos1.jpeg", alt: "Miche Black Premium Blend" },
        { type: 'image', src: "/img/photos2.jpeg", alt: "Michemato Prep — Beer and Cocktail Mixer" },
        { type: 'image', src: "/img/photos3.jpeg", alt: "Michemato + Black — Beer and Cocktail Mixer" },
        { type: 'image', src: "/img/photos4.jpeg", alt: "Michemato Shrimp — Beer and Cocktail Mixer" },
      ],
    },

    pricing: {
      heading: `"SOL, ARENA Y MICHEMATO"\n¡DISFRUTA EL MOMENTO!`,
      cta: { url: "#contact", title: "Solicitar información" },
      plans: [
        {
          name: "Miche Black",
          price: "Solicitar cotización",
          features: [
            "El mixer oscuro original para michelada.",
            "Sabor intenso y equilibrado.",
            "Listo para servir sobre cerveza fría.",
            "Ideal para bares, restaurantes y retail.",
          ],
        },
        {
          name: "Michemato Prep",
          price: "Solicitar cotización",
          highlight: true,
          badge: "Más popular",
          features: [
            "Mixer para cerveza y cocteles.",
            "Perfil de tomate y chile vibrante.",
            "Versátil para micheladas y cocteles rojos.",
            "Sabor consistente en cada porción.",
          ],
        },
        {
          name: "Michemato Shrimp",
          price: "Solicitar cotización",
          features: [
            "Mixer con perfil marinero.",
            "Diseñado para cocteles de camarón y maridajes.",
            "Sabor intenso y saladito.",
            "Opción ideal para menús costeros.",
          ],
        },
      ],
    },

    contact: {
      heading: "Para más información",
      intro:
        "Llámanos, mándanos WhatsApp o escríbenos por correo para pedidos e información. Si prefieres, llámanos al",
      phone: PHONE.display,
      image: { src: "/img/es/footer_es.jpeg", alt: "Michemato — Siempre te acompaña" },
      contactLinks: [
        { url: PHONE.tel, title: PHONE.display },
        { url: PHONE.whatsapp, title: "WhatsApp" },
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
          q: "¿Cómo se usa Michemato?",
          a: "Sirve el mixer sobre una cerveza fría en un vaso escarchado con sal y chile. Agrega hielo y limón al gusto.",
        },
        {
          q: "¿Qué sabores manejan?",
          a: "Miche Black, Michemato Prep, Michemato + Black y Michemato Shrimp — cada uno con su propio perfil.",
        },
        {
          q: "¿Michemato contiene alcohol?",
          a: "No. Michemato es un mixer sin alcohol, pensado para combinarse con cerveza o cocteles.",
        },
        {
          q: "¿Cómo los contacto para más información?",
          a: `Llámanos al ${PHONE.display}, mándanos WhatsApp o escribe a ${EMAIL}.`,
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
