// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { Product, Category } from 'mystore-shared-orm';
// import { AppDataSource } from 'mystore-shared-orm/src/config/database.config'; // Import your shared DB config
// import { Product } from 'mystore-shared-orm/src/entities/Product';
// import { Category } from 'mystore-shared-orm/src/entities/Category';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'Mystore',
      entities: [Product, Category],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, Category]),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
