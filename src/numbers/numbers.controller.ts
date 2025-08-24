import { Controller, Post } from "@nestjs/common";
import { NumbersService } from "./numbers.service";

@Controller("numbers")
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Post("random")
  createRandom() {
    return this.numbersService.createRandom();
  }
}
