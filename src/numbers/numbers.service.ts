import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class NumbersService {
  constructor(private prismaService: PrismaService) {}
}
