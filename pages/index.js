import Link from 'next/link';

function Home(){
    return(
    <div>
        <h1>Tinha que ser gay mesmo</h1>
        <Link href="/sobre">
            <a>Assessa pagina sobre</a>
        </Link>
    </div>
    )
}
export default Home