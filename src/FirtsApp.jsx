

export const FirstApp = ({ title, subTitle, name }) => {


    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}



FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "No hay subtitulo"
}