class Matrix {
  constructor(string) {
    this.string = string;
    this.rows = this.extractRows();
    this.columns = this.extractColumns();
  }
  
  extractRows() {
    let start = 0, end = 0;
    let rows = [];

    while(true) {
      this.string.indexOf('\n', start) == -1 ? end = this.string.length : end = this.string.indexOf('\n', start);
      let row = this.string.slice(start, end).split(" ").map((each) => {
        return parseInt(each);
      });
      rows.push(row);
      if(end === this.string.length) break;
      start = end + 1;
    }

    return rows;
  }

  extractColumns() {
    let columns = [];
    for(let i = 0; i < this.rows.length; i++) {
      let column = [];
      for(let j = 0; j < this.rows.length; j++) {
        column.push(this.rows[j][i]);
      }
      columns.push(column);
    }
    return columns;
  }

}
