class Airspeed {

    static inicializacion() {
        Airspeed.aguja = $('#airspeed-aguja');
    }

    static rotarAguja(valor) {
        if (valor <= 50)
            valor = valor * (26 / 50);
        else
            valor = (valor * (310 / 300)) - 26;
        Airspeed.aguja.css('transform', 'rotate(' + valor + 'deg)');
    }

    static main(valor) {
        Airspeed.rotarAguja(valor);
    }

}

Airspeed.inicializacion();