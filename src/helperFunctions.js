export function shortSurname(surname) {
    const regex = /[A-Z]/g;
    const firstLetter = surname.match(regex);

    return firstLetter[0] + ".";
}