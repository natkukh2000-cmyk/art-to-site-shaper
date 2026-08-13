export type Tone = "primary" | "success" | "warning" | "pink" | "info" | "dark";

export const currentUser = { name: "Наталья Кухарева", short: "Наталья", role: "Директор", initials: "НК" };

export type Client = {
  id: string;
  name: string;
  niche: string;
  initials: string;
  tone: Tone;
  status: string;
  language: string;
  linkedin: string;
  description: string;
  positioning: string;
  start: string;
  amount: string;
  contract: string;
  team: { name: string; role: string; initials: string; tone: Tone }[];
};

export const clients: Client[] = [
  {
    id: "andrey-ilmovsky",
    name: "Андрей Ильмовский",
    niche: "iGaming • iBanking • On-Premises",
    initials: "АИ",
    tone: "dark",
    status: "Активный",
    language: "Английский",
    linkedin: "/in/andrey-ilmovsky",
    description: "DevOps Team Lead. Строит инфраструктуру для iGaming и iBanking проектов, работает с on-premises решениями.",
    positioning: "Практик DevOps, который говорит про инфраструктуру простым языком",
    start: "12.02.2026",
    amount: "700 USD",
    contract: "contract-ilmovsky.pdf",
    team: [
      { name: "Дарья Фокина", role: "Копирайтер", initials: "ДФ", tone: "primary" },
      { name: "Настя Ильина", role: "Менеджер страницы", initials: "НИ", tone: "pink" },
    ],
  },
  {
    id: "alexandr-polishchuk",
    name: "Александр Полищук",
    niche: "Automotive / Motorsport",
    initials: "АП",
    tone: "primary",
    status: "Активный",
    language: "Русский",
    linkedin: "/in/alexandr-polishchuk",
    description: "Инженер и гонщик. Пишет про автоспорт, инженерию и культуру скорости.",
    positioning: "Инженерный взгляд на автоспорт",
    start: "05.01.2026",
    amount: "500 USD",
    contract: "contract-polishchuk.pdf",
    team: [
      { name: "Дарья Фокина", role: "Копирайтер", initials: "ДФ", tone: "primary" },
      { name: "Иван Белов", role: "Менеджер страницы", initials: "ИБ", tone: "info" },
    ],
  },
  {
    id: "kamilla-bishenova",
    name: "Камилла Бишенова",
    niche: "HR / Рекрутинг",
    initials: "КБ",
    tone: "warning",
    status: "Активный",
    language: "Русский",
    linkedin: "/in/kamilla-bishenova",
    description: "HR-директор международной команды, эксперт по найму в IT.",
    positioning: "HR без воды: цифры, процессы, люди",
    start: "18.01.2026",
    amount: "500 USD",
    contract: "contract-bishenova.pdf",
    team: [
      { name: "Ваня Крылов", role: "Копирайтер", initials: "ВК", tone: "info" },
      { name: "Сабина Рахимова", role: "Менеджер страницы", initials: "СР", tone: "success" },
    ],
  },
  {
    id: "alex-poli",
    name: "Алекс Поли",
    niche: "Маркетинг / B2B",
    initials: "АЛ",
    tone: "info",
    status: "Активный",
    language: "Английский",
    linkedin: "/in/alex-poli",
    description: "B2B-маркетолог, растит спрос в SaaS-компаниях.",
    positioning: "Спрос вместо лидов",
    start: "02.02.2026",
    amount: "500 USD",
    contract: "contract-poli.pdf",
    team: [
      { name: "Сабина Рахимова", role: "Копирайтер", initials: "СР", tone: "success" },
      { name: "Настя Ильина", role: "Менеджер страницы", initials: "НИ", tone: "pink" },
    ],
  },
  {
    id: "vadim-senkin",
    name: "Вадим Сенькин",
    niche: "FinTech / Платежи",
    initials: "ВС",
    tone: "pink",
    status: "Активный",
    language: "Английский",
    linkedin: "/in/vadim-senkin",
    description: "Продуктовый лид платёжного сервиса, эксперт по эквайрингу.",
    positioning: "Платежи изнутри",
    start: "20.02.2026",
    amount: "600 USD",
    contract: "contract-senkin.pdf",
    team: [
      { name: "Дарья Фокина", role: "Копирайтер", initials: "ДФ", tone: "primary" },
      { name: "Сабина Рахимова", role: "Менеджер страницы", initials: "СР", tone: "success" },
    ],
  },
  {
    id: "nikita-loginov",
    name: "Никита Логинов",
    niche: "Логистика / Supply Chain",
    initials: "НЛ",
    tone: "success",
    status: "Активный",
    language: "Русский",
    linkedin: "/in/nikita-loginov",
    description: "Операционный директор логистической компании.",
    positioning: "Логистика на цифрах",
    start: "01.03.2026",
    amount: "500 USD",
    contract: "contract-loginov.pdf",
    team: [
      { name: "Ваня Крылов", role: "Копирайтер", initials: "ВК", tone: "info" },
      { name: "Настя Ильина", role: "Менеджер страницы", initials: "НИ", tone: "pink" },
    ],
  },
  {
    id: "alexandr-lykov",
    name: "Александр Лыков",
    niche: "IT / Кибербезопасность",
    initials: "АЛк",
    tone: "primary",
    status: "Активный",
    language: "Английский",
    linkedin: "/in/alexandr-lykov",
    description: "CISO, консультирует компании по защите инфраструктуры.",
    positioning: "Безопасность как продукт",
    start: "14.03.2026",
    amount: "700 USD",
    contract: "contract-lykov.pdf",
    team: [
      { name: "Дарья Фокина", role: "Копирайтер", initials: "ДФ", tone: "primary" },
      { name: "Иван Белов", role: "Менеджер страницы", initials: "ИБ", tone: "info" },
    ],
  },
  {
    id: "maria-vetrova",
    name: "Мария Ветрова",
    niche: "EdTech / Образование",
    initials: "МВ",
    tone: "warning",
    status: "Активный",
    language: "Русский",
    linkedin: "/in/maria-vetrova",
    description: "Основательница онлайн-школы для инженеров.",
    positioning: "Образование, которое даёт работу",
    start: "22.03.2026",
    amount: "500 USD",
    contract: "contract-vetrova.pdf",
    team: [
      { name: "Сабина Рахимова", role: "Копирайтер", initials: "СР", tone: "success" },
      { name: "Иван Белов", role: "Менеджер страницы", initials: "ИБ", tone: "info" },
    ],
  },
];

