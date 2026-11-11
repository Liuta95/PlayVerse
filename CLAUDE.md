# CLAUDE.md · база знаний проекта PlayVerse

Claude Code читает этот файл перед каждой задачей. Здесь продукт, дизайн-система, правила кода, принятые решения и что ещё не сделано. Если что-то изменилось в Figma или в коде, обнови соответствующий раздел.

## 1. Продукт

**PlayVerse** — вымышленный мобильный развлекательный хаб с мини-играми. Главная механика — **турнир-викторина из 5 вопросов**: игрок отвечает на вопросы на время, получает очки, XP, серии (streak) и места в таблице лидеров.

**Жёсткое ограничение с первого брифа:** только виртуальная валюта. Никаких реальных денег, ставок, пополнений, выводов, коэффициентов и азартных механик. Любой текст, экран или компонент не должен обещать вывод средств или денежную ценность монет.

- Пример экономики из брифа: баланс 1 200 монет, взнос 50 → 1 150, награда +80 → 1 230.
- ⚠️ В Figma в экране Wallet есть добавленные пользователем cash-out и конвертация в $. Это противоречит ограничению выше. Я дважды предупреждал, пользователь пока оставил. В онбординге и в новых текстах говорим только про виртуальные монеты, уровни и бейджи.
- Все имена, числа и email на макетах (Alex, alex@example.com и т. п.) выдуманные.
- Пользователь пишет по-русски и по-украински. Отвечай на языке последнего сообщения.

## 2. Где что лежит

### Figma
Файл **Game-PlayVerse**: <https://www.figma.com/design/WZ3qBtK18DsqhF1ep9AKfs/Game-PlayVerse> (`fileKey` = `WZ3qBtK18DsqhF1ep9AKfs`).

- **Страница `Flow`** — экраны:
  - мобильный флоу игрока (welcome, лобби, квиз, профиль, wallet и др.);
  - `Welcome — Podium` и `Welcome — Rocket` (три варианта hero: podium, buzzer, rocket; экран `Welcome — Buzzer` из файла пропал);
  - `Onboarding & auth` (166:800): 3 онбординга, Sign up, Sign in, Nickname & avatar;
  - `Admin account` (126:825): мобильная админка, 6 экранов;
  - `Admin web (desktop)` (131:941): Overview, Tournaments, Moderation и `Web — AI Question Bank` (175:695);
  - `PlayVerse — Logo` (157:549);
  - `Colors — PlayVerse` (190:1088) — наша палитра, собранная из переменных. Рядом `Color` (178:1295) — чужая палитра другого бренда, только как референс.
- **Страница `Components`** — компоненты:

| Компонент | Node | Код |
| --- | --- | --- |
| Primary Button (Type × Size × State, 70 вариантов) | 19:389 | `Button` ✅ |
| Chip (6 типов) | 183:1961 | `Chip` ✅ |
| Input (State × Filled) | 185:9957 | `Input` ✅ |
| Text area | 188:10193 | `Textarea` ✅ |
| Answer Button (4 состояния) | 28:402 | `AnswerButton` ✅ |
| Sidebar (Expanded / Collapsed) | 153:1433 | `Sidebar` ✅ |
| Menu item (Main/Secondary × Default/Hover/Active) | 153:921 | `MenuItem` ✅ |
| Checkbox (State × Status, 9 вариантов) | 204:2244 | `Checkbox` ✅ |
| Bottom Nav Bar | 1:898 | — |
| Admin Nav Bar | 125:917 | — |
| Logo icon | 153:974 | SVG `src/assets/playverse-logo.svg`, используется внутри `Sidebar` (отдельного компонента нет) |
| Sheet Footer | 183:2078 | — |

Инструменты для Figma: Figma MCP (`use_figma`, `get_screenshot` и др.). Перед любой записью в Figma нужны скиллы `figma-use` и `figma-generate-design`.

### Код
- Этот проект: `~/Documents/Projects/my-design-system` (Vite + React 19 + TypeScript 7 + Storybook 10.6). Не git-репозиторий.
- Старый проект `~/Documents/Projects/Design System/my-design-system` — другая, ранняя версия (15 «плоских» токенов вроде `--bg`, `--accent`, свои компоненты, git-история). **Не смешивать** с этим. Токены оттуда устарели.
- Соседние папки с ассетами: `playverse-logo`, `playverse-welcome-illustration`, `playverse-buzzer-animation`, `playverse-cube-animation`, `playverse-quiz-illustration`. Иллюстрации рисуются SVG-скриптами на Python.
- Запуск Storybook в панели Claude: `preview_start` с именем `new-my-design-system-storybook` (запись в `~/Documents/Projects/.claude/launch.json`, порт 6006). Запись `my-design-system-storybook` запускает **старый** проект.

