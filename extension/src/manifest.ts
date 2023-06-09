import pkg from "../package.json";

export const manifest: chrome.runtime.ManifestV3 = {
  author: pkg.author,
  description: pkg.description,
  name: pkg.displayName ?? pkg.name,
  version: pkg.version,
  homepage_url: pkg.homepage,
  manifest_version: 3,
  action: {
    default_icon: {
      48: "icons/48.png",
    },
    default_title: "Open Terminal",
  },
  background: {
    service_worker: "src/background.ts",
  },
  side_panel: {
    default_path: "src/index.html",
  },
  omnibox: {
    keyword: "wesh",
  },
  permissions: [
    "nativeMessaging",
    "tabs",
    "history",
    "system.display",
    "bookmarks",
    "downloads",
    // @ts-ignore
    "sidePanel",
    "contextMenus",
    "management",
    "scripting",
  ],
  commands: {
    "open-terminal-tab": {
      suggested_key: {
        default: "Ctrl+Shift+E",
        mac: "Command+Shift+E",
      },
      description: "Open Terminal Tab",
    },
  },
  host_permissions: ["*://*/*"],
  icons: {
    16: "icons/16.png",
    48: "icons/48.png",
    128: "icons/128.png",
    256: "icons/256.png",
    512: "icons/512.png",
  },
};
