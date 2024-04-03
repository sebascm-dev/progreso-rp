/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderSlot, g as renderComponent, h as renderHead, u as unescapeHTML, F as Fragment, i as defineScriptVars, s as spreadAttributes } from '../astro_Bs8ZTDT-.mjs';
import { g as getSession, a as authConfig } from './__krEfXvfg.mjs';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/config.js';
/* empty css                          */

const $$Astro$u = createAstro();
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, image = "/banner_azul_claro.png" } = Astro2.props;
  return renderTemplate`<title>${title}</title><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><link rel="canonical" href="https://progreso-rp-lemon.vercel.app/"><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#20BFDA"><meta name="keywords" content="GTA V, Roleplay, Progresorp, servidor, amigos, diversión, aventura, personaje, mundo virtual, juego de rol, RP, comunidad, sandbox, mod, multiplayer, PC, videojuego"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@ProgresoRP"><meta name="twitter:creator" content="@ProgresoRP"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta name="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta name="og:title"${addAttribute(title, "content")}><meta name="og:description"${addAttribute(description, "content")}><meta name="og:url"${addAttribute(Astro2.url, "content")}><meta name="og:site_name" content="ProgresoRP - Servidor de Roleplay"><meta name="og:type" content="website"><meta name="og:locale" content="es_ES"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="icon" type="image/ico" href="/favicon.ico"><link rel="icon" type="image/ico" href="/favicon.ico"><meta name="msapplication-config" content="/browserconfig.xml">`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/SEO.astro", void 0);

const $$Astro$t = createAstro();
const $$BackgroundBlur = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$BackgroundBlur;
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(195,226,241,0.3),rgba(255,255,255,0))]"></div>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/BackgroundBlur.astro", void 0);

const $$Astro$s = createAstro();
const $$LinkAncor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$LinkAncor;
  const { go } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(go, "href")} class="cursor-pointer transition hover:scale-110 duration-300"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/navbar/LinkAncor.astro", void 0);

const $$Astro$r = createAstro();
const $$LinkDropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$LinkDropdown;
  const { go, rounded } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(go, "href")}${addAttribute(`text-gray-400 block px-4 py-2 text-sm hover:bg-gray-100 text-gray-400 hover:bg-gray-700 hover:text-white hover:scale-105 hover:rounded-md transition duration-300 cursor-pointer ${rounded}`, "class")} role="menuitem" tabindex="-1" id="menu-item-0"> <div class="flex flex-row items-center gap-2"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"], renderTemplate` Link `)} </div> </a>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/navbar/LinkDropdown.astro", void 0);

const $$Astro$q = createAstro();
const $$GaleriaIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$GaleriaIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-photo"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 8h.01"></path><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/GaleriaIcon.astro", void 0);

const $$Astro$p = createAstro();
const $$CalendarioIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$CalendarioIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-month"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path><path d="M7 14h.013"></path><path d="M10.01 14h.005"></path><path d="M13.01 14h.005"></path><path d="M16.015 14h.005"></path><path d="M13.015 17h.005"></path><path d="M7.01 17h.005"></path><path d="M10.01 17h.005"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/CalendarioIcon.astro", void 0);

const $$Astro$o = createAstro();
const $$MapasIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$MapasIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path><path d="M19 18v.01"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/MapasIcon.astro", void 0);

const $$Astro$n = createAstro();
const $$CarIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$CarIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-car-suv"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3"></path><path d="M10 9v-4"></path><path d="M2 7v4"></path><path d="M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003"></path><path d="M5 12v-3h13"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/CarIcon.astro", void 0);

const $$Astro$m = createAstro();
const $$UploadIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$UploadIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path><path d="M9 15l3 -3l3 3"></path><path d="M12 12l0 9"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/UploadIcon.astro", void 0);

const $$Astro$l = createAstro();
const $$PreguntasIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$PreguntasIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h3.5"></path><path d="M19 22v.01"></path><path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/PreguntasIcon.astro", void 0);

const $$Astro$k = createAstro();
const $$CreditIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$CreditIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-credit-card"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M3 10l18 0"></path><path d="M7 15l.01 0"></path><path d="M11 15l2 0"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/CreditIcon.astro", void 0);