## 3. Стек и команды

Node 24, npm 11.

```bash
npm run storybook        # Storybook на :6006
npm run tokens           # tokens.json → tokens.css
npm run typecheck        # tsc -b --noEmit
npm run build-storybook
```

- `npm run typecheck` даёт 2 известные ошибки в демо-файлах Storybook (`src/stories/Button.tsx`, `Header.tsx`, неиспользуемый `React`). Они не наши. Свои файлы должны проходить чисто.
- Папка `src/stories/` (Button, Header, Page, Configure.mdx) — шаблонные примеры Storybook с захардкоженным CSS. Они не используют токены. Их можно удалить целиком.

## 4. Токены

Источник правды — **переменные Figma**. Они выгружаются в `src/tokens/tokens.json` (W3C DTCG, 358 токенов), оттуда `npm run tokens` генерирует `src/tokens/tokens.css` (CSS-переменные в `:root`). Оба файла руками не править.

**Три уровня, каждый ссылается на предыдущий:**

| Уровень | Коллекция Figma | Путь токена | CSS-переменная | Кол-во |
| --- | --- | --- | --- | --- |
| 1. Primitives | `Primitives` (раньше `Colors`) | `color.<hue>.<step>` | `--color-gray-900` | 55 |
| 2. Semantic | `Semantic` | `action.*`, `content.*`, `surface.*`, `border.*`, `feedback.*`, `currency.*` | `--action-primary`, `--content-muted`, `--surface-field`, `--border-strong`, `--feedback-success-bg`, `--currency-coin` | 63 |
| 3. Component | `Component` (раньше `Component Colors`) | `buttons.*`, `chips.*`, `inputs.*`, `sidebar.*`, `checkboxes.*`, `coins.*`, `app-bars.*`, `BottomNavBar.*`, `Alert.*` | `--buttons-primary-default-background` | 187 |
| — | `Spacing`, `Radius`, `Typography` | `spacing.*`, `radius.*`, `font.*`, `letter-spacing.*`, `line-height.*` | `--spacing-16`, `--radius-12`, `--font-size-14` | 13 / 10 / 30 |

Цепочка: `--buttons-primary-default-background` → `--action-primary` → `--color-purple-700` → `#6d28d9`.

- Все девять групп компонентных токенов (`buttons`, `chips`, `inputs`, `sidebar`, `checkboxes`, `coins`, `app-bars`, `BottomNavBar`, `Alert`) ссылаются на `Semantic`. Перенос делался скриптом в Figma с проверкой: цвета всех 216 токенов до и после совпали бит в бит. Для `Alert` добавлены 8 полупрозрачных примитивов (`blue/400 (40%)`, `(10%)` и так же для orange, red, green).
- Переименовано: `content/accent-active` → `content/accent-light` и `border/accent-strong` → `border/accent-light` (purple/300; «active» вводило в заблуждение, в BottomNavBar он используется для hover).
- **Старые `text/*`, `background/*`, `stroke/*`, `icon/*` (29 шт.) удалены** (ноябрь 2026). Все слои на страницах Flow и Components были перепривязаны на токены `Semantic` с проверкой цвета слой за слоем, затем старые переменные удалены. Соответствие: `text/primary → content/emphasis`, `text/secondary → content/muted`, `text/tertiary → content/subtle`, `background/default|secondary → surface/panel`, `background/primary → surface/page`, `background/tertiary → surface/field`, `stroke/primary → border/default`, `stroke/red → border/danger`, `icon/white → content/strong` и т. д. Для токенов без пары добавлены `content/brand`, `surface/page`, `surface/accent`, `surface/selected`, `surface/disabled`, `border/success`, `border/bright`. В коде старые CSS-переменные (`--text-*`, `--background-*`, `--stroke-*`, `--icon-*`) больше не существуют.
- Режим во всех коллекциях один (`Value`), тёмная тема единственная. Light/Dark не делали: добавлять режимы нужно в коллекцию `Semantic`.
- Шкалы: spacing 0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44. Radius 4–40 и `full` (999). Шрифты: Space Grotesk (display), Manrope (body), Inter (токен есть, файлы не подключены).
- Имя токена = имя переменной Figma в kebab-case; префикс `color` для Primitives и `spacing` для Spacing, у остальных коллекций префикса нет. Camel-case разбивается (`BottomNavBar` → `--bottom-nav-bar-…`), то же правило в `Foundations.tsx`.
- Тонкости выгрузки: `line-height.*` хранится как `150%`/`160%` (в Figma числа 150/160); `letter-spacing.*` в `px`; полупрозрачные цвета в 8-значном hex; пробелы и скобки в именах чистятся (`purple/500 (14%)` → `purple.500-14pct`, `green/400 2` → `green.400-2`).
- Странные имена в Figma, которые стоит переименовать: `gray/shadowneutral-50`, `gray/shadow_neutral-25`, варианты `… 2`. `surface/disabled` (бывший `background/disabled`) = `gray/200` — светлый фон на тёмной теме, похоже на ошибку, цвет сохранён как был.
- Переменная `answer card/foreground` есть в Figma, но не попала в выгрузку. Её значение = `gray/50`, в коде используется `--color-gray-50`.
- **Обновление токенов:** пользователь меняет Variables в Figma → сказать Claude «перевыгрузи токены» → он читает переменные через `use_figma` (все коллекции, путь = префикс коллекции + имя), перезаписывает `tokens.json`, запускает `npm run tokens`, проверяет что все `var()` существуют. Проект сам к Figma не подключён. Файл Figma меняется (появляются новые группы токенов), поэтому всегда выгружать заново целиком, а не по памяти.

