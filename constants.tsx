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
  { label: 'Відгуки', href: '#reviews' },
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

export const TESTIMONIALS = [
  {
    name: "Олексій",
    role: "CTO, FinTech Startup",
    content: "Звіт був настільки детальним, що ми виправили критичну вразливість за 2 години до релізу. Це врятувало наші гроші.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Марина",
    role: "Product Owner, E-commerce",
    content: "Ми боялися, що пентест затримає запуск, але команда спрацювала паралельно з нами. Жодних затримок, тільки безпека.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Андрій",
    role: "Lead Developer",
    content: "Нарешті звіт без 'води'. Чіткі steps to reproduce і навіть приклади коду для фікса. Респект технічній команді.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Вікторія",
    role: "Founder, SaaS Platform",
    content: "Інвестори вимагали аудит безпеки. Сертифікат від IT Specialist закрив це питання на першій же зустрічі.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Денис",
    role: "DevOps Engineer",
    content: "Сподобалось, що тестували на стейджингу і не поклали прод. Дуже професійний підхід до інфраструктури.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Олена",
    role: "CEO, HealthTech",
    content: "Для медичного стартапу безпека даних — це все. Хлопці знайшли діру в API, яку пропустили два автоматичних сканери.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Ігор",
    role: "Security Officer",
    content: "Якість звіту відповідає стандартам OWASP. Це саме те, що нам було потрібно для комплаєнсу.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Тетяна",
    role: "Project Manager",
    content: "Чітка комунікація, дотримання дедлайнів і зрозумілі пояснення для бізнесу. Рекомендую.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Що таке пентест простими словами?",
    answer: "Це «контрольований злом». Ми намагаємось зламати ваш сайт чи додаток так, як це зробили б справжні хакери. Тільки замість того, щоб вкрасти гроші, ми пишемо звіт про те, де у вас «відкриті двері», і допомагаємо їх закрити."
  },
  {
    question: "Хто такі IT Specialist?",
    answer: "Ми — команда сертифікованих етичних хакерів (White Hat Hackers). Ми спеціалізуємося виключно на кібербезпеці. Ми не пишемо сайти, ми перевіряємо їх на міцність перед тим, як вони потраплять до реальних користувачів."
  },
  {
    question: "Навіщо це мені, якщо у мене є свої програмісти?",
    answer: "Програмісти будують, а ми — ламаємо. Це різний склад розуму. Розробник думає: «Як зробити, щоб це працювало?». Хакер думає: «Як змусити це працювати неправильно?». Погляд з боку незалежних експертів критично необхідний для безпеки."
  },
  {
    question: "Чим ви відрізняєтесь від автоматичного сканера?",
    answer: "Сканер знаходить типові помилки, але не розуміє бізнес-логіку. Ми імітуємо дії живого хакера, який комбінує вразливості для досягнення мети (наприклад, підвищення привілеїв адміністратора через помилку в коді профілю)."
  },
  {
    question: "Чи безпечно це для працюючого продукту?",
    answer: "Так. Ми узгоджуємо час проведення тестів та використовуємо безпечні пейлоади. Для критичних систем рекомендуємо тестування на Staging-середовищі, щоб не зачепити реальних клієнтів."
  },
  {
    question: "Скільки часу займає пентест?",
    answer: "Залежить від обсягу (кількість API ендпоінтів, ролей, складність функціоналу). Зазвичай для стартапу на етапі запуску це 1-2 тижні роботи."
  },
  {
    question: "Що якщо ви нічого не знайдете?",
    answer: "Такого майже ніколи не буває, бо ідеального коду не існує. Але якщо критичних вразливостей дійсно немає — ви отримаєте сертифікат про високий рівень безпеки, що стане чудовим аргументом для ваших інвесторів та клієнтів."
  }
];