const $$Astro$j = createAstro();
const $$BuildIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$BuildIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-estate"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21h18"></path><path d="M19 21v-4"></path><path d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z"></path><path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14"></path><path d="M9 17v4"></path><path d="M8 13h2"></path><path d="M8 9h2"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/BuildIcon.astro", void 0);

const $$Astro$i = createAstro();
const $$MailIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$MailIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/MailIcon.astro", void 0);

const $$Astro$h = createAstro();
const $$DropdownNavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$DropdownNavBar;
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block text-left"> <div> <button class="transition hover:scale-110 duration-300" type="button" id="menu-button" aria-expanded="true" aria-haspopup="true">
Más
</button> </div> <div class="absolute hidden -left-36 z-10 mt-5 w-[234px] origin-top-right divide-y divide-gray-700 rounded-md bg-gray-800 border-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"> <div class="" role="none"> ${renderComponent($$result, "LinkDropdown", $$LinkDropdown, { "go": "/", "rounded": "rounded-t" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GaleriaIcon", $$GaleriaIcon, { "w": "16", "h": "16" })}
Gáleria
` })} ${renderComponent($$result, "LinkDropdown", $$LinkDropdown, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CalendarioIcon", $$CalendarioIcon, { "w": "16", "h": "16" })}
Calendario
` })} </div> <div class="" role="none"> ${renderComponent($$result, "LinkDropdown", $$LinkDropdown, { "go": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MapasIcon", $$MapasIcon, { "w": "16", "h": "16" })}
Mapeados
` })} ${renderComponent($$result, "LinkDropdown", $$LinkDropdown, { "go": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CarIcon", $$CarIcon, { "w": "16", "h": "16" })}
Vehiculos
` })} </div> <div class="" role="none"> ${renderComponent($$result, "LinkDropdown", $$LinkDropdown, { "go": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UploadIcon", $$UploadIcon, { "w": "16", "h": "16" })}
Actualizaciones
` })} ${renderComponent($$result, "LinkDropdown", $$LinkDropdown, { "go": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PreguntasIcon", $$PreguntasIcon, { "w": "16", "h": "16" })}
Preguntas Frecuentes
` })} ${renderComponent($$result, "LinkDropdown", $$LinkDropdown, { "go": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CreditIcon", $$CreditIcon, { "w": "16", "h": "16" })}
Donaciones
` })} </div> <div class="" role="none"> ${renderComponent($$result, "LinkDropdown", $$LinkDropdown, { "go": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BuildIcon", $$BuildIcon, { "w": "16", "h": "16" })}
Sobre Nosotros
` })} ${renderComponent($$result, "LinkDropdown", $$LinkDropdown, { "go": "/", "rounded": "rounded-b" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$MailIcon, { "w": "16", "h": "16" })}
Contacto
` })} </div> </div> </div> `;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/navbar/DropdownNavBar.astro", void 0);

const $$Astro$g = createAstro();
const $$DiscordIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$DiscordIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg class="transition hover:scale-110 duration-300 hover:stroke-[#7289da]"${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path> <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path> <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path> <path d="M7 16.5c3.5 1 6.5 1 10 0"></path> </svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/DiscordIcon.astro", void 0);

const $$Astro$f = createAstro();
const $$NavBarDesktop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$NavBarDesktop;
  return renderTemplate`${maybeRenderHead()}<nav class="hidden md:flex flex-row justify-center items-center gap-3"> <div class="min-w-64"> <header class="flex flex-row justify-around items-center"> ${renderComponent($$result, "LinkAncor", $$LinkAncor, { "go": "/" }, { "default": ($$result2) => renderTemplate`Inicio` })} ${renderComponent($$result, "LinkAncor", $$LinkAncor, { "go": "/" }, { "default": ($$result2) => renderTemplate`Normas` })} ${renderComponent($$result, "LinkAncor", $$LinkAncor, { "go": "/" }, { "default": ($$result2) => renderTemplate`Documentación` })} </header> <footer> <hr class="mt-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-slate-200 to-white opacity-65 animate-fade-right animate-duration-1000 animate-ease-in-out"> </footer> </div> <div> <img class="w-24 mt-6 drop-shadow-xl" src="/img/logo.webp" alt="Logo del servidor de roleplay"> </div> <div class="min-w-56"> <header class="flex flex-row justify-around items-center"> ${renderComponent($$result, "LinkAncor", $$LinkAncor, { "go": "/" }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "LinkAncor", $$LinkAncor, { "go": "/" }, { "default": ($$result2) => renderTemplate`Eventos` })} ${renderComponent($$result, "DropdownNavBar", $$DropdownNavBar, {})} <a href="https://discord.gg/mfczWk65" target="_blank" rel="noopener nooreferer">${renderComponent($$result, "DiscordIcon", $$DiscordIcon, { "w": "24", "h": "24", "class": "" })}</a> </header> <footer> <hr class="mt-4 h-px border-t-0 bg-transparent bg-gradient-to-l from-transparent via-slate-200 to-white opacity-65 animate-fade-left animate-duration-1000 animate-ease-in-out"> </footer> </div> </nav>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/navbar/NavBarDesktop.astro", void 0);

const $$Astro$e = createAstro();
const $$LinkAncorMobile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LinkAncorMobile;
  const { go, name, rounded } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(go, "href")}${addAttribute(`block py-2 px-3 ${rounded} text-gray-400 hover:bg-gray-100 hover:bg-gray-700 hover:text-white border-b-[0.5px] border-gray-700`, "class")} aria-current="page"> <div${addAttribute(`flex flex-row items-center gap-2 ${rounded}`, "class")}> ${renderSlot($$result, $$slots["default"])} <p class="mt-0.5">${name}</p> </div> </a> </li>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/navbar/LinkAncorMobile.astro", void 0);

const $$Astro$d = createAstro();
const $$HomeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$HomeIcon;
  const { w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/icons/HomeIcon.astro", void 0);

const $$Astro$c = createAstro();
const $$NavBarMobile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$NavBarMobile;
  return renderTemplate`${maybeRenderHead()}<nav class="md:hidden fixed top-0 z-10 w-full border-gray-200"> <div> <div class="flex flex-wrap items-center justify-between mx-auto p-4 bg-blur backdrop-blur backdrop-filter"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/img/logo.webp" class="h-8" alt="Logo del servidor de roleplay"> <span class="self-center font-pricedown uppercase text-2xl font-semibold whitespace-nowrap text-white">ProgresoRP</span> </a> <button data-collapse-toggle="navbar-hamburger" type="button" id="menuButton" class="inline-flex items-center justify-center p-2 w-10 h-10 text-smrounded-lg focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="hidden w-full" id="navbar-hamburger"> <ul class="flex flex-col font-medium rounded-b-lg bg-gray-800 border-gray-700"> ${renderComponent($$result, "LinkAncorMobile", $$LinkAncorMobile, { "go": "/", "name": "Inicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeIcon", $$HomeIcon, { "w": "20", "h": "20" })} ` })} <!-- <LinkAncorMobile go="#" name="Normas">
          <NormasIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Documentación">
          <DocumentacionIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Blog">
          <BlogIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Eventos">
          <EventIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Gáleria">
          <GaleriaIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Calendario">
          <CalendarioIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Mapeados">
          <MapasIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Vehiculos">
          <CarIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Actualizaciones">
          <UploadIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Preguntas Frecuentes">
          <PreguntasIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Donaciones">
          <CreditIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Sobre Nosotros">
          <BuildIcon w="20" h="20" />
        </LinkAncorMobile>
        <LinkAncorMobile go="#" name="Contacto">
          <MailIcon w="20" h="20" />
        </LinkAncorMobile> --> ${renderComponent($$result, "LinkAncorMobile", $$LinkAncorMobile, { "go": "https://discord.gg/mfczWk65", "name": "Servidor Discord", "rounded": "rounded-b-lg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DiscordIcon", $$DiscordIcon, { "w": "20", "h": "20" })} ` })} </ul> </div> </div> </nav> `;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/navbar/NavBarMobile.astro", void 0);

const $$Astro$b = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${renderComponent($$result, "NavBarDesktop", $$NavBarDesktop, {})} ${renderComponent($$result, "NavBarMobile", $$NavBarMobile, {})}`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/navbar/NavBar.astro", void 0);

