import { Plugin } from 'rollup';
interface AliasOptions {
    entries: {
        [key: string]: string;
    };
}
export default function alias(options: AliasOptions): Plugin;
export {};
