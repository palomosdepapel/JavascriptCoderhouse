class Heading {

    static inicializacion() {
        Heading.indicador = $('#heading');
    }

    static rotar(valor) {
        Heading.indicador.css('transform', 'rotate(' + valor * -1 + 'deg)');
    }

    static main(valor) {
        Heading.rotar(valor);
    }

}

Heading.inicializacion();