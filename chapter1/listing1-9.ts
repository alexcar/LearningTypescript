{
    // interfaces
    interface IPerson {
        name: string;
        heightInCentimeters: number;
    }

    const sherlock: IPerson = {
        name: 'Alexandre',
        heightInCentimeters: 183 
    }

    // type alias
    type PersonType = {
        name: string;
        heightInCentimeters: number;
    };

    const carvalho: PersonType = {
        name: 'Alexandre',
        heightInCentimeters: 183
    }
}

{
    // enumerations
    enum VehicleType {
        pedalCycle,
        MotorCycle,
        Car,
        Van,
        Bus,
        Lorry
    }

    const type = VehicleType.Lorry;
    const typeName = VehicleType[type]; // Lorry
}