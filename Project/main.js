const ctx = document.getElementById('mychart').getContext('2d');
const ctx2 = document.getElementById('mychart2').getContext('2d');
const ctx3 = document.getElementById('mychart3').getContext('2d');
const ctx4 = document.getElementById('mychart4').getContext('2d');

const listColors = ['#c9b66d', '#5164d3', '#800000', '#BA55D3', '#D2691E', '#FFFF00', '#4169E1' , '#2F4F4F', '#00FFFF', '#000080', '#696969', '#696969'];
const listColors2 = ['#c9b66d', '#5164d3', '#800000', '#BA55D3', '#D2691E', '#FFFF00', '#4169E1' , '#2F4F4F', '#00FFFF', '#000080', '#696969', '#696969'];

const chart = new Chart(ctx, {
    // the type of chart we want to use/create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Climate data for Safi Average high °C (°F)',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [18.2, 19.0, 20.6, 21.3, 23.3, 24.6, 28.8, 29.2, 27.6, 25.2, 21.6, 18.8],
        }]
    },
    // The Configuration Options
    options: {}
})

// ============
// ============
const chart2 = new Chart(ctx2, {
    // the type of chart we want to use/create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Climate data for Safi Daily mean °C (°F)',
            backgroundColor: 'rgb(34, 157, 179)',
            borderColor: 'rgb(26, 42, 61)',
            data: [13.0, 13.8, 14.9, 16.0, 18.3, 20.3, 23.7, 24.1, 22.6, 20.0, 16.6, 13.7],
        }]
    },
    // The Configuration Options
    options: {}
})
// ============
// ============
const chart3 = new Chart(ctx3, {
    // the type of chart we want to use/create
    type: 'pie',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Climate data for Safi Average low °C (°F)',
            backgroundColor: listColors,
            borderColor: 'rgb(26, 42, 61)',
            data: [7.7, 8.5, 9.2, 10.8, 13.3, 16.0, 18.5, 18.9, 17.5, 14.8, 11.6, 8.5],
        }]
    },
    // The Configuration Options
    options: {}
})
// ============
// ============
const chart4 = new Chart(ctx4, {
    // the type of chart we want to use/create
    type: 'polarArea',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Climate data for Safi Daily mean °C (°F)',
            backgroundColor: listColors2,
            borderColor: 'rgb(26, 42, 61)',
            data: [13.0, 13.8, 14.9, 16.0, 18.3, 20.3, 23.7, 24.1, 22.6, 20.0, 16.6, 13.7],
        }]
    },
    // The Configuration Options
    options: {}
})