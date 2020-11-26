//diferencia de años
export function getDifferenceYear (year) {

    return new Date().getFullYear() - year;

}

//calculo del total según la marca
export function calculateBrand (brand) {
    let increase;

    switch(brand) {
        case 'volkswagen':
            increase = 1.35;
            break;
        case 'ford':
            increase = 1.30;
            break;
        case 'chevrolet':
            increase = 1.25;
            break;
        case 'peugeot':
            increase = 1.20;
            break;            
        case 'renault':
            increase = 1.15;
            break;
        case 'fiat':
            increase = 1.10;
            break;

        default:
            break;

    }

    return increase;

}

//calculo para el tipo de seguro
export function getPlan(plan) {
    return (plan === 'terceros completo') ? 1.20 : 1.50;

}