// All facts come from veon/client.json (ids in comments). Nothing here is invented.
export const phone = { display: "+38 066 837 29 85", href: "tel:+380668372985" }; // company.contacts.phones[0], W-F005
export const phone2 = { display: "+38 067 105 53 14", href: "tel:+380671055314" }; // phones[1], purpose unknown (W-I005): no label
export const telegram = "https://t.me/clinicsion_bot"; // contacts.messengers[0]
export const address = "м. Київ, вул. Миколи Голего, 5"; // contacts.addresses[0]
export const mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Київ, вулиця Миколи Голего, 5");
export const socials = [
  { name: "Instagram", url: "https://www.instagram.com/sionclinic/" },
  { name: "Facebook", url: "https://www.facebook.com/clinicsion/" },
  { name: "YouTube", url: "https://www.youtube.com/@SionClinic" },
]; // socials[] status confirmed
export const license = { no: "№3491/21/М", date: "12.08.2021" }; // W-F003
export const futureNote = "Розділ у розробці";

export const nav = [
  { label: "Допомога зараз", href: "#urgent" },
  { label: "Напрями", href: "#directions" },
  { label: "Стаціонар", href: "#stay" },
  { label: "Лікарі", href: "#doctors" },
  { label: "Ціни", href: "#prices" },
  { label: "Про клініку", href: "#about" },
  { label: "Контакти", href: "#contacts" },
];

// products_services / business_lines
export const directions = [
  { name: "Тривога, депресія, безсоння", states: "Неврози, тривожно-депресивні розлади, панічні атаки, безсоння, ПТСР", more: "психіатрія дорослих" },
  { name: "Психози, БАР, шизофренія", states: "Також розлади особистості", more: "психіатрія" },
  { name: "Алкогольна залежність", states: "Виведення із запою вдома та в стаціонарі, детоксикація, кодування", more: "алкогольна залежність" },
  { name: "Наркотична залежність", states: "Опіоїдна, метадонова, амфетамінова залежність, УБОД, зняття ломки", more: "наркотична залежність" },
  { name: "Ігроманія", states: "Ігроманія та комп'ютерна залежність", more: "ігроманія" },
  { name: "Діти й підлітки", states: "Дитяча психіатрія та дитячий психолог: РХП, ОКР, самоушкоджувальна поведінка, депресії підлітків", more: "дитяча психіатрія" },
  { name: "Для родини", states: "Сімейні консультації, робота зі співзалежністю", more: "для родини" },
];
export const directionsMinor = [
  { name: "Реабілітація", more: "реабілітація" },
  { name: "Неврологія", more: "неврологія" },
  { name: "Онлайн-програми", more: "онлайн-програми" },
];

export const urgent = [
  { title: "Виклик психіатра додому", what: "Лікар виїжджає до пацієнта за вашою адресою.", price: "від 6 500 грн" }, // W-F008
  { title: "Виведення із запою", what: "Вдома або в стаціонарі клініки.", price: "стаціонар від 7 000 грн за добу" }, // W-F008
  { title: "Швидка психіатрична й наркологічна допомога", what: "Дзвінок на гарячу лінію цілодобово.", price: "вартість — після консультації" },
];

export const steps = [
  { t: "Звернення", d: "Дзвінок на гарячу лінію або повідомлення в Telegram." },
  { t: "Консультація лікаря", d: "Розмова і огляд, на які ви записуєтеся заздалегідь." },
  { t: "Діагностика", d: "Обстеження, потрібні для вибору лікування." },
  { t: "Стаціонар або амбулаторно", d: "Лікування в клініці або без госпіталізації." },
  { t: "Робота з психологом", d: "Психологічна допомога — частина повного циклу." },
];

export const doctors = [
  { name: "Олена Володимирівна Новохатська", role: "Лікар-психіатр вищої категорії", extra: "Досвід понад 25 років", img: "novohatska", w: 800 },
  { name: "Борис Борисович Івнев", role: "Лікар-психотерапевт, доктор медичних наук, професор", extra: "Досвід понад 20 років", img: "ivnev", w: 400 },
  { name: "Вікторія Вікторівна Кравцова", role: "Практичний психолог", extra: "", img: "kravtsova", w: 800 },
]; // U-F001

export const prices = [
  { s: "Консультація психіатра або нарколога", v: "4 000 грн" },
  { s: "Консультація психолога", v: "3 500 грн" },
  { s: "Консультація провідних лікарів", v: "4 000–4 500 грн" },
  { s: "Виклик психіатра додому", v: "6 500 грн" },
  { s: "Стаціонар, алкогольна залежність і психіатрія, до 10 діб", v: "7 500 грн за добу" },
  { s: "Стаціонар, від 10 діб", v: "7 000 грн за добу" },
  { s: "Реабілітація, 30 днів", v: "5 700 грн за добу" },
  { s: "Кодування", v: "6 500–15 000 грн" },
]; // W-F008
