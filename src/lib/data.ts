export type Tone = "primary" | "success" | "warning" | "pink" | "info" | "dark";

export const currentUser = { name: "Наталья Кухарева", short: "Наталья", role: "Директор", initials: "НК" };

export const clients = [
  {
    id: "edward-makaron",
    name: "Edward Makaron",
    niche: "EHR / HealthTech",
    initials: "EM",
    tone: "dark" as Tone,
    status: "Активный",
    lastPayment: "12.05.2026",
    amount: "500 USD",
    team: [
      { name: "Дарья", role: "Копирайтер", initials: "DA", tone: "primary" as Tone },
      { name: "Настя", role: "SMM", initials: "NA", tone: "info" as Tone },
    ],
  },
  {
    id: "ehr-synergy",
    name: "EHR Synergy",
    niche: "EHR / HealthTech",
    initials: "ES",
    tone: "primary" as Tone,
    status: "Активный",
    lastPayment: "05.05.2026",
    amount: "500 USD",
    team: [
      { name: "Дарья", role: "Копирайтер", initials: "DA", tone: "primary" as Tone },
      { name: "Настя", role: "SMM", initials: "NA", tone: "info" as Tone },
    ],
  },
  {
    id: "healthtech-leaders",
    name: "HealthTech Leaders",
    niche: "HealthTech / Media",
    initials: "HL",
    tone: "warning" as Tone,
    status: "Активный",
    lastPayment: "01.05.2026",
    amount: "500 USD",
    team: [
      { name: "Ваня", role: "Копирайтер", initials: "VA", tone: "info" as Tone },
      { name: "Сабина", role: "SMM", initials: "SA", tone: "success" as Tone },
    ],
  },
  {
    id: "saastr",
    name: "SaaStr",
    niche: "SaaS / Community",
    initials: "SS",
    tone: "info" as Tone,
    status: "Активный",
    lastPayment: "28.04.2026",
    amount: "500 USD",
    team: [
      { name: "Сабина", role: "Копирайтер", initials: "SA", tone: "success" as Tone },
      { name: "Настя", role: "SMM", initials: "NA", tone: "info" as Tone },
    ],
  },
  {
    id: "fintech-insights",
    name: "FinTech Insights",
    niche: "FinTech / Media",
    initials: "FI",
    tone: "pink" as Tone,
    status: "Активный",
    lastPayment: "20.04.2026",
    amount: "500 USD",
    team: [
      { name: "Дарья", role: "Копирайтер", initials: "DA", tone: "primary" as Tone },
      { name: "Сабина", role: "SMM", initials: "SA", tone: "success" as Tone },
    ],
  },
  {
    id: "datamed-ai",
    name: "DataMed AI",
    niche: "AI / HealthTech",
    initials: "DM",
    tone: "success" as Tone,
    status: "Активный",
    lastPayment: "15.04.2026",
    amount: "500 USD",
    team: [
      { name: "Ваня", role: "Копирайтер", initials: "VA", tone: "info" as Tone },
      { name: "Настя", role: "SMM", initials: "NA", tone: "info" as Tone },
    ],
  },
];

export const todayTasks = [
  { title: "Согласовать текст поста", client: "Edward Makaron", due: "Сегодня, 12:00", priority: "Высокий" },
  { title: "Проверить и опубликовать пост", client: "EHR Synergy", due: "Сегодня, 15:00", priority: "Средний" },
  { title: "Подготовить пост на след. неделю", client: "HealthTech Leaders", due: "Сегодня, 18:00", priority: "Средний" },
  { title: "Ответить на комментарии", client: "SaaStr", due: "Сегодня, 19:00", priority: "Низкий" },
  { title: "Проверить визуал для поста", client: "EHR Synergy", due: "Сегодня, 20:00", priority: "Низкий" },
];

export const activeClientsShort = [
  { initials: "EM", tone: "dark" as Tone, name: "Edward Makaron", owner: "Дарья", next: "20.05.2026", id: "edward-makaron" },
  { initials: "ES", tone: "primary" as Tone, name: "EHR Synergy", owner: "Настя", next: "21.05.2026", id: "ehr-synergy" },
  { initials: "HL", tone: "warning" as Tone, name: "HealthTech Leaders", owner: "Ваня", next: "22.05.2026", id: "healthtech-leaders" },
  { initials: "SS", tone: "info" as Tone, name: "SaaStr", owner: "Сабина", next: "23.05.2026", id: "saastr" },
];

export const latestPosts = [
  { title: "AI in EHR: Hype vs Reality", client: "Edward Makaron", date: "18.05.2026" },
  { title: "Interoperability: мифы и реальность", client: "EHR Synergy", date: "16.05.2026" },
  { title: "Как выбрать нишу на LinkedIn", client: "HealthTech Leaders", date: "15.05.2026" },
  { title: "SaaS маркетинг для роста", client: "SaaStr", date: "14.05.2026" },
];

