import {
  Command,
  Light,
  RedLight,
  LightOnCommand,
  LightOffCommand,
  RedLightOn,
  RedLightOff,
  RedLightIncrease,
  RedLightDecrease,
  Controller
} from "../../patterns/command/lightsystem";

let lightOn: boolean = false;
let redOn: boolean = false;

export function Receiver(command: Command): string{
  const controller = new Controller();
  controller.setCommand(command)
  return controller.executeCommand()
}

export function Response(command: string): string{
  let action: string='a';

  /*if (command == "on") {
    action = Receiver(new LightOnCommand(new Light()));
  }

  if (command == "off") {
    redOn=false
    action = Receiver(new LightOffCommand(new Light()));
  }

  if (command == "increase") {
    action = redOn ? Receiver(new RedLightIncrease(new RedLight())) : Receiver(new LightOnCommand(new Light()));
  }

  if (command == "decrease") {
    action = redOn ? Receiver(new RedLightDecrease(new RedLight())) : Receiver(new LightOnCommand(new Light()));
  }

  if (command == "red") {
    redOn = true;
    action = redOn ? Receiver(new RedLightOn(new RedLight())) : Receiver(new LightOnCommand(new Light()));
  }
  
  return action;*/

  switch (command) {
    case "on":
      lightOn=true
        action = lightOn ? Receiver(new LightOnCommand(new Light())) : Receiver(new LightOnCommand(new Light()))
        break;

    case "off":
      lightOn = false
      action = lightOn ? Receiver(new RedLightOff(new RedLight())) : Receiver(new LightOffCommand(new Light()))
      break;

    case "increase":
      action = redOn ? Receiver(new RedLightIncrease(new RedLight())) : Receiver(new LightOnCommand(new Light()))

      break;

    case "decrease":
      action = redOn ? Receiver(new RedLightDecrease(new RedLight())) : Receiver(new LightOnCommand(new Light()))
      break;

    case "red":
      redOn=true
      
      action = lightOn ? Receiver(new RedLightOn(new RedLight())) : Receiver(new LightOffCommand(new Light()))
      break;
    default:

  }
  return action;
  
}