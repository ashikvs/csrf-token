import {ajax} from 'rxjs/ajax';
import {
    map,
    catchError
} from 'rxjs/operators';
import {of} from 'rxjs';

export default {

    getHlmUsers(baseurl) {
        const Hlmusers = ajax({
            url:baseurl+'/hlm-users.json',
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        return Hlmusers;
    },

    getUser(baseurl) {
        const users = ajax({
            url:baseurl,
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        return users;
    }
}
