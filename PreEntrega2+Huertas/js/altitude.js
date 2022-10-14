class Altitude {
    static inicializacion() {
        Altitude.aguja = $('#agujaAltitude');
        Altitude.presion0 = $('#presion0');
        Altitude.presion1 = $('#presion1');
        Altitude.presion2 = $('#presion2');
        Altitude.presion3 = $('#presion3');
        Altitude.n100 = $('#n100');
        Altitude.n1000 = $('#n1000');
        Altitude.n10000 = $('#n10000');
    }

    static rotacionAguja(valor) {
        valor = valor * .36;
        Altitude.aguja.css('transform', 'rotate(' + valor + 'deg)');
    }

    static _100(valor) {// 13200
        let digitoPrevio = parseInt((valor / 10) % 10);
        let digitoActual = parseInt((valor / 100) % 10);
        let desplazamiento = digitoActual * -30;
        Altitude.n100.css('transform', 'translateY(' + (desplazamiento - (digitoPrevio * 3)) * .2564 + '%)');//2
    }

    static _1000(valor) {
        let digitoActual = parseInt((valor / 1000) % 10);
        digitoActual = digitoActual * -30;
        Altitude.n1000.css('transform', 'translateY(' + digitoActual * .3030 + '%)');//3
    }

    static _10000(valor) {
        let digitoActual = parseInt((valor / 10000) % 10);
        digitoActual = digitoActual * -30;
        Altitude.n10000.css('transform', 'translateY(' + digitoActual * .3030 + '%)');//1
    }

    static presion(valor) {//29.92
        let posicion = [];
        let digitoActual = 0;

        valor = valor * 100;//2992

        for (let i = 0; i < 4; i++) {
            digitoActual = parseInt((valor / Math.pow(10, i)) % 10);//
            posicion[i] = (digitoActual * -30) * 0.3333;
        }

        Altitude.presion0.css('transform', 'translateY(' + posicion[0] + '%)');
        Altitude.presion1.css('transform', 'translateY(' + posicion[1] + '%)');
        Altitude.presion2.css('transform', 'translateY(' + posicion[2] + '%)');
        Altitude.presion3.css('transform', 'translateY(' + posicion[3] + '%)');

    }

    static main(valor, valor2) {
        Altitude.rotacionAguja(valor);
        //Altitude.presion(valor2);
        Altitude._100(valor);
        Altitude._1000(valor);
        Altitude._10000(valor);
    }
}

Altitude.inicializacion();