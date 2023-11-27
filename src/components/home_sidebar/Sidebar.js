import React from 'react';
import ThumbnailList from './../home_category/Thumbnail';
import SingleFeature from './../home_category/SingleFeature';
// import DoubleFeature from './../home_category/DoubleFeature';
import Advertise from './../common/advertise/Advertise';
import AdsImage from './../../assets/images/ads/48_HPK_T6768_HP-LJ400_01_160x400.gif';
import AdsSmall from './../../assets/images/ads/43XX_BIAX_1HPGMIAA1_300x250_US_ENG_01.jpg';
import Latest from '../common/footer/bulletins/Latest';
import Popular from '../common/footer/bulletins/Popular';
import { Tabs, Tab } from 'react-bootstrap';

const Sidebar = () => {
    return(
        <div className="sidebar-coentent">
            <div className='page-sidebar'>
                        <div className='sidebar-coentent bulletins'>
                            <Tabs
                                defaultActiveKey="latest"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                                >
                                <Tab eventKey="latest" title="সর্বশেষ সংবাদ">
                                    <Latest />
                                </Tab>
                                <Tab eventKey="profile" title="জনপ্রিয় সংবাদ">
                                    <Popular />
                                </Tab>
                            </Tabs>
                        </div>
                        <div className='sidebar-videos'>
                            <iframe width="683" height="280" src="https://www.youtube.com/embed/EpLX09EwhcY" title="10 Creative Commercial Ad 2022।" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        
                    </div>
            <Advertise ads={AdsImage} />
            <ThumbnailList headline="জীবনযাপন" />
            <SingleFeature headline="অর্থনীতি" />
            {/* <Advertise ads={AdsSmall} /> */}
            {/* <DoubleFeature headline="বিজ্ঞান ও প্রযুক্তি" /> */}
        </div>
    );
}

export default Sidebar;