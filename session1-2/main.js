window.onload = function () {
    // console.log('load')

    // $("#test").click(function () {
    //     console.log('here')
    // })

    // var name = "kittens";
    // if (name == "puppies") {
    //     name += "!";
    // } else if (name == "kittens") {
    //     name += "!!";
    // } else {
    //     name = "!" + name;
    // }
    // name == "kittens!!"; // true

    // console.log(name);

    // console.log(this)

    // var test = function () {
    //     var array = ['1','2']
    //     const newArray = array.concat('3')

    //     const newObject = {
    //         'bla': 1,
    //         'bla2': 2,
    //     }

    //     newObject.bla2 = 3,

    //     console.log(newObject)
    // }

    // const test1 = () => {
    //     console.log(this)
    // }

    // test()
    // test1()


    var test2 = {dessert: '🎂', drink: '🍵', fruit: '🍎', bla: 'asdasd'}

    // var dessert = test2.dessert
    // var drink = test2.drink

    const { dessert, drink, fruit } = test2

    var newObject = {
        'dessert': dessert,
        'drink': drink,
        'fruit': fruit,
    }
    const banana = 'banana'
    const apple = banana
    const pear = () => {
        console.log()
    }
    const newObject2 = {
        dessert,
        drink,
        fruit,
        apple,
        pear,
    }

    newObject2.apple = 'apple'
    delete newObject2.pear
    // 报错 

    let newObject3 = {
        dessert,
        drink,
        fruit,
        apple,
        pear,
    }
    delete newObject3.pear

    const cities = [
        {
            name: 'montreal',
            lat: '100',
        },
        {
            name: 'new york',
            lat: '101',
        },
        {
            name: 'boston',
            lat: '102',
        },
        {
            name: 'toronto',
            lat: '103',
        },
        {
            name: 'washington',
            lat: '104',
        },
    ]

    let breakfast = {}

    // 将{drink: '啤酒'} 对象拷贝到breakfast对象中
    Object.assign(breakfast, {drink: '啤酒'})

    console.log(breakfast) // {drink: "啤酒"}


    const beer = {
        drink: '啤酒',
    }

    breakfast = {...beer}

    const test3 = {...test2}
    const test3 = test2
    cosnole.log(rest)
    const test = {
        onClick: () => {
            console.log('clicked')
        },
        onFinish: () => {
            alert('finished')
        },
    }

}


