import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TodoService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createTodoDto: Prisma.todo_itemsCreateInput) {
    return this.databaseService.todo_items.create({
      data: createTodoDto,
    });
  }

  findAll() {
    return this.databaseService.todo_items.findMany();
  }

  findOne(id: number) {
    return this.databaseService.todo_items.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTodoDto: Prisma.todo_itemsUpdateInput) {
    return this.databaseService.todo_items.update({
      where: {
        id,
      },
      data: updateTodoDto,
    });
  }

  remove(id: number) {
    return this.databaseService.todo_items.delete({
      where: {
        id,
      },
    });
  }
}
