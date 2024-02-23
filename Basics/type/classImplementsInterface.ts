import { hasPrint } from "./interfaceForClass"

export class Invoice implements hasPrint{
  constructor(
    readonly client: string,
    private work: string,
    public amount : number
  ) { }
  
  print(): string {
    return `Client ${this.client} owes ${this.amount} $ for this ${this.work}`
  }
}

export class Payment implements hasPrint{
  constructor(
    readonly recipiend: string,
    private job: string,
    public amt : number
  ) { }
  
  print(): string {
    return `I own ${this.recipiend}`
  }
}