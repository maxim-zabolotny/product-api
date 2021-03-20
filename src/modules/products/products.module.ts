import { Module } from '@nestjs/common';

import { ProductsService } from './products.service';
import { productsProviders } from './products.providers';
import { ProductsController } from './products.controller';

@Module({
  providers: [ProductsService, ...productsProviders],
  exports: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
