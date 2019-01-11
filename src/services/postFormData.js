export function postFormData(formData, type){
    let BaseURL = 'http://localhost/project-react/public/api/';

    console.log(formData);
    return new Promise((resolve, reject) =>{
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error =>
                reject('Error:', error))
            .then(response => {
                resolve(response);
                console.log('Success:', response)
            });
    });

}