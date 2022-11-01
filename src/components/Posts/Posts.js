import {useState, useContext, useEffect} from 'react';
import { authContexte } from "../../Contexte/authContexte";
import { onSnapshot, collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const Posts = props => {

    const ctx = useContext(authContexte);
    const [posts, setPosts] = useState([{auteur: 'Un post', texte: 'Le texte du post'}]);
    const [texte, setTexte] = useState("");

    const SubmitForm = async(e) =>{
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'posts'), {
            auteur: ctx.user.email,
            texte: texte
        });
    };
    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
            setPosts(snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                };
            }));
        });
        return unsub;
    }, []);

    return (
        <section>
            <h1>Posts</h1>
            <form name="monForm" noValidate onSubmit={SubmitForm}>
                <div className="form-group">
                    <label htmlFor="text">Texte</label>
                    <textarea className="form-control" id="text" required value={texte} onChange={(e)=>setTexte(e.target.value)}></textarea>
                </div>
                <input className={(posts.texte === "") ? "btn btn-danger" : "btn btn-primary"} type="submit" value="Ajouter"/>
            </form>
            <ul>
                {posts.map(({texte, auteur}) => (
                    <li className="post" key={texte + auteur}>
                    <blockquote>
                        <p>{texte}</p>
                    </blockquote>
                    <p>{auteur}</p>
                </li>))}
            </ul>
        </section>
    );
};

export default Posts;
