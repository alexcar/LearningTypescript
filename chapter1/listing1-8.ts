{
    // primitive type annotation
    const name: string = 'Alexandre';
    const heightInCentimeters: number = 182.88;
    const isActive: boolean = true;

    // array type annotation
    const names: string[] = ['Jose', 'Alexandre', 'Silva', 'Carvalho'];

    // function annotation with parameter type annotation and return type annotation
    let sayHello: (name: string) => string;

    // implementation of sayHello funcion
    sayHello = function(name) {
        return 'Hello' + name;
    };

    // object type annotation
    let person: { name: string; heightInCentimeters: number; };

    // implementation of a person object
    person = {
        name: 'Alexandre',
        heightInCentimeters: 183
    };
}