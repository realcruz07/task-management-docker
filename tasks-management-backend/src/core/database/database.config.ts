import { DataSource } from 'typeorm';

const databaseConfig = new DataSource({
  type: 'mysql',
  host: 'database',
  port: 3306,
  username: 'root',
  password: '',
  database: 'tasks-management',
  synchronize: false,
  entities: ['**/*.entity{.ts,.js}'],
  migrations: ['src/core/database/migrations/*.ts'],
});

export default databaseConfig;
