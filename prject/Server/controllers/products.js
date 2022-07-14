import {connection} from "../dbService.js";

    export const getAllDAta=async()=>{
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM productcomponent;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }



    
