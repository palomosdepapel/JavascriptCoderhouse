class Verticalspeed {

    static inicializacion() {
        Verticalspeed.aguja = $('#vertical-speed-aguja');
    }

    static rotarAguja(valor) {
        if (valor > 6000)
            valor = 6000;
        else if (valor < -6000)
            valor = -6000;
        valor = valor * (167 / 6000)
        Verticalspeed.aguja.css('transform', 'rotate(' + valor + 'deg)');
    }

    static main(valor) {
        Verticalspeed.rotarAguja(valor);
    }

}

Verticalspeed.inicializacion();