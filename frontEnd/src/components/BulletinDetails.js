
function BulletinDetails({ bulletin, handleDeleteBulletin }){

    const { id, title, activity, starts, ends } = bulletin

    function handleDeleteClick() {
        const reqObj = {
            method: "DELETE"
        }
        fetch(`/bulletins/${id}`, reqObj )
        .then((res) => res.json())
        .then(handleDeleteBulletin(id))
    }

    return(
        <div>
            <h1>{title}</h1>
            <h2>{activity}</h2>
            <p>{starts}</p>
            <p>{ends}</p>
            <button className="delete_button" onClick={handleDeleteClick}>Delete Post</button>
        </div>
    )
}

export default BulletinDetails