import { ShieldAlert, TrendingDown, EyeOff, CheckCircle, Search, FileJson, Lock, UserCheck, ShieldCheck, Zap } from 'lucide-react';
import { Feature, Step, Deliverable, FAQItem, Persona } from './types';

export const COMPANY_NAME = "IT Specialist";
export const PRODUCT_NAME = "Secure Launch";

export const HERO_BG_IMAGES = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // Cyber blue tech
  "https://images.unsplash.com/photo-1558494949-efdeb6bf80d1?q=80&w=2669&auto=format&fit=crop", // Circuit board
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop", // Matrix code lock
  "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2670&auto=format&fit=crop", // Abstract data flow
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"  // Digital security
];

export const NAV_ITEMS = [
  { label: 'Проблема', href: '#problem' },
  { label: 'Рішення', href: '#solution' },
  { label: 'Як це працює', href: '#process' },
  { label: 'Для кого', href: '#audience' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO = {
  headline: "Втратити довіру — один SQL-запит. Захистити її — вчасний Пентест.",
  subheadline: "Secure Launch підніме ваш захист на рівень, де зловмисники здаються. Зробіть атаку на ваш стартап економічно невигідною для хакерів.",
  cta: "Захистити свій реліз",
  trustBar: ["OWASP", "NIST", "ISO 27001"]
};

export const PAIN_POINTS: Feature[] = [
  {
    title: "Втрата інвестицій",
    description: "Інвестори проводять Due Diligence. Якщо аудит покаже критичні вразливості, раунд фінансування може бути скасовано.",
    icon: TrendingDown
  },
  {
    title: "Блокування в сторах",
    description: "App Store та Google Play не пропустять ваш додаток, якщо автоматичні алгоритми знайдуть проблеми безпеки.",
    icon: ShieldAlert
  },
  {
    title: "Репутаційний крах",
    description: "Клієнти можуть пробачити баги в інтерфейсі, але не пробачають крадіжку грошей чи персональних даних.",
    icon: EyeOff
  }
];

export const WHY_US: Feature[] = [
  {
    title: "Нуль «сміття» у звіті",
    description: "Ми вручну перевіряємо кожну знайдену вразливість. Ваші розробники не витрачатимуть час на хибні тривоги (No False Positives).",
    icon: CheckCircle
  },
  {
    title: "Безпека вашого продакшну",
    description: "Проводимо тестування на Staging-середовищі або в узгоджені часові вікна. Гарантуємо, що пентест не «покладе» ваші сервіси.",
    icon: ShieldCheck
  },
  {
    title: "Глибина, недоступна сканерам",
    description: "Автоматика бачить шаблонні помилки. Етичні хакери знаходять логічні вразливості в бізнес-процесах.",
    icon: Search
  },
  {
    title: "Ефективність бюджету",
    description: "Ми пріоритезуємо ризики, щоб ви виправили критичні діри в першу чергу, економлячи ресурси розробки.",
    icon: Zap
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Бриф",
    description: "Визначаємо цілі, обсяг робіт та підписуємо NDA."
  },
  {
    number: "02",
    title: "Атака (Red Teaming)",
    description: "Наша команда моделює реальне вторгнення (Grey/Black Box)."
  },
  {
    number: "03",
    title: "Звіт",
    description: "Ви отримуєте детальний список вразливостей і план дій."
  },
  {
    number: "04",
    title: "Ретест",
    description: "Ми перевіряємо ваші виправлення і видаємо фінальний документ про безпеку."
  }
];

export const DELIVERABLES: Deliverable[] = [
  {
    title: "Технічний звіт для Jira",
    description: "Детальні інструкції для розробників: «як відтворити» та «як виправити» (з прикладами коду)."
  },
  {
    title: "Executive Summary",
    description: "Аналіз бізнес-ризиків без складного коду. Це ваш головний аргумент під час аудиту інвесторів."
  },
  {
    title: "Консультації",
    description: "Підтримка для вашої команди розробників, щоб прискорити процес фіксів."
  }
];

export const PERSONAS: Persona[] = [
  {
    role: "CTO / Tech Lead",
    name: "Олександр",
    quote: "Мені треба, щоб ви знайшли помилки, але не заважали моїй команді",
    image: "https://picsum.photos/id/1/400/400",
    pains: ["Боюся звіту на 500 сторінок із 'водою'", "Не хочу виглядати некомпетентним перед CEO"],
    expectations: ["Мінімум false positives", "Чіткі steps to reproduce"]
  },
  {
    role: "CEO / Founder",
    name: "Дмитро",
    quote: "Мені треба гарантія, що нас не зламають у перший день",
    image: "https://picsum.photos/id/2/400/400",
    pains: ["Інвестори питають про кібербезпеку", "Якщо вкрадуть базу, бізнес закриється"],
    expectations: ["Сертифікат для партнерів", "Зрозуміла мова бізнес-ризиків"]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Чим ви відрізняєтесь від автоматичного сканера?",
    answer: "Сканер знаходить типові помилки, але не розуміє бізнес-логіку. Ми імітуємо дії живого хакера, який комбінує вразливості для досягнення мети."
  },
  {
    question: "Чи безпечно це для працюючого продукту?",
    answer: "Так. Ми узгоджуємо час проведення тестів та використовуємо безпечні пейлоади. Для критичних систем рекомендуємо тестування на Staging-середовищі."
  },
  {
    question: "Скільки часу займає пентест?",
    answer: "Залежить від обсягу (кількість API ендпоінтів, ролей). Зазвичай для стартапу це 1-2 тижні."
  },
  {
    question: "Що якщо ви нічого не знайдете?",
    answer: "Такого ще не було. Ідеального коду не існує. Але якщо критичних вразливостей немає — ви отримаєте сертифікат про високий рівень безпеки, що теж є чудовим результатом."
  }
];