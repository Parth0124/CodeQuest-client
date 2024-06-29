import React from 'react';
import Question from './Question';

function Questionlist({ questionlist }) {

    return (
        <>
            {questionlist && questionlist.length > 0 ? (
                questionlist.map((question) => (
                    <Question question={question} key={question._id} />
                ))
            ) : (
                <p>No questions found.</p>
            )}
        </>
    );
}

export default Questionlist;
