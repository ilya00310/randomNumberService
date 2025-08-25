import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Numbers } from '@prisma/client'

@Injectable()
export class NumbersService {
  constructor(private prismaService: PrismaService) {}

  async generate(): Promise<Numbers> {
      const randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      return await this.prismaService.numbers.create({
        data: {
          number: randomNumber,
        },
      });
  }

  async retrieve(id: number): Promise<number|null> {
    const currentNumber = await this.prismaService.numbers.findUnique({
      where: { id },
    });
    if (!currentNumber) {
      return null
    }
    return currentNumber.number;
  }
}
