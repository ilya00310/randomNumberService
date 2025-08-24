import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('number_service').setDescription('Documentation REST API').setVersion('1.0.0').build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('/api/docs',app,document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
