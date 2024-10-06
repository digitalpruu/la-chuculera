const title = "La Chuculera";
const email = "santamariasolano@yahoo.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en probar la deliciosa chucula de ${title} y me gustaría recibir más información sobre sus productos. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3123651689";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En la CHUCULERA nos especializamos en la fabricación y elaboración de la chucula (chocolate de los siete granos) bebida tradicional de nuestros ancestros Muiscas (Chibchas), que combina granos de cacao con cereales y leguminosas.\n" +
            "Nuestro objetivo es ofrecer una experiencia única y deliciosa en cada sorbo, manteniendo el autentico y profundo sabor del cacao a través de recetas tradicionales y técnicas artesanales que nos permiten dar cuerpo y forma a la chucula, garantizando así que cada producto sea elaborado con la más alta calidad y mantenga las propiedades naturales de la chucula, con ese sabor inigualable que la hace única y original, lo que permite el deguste de paladares exquisitos y suculentos.\n" +
            "En la CHUCULERA además de la chucula, buscamos explorar nuevas formas de disfrutar el cacao, agregando ingredientes que realcen el sabor y aporten beneficios naturales a la salud del consumidor, por eso nos enorgullece ofrecer productos no solo deliciosos al paladar si no también saludables.\n" +
            "Descubre el secreto de los tres hervores con el sabor autentico de la chucula y del cacao, para que cada sorbo del chocolate de los siete granos lo transporte a un mundo de deleite y de placer.\n" +
            "!EN LA CHUCULERA EL CACAO ES UNA EXPERIENCIA QUE VA MÁS ALLÁ DE LO COMÚN!  "
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "El secreto de los tres hervores",
            p2: "El sabor auténtico de la chucula y del cacao",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/gntkqHUaZjtTXXay/?mibextid=qi2Omg",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};
export default textos;
