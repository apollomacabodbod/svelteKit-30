


export async function load({ fetch, params , setHeaders }){

    const res = await fetch(`https://syntax.fm/api/shows/${params.num}`)
    const data = await res.json();

    console.log(data)


    setHeaders({
        'Cache-Control': 'max-age=60'
    })

    return {

        episode: data
    };


}