# МСК Инженерные Системы

Современный SEO-сайт инженерной компании для Москвы и Московской области: котельные, отопление, водоснабжение, канализация, водяной теплый пол и сантехника в квартирах.

## Запуск

```bash
npm install
npm run dev
```

Локальный адрес по умолчанию:

```text
http://localhost:3000
```

## Команды

```bash
npm run dev        # режим разработки
npm run build      # production-сборка
npm run start      # запуск production-сборки
npm run typecheck  # проверка TypeScript
npm run lint       # проверка ESLint
```

## Docker-деплой

Проект подготовлен к контейнерному запуску через Docker Compose. В compose входят:

- `app` - Next.js standalone-сборка на Node.js.
- `caddy` - reverse proxy с автоматическим HTTPS для `santex-works.ru`.

Локальная проверка контейнера:

```bash
docker compose up --build
```

Production-запуск на VPS:

```bash
docker compose up -d --build
```

Перед выпуском сертификата DNS-записи домена должны смотреть на VPS:

```text
A @   159.194.198.32
A www 159.194.198.32
```

## Структура данных

Основной контент вынесен в `src/data`:

- `site.ts` - бренд, контакты, общие настройки.
- `services.ts` - услуги и SEO-данные.
- `prices.ts` - пакеты и цены.
- `cases.ts` - портфолио.
- `faq.ts` - вопросы и ответы.
- `navigation.ts` - меню и footer.
- `blog.ts` - заготовки статей.

Форма заявки отправляет данные в mock route `/api/lead`. Там уже заложена структура лида для будущего подключения amoCRM.
