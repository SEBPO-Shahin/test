import React from 'react';

const CoronaUpdate = () =>{
    return(
        <div className="corona-status">
            <div className="corona-status__wrapper">
                <div className="sidebar-title">বিশ্বজুড়ে করোনা ভাইরাস</div>
                <div className="corona-status__wrapper--container">
                    <div className="column">
                        <ul>
                            <li>বাংলাদেশ</li>
                            <li>আক্রান্ত</li>
                            <li>12</li>
                            <li>সুস্থ্য</li>
                            <li>12</li>
                            <li>মৃত্</li>
                            <li>12</li>
                            <li>আইইডিসিআর</li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li>বিশ্বে</li>
                            <li>আক্রান্ত</li>
                            <li>12</li>
                            <li>সুস্থ্য</li>
                            <li>12</li>
                            <li>মৃত্</li>
                            <li>12</li>
                            <li> জনস হপকিন্স ইউনিভার্সিটি</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default CoronaUpdate;