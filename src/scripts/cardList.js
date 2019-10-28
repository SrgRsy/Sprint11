import Card from './card.js';
export default class CardList {
    constructor(container, arr) {
      this.container = container;
      this.arr = arr;
      this.render();
    }
    render() {
        this.arr.forEach((item) => {
          const name = item.name;
          const link = item.link;
          this.container = new Card(name, link);
    
        })
      }
    }