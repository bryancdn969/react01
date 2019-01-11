export function PostData(type, userData) {
    console.log( JSON.stringify(userData));
    let BaseURL = 'http://localhost/project-react/public/api/';

    return new Promise((resolve, reject) =>{
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers:{
                'Content-Type': 'application/json'
            }
          }).then(res => res.json())
                .catch(error =>
                    reject(error))
                .then(response => {
                    resolve(response);
                    console.log("Good: ",response)
          });

      });
}