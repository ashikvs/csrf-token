import {ajax} from 'rxjs/ajax';
import {
    map,
    catchError
} from 'rxjs/operators';
import {of} from 'rxjs';

export default {

    getHlmUsers(baseurl) {
        debugger
        const users = ajax({
            url:baseurl+'/hlm-users.json',
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        return users;
    }
}
