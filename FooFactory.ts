import {InjectableLogger, InjectableType} from '@enigmatis/polaris';
import {inject, injectable} from "inversify";
import {Foo} from "./Foo";
import {GraphQLLogProperties} from "@enigmatis/polaris/dist/logging/GraphQLLogProperties";

@injectable()
export class FooFactory {
    @inject("InjectableLogger") private logger: InjectableLogger;
    @inject("FooConstructor") private Foo: { new(): Foo };
    public create(name: string) {
        this.logger.info(new GraphQLLogProperties("Creating foo instance..."));
        const foo = new this.Foo();
        foo.setLogger(this.logger);
        foo.setName(name);
        return foo;
    }
}