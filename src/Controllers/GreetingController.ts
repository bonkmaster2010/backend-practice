import { Controller, Get, Param, Query } from "@nestjs/common";
import { GreetingService } from "../Services/GreetingService";

@Controller("filter")
export class GreetingController {
  constructor(private readonly greet: GreetingService) {}

  @Get()
  getGreeting(@Query() params: {data: string, banned: string}) {
    console.log(params.data)
    let arr: string[];
    try{arr = JSON.parse(params.data);}catch(e){return {e: "Invalid data"}}  

    return this.greet.greet(arr, params.banned)
  }
}
