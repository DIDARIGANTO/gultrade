# GULTRADE — сайт оптовых поставок цветов

Статичный сайт по образцу bloomx.kz (структура и функционал), контент — свой.
Технологии: HTML + UIkit 3.21 (локально в assets/) + шрифт Manrope (Google Fonts).

## Структура
- index.html — главная (герой, партнёры, «Как это работает», преимущества, новости, CTA)
- about.html — о компании
- team.html — команда (ценности, цифры, сотрудники, цитаты)
- news.html — новости с фильтром по категориям
- news/*.html — 3 статьи
- contacts.html — контакты (режим работы, телефоны, WhatsApp, карта)

## Контакты (внесены 2026-08-27)
- Адрес: Астана, пр-т Шәкәрім Құдайбердіұлы, 56, 1 этаж, Z00F2A9 · 2ГИС: 2gis.kz/astana/firm/70000001056285785
- Телефон: +7 705 406 11 56 · WhatsApp: wa.me/77001837700 (+7 700 183 77 00)
- Instagram: https://www.instagram.com/bloom.kaz · YouTube: https://www.youtube.com/@BLOOMKZ

## SEO / GEO (настроено)
- Уникальные title и meta description на каждой странице (ключ: «цветы оптом в Казахстане»)
- Canonical, Open Graph + Twitter Card, обложка assets/img/og-cover.jpg (1200×630)
- JSON-LD: Organization + LocalBusiness (адрес Астана, гео-координаты, areaServed, sameAs),
  WebSite, NewsArticle и BreadcrumbList на статьях
- Гео-теги: geo.region KZ-71, geo.placename Астана, ICBM
- robots.txt + sitemap.xml + llms.txt (для ИИ-поисковиков)

## ЗАМЕНИТЬ ПЕРЕД ЗАПУСКОМ (поиск по «TODO»)
1. ДОМЕН: везде прописан https://gultrade.kz — если домен другой, заменить
   в canonical/OG/JSON-LD (все *.html), robots.txt, sitemap.xml, llms.txt
2. E-mail: заглушка info@gultrade.kz
4. Имена и фото сотрудников (team.html) — сейчас «Имя Фамилия»
5. Цифры «10+ лет / 100+ партнёров / 10 000+ заказов» (team.html)
6. Логотипы партнёров на главной (сейчас текстовые заглушки)
7. Реальные фото (герой, новости) — сейчас градиенты и SVG-цветы

## Локальный просмотр
python3 -m http.server 8765
