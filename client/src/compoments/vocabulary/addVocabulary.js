import { Fragment, useState } from 'react';
import propsTypes from 'prop-types'

function AddVoca(props) {
    const addTitle = props.addVoca
    const [title, steTitle] = useState('')

    const changeTitle = event => {
        steTitle(event.target.value);
    }
    const addSingleVoca = (event) =>{
        event.preventDefault()
        if(title !== '') {
            addTitle(title)
            steTitle('')
        }

    }
    return (
        <Fragment>
            <form onSubmit={addSingleVoca}>
                <legend>Thêm Vocabualry</legend>

                <div className="form-group ds-ib ">
                    <input type="text"
                        className="form-control "
                        placeholder="Add Vocabulary"
                        name="title"
                        value={title}
                        onChange={changeTitle}
                    />
                    <button type="submit" className="btn btn-primary float-btn">ADD</button>
                </div>
            </form>
        </Fragment>
    );
}

AddVoca.propsTypes = {
    AddVoca: propsTypes.func.isRequired
}

export default AddVoca;
