import React from "react";

export default function Card({src, dp, name, username, likes, regular, dp2, darkMode}) {

    const[modal, setModal] = React.useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    
    return (
        <div className="card" onClick={toggleModal}>
            <img className="thumb" src={src} alt=""/>
            <div className="info">
                <img className="dp" src={dp} alt=""
                width="59px"/>
                <div className="user">
                    <span className="name">{name}</span>
                    <span className="username">@{username}</span>
                </div>
                <img className="like" src="like.png" alt=""/>
                <span className="likes">{likes}</span>
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="info-card">
                            <img className="dp2" src={dp2} alt=""/>
                            <span className="info-txt">Name: {name}</span>
                            <span className="info-txt">Likes: {likes}</span>
                        </div>
                        <img className="popup" src={regular} alt=""/>
                    </div>
                    <button className="close-modal" onClick={toggleModal}>X</button>
                </div>
            )}            
        </div>
    )
}