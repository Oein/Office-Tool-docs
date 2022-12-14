module.exports = {
  base: "/",
  title: "Office Tool Plus Docs",
  description: "Official Office Tool Plus documentation.",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "/assets/img/logo.ico" }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-K4SGXHF07B",
      },
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-K4SGXHF07B');",
      ],
    ],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Office Tool Plus Docs",
      description: "Office Tool Plus documentation.",
    },
    "/zh-cn/": {
      lang: "zh-CN",
      title: "Office Tool Plus Docs",
      description: "Office Tool Plus 官方帮助文档。",
    },
    "/zh-tw/": {
      lang: "zh-TW",
      title: "Office Tool Plus Docs",
      description: "Office Tool Plus 協助文件",
    },
    "/ko-kr/": {
      lang: "ko-KR",
      title: "Office Tool Plus Docs",
      description: "Office Tool Plus 공식 문서",
    },
  },
  themeConfig: {
    repo: "YerongAI/Office-Tool",
    docsRepo: "YerongAI/Office-Tool-docs",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    smoothScroll: true,
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
        nav: [
          { text: "Start", link: "/start/" },
          { text: "Deploy", link: "/deploy/" },
          { text: "Activate", link: "/activate/" },
          { text: "More", link: "/others/" },
          { text: "FAQ", link: "/faq/" },
          { text: "Blog (Chinese)", link: "https://www.coolhub.top" },
          {
            text: "Group",
            items: [
              {
                text: "Telegram",
                link: "https://otp.landian.vip/grouplink/telegram.html",
              },
            ],
          },
        ],
        sidebar: {
          "/start/": ["", "requirement"],
          "/deploy/": ["", "basic-settings", "advanced-settings", "create-iso"],
          "/activate/": ["", "activate-steps"],
          "/others/": ["", "toolbox", "converter", "settings", "commands"],
          "/faq/": ["", "application", "deploy", "activation"],
          "/": [""],
        },
      },
      "/zh-cn/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
          },
        },
        nav: [
          { text: "入门", link: "/zh-cn/start/" },
          { text: "部署", link: "/zh-cn/deploy/" },
          { text: "激活", link: "/zh-cn/activate/" },
          { text: "更多", link: "/zh-cn/others/" },
          { text: "常见问题", link: "/zh-cn/faq/" },
          { text: "官方博客", link: "https://www.coolhub.top" },
          {
            text: "群组",
            items: [
              {
                text: "QQ | 微信公众号",
                link: "https://otp.landian.vip/grouplink/qq.html",
              },
              {
                text: "Telegram",
                link: "https://otp.landian.vip/grouplink/telegram.html",
              },
            ],
          },
        ],
        sidebar: {
          "/zh-cn/start/": ["", "requirement"],
          "/zh-cn/deploy/": [
            "",
            "basic-settings",
            "advanced-settings",
            "create-iso",
          ],
          "/zh-cn/activate/": ["", "activate-steps"],
          "/zh-cn/others/": [
            "",
            "toolbox",
            "converter",
            "settings",
            "commands",
          ],
          "/zh-cn/faq/": ["", "application", "deploy", "activation"],
          "/zh-cn/": [""],
        },
      },
      "/zh-tw/": {
        selectText: "選擇語言",
        label: "繁體中文 (台灣)",
        editLinkText: "在 GitHub 編輯此頁",
        serviceWorker: {
          updatePopup: {
            message: "發現新版本可用",
            buttonText: "重新載入",
          },
        },
        nav: [
          { text: "入門", link: "/zh-tw/start/" },
          { text: "部署", link: "/zh-tw/deploy/" },
          { text: "啟用", link: "/zh-tw/activate/" },
          { text: "更多", link: "/zh-tw/others/toolbox" },
          { text: "作者Blog", link: "https://www.coolhub.top" },
          {
            text: "Cotpear",
            link: "https://www.cotpear.com?utm_source=docs-otp-web",
          },
          {
            text: "社群",
            items: [
              {
                text: "Telegram 華人群組",
                link: "https://otp.landian.vip/grouplink/telegram.html",
              },
              { text: "Telegram 台灣頻道", link: "https://t.me/ot_channel_tw" },
              {
                text: "OTP 台灣管理團隊",
                link: "https://go.cotpear.com/otp-tw",
              },
            ],
          },
        ],
        sidebar: {
          "/zh-tw/start/": ["", "requirement", "download"],
          "/zh-tw/deploy/": ["", "configuration-options", "create-iso", "faq"],
          "/zh-tw/activate/": ["", "faq"],
          "/zh-tw/others/": ["toolbox", "converter", ""],
          "/zh-tw/": [""],
        },
      },
      "/ko-kr/": {
        selectText: "언어",
        label: "한국어",
        ariaLabel: "언어",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: {
            message: "업데이트된 정보를 확인할 수 있습니다",
            buttonText: "세로고침",
          },
        },
        nav: [
          { text: "시작하기", link: "/ko-kr/start/" },
          { text: "배포하기", link: "/ko-kr/deploy/" },
          { text: "인증하기", link: "/ko-kr/activate/" },
          { text: "더보기", link: "/ko-kr/others/" },
          { text: "FAQ", link: "/ko-kr/faq/" },
          { text: "Blog (중국어)", link: "https://www.coolhub.top" },
          {
            text: "Group",
            items: [
              {
                text: "Telegram",
                link: "https://otp.landian.vip/grouplink/telegram.html",
              },
            ],
          },
        ],
        sidebar: {
          "/ko-kr/start/": ["", "requirement"],
          "/ko-kr/deploy/": [
            "",
            "basic-settings",
            "advanced-settings",
            "create-iso",
          ],
          "/ko-kr/activate/": ["", "activate-steps"],
          "/ko-kr/others/": [
            "",
            "toolbox",
            "converter",
            "settings",
            "commands",
          ],
          "/ko-kr/faq/": ["", "application", "deploy", "activation"],
          "/ko-kr/": [""],
        },
      },
    },
  },
};
