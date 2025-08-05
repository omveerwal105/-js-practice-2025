class Shape {
    #color;
    
    constructor(color = 'Transparent'){
        this.#color = color
    }

    getcolor(){
        return this.#color;
    }
    getArea(){
        return 0;
    }

    getType(){
        return "Generic Shape"
    }

    static isShape(obj){
          return obj instanceof Shape ;
    }

    setColor(newColor){
        if(typeof newColor !== 'string'){
           throw new TypeError('Color must be a string');
        }

        this.#color = newColor;

    }
}

class Rectangle extends Shape {
    constructor(width , height ,color){
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }

    getType(){
        return 'Rectangle';
    }
}

class Circle extends Shape {
    constructor(radius , color) {
        super(color);
        this.radius = radius;
    }

    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    getType(){
        return 'Circle';
    }
}

const shapes = [new Rectangle(4,5) , new Circle(3)];
shapes.forEach((shape)=>{
    console.log(shape.getType(), "Area", shape.getArea().toFixed(2) ,  );
});
const r = new Rectangle(4,5);
console.log(r.getcolor());
r.setColor('green');
console.log(r.getcolor());

console.log(Shape.isShape(r));
console.log(Shape.isShape({}));

// Make a class Triangle that extends Shape and takes 3 sides. Use Heron’s formula to calculate area.

class Triangle extends Shape {
    constructor(s1,s2,s3,color){
        super(color);
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }
    getArea(){
            const { a, b, c } = this;
    const s = (a + b + c) / 2; // semiperimeter
    // Heron's formula
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    getType(){
        return 'Traingle';
    }
}