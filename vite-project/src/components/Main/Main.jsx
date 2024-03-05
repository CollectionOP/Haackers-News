
const Main = ({news}) => {

console.log(news)

    return(
        <main>
            <section className="h-[700px]">
                <p>Welcome to Hackers News!</p>
                {news.map((article,index) => {
                    return <li>{typeof article.story_title === 'string' && article.story_title}</li>
                }

                    
                    
                )}
                
                
            </section>
            
        </main>
    )
}

export default Main