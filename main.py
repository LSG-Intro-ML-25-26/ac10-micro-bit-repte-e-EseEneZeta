x = 2
y = 2

while True:
    led.plot(x, y)
    basic.pause(100)
    led.unplot(x, y)
    acc_x = input.acceleration(Dimension.X)
    acc_y = input.acceleration(Dimension.Y)
    if acc_x < -150 and x > 0:
        x = x - 1
    elif acc_x > 150 and x < 4:
        x = x + 1
    if acc_y < -150 and y > 0:
        y = y - 1
    elif acc_y > 150 and y < 4:
        y = y + 1