import { Injectable } from "@nestjs/common"

@Injectable()
export class GreetingService{
    greet(data: string[], word: string): any[]{
        return data.filter((w: any) => w !== word)
    }
};