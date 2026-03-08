# Подключение домена vailis.ai

## 1. В Vercel Dashboard

1. Проект **vailis-ai-website** → **Settings** → **Domains** (или **Add Custom Domain**)
2. Добавь `vailis.ai`
3. Добавь `www.vailis.ai` (Vercel предложит это сам)
4. Vercel покажет нужные DNS-записи — **скопируй их точно**

---

## 2. Настройка DNS у регистратора

Открой панель DNS у регистратора (Namecheap, GoDaddy, Cloudflare, Reg.ru и т.п.).

### Вариант A: Обычный (apex + www)

| Тип   | Name/Host | Value/Points to      |
|-------|-----------|----------------------|
| **A** | `@`       | `76.76.21.21`        |
| **CNAME** | `www` | `cname.vercel-dns.com` |

> В Vercel для `www` может быть показан свой CNAME (например `xxx.vercel-dns-017.com`). Используй тот, что указан в Dashboard.

### Вариант B: Если домен занят другим Vercel-аккаунтом

Сначала нужно подтвердить владение через TXT-запись:

1. В Vercel будет показана TXT-запись
2. Создай её у регистратора
3. Подожди 5–15 минут
4. В Vercel нажми «Verify»

После проверки добавь A и CNAME, как в варианте A.

---

## 3. Проверка

- `dig A vailis.ai` — должен вернуть `76.76.21.21`
- [whatsmydns.net](https://www.whatsmydns.net/) — проверка распространения DNS

Распространение DNS может занять до 24–48 часов, обычно 5–30 минут.

---

## 4. SSL

После корректной настройки DNS Vercel автоматически выпустит сертификат Let's Encrypt.
