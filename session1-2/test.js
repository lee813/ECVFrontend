class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
      this.test1 = () => {
            console.log(this)
        }
    }

    test(){
        function testInside(){
            console.log(this)
        }
        testInside()
        let a  = '1'
        this.a = a
        return this
    }

}

window.onload = function () {
    const a1 = {
        a:1,
        b:2,
    }

    a1.c=3

    console.log(a1)

    const testFunc = () => {
        console.log(this)
    }

    const testFunc1 = function(){
        console.log(this)
    }

    testFunc()
    testFunc1()

    const rec = new Rectangle(10,10)

    
    console.log(rec.test())
    console.log(rec.test1()) 

}


