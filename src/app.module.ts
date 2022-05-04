import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      'mongodb+srv://sanich123:17011987@cluster0.1ffa7.mongodb.net/music?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
