let acc_x: number;
let acc_y: number;
let x = 2
let y = 2
while (true) {
    led.plot(x, y)
    basic.pause(100)
    led.unplot(x, y)
    acc_x = input.acceleration(Dimension.X)
    acc_y = input.acceleration(Dimension.Y)
    if (acc_x < -150 && x > 0) {
        x = x - 1
    } else if (acc_x > 150 && x < 4) {
        x = x + 1
    }
    
    if (acc_y < -150 && y > 0) {
        y = y - 1
    } else if (acc_y > 150 && y < 4) {
        y = y + 1
    }
    
}
