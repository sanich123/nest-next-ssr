import { Controller, Get } from '@nestjs/common';

@Controller('/tracks')
export class TrackController {
  create() {}
    @Get()
  getAll() {
      return 'its working'
  }

  getOne() {}

  delete() {}
}
