import { Injectable } from '@nestjs/common';

type LibType = {
  id: String;
  name: String;
};

type BookType = {
  id: String;
  lib: String;
  name: String;
  author: Number;
};

@Injectable()
export class LibraryService {
  libraries: LibType[];
  books: BookType[];
  constructor() {
    this.libraries = [
      { id: 'lib1', name: 'lib1' },
      { id: 'lib2', name: 'lib2' },
    ];
    this.books = [
      { id: 'book1', lib: 'lib1', name: 'book1', author: 1 },
      { id: 'book1', lib: 'lib2', name: 'book2', author: 2 },
    ];
  }
  getHello(): string {
    return 'Hello World!';
  }
  getLibrary(): LibType[] {
    return this.libraries;
  }
  getLibraryById(id: string) {
    return this.libraries.find((item) => item.id === id);
  }
  getBook(params: LibType): BookType {
    return this.books.find((book) => book.lib === params.id);
  }
}
