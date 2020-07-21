// from data.js
var tableData = data;

let tbody= d3.select('tbody');

console.log(tableData);

data.forEach(sightings => {
    console.log(sightings);
    let row= tbody.append('tr');
    Object.entries(sightings).forEach(([key,val]) => {
        console.log(key,val);
        let cell= row.append('td');
        cell.text(val);
    })
});

let button= d3.select('#filter-btn');
button.on('click', () => {
    d3.select('tbody').html('');
    d3.event.preventDefault();

    let inputElement= d3.select('#datetime');

    let inputVal= inputElement.property('value');
    
    let inputData= tableData.filter(record => record.datetime === inputVal);

    console.log(inputData);

    inputData.forEach(input => {
        let row = tbody.append('tr');

        Object.entries(input).forEach(([key,value]) => {
            let cell = row.append('td');
            cell.text(value);
        });
    });
}
    );

