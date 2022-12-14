# 환영해요!

## 소개

Office Tool Plus는 Office를 배포하기 위한 강력한 도구에요.

Office Tool Plus는 [Office Deployment Tool](https://docs.microsoft.com/en-us/deployoffice/overview-office-deployment-tool) 과 [OSPP](https://docs.microsoft.com/en-us/DeployOffice/vlactivation/tools-to-manage-volume-activation-of-office)에 기반하여 만들어 졌어요. Office를 쉽게 배포할 수 있어요. Office Tool Plus는 Office를 더 빨리 다운로드 할 수 있도록 Thunder 다운로드 엔진을 가지고 있어요. 물론 Office Tool Plus에서 제공하는 기능을 사용하여 Office를 쉽게 관리하고 인증할 수 있어요.

The following products are supported:

- Microsoft 365.
- Office 2016, 2019, 2021.
- Visio 2016, 2019, 2021 and Online Plan 2.
- Project 2016, 2019, 2021 and Online Desktop Client.

No matter what, Office Tool Plus is always your best helper.

## Download

Download Office Tool Plus from:

- [Office Tool Plus official website](http://otp.landian.vip/)

Differences between the versions:

- Includes runtime: Includes .NET Runtime, you can run Office Tool Plus without .NET Runtime installation.
- Normal: Only Office Tool Plus and base components.

> We recommend you to download Office Tool Plus which includes runtime.

### Unpack

Extract Office Tool Plus to a normal location, such as desktop. **Do NOT run Office Tool Plus without unpacking**.

## Features

- Create Office installation configuration. The config can be exported to local, or imported from local or web.
- Download Office, supporting `ALL` Office channels and `ALL` Office languages.
- Install Office or modify the existing Office, such as adding new products, languages and applications, or uninstalling products and applications.
- Create Office ISO, supports default installation config and silent installation config.
- Activate Office. Support online activation, phone activation and KMS activation.
- Support Office activation management, including license management, key management and KMS management.
- Change Office update channel, support upgrading/downgrading Office without reinstalling Office.
- Remove Office, force remove Office when it can’t be uninstalled in normal way, supports all version of Office.
- Integrated Office tools, including resetting settings, fixing Office problems.
- Convert Office documents, based on Office COM. it's fast and stable.
- Personalize theme, you can build your special Office Tool Plus.
- Advanced settings allow you to use more advanced features, such as Office internal channels.

::: warning Attention

1. Office documents converter may not be capable with 64-bit of Office.
2. Office Tool Plus only provides activation management. You need to have a genuine license to activate your products.

:::

## Components and Structure

```txt
Office Tool
├── Office Tool Plus.exe (main program)
├── Office Tool Plus.Console.exe (Console Helper)
├── hostfxr.dll (.NET Host)
├── shared (.NET Runtimes)
└── files
    ├── setup.exe (Microsoft Office Deployment Tool)
    ├── activate (OSPP and other relating files)
    │   └── OSPP.VBS (Office Software Protection Platform)
    ├── clean
    │   ├── x64 (Office activation cleaner for x64 system)
    │   └── x86 (Office activation cleaner for x86 system)
    ├── preferences (Office applications preferences data, provided by Microsoft)
    └── Thunder (files related to Thunder download acceleration)
```

Usually, Office Tool Plus will download the needed components and keep it the latest version automatically.

If some of the components are lost or cannot be downloaded automatically, we suggest you to re-download Office Tool Plus to fix this problems.
