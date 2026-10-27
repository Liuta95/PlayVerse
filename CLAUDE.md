# CLAUDE.md · дизайн-система в коді

Claude Code читає цей файл перед кожною задачею.

## Що це за проєкт
Дизайн-система «PlayVerse» у коді. Джерело правди для токенів - `src/tokens/tokens.json` (з Figma Variables, W3C DTCG). Компоненти - React + TypeScript, документація - Storybook.

Figma: https://www.figma.com/design/WZ3qBtK18DsqhF1ep9AKfs/Game-PlayVerse

## Стек
- Vite + React 19 + TypeScript
- Стилі: CSS-змінні з `src/tokens/tokens.css` (генерується з `src/tokens/tokens.json`), без CSS-in-JS
- Storybook (остання версія) для документації та станів

## Правила, які не порушуємо
1. **Ніколи не хардкодь кольори, відступи, радіуси, шрифти.** Тільки `var(--token-name)`. Якщо потрібного токена нема - скажи мені, не вигадуй значення.
2. Імена токенів = імена змінних у Figma в kebab-case: `color/primary/default` → `--color-primary-default`.
3. Кожен компонент має: усі стани з Figma (default, hover, focus-visible, active, disabled, loading - якщо є в макеті), `aria-*` де потрібно, клавіатурну доступність.
4. Кожен компонент має story в Storybook з controls для всіх props і окремою story «All states».
5. Один компонент = одна папка: `src/components/Button/Button.tsx`, `Button.css`, `Button.stories.tsx`, `index.ts`.
6. Не додавай бібліотек без запиту. Не міняй токени руками - вони приходять із Figma: коли я оновлю Variables, перечитай їх і перегенеруй `tokens.json` і `tokens.css`.
7. Після генерації запусти `npm run typecheck` і `npm run build-storybook` і покажи результат.

## Як працюємо
- Спочатку коротко скажи план (2-4 рядки), потім роби.
- Якщо в макеті є щось, чого нема в токенах (новий колір, відступ) - зупинись і спитай.
- Коміти маленькі, Conventional Commits: `feat(button): …`, `fix(tokens): …`.

## Структура
```
src/tokens/tokens.json  ← з Figma (W3C DTCG)
src/tokens/tokens.css   ← CSS-змінні з tokens.json
src/components/         ← компоненти
.storybook/          ← конфіг Storybook
```
