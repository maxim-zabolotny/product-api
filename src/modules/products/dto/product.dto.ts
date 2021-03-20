import { IsNotEmpty } from 'class-validator';

export class ProductDto {
    @IsNotEmpty()
    readonly img: string;

    @IsNotEmpty()
    readonly city: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly description: string;
}
