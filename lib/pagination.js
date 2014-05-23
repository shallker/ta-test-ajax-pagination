module.exports = Pagination;

function Pagination(itemsTotal, itemsPerPage) {
  var self = this;

  self.currentPage = 1;
  self.itemsTotal = itemsTotal;
  self.itemsPerPage = itemsPerPage;
  self.pagesTotal = self.itemsTotal / self.itemsPerPage;
}

Pagination.prototype.getTotalPages = function () {
  return this.pagesTotal;
}

Pagination.prototype.nextPage = function () {
  if (this.currentPage >= this.pagesTotal) {
    throw new Error('MAXIMUM_PAGE');
  }

  this.currentPage++;

  return {
    page: this.currentPage,
    items: this.itemsPerPage,
    itemStart: (this.currentPage - 1) * this.itemsPerPage,
    itemEnd: (this.currentPage - 1) * this.itemsPerPage + this.itemsPerPage
  }
}

Pagination.prototype.prevPage = function () {
  if (this.currentPage <= 1) {
    throw new Error('MINIMUM_PAGE');
  }

  this.currentPage--;

  return {
    page: this.currentPage,
    items: this.itemsPerPage,
    itemStart: (this.currentPage - 1) * this.itemsPerPage,
    itemEnd: (this.currentPage - 1) * this.itemsPerPage + this.itemsPerPage
  }
}

Pagination.prototype.goToPage = function (page) {
  if (page < 1) {
    throw new Error('MINIMUM_PAGE');
  }

  if (page > this.pagesTotal) {
    throw new Error('MAXIMUM_PAGE');
  }

  this.currentPage = page;

  return {
    page: this.currentPage,
    items: this.itemsPerPage,
    itemStart: (this.currentPage - 1) * this.itemsPerPage,
    itemEnd: (this.currentPage - 1) * this.itemsPerPage + this.itemsPerPage
  }
}

Pagination.prototype.getCurrentPage = function () {
  return {
    page: this.currentPage,
    items: this.itemsPerPage,
    itemStart: (this.currentPage - 1) * this.itemsPerPage,
    itemEnd: (this.currentPage - 1) * this.itemsPerPage + this.itemsPerPage
  }  
}
