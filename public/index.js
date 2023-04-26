async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BTNX&interval=1min&apikey=fe1dcefef44145ae82198e86b2ab52bc')
    const result = await response.json() 
    const {GME, MSFT, DIS, BTNX} = result

    const stocks = [GME, MSFT, DIS, BNTX];


console.log(result);
}
//fe1dcefef44145ae82198e86b2ab52bc don't forget to remove
main()