import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CommentsService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { UpdateCommentDto } from './dto/update.comment.dto';

@Controller('comments')
export class CommentsController {

    constructor(private readonly commentsService: CommentsService) {

    }

    @Get(":id")
    findAll(@Param('id', new ParseIntPipe()) id: number) {
        return this.commentsService.findAll(id);
    }

    @Get(":id")
    getById(@Param('id', new ParseIntPipe()) id: number) {
        return this.commentsService.findById(id);
    }

    @Post()
    create(@Body() body: CreateCommentDto) {
        return this.commentsService.create(body);
    }

    @Put(":id")
    update(@Param('id', new ParseIntPipe()) id: number, @Body() body: UpdateCommentDto) {
        return this.commentsService.update(id, body);
    }

    @Delete(":id")
    delete(@Param('id', new ParseIntPipe()) id: number) {
        this.commentsService.delete(id);
    }

}
