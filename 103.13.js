/* Создать объект "круг" c 2 параметрами - радиус, который мы можем прочитать и перезаписать, и площадь, которую мы можем только
прочитать */

circle = {
    radius: 5,
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

console.log(circle.radius, circle.area);