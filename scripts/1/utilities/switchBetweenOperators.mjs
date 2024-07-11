export default function switchBetweenOperators(
    operator, plusCallback, percentCallback, multiplicativeCallback
) {
    switch (operator) {
        case "+": plusCallback(); break
        case "%": percentCallback(); break
        case "*": multiplicativeCallback(); break
    }
}