import { Controller, Inject, Post, Get, Delete, Param, Body, Request, Patch, NotFoundException } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from '../../core/constants';
import { Product } from './product.entity';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) { }
  @Post()
  async create(@Body() productData: ProductDto) {
    return await this.productService.create(productData);
  }
  /*@Post()
  async create(@Body() post: ProductDto, @Request() req): Promise<Product> {
    // create a new post and return the newly created post
    return await this.productService.create(post, req.user.id);
  }*/
 /* create(@Body() productDto: ProductDto) {
    // create a new post and return the newly created post
    return this.productService.create(productDto);
  }*/

  /*async create(product: ProductDto): Promise<Product> {
    return await this.productService.create(product);
  }*/

  @Get()
  findAll() {
    return this.productService.getProducts();
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    // tslint:disable-next-line:no-console
    // delete the post with this id
    const deleted = await this.productService.deleteProduct(id);

    // if the number of row affected is zero, then the post doesn't exist in our db
    if (deleted === 0) {
      throw new NotFoundException('This Post doesn\'t exist');
    }

    // return success message
    return 'Successfully deleted';
  }
}
