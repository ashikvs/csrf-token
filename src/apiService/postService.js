import {ajax} from 'rxjs/ajax';
import {
    map,
    catchError
} from 'rxjs/operators';
import {of} from 'rxjs';

export default {

    postHlmUsers(baseurl) {
        
        const users = ajax({
            url:baseurl,
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body:{
                'Content-Type': 'application/json'
            }
        });
       
    }
}
