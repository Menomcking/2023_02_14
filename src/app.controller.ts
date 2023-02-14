import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import NewTarsasjatekDto from './newTarsasjatek.Dto';
import { Tarsasjatek } from './tarsasjatek.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }
  @Get('/tarsasjatek')
  listaTarsasjetk(){
    const tarsasjatekRepo = this.dataSource.getRepository(Tarsasjatek);
    return tarsasjatekRepo.find();
  }
  @Delete('/tarsasjatek/:id')
  deleteTarsasjatek(@Param('id') id: number){
    const tarsasjatekRepo = this.dataSource.getRepository(Tarsasjatek);
    tarsasjatekRepo.delete(id);
  }
  @Post('/tarsasjatek')
  async newTarsasjatek(@Body() tarsasjatek: NewTarsasjatekDto){
    const tarsasjatekRepo = this.dataSource.getRepository(Tarsasjatek);
    tarsasjatekRepo.save(tarsasjatek);
    return tarsasjatek;
  }

}
