let data = [
{
    name: 'Red Panda',
    rank: '1st'
},
{
    name: 'Fennec Fox',
    rank: '2nd'
},
{
    name: 'Maine Coon',
    rank: '3rd'
},
{
    name: 'Sea Otter',
    rank: '4th'
},
{
    name: 'Pikas',
    rank: '5th'
},
{
    name: 'Sloth',
    rank: '6th'
}

];

const info = document.querySelector('#info');
  
let details = data.map(function(item) {
  return '<div>' + item.name + ' ' + 'placed ' + item.rank + ' as cutest animal!' + '</div>';
});

  
  info.innerHTML = details.join('\n');