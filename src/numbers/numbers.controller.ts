import { Controller, Get, Post, Query } from "@nestjs/common";
import { NumbersService } from "./numbers.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { NumberDto } from "./dto/number.dto";

@Controller("numbers")
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @ApiOperation({summary: 'Create random number'})
  @ApiResponse({status: 200, type: NumberDto })
  @Post("generate")
  generate() {
    return this.numbersService.generate();
  }

  @ApiOperation({summary: 'Get number'})
  @ApiResponse({status:200, type: Number})
  @Get()
  retrieve(@Query("id") id: string) {
    return this.numbersService.retrieve(Number(id));
  }
}
