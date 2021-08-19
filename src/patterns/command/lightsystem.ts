
export interface Command{
  execute(): string;
}

export class Light{
  public on(): string{
    return 'on'
  }

  public off(): string{
    return 'off'
  }
}

var brightness: number = 0
export class RedLight{
  public on(): string{
    return `red${brightness}`
  }

  public off(): string{
    return `off`
  }

  public increaseLuminosity(): string{
    brightness++;
    return `red${brightness}`
  }

  public decreaseLuminosity(): string{
    brightness--;
    return `red${brightness}`
  }

}

export class LightOnCommand implements Command{
  private light: Light
  
  constructor(light: Light) {
    this.light=light
  }

  execute(): string{
    return this.light.on();
  }
}

export class LightOffCommand implements Command{
  private light: Light
  
  constructor(light: Light) {
    this.light=light
  }

  execute(): string{
    return this.light.off();
  }
}

export class RedLightOn implements Command{
  light: RedLight;

  constructor(light: RedLight) {
    this.light=light
  }

  execute(): string{
    return this.light.on();
  }
}

export class RedLightOff implements Command{
  light: RedLight;

  constructor(light: RedLight) {
    this.light=light
  }

  execute(): string{
    return this.light.off();
  }
}

export class RedLightIncrease implements Command{
  light: RedLight;

  constructor(light: RedLight) {
    this.light=light
  }

  execute(): string{
    return this.light.increaseLuminosity();
  }
}

export class RedLightDecrease implements Command{
  light: RedLight;

  constructor(light: RedLight) {
    this.light=light
  }

  execute(): string{
    return this.light.decreaseLuminosity();
  }
}

export class Controller{
  command!: Command;

  constructor() {
    
  }
  setCommand(command: Command) {
    this.command = command;
  }
  executeCommand() {
    return this.command.execute();
  }
}