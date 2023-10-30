import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnexModule } from "nest-knexjs";


@Module({
  imports: [
    KnexModule.forRootAsync({
      imports: [  ConfigModule.forRoot(),],
      useFactory: async (configService: ConfigService) => ({
        config: {
          client: 'pg',
          connection: {
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            user: configService.get('DB_USER'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
          },
          pool: { min: 2, max: 10 },
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
