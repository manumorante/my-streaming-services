/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Use Google Chrome - Use Google Chrome */
  "UseGoogleChrome": "yes" | "no",
  /** Google Chrome Profile - Google Chrome Profile */
  "GoogleProfile": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-services` command */
  export type SearchServices = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-services` command */
  export type SearchServices = {}
}


