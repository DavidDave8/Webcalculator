export function fakultet(tall) {
    if (tall < 0) return NaN; 
    if (tall <= 1) return 1;  
    return tall * fakultet(tall - 1);
}

module.exports = { fakultet };
