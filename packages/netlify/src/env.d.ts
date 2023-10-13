/// <reference types="astro/client" />

declare namespace App {
    interface Locals {
        runtime: {
            setBuildersTtl(ttl: number): void
            setCacheControl(cacheControl: string): void
            setNetlifyCacheControl(cacheControl: string): void
        };
    }
}