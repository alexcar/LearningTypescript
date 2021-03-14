// Literal Types

{
    type Kingdom = 'Bacteria' | 'protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia';
    let kingdom: Kingdom;

    // OK
    kingdom = 'Bacteria';

    // Error
    // kingdom = 'Protista'

    // Number literal type
    type Fibonacci = 1 | 2 | 3 | 5 | 8 | 13;
    let num: Fibonacci;

    // OK
    num = 8;

    // Error
    // num = 9;

    // Hybrid union/literal type
    type Randoms = 'Text' | 10 | false;
    let random: Randoms;

    // OK
    random = 'Text';
    random = 10;
    random = false;

    // Error
    // random = 'Other String';
    // random = 12;
    // random = true;
}