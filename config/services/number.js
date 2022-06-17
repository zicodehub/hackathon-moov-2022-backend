module.exports = {
    is_ten_digits: (num) => num.length == 10,

    is_moov: (num) => {
        return this.is_ten_digits(num) && num.startsWith("01")
    }
}