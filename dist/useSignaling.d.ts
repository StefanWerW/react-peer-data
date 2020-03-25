/// <reference types="react" />
export interface Options {
    url?: string | null;
    customChannel?: Object | null;
}
declare const useSignaling: ({ url, customChannel }: Options) => [Object, import("react").Dispatch<import("react").SetStateAction<Object>>];
export default useSignaling;
