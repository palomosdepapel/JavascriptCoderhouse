class Panel {

    static instrumentos(valores) {
        Airspeed.main(valores[0]);
        Attitude.main(valores[1], valores[2]);
        Heading.main(valores[3]);
        Altitude.main(valores[4]/* ,valores[5] */);
        Verticalspeed.main(valores[5]);
    }

    static main() {
        let data = [];
        let slider1 = $('#valor1');
        let slider2 = $('#valor2');
        let slider3 = $('#valor3');
        let slider4 = $('#valor4');
        let slider5 = $('#valor5');
        let slider6 = $('#valor6');

        slider1.on('input', function () {
            data[0] = slider1.val();
            console.log(data[0]);
            Panel.instrumentos(data);
        });
        slider2.on('input', function () {
            data[1] = slider2.val();
            console.log(data[1]);
            Panel.instrumentos(data);
        });
        slider3.on('input', function () {
            data[2] = slider3.val();
            console.log(data[2]);
            Panel.instrumentos(data);
        });
        slider4.on('input', function () {
            data[3] = slider4.val();
            console.log(data[3]);
            Panel.instrumentos(data);
        });
        slider5.on('input', function () {
            data[4] = slider5.val();
            console.log(data[4]);
            Panel.instrumentos(data);
        });
        slider6.on('input', function () {
            data[5] = slider6.val();
            console.log(data[5]);
            Panel.instrumentos(data);
        });
    }

}

Panel.main();




