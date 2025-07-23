declare module 'country-telephone-data' {
  export const allCountries: Array<{
    name: string;
    dialCode: string;
    code: string;
    flag?: string;
  }>;
}
