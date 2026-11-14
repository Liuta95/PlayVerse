# CLAUDE.md · база знаний проекта PlayVerse

Claude Code читает этот файл перед каждой задачей. Здесь продукт, дизайн-система, правила кода, принятые решения и что ещё не сделано. Если что-то изменилось в Figma или в коде, обнови соответствующий раздел.

## 1. Продукт

**PlayVerse** — вымышленный мобильный развлекательный хаб с мини-играми. Главная механика — **турнир-викторина из 5 вопросов**: игрок отвечает на вопросы на время, получает очки, XP, серии (streak) и места в таблице лидеров.

**Экономика и вывод средств (решение пользователя, ноябрь 2026):** ограничения «только виртуальная валюта» нет. В продукте есть вывод монет в реальную ценность (PayPal, подарочные карты, крипта, банковский перевод), это основа кейса. Wallet и cash-out из Figma — часть продукта, не ошибка. Не напоминать о прежнем ограничении и не менять тексты на «только виртуальные монеты».

- Пример экономики из брифа: баланс 1 200 монет, взнос 50 → 1 150, награда +80 → 1 230.
- Экраны Wallet, Withdraw (PayPal, bank transfer, crypto) и Review withdraw — рабочие экраны продукта; именно вывод тестировался в кейсе.
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
| Tab (State × Selected, 7 вариантов) | 266:1663 | `Tab` ✅ |
| Alert (Info / Warning / Error / Success) | 226:1670 | `Alert` ✅ |
| Card (Rarity × State, 9 вариантов; карта-усилитель) | 289:1558 | — (только Figma) |
| Bottom Nav Bar (Nav.items = 3/4/5) + Nav.item (213:3245) | 1:898 | `BottomNavBar`, `NavItem` ✅ |
| Admin Nav Bar (Active = 4 пункта) | 125:917 | `AdminNavBar`, `AdminNavItem` ✅ |
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
npm run chromatic        # публикация Storybook в Chromatic (токен в .env: CHROMATIC_PROJECT_TOKEN)
npm run typecheck        # tsc -b --noEmit
npm run build-storybook
```

- `npm run typecheck` должен проходить без ошибок. Шаблонные примеры Storybook (`src/stories/`) удалены в ноябре 2026.

## 4. Токены

Источник правды — **переменные Figma**. Они выгружаются в `src/tokens/tokens.json` (W3C DTCG, 379 токенов), оттуда `npm run tokens` генерирует `src/tokens/tokens.css` (CSS-переменные в `:root`). Оба файла руками не править.

**Три уровня, каждый ссылается на предыдущий:**

| Уровень | Коллекция Figma | Путь токена | CSS-переменная | Кол-во |
| --- | --- | --- | --- | --- |
| 1. Primitives | `Primitives` (раньше `Colors`) | `color.<hue>.<step>` | `--color-gray-900` | 55 |
| 2. Semantic | `Semantic` | `action.*`, `content.*`, `surface.*`, `border.*`, `feedback.*`, `currency.*` | `--action-primary`, `--content-muted`, `--surface-field`, `--border-strong`, `--feedback-success-bg`, `--currency-coin` | 63 |
| 3. Component | `Component` (раньше `Component Colors`) | `buttons.*`, `chips.*`, `inputs.*`, `sidebar.*`, `checkboxes.*`, `tabs.*`, `coins.*`, `app-bars.*`, `BottomNavBar.*`, `Alert.*` | `--buttons-primary-default-background` | 208 |
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

Документация токенов — страница **PlayVerse / Foundations** в Storybook (`src/tokens/Foundations.mdx` + `Foundations.tsx`). Она читает `tokens.json` и рисует цвета (с цепочками алиасов), шкалы и типографику. Число токенов и список групп в тексте считаются из `tokens.json` и не устаревают; новую группу компонентных токенов нужно добавить в `COMPONENT_GROUPS` в `Foundations.tsx`.

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

**AdminNavBar** (`src/components/AdminNavBar`). Нижняя панель мобильной админки: `AdminNavBar` (`nav`, `aria-label="Admin"`) + `AdminNavItem` (`<a>`, `icon`, `selected` → `aria-current="page"`). 4 пункта (Overview, Tournaments, Questions, Moderation), высота 64, пункты делят ширину поровну. Активный: `content/accent` + Bold, остальные `content/muted` + SemiBold (в Bottom Nav Bar все Bold). В Figma компонент привязан к примитивам (`gray/900`, `gray/700`, `gray/400`, `purple/400`), группы `AdminNavBar.*` в `Component` нет → в коде взяты семантические токены с теми же значениями (`surface/panel`, `border/default`, `content/muted`, `content/accent`). Hover и Pressed в Figma не нарисованы → не делали; кольцо фокуса добавлено нами. Иконки из Figma лежат в `admin-icons.tsx` (24px-сетка, слот 20). Stories: `Active=Overview/Tournaments/Questions/Moderation`.

**Checkbox** (`src/components/Checkbox`). Props: `label`, `checked`/`defaultChecked`, `error`, `disabled`. Нативный `input` внутри `label`, квадрат 20, галочка 14 (путь из Figma, `currentColor`). Hover есть в Figma → сделан. Решения: Error + Active в Figma не нарисован → выглядит как обычный отмеченный; фокус — обводка 2px `checkboxes.stroke.focus` поверх любого статуса; у неактивных Hover/Focused/Error/Disabled фона нет (так в Figma). Токены `checkboxes.icon.green/red` есть, но в макете не используются. Принудительные классы для docs: `is-hover`, `is-focus-visible`.

**Tab** (`src/components/Tab`). Одна вкладка: `selected` (`aria-selected`), `disabled`, `role="tab"`. Ряд вкладок и переключение не делали: оборачивать в свой `role="tablist"`. 78×36, padding 8/12, radius 16, Manrope SemiBold 13. Токены `tabs.*` (21 шт., ссылаются на Semantic) добавлены в ноябре 2026. Решения: Focused в Figma = внутренняя рамка `border/accent` + внешняя 1px снаружи → в коде `border` + `box-shadow`; у Selected+Focused внешняя рамка в Figma привязана к `tabs/selected/bg/focused` (почти невидима), в коде взят `tabs.selected.stroke.focused`, чтобы фокус был виден; Disabled+Selected не нарисован. Принудительные классы для docs: `is-hover`, `is-focus-visible`. Stories повторяют Figma один в один (по просьбе пользователя, без Docs и All States): `Components/Tab/Unselected` — Default, Hover, Focused, Disabled; `Components/Tab/Selected` — Default, Hover, Focused.

**Alert** (`src/components/Alert`). `state`: `info`, `warning`, `error`, `success`; текст — `children`. Иконка «i» 16px (путь из Figma, один на все 4 состояния, цвет `currentColor` из `alert.*.icon`), отступ сверху 2. Padding 8, gap 8, radius 12, Manrope Regular 12. Ширина — 100% контейнера (358 в Figma = ширина мобильного экрана). `role="alert"` у error, `role="status"` у остальных. Решения: слои текста в Figma не привязаны к `alert/*/text` (Info — хардкод `#9ca3af`, остальные — `gray/450`), в коде взят токен `alert.*.text` (`#9ca3af`); в stories текст из Figma («Only send to a TON address. Other networks will lose the funds.»; во всех четырёх состояниях в макете он один и тот же). Высота на 1px больше Figma (метрики шрифта). Stories повторяют Figma: Info, Warning, Error, Success, без Docs и All States.

**BottomNavBar** (`src/components/BottomNavBar`). `BottomNavBar` — `<nav>` (`aria-label` по умолчанию «Main»), фон и верхняя рамка 1px из `bottom-nav-bar.nav-bar.*`, ширина 100% (390 в Figma = ширина экрана), пункты делят ширину поровну. `NavItem` — ссылка (`href`), `icon` (слот 20px), `selected` → `aria-current="page"`. Пункт: высота 63 = `2 × spacing-32 − 1px` (токена нет; вместе с рамкой бар = 64), padding 8/24, gap 2, Manrope Bold 11. Состояния Figma: Default, Hover (`:hover`, в stories `is-hover`), Pressed + Selected — один акцентный цвет для текущей страницы и для `:active`. Иконки home, trophy, credit card, account circle, clock — из Figma, в `nav-icons.tsx` (`currentColor`). Решения: фокус с клавиатуры в Figma нет → кольцо внутрь, как у MenuItem. Пункт на 1px уже Figma (метрики шрифта). Stories повторяют Figma: `Nav.item` — Default, Hover, Pressed; `Bottom Nav Bar` — Nav.items=5, 4, 3; без Docs и All States.

## Карты-усилители (новая идея, ноябрь 2026)

Идея взята из кейса Predictrum (карты как герои игры). В PlayVerse карта — усилитель, который игрок разыгрывает перед вопросом: 50/50, Double, Shield, Extra time, Skip. Перед вопросом предлагают 3 карты, игрок выбирает одну или пропускает.

- **Figma, страница Components:** секция `Cards` (289:1438): компонент `Card` (289:1558) — Rarity Common/Rare/Epic × State Default/Selected/Disabled, свойства `Title`, `Description`, `Cost`, `Art` (instance swap на 5 иллюстраций `Card Art / …`, 95×68, лежат рядом с сеткой вариантов). Размер 114×168, три в ряд на экране 390.
- **Figma, страница Flow:** экран `Choose a Card` (290:1456) в секции Ready screens, справа от остальных экранов квиза.
- **Токены:** 24 переменные `cards/*` в коллекции `Component` (все ссылаются на Semantic): `cards/bg/*`, `cards/art/bg/*`, `cards/stroke/{common,rare,epic,disabled}`, `cards/rarity/*`, `cards/cost/*`, `cards/check/*`, `cards/icon/default`, `cards/title/*`, `cards/description/*`. **В `tokens.json` и код они ещё не выгружены** (там 379 токенов, в Figma после этого 403).
- **Решения:** Rarity = цвет рамки и подписи (серый / фиолетовый / золотой); Selected = рамка 2 px, фон `surface/selected` и галочка; Disabled = приглушённые цвета и иконка с opacity 0.4; цена в красном, если карту нельзя сыграть. Арт карт — векторные иллюстрации в стиле Welcome (подиум и ракета): глянцевый фиолетовый, золото, голубые искры, тёмный радиальный фон. Нарисованы SVG → `createNodeFromSvg`, цвета захардкожены в иллюстрациях (не токены). Double = звезда и бейдж ×2, 50/50 = шар-вопрос, разрезанный пополам, Extra time = секундомер с плюсом, Shield = щит с галочкой, Skip = ракета. Иконки `cards/icon/*` больше не используются в арте. Disabled в экране не показан.
- **Экраны механики (Figma, страница Flow, ряд y=1614):** `Choose a Card` 290:1456, `Card Collection` 302:1565 (фильтры по редкости, сетка 3×2, три карты в колоде, одна Locked, панель «Your deck 3/5»), `Lobby — Deck` 302:1979 (полоса «Your deck · 3 of 5» над турниром), `Results — Card effect` 303:1692 (панель «Double played»: base score 80, bonus +20; XP +140). Все собраны клонами существующих экранов и экземплярами Card.
- **Кейс:** раздел «Part 2 · Power-up cards» в `~/Documents/Projects/playverse-case/index.html` (карусель из четырёх экранов, матрица состояний Card, пять иллюстраций). Admin стал Part 3, Figma→код Part 4.
- **Не сделано:** компонент `Card` в коде, выгрузка токенов.

## 7. Шрифты и базовые стили

- `src/styles/fonts.css` — `@fontsource/space-grotesk` и `@fontsource/manrope`, латиница, веса 400/600/700. Статические пакеты выбраны, потому что имена семейств совпадают с токенами (у variable-пакетов имена с суффиксом `Variable`).
- `src/styles/base.css` — фон `html` и шрифт `body` из токенов.
- Оба файла и `tokens.css` импортируются в `.storybook/preview.tsx` и `src/main.tsx`. Фон канваса Storybook — `var(--background-primary)`.

## 8. Что ещё не сделано

- Компоненты: Sheet Footer.
- Иконки: нет набора, в stories используются самодельные inline SVG (в Figma — placeholder «Diamond»).
- Шрифт Inter: токен есть, файлов нет.
- Кириллица: подключена только латиница.
- Прототипные связи между экранами в Figma не настроены.

## 9. Как работаем

- Сначала коротко план (2–4 строки), потом делай.
- Проверяй результат сам: числами из браузера (`getComputedStyle`) и скриншотом, не проси пользователя смотреть вручную.
- Сообщай честно, что не проверено и где отклонился от макета.
- Файлы для пользователя клади внутри `~/Documents/Projects`. Архив проекта: `~/Documents/Projects/my-design-system.zip` (без `node_modules`).
