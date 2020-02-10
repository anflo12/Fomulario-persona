
const Host= 'https://webapi1255.000webhostapp.com'

export function post(Url,Body,navigation) {
    fetch(Host+Url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Body),
    })
      .then(response => response.json())
      .then(responseJson => {
        // If server response message same as Data Matched
        if (responseJson === 'Data Matched') {
          //Then open Profile activity and send user email to profile activity.
         navigation.navigate('Aspirantes')
        } else {
          alert(responseJson);
        }
      })
      .catch(error => {
        console.error(error);
      });
    
}