export const planPosts = [
  { date: "12 мая, пн", topic: "AI в EHR: хайп или реальность?", owner: "Дарья", ownerRole: "Копирайтер", initials: "DA", status: "Опубликован", prepared: "09.05.2026", published: "12.05.2026" },
  { date: "13 мая, вт", topic: "Интеграция: мифы и реальность", owner: "Настя", ownerRole: "SMM", initials: "NA", status: "Опубликован", prepared: "10.05.2026", published: "13.05.2026" },
  { date: "14 мая, ср", topic: "Что должны уметь современные EHR-системы", owner: "Дарья", ownerRole: "Копирайтер", initials: "DA", status: "В работе", prepared: "12.05.2026", published: "—" },
  { date: "15 мая, чт", topic: "Как данные помогают улучшать лечение", owner: "Настя", ownerRole: "SMM", initials: "NA", status: "В работе", prepared: "—", published: "—" },
  { date: "16 мая, пт", topic: "5 ошибок при внедрении EHR", owner: "Дарья", ownerRole: "Копирайтер", initials: "DA", status: "Черновик", prepared: "13.05.2026", published: "—" },
  { date: "19 мая, пн", topic: "Будущее EHR: тренды 2026", owner: "Настя", ownerRole: "SMM", initials: "NA", status: "Черновик", prepared: "13.05.2026", published: "—" },
  { date: "20 мая, вт", topic: "Безопасность данных в EHR", owner: "Дарья", ownerRole: "Копирайтер", initials: "DA", status: "Не начат", prepared: "—", published: "—" },
  { date: "21 мая, ср", topic: "Опыт врача: что важно в системе", owner: "Настя", ownerRole: "SMM", initials: "NA", status: "Не начат", prepared: "—", published: "—" },
];

export type CalEvent = { day: number; time: string; title: string; status: "Запланирован" | "Опубликован" | "Черновик" };

export const calendarEvents: CalEvent[] = [
  { day: 1, time: "10:00", title: "AI in EHR: Hype vs Reality", status: "Опубликован" },
  { day: 2, time: "11:00", title: "Интеграция: мифы и реальность", status: "Запланирован" },
  { day: 5, time: "12:00", title: "Как выбрать EHR-систему", status: "Запланирован" },
  { day: 7, time: "10:00", title: "Документация без стресса", status: "Запланирован" },
  { day: 9, time: "11:00", title: "Роль данных в медицине", status: "Запланирован" },
  { day: 12, time: "10:00", title: "CDS: помощь, которая работает", status: "Опубликован" },
  { day: 15, time: "12:00", title: "UX, который экономит время", status: "Запланирован" },
  { day: 19, time: "10:00", title: "Будущее EHR: тренды 2026", status: "Опубликован" },
  { day: 21, time: "12:00", title: "Интероперабельность: что важно", status: "Запланирован" },
  { day: 23, time: "11:00", title: "Автоматизация рутины врача", status: "Запланирован" },
  { day: 26, time: "10:00", title: "EHR и опыт пациента", status: "Запланирован" },
  { day: 28, time: "12:00", title: "Безопасность данных в EHR", status: "Запланирован" },
  { day: 30, time: "11:00", title: "ИИ-помощники в клиниках", status: "Запланирован" },
];

export const employees = [
  { name: "Дарья Фокина", initials: "DF", tone: "primary" as Tone, role: "Копирайтер", clients: ["EM", "KB", "AI"], extra: 2, access: "Клиенты, контент-планы, аналитика (просмотр)", status: "Активен", replaces: null as null | { name: string; role: string } },
  { name: "Настя Ильина", initials: "NA", tone: "pink" as Tone, role: "SMM", clients: ["EM", "DF", "VS"], extra: 1, access: "Клиенты, контент-планы, аналитика", status: "Активен", replaces: { name: "Сабина Р.", role: "SMM" } },
  { name: "Сабина Рахимова", initials: "SR", tone: "success" as Tone, role: "SMM", clients: ["KB", "AI", "KL"], extra: 0, access: "Клиенты, контент-планы, аналитика", status: "Активен", replaces: null },
  { name: "Иван Белов", initials: "IB", tone: "info" as Tone, role: "SMM", clients: ["AI", "VM", "NP"], extra: 0, access: "Клиенты, контент-планы, аналитика", status: "Активен", replaces: null },
  { name: "Наташа Сергеенко", initials: "NS", tone: "warning" as Tone, role: "Аккаунт-менеджер", clients: ["VS"], extra: 0, access: "Клиенты, контент-планы, аналитика (просмотр)", status: "Активен", replaces: null },
  { name: "Наталья Кухарева", initials: "НК", tone: "primary" as Tone, role: "Директор", clients: [], extra: 0, access: "Полный доступ", status: "Активен", replaces: null },
];

export const analyticsWeeks = [
  { week: "24 – 30 мар.", posts: 2, subs: "+98", views: "3 920", reactions: 142, comments: 36, reposts: 18, clicks: 48 },
  { week: "31 мар. – 6 апр.", posts: 2, subs: "+105", views: "4 310", reactions: 154, comments: 45, reposts: 21, clicks: 62 },
  { week: "7 – 13 апр.", posts: 2, subs: "+120", views: "4 880", reactions: 175, comments: 48, reposts: 24, clicks: 70 },
  { week: "14 – 20 апр.", posts: 2, subs: "+118", views: "5 150", reactions: 210, comments: 60, reposts: 22, clicks: 74 },
  { week: "21 – 27 апр.", posts: 2, subs: "+132", views: "5 420", reactions: 186, comments: 52, reposts: 28, clicks: 76, current: true },
  { week: "28 апр. – 4 мая", posts: null, subs: "—", views: "—", reactions: null, comments: null, reposts: null, clicks: null },
];

export const chartData = [
  { name: "24 мар.", views: 2600, reactions: 1150, comments: 480, reposts: 380 },
  { name: "31 мар.", views: 3100, reactions: 1500, comments: 750, reposts: 500 },
  { name: "7 апр.", views: 4050, reactions: 1900, comments: 1050, reposts: 620 },
  { name: "14 апр.", views: 4350, reactions: 2250, comments: 1500, reposts: 700 },
  { name: "21 апр.", views: 4700, reactions: 2700, comments: 1700, reposts: 620 },
  { name: "28 апр.", views: 5100, reactions: 3150, comments: 2200, reposts: 900 },
  { name: "4 мая", views: 5250, reactions: 3550, comments: 2450, reposts: 950 },
];
