import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
    AfterCreate
} from 'sequelize-typescript';

@Table({
    tableName: "products",
    timestamps: true
})

export  class ProductModel extends Model<ProductModel>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    price!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    stock!: number;
 
}