export const templates = [
  { name: "Бриф на нового клиента", desc: "Вопросы для интервью и сбора тем", updated: "05.08.2026" },
  { name: "Шаблон контент-плана", desc: "Сетка на 14 постов в месяц", updated: "01.08.2026" },
  { name: "Tone of voice", desc: "Правила языка и стиля публикаций", updated: "28.07.2026" },
  { name: "Отчёт по аналитике", desc: "Еженедельная сводка для клиента", updated: "24.07.2026" },
];

export const todayTasks = [
  { title: "Согласовать текст поста", client: "Андрей Ильмовский", from: "Дарья Фокина", due: "Сегодня, 12:00", priority: "Высокий", status: "В работе" },
  { title: "Проверить и опубликовать пост", client: "Александр Полищук", from: "Настя Ильина", due: "Сегодня, 15:00", priority: "Средний", status: "В работе" },
  { title: "Согласовать смету на сентябрь", client: "Камилла Бишенова", from: "Наташа Сергеенко", due: "Сегодня, 18:00", priority: "Средний", status: "Не начат" },
  { title: "Ответить на комментарии", client: "Алекс Поли", from: "Сабина Рахимова", due: "Сегодня, 19:00", priority: "Низкий", status: "Не начат" },
  { title: "Проверить визуал для поста", client: "Вадим Сенькин", from: "Иван Белов", due: "Сегодня, 20:00", priority: "Низкий", status: "В работе" },
];

