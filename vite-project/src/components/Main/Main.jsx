import Card from "../Card/Card"

const Main = ({ news}) => {
   
    console.log(news)

    return (
        <main>
            <section className="h-fit">
                <p>Welcome to Hackers News!</p>
                <div className="">
                    {news.map((article, index) => {

                        //     return <li key={index}>{ 'article.story_title ?   article.story_title : article.title} </li>
                        return <Card key={index} title={article.story_title ? article.story_title : article.title} date={article.updated_at} url={article.story_url} />
                    }
                    )}
                </div>

            </section>

        </main>
    )
}

export default Main