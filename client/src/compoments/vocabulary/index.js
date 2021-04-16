import React, { Fragment, useEffect, useState } from "react";
import AddVoca from "./addVocabulary";
import VocaItem from "./vocaItem";
import axios from "axios"

function Vocabuary() {
    const [vocaState, setVocaState] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get('http://localhost:4000/post')
                setVocaState(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getPosts()
    }, [])
    const markcomplete = id => {
        const newVoca = vocaState.map(voca => {
            if (voca._id === id) voca.completed = !voca.completed
            return voca
        })
        setVocaState(newVoca)
    }
    const deleteVoca = async id => {
        try {
            await axios.delete(`http://localhost:4000/post/${id}`)
            const newvoca = vocaState.filter(voca => {
                return voca._id !== id
            })
            setVocaState(newvoca)
        } catch (error) {
            console.log(error.message);
        }
    }
    const addVoca = async title => {
       try {
           const res = await axios.post('http://localhost:4000/post', {
               title
           })
           const newPosts = [...vocaState, res.data]
           setVocaState(newPosts)
       } catch (error) {
           console.log(error.message);
       }
    }

    return (
        <Fragment>
            <div className="container">

                <ul className="list-group">

                    <AddVoca addVoca={addVoca}></AddVoca>
                    <legend>List Vocabulary</legend>
                    {vocaState.map(voca => {
                        return <VocaItem
                            vocaProps={voca}
                            key={voca._id}
                            markcomplete={markcomplete}
                            deleteVoca={deleteVoca}>
                        </VocaItem>
                    })}
                </ul>
            </div>
        </Fragment>
    );

}

export default Vocabuary;