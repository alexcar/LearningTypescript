let globalScope = 1;

{
    let blockScope = 2;

    // OK. this is from a wider scope
    globalScope = 100;

    // Error! This is outside of the scope the variable is declared in
    // nestBlockScope = 300;

    {
        let nestedBlockScope = 3;

        // OK. This is from a wider scope
        globalScope = 1000;

        // OK. This is from wider scope
        blockScope = 2000;
    }
}