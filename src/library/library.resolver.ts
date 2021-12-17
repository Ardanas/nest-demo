import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { LibraryModel } from './model/library.model';
import { LibraryService } from './library.service';
import { BookModel } from './model/book.model';

@Resolver(LibraryModel)
export class LibraryResolver {
  constructor(private readonly libraryService: LibraryService) {}
  @Query((type) => String)
  getHello() {
    return this.libraryService.getHello();
  }
  @Query((returns) => [LibraryModel], { name: 'libs' })
  getLibrary() {
    return this.libraryService.getLibrary();
  }
  @Query((returns) => LibraryModel, { name: 'lib' })
  getLibraryById(@Args('id') id: string) {
    return this.libraryService.getLibraryById(id);
  }
  @ResolveProperty((type) => BookModel, { name: 'books' })
  getBook(@Parent() params: LibraryModel) {
    return this.libraryService.getBook(params);
  }
}
