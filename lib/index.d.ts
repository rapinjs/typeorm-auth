export * from './decorators';
export default class TypeOrmAuthPlugin {
    onBeforeRequest({ registry, ctx }: {
        registry: any;
        ctx: any;
    }): Promise<void>;
}
