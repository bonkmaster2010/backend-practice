import { Module } from "@nestjs/common";
import { GreetingController } from "../Controllers/GreetingController";
import { GreetingService } from "../Services/GreetingService";
@Module({
    controllers: [GreetingController],
    providers: [GreetingService]
})
export class testingModule{}