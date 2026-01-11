const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let avePrice = (msftData[0][3] + msftData[1][3])/2;

console.log('Average closing price of MSFT is ' + avePrice.toFixed(2));