export const weekTasks = [
  { title: "Утвердить контент-план на сентябрь", client: "Никита Логинов", from: "Дарья Фокина", due: "12.08.2026", priority: "Высокий", status: "Не начат" },
  { title: "Назначить сотрудника на нового клиента", client: "Мария Ветрова", from: "Наташа Сергеенко", due: "13.08.2026", priority: "Высокий", status: "Не начат" },
  { title: "Проверить регламент копирайтера", client: "Внутренний проект", from: "Наталья Кухарева", due: "14.08.2026", priority: "Средний", status: "В работе" },
  { title: "Собрать аналитику за месяц", client: "Александр Лыков", from: "Сабина Рахимова", due: "15.08.2026", priority: "Средний", status: "Не начат" },
];

export const attentionItems = [
  { label: "Просроченные задачи", count: 3, tone: "pink" as Tone, hint: "Дедлайн прошёл" },
  { label: "Публикации на согласовании", count: 4, tone: "warning" as Tone, hint: "Ждут ответа клиента" },
  { label: "К-планы < 2 недель", count: 2, tone: "info" as Tone, hint: "Нужно продлить" },
  { label: "Клиенты без сотрудника", count: 1, tone: "primary" as Tone, hint: "Нет ответственного" },
];

export const activeClientsShort = clients.slice(0, 5).map((c) => ({
  id: c.id,
  name: c.name,
  initials: c.initials,
  tone: c.tone,
  owner: c.team[0]!.name.split(" ")[0]!,
  next: c.start,
}));

export const planPosts = [
  { date: "3 авг, пн", topic: "Как мы переехали на on-premises за 6 недель", owner: "Дарья", ownerRole: "Копирайтер", initials: "ДФ", task: "Опубликовано", prepared: "31.07.2026", published: "03.08.2026", link: "https://linkedin.com/posts/1" },
  { date: "4 авг, вт", topic: "iGaming-нагрузки: что ломается первым", owner: "Настя", ownerRole: "Менеджер страницы", initials: "НИ", task: "Опубликовано", prepared: "01.08.2026", published: "04.08.2026", link: "https://linkedin.com/posts/2" },
  { date: "5 авг, ср", topic: "Мониторинг, который реально спасает", owner: "Дарья", ownerRole: "Копирайтер", initials: "ДФ", task: "Копирайтер", prepared: "—", published: "—", link: null },
  { date: "6 авг, чт", topic: "Стоимость простоя: считаем честно", owner: "Наташа", ownerRole: "Аккаунт-менеджер", initials: "НС", task: "Аккаунт-менеджер", prepared: "04.08.2026", published: "—", link: null },
  { date: "7 авг, пт", topic: "5 ошибок при миграции в облако", owner: "Настя", ownerRole: "SMM", initials: "НИ", task: "SMM", prepared: "05.08.2026", published: "—", link: null },
  { date: "10 авг, пн", topic: "Безопасность в iBanking: базовый минимум", owner: "Дарья", ownerRole: "Копирайтер", initials: "ДФ", task: "Копирайтер", prepared: "—", published: "—", link: null },
  { date: "11 авг, вт", topic: "Как собеседовать DevOps-инженера", owner: "Наташа", ownerRole: "Аккаунт-менеджер", initials: "НС", task: "Аккаунт-менеджер", prepared: "—", published: "—", link: null },
  { date: "12 авг, ср", topic: "Инфраструктура как код: с чего начать", owner: "Настя", ownerRole: "SMM", initials: "НИ", task: "SMM", prepared: "—", published: "—", link: null },
];

export type CalEvent = {
  day: number;
  time: string;
  title: string;
  status: "Запланирован" | "Опубликован" | "Черновик";
  owner?: string;
  ownerRole?: string;
  link?: string;
};