const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "SEO", $$SEO, { "description": description, "image": image, "title": title })}${renderHead()}</head> <body class="w-full flex flex-col justify-center items-center"> ${renderComponent($$result, "BackgroundBlur", $$BackgroundBlur, {})} ${renderComponent($$result, "NavBar", $$NavBar, {})} <div class="max-w-7xl w-[100%] p-4 mt-20"> ${renderSlot($$result, $$slots["default"])} </div>  </body> </html>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/layouts/Layout.astro", void 0);

const $$Astro$9 = createAstro();
const $$Hr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hr;
  return renderTemplate`${maybeRenderHead()}<hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400">`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/Hr.astro", void 0);

const $$Astro$8 = createAstro();
const $$TextSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TextSection;
  const { text, subtext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2 mb-10"> <h1 id="text" class="text-3xl md:text-4xl text-center uppercase font-pricedown drop-shadow-xl"> ${text} </h1> <p class="text-xs md:text-base text-center text-secondary">${subtext}</p> </div>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/TextSection.astro", void 0);

const $$Astro$7 = createAstro();
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Auth;
  const { authConfig: authConfig$1 = authConfig } = Astro2.props;
  let session = await getSession(Astro2.request, authConfig$1);
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [session]))}` })} </div>`;
}, "C:/Users/spano/dev/projects/progreso-rp/node_modules/.pnpm/auth-astro@4.1.1_@auth+core@0.18.6_astro@4.5.0_next@14.1.4_react-dom@18.2.0_react@18.2.0/node_modules/auth-astro/src/components/Auth.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro();
const $$SignIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SignIn;
  const key = Math.random().toString(36).slice(2, 11);
  const { provider, options, authParams, ...attrs } = Astro2.props;
  attrs.class = `signin-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<button", "> ", " </button>  <script>(function(){", "\n	document\n		.querySelector(`.signin-${key}`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"], ["", "<button", "> ", " </button>  <script>(function(){", "\n	document\n		.querySelector(\\`.signin-\\${key}\\`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ provider, options, authParams, key }));
}, "C:/Users/spano/dev/projects/progreso-rp/node_modules/.pnpm/auth-astro@4.1.1_@auth+core@0.18.6_astro@4.5.0_next@14.1.4_react-dom@18.2.0_react@18.2.0/node_modules/auth-astro/src/components/SignIn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$SignOut = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SignOut;
  const key = Math.random().toString(36).slice(2, 11);
  const { params, ...attrs } = Astro2.props;
  attrs.class = `signout-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a || (_a = __template(["", "<button", "> ", " </button>  <script>(function(){", "\n	document.querySelector(`.signout-${key}`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"], ["", "<button", "> ", " </button>  <script>(function(){", "\n	document.querySelector(\\`.signout-\\${key}\\`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ params, key }));
}, "C:/Users/spano/dev/projects/progreso-rp/node_modules/.pnpm/auth-astro@4.1.1_@auth+core@0.18.6_astro@4.5.0_next@14.1.4_react-dom@18.2.0_react@18.2.0/node_modules/auth-astro/src/components/SignOut.astro", void 0);

const $$Astro$4 = createAstro();
const $$AdminSessionSuccess = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AdminSessionSuccess;
  const session = await getSession(Astro2.request);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-3"> <span class="relative inline-block border border-slate-700 shadow-xl rounded-lg" aria-label="avatar"> <img${addAttribute(session?.user?.image, "src")} class="w-20 h-20 rounded-lg"> <span class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-lg bg-green-500 ring-2 ring-gray-50"></span> <span class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-lg bg-green-500 animate-ping"></span> </span> <div class="flex flex-col justify-between"> <div> <h1 class="text-xl font-pricedown uppercase">${session?.user?.name}</h1> <p class="text-secondary">${session?.user?.email}</p> </div> ${renderComponent($$result, "SignOut", $$SignOut, { "class": "rounded-md uppercase text-red-400 bg-red-800/20 cursor-pointer transition-all duration-300 hover:bg-red-600/40 hover:text-white hover:shadow-xl" }, { "default": ($$result2) => renderTemplate`
logout
` })} </div> </div>`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/authComponents/AdminSessionSuccess.astro", void 0);

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const News = asDrizzleTable("News", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "News", "primaryKey": true } }, "date": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "date", "collection": "News", "primaryKey": false, "optional": false } }, "text": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "text", "collection": "News", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro$3 = createAstro();
const $$AddNewsForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AddNewsForm;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const date = formData.get("date");
    const text = formData.get("text");
    if (typeof date === "string" && typeof text === "string") {
      await db.insert(News).values({ date, text });
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="mt-10"> <h1>Añadir nuevas novedades</h1> <form method="post"> <input type="text" id="fechaActual" value="" hidden readonly name="date"> <input type="text" name="text"> <input type="submit"> </form> </section> `;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/formulariosAdmin/AddNewsForm.astro", void 0);

const $$Astro$2 = createAstro();
const $$AdminAccess = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AdminAccess;
  await getSession(Astro2.request);
  return renderTemplate`${renderComponent($$result, "Hr", $$Hr, {})} ${renderComponent($$result, "TextSection", $$TextSection, { "text": "HAS INICIADO SESI\xD3N COMO ADMINISTRADOR", "subtext": "Apartado para los administradores" })} ${maybeRenderHead()}<hr class="mt-2 mb-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"> ${renderComponent($$result, "AdminSessionSuccess", $$AdminSessionSuccess, {})} ${renderComponent($$result, "AddNewsForm", $$AddNewsForm, {})}`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/authComponents/AdminAccess.astro", void 0);

const $$Astro$1 = createAstro();
const $$UserNotAccess = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UserNotAccess;
  const session = await getSession(Astro2.request);
  return renderTemplate`${renderComponent($$result, "TextSection", $$TextSection, { "text": "ACCESO RESTRINGIDO - 403", "subtext": "Lo siento, parece que no tienes acceso a la visualizaci\xF3n de esta p\xE1gina. Por favor, inicia sesi\xF3n con otra cuenta o regresa a la p\xE1gina principal.", "data-astro-cid-rnxxayhb": true })} ${maybeRenderHead()}<div class="flex flex-row justify-center items-center gap-2" data-astro-cid-rnxxayhb> <button id="btn-message" class="button-message" data-astro-cid-rnxxayhb> <div class="content-avatar" data-astro-cid-rnxxayhb> <div class="status-user" data-astro-cid-rnxxayhb></div> <div class="avatar" data-astro-cid-rnxxayhb> <img class="user-img"${addAttribute(session?.user?.image, "src")} data-astro-cid-rnxxayhb> </div> </div> <div class="notice-content" data-astro-cid-rnxxayhb> <div class="username" data-astro-cid-rnxxayhb>${session?.user?.name}</div> <div class="lable-message" data-astro-cid-rnxxayhb>
Sesión Iniciada<span class="number-message" data-astro-cid-rnxxayhb>!</span> </div> <div class="user-id text-secondary" data-astro-cid-rnxxayhb>${session?.user?.email}</div> </div> </button> ${renderComponent($$result, "SignOut", $$SignOut, { "class": "group flex items-center justify-center w-[38px] h-[38px] bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:bg-red-600/40", "data-astro-cid-rnxxayhb": true }, { "default": ($$result2) => renderTemplate` <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white" data-astro-cid-rnxxayhb> <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" data-astro-cid-rnxxayhb></path> </svg> ` })} </div> `;
}, "C:/Users/spano/dev/projects/progreso-rp/src/components/authComponents/UserNotAccess.astro", void 0);

const $$Astro = createAstro();
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const session = await getSession(Astro2.request);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ProgresoRP - Zona de Administradores", "description": "\xA1Bienvenido a la Zona de Administradores de ProgresoRP!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col justify-center"> ${session ? session.user?.email === "spanolocabo@gmail.com" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AdminAccess", $$AdminAccess, {})} ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "UserNotAccess", $$UserNotAccess, {})} ` })}` : renderTemplate`<div class="flex flex-col justify-center items-center"> ${renderComponent($$result2, "SignIn", $$SignIn, { "provider": "google", "class": "px-4 py-2 max-w-52 flex-row shadow-md justify-center items-center bg-[#B1DAF8]/10 bg-blur backdrop-blur backdrop-filter border flex gap-2 border-slate-700 rounded-lg text-white hover:border-slate-500 hover:text-slate-200 hover:shadow-xl hover:scale-105 transition duration-300" }, { "default": ($$result3) => renderTemplate` <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"> <span>Login with Google</span> ` })} </div>`} </section> ` })}`;
}, "C:/Users/spano/dev/projects/progreso-rp/src/pages/admin.astro", void 0);

const $$file = "C:/Users/spano/dev/projects/progreso-rp/src/pages/admin.astro";
const $$url = "/admin";

const admin = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Admin,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$TextSection as $, News as N, $$Hr as a, $$Layout as b, admin as c, db as d };
