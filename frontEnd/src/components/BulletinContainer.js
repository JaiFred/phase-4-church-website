
import react, { useState } from "react";
import { useEffect } from 'react'

import BulletinDetails from "./BulletinDetails";

function BulletinContainer({ showBulletins, setShowBulletins }){
    
    function handleDeleteBulletin(deletedID) {
        // console.log(deletedID)
        const updatedBulletinsArray = bulletins.filter(
          (bulletin) => bulletin.id !== deletedID
          
        );
        setBulletins(updatedBulletinsArray);
    }

    const bulletinList = showBulletins.map((bulletin) =>(
        <BulletinDetails key={bulletin.id} bulletin={bulletin} handleDeleteBulletin={handleDeleteBulletin}/>
    ))

    // function WatchContainer({ watches, handleDeleteWatch }){
    // const watchCardList = watches.map((watch)=>(
    //     <WatchCard key={watch.id} watch={watch} handleDeleteWatch={handleDeleteWatch}/>
    // ))
    
    const [bulletins, setBulletins] = useState([])

    



    // t.string :title
    // t.string :activity
    // t.datetime :starts
    // t.datetime :ends
    // t.belongs_to :admin, null: false, foreign_key: true
    // t.belongs_to :member, null: false, foreign_key: true

    const { id, title, activity, starts, ends } = showBulletins

    
    


    return (

        <div className="bulletin-container">
            {bulletinList}
            <div className="bulletin-list">
                <div className="first-bulletin">
                    <p>title: "Morning Prayer"</p>
                    <p>activity: "Regular Service"</p>
                    <p>starts: "8/30/2022", ends: "8/30/2022"</p>
                    <p>posted by BillTT</p>
                </div>
                <div className="second-bulletin">
                    <p>title: "Community Gardening"</p>
                    <p>activity: "Community Service"</p>
                    <p>starts: "9/1/2022", ends: "9/1/2022"</p>
                    <p>KellyCrane</p>
                </div>
                <div className="third-bulletin">
                    <p>Community Jungle Gym Fundraiser</p>
                    <p>activity: "Community Service"</p>
                    <p>from 2/14/2022 to 10/25/2022</p>
                    <p>posted by VanessAdler</p>
                </div>
                <div className="fourth-bulletin">
                    <p>Late Service</p>
                    <p>activity: "Regular Service"</p>
                    <p>from 8/26/2022 to 8/26/2022</p>
                    <p>posted by Frank</p>
                </div>
                <div className="fifth-bulletin">
                    <p>Weekend Potluck</p>
                    <p>activity: "Outside Service"</p>
                    <p>from 9/16/2022 to 9/16/2022</p>
                    <p>posted by VanessAdler</p>
                </div>
            </div>
        </div>
        
    )
}

export default BulletinContainer