// Module is responsible for generation smart device objects

const randomNumber = (limit) => {
    if (limit===1) {
        const randomNumber = Math.round(Math.random());
        return randomNumber
    } else {
    const randomNumber = Math.ceil(Math.random()*limit);
    return randomNumber;}
}

const connectionsState = () => {
    const number = randomNumber(3)
    switch (number) {
        case 1:
            return 'Connected';
            break;
        case 2:
            return 'Disconnected';
            break;
        case 3:
            return 'Poor connection';
            break; 
    }
}

const brightness = () => {
    const brightness = randomNumber(100)
    return brightness
}

const color = () => {
    const randomColor = randomNumber(16777215).toString(16);
    return `#${randomColor}`
}

const isTurnedOn = () => {
    const number = randomNumber(1);
    switch(number) {
        case 1:
            return true;
            break;
        case 0:
            return false;
            break
    }
}

const powerConsumption = () => {
    return randomNumber(2460)+40
}

const temperature = () => {
    return randomNumber(23)+15
}

class SmartDevice {
    constructor(type, id, name, connectionState) {
        this.type = type,
        this.id = id,
        this.name = name,
        this.connectionState = connectionState
    }
}

class SmartBulb extends SmartDevice {
    constructor(type, id, name, connectionState, brightness, color) {
        super(type, id, name, connectionState),
        this.brightness = brightness,
        this.color = color 
    }
}

class SmartOutlet extends SmartDevice {
    constructor(type, id, name, connectionState, isTurnedOn, powerConsumption) {
        super(type, id, name, connectionState),
        this.isTurnedOn = isTurnedOn,
        this.powerConsumption = powerConsumption
    }
}

class SmartTemperatureSensor extends SmartDevice {
    constructor(type, id, name, connectionState, temperature) {
        super(type, id, name, connectionState),
        this.temperature = temperature
    }
}

const smartBulb = (id, name) => {
    return new SmartBulb("bulb", id, name, connectionsState(), brightness(), color())
}

const smartOutlet = (id, name) => {
   return new SmartOutlet("outlet", id, name, connectionsState(), isTurnedOn(), powerConsumption())
}

const smartTemperatureSensor = (id, name) => {
    return new SmartTemperatureSensor("temperature sensor", id, name, connectionsState(), temperature())
}

export { smartBulb, smartOutlet, smartTemperatureSensor }