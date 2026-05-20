// data.ts  (business constants)

export const COMPANY_NAME = "Michemato";
export const EMAIL = "info@michemato.com";

export const PHONE = {
  e164: "+10000000000",
  display: "+1 (000) 000-0000",
  tel: "tel:+10000000000",
  whatsapp: "https://wa.me/10000000000",
} as const;

// Compat (por si algo viejo lo usa)
export const PHONE_NUMBER = PHONE.e164;
export const PHONE_NUMBER_TEXT = PHONE.display;

export const COMPANY_FACEBOOK = "https://www.facebook.com/";
export const COMPANY_INSTAGRAM = "https://www.instagram.com/";
export const COMPANY_X = "https://x.com/";
export const COMPANY_TIKTOK = "https://www.tiktok.com/";
