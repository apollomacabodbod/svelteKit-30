


export async function handle({ event, resolve }){
    console.log("event", event)
    
    return resolve(event)

}