export const calendarEvents: CalEvent[] = [
  { day: 3, time: "10:00", title: "On-premises за 6 недель", status: "Опубликован", link: "https://linkedin.com/posts/1" },
  { day: 4, time: "11:00", title: "iGaming-нагрузки", status: "Опубликован", link: "https://linkedin.com/posts/2" },
  { day: 5, time: "12:00", title: "Мониторинг, который спасает", status: "Запланирован", owner: "Дарья", ownerRole: "Копирайтер" },
  { day: 6, time: "10:00", title: "Стоимость простоя", status: "Запланирован", owner: "Наташа", ownerRole: "Аккаунт-менеджер" },
  { day: 7, time: "11:00", title: "5 ошибок при миграции", status: "Запланирован", owner: "Настя", ownerRole: "SMM" },
  { day: 10, time: "10:00", title: "Безопасность в iBanking", status: "Запланирован", owner: "Дарья", ownerRole: "Копирайтер" },
  { day: 11, time: "12:00", title: "Как собеседовать DevOps", status: "Запланирован", owner: "Наташа", ownerRole: "Аккаунт-менеджер" },
  { day: 12, time: "10:00", title: "Инфраструктура как код", status: "Запланирован", owner: "Настя", ownerRole: "SMM" },
  { day: 14, time: "12:00", title: "CI/CD без боли", status: "Черновик", owner: "Дарья", ownerRole: "Копирайтер" },
  { day: 17, time: "10:00", title: "Кто владеет инцидентом", status: "Запланирован", owner: "Настя", ownerRole: "SMM" },
  { day: 19, time: "11:00", title: "Бэкапы, которые проверяют", status: "Запланирован", owner: "Дарья", ownerRole: "Копирайтер" },
  { day: 21, time: "10:00", title: "Метрики надёжности", status: "Запланирован", owner: "Наташа", ownerRole: "Аккаунт-менеджер" },
  { day: 25, time: "12:00", title: "Что спрашивают на аудите", status: "Запланирован", owner: "Настя", ownerRole: "SMM" },
];

export const employees = [
  { name: "Дарья Фокина", initials: "ДФ", tone: "primary" as Tone, role: "Копирайтер", email: "daria@pageli.co", clients: ["АИ", "АП", "ВС"], extra: 1, access: "Клиенты, контент-планы, аналитика (просмотр)", status: "Активен", replaces: null as null | { name: string; role: string } },
  { name: "Настя Ильина", initials: "НИ", tone: "pink" as Tone, role: "Менеджер страницы", email: "nastya@pageli.co", clients: ["АИ", "АЛ", "НЛ"], extra: 0, access: "Клиенты, контент-планы, аналитика", status: "Активен", replaces: { name: "Сабина Рахимова", role: "Менеджер страницы" } },
  { name: "Сабина Рахимова", initials: "СР", tone: "success" as Tone, role: "Копирайтер", email: "sabina@pageli.co", clients: ["АЛ", "КБ", "МВ"], extra: 0, access: "Клиенты, контент-планы, аналитика", status: "Активен", replaces: null },
  { name: "Иван Белов", initials: "ИБ", tone: "info" as Tone, role: "Менеджер страницы", email: "ivan@pageli.co", clients: ["АП", "АЛк", "МВ"], extra: 0, access: "Клиенты, контент-планы, аналитика", status: "Активен", replaces: null },
  { name: "Ваня Крылов", initials: "ВК", tone: "info" as Tone, role: "Копирайтер", email: "vanya@pageli.co", clients: ["КБ", "НЛ"], extra: 0, access: "Клиенты, контент-планы", status: "Активен", replaces: null },
  { name: "Наташа Сергеенко", initials: "НС", tone: "warning" as Tone, role: "Аккаунт-менеджер", email: "natasha@pageli.co", clients: ["ВС"], extra: 0, access: "Клиенты, контент-планы, аналитика (просмотр)", status: "Активен", replaces: { name: "Наталья Кухарева", role: "Аккаунт-менеджер" } },
  { name: "Наталья Кухарева", initials: "НК", tone: "primary" as Tone, role: "Директор", email: "natalia@pageli.co", clients: [], extra: 0, access: "Полный доступ", status: "Активен", replaces: null },
];

export const roleRegulations: Record<string, { task: string; what: string; norm: string; check: string }[]> = {
  Копирайтер: [
    { task: "Контент-план", what: "Собрать темы, согласовать с клиентом, внести в план", norm: "1 раз в месяц, до 25 числа", check: "План на 14 постов в системе" },
    { task: "Написание постов", what: "Написать текст по брифу и tone of voice", norm: "3–4 поста в неделю", check: "Статус «Подготовлено» в к-плане" },
    { task: "Правки", what: "Внести комментарии клиента в течение суток", norm: "24 часа", check: "Отметка о правках в задаче" },
    { task: "Интервью", what: "Провести созвон с клиентом и собрать фактуру", norm: "1 раз в месяц, 40 минут", check: "Конспект в заметках клиента" },
  ],
  "Менеджер страницы": [
    { task: "Публикация", what: "Опубликовать пост по расписанию, добавить ссылку", norm: "По плану, ±30 минут", check: "Ссылка в к-плане" },
    { task: "Комментарии", what: "Отвечать на комментарии от лица клиента", norm: "Ежедневно до 19:00", check: "Нет неотвеченных за сутки" },
    { task: "Аналитика", what: "Снять недельные метрики страницы", norm: "Каждый понедельник", check: "Таблица недель заполнена" },
  ],
  SMM: [
    { task: "Оформление", what: "Подготовить визуал и обложку поста", norm: "За 2 дня до выхода", check: "Файл прикреплён к посту" },
    { task: "Дистрибуция", what: "Разослать пост в профильные чаты", norm: "В день публикации", check: "Отчёт в задаче" },
  ],
  "Аккаунт-менеджер": [
    { task: "Коммуникация", what: "Держать связь с клиентом, собирать обратную связь", norm: "Не реже 2 раз в неделю", check: "Заметка в карточке клиента" },
    { task: "Оплаты", what: "Выставлять счёт и контролировать оплату", norm: "До 12 числа месяца", check: "Статус оплаты в настройках" },
    { task: "Эскалация", what: "Передавать проблемные ситуации директору", norm: "В течение дня", check: "Задача директору" },
  ],
  Директор: [
    { task: "Контроль", what: "Проверять загрузку команды и статусы клиентов", norm: "Еженедельно", check: "Раздел «Требуют внимания»" },
    { task: "Найм", what: "Закрывать вакансии и вводить сотрудников", norm: "По потребности", check: "Карточка сотрудника создана" },
  ],
};

export const analyticsClients = [
  { id: "alexandr-polishchuk", name: "Александр Полищук", niche: "Automotive / Motorsport" },
  { id: "andrey-ilmovsky", name: "Андрей Ильмовский", niche: "iGaming • iBanking • On-Premises" },
];

export const analyticsWeeks = [
  { week: "7 – 13 июл.", posts: 2, subs: "+98", views: "3 920", reactions: 142, comments: 36, reposts: 18, clicks: 48 },
  { week: "14 – 20 июл.", posts: 2, subs: "+105", views: "4 310", reactions: 154, comments: 45, reposts: 21, clicks: 62 },
  { week: "21 – 27 июл.", posts: 2, subs: "+120", views: "4 880", reactions: 175, comments: 48, reposts: 24, clicks: 70 },
  { week: "28 июл. – 2 авг.", posts: 2, subs: "+118", views: "5 150", reactions: 210, comments: 60, reposts: 22, clicks: 74 },
  { week: "3 – 9 авг.", posts: 2, subs: "+132", views: "5 420", reactions: 186, comments: 52, reposts: 28, clicks: 76, current: true },
  { week: "10 – 16 авг.", posts: null, subs: "—", views: "—", reactions: null, comments: null, reposts: null, clicks: null },
];

export const chartData = [
  { name: "23 июн.", views: 2600, reactions: 1150, comments: 480, reposts: 380 },
  { name: "30 июн.", views: 3100, reactions: 1500, comments: 750, reposts: 500 },
  { name: "7 июл.", views: 4050, reactions: 1900, comments: 1050, reposts: 620 },
  { name: "14 июл.", views: 4350, reactions: 2250, comments: 1500, reposts: 700 },
  { name: "21 июл.", views: 4700, reactions: 2700, comments: 1700, reposts: 620 },
  { name: "28 июл.", views: 5100, reactions: 3150, comments: 2200, reposts: 900 },
  { name: "3 авг.", views: 5250, reactions: 3550, comments: 2450, reposts: 950 },
];
