class Book {
  constructor(title, auther, price, pubYear, pageNum, currentPage, readStatus) {
    this.title = title;
    this.aurther = auther;
    this.price = price;
    this.pubYear = pubYear;
    this.pageNum = pageNum;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
  }
  updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }
  updateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
  }
}

export default Book;
