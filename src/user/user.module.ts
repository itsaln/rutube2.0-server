import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from '@app/user/user.controller'
import { UserService } from '@app/user/user.service'
import { UserEntity } from '@app/user/user.entity'
import { SubscriptionEntity } from '@app/user/subscription.entity'

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [TypeOrmModule.forFeature([UserEntity, SubscriptionEntity])]
})
export class UserModule {}
