const data = {
    nums: {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        0: "",
    },
    dozens: {
        1: "one",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
        0: "",
    },
    aa: {
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
        0: "ten",
    },
};
module.exports = function toReadable(number) {
    if (number === 0) return "zero"
    let arr = number.toString().split("").reverse();
    let hundreds = arr.length == 3 ? data.nums[arr[2]] + " hundred": "";
    let dozens = arr.length > 1 ? arr[1] > 1 ? arr.length > 2 ? " " + data.dozens[arr[1]] : data.dozens[arr[1]] : arr[1] == 0 ? "" : arr.length > 2 ? " " + data.aa[arr[0]] : data.aa[arr[0]] : "";
    let units = arr[1] == 1 ? "" : arr.length > 1 && arr[0] != 0 ? " " + data.nums[arr[0]] : data.nums[arr[0]];

    return hundreds + dozens + units;
};
