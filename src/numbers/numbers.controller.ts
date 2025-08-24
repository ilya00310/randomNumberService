import { Controller, Get, Post, Query } from "@nestjs/common";
import { NumbersService } from "./numbers.service";

@Controller("numbers")
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Post("generate")
  generate() {
    return this.numbersService.generate();
  }

  @Get()
  retrieve(@Query("id") id: string) {
    return this.numbersService.retrieve(Number(id));
  }
}
