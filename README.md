## Мобильное приложение в рамках летней практики

```
src/
├── assets/                  # Изображения, иконки, шрифты
├── components/              # Переиспользуемые UI-компоненты
│   └── ReviewModal/
│       ├── index.tsx        # Основной компонент
│       ├── styles.ts        # Стили компонента
│       └── types.ts         # Пропсы/типы
├── screens/                 # Экраны приложения
│   └── ReviewsScreen/
│       ├── index.tsx        # Главный экран
│       ├── types.ts         # Типы для экрана (если есть)
│       └── styles/          # Локальные стили
│           ├── base.ts
│           ├── histogram.ts
│           ├── reviewList.ts
│           ├── modalForm.ts
│           ├── modalFilter.ts
│           └── index.ts     # Объединение стилей
├── styles/                  # Глобальные токены и дизайн-система
│   ├── colors.ts            # Цвета
│   ├── typography.ts        # Текстовые стили
│   ├── spacing.ts           # Отступы
│   ├── shadows.ts           # Тени
│   └── metrics.ts           # Метрики (ширина экрана, статусбар и т.д.)
├── hooks/                   # Кастомные хуки (например, useReviews)
├── utils/                   # Вспомогательные функции (например, formatDate)
├── constants/               # Константы, строки, конфиги
└── navigation/              # Навигация (Stack/Tab)
```
