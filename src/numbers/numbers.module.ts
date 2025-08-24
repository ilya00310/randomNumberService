import { Module } from "@nestjs/common";
import { NumbersService } from "./numbers.service";
import { NumbersController } from "./numbers.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  providers: [NumbersService],
  controllers: [NumbersController],
  imports: [DatabaseModule],
})
export class NumbersModule {}
