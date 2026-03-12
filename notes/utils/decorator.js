class Decorator{
  static drawLine(){
    console.log("=".repeat(30));
  }

  static presentMenu(welcome){
    this.drawLine();
    console.log('\n');
    console.log(`${welcome}`);
    drawLine();
  }
}
module.exports = Decorator;
