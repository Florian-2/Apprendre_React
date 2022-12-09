function Articles({ displayArticle }) {
    let content = <p>Aucun article</p>;

    if (displayArticle) {
        content = (
            <div className="card">
                <h2>Titre de l'article</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    consectetur asperiores dicta iusto inventore eius corrupti eum! Iste
                    doloremque delectus voluptas quos. Et at consectetur similique
                </p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="title">Liste des articles</h1>

            {/* Exemple 1: Condition Ternaire */}
            { displayArticle ? <p>true</p> : <p>false</p> }

            {/* Exemple 2: Condition Ternaire */}
            {
                displayArticle ? (
                    <div className="card">
                        <h2>Titre de l'article</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                            consectetur asperiores dicta iusto inventore eius corrupti eum! Iste
                            doloremque delectus voluptas quos. Et at consectetur similique
                            suscipit officiis cum asperiores? Sunt maxime repudiandae quaerat
                            debitis. Nobis asperiores, soluta perferendis voluptatibus vel
                            dignissimos optio ipsam repellat repellendus tenetur illo blanditiis,
                            modi placeat non consequuntur quibusdam dolorum, temporibus quod
                            suscipit.
                        </p>
                    </div>
                ) : <p>Aucun article</p>
            }



            {/* Exemple 1: Condition && */}
            { 100 > 30 && <p>100 et plus petit que 30</p> }



            {/* Exemple 1: if()-else() */}
            { content }
        </div>
    );
}

export default Articles;