import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class NumbersService {
  constructor(private prismaService: PrismaService) {}

  async createRandom() {
    const randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    return await this.prismaService.numbers.create({
      data: {
        number: randomNumber,
      },
    });
  }
}
