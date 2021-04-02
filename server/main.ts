import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  
  const config = new DocumentBuilder()
  .setTitle('Net Banking')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('Net Banking')
  .build();
const document = SwaggerModule.createDocument(app, config, {
  ignoreGlobalPrefix: true,
});
fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));
SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT||5000);
}

bootstrap()
// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch(err => console.error(err));
}