Документация токенов — страница **PlayVerse / Foundations** в Storybook (`src/tokens/Foundations.mdx` + `Foundations.tsx`). Она читает `tokens.json` и рисует цвета (с цепочками алиасов), шкалы и типографику.

## 5. Правила кода

1. **Никакого хардкода** цветов, отступов, радиусов, шрифтов. Только `var(--token)`. Если нужного токена нет — остановиться и спросить, не придумывать. Допустимые исключения (токена нет): высота 48 = `2 × spacing-24`, `line-height` безразмерным числом, толщина рамки 1/1.5 px, кольца фокуса из `spacing` ± 1px.
2. Сначала компонентный токен (`--buttons-primary-default-background`), потом семантический (`--action-primary`, `--content-muted`), примитивы (`--color-gray-50`) только когда ничего из этого нет.
3. Один компонент = одна папка: `Name.tsx`, `Name.css`, `Name.stories.tsx`, `index.ts`. Классы с префиксом `pv-`, модификаторы `pv-name--variant`. Локальные CSS-переменные с `--_`.
4. Props называем по Figma: `variant` = Type, `size` = Size, состояния — булевы props (`loading`, `error`, `selected`) или `state`.
5. Состояния Figma: Default, Pressed (`:active`), Focus-visible, Selected, Error, Loading, Disabled — если они есть в макете. Принудительные состояния для docs — классы `is-pressed`, `is-focus-visible`, `is-active`, `is-focused`.
6. Доступность: нативные элементы, `aria-*` (`aria-busy`, `aria-pressed`, `aria-invalid`), связанные `label`, видимый фокус, иконки декоративные (`aria-hidden`), иконки-кнопки требуют `aria-label`.
7. В каждой story: controls для всех props и отдельная story **All States**. У Chip вместо неё `AllVariants` (состояний нет).
8. Не добавлять библиотеки без запроса. Не писать комментарии, объясняющие очевидное.
9. После изменений: `npm run typecheck` (только известные 2 ошибки) и проверка в Storybook (консоль без ошибок). Для новых CSS-файлов проверить, что все `var(--…)` объявлены в `tokens.css`.
10. Если в макете есть то, чего нет в токенах, или состояние не нарисовано — сказать об этом, а не изобретать.

## 6. Компоненты: что сделано и решения

Общий вид: тёмная тема, фиолетовый акцент (`purple/700` — основные кнопки, `purple/400` — акцент на тёмном), шрифты Space Grotesk Bold для кнопок и заголовков, Manrope для остального.

**Button** (`src/components/Button`). Variants: `primary`, `secondary`, `tertiary`, `icon-with-bg`, `icon-without-bg`; sizes `large` 48 / `medium` 44; слоты `iconLeft`, `iconRight` (24px). Цвета состояний сгенерированы из `buttons.*`. Решения: hover в Figma нет → не делали; Loading в Figma выглядит как Default → без спиннера (`aria-busy`, клики игнорируются); Primary Medium в Figma 15px, остальные Medium 13px → везде 13; кольцо фокуса = обводка 2px + «гало» 5px `purple/900`; tertiary medium без горизонтального padding.

**Chip** (`src/components/Chip`). Variants: `neutral`, `success`, `danger`, `info`, `warning`, `caution`. Высота 20, `radius-full`, Manrope Bold 10, padding 8/2/8/4. Ширина на 2–3 px уже, чем в Figma (метрики текста).

