class Attitude {

    static inicializacion() {
        Attitude.imagen2 = $('#imagen2');
        Attitude.imagen3 = $('#imagen3');
    }

    static pitchRoll(roll, pitch) {
        if (pitch > 80)
            pitch = 80;
        else if (pitch < -80)
            pitch = -80;

        pitch = (0.3125) * pitch;

        roll = roll * -1;
        Attitude.imagen2.css('transform', 'rotate(' + roll + 'deg) translateY(' + pitch + '%)');
    }

    static roll(roll) {
        roll = roll * -1;
        Attitude.imagen3.css('transform', 'rotate(' + roll + 'deg)');
    }

    static main(roll, pitch) {
        Attitude.pitchRoll(roll, pitch);
        Attitude.roll(roll);
    }
}

Attitude.inicializacion();