### Мобильное приложение в рамках летней практики

## 📁 Структура проектаь

P.s Понял, что фигня буду переделывать

```
📦src
 ├── 📂components
 | ├── 📂ReviewModal
 | | ├── 📂styles
 | | | └── 📜index.ts
 | | └── 📜index.tsx
 | └── 📂SortModal
 | | ├── 📂styles
 | | | └── 📜index.ts
 | | └── 📜index.tsx
 ├── 📂screens
 | ├── 📂LoginScreen
 | | └── 📜index.tsx
 | └── 📂ReviewScreen
 | | ├── 📂styles               #Локальные стили
 | | | ├── 📜base.ts
 | | | ├── 📜histogram.ts
 | | | ├── 📜index.ts
 | | | └── 📜reviewList.ts
 | | └── 📜index.tsx            # Объединение стилей в 1
 └── 📂styles                   # Глобальные стили
 | ├── 📜colors.ts              # Цвета
 | ├── 📜metrics.ts
 | └── 📜styles.ts
 ├── 📜App.tsx                  # Временный вызов компкомпонентов
```
