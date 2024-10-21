/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    dataLayer: any[]; // Declaring dataLayer as an array
    gtag?: (...args: any[]) => void; // Declaring gtag function if used
  }
}