export const format_date = (date) => {
    return new Date(date).toLocaleDateString('pt-BR')
}

export const format_double = (value, casas = 2) => {
    let number = (value || 0)

    number = Math.round((number + Number.EPSILON) * 100) / 100

    return number.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: casas })
}
