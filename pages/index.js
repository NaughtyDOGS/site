import Link from 'next/link';

function Home(){
    return(
    <div>
        <h1>em Progreço by naughty</h1>
        <Link href="/sobre">
            <a>Assessa pagina sobre</a>
        </Link>
    </div>
    )
}
export default Home