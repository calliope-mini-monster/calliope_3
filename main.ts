input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendNumber(1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
