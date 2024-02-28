import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { FinancialModule } from './financial/financial.module';
import { ReportsModule } from './reports/reports.module';
import { SecurityModule } from './security/security.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthenticationModule, UserModule, FinancialModule, ReportsModule, SecurityModule, UtilitiesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
