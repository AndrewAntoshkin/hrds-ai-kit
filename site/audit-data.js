window.HRDS_AUDIT_DATA = {
  "generatedFrom": "exports/hrds-components-audit.xlsx",
  "figma": {
    "library": "HRDS Components",
    "fileKey": "BodHDPKvwUYhWM5XDahMja",
    "url": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja"
  },
  "storybook": {
    "version": "13.3.0",
    "url": "https://hrds.yandex-team.ru"
  },
  "summary": {
    "total": 151,
    "priority": {
      "P0": 14,
      "P1": 95,
      "P2": 42
    },
    "issues": {
      "status conflict": 14,
      "code only": 72,
      "figma only": 30,
      "missing code props": 3,
      "status drift": 12,
      "props drift": 20
    }
  },
  "items": [
    {
      "priority": "P0",
      "component": "Checkbox · Group",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma property 'Items' not found in code props; 🔄 Checkbox · Group",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=9650-14036",
        "props": "Items: [2, 3, 4, 5, 6, 7, 8, 1] (default: 1)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/CheckboxGroup",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-checkboxgroup",
        "codeFolder": "CheckboxGroup",
        "props": "vertical: boolean = false — Вертикальное расположение (рекомендуется); gap: 's' \\ = 'm' — –; children: ReactNode — Дочерние элементы - компоненты Checkbox; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: deprecated; Storybook/code: active; story: Data Entry/CheckboxGroup."
    },
    {
      "priority": "P0",
      "component": "deprecated_Sidebar",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "❇️ Page · Sidebar",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=37361-2452",
        "props": "↳ Group · 3: boolean (default: False); ↳ Group · 2: boolean (default: False); ↳ Group · 4: boolean (default: False); ↳ Group · 5: boolean (default: False); ↳ Group · 1: boolean (default: False); Compact: [off, on] (default: off); State: [—, Skeleton] (default: —); Variant: [Team, Lead] (default: Team)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Field",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; 🔄 Field",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=800-24028",
        "props": "Columns: [1, 2] (default: 1)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Radiobox + Text",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; 🔄 Radiobox + Text",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=9650-15298",
        "props": "has Label: boolean (default: True); Width: [Auto, Fixed] (default: Auto); State: [Default, Disabled] (default: Default); ↳ Selected: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Radiobox · Group",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; 🔄 Radiobox · Group",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=9650-15395",
        "props": "Items: [2, 3, 4, 5, 6, 7, 8] (default: 2)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Search",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; 🔄 Search",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=10545-52772",
        "props": "Size: [S, M] (default: M); View: [Outline, Contrast] (default: Outline); State: [—, hover, focus, error, disabled] (default: —); ↳ Filled: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Table · Cell",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; .DEPRECATED Table · Cell",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=38585-89732",
        "props": "← Slot: instance_swap; → Slot: instance_swap; Base: instance_swap; Preset: [Text, Text · Hidden, Number, Number · Hidden, Date, User, User · Full, Tag · Group, Status · Group] (default: Text)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Table · Cell · Header",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; .DEPRECATED Table · Cell · Header",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=38666-25588",
        "props": "← Slot: instance_swap; → Slot: instance_swap; Base: instance_swap; Preset: [—] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Tag · Person",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; 🔄 Tag · Person",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=10864-35210",
        "props": "Size: [S, M] (default: M); Action: [—, Delete] (default: —); State: [—, hover, focus, disabled] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Tag · Status · Group",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; 🔄 Tag · Status · Group",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=13277-68234",
        "props": "Amount: [2, 3, 4, 5, 6, 7, 8] (default: 2); Size: [S, M] (default: M)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Text Input",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma value 'View=Contrast' not found in code; Figma value 'State=hover' not found in code; Figma value 'State=focus' not found in code; Figma property 'Filled' not found in code props; Figma property 'Icon' not found in code props; 🔄 Text Input",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=4382-14344",
        "props": "← Icon: instance_swap; has Reset: boolean (default: True); Size: [S, M] (default: M); View: [Outline, Contrast] (default: Outline); State: [—, hover, focus, error, disabled] (default: —); ↳ Filled: [off, on] (default: off); has Icon: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data entry/Input/Input",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-input-input",
        "codeFolder": "HrInput",
        "props": "value: string — Значение поля ввода.; onChange: ChangeEventHandler<HTMLInputElement> — Обработчик изменения значения.; placeholder: string — Плейсхолдер текста.; type: string = 'text' — HTML-тип поля ввода (text, password, email, search, etc.).; view: 'outline' \\ = 'surface' \\ — 'ghost'`; size: 's' \\ = 'm' — –; state: 'default' \\ = 'error' \\ — 'success'`; disabled: boolean — Отключает поле.; readOnly: boolean — Делает поле только для чтения.; required: boolean — Обязательное поле.; maxLength: number — Максимальное количество символов.; autoComplete: string — Автодополнение (например, 'email', 'off').; hasReset: boolean = type === 'search' — Показывает кнопку сброса значения.; slotLeft: ReactNode — Левый слот для дополнительных элементов.; slotRight: ReactNode — Правый слот для дополнительных элементов.; width: string \\ = number — –; inputSize: number — HTML-атрибут size для поля.; debounceSettings: InputDebounceSettings — Настройки debounce для onChange.; className: string — Дополнительный CSS-класс.; inputClassName: string — CSS-класс для input элемента.; innerRef: RefObject<HTMLInputElement> — Ссылка на DOM-элемент."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: deprecated; Storybook/code: active; story: Data entry/Input/Input."
    },
    {
      "priority": "P0",
      "component": "Toggle · Base",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; 🔄 Toggle · Base",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=950-33147",
        "props": "State: [—, 🚫 Error, Disabled] (default: —); ↳ Selected: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Tumbler + Text",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; 🔄 Tumbler + Text",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=9650-16218",
        "props": "Width: [Hug, Fill] (default: Hug); State: [—, disabled] (default: —); ↳ Selected: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P0",
      "component": "Tumbler · Group",
      "issueType": "status conflict",
      "fixArea": "Figma + Storybook/code",
      "reason": "В Figma компонент помечен как устаревший, но в Storybook/code он продолжает жить как активный.",
      "action": "Принять одно решение по lifecycle: либо вернуть компонент в актуальную Figma-библиотеку, либо пометить Storybook/code как deprecated и дать путь миграции.",
      "details": "Figma deprecated, code/storybook active; Figma props present, code props missing in index; 🔄 Tumbler · Group",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=9650-16295",
        "props": "Items: [2, 3, 4, 5, 6, 7, 8] (default: 2)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: deprecated; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "AI",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/AI",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-ai",
        "codeFolder": "AI",
        "props": "size: '2xs' \\ = 'xs_compact' \\ — 'xs' \\; view: 'primary' \\ = 'secondary' — `'primary'`; className: string — Дополнительный класс.; children: ReactNode — Основной контент баннера (текст/children).; action: ReactNode — Опциональная action-кнопка справа.; className: string — Дополнительный класс.; title: string — Опциональный контекст (напр. \"Поиск\").; actions: ReactNode — Action-элементы справа (кнопки, меню).; className: string — Дополнительный класс."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data display/AI."
    },
    {
      "priority": "P1",
      "component": "AllServices",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Integrations/Services/AllServices",
        "link": "https://hrds.yandex-team.ru/?path=/story/integrations-services-allservices",
        "codeFolder": "AllServices",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Integrations/Services/AllServices."
    },
    {
      "priority": "P1",
      "component": "CalendarTimeline",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Display/CalendarTimeline",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-calendartimeline",
        "codeFolder": "CalendarTimeline",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data Display/CalendarTimeline."
    },
    {
      "priority": "P1",
      "component": "CloseButton",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "CloseButton",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "Context",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Context",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "controlHelpers",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "controlHelpers",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "DialogLayout",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Overlay/Modal/DialogLayout",
        "link": "https://hrds.yandex-team.ru/?path=/story/overlay-modal-dialoglayout",
        "codeFolder": "DialogLayout",
        "props": "title: ReactNode — **Обязательный**. Заголовок диалогового окна.; subtitle: ReactNode — Подзаголовок под основным заголовком.; close: string — **Обязательный**. Текст кнопки закрытия.; confirm: string — **Обязательный**. Текст кнопки подтверждения.; closeButtonView: 'ghost' \\ = 'secondary' — `'ghost'`; onClose: () => void — Обработчик закрытия диалога. Вызывается при клике на кнопку закрытия.; onConfirm: () => void — Обработчик подтверждения. Вызывается при клике на кнопку подтверждения.; className: string — Дополнительный CSS-класс для корневого элемента."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Overlay/Modal/DialogLayout."
    },
    {
      "priority": "P1",
      "component": "Divider",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Divider",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "ErrorBoundary",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "ErrorBoundary",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "FileUpload",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "FileUpload",
        "props": "value: FileInfo[] — Выбранные файлы; onChange: (newValue: FileInfo[]) => void — Обработчик изменения выбранных файлов; accept: string — Принимаемые форматы данных (например, \"image/*\", \".pdf\"); multiple: boolean = false — Включает возможность загрузить несколько файлов; name: string — Имя поля в форме; view: 'outline' \\ = 'contrast' — `'outline'`; inputView: 'dropzone' \\ = 'button' — `'dropzone'`; size: 's' \\ = 'm' — `'m'`; width: 'max' — Ширина контрола (при значении max растягивается на весь контейнер); disabled: boolean = false — Выключает весь контрол и файлы; state: 'error' — Состояние - либо ошибка, либо отсутствует; caption: ReactNode — Подсказка под инпутом; errorMessage: ReactNode — Сообщение об ошибке (появится вместо подсказки, если state='error'); uploadButtonText: ReactNode — Текст в кнопке для загрузки файлов; dropzoneText: ReactNode — Текст в dropZone по умолчанию; dropzoneTextDragging: ReactNode = dropzoneText — Текст в dropZone при перетаскивании файла; statusText: string — Переопределение текста статуса (например, 'Добавлено 3 файла'); tooltipProps: Partial<TooltipStatefulProps> — Переопределение опций тултипов на внутренних элементах; onRetry: HandleRetry — Общий обработчик повторения загрузки файла; onDownload: HandleDownload — Общий обработчик скачивания файла; onDelete: HandleDelete — Общий обработчик удаления файла; className: string — Дополнительный CSS класс; value: FileInfo[] — Выбранные файлы; onChange: (newValue: FileInfo[]) => void — Обработчик изменения выбранных файлов; view: 'outline' \\ = 'contrast' — `'outline'`; size: 's' \\ = 'm' — `'m'`; disabled: boolean — Выключает весь контрол; state: 'error' — Состояние; width: 'max' — Ширина контрола; accept: string — Принимаемые форматы данных; name: string — Имя поля в форме; view: 'button' \\ = 'dropzone' — `'dropzone'`; multiple: boolean — Множественный выбор файлов; uploadButtonText: ReactNode — Текст в кнопке загрузки; dropzoneText: ReactNode — Текст в dropZone; dropzoneTextDragging: ReactNode — Текст при перетаскивании; statusText: string — Текст статуса; children: ReactElement<ButtonProps> — Переопределение кнопки для загрузки; errorMessage: ReactNode — Сообщение об ошибке (появится при state='error'); children: ReactNode — Содержимое подсказки; children: (file: FileInfo) => ReactNode — Функция отрисовки файлов; id: FileId — Идентификатор файла; name: string — Имя файла; size: number — Размер файла в байтах; fileRaw: File — Нативный объект File; progress: boolean — Показывает спиннер загрузки; progressPercentage: number — Процент загрузки (игнорируется если progress не равен true); error: boolean — Показывает иконку ошибки; errorMessage: string — Сообщение об ошибке при наведении на иконку; readonly: boolean — Убирает возможность удалить файл; disabled: boolean — Выключает возможность взаимодействовать с файлом; downloadUrl: string — Ссылка на скачивание файла; onDownload: HandleDownload — Обработчик для кнопки \"скачать файл\"; onRetry: HandleRetry — Обработчик для кнопки \"повторить\"; onDelete: HandleDelete — Обработчик для кнопки \"удалить\"; retryText: string — Переопределение текста подсказки для повтора; deleteText: string — Переопределение текста подсказки для удаления; downloadText: string — Переопределение текста подсказки для скачивания; tooltipProps: Partial<TooltipStatefulProps> — Опции тултипов на внутренних элементах"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "Form",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data entry/Form/Adapters/react-hook-form",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-form-adapters-react-hook-form",
        "codeFolder": "Form",
        "props": "errors: FormErrors — Ошибки валидации формы с сервера; formMethods: UseFormReturn<TFieldValues> — Methods из useForm для доступа к методам формы; config: UseFormProps<TFieldValues> — Конфиг useForm: валидация, дефолтные значения и т.д.; onSubmit: (value: TFieldValues, event?: React.BaseSyntheticEvent) => void — Обработчик успешного сабмита формы; onSubmitError: SubmitErrorHandler<TFieldValues> — Обработчик ошибки сабмита формы; formRef: React.ComponentPropsWithRef<'form'>['ref'] — Ссылка на HTML form элемент; schema: AnyObjectSchema \\ = ZodTypeAny — –; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data entry/Form/Adapters/react-hook-form."
    },
    {
      "priority": "P1",
      "component": "Game",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Feedback/Game/ErrorState",
        "link": "https://hrds.yandex-team.ru/?path=/story/feedback-game-errorstate",
        "codeFolder": "Game",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Feedback/Game/ErrorState."
    },
    {
      "priority": "P1",
      "component": "Gap",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Gap",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "Grid",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "UI Patterns/Модульная сетка",
        "link": "https://hrds.yandex-team.ru/?path=/story/ui-patterns-модульная-сетка",
        "codeFolder": "Grid",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: UI Patterns/Модульная сетка."
    },
    {
      "priority": "P1",
      "component": "HelpTooltip",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Overlay/Tooltip/HelpTooltip",
        "link": "https://hrds.yandex-team.ru/?path=/story/overlay-tooltip-helptooltip",
        "codeFolder": "HelpTooltip",
        "props": "children: ReactNode — Содержимое тултипа (обязательное); icon: ReactElement = InfoIcon \\ — ErrorIcon`; state: 'alert' — Состояние подсказки (normal или alert); triggerClassName: string — Дополнительный класс для кнопки; disabled: boolean = false — Отключенное состояние; className: string — Дополнительный CSS класс; **+ все пропсы от TooltipStateful**: "
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Overlay/Tooltip/HelpTooltip."
    },
    {
      "priority": "P1",
      "component": "hocs",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "hocs",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "hooks",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "hooks",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "HrdsSettings",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "HrdsSettings",
        "props": "children: ReactNode — Содержимое приложения; appContainer: HTMLElement \\ = null — `document.body`; popupContainer: HTMLElement \\ = null — `appContainer`; timeZone: string — Временная зона для компонентов работающих с датой/временем"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "HrNumberInput",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/Input/NumberInput",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-input-numberinput",
        "codeFolder": "HrNumberInput",
        "props": "value: number — Значение поля ввода.; onChange: (value: number) => void — Обработчик изменения значения.; placeholder: string — Плейсхолдер текста.; formatOptions: Intl.NumberFormatOptions — Настройки форматирования (валюта, проценты, единицы и т.д.).; locale: string = из `lang — Локаль для форматирования чисел.; step: number — Шаг изменения значения.; minValue: number — Минимальное значение.; maxValue: number — Максимальное значение.; hasStepper: boolean — Показать кнопки управления +/-.; hasReset: boolean — Показать кнопку сброса значения.; saveOnInput: boolean — Вызывать onChange при каждом вводе символа.; view: 'outline' \\ = 'surface' \\ — 'ghost'`; size: 's' \\ = 'm' — `'m'`; state: 'error' — Состояние поля (ошибка).; disabled: boolean — Отключает поле.; readOnly: boolean — Делает поле только для чтения.; required: boolean — Обязательное поле.; width: string \\ = number \\ — 'fill'`; slotLeft: InputBaseSlot — Левый слот для дополнительных элементов.; slotRight: InputBaseSlot — Правый слот для дополнительных элементов.; inputSize: number — HTML-атрибут size для поля.; decrementAriaLabel: string — Aria-label для кнопки уменьшения значения.; incrementAriaLabel: string — Aria-label для кнопки увеличения значения.; isInvalid: boolean — Признак невалидности поля.; isWheelDisabled: boolean — Отключить изменение значения колесиком мыши.; className: string — Дополнительный CSS-класс.; innerRef: RefObject<HTMLInputElement> — Ссылка на DOM-элемент."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data Entry/Input/NumberInput."
    },
    {
      "priority": "P1",
      "component": "HrTable",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "current",
        "title": "Data display/HrTable",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-hrtable",
        "codeFolder": "HrTable",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: current; story: Data display/HrTable."
    },
    {
      "priority": "P1",
      "component": "HrTagGroup",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "current",
        "title": "",
        "link": "",
        "codeFolder": "HrTagGroup",
        "props": "children: ReactElement<TagProps, typeof Tag>[] — Массив Tag компонентов; view: 'secondary' \\ = 'outline' \\ — 'ghost' \\; size: 's' \\ = 'xs' — –; onClick: MouseEventHandler<Element> — Обработчик клика для всех тегов (делает их интерактивными); onDelete: MouseEventHandler<Element> — Обработчик удаления для всех тегов (добавляет крестик); isDisabled: boolean — Выключенное состояние для всех тегов; isInteractive: boolean — Принудительно включает интерактивность для всех тегов; isHoverOnText: boolean — Убирает состояние ховера со слотов для всех тегов; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: current."
    },
    {
      "priority": "P1",
      "component": "Image",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/Media/Image",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-media-image",
        "codeFolder": "Image",
        "props": "src: string — Ссылка на изображение; srcSet: string — Набор источников для адаптивных изображений; sizes: string — Размеры для адаптивных изображений; src2x: string — URL для высокой плотности пикселей (legacy); fallbackSrc: string — Изображение при ошибке загрузки; stub: ReactNode — Placeholder во время загрузки; alt: string — Альтернативный текст; ariaLabel: string — Атрибут aria-label; loading: 'lazy' \\ = 'eager' — `'lazy'`; width: number \\ = string — –; height: number \\ = string — –; borderRadius: number \\ = string — –; onClick: MouseEventHandler — Обработчик клика; className: string — Класс для контейнера; imageClassName: string — Класс для изображения; innerRef: RefObject<HTMLImageElement> — Ссылка на img элемент"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data display/Media/Image."
    },
    {
      "priority": "P1",
      "component": "ImageCropper",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/Media/ImageCropper",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-media-imagecropper",
        "codeFolder": "ImageCropper",
        "props": "src: string — Ссылка на изображение (обязательное); aspect: ImageCropperAspect = ONE_BY_ONE — Соотношение сторон; padding: number = 0 — Отступ вокруг начальной позиции crop; onCropEnd: (blob: Blob \\ = null) => void — –; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data display/Media/ImageCropper."
    },
    {
      "priority": "P1",
      "component": "ImageGroup",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/Media/ImageGroup",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-media-imagegroup",
        "codeFolder": "ImageGroup",
        "props": "images: Image[] — Массив изображений (обязательное); visibleLength: number = images.length — Количество видимых изображений; size: 's' \\ = 'm' \\ — 'l' \\; allItemsUrl: string — Ссылка для кнопки \"показать больше\"; allItemsLabel: ReactNode = +${count} — Подпись к кнопке \"показать больше\"; allItemsHint: string — title для кнопки \"показать больше\"; onAllItemsClick: MouseEventHandler — Обработчик клика в кнопку \"показать больше\"; withAnimation: boolean = false — Анимация при наведении на изображение; hasStaffCard: boolean = false — Показывать стафф-карточку при наведении; theme: 'light' \\ = 'dark' — –; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data display/Media/ImageGroup."
    },
    {
      "priority": "P1",
      "component": "ImagePreloader",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/Media/ImagePreloader",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-media-imagepreloader",
        "codeFolder": "ImagePreloader",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data display/Media/ImagePreloader."
    },
    {
      "priority": "P1",
      "component": "InputBase",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "InputBase",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "IntranetSearch",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Integrations/IntranetSearch/Contrast",
        "link": "https://hrds.yandex-team.ru/?path=/story/integrations-intranetsearch-contrast",
        "codeFolder": "IntranetSearch",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Integrations/IntranetSearch/Contrast."
    },
    {
      "priority": "P1",
      "component": "Language",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Language",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "lib",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "lib",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "MenuItem",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/Menu/MenuItem",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-menu-menuitem",
        "codeFolder": "MenuItem",
        "props": "children: ReactNode — Основное содержимое элемента меню.; as: ElementType = 'button' — Переопределение базового компонента (например, Link для ссылки).; checked: boolean — Выбранное состояние элемента.; onChange: (checked: boolean) => void — Обработчик изменения состояния.; disabled: boolean — Неактивное состояние.; embed: boolean — Убирает отступы внутри для кастомизации содержимого.; align: 'center' \\ = 'top' — `'center'`; multiline: boolean — Включает перенос строк в длинном тексте и подписях.; slotLeft: ReactNode — Дополнительный элемент слева (иконка, аддон).; slotRight: ReactNode — Дополнительный элемент справа (галочка, тумблер, тег).; outerSlotLeft: ReactNode — Элемент слева от основного контента. Рекомендуется для интерактивных элементов (подсказки).; outerSlotRight: ReactNode — Элемент справа от основного контента. Рекомендуется для интерактивных элементов (подсказки).; captionAbove: ReactNode — Дополнительная подпись сверху.; captionBelow: ReactNode — Дополнительная подпись снизу.; isHighlighted: boolean — Выделяет пункт как при ховере.; disableFocusOnClick: boolean — Предотвращает перевод фокуса при клике. Полезно в саджестах."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data display/Menu/MenuItem."
    },
    {
      "priority": "P1",
      "component": "Messenger",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Integrations/Messenger",
        "link": "https://hrds.yandex-team.ru/?path=/story/integrations-messenger",
        "codeFolder": "Messenger",
        "props": "setContainer: (container: HTMLDivElement) => void"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Integrations/Messenger."
    },
    {
      "priority": "P1",
      "component": "Modal",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Modal",
        "props": "children: ReactNode — Содержимое модального окна.; visible: boolean = false — Управляет видимостью модального окна.; onClose: () => void — Обработчик закрытия. Вызывается при нажатии Esc или клике вне области.; contentVerticalAlign: 'top' \\ = 'middle' \\ — 'bottom'`; hasAnimation: boolean = true — Включает анимацию при открытии/закрытии модального окна.; preventBodyScroll: boolean = true — Блокирует прокрутку документа при открытом модальном окне.; trapFocus: boolean = true — Включает ловушку фокуса внутри модального окна.; autoFocus: boolean = true — Автоматически устанавливает фокус на первый интерактивный элемент.; restoreFocus: boolean = true — Возвращает фокус на элемент, который вызвал модальное окно.; restoreFocusRef: RefObject<HTMLElement> — Ссылка на элемент, на который будет возвращен фокус после закрытия.; ariaLabelledBy: string — ID элемента(ов), который описывает модальное окно для скрин-ридеров.; className: string — Дополнительный CSS-класс корневого элемента.; innerRef: Ref<HTMLDivElement> — Ссылка на корневой DOM-элемент компонента.; zIndex: number — Задает слой z-index для модального окна.; scope: RefObject<HTMLElement> \\ = 'inplace' — –; keepMounted: boolean — Сохраняет содержимое в DOM после закрытия."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "ModalLayout",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Overlay/Modal/ModalLayout",
        "link": "https://hrds.yandex-team.ru/?path=/story/overlay-modal-modallayout",
        "codeFolder": "ModalLayout",
        "props": "platform: 'mobile' \\ = 'desktop' — –; title: ReactNode — **Обязательный**. Заголовок модального окна.; subtitle: ReactNode — Подзаголовок под основным заголовком.; children: ReactNode — Основное содержимое модального окна.; actions: ReactNode[] — Кнопки действий (Primary/Secondary), отображаются справа.; slots: ReactNode[] — Дополнительные кнопки слева (desktop) или справа в хедере (mobile).; onClose: () => void — Обработчик закрытия. При наличии показывается кнопка-крестик.; className: string — Дополнительный CSS-класс.; closeButtonLabel: string = i18n('close') — Текст для aria-label у кнопки-крестика."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Overlay/Modal/ModalLayout."
    },
    {
      "priority": "P1",
      "component": "Notifications",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Integrations/Notifications",
        "link": "https://hrds.yandex-team.ru/?path=/story/integrations-notifications",
        "codeFolder": "Notifications",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Integrations/Notifications."
    },
    {
      "priority": "P1",
      "component": "Onboarding",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Onboarding",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "OverlayTreeItem",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "OverlayTreeItem",
        "props": "visible: boolean — * Видимость слоя; overlayTreeItemName: string — * Для дебага"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "PageFooter",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Navigation/PageFooter",
        "link": "https://hrds.yandex-team.ru/?path=/story/navigation-pagefooter",
        "codeFolder": "PageFooter",
        "props": "showLogo: boolean = true — Показывать ли логотип HrTech; logo: ReactNode — Кастомный логотип (заменяет стандартный); logoLinkUrl: string = https://nda.ya.ru/t/TdQbb9dk7VNifW — URL для ссылки с логотипа; baseInfoBlocks: string[] = [] — Информационные блоки (копирайт, версия); baseLinks: BaseLink[] = [] — Базовые ссылки (до 4 видимых, остальные в \"Еще\"); linkGroups: LinkGroup[] — Группы ссылок для расширенного режима; customElement: ReactNode — Кастомный элемент в расширенном режиме; hasDivider: boolean = true — Показывать ли разделитель; onChangeLanguage: (lang: Language) => void — Обработчик смены языка; langOptions: LangOptions — Опции языков для переключателя; moreButtonLabel: string — Текст кнопки \"Еще\" (обязательный); moreLinksPopupProps: PopupProps — Пропсы для попапа с дополнительными ссылками; languageTogglerPopupProps: PopupProps — Пропсы для попапа переключателя языков; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Navigation/PageFooter."
    },
    {
      "priority": "P1",
      "component": "PageHeader",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Navigation/PageHeader",
        "link": "https://hrds.yandex-team.ru/?path=/story/navigation-pageheader",
        "codeFolder": "PageHeader",
        "props": "platform: Platform — Платформа (DESKTOP/MOBILE) (обязательный); desktopLogo: ReactNode — Логотип для desktop версии (обязательный); mobileLogo: ReactNode — Логотип для mobile версии (обязательный); login: string — Логин пользователя для аватара; menuType: MenuType = BURGER — Тип меню (BURGER / TABS); items: IMenuItem[] — Пункты главного меню; tabs: ITabsMenuItem[] — Табы для мобильного режима; services: ReactNode — Компонент AllServices; actions: ReactNode[] — Дополнительные действия в шапке; actionButton: ReactNode — Основная кнопка действия; popupActions: PopupAction[] — Действия в попапе пользователя; intranetSearch: ReactNode — Компонент интранет-поиска; intranetSearchType: IntranetSearchType = popup — Тип отображения поиска; messenger: ReactNode — Компонент мессенджера; notificationBellIncluded: boolean = false — Показать колокольчик уведомлений; getUnviewedPath: string — Путь для получения непрочитанных уведомлений; themeName: ThemeName — Название темы; themeScheme: ThemeScheme — Схема темы (light/dark); themePickerSize: 's' \\ = 'm' — –; onSetTheme: (theme: ThemeName) => void — Обработчик смены темы; onMenuItemClick: MenuItemClickHandler — Обработчик кликов по меню; onTabsMenuItemClick: TabsMenuItemClickHandler — Обработчик кликов по табам; showAvatarSkeleton: boolean = true — Показать скелетон аватара при загрузке; backgroundTransparent: boolean = false — Прозрачный фон шапки; labelServices: string = 'SERVICES' — Лейбл кнопки сервисов; labelMore: ReactNode = 'MORE' — Лейбл кнопки \"Еще\"; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Navigation/PageHeader."
    },
    {
      "priority": "P1",
      "component": "PaletteGeneration",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Foundation/Mode/Palette/Примеры",
        "link": "https://hrds.yandex-team.ru/?path=/story/foundation-mode-palette-примеры",
        "codeFolder": "PaletteGeneration",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Foundation/Mode/Palette/Примеры."
    },
    {
      "priority": "P1",
      "component": "PersonTag",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/Tags/PersonTag",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-tags-persontag",
        "codeFolder": "PersonTag",
        "props": "user: { login?: string; fullname: string } — Данные пользователя (обязательное); size: 's' \\ = 'm' — `'m'`; isStaffLink: boolean = false — Ссылка на страницу пользователя в Staff; hasStaffCard: boolean = false — Показ карточки пользователя при hover; theme: 'light' \\ = 'dark' — –; onClick: () => void — Обработчик клика; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data display/Tags/PersonTag."
    },
    {
      "priority": "P1",
      "component": "Popup",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Overlay/Popup",
        "link": "https://hrds.yandex-team.ru/?path=/story/overlay-popup",
        "codeFolder": "Popup",
        "props": "visible: boolean = false — Делает попап видимым; anchor: RefObject<HTMLElement \\ = VirtualElement> — –; target: 'anchor' — Позиционирование попапа относительно переданного элемента; direction: Direction \\ = Direction[] — `['bottom-start', ...]`; hasTail: boolean — Включает/отключает хвостик у попапа; children: ReactNode \\ = ((props: { tailRef?: Ref<HTMLDivElement> }) => ReactNode) — –; slotTop: ReactElement — Дополнительный контент перед основным содержимым; slotBottom: ReactElement — Дополнительный контент после основного содержимого; scope: RefObject<HTMLElement> \\ = 'inplace' — `RefObject<HTMLBodyElement>`; onClose: OnClose — Обработчик, вызывающийся после нажатия на клавишу esc или клика вне контейнера; mainOffset: number = 0` (или `4` если `hasTail=false`) — Отступ попапа относительно основного направления; secondaryOffset: number = 0 — Отступ попапа относительно второстепенного направления; tailOffset: number = 0 — Отступ хвостика от края попапа; tailSize: number = 24 — Задает размер хвостика; zIndex: number = 1400 — Задает слой z-index; nonvisual: boolean — Убирает стили попапа влияющие на визуальный стиль; hideOffscreen: boolean — Прячет попап если он находится за пределами контейнера/экрана; viewportOffset: number = 16 — Отступ от края окна браузера; keepMounted: boolean = true — Сохраняет содержимое в документе после закрытия; innerRef: Ref<HTMLDivElement> — Ссылка на корневой DOM-элемент компонента; tailRef: Ref<HTMLDivElement> — Ссылка на DOM-элемент хвостика"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Overlay/Popup."
    },
    {
      "priority": "P1",
      "component": "Portal",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Portal",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "Progress",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Feedback/Progress/LineProgress",
        "link": "https://hrds.yandex-team.ru/?path=/story/feedback-progress-lineprogress",
        "codeFolder": "Progress",
        "props": "value: number = 0 — Текущее значение прогресса от 0 до maxValue; maxValue: number = 1 — Максимальное значение прогресса; timing: 'linear' — Способ CSS-анимации при изменении ширины; style: CSSProperties — Пользовательские стили и CSS переменные; className: string — Дополнительный CSS класс; innerRef: RefObject<HTMLDivElement> — Ссылка на корневой DOM-элемент"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Feedback/Progress/LineProgress."
    },
    {
      "priority": "P1",
      "component": "RadialProgress",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Feedback/Progress/RadialProgress",
        "link": "https://hrds.yandex-team.ru/?path=/story/feedback-progress-radialprogress",
        "codeFolder": "RadialProgress",
        "props": "maxValue: number — Максимальный результат (обязательный); value: number — Текущий результат (обязательный); size: 'xs' \\ = 's' \\ — 'm' \\; color: RadialProgressColor — Цвет прогресса; isFilled: boolean = false — Заливка центрального круга; hasInitialAnimation: boolean = false — Начальная анимация при монтировании; indeterminate: boolean = false — Бесконечная анимация (крутилка); disabled: boolean = false — Отключенное состояние; tooltip: ReactNode — Описание в тултипе; content: ReactNode — Контент внутри прогресса; style: CSSProperties — Пользовательские стили и CSS переменные; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Feedback/Progress/RadialProgress."
    },
    {
      "priority": "P1",
      "component": "RadioButton",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data entry/RadioButton",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-radiobutton",
        "codeFolder": "RadioButton",
        "props": "options: IRadioButtonOption[] — Набор опций для выбора (обязательный); value: string — Выбранное значение; onChange: ChangeEventHandler<HTMLInputElement> — Обработчик изменения значения; name: string = useUniqueId() — HTML атрибут name для группировки; size: 's' \\ = 'm' \\ — 'l'`; view: 'default' \\ = 'contrast' — `'default'`; disabled: boolean = false — Отключенное состояние; fullWidth: boolean = false — Растянуть на всю ширину контейнера; aria-label: string — Метка для радиогруппы (accessibility); className: string — Дополнительный CSS класс; style: CSSProperties — Пользовательские стили; innerRef: RefObject<HTMLSpanElement> — Ссылка на корневой DOM-элемент"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data entry/RadioButton."
    },
    {
      "priority": "P1",
      "component": "Services",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Integrations/Services",
        "link": "https://hrds.yandex-team.ru/?path=/story/integrations-services",
        "codeFolder": "Services",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Integrations/Services."
    },
    {
      "priority": "P1",
      "component": "Skeleton",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Feedback/Progress/Skeleton",
        "link": "https://hrds.yandex-team.ru/?path=/story/feedback-progress-skeleton",
        "codeFolder": "Skeleton",
        "props": "type: 'text' \\ = 'control' \\ — 'avatar'`; size: 's' \\ = 'm' \\ — 'l'`; animation: boolean = true — Включить анимацию пульсации.; style: React.CSSProperties — Кастомные CSS-стили для точной настройки размеров и внешнего вида.; className: string — Дополнительный CSS-класс."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Feedback/Progress/Skeleton."
    },
    {
      "priority": "P1",
      "component": "Slot",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Slot",
        "props": "children: ReactNode — Содержимое слота.; hasDivider: boolean — Добавляет разделитель после контента в левом слоте и до контента в правом.; hasInlineDivider: boolean — Добавляет разделитель между элементами слота.; spaces: 'input' \\ = 'action' — `'input'`; gap: 's' \\ = 'm' — `'s'`; padding: 's' \\ = 'm' — `'s'`; isDisabled: boolean — Выключенное состояние.; className: string — Дополнительный CSS-класс."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "Spinner",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Feedback/Progress/Spinner",
        "link": "https://hrds.yandex-team.ru/?path=/story/feedback-progress-spinner",
        "codeFolder": "Spinner",
        "props": "size: 'xs' \\ = 's' \\ — 'm' \\; position: 'default' \\ = 'center' — `'default'`; innerRef: RefObject<HTMLDivElement> — Ссылка на корневой DOM-элемент компонента.; className: string — Дополнительный CSS-класс."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Feedback/Progress/Spinner."
    },
    {
      "priority": "P1",
      "component": "StaffCardLoader",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "StaffCardLoader",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "StartPopup",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Overlay/StartPopup",
        "link": "https://hrds.yandex-team.ru/?path=/story/overlay-startpopup",
        "codeFolder": "StartPopup",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Overlay/StartPopup."
    },
    {
      "priority": "P1",
      "component": "State",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "State",
        "props": "slot: ReactElement<StateSlotProps, typeof StateSlot> — Элемент слота для изображения или произвольного контента; description: StateDescriptionProps — Заголовок, подзаголовок и мета-информация (обязательный); actions: ComponentProps<'div'> — Свойства контейнера с действиями; children: ReactElement \\ = ReactElement[] — –; size: 's' \\ = 'm' \\ — 'l'`; title: ReactNode — Контент заголовка; subtitle: ReactNode — Контент подзаголовка; meta: ReactNode — Мета-информация, которую можно скопировать (например, для дебага); isCopyDisabled: boolean — Отключает копирование мета-информации; as: TElement extends React.ElementType = 'div' — HTML-тег для рендеринга слота; aspectRatio: '1-1' \\ = '4-3' \\ — '3-2' \\; width: string \\ = number — –"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "storybook",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "storybook",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "Suggest",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/Suggest/🚫 Suggest/Автокомплит",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-suggest-suggest-автокомплит",
        "codeFolder": "Suggest",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data Entry/Suggest/🚫 Suggest/Автокомплит."
    },
    {
      "priority": "P1",
      "component": "Table",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "UI Patterns/Table/Cookbook/Basic",
        "link": "https://hrds.yandex-team.ru/?path=/story/ui-patterns-table-cookbook-basic",
        "codeFolder": "Table",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: UI Patterns/Table/Cookbook/Basic."
    },
    {
      "priority": "P1",
      "component": "tests",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "tests",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "Text",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/Text",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-text",
        "codeFolder": "Text",
        "props": "children: ReactNode — Содержимое текста.; typography: 'captionS' \\ = 'captionM' \\ — 'labelS' \\; color: 'primary' \\ = 'secondary' \\ — 'disabled' \\; weight: 'regular' \\ = 'medium' — `'regular'`; align: 'left' \\ = 'center' \\ — 'right'`; maxVisibleLines: number \\ = null — –; overflowTooltipProps: TooltipProps \\ = null — –; as: ElementType = 'p' — HTML-тег для рендеринга.; refOnText: RefObject<HTMLElement> — Ссылка на DOM-элемент."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data display/Text."
    },
    {
      "priority": "P1",
      "component": "Theme",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Theme",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "ThemePicker",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Foundation/Mode/Theme/ThemePicker",
        "link": "https://hrds.yandex-team.ru/?path=/story/foundation-mode-theme-themepicker",
        "codeFolder": "ThemePicker",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Foundation/Mode/Theme/ThemePicker."
    },
    {
      "priority": "P1",
      "component": "TimeZone",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "TimeZone",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "UsersGroup",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/UsersGroup",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-usersgroup",
        "codeFolder": "UsersGroup",
        "props": "size: UserAvatarProps['size'] — Размер аватаров ('s', 'm', 'l') (обязательное); logins: string[] — Список логинов из Yandex Staff (обязательное); hosts: Hosts = hostsPreset — Hosts для формирования URL аватаров; hasStaffCard: boolean = false — Показ стафф-карточки при наведении; theme: Theme — Тема для стафф-карточки ('light', 'dark'); className: string — Дополнительный CSS класс"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data display/UsersGroup."
    },
    {
      "priority": "P1",
      "component": "yfm",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/YFM/Main",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-yfm-main",
        "codeFolder": "yfm",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: active; story: Data Entry/YFM/Main."
    },
    {
      "priority": "P1",
      "component": "Button · Dropdown",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Button · Dropdown",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Button",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=28069-153668",
        "props": "← Label: text (default: 'Label'); Slot →: instance_swap; Slot ←: instance_swap; ← Icon: instance_swap; Variant: [Text, Icon] (default: Text); Size: [S, M] (default: M); View: [Primary, Secondary, Outline, Ghost, Surface, Float, Media] (default: Primary); State: [—, Loading, Disabled] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Button · Toggle",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Button · Toggle",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Button",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=26856-87698",
        "props": "← Label: text (default: 'Label'); Slot →: instance_swap; Slot ←: instance_swap; ← Icon: instance_swap; Variant: [Text, Icon] (default: Text); Size: [S, M] (default: M); View: [Secondary, Outline, Ghost, Surface] (default: Secondary); State: [—, Loading, Disabled] (default: —); ↳ Selected: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Checkbox · Base",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Checkbox · Base",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Checkbox",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=849-44458",
        "props": "State: [—, Error, Disabled] (default: —); ↳ Selected: [on, off] (default: off); ↳ Mixed: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Date Picker [mobile]",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Date Picker [mobile]",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Date Picker и Calendar",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=42610-122004",
        "props": "has Slot ↓: boolean (default: False); ↳ Slot: instance_swap; has Slot ↑: boolean (default: False); is Modal: [off, on] (default: on)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Dropdown [mobile]",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Dropdown [mobile]",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Dropdown",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=25974-20526",
        "props": "has Group · 4: boolean (default: False); has Group · 3: boolean (default: False); has Group · 2: boolean (default: False); ↳ Slot: instance_swap; has Slot ↓: boolean (default: False); has Slot ↑: boolean (default: False); Height: [Hug, Fill / Fixed] (default: Hug); State: [—, Empty, Loading, Error] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Form · Preset",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Form · Preset",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Form",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=42699-142562",
        "props": "Preset: [Default, Sections, Group, Group · Edit, List, List · Edit, Modal, Modal · Scroll] (default: Default)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Input · Number",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Input · Number",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Input",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=19447-27511",
        "props": "← Placeholder: text (default: 'Placeholder'); ← Value: text (default: '0'); Slot ←: instance_swap; Slot →: instance_swap; Size: [S, M] (default: M); View: [Outline, Ghost, Surface] (default: Outline); State: [—, Error, Read-only, Disabled] (default: —); ↳ Filled: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Navigation_NEW",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Page · Sidebar",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=59745-9053",
        "props": "Compact: [on, off] (default: off); Device: [desktop, mobile] (default: desktop); mode: [domain, kpb, crowd, external, loading] (default: domain)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Radiobox · Base",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Radiobox · Base",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Radiobox",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=47524-13584",
        "props": "State: [—, Error, Disabled] (default: —); ↳ Selected: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Slider · Centered",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Slider · Centered",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Slider",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=24346-19064",
        "props": "← Value · Max: text (default: '100'); ← Value · Min: text (default: '−100'); has Min / Max: boolean (default: True); has Input: boolean (default: True); State: [—, Read-only, Disabled] (default: —); has Labels: [off, on] (default: off); has Steps: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Slider · Range",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Slider · Range",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Slider",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=24346-19646",
        "props": "← Value · Max: text (default: '100'); ← Value · Min: text (default: '0'); has Min / Max: boolean (default: True); has Input: boolean (default: True); State: [—, Read-only, Disabled] (default: —); has Labels: [off, on] (default: off); has Steps: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "State · Empty",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ State · Empty",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ State",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=25852-75729",
        "props": "Preset: [Search, Filter, Notification, Search · User, Add, Create] (default: Add)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "State · Error",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ State · Error",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ State",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=25861-311",
        "props": "Preset: [400, 401, 403, 404, 500, Offline, Loading] (default: 400)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "State · Success",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ State · Success",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ State",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=25861-490",
        "props": "Preset: [Add, Create, Update] (default: Add)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Switch · Base",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Switch · Base",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Switch",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=47524-7179",
        "props": "State: [—, Error, Disabled] (default: —); ↳ Selected: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Tag · Dropdown",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Tag · Dropdown",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Tag",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=29221-372630",
        "props": "← Label: text (default: 'Label'); Slot →: instance_swap; Slot ←: instance_swap; ← Icon: instance_swap; Variant: [Text, Icon] (default: Text); View: [Secondary, Outline, Ghost, Surface] (default: Outline); State: [—, Error, Disabled] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Tag · Status",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Tag · Status",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Tag",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=30738-540972",
        "props": "← Label: text (default: 'Label'); Slot →: instance_swap; Slot ←: instance_swap; ← Icon: instance_swap; Variant: [Text, Icon] (default: Text); Color: [Neutral, Red, Green, Blue, 🚫 Indigo, Purple, Orange] (default: Red); Size: [XS, S] (default: S); State: [—, Disabled] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "Tag · Toggle",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Tag · Toggle",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Tag",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=29221-373479",
        "props": "← Label: text (default: 'Label'); Slot →: instance_swap; Slot ←: instance_swap; View: [Secondary, Outline, Ghost, Surface] (default: Outline); State: [—, Disabled] (default: —); ↳ Selected: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: active; Storybook/code: нет пары."
    },
    {
      "priority": "P1",
      "component": "FAB",
      "issueType": "missing code props",
      "fixArea": "Storybook/code docs",
      "reason": "У Figma есть свойства, но в индексе не хватает code props для проверки соответствия.",
      "action": "Дописать props/API в индекс или Storybook docs, чтобы Figma variants можно было сверить с кодом.",
      "details": "Figma props present, code props missing in index; ❇️ FAB",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ FAB",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=27420-24945",
        "props": "Variant: [—, Button → Group, Dropdown] (default: —); View: [Primary, Float] (default: Float); Stack: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/FloatingActionButton",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-floatingactionbutton",
        "codeFolder": "FloatingActionButton",
        "props": ""
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data Entry/FloatingActionButton."
    },
    {
      "priority": "P1",
      "component": "State",
      "issueType": "missing code props",
      "fixArea": "Storybook/code docs",
      "reason": "У Figma есть свойства, но в индексе не хватает code props для проверки соответствия.",
      "action": "Дописать props/API в индекс или Storybook docs, чтобы Figma variants можно было сверить с кодом.",
      "details": "Figma props present, code props missing in index; ❇️ State",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ State",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=47626-269124",
        "props": "has Meta: boolean (default: True); ↳ Copy: boolean (default: True); has Buttons: boolean (default: True); has Media: boolean (default: True); Size: [S, M, L] (default: M)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Feedback/🚫 ErrorState/Как задать изображение",
        "link": "https://hrds.yandex-team.ru/?path=/story/feedback-errorstate-как-задать-изображение",
        "codeFolder": "ErrorState",
        "props": ""
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Feedback/🚫 ErrorState/Как задать изображение."
    },
    {
      "priority": "P1",
      "component": "Tag · Group",
      "issueType": "missing code props",
      "fixArea": "Storybook/code docs",
      "reason": "У Figma есть свойства, но в индексе не хватает code props для проверки соответствия.",
      "action": "Дописать props/API в индекс или Storybook docs, чтобы Figma variants можно было сверить с кодом.",
      "details": "Figma props present, code props missing in index; 🔄 Tag · Group",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "deprecated",
        "page": "🔄 Retro",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=800-20330",
        "props": "Content: [◇ Tag, ◇ Tag · Person] (default: ◇ Tag); Amount: [2, 3, 4, 5, 6, 7, 8] (default: 2)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data display/Tags/🚫 TagGroup",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-tags-taggroup",
        "codeFolder": "TagGroup",
        "props": ""
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: deprecated; Storybook/code: deprecated; story: Data display/Tags/🚫 TagGroup."
    },
    {
      "priority": "P1",
      "component": "Breadcrumbs",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma value 'Items=2' not found in code; Figma value 'Items=3' not found in code; Figma value 'Items=5' not found in code; Figma value 'Items=6' not found in code; Figma value 'Items=1' not found in code; Figma property 'Overflow' not found in code props",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Breadcrumbs",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=1072-23630",
        "props": "Items: [—, 2, 3, 4, 5, 6, 1] (default: —); Overflow: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Navigation/Breadcrumbs",
        "link": "https://hrds.yandex-team.ru/?path=/story/navigation-breadcrumbs",
        "codeFolder": "Breadcrumbs",
        "props": "items`\\*: IBreadcrumbsItem[] — Массив элементов навигационной цепочки.; view`\\*: 'return' \\ = 'crumbs' — –; returnItem`\\*: IBreadcrumbsItem — Элемент для кнопки \"Назад\" (для view=return и мобильных экранов).; onReturnClick: BreadcrumbsItemClickHandler — Обработчик клика по кнопке \"Назад\".; onItemClick: BreadcrumbsItemClickHandler — Обработчик клика по элементу навигации.; hiddenEllipsis: boolean = true — Скрывать промежуточные элементы в выпадающем меню, если элементов больше 4.; className: string — Дополнительные CSS-классы для корневого элемента."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Navigation/Breadcrumbs."
    },
    {
      "priority": "P1",
      "component": "Card",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Code props present, Figma props empty; ⏳ Card",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Card",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=9991-967",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/Card",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-card",
        "codeFolder": "Card",
        "props": "platform: 'desktop' \\ = 'mobile' — –; viewport: 'horizontal' \\ = 'vertical' — `'vertical'`; title: ReactNode — Заголовок карточки; subtitle: ReactNode — Подзаголовок карточки; image: string — URL изображения; imageViewport: IImageViewport — Настройки отображения изображения; actions: ReactNode[] — Элементы действий в футере (справа); headerLeftSlots: ReactNode[] — Слоты слева в заголовке; headerRightSlots: ReactNode[] — Слоты справа в заголовке; footerSlots: ReactNode[] — Слоты в футере (слева); checked: boolean — Состояние выделения (outline); isHoverable: boolean — Hover эффект с тенью; children: ReactNode — Основное содержимое карточки; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Data display/Card."
    },
    {
      "priority": "P1",
      "component": "Drawer",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma property 'Position' not found in code props; Figma value 'Scroll=off' not found in code; ❇️ Drawer",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Drawer",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=40337-53749",
        "props": "has Header: boolean (default: True); ← Content: instance_swap; has Pull-Bar: boolean (default: True); has Footer: boolean (default: True); Position: [Bottom, Right] (default: Right); has Scroll: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Overlay/Drawer",
        "link": "https://hrds.yandex-team.ru/?path=/story/overlay-drawer",
        "codeFolder": "Drawer",
        "props": "children: ReactNode — Основное содержимое шторки.; visible: boolean — Управляет видимостью шторки.; onClose: (event?: React.MouseEvent) => void — Функция, вызываемая при попытке закрытия шторки.; direction: 'bottom' \\ = 'top' \\ — 'left' \\; titleComponent: ReactNode — Компонент заголовка шторки.; maxSize: string — Максимальный размер шторки (ширина или высота в зависимости от direction).; nested: boolean — Меняет внешний вид для режима \"шторка внутри шторки\".; dragDisabled: boolean — Делает шторку \"статичной\" (отключает возможность перетаскивания).; autoFocus: boolean = false — Выставляет фокус на первый интерактивный элемент в шторке.; curtainClassName: string — Класс контейнера содержимого (для установки max-width для боковых шторок).; onCloseEnd: () => void — Функция, вызываемая при завершении анимации закрытия шторки.; onOpenEnd: () => void — Функция, вызываемая при завершении анимации открытия шторки.; preventScrollDisabled: boolean — Отключает блокировку прокрутки страницы.; preventScrollOnClose: boolean — Блокировка скролла до полного закрытия шторки.; animation: IDrawerAnimationParams = см. ниже — Параметры анимации шторки.; slotTop: React.ReactElement — Дополнительный контент сверху.; slotBottom: React.ReactElement — Дополнительный контент снизу.; dialogAriaLabel: string — Атрибут aria-label на элементе с ролью 'dialog'.; ariaHidden: boolean — Атрибут aria-hidden на корневом элементе.; initSpringDisabled: boolean — Отключает spring-анимацию при инициализации.; tension: number = 230 — Параметр упругости для spring-анимации.; friction: number = 24 — Параметр трения для spring-анимации.; disabled: boolean — Отключает spring-анимации (полезно для автотестов).; dragImmediate: boolean — Отключает анимации во время перетаскивания для большей отзывчивости."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Overlay/Drawer."
    },
    {
      "priority": "P1",
      "component": "Icon",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma value 'Size=2-XS' not found in code; Figma value 'Size=XL' not found in code; Figma value 'Size=2-XL' not found in code; ❇️ Icon",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Иконки",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=26251-73313",
        "props": "← Icon: instance_swap; Size: [2-XS, XS, S, M, L, XL, 2-XL] (default: 2-XS)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Icon",
        "props": "size: '2xs' \\ = 'xs' \\ — 's' \\; direction: 'left' \\ = 'top' \\ — 'right' \\; color: 'secondary' \\ = 'tertiary' \\ — 'error' \\; title: string — Всплывающая подсказка.; onClick: MouseEventHandler<HTMLSpanElement> — Обработчик клика по иконке.; style: CSSProperties = {} — CSS-стили иконки.; className: string — Дополнительный класс.; children: ReactElement — Контент иконки (обычно SVG)."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "Inline Notification",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma value 'View=Contrast' not found in code",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Inline Notification",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=2225-24566",
        "props": "View: [Default, Info, Error, Contrast] (default: Default)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Feedback/Notifications/InlineNotification",
        "link": "https://hrds.yandex-team.ru/?path=/story/feedback-notifications-inlinenotification",
        "codeFolder": "InlineNotification",
        "props": "children: ReactNode — Содержимое уведомления, обязательное поле (рекомендуется до 2 строк); view: 'default' \\ = 'error' \\ — 'info' \\; icon: ReactNode — Иконка в левом слоте баннера; onClose: () => void — Коллбэк для закрытия (если не передан, крестик не отображается); className: string — Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Feedback/Notifications/InlineNotification."
    },
    {
      "priority": "P1",
      "component": "List",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma property 'Items' not found in code props",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ List",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=1111-46844",
        "props": "Items: [2, 3, 4, 5, 6, 7, 8] (default: 2)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/ListItem",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-listitem",
        "codeFolder": "ListItem",
        "props": "border: 'none' \\ = 's' \\ — 'm' \\; padding: 'none' \\ = 's' \\ — 'm' \\; leading: ReactNode — Контент слева (иконки, аватары); trailing: ReactNode — Контент справа (кнопки, теги, badge); children: ReactNode — Основной контент (занимает всю доступную ширину); onClick: () => void — Обработчик клика (делает элемент интерактивным); disabled: boolean = false — Отключенное состояние; embed: boolean = false — Встраиваемый вид без фона и отступов; fitContent: boolean = false — Сжать ширину по содержимому; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Data display/ListItem."
    },
    {
      "priority": "P1",
      "component": "Pagination",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma property 'Items' not found in code props",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Pagination",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=1591-118356",
        "props": "has Amount Select: boolean (default: True); ← Page Amount: text (default: '/ 8'); ← Current Page: text (default: '1'); has Page Input: boolean (default: True); Items: [—, 2, 3, 4, 5, 6, 7, 8, 8 and more] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Navigation/Pagination",
        "link": "https://hrds.yandex-team.ru/?path=/story/navigation-pagination",
        "codeFolder": "Pagination",
        "props": "pagesCount: number — Общее количество страниц (обязательный); currentPage: number — Текущая активная страница (обязательный); pageLinkConstructor: PageLinkConstructorFunc — Функция генерации ссылок (обязательный); onPageChange: PageChangeFunc — Обработчик смены страницы; pageSize: number = 10 — Количество элементов на странице; onPageSizeChange: PageSizeChangeFunc — Обработчик смены размера страницы; hasPageNumberInput: boolean = false — Показать поле ввода номера страницы; hasPageSizeSelect: boolean = false — Показать селект размера страницы; pageSizeSelectOptions: number[] = [10, 50, 100] — Опции для выбора размера страницы; hideArrows: boolean = false — Скрыть стрелки навигации; isTiny: boolean = false — Компактный режим (текущая/общее); floatPageRegionSize: number = 5 — Размер группы видимых страниц; paginationName: string — Название пагинации для ARIA; paginationI18nKeyset: PaginationCustomI18nKeyset — Кастомная локализация; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Navigation/Pagination."
    },
    {
      "priority": "P1",
      "component": "Steps",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma property 'Items' not found in code props",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Steps",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=1096-35824",
        "props": "Items: [2, 3, 4, 5, 6, 7, 8] (default: 2)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Navigation/Stepper",
        "link": "https://hrds.yandex-team.ru/?path=/story/navigation-stepper",
        "codeFolder": "Stepper",
        "props": "steps: IStepperStep[] — Список шагов (обязательный); current: string \\ = number — –; onStepChanged: (idx: number, id: string) => void — Функция, вызываемая при переходе на другой шаг; stepsClickable: string[] — Список ID шагов, на которые можно перепрыгнуть вперед; completedIcon: (className: string) => ReactNode = CheckIcon — Иконка для завершенных шагов; disabled: boolean = false — Выключенное состояние; infinite: boolean = true — Показать луч прогресса после последнего шага; inline: boolean = false — Горизонтальное расположение title и description; className: string — Дополнительный CSS класс; id: string = Уникальный идентификатор шага (обязательный); title: () => ReactNode = Функция, возвращающая название шага (обязательная); description: () => ReactNode = Функция, возвращающая описание шага; icon: (className: string) => ReactNode = Функция, возвращающая кастомную иконку шага; stepClassName: string = Дополнительный CSS класс для шага"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Navigation/Stepper."
    },
    {
      "priority": "P1",
      "component": "TabsMenu",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma property 'Items' not found in code props; Figma property 'Width' not found in code props; ⏳ TabsMenu",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Tab-Menu",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=824-5534",
        "props": "Items: [2, 3, 4, 5, 6, 7, 8] (default: 2); Width: [Auto, Fixed] (default: Auto)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Navigation/TabsMenu",
        "link": "https://hrds.yandex-team.ru/?path=/story/navigation-tabsmenu",
        "codeFolder": "TabsMenu",
        "props": "tabs: ITabsMenuTabProps[] — Массив пунктов меню. Каждый содержит id, content, onClick, disabled; activeTab: string — Идентификатор активного пункта меню; onChange: (tabId: string) => void — Функция, вызываемая при изменении активного пункта меню; size: 's' \\ = 'm' \\ — 'l'`; layout: 'horiz' — Горизонтальное расположение (по умолчанию вертикальное); marker: boolean — Включает подчеркивание активного элемента; adaptive: boolean — Включает адаптивность с кнопкой \"Ещё\" для скрытых табов; moreText: string = 'Ещё' — Текст кнопки для скрытых табов (только с adaptive); staticMoreText: boolean — Текст кнопки \"Ещё\" не будет меняться при выборе внутреннего таба; hideMoreIcon: boolean — Скрывает иконку в кнопке \"Ещё\"; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Navigation/TabsMenu."
    },
    {
      "priority": "P1",
      "component": "Toast",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma property 'View' not found in code props",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Toast",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=4801-13741",
        "props": "View: [Default, Error] (default: Default)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Toastify",
        "props": "className: string — CSS-класс для стилизации контейнера.; closeButton: boolean = true — Показать или скрыть кнопку закрытия.; platform: Platform.DESKTOP \\ = Platform.MOBILE — `DESKTOP`; portalProps: Omit<PortalProps, 'children'> — Настройки портала для рендеринга.; autoClose: number \\ = false — `5000`; hideProgressBar: boolean = true — Скрыть индикатор прогресса.; limit: number = 1 — Максимальное количество тостов на экране одновременно.; containerId: string — ID контейнера для мультиконтейнерного режима.; enableMultiContainer: boolean — Включить поддержку нескольких контейнеров.; description: string — **Обязательное.** Текст уведомления (ограничение – 2 строки).; icon: ReactNode — Иконка слева от текста. Ожидается размер `l`.; buttonLabel: ReactNode — Текст на кнопке действия.; action: () => void — Функция, выполняемая при клике на кнопку.; className: string — CSS-класс для стилизации содержимого."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active."
    },
    {
      "priority": "P1",
      "component": "Tooltip",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma props present, code props missing in index; ⏳ Tooltip",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Tooltip",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=9771-96254",
        "props": "← Description: text (default: 'Description'); Color: [Neutral, Red] (default: Neutral)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Overlay/Tooltip",
        "link": "https://hrds.yandex-team.ru/?path=/story/overlay-tooltip",
        "codeFolder": "Tooltip",
        "props": ""
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Overlay/Tooltip."
    },
    {
      "priority": "P1",
      "component": "User · Avatar",
      "issueType": "status drift",
      "fixArea": "Figma + Storybook/code",
      "reason": "Figma говорит, что компонент ещё in progress, а код уже выглядит доступным для использования.",
      "action": "Обновить статус в Figma до active или явно оставить WIP с заметкой, почему production API уже есть.",
      "details": "Figma in progress, code already active; Figma value 'Size=24' not found in code; Figma value 'Size=32' not found in code; Figma value 'Size=40' not found in code; Figma value 'Size=48' not found in code; Figma value 'Size=56' not found in code; Figma property 'State' not found in code props; Figma property 'Status' not found in code props",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ User Avatar",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=7439-40620",
        "props": "Size: [24, 32, 40, 48, 56] (default: 24); State: [—, disabled] (default: —); has Status: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/UserAvatar",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-useravatar",
        "codeFolder": "UserAvatar",
        "props": "block: boolean = false — Включение блочного отображения; size: 'xs' \\ = 's' \\ — 'm' \\; icon: string = стандартная заглушка — Ссылка на изображение аватара; alt: string — Альтернативный текст для изображения; gap: GapType — Тип гэпа (отпуск/состояние); dismissed: boolean = false — Состояние \"уволен\"; staffCardParams: { login: string } — Параметры для стафф-карточки; theme: 'light' \\ = 'dark' — автоопределение; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: active; story: Data display/UserAvatar."
    },
    {
      "priority": "P2",
      "component": "Badge",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data display/Badge/🚫 Badge",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-badge-badge",
        "codeFolder": "Badge",
        "props": "content: ReactNode — Содержимое, отображаемое внутри значка (текст, число, иконка).; children: ReactNode — Дочерние элементы (иконка, кнопка), поверх которых показывается Badge.; color: string = 'var(--hr-color-spectre-red-500)' — Цвет заливки блока.; textColor: string = '#fff' — Цвет текста блока.; outlineColor: string = 'var(--hr-color-surface-100)' — Цвет обводки блока.; withGhostButton: boolean — Специальная настройка позиционирования для кнопок типа ghost.; innerRef: RefObject<HTMLDivElement> — Ссылка на корневой DOM-элемент компонента.; style: CSSProperties — Пользовательские стили.; className: string — Дополнительный класс."
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Data display/Badge/🚫 Badge."
    },
    {
      "priority": "P2",
      "component": "Button",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data entry/Button/🚫 Button",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-button-button",
        "codeFolder": "Button",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Data entry/Button/🚫 Button."
    },
    {
      "priority": "P2",
      "component": "Menu",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data display/Menu/🚫 Menu",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-menu-menu",
        "codeFolder": "Menu",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Data display/Menu/🚫 Menu."
    },
    {
      "priority": "P2",
      "component": "Radiobox",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data Entry/Radio/🚫 Radiobox",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-radio-radiobox",
        "codeFolder": "Radiobox",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Data Entry/Radio/🚫 Radiobox."
    },
    {
      "priority": "P2",
      "component": "Select",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data Entry/Select/🚫 Select",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-select-select",
        "codeFolder": "Select",
        "props": "type: string; glyph: string"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Data Entry/Select/🚫 Select."
    },
    {
      "priority": "P2",
      "component": "Spin",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Feedback/Progress/🚫 Spin",
        "link": "https://hrds.yandex-team.ru/?path=/story/feedback-progress-spin",
        "codeFolder": "Spin",
        "props": "innerRef: RefObject<HTMLDivElement> — * Ссылка на корневой DOM-элемент компонента.; progress: boolean — * Видимость индикатора загрузки.; position: 'center' — * Позиция индикатора загрузки.; className: string — * Дополнительный класс.; size: 'xxs' | 'xs' | 's' | 'm' | 'l' — * Размер компонента * * @default m"
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Feedback/Progress/🚫 Spin."
    },
    {
      "priority": "P2",
      "component": "Tag",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data display/Tags/🚫 Tag",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-tags-tag",
        "codeFolder": "Tag",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Data display/Tags/🚫 Tag."
    },
    {
      "priority": "P2",
      "component": "Textarea",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data Entry/Textarea/🚫 Textarea",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-textarea-textarea",
        "codeFolder": "Textarea",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Data Entry/Textarea/🚫 Textarea."
    },
    {
      "priority": "P2",
      "component": "Textinput",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data Entry/Input/🚫 Textinput",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-input-textinput",
        "codeFolder": "Textinput",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Data Entry/Input/🚫 Textinput."
    },
    {
      "priority": "P2",
      "component": "Tumbler",
      "issueType": "code only",
      "fixArea": "Figma library",
      "reason": "В коде есть сущность без понятной пары в Figma. Сначала отделить реальные DS-компоненты от технических папок.",
      "action": "Проверить, является ли это публичным дизайн-компонентом. Если да — добавить/связать Figma component; если нет — пометить как internal/code-only и исключить из долга DS.",
      "details": "no Figma library match",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "not matched",
        "page": "",
        "link": "",
        "props": ""
      },
      "storybook": {
        "version": "13.3.0",
        "status": "deprecated",
        "title": "Data entry/Switch/🚫 Tumbler",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-switch-tumbler",
        "codeFolder": "Tumbler",
        "props": ""
      },
      "matchStatus": "code_only",
      "sourceNote": "Figma: нет пары; Storybook/code: deprecated; story: Data entry/Switch/🚫 Tumbler."
    },
    {
      "priority": "P2",
      "component": "Drawer [mobile]",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ❇️ Drawer [mobile]",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Drawer",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=40337-53337",
        "props": "has Header: boolean (default: True); ↳ Content: instance_swap; has Pull-Bar: boolean (default: True); has Footer: boolean (default: True); has Scroll: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "Dropzone · M",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ File Upload",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=1109-39866",
        "props": "↳ Skeleton: boolean (default: False); View: [Default, Surface] (default: Default); State: [Default, Hover, Focus, Drag & Drop, Error, Disabled, State10, State11, State12, State7, State8, State9] (default: Default)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "Dropzone · S",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index;  Dropzone · S",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ File Upload",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=13277-67357",
        "props": "↳ Skeleton: boolean (default: False); State: [Default, Hover, Focus, Drag & Drop, Error, Disabled] (default: Default); View: [Default, Surface] (default: Default)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "File Upload · M",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ File Upload",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=1109-41682",
        "props": "← Label: boolean (default: True); ← Caption: boolean (default: True); Content: [◇ Button, ◇ Dropzone] (default: ◇ Dropzone); State: [Default, Error] (default: Default); MultiUpload: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "File Upload · S",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ File Upload",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=13277-67519",
        "props": "← Label: boolean (default: True); ← Caption: boolean (default: True); Content: [◇ Button, ◇ Dropzone] (default: ◇ Dropzone); State: [Default, Error] (default: Default); MultiUpload: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "File · M",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ File Upload",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=1109-39946",
        "props": "↳ Skeleton: boolean (default: False); View: [Default, Surface] (default: Default); State: [Default, Progress, Error, Read Only, Disabled] (default: Default)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "File · S",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ File Upload",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=13277-67195",
        "props": "↳ Skeleton: boolean (default: False); View: [Default, Surface] (default: Default); State: [Default, Progress, Error, Read Only, Disabled] (default: Default)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "Hint",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Hint",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=9771-96432",
        "props": "Color: [Neutral, Red] (default: Neutral); State: [—, Hover, Disabled] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "RadioButton · M",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ⏳ RadioButton · M",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ RadioButton → Segmented-Control",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=801-28803",
        "props": "Items: [2, 3, 4, 5, 6, 7, 8] (default: 2); Content: [Text, Icon] (default: Text); View: [Default, Surface] (default: Default); Width: [Auto, Fixed] (default: Auto)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "RadioButton · S",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index; ⏳ RadioButton · S",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ RadioButton → Segmented-Control",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=10370-43175",
        "props": "Items: [2, 3, 4, 5, 6, 7, 8] (default: 2); Content: [Text, Icon] (default: Text); View: [Default, Surface] (default: Default); Width: [Auto, Fixed] (default: Auto)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "Rich Text Editor · YFM",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Rich Text Editor · YFM",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=11797-2903",
        "props": "↳ Skeleton: boolean (default: False); View: [Default, Inline, Surface] (default: Default); State: [Default, Hover, Focus, Error, Disabled] (default: Default); ↳ Filled: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "User · Group",
      "issueType": "figma only",
      "fixArea": "Storybook/code mapping",
      "reason": "В Figma есть компонент или вариант, но нет понятной связи со Storybook/code.",
      "action": "Связать с существующим компонентом в коде или Storybook. Если это только variant, записать mapping; если отдельный компонент — создать story/API или пометить как WIP.",
      "details": "Figma props present, code props missing in index",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ User Group",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=829-22778",
        "props": "Items: [2, 3, 4, 5, 6, 7, 8] (default: 2)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "not matched",
        "title": "",
        "link": "",
        "codeFolder": "",
        "props": ""
      },
      "matchStatus": "figma_only",
      "sourceNote": "Figma: in_progress; Storybook/code: нет пары."
    },
    {
      "priority": "P2",
      "component": "Badge",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma value 'Color=Green' not found in code; Figma value 'Color=Blue' not found in code; Figma value 'Color=Orange' not found in code; Figma value 'Color=Purple' not found in code",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "in_progress",
        "page": "⏳ Badge",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=798-25470",
        "props": "← Label: text (default: '99+'); Variant: [Text, Dot] (default: Text); View: [Primary, Secondary, Surface] (default: Secondary); Color: [Neutral, Red, Green, Blue, Orange, Purple] (default: Neutral)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "current",
        "title": "Data display/Badge/Badge",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-badge-badge",
        "codeFolder": "HrBadge",
        "props": "content: ReactNode — Содержимое, отображаемое внутри значка (текст, число, иконка).; children: ReactNode — Дочерние элементы (иконка, кнопка), поверх которых показывается Badge.; color: SpectreColorName = 'neutral' — `'red'`; outlineColor: 'none' = 'surface0' — 'surface100'; withGhostButton: boolean — Специальная настройка позиционирования для кнопок типа ghost.; innerRef: RefObject<HTMLDivElement> — Ссылка на корневой DOM-элемент компонента.; style: CSSProperties — Пользовательские стили.; className: string — Дополнительный класс.; view: 'primary' = 'secondary' — 'surface'`; variant: 'text' = 'icon' — 'dot'`; size: '2xs' = 'xs_compact' — 'xs'"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: in_progress; Storybook/code: current; story: Data display/Badge/Badge."
    },
    {
      "priority": "P2",
      "component": "Button",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Variant' not found in code props; Figma value 'View=Float' not found in code; Figma value 'View=Media' not found in code; ❇️ Button",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Button",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=26856-86210",
        "props": "← Label: text (default: 'Label'); Slot →: instance_swap; Slot ←: instance_swap; ← Icon: instance_swap; Variant: [Text, Icon] (default: Text); Size: [S, M, L] (default: M); View: [Primary, Secondary, Outline, Ghost, Float, Surface, Media] (default: Primary); State: [—, Loading, Disabled] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "current",
        "title": "",
        "link": "",
        "codeFolder": "HrButton",
        "props": "children: ReactNode — Основной контент кнопки (текст).; view: 'primary' \\ = 'secondary' \\ — 'outline' \\; size: 'xs' \\ = 's' \\ — 'm' \\; isDisabled: boolean — Делает кнопку неактивной.; isLoading: boolean — Показывает состояние загрузки с лоадером.; isThinking: boolean — Состояние обдумывания с shimmer-эффектом на тексте (приоритет ниже `isLoading`).; isChecked: boolean — Состояние \"выбрано\" (только для `secondary`, `outline`, `ghost`, `surface`).; isReadOnly: boolean — Отключает ховер-эффекты.; isHoverOnText: boolean — Убирает ховер со слотов, оставляет только на тексте.; stretch: boolean — Растягивает кнопку по ширине контейнера.; icon: ReactElement \\ = React.FC<IconProps> — –; iconRight: ReactElement \\ = React.FC<IconProps> — –; hasSlots: boolean = true — Включает/выключает систему слотов.; slotLeft: ReactElement<SlotProps> — Дополнительный контент слева через компонент Slot.; slotRight: ReactElement<SlotProps> — Дополнительный контент справа через компонент Slot.; label: string — Доступный лейбл для кнопки и тултипа.; hasTooltip: boolean — Добавляет тултип с текстом из label (по умолчанию включен для иконочных кнопок).; tooltipContent: ReactNode = label — Содержимое тултипа.; hasOverflowTooltip: boolean = !hasTooltip — Тултип на переполнение текста.; tooltipProps: TooltipStatefulProps — Настройки тултипа.; innerRef: RefObject<HTMLElement> — Ссылка на корневой элемент.; disableFocusOnClick: boolean — Предотвращает перевод фокуса на кнопку при клике.; as: TElement extends React.ElementType = 'button' — Позволяет переиспользовать другой компонент (например, `'a'` для ссылки)."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: current."
    },
    {
      "priority": "P2",
      "component": "Button-Group",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'State' not found in code props; ❇️ Button-Group",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Button · Group",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=45572-158900",
        "props": "Item · 3: boolean (default: True); Item · 2: boolean (default: True); Size: [S, M, L] (default: M); State: [—, Disabled] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data entry/ButtonGroup",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-buttongroup",
        "codeFolder": "ButtonGroup",
        "props": "selected: number[] — Массив индексов выбранных кнопок; disabled: boolean = false — Отключить всю группу кнопок; vertical: boolean = false — Вертикальное расположение кнопок; gap: 'm' — Отступ между кнопками (используется CSS gap); size: 's' \\ = 'm' \\ — 'l'`; as: ElementType = 'div' — Компонент-обертка; onClick: MouseEventHandler \\ = (event, index) => void — –; pin: 'round' — Скругление первой и последней кнопки; divider: ReactNode — Элемент-разделитель между кнопками; children: ReactNode — Дочерние элементы - компоненты Button; className: string — Дополнительный CSS класс; id: string — Уникальный идентификатор группы"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data entry/ButtonGroup."
    },
    {
      "priority": "P2",
      "component": "Calendar",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Variant' not found in code props; ❇️ Calendar",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Date Picker и Calendar",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=22485-19708",
        "props": "Variant: [Single, Multi, Range, Navigation] (default: Single)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/Date/Calendar",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-date-calendar",
        "codeFolder": "Calendar",
        "props": "value: DateValue \\ = null — –; onChange: (value: DateValue \\ = null) => void — –; size: 's' \\ = 'm' — `'m'`; minValue: DateValue — Минимальная доступная дата; maxValue: DateValue — Максимальная доступная дата; platform: 'mobile' \\ = 'desktop' — –; yearsIndent: number = 2 — Смещение значений года относительно выбранного; yearsInterval: { from: number; to: number } — Диапазон значений года; enableSwipe: boolean — Включает переключение месяца свайпом (только тачскрины); type: 'default' \\ = 'navigation' — `'default'`; isWeekend: (date: CalendarDate, locale: string) => boolean — Функция определения выходных дней; isDateUnavailable: (date: CalendarDate) => boolean — Функция определения недоступных дат; timeInputProps: TimeInputProps & { onChange: CalendarTimeInputChange } — Пропсы для ввода времени; className: string — Дополнительный CSS класс; value: { start: DateValue; end: DateValue } \\ = null — –; onChange: (value: RangeValue) => void — Обработчик изменения диапазона; size: 's' \\ = 'm' — `'m'`; minValue: DateValue — Минимальная доступная дата; maxValue: DateValue — Максимальная доступная дата; platform: 'mobile' \\ = 'desktop' — –; selectedRanges: DateRange[] — Массив выбранных диапазонов; isDateUnavailable: (date: CalendarDate) => boolean — Функция определения недоступных дат; timeInputProps: TimeInputProps & { onChange: RangeCalendarTimeInputChange } — Пропсы для ввода времени; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data Entry/Date/Calendar."
    },
    {
      "priority": "P2",
      "component": "Checkbox",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma value 'Align=← Left' not found in code; Figma value 'Align=Right →' not found in code; Figma value 'Width=Fill / Fixed' not found in code; Figma property 'State' not found in code props; Figma property 'Selected' not found in code props; Figma property 'Mixed' not found in code props; ❇️ Checkbox",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Checkbox",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=35644-735",
        "props": "Align: [← Left, Right →] (default: ← Left); Width: [Hug, Fill / Fixed] (default: Hug); State: [—, Error, Disabled] (default: —); ↳ Selected: [off, on] (default: off); ↳ Mixed: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/Checkbox",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-checkbox",
        "codeFolder": "Checkbox",
        "props": "onBlur: FocusEventHandler<HTMLElement> — * Событие, которое вызывается при потере фокуса компонентом. Например, при клике на другом месте экрана; onClick: MouseEventHandler<HTMLElement> — * Событие, которое вызывается при нажатии на компонент; onFocus: FocusEventHandler<HTMLElement> — * Событие, которое возникает при получении компонентом фокуса; onMouseDown: MouseEventHandler<HTMLElement> — * Событие по своему действию похоже на `onClick` и возникает в момент нажатия кнопки мыши. * `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`; onMouseUp: MouseEventHandler<HTMLElement> — * Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши. * Курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup`; onMouseLeave: MouseEventHandler<HTMLElement> — * Обработчик события `onMouseLeave`; onMouseEnter: MouseEventHandler<HTMLElement> — * Обработчик события `onMouseEnter`; focused: boolean — * Состояние фокуса на компоненте; disabled: boolean — * Неактивное состояние компонента. * Состояние, при котором компонент отображается, но недоступен для действий пользователя; pressed: boolean — * Состояние нажатия на компоненте; hovered: boolean — * Состояние, которое возникает при наведении на компонент курсором; innerRef: Ref<HTMLElement> — * Ссылка на корневой DOM-элемент компонента; label: ReactNode — * Текст подписи к чекбоксу; view: 'outline' — * Внешний вид чекбокса * @internal; indeterminate: boolean — * Визуально переводит чекбокс в неопределенное состояние. Не влияет на состояние, указанное в `checked`. * * Может использоваться в дереве чекбоксов, чтобы показать состояние родительского чекбокса, * когда хотя бы один вложенный чекбокс отмечен, но не все. * * Если свойство задано родительскому чекбоксу, * то в `aria-controls` необходимо добавить `id` всех вложенных чекбоксов; checked: boolean — * Состояние переключателя: включен или выключен; title: string — * Всплывающая подсказка; autoFocus: boolean — * Устанавливает фокус в компонент при монтировании; size: 'm' — * Размер; isError: boolean — * Состояние ошибки; isRequired: boolean — * Обязательное; caption: string — * Подзаголовок, или текст ошибки; width: 'hug' | 'fill' — * Ширина * - `'hug'`: по размеру содержимого * - `'fill'`: по размеру парента * @default 'fill'; align: 'left' | 'right' — * Расположение чекбокса слева или справа от надписи * @default 'left'"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data Entry/Checkbox."
    },
    {
      "priority": "P2",
      "component": "Date Input",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Variant' not found in code props; Figma value 'State=Read-only' not found in code; Figma property 'Filled' not found in code props; ❇️ Date Input",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Date Input",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=22075-71502",
        "props": "← Placeholder: text (default: 'дд.мм.гггг'); ← Value: text (default: '00.00.2025'); Slot ←: instance_swap; Slot →: instance_swap; ↳ Autofill: boolean (default: False); Variant: [Text, Tag] (default: Text); Size: [S, M] (default: M); View: [Outline, Ghost, Surface] (default: Outline); State: [—, Error, Read-only, Disabled] (default: —); ↳ Filled: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "DateInput",
        "props": "value: DateValue \\ = null — –; onChange: (value: DateValue \\ = null) => void — –; size: 's' \\ = 'm' — `'m'`; view: 'outline' \\ = 'surface' \\ — 'ghost'`; hasDatePicker: boolean = true — Отображает календарь для выбора даты; calendarProps: CalendarSingleAddonProps = {} — Переопределить параметры выпадающего календаря; platform: 'mobile' \\ = 'desktop' — –; isDisabled: boolean — Неактивное состояние компонента; isReadOnly: boolean — Readonly состояние компонента; state: 'error' \\ = undefined — `undefined`; granularity: 'day' \\ = 'hour' \\ — 'minute' \\; placeholder: string — Плейсхолдер; className: string — Дополнительный CSS класс; width: string \\ = number — –; slotLeft: ReactNode — Содержимое слота слева от инпута; slotRight: ReactNode — Содержимое слота справа от инпута; hasReset: boolean = true — Отображать ли кнопку сброса значения; value: { start: DateValue, end: DateValue } \\ = null — –; onChange: (value: { start: DateValue, end: DateValue } \\ = null) => void — –; size: 's' \\ = 'm' — `'m'`; view: 'outline' \\ = 'surface' \\ — 'ghost'`; hasDatePicker: boolean = true — Отображает календарь для выбора даты; calendarProps: CalendarRangeAddonProps = {} — Переопределить параметры выпадающего календаря; platform: 'mobile' \\ = 'desktop' — –; isDisabled: boolean — Неактивное состояние компонента; isReadOnly: boolean — Readonly состояние компонента; state: 'error' \\ = undefined — `undefined`; granularity: 'day' \\ = 'hour' \\ — 'minute' \\; placeholder: string — Плейсхолдер; className: string — Дополнительный CSS класс; value: DateValue[] — Значение поля; onChange: (value: DateValue[]) => void — Обработчик изменения значения поля; size: 's' \\ = 'm' — `'m'`; view: 'outline' \\ = 'surface' \\ — 'ghost'`; calendarProps: CalendarSingleAddonProps = {} — Переопределить параметры выпадающего календаря; sortTags: boolean = true — Сортирует теги с выбранными значениями; platform: 'mobile' \\ = 'desktop' — –; state: 'error' \\ = undefined — `undefined`; hasReset: boolean = true — Отображать ли кнопку сброса значения; width: string \\ = number \\ — 'fill'`; multiline: boolean — Отображает выбранные значения в несколько строк при переполнении; isDisabled: boolean — Неактивное состояние компонента; isReadOnly: boolean — Readonly состояние компонента; placeholder: string = 'Выберите даты' — Плейсхолдер; formatValue: (value?: DateValue) => string \\ = undefined — –; renderTag: (props: TagAddonProps<DateValue>) => ReactElement — Переопределение функции рендера тегов"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active."
    },
    {
      "priority": "P2",
      "component": "Date Picker",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Preset' not found in code props; ❇️ Date Picker",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Date Picker и Calendar",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=22485-17632",
        "props": "has Slot ↓: boolean (default: False); ↳ Slot: instance_swap; has Slot ↑: boolean (default: False); Preset: [—] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/Date/DatePicker",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-date-datepicker",
        "codeFolder": "DatePicker",
        "props": "value: DateValue \\ = DateValue[] \\ — null`; onChange: (value: TValue) => void — Обработчик изменения значения; children: ReactNode — Триггер дропдауна (кнопка или другой элемент); platform: 'mobile' \\ = 'desktop' — `'desktop'`; size: 's' \\ = 'm' — `'m'`; isOpen: boolean — Контролирует состояние открытости дропдауна; onOpenChange: (isOpen: boolean) => void — Обработчик изменения состояния дропдауна; onClose: () => void — Обработчик закрытия дропдауна; isDisabled: boolean — Отключает компонент; isReadOnly: boolean — Режим только для чтения; minValue: DateValue — Минимальная доступная дата; maxValue: DateValue — Максимальная доступная дата; isDateUnavailable: (date: DateValue) => boolean — Функция проверки доступности даты; disabledRanges: DateRange[] — Массив недоступных диапазонов дат; granularity: 'day' \\ = 'hour' \\ — 'minute' \\; timeInputProps: Omit<TimeInputProps, 'value' \\ = 'onChange'> — –; yearsInterval: { from: number; to: number; } — Диапазон значений года; yearsIndent: number = 2 — Смещение значений года относительно выбранного; isWeekend: (date: CalendarDate, locale: string) => boolean — Функция определения выходных дней; enableSwipe: boolean — Включает переключение месяца свайпом; slotTop: ReactElement — Слот сверху календаря; slotBottom: ReactElement — Слот снизу календаря; popupProps: PickerPopupProps — Переопределение параметров попапа; value: DateRange \\ = DateRange[] \\ — null`; onChange: (rangeValue: TValue) => void — Обработчик изменения значения; children: ReactNode — Триггер дропдауна (кнопка или другой элемент); mergeRanges: boolean = true — Объединяет пересекающиеся диапазоны; mergeAdjacentRanges: boolean = true — Объединяет примыкающие диапазоны; platform: 'mobile' \\ = 'desktop' — `'desktop'`; size: 's' \\ = 'm' — `'m'`; isOpen: boolean — Контролирует состояние открытости дропдауна; onOpenChange: (isOpen: boolean) => void — Обработчик изменения состояния дропдауна; onClose: () => void — Обработчик закрытия дропдауна; isDisabled: boolean — Отключает компонент; isReadOnly: boolean — Режим только для чтения; minValue: DateValue — Минимальная доступная дата; maxValue: DateValue — Максимальная доступная дата; isDateUnavailable: (date: DateValue) => boolean — Функция проверки доступности даты; disabledRanges: DateRange[] — Массив недоступных диапазонов дат; granularity: 'day' \\ = 'hour' \\ — 'minute' \\; timeInputProps: Omit<TimeInputProps, 'value' \\ = 'onChange'> — –; yearsInterval: { from: number; to: number; } — Диапазон значений года; yearsIndent: number = 2 — Смещение значений года относительно выбранного; isWeekend: (date: CalendarDate, locale: string) => boolean — Функция определения выходных дней; enableSwipe: boolean — Включает переключение месяца свайпом; slotTop: ReactElement — Слот сверху календаря; slotBottom: ReactElement — Слот снизу календаря; popupProps: PickerPopupProps — Переопределение параметров попапа"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data Entry/Date/DatePicker."
    },
    {
      "priority": "P2",
      "component": "Dropdown",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'State' not found in code props; Figma property 'Height' not found in code props; ❇️ Dropdown",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Dropdown",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=25840-73838",
        "props": "has Group · 4: boolean (default: False); has Group · 3: boolean (default: False); has Group · 2: boolean (default: False); ↳ Slot: instance_swap; has Slot ↑: boolean (default: False); has Slot ↓: boolean (default: False); has Group · 1: boolean (default: True); State: [—, Empty, Loading, Error] (default: —); Height: [Hug, Fill / Fixed] (default: Hug)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Overlay/Dropdown",
        "link": "https://hrds.yandex-team.ru/?path=/story/overlay-dropdown",
        "codeFolder": "Dropdown",
        "props": "children: ReactElement — Триггер-элемент (кнопка, ссылка и т. д.).; content: ReactNode \\ = (args) => ReactNode — –; visible: boolean — Контролирует видимость (контролируемый режим).; onVisibleChange: (visible:boolean)=>void = noop — Коллбек на изменение видимости.; trigger: 'click' \\ = 'hover' \\ — 'focus' \\; direction: Direction \\ = Direction[] — `'bottom-start'`; mainOffset: number = 8 — Отступ попапа от триггера по основной оси.; secondaryOffset: number = -4 — Смещение по вторичной оси.; mouseEnterDelay: number = 0 — Задержка (с) перед открытием при `hover`.; mouseLeaveDelay: number = 0.1 — Задержка (с) перед закрытием при `hover`.; focusDelay: number = 0 — Задержка (с) перед открытием при `focus`.; blurDelay: number = 0.15 — Задержка (с) перед закрытием при `blur`.; motionless: boolean = true — Отключить анимацию появления.; wrapperClassName: string — Доп. класс для корневого `span`.; platform: 'desktop' \\ = 'mobile' — –; drawerMaxSize: number — Высота Drawer в mobile-режиме.; drawerProps: IDrawerProps — Пропсы, прокидываемые в Drawer.; popupProps: PopupProps — Доп. пропсы для Popup."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Overlay/Dropdown."
    },
    {
      "priority": "P2",
      "component": "Form Field",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Variant' not found in code props; ❇️ Form Field",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Form Field",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=25662-20460",
        "props": "Width · 50%: boolean (default: False); Variant: [1 column, 2 columns] (default: 1 column)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/Form/FormField",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-form-formfield",
        "codeFolder": "FormField",
        "props": "label: ReactNode — Текст лейбла (обязательный); labelFor: string — ID инпута для связи с лейблом (обязательный); children: ReactNode — Инпут, к которому привязан лейбл; isRequired: boolean = false — Показать красную звездочку; isDisabled: boolean = false — Неактивное состояние (серый цвет); hint: ReactNode — Содержимое тултипа подсказки рядом с лейблом; caption: ReactNode — Дополнительная подпись снизу от инпута; slot: ReactNode — Дополнительный элемент справа от лейбла; error: ReactNode — Текст ошибки (заменяет caption, показывает иконку); errorElementId: string — ID элемента для ошибки (для accessibility); tooltipProps: Omit<IHelpTooltipProps, 'children' = 'disabled'> — –; className: string — Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data Entry/Form/FormField."
    },
    {
      "priority": "P2",
      "component": "Input",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma value 'State=Read-only' not found in code; Figma property 'Filled' not found in code props; ❇️ Input",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Input",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=19496-4596",
        "props": "← Placeholder: text (default: 'Placeholder'); ← Value: text (default: 'Value'); Slot ←: instance_swap; Slot →: instance_swap; ↳ Autofill: boolean (default: False); Size: [S, M] (default: M); View: [Outline, Ghost, Surface] (default: Outline); State: [—, Error, Read-only, Disabled] (default: —); ↳ Filled: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data entry/Input/Input",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-input-input",
        "codeFolder": "HrInput",
        "props": "value: string — Значение поля ввода.; onChange: ChangeEventHandler<HTMLInputElement> — Обработчик изменения значения.; placeholder: string — Плейсхолдер текста.; type: string = 'text' — HTML-тип поля ввода (text, password, email, search, etc.).; view: 'outline' \\ = 'surface' \\ — 'ghost'`; size: 's' \\ = 'm' — –; state: 'default' \\ = 'error' \\ — 'success'`; disabled: boolean — Отключает поле.; readOnly: boolean — Делает поле только для чтения.; required: boolean — Обязательное поле.; maxLength: number — Максимальное количество символов.; autoComplete: string — Автодополнение (например, 'email', 'off').; hasReset: boolean = type === 'search' — Показывает кнопку сброса значения.; slotLeft: ReactNode — Левый слот для дополнительных элементов.; slotRight: ReactNode — Правый слот для дополнительных элементов.; width: string \\ = number — –; inputSize: number — HTML-атрибут size для поля.; debounceSettings: InputDebounceSettings — Настройки debounce для onChange.; className: string — Дополнительный CSS-класс.; inputClassName: string — CSS-класс для input элемента.; innerRef: RefObject<HTMLInputElement> — Ссылка на DOM-элемент."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data entry/Input/Input."
    },
    {
      "priority": "P2",
      "component": "Link",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma value 'View=Link · Visited' not found in code; Figma property 'State' not found in code props; ❇️ Link",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Link",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=801-24762",
        "props": "← Icon: instance_swap; has Icon: boolean (default: True); View: [Link, Link · Visited, Primary, Secondary] (default: Link); State: [—, Hover, Disabled] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Navigation/Link",
        "link": "https://hrds.yandex-team.ru/?path=/story/navigation-link",
        "codeFolder": "Link",
        "props": "children: ReactNode — Содержимое ссылки.; href: string — Если есть – рендерится тег `a`, иначе `span`.; view: 'link' \\ = 'primary' \\ — 'secondary' \\; size: 's' \\ = 'm' — –; isDisabled: boolean — Делает ссылку неактивной (aria-disabled = true, убирает ховер/фокус, pointer-events :none).; hasVisited: boolean — Только для `view='link'`. Меняет цвет на «visited».; isOneLine: boolean — Ограничивает ссылку одной строкой и, при необходимости, подсвечивает Tooltip'ом обрезанный текст (см. `overflowTooltipProps`).; iconLeft : (className) => ReactElement — Правая иконка; iconRight: (className) => ReactElement — Правая иконка; innerRef: RefObject<HTMLElement> — Ссылка на корневой элемент.; controlRef: ForwardedRef<HTMLElement> — Ссылка на элемент контроля (обычно дублирует `innerRef`).; overflowTooltipProps: TextProps<overflowTooltipProps> = указаны в компоненте Text — Настройки тултипа, появляется если ссылка не умещается в контейнер; as: TElement extends React.ElementType = 'a' — Позволяет переиспользовать другой компонент. Например, Link из NextJS или react-router-dom"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Navigation/Link."
    },
    {
      "priority": "P2",
      "component": "Menu",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Preset' not found in code props; ❇️ Menu",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Menu",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=19789-7584",
        "props": "Item · 1: boolean (default: True); Item · 2: boolean (default: True); Item · 3: boolean (default: True); Item · 4: boolean (default: True); Item · 5: boolean (default: True); Item · 6: boolean (default: True); Item · 7: boolean (default: True); Item · 8: boolean (default: True); Preset: [Menu, Select, Filter · Checkbox, Filter · Radiobox, Settings · Tumbler] (default: Menu)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data display/Menu/Menu/Меню в попапе",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-display-menu-menu-меню-в-попапе",
        "codeFolder": "Menu2",
        "props": "items: MenuItemOption<T>[] — **Обязательно.** Конфигурация пунктов меню.; children: (option: MenuItemRenderProps<T>) => ReactElement — **Обязательно.** Функция для рендера пунктов меню.; value: string[] — Список id выбранных simple-опций.; onValueChange: (newValue: string[]) => void — Обработчик изменения списка выбранных simple-опций.; role: 'menu' \\ = 'listbox' — `'menu'`; platform: 'desktop' \\ = 'mobile' — –; renderGroupItem: (item: MenuGroupItemRenderProps<T>) => ReactElement — Рендерит дополнительный пункт для группы, позволяющий выбрать все её опции.; scope: RefObject<HTMLElement> \\ = 'inplace' — –; onScrollEnd: () => void — Вызывается, когда меню пролистано до конца.; innerMenuProps: Omit<DropdownMenuProps, 'items' \\ = 'renderItem' \\ — 'renderGroupItem' \\; visible: boolean — **Обязательно.** Видимость попапа.; onClose: (event?) => void — Обработчик закрытия попапа.; target: 'anchor' \\ = 'position' — –; anchor: RefObject<HTMLElement> — Элемент относительно которого позиционируется попап.; direction: Direction \\ = Direction[] — –; drawerMaxSize: string — Максимальный размер Drawer на мобильных устройствах.; isFocusTrapDisabled: boolean — Отключает trap фокуса."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data display/Menu/Menu/Меню в попапе."
    },
    {
      "priority": "P2",
      "component": "Radiobox",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma value 'Align=← Left' not found in code; Figma value 'Align=Right →' not found in code; Figma value 'Width=Fill / Fixed' not found in code; Figma property 'State' not found in code props; Figma property 'Selected' not found in code props; ❇️ Radiobox",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Radiobox",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=47524-13501",
        "props": "Align: [← Left, Right →] (default: ← Left); Width: [Hug, Fill / Fixed] (default: Hug); State: [—, Error, Disabled] (default: —); ↳ Selected: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/Radio/Radio",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-radio-radio",
        "codeFolder": "Radio",
        "props": "options: RadioOption[] = [] — Массив опций для отображения; value: string — Текущее выбранное значение; onChange: ChangeEventHandler<HTMLInputElement> — Коллбэк изменения значения; isDisabled: boolean — Неактивное состояние всей группы; isHorizontal: boolean — Горизонтальное расположение (не рекомендуется); align: 'left' \\ = 'right' — `'left'`; width: 'hug' \\ = 'fill' \\ — number`; name: string = автогенерируется — Имя группы переключателей; autoFocus: boolean — Автофокус на первой доступной кнопке; options: RadioOption[] = [] — Массив опций (альтернатива children); value: string — Текущее выбранное значение; onChange: ChangeEventHandler<HTMLInputElement> — Коллбэк изменения значения; children: ReactNode — Радиокнопки внутри провайдера; name: string = автогенерируется — Имя группы переключателей; isDisabled: boolean — Неактивное состояние всей группы; align: 'left' \\ = 'right' — `'left'`; value: string — Значение переключателя; label: ReactNode — Текст подписи к переключателю; caption: ReactNode — Короткое пояснение к подписи; slotBottom: ReactNode — Дополнительная информация под опцией; checked: boolean — Состояние (только для независимых кнопок); isDisabled: boolean — Неактивное состояние; isError: boolean — Состояние ошибки; name: string = из контекста — Имя переключателя; onChange: ChangeEventHandler<HTMLInputElement> — Коллбэк изменения; value: string = Значение опции (обязательно); label: ReactNode = Текст подписи; caption: ReactNode = Короткое пояснение; slotBottom: ReactNode = Дополнительная информация; isDisabled: boolean = Неактивное состояние; isError: boolean = Состояние ошибки; className: string = Дополнительный CSS класс"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data Entry/Radio/Radio."
    },
    {
      "priority": "P2",
      "component": "Select",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Variant' not found in code props; Figma value 'Width=Hug' not found in code; Figma value 'Width=Fill / Fixed' not found in code; Figma value 'State=Read-only' not found in code; Figma property 'Filled' not found in code props; ❇️ Select",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Select",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=19450-2989",
        "props": "← Placeholder: text (default: 'Placeholder'); ← Value: text (default: 'Value'); Slot →: instance_swap; Slot ←: instance_swap; Variant: [Single, Multi] (default: Single); Size: [S, M] (default: M); Width: [Hug, Fill / Fixed] (default: Fill / Fixed); View: [Outline, Ghost, Surface] (default: Outline); State: [—, Error, Read-only, Disabled] (default: —); ↳ Filled: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "current",
        "title": "Data entry/Select/Select",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-select-select",
        "codeFolder": "HrSelect",
        "props": "options*: SelectOption<T>[] — Массив опций для выбора. `itemData.label` отображается в контроле и нативных `<option>`, `itemData.value` – значение. Поддерживает группировку через `{ type: 'group', title, groupedItems }`.; children: (option) => ReactElement — Рендер-функция для полной кастомизации пункта. По умолчанию отрисовывается `itemData.label`.; value: string \\ = string[] — –; onValueChange: (value) => void — Колбэк, вызывается при изменении значения. Тип аргумента зависит от типа `value`.; placeholder: string — Текст, отображаемый пока ничего не выбрано.; view: 'outline' \\ = 'surface' \\ — 'ghost'`; size: 's' \\ = 'm' — `'m'`; disabled: boolean — Неактивное состояние.; readOnly: boolean — Только для чтения (запрещает открывать попап).; state: 'error' — Состояние ошибки.; hasReset: boolean — Показывает кнопку очистки значения.; type: 'text' \\ = 'tags' — `'text'`; multiline: boolean — Разрешает перенос тегов на несколько строк при `type=\"tags\"`.; isNative: boolean — Использовать нативный `<select>` вместо pop-up меню. Удобно для мобильных кейсов.; hideTrigger: boolean — Скрыть стрелку-иконку.; slotLeft: InputBaseSlot — Слот слева (иконки, статус, и т.д.).; slotRight: InputBaseSlot — Слот справа.; slotTop: ReactNode — Дополнительный контент в начале pop-up меню.; slotBottom: ReactNode — Дополнительный контент в конце pop-up меню.; popupMenuProps: SelectPopupProps — Настройки pop-up меню (`fitContent`, `popupMaxHeight`, `maxWidthBoundary`, …).; emptyState: ReactNode — Что показать, когда `options` пусты.; selectRef: RefObject<HTMLSelectElement> — Ссылка на скрытый `<select>`."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: current; story: Data entry/Select/Select."
    },
    {
      "priority": "P2",
      "component": "Slider",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'State' not found in code props; Figma value 'Labels=off' not found in code; Figma value 'Steps=off' not found in code; ❇️ Slider",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Slider",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=24298-2028",
        "props": "← Value · Max: text (default: '100'); ← Value · Min: text (default: '0'); has Min / Max: boolean (default: True); has Input: boolean (default: True); State: [—, Read-only, Disabled] (default: —); has Labels: [off, on] (default: off); has Steps: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "",
        "link": "",
        "codeFolder": "Slider",
        "props": "value: T extends number \\ = number[] — –; defaultValue: T extends number \\ = number[] — –; onChange: (value: T) => void — Обработчик изменения значения; onChangeEnd: (value: T) => void — Обработчик завершения изменения значения; minValue: number = -100 — Минимальное значение; maxValue: number = 100 — Максимальное значение; step: number = 1 — Шаг изменения значения; label: string — Лейбл для доступности; isDisabled: boolean — Отключенное состояние; isReadOnly: boolean — Режим только для чтения; showMinMax: boolean — Отображает минимальное и максимальное значения; hasInput: boolean — Добавляет дополнительные поля для ввода значений; hasLabels: boolean — Отображает числовые подписи к шкале; disableLabels: boolean — Отключает возможность клика по числовым подписям; hasSteps: boolean — Отображает маркировку шкалы; stepsCount: number — Количество подписей к шкале; isCentered: boolean — Закрашивает шкалу относительно нулевого значения (только для одного значения); formatOptions: NumberFormatOptions — Опции для форматирования значения в лейблах или инпуте; name: string — Имя для использования внутри форм; trackRef: RefObject<HTMLDivElement> — Ссылка на элемент трека"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active."
    },
    {
      "priority": "P2",
      "component": "Suggest",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Variant' not found in code props; Figma property 'View' not found in code props; Figma value 'State=Read-only' not found in code; Figma property 'Filled' not found in code props; ❇️ Suggest",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Suggest",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=30058-58436",
        "props": "← Placeholder: text (default: 'Placeholder'); ← Value: text (default: 'Value'); Slot →: instance_swap; Slot ←: instance_swap; Variant: [Single, Multi] (default: Single); Size: [S, M] (default: M); View: [Outline, Ghost, Surface] (default: Outline); State: [—, Error, Read-only, Disabled] (default: —); ↳ Filled: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "current",
        "title": "",
        "link": "",
        "codeFolder": "HrSuggest",
        "props": "searchType: 'inline' \\ = 'popup' — `'inline'`; valueType: 'text' \\ = 'tags' \\ — 'counter'`; value: SuggestValueOption \\ = SuggestValueOption[] \\ — undefined`; onValueChange: (newValue: TValue) => void — Обработчик изменения значения.; dataProvider: (input: string) => SuggestPopupOption[] \\ = Promise<SuggestPopupOption[]> — –; useDataProvider: UseSuggestDataProvider<TOption> — Кастомный хук для управления данными с состояниями загрузки/ошибки.; placeholder: string — Плейсхолдер для поля ввода.; label: string — Лейбл (для `valueType=counter` или при поиске одного элемента в попапе).; size: 's' \\ = 'm' — `'m'`; disabled: boolean — Отключенное состояние.; readOnly: boolean — Только для чтения.; hasReset: boolean — Показывать кнопку сброса значения.; hasConfirm: boolean — Значения изменяются только после подтверждения.; isResizable: boolean — Может ли поле расширяться на несколько строк (только для `searchType=popup`).; keepSearchValue: boolean — Не сбрасывать поисковый запрос при изменении значения.; fetchOnMount: boolean = true — Загружать опции при монтировании (`false` = lazy loading при открытии попапа).; debounceSettings: { timeout: number } = {timeout: 250} — Настройки задержки для поиска.; emptyState: ReactNode \\ = SuggestEmptyStateRenderFn — –; errorState: ReactNode — Элемент для состояния ошибки.; children: (props: MenuItemRenderProps) => ReactElement — Кастомный рендер опций.; renderTag: (option: SuggestValueOption, props: TagProps) => ReactElement — Кастомный рендер тегов (для `valueType=tags`).; renderGroupItem: (props: MenuGroupItemRenderProps) => ReactElement — Рендер элемента группы для множественного выбора групп.; hideCounterTitle: boolean — Скрыть title в тултипе каунтера.; counterTooltip: ReactNode — Кастомный контент тултипа каунтера.; selectedLimit: number — Максимальное количество выбранных элементов (только для multiple).; selectedLimitTooltipContent: ReactNode = i18n — Текст тултипа при достижении `selectedLimit`. Показывается по клику на заблокированный инпут или опцию. Пустая строка скрывает тултип.; resetButtonLabel: string = 'Сбросить' — Текст кнопки сброса в режиме подтверждения.; confirmButtonLabel: string = 'Подтвердить' — Текст кнопки подтверждения.; onTogglePopup: (isOpen: boolean) => void — Обработчик открытия/закрытия попапа.; inputProps: InputProps — Дополнительные пропсы для поля ввода.; visibilityButtonProps: Omit<ButtonAddonProps, 'icon' \\ = 'onClick'> — –; resetButtonProps: ResetButtonProps — Пропсы кнопки сброса значения (крестик на основном инпуте). Например, `{ hasTooltip: false }`.; popupMenuProps: SuggestPopupProps — Настройки попапа.; slotTop: ReactElement — Дополнительный контент сверху попапа.; slotBottom: ReactElement — Дополнительный контент снизу попапа."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: current."
    },
    {
      "priority": "P2",
      "component": "Switch",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Variant' not found in code props; Figma value 'Width=Fill / Fixed' not found in code; Figma property 'State' not found in code props; Figma property 'Selected' not found in code props; ❇️ Switch",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Switch",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=47524-7096",
        "props": "Variant: [← Left, Right →] (default: ← Left); Width: [Hug, Fill / Fixed] (default: Hug); State: [—, Error, Disabled] (default: —); ↳ Selected: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data entry/Switch/Switch",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-switch-switch",
        "codeFolder": "Switch",
        "props": "checked: boolean — Состояние переключателя (controlled); label: ReactNode — Текст подписи к переключателю; caption: ReactNode — Короткое пояснение к подписи; value: string — Значение переключателя (для групп); isDisabled: boolean = false — Неактивное состояние; isError: boolean = false — Состояние ошибки; isRequired: boolean = false — Обязательное к заполнению; align: 'left' \\ = 'right' — `'left'`; width: 'fill' \\ = 'hug' \\ — number`; view: 'outline' = 'outline' — Внешний вид (только outline); autoFocus: boolean = false — Автофокус при монтировании; onChange: ChangeEventHandler<HTMLInputElement> — Обработчик изменения; controlRef: RefObject<HTMLInputElement> — Ссылка на input элемент; innerRef: Ref<HTMLLabelElement> — Ссылка на корневой элемент; name: string — HTML атрибут name; title: string — HTML атрибут title"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data entry/Switch/Switch."
    },
    {
      "priority": "P2",
      "component": "Tag",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma property 'Variant' not found in code props; Figma value 'View=Surface' not found in code; Figma property 'State' not found in code props; ❇️ Tag",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Tag",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=29221-374448",
        "props": "← Label: text (default: 'Label'); Slot →: instance_swap; Slot ←: instance_swap; ← Icon: instance_swap; Variant: [Text, Icon, User] (default: Text); View: [Secondary, Outline, Ghost, Surface] (default: Outline); State: [—, Error, Disabled] (default: —)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "current",
        "title": "",
        "link": "",
        "codeFolder": "HrTag",
        "props": "children: ReactNode — Содержимое тега.; type: 'user' \\ = 'profile' \\ — 'status' \\; view: 'outline' \\ = 'secondary' \\ — 'ghost' \\; size: 'xs' \\ = 's' — –; as: TElement extends React.ElementType = 'button' \\ — 'span'`; onClick: React.MouseEventHandler — Обработчик клика (делает тег интерактивным).; onDelete: React.MouseEventHandler — Обработчик удаления (добавляет крестик).; isInteractive: boolean — Принудительно включает интерактивность.; isChecked: boolean — Состояние \"выбрано\" (для type=\"toggle\").; isDisabled: boolean — Отключает тег.; error: boolean \\ = ReactNode — –; maxWidth: string \\ = number — –; textProps: Pick<TextProps, 'maxVisibleLines' \\ = 'align'> — `{ maxVisibleLines: 1 }`; innerRef: RefObject<HTMLElement> — Ссылка на DOM-элемент."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: current."
    },
    {
      "priority": "P2",
      "component": "Text Area",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma value 'State=Read-only' not found in code; Figma property 'Filled' not found in code props; ❇️ Text Area",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Text Area",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=19693-49004",
        "props": "← Placeholder: text (default: 'Placeholder'); ← Value: text (default: 'Value'); Size: [S, M] (default: M); View: [Outline, Ghost, Surface] (default: Outline); State: [—, Error, Read-only, Disabled] (default: —); ↳ Filled: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "current",
        "title": "Data entry/Textarea/Textarea",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-textarea-textarea",
        "codeFolder": "HrTextarea",
        "props": "children: ReactNode — Содержимое текстового поля.; value: string — Значение текстового поля.; onChange: ChangeEventHandler<HTMLTextAreaElement> — Обработчик изменения значения.; placeholder: string — Плейсхолдер текста.; view: 'outline' \\ = 'surface' \\ — 'ghost'`; size: 's' \\ = 'm' — –; state: 'default' \\ = 'error' \\ — 'success'`; autoResize: boolean — Автоматическое изменение высоты по содержимому.; minRows: number = 2 — Минимальное количество строк.; maxRows: number = 8 — Максимальное количество строк (при autoResize).; disabled: boolean — Отключает поле.; readOnly: boolean — Делает поле только для чтения.; required: boolean — Обязательное поле.; maxLength: number — Максимальное количество символов.; autoComplete: string — Автодополнение (например, 'email', 'off').; hasReset: boolean — Показывает кнопку сброса значения.; slotRight: ReactNode — Правый слот для дополнительных элементов.; className: string — Дополнительный CSS-класс.; innerRef: RefObject<HTMLTextAreaElement> — Ссылка на DOM-элемент."
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: current; story: Data entry/Textarea/Textarea."
    },
    {
      "priority": "P2",
      "component": "Time Input",
      "issueType": "props drift",
      "fixArea": "Figma props / code API",
      "reason": "Названия свойств или значения вариантов расходятся между Figma и code props.",
      "action": "Сверить property/value naming: переименовать Figma variant, добавить code prop или зафиксировать явный mapping.",
      "details": "Figma value 'State=Read-only' not found in code; Figma property 'Filled' not found in code props; ❇️ Time Input",
      "figma": {
        "library": "HRDS Components",
        "fileKey": "BodHDPKvwUYhWM5XDahMja",
        "status": "active",
        "page": "❇️ Time Input",
        "link": "https://www.figma.com/design/BodHDPKvwUYhWM5XDahMja/%F0%9F%A6%84-HRDS-%C2%B7-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B?node-id=45945-15321",
        "props": "← Placeholder: text (default: 'чч:мм:сс'); ← Value: text (default: '00:00:00'); Slot ←: instance_swap; Slot →: instance_swap; Size: [S, M] (default: M); View: [Outline, Ghost, Surface] (default: Outline); State: [—, Error, Read-only, Disabled] (default: —); ↳ Filled: [off, on] (default: off)"
      },
      "storybook": {
        "version": "13.3.0",
        "status": "active",
        "title": "Data Entry/Time/TimeInput",
        "link": "https://hrds.yandex-team.ru/?path=/story/data-entry-time-timeinput",
        "codeFolder": "TimeInput",
        "props": "value: TimeValue \\ = null — `null`; onChange: (value: TimeValue \\ = null) => void — –; granularity: 'hour' \\ = 'minute' \\ — 'second'`; placeholder: string — Плейсхолдер для поля ввода; hasTimeSelect: boolean = true — Показать иконку для выбора времени; hasReset: boolean = true — Показать кнопку сброса; timeSelectProps: TimeSelectAddonProps = {} — Пропсы для TimeSelect аддона; size: 's' \\ = 'm' \\ — 'l'`; view: 'outline' \\ = 'ghost' \\ — 'surface'`; state: 'error' — Состояние компонента; width: number \\ = string — –; isDisabled: boolean = false — Отключенное состояние; isReadOnly: boolean = false — Режим только для чтения; platform: Platform — Платформа (mobile/desktop); slotLeft: ReactNode — Слот слева от поля ввода; slotRight: ReactNode — Слот справа от поля ввода; minuteStep: number = 15 — Интервал в минутах для списка времени; size: 's' \\ = 'm' \\ — 'l'`; isDisabled: boolean = наследуется — Отключенное состояние"
      },
      "matchStatus": "matched",
      "sourceNote": "Figma: active; Storybook/code: active; story: Data Entry/Time/TimeInput."
    }
  ]
};
