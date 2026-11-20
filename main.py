strip: neopixel.Strip = None
pos = 0
length = 1
strip = neopixel.create(DigitalPin.P0, 300, NeoPixelMode.RGB)
pos = 0
length = 1

def on_button_pressed_ab():
    global pos
    pos = randint(0, 299)
    strip.clear()
    strip.range(pos, length).show_color(neopixel.colors(NeoPixelColors.RED))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_a():
    global pos
    pos = max(0, pos - 1)
    strip.clear()
    strip.range(pos, length).show_color(neopixel.colors(NeoPixelColors.RED))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global pos
    pos = min(299, pos + 1)
    strip.clear()
    strip.range(pos, length).show_color(neopixel.colors(NeoPixelColors.RED))
input.on_button_pressed(Button.B, on_button_pressed_b)
