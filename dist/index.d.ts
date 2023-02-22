import { Plugin } from 'rollup';
interface AliasOptions {
    entries: {
        [key: string]: string;
    } | {
        find: string;
        replacement: string;
    };
}
export default function alias(options: AliasOptions): Plugin;
export {};
