import { Controller } from "@nestjs/common";
import { NumbersService } from "./numbers.service";

@Controller("numbers")
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}
}
