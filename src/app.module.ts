import { Module } from "@nestjs/common";
import { NumbersModule } from "./numbers/numbers.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [NumbersModule, DatabaseModule],
})
export class AppModule {}
