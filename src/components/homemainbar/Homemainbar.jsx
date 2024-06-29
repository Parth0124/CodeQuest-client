import React, { useEffect } from 'react';
import './Homemainbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Questionlist from './Questionlist';
import { fetchallquestion } from '../../action/question';

function Homemainbar() {
    const user = useSelector((state) => state.currentuserreducer);
    const location = useLocation();
    const navigate = useNavigate();
    const questionlist = useSelector((state) => state.questionreducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchallquestion());
    }, [dispatch]);

    const checkauth = () => {
        if (user === null) {
            alert("Login or signup to ask a question");
            navigate("/Auth");
        } else {
            navigate("/Askquestion");
        }
    };

    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {location.pathname === "/" ? (
                    <h1>Top Questions</h1>
                ) : (
                    <h1>All Questions</h1>
                )}
                <button className="ask-btn" onClick={checkauth}>Ask Questions</button>
            </div>
            <div>
                {questionlist && questionlist.data ? (
                    <>
                        <p>{questionlist.data.length} questions</p>
                        <Questionlist questionlist={questionlist.data} />
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </div>
    );
}

export default Homemainbar;
