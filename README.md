# Clean Internationalization implementation with Next-intl

This project serves as a demonstration of how to set up internationalization (i18n) using the **`next-intl`** package in a **Next.js 13** application using **App router system**. A standout feature of this implementation is the customized structure of the translation folder, allowing for greater flexibility and organization of translation files.

Here an example on how you can customize your translations content.

```markdown
.
├── translations
│   ├── en
│   │   ├── translations1.json
│   │   ├── common
│   │   │   └── translations2.json
│   │   └── ...
│   ├── fr
│   │   ├── translations1.json
│   │   ├── common
│   │   │   └── translations2.json
│   │   └── ...
│   └── other language 
└── ...
```

With this architecture, you do not have to pass any props to access your translation key in your **“json files”.**

If you want to access **“common/translation2.json”** in the client side or the server side, you can do so like this :

```tsx
import { useTranslations } from "next-intl";
const t = useTranslations("common"); // This is your page

// In your tsx :
<h1>{t("translations2.keyYouWantToAccess")} </h1> // Access your key like in a regular json file
```