### Мобильное приложение в рамках летней практики

## 📁 Структура проекта

```
src/
├── assets/                  # Изображения, иконки
├── components/              # Модалки
│   └── ReviewModal/
│       ├── index.tsx
│       └── styles.ts
├── screens/                 # Экраны приложения
│   ├── LoginScreen/
│   │   └── index.tsx        # Экран Регистрации
│   └── ReviewsScreen/
│       ├── index.tsx        # Экран с отзывами
│       └── styles/          # Локальные стили
│           ├── base.ts
│           ├── histogram.ts
│           ├── reviewList.ts
│           ├── modalForm.ts
│           ├── modalFilter.ts
│           └── index.ts     # Объединение стилей в 1

├── styles/                  # Глобальные стили
│   └── colors.ts            # Цвета
├── App.tsx                  # Временный вызов компкомпонентов
```
