//Hooks añaden cierta funcionalidad a los componentes de React
import { useState } from 'react';

export function TwitterFollowCard({name, email, initialValueFollowing ,isFollow}) {
    const [isFollowing, setIsFollowing] = useState(initialValueFollowing)
    const handleClick = () =>{
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing? 'Siguiendo':'Seguir';
    const modifiClassName = isFollowing? 'tw__followCard-button isFollowing':'tw__followCard-button isFollowing--no';
    //nunca modificar una prop
    return (
        <article className="tw__followCard">
            <header className="tw__followCard-header">
                <img 
                className="tw__followCard-img"
                src={`https://unavatar.io/twitter/${email}`} 
                alt="Avatar"/>
            </header>
            
            <div className="tw__followCard-info">
                <strong>{name}</strong>
                <span className="tw__followCard-email">@{email}</span>
            </div>

            <aside>
                <button className={modifiClassName} onClick={handleClick}>
                    <span className='textFollowing'>{text}</span>
                    <span className='stopFollowing'>dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}