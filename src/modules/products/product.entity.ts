import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    img: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    city: string;
    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    price: number;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;
}
