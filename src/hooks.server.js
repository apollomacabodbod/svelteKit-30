
import { auth } from '$db/fake_auth'

export async function handle({ event, resolve }){
    const user = auth() 
    event.locals.user = user;
    
    return resolve(event)

}