**Input** (`src/components/Input`). Props: `label`, `required`, `rightText`, `iconLeft`, `iconRight`, `error`, `disabled`. Решения: «Dropdown» из Figma = слот `iconRight`; заполненное поле получает рамку `inputs.stroke.active` (так в Figma); при фокусе всегда рисуется Focused (кольцо 3px, зазор 2px), отдельный Active без кольца виден только через `is-active`; фон disabled в Figma совпадает с обычным (`gray/800`); текста ошибки в макете нет.

**Textarea** (`src/components/Textarea`). Переиспользует стили `Input.css` (`pv-input--multiline`). `rows` по умолчанию 2, поле 278×60.

**AnswerButton** (`src/components/AnswerButton`). `state`: `default`, `selected` (точка), `correct` (галочка), `incorrect` (крестик). Высота везде 56 (в Figma 54–56, но это приводило бы к прыжку). Фокус-кольцо добавлено нами (в Figma его нет). Результат correct/incorrect озвучивается скрытым текстом.

**MenuItem** (`src/components/MenuItem`). `variant`: `main` (иконка 20px, слот `icon`) и `secondary` (подпункт, отступ слева 44, без иконки); `active` → `aria-current="page"`; `expandable` / `expanded` — шеврон и `aria-expanded`; `href` → `<a>`, иначе `<button>`. Hover берётся от курсора (в docs форсируется `is-hover`). Фокус с клавиатуры в Figma нет → добавлено кольцо внутрь элемента. Секундарный пункт в Active сохраняет обычный фон и меняется только текст (так в Figma). Шеврон всегда цвета `sidebar.icon-primary`, без поворота.

**Sidebar** (`src/components/Sidebar`). `collapsed` (Expanded 240 / Collapsed 80), `onCollapsedChange` (без него переключатель не показывается), `user` (карточка; в свёрнутом виде только аватар), `navLabel`. Дети — `MenuItem`; в свёрнутом состоянии пункты 44×44 только с иконкой (подписи остаются для скринридеров), подпункты и шевроны скрыты — это делает CSS сайдбара. Логотип — SVG, слово «Play» `gray/50` + «Verse» `purple/400`, Space Grotesk Bold 18, letter-spacing −2%. Ширины 240/80 собраны как `6 × spacing-40` и `2 × spacing-40` (токена нет); два зазора по 10px захардкожены (нет `spacing-10`). Иконки меню в stories — самодельные заглушки из `src/components/placeholder-icons.tsx`.

**Checkbox** (`src/components/Checkbox`). Props: `label`, `checked`/`defaultChecked`, `error`, `disabled`. Нативный `input` внутри `label`, квадрат 20, галочка 14 (путь из Figma, `currentColor`). Hover есть в Figma → сделан. Решения: Error + Active в Figma не нарисован → выглядит как обычный отмеченный; фокус — обводка 2px `checkboxes.stroke.focus` поверх любого статуса; у неактивных Hover/Focused/Error/Disabled фона нет (так в Figma). Токены `checkboxes.icon.green/red` есть, но в макете не используются. Принудительные классы для docs: `is-hover`, `is-focus-visible`.

## 7. Шрифты и базовые стили

- `src/styles/fonts.css` — `@fontsource/space-grotesk` и `@fontsource/manrope`, латиница, веса 400/600/700. Статические пакеты выбраны, потому что имена семейств совпадают с токенами (у variable-пакетов имена с суффиксом `Variable`).
- `src/styles/base.css` — фон `html` и шрифт `body` из токенов.
- Оба файла и `tokens.css` импортируются в `.storybook/preview.tsx` и `src/main.tsx`. Фон канваса Storybook — `var(--background-primary)`.

## 8. Что ещё не сделано

- Компоненты: Bottom Nav Bar, Admin Nav Bar, Sheet Footer.
- Иконки: нет набора, в stories используются самодельные inline SVG (в Figma — placeholder «Diamond»).
- Шрифт Inter: токен есть, файлов нет.
- Кириллица: подключена только латиница.
- Удалить шаблонные примеры `src/stories/`.
- Решить судьбу cash-out в Wallet (см. раздел 1).
- Прототипные связи между экранами в Figma не настроены.

## 9. Как работаем

- Сначала коротко план (2–4 строки), потом делай.
- Проверяй результат сам: числами из браузера (`getComputedStyle`) и скриншотом, не проси пользователя смотреть вручную.
- Сообщай честно, что не проверено и где отклонился от макета.
- Файлы для пользователя клади внутри `~/Documents/Projects`. Архив проекта: `~/Documents/Projects/my-design-system.zip` (без `node_